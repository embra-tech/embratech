'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

// 2026-11-20 premium effects round. Ideas from the Hyperiux Vault catalogue (spotlight cards, tilt cards,
// magnetic buttons, cursor light, route sweep); original code, no extra libraries.
// Scope: every target must sit inside .page-shell (inner pages) or .home-shell (homepage, added 2026-11-20 on request).
// SEO and speed safeguards:
//   - nothing runs for bots (html[data-bot]), reduced-motion users or touch screens
//   - one passive pointermove listener, throttled to one update per animation frame
//   - it only sets CSS custom properties and classes; no content, links or layout change
const SPOT = '.feature-card, .factor-card, .step-card, .niche-card, .service-detail, .faq-item, .how-step, .cs-related-card, .pricing-card, .work-card, .seo-result, .stat-card, .cs-glance > div, .process-card, .why-card, .corridor-infos';
const TILT = '.project-shot, .site-preview';
const MAGNET = '.btn-flip';
const GLOW = '.page-hero, .final-cta';
const SCOPE = '.page-shell, .home-shell';

function pick(target, selector) {
  if (!target) return null;
  const el = target.closest(selector);
  return el && el.closest(SCOPE) ? el : null;
}

export default function PremiumFx() {
  const pathname = usePathname();
  const sweepRef = useRef(null);
  const firstRoute = useRef(true);

  // Route sweep: a thin light line across the top when moving between inner pages.
  useEffect(() => {
    if (firstRoute.current) {
      firstRoute.current = false;
      return;
    }
    const el = sweepRef.current;
    const root = document.documentElement;
    if (!el || pathname === '/' || root.hasAttribute('data-bot')) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    el.classList.remove('is-on');
    void el.offsetWidth; // restart the animation
    el.classList.add('is-on');
  }, [pathname]);

  // Pointer effects: spotlight cards, tilt + glare on screenshots, magnetic buttons, cursor light.
  useEffect(() => {
    const root = document.documentElement;
    if (root.hasAttribute('data-bot')) return undefined;
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const cur = { spot: null, tilt: null, magnet: null, glow: null };
    const offset = { x: 0, y: 0 }; // current magnetic offset, so the button's moving box doesn't feed back
    const timers = new Map();
    let ev = null;
    let raf = 0;

    const enter = {
      spot: (el) => el.classList.add('fx-lit'),
      tilt: (el) => {
        clearTimeout(timers.get(el));
        el.classList.remove('fx-tilt-out');
        el.classList.add('fx-tilt');
      },
      magnet: () => { offset.x = 0; offset.y = 0; },
      glow: (el) => el.classList.add('fx-glow'),
    };
    const leave = {
      spot: (el) => el.classList.remove('fx-lit'),
      tilt: (el) => {
        el.style.setProperty('--rx', '0deg');
        el.style.setProperty('--ry', '0deg');
        el.classList.add('fx-tilt-out');
        timers.set(el, setTimeout(() => el.classList.remove('fx-tilt', 'fx-tilt-out'), 500));
      },
      magnet: (el) => {
        el.style.setProperty('--tx', '0px');
        el.style.setProperty('--ty', '0px');
        offset.x = 0;
        offset.y = 0;
      },
      glow: (el) => el.classList.remove('fx-glow'),
    };

    const update = () => {
      raf = 0;
      const e = ev;
      if (!e) return;
      const t = e.target instanceof Element ? e.target : null;
      const next = {
        spot: pick(t, SPOT),
        tilt: pick(t, TILT),
        magnet: pick(t, MAGNET),
        glow: pick(t, GLOW),
      };
      Object.keys(cur).forEach((k) => {
        if (next[k] === cur[k]) return;
        if (cur[k]) leave[k](cur[k]);
        cur[k] = next[k];
        if (cur[k]) enter[k](cur[k]);
      });
      const x = e.clientX;
      const y = e.clientY;
      if (cur.spot) {
        const r = cur.spot.getBoundingClientRect();
        cur.spot.style.setProperty('--mx', `${Math.round(x - r.left)}px`);
        cur.spot.style.setProperty('--my', `${Math.round(y - r.top)}px`);
      }
      if (cur.glow) {
        const r = cur.glow.getBoundingClientRect();
        cur.glow.style.setProperty('--gx', `${Math.round(x - r.left)}px`);
        cur.glow.style.setProperty('--gy', `${Math.round(y - r.top)}px`);
      }
      if (cur.tilt) {
        const r = cur.tilt.getBoundingClientRect();
        const px = Math.min(Math.max((x - r.left) / r.width, 0), 1) - 0.5;
        const py = Math.min(Math.max((y - r.top) / r.height, 0), 1) - 0.5;
        cur.tilt.style.setProperty('--rx', `${(-py * 6).toFixed(2)}deg`);
        cur.tilt.style.setProperty('--ry', `${(px * 8).toFixed(2)}deg`);
        cur.tilt.style.setProperty('--lx', `${((px + 0.5) * 100).toFixed(1)}%`);
        cur.tilt.style.setProperty('--ly', `${((py + 0.5) * 100).toFixed(1)}%`);
      }
      if (cur.magnet) {
        const r = cur.magnet.getBoundingClientRect();
        const cx = r.left - offset.x + r.width / 2;
        const cy = r.top - offset.y + r.height / 2;
        offset.x = Math.max(-8, Math.min(8, (x - cx) * 0.16));
        offset.y = Math.max(-5, Math.min(5, (y - cy) * 0.28));
        cur.magnet.style.setProperty('--tx', `${offset.x.toFixed(1)}px`);
        cur.magnet.style.setProperty('--ty', `${offset.y.toFixed(1)}px`);
      }
    };

    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    const onMove = (e) => {
      ev = e;
      schedule();
    };
    const onOut = (e) => {
      if (e.relatedTarget) return; // still inside the page
      ev = { target: null, clientX: 0, clientY: 0 };
      schedule();
    };

    document.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('pointerout', onOut, { passive: true });
    return () => {
      document.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerout', onOut);
      if (raf) cancelAnimationFrame(raf);
      timers.forEach((id) => clearTimeout(id));
      Object.keys(cur).forEach((k) => cur[k] && leave[k](cur[k]));
    };
  }, []);

  return <div ref={sweepRef} className="route-sweep" aria-hidden="true" />;
}
