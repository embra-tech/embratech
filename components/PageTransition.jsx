'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

// 2026-11-20: depth shift when opening a case study (idea: Hyperiux "Depth Shift Transition"); original code.
// The current page pulls back in 3D, the case study swings in. Only links to /portfolio/<project> use it.
// (The chess-grid transition on every other link was removed the same day at the owner's request.)
// SEO and speed safeguards:
//   - only for clicks on links inside the site; the first page load (what Google and PageSpeed measure) never animates
//   - nothing for bots, reduced-motion visitors, new-tab/modifier clicks, downloads, hash links or other sites
//   - links stay real links; this only delays the in-app navigation by under half a second
const DEPTH_OUT_MS = 420;
const REVEAL_MS = 560;
const MAX_WAIT_MS = 6000;
const CASE_STUDY = /^\/portfolio\/[^/]+\/?$/;

function shouldHandle(e) {
  if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return null;
  const a = e.target instanceof Element ? e.target.closest('a[href]') : null;
  if (!a) return null;
  if (a.target && a.target !== '_self') return null;
  if (a.hasAttribute('download') || a.closest('[data-no-transition]')) return null; // a link or its container can opt out
  if (a.closest('[data-drag-click]')) return null; // a drag on the project strip, not a click
  let url;
  try { url = new URL(a.href, window.location.href); } catch (err) { return null; }
  if (url.origin !== window.location.origin) return null;
  if (!CASE_STUDY.test(url.pathname)) return null; // only case studies get the depth shift
  if (url.pathname === window.location.pathname) return null;
  return url;
}

export default function PageTransition() {
  const router = useRouter();
  const pathname = usePathname();
  const [phase, setPhase] = useState('idle'); // idle | cover | covered | reveal
  const st = useRef({ busy: false, startedAt: 0, fromPath: null, timers: [] });

  const later = (fn, ms) => { const id = setTimeout(fn, ms); st.current.timers.push(id); return id; };

  // Start: intercept clicks on case-study links.
  useEffect(() => {
    const root = document.documentElement;
    if (root.hasAttribute('data-bot')) return undefined;
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)');

    const onClick = (e) => {
      if (calm.matches) return;
      const url = shouldHandle(e);
      if (!url) return;
      e.preventDefault(); // Next's <Link> skips its own navigation when the click is already handled
      if (st.current.busy) return;
      st.current.busy = true;
      st.current.startedAt = performance.now();
      st.current.fromPath = window.location.pathname;
      const main = document.getElementById('main');
      if (main) {
        main.style.transformOrigin = `50% ${Math.round(window.scrollY + window.innerHeight / 2)}px`;
        main.classList.add('pt-depth-out');
      }
      router.prefetch(url.pathname + url.search);
      setPhase('cover');
      later(() => {
        setPhase('covered');
        router.push(url.pathname + url.search + url.hash);
      }, DEPTH_OUT_MS);
      // Safety net: never leave the page hidden.
      later(() => { if (st.current.busy) setPhase('reveal'); }, DEPTH_OUT_MS + MAX_WAIT_MS);
    };

    document.addEventListener('click', onClick, true);
    const state = st.current;
    return () => {
      document.removeEventListener('click', onClick, true);
      state.timers.forEach(clearTimeout);
    };
  }, [router]);

  // The case study has rendered: swing it in.
  useEffect(() => {
    if (!st.current.busy || pathname === st.current.fromPath) return;
    const wait = Math.max(0, DEPTH_OUT_MS - (performance.now() - st.current.startedAt));
    later(() => setPhase('reveal'), wait + 40);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    if (phase !== 'reveal') return;
    const main = document.getElementById('main');
    if (main && main.classList.contains('pt-depth-out')) {
      main.classList.remove('pt-depth-out');
      main.style.transformOrigin = `50% ${Math.round(window.scrollY + window.innerHeight / 2)}px`;
      main.classList.add('pt-depth-in');
    }
    later(() => {
      if (main) {
        main.classList.remove('pt-depth-in', 'pt-depth-out');
        main.style.transformOrigin = '';
      }
      st.current.busy = false;
      setPhase('idle');
    }, REVEAL_MS + 80);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  if (phase === 'idle') return null;
  return <div className="pt-overlay pt-depth" aria-hidden="true" />;
}
