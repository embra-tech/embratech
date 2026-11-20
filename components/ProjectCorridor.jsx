'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

// 2026-11-20: homepage project showcase in the style of the Hyperiux templates "corridor"; original code (CSS 3D,
// no WebGL, no extra libraries). Mobile first; three modes, chosen after the page has loaded:
//   - ring (phones and tablets; owner request, after lorenzolottici.it/en/work on a phone): the site previews ride a
//     figure-8 loop in depth. The current one is front and centre, its neighbours peek in from the sides, the rest
//     swing round behind; a swipe drags the loop, letting go eases onto the nearest project and a light passes over
//     it. A planet rim, drifting cubes and a sliding floor grid sit behind. The current project's details are below.
//   - corridor (wide screens with a mouse): a scroll-driven corridor; frames float in 3D space, the camera walks past
//     them as you scroll, a glass panel shows the active project, and clicking a frame "steps inside" (case study)
//   - pin (reduced motion): the preview stays pinned while the project details scroll beneath it, no animation
// SEO-safe: every project (name, trade, city, description, links) is in the server HTML as real text and links.
// Without JavaScript and for bots every project's details are listed in full.
const pad = (n) => String(n).padStart(2, '0');
const imgName = (src) => src.replace('/images/', '').replace(/\.(webp|png|jpe?g|avif)$/i, '');
const mod = (a, n) => ((a % n) + n) % n;

// Figure-8 loop, in card widths: x = -(a sin 2t + c cos t), depth = b sin t, camera at depth `cam`. Depth ratios follow
// the reference; the sideways swing is narrower so that, mid-swipe, both cards stay partly on a phone screen.
const RING = { a: 0.62, b: 1.92, c: 0.18, cam: 4.83 };

export default function ProjectCorridor({ sites, totalProjects }) {
  const rootRef = useRef(null);
  const stageRef = useRef(null);
  const camRef = useRef(null);
  const trackRef = useRef(null);
  const infosRef = useRef(null);
  const [active, setActive] = useState(0);
  const [live, setLive] = useState(false);
  const [mode, setMode] = useState('none'); // none (server, bots) | ring | 3d | pin
  const n = sites.length + 1; // the client sites plus the "see all projects" door
  const mode3d = mode === '3d';

  useEffect(() => {
    const root = document.documentElement;
    if (root.hasAttribute('data-bot')) return undefined;
    setLive(true);
    const mq3d = window.matchMedia('(min-width: 1024px) and (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)');
    const mqMotion = window.matchMedia('(prefers-reduced-motion: no-preference)');
    const apply = () => setMode(mq3d.matches ? '3d' : mqMotion.matches ? 'ring' : 'pin');
    apply();
    mq3d.addEventListener('change', apply);
    mqMotion.addEventListener('change', apply);
    return () => {
      mq3d.removeEventListener('change', apply);
      mqMotion.removeEventListener('change', apply);
    };
  }, []);

  // Desktop corridor: scroll position moves the camera; the pointer adds a little parallax.
  useEffect(() => {
    if (!mode3d) return undefined;
    const rootEl = rootRef.current;
    const stage = stageRef.current;
    if (!rootEl || !stage) return undefined;
    let raf = 0;
    let on = false;
    let last = -1;
    let mx = 0;
    let my = 0;
    let tx = 0;
    let ty = 0;
    const tick = () => {
      const r = rootEl.getBoundingClientRect();
      const span = r.height - window.innerHeight;
      const p = span > 0 ? Math.min(1, Math.max(0, -r.top / span)) : 0;
      tx += (mx - tx) * 0.08;
      ty += (my - ty) * 0.08;
      const travel = p * (n - 1);
      stage.style.setProperty('--p', p.toFixed(4));
      stage.style.setProperty('--mx', tx.toFixed(3));
      stage.style.setProperty('--my', ty.toFixed(3));
      stage.style.setProperty('--floor', `${((travel * 1100) % 120).toFixed(1)}px`);
      const idx = Math.min(n - 1, Math.round(travel));
      if (idx !== last) {
        last = idx;
        setActive(idx);
      }
      raf = on ? requestAnimationFrame(tick) : 0;
    };
    const io = new IntersectionObserver(([e]) => {
      on = e.isIntersecting;
      if (on && !raf) raf = requestAnimationFrame(tick);
    }, { rootMargin: '200px 0px' });
    io.observe(rootEl);
    const onMove = (e) => {
      const r = stage.getBoundingClientRect();
      mx = (e.clientX - r.left) / r.width - 0.5;
      my = (e.clientY - r.top) / r.height - 0.5;
    };
    stage.addEventListener('pointermove', onMove, { passive: true });
    return () => {
      io.disconnect();
      if (raf) cancelAnimationFrame(raf);
      stage.removeEventListener('pointermove', onMove);
      ['--p', '--mx', '--my', '--floor'].forEach((k) => stage.style.removeProperty(k));
    };
  }, [mode3d, n]);

  // Phones and tablets: the figure-8 ring. Positions are written straight to the cards (no React re-render per frame);
  // the loop only runs while a card is moving or a finger is down, and only while the section is on screen.
  useEffect(() => {
    if (mode !== 'ring') return undefined;
    const rootEl = rootRef.current;
    const stage = stageRef.current;
    const track = trackRef.current;
    if (!rootEl || !stage || !track) return undefined;
    const items = Array.from(track.children);
    const N = items.length;
    const TAU = Math.PI * 2;
    const st = { s: 0, target: 0 };
    let cardW = 300;
    let cardH = 200;
    let raf = 0;
    let on = false;
    let last = 0;
    let lastIdx = -1;
    let settled = true;
    let pulseItem = null;
    let pulseTimer = 0;
    let dragTimer = 0;
    let press = null; // finger or mouse down, not yet a drag
    let drag = null; // horizontal drag in progress

    const size = () => {
      cardW = Math.min(stage.clientWidth * 0.84, 560);
      rootEl.style.setProperty('--ring-w', `${Math.round(cardW)}px`);
      cardH = items[0].offsetHeight || cardW * 0.7;
    };
    const place = () => {
      for (let i = 0; i < N; i += 1) {
        let d = mod(i - st.s, N);
        if (d > N / 2) d -= N;
        const ang = (d / N) * TAU;
        const th = Math.PI / 2 + ang;
        const x = -(RING.a * Math.sin(2 * th) + RING.c * Math.cos(th));
        const z = RING.b * Math.sin(th);
        const sc = (RING.cam - RING.b) / (RING.cam - z); // 1 at the front, smaller further back
        const px = x * sc * cardW * 0.95;
        const py = -(1 - sc) * cardH * 1.05; // further back sits higher, towards the horizon
        const rot = Math.max(-38, Math.min(38, x * 34));
        const focus = Math.exp(-(ang * ang) / 0.11);
        const dim = Math.min(0.86, (1 - focus) * 0.62 + (1 - sc) * 0.3);
        const el = items[i];
        el.style.transform = `translate3d(${px.toFixed(1)}px, ${py.toFixed(1)}px, 0) scale(${sc.toFixed(4)}) perspective(1100px) rotateY(${rot.toFixed(2)}deg)`;
        el.style.zIndex = String(Math.round(sc * 100));
        el.style.setProperty('--dim', dim.toFixed(3));
      }
      rootEl.style.setProperty('--rp', st.s.toFixed(4));
      rootEl.style.setProperty('--floor-x', `${(mod(st.s * -70, 120)).toFixed(1)}px`);
      const idx = mod(Math.round(st.s), N);
      if (idx !== lastIdx) {
        lastIdx = idx;
        setActive(idx);
      }
    };
    const pulse = () => {
      const el = items[mod(Math.round(st.s), N)];
      if (pulseItem) pulseItem.classList.remove('is-pulse');
      window.clearTimeout(pulseTimer);
      void el.offsetWidth; // restart the light pass if it is already running
      el.classList.add('is-pulse');
      pulseItem = el;
      pulseTimer = window.setTimeout(() => el.classList.remove('is-pulse'), 1000);
    };
    const tick = (now) => {
      const dt = Math.min(0.05, Math.max(0.001, (now - last) / 1000));
      last = now;
      if (!drag) {
        st.s += (st.target - st.s) * (1 - Math.exp(-dt * 6.5));
        if (Math.abs(st.target - st.s) < 0.0006) st.s = st.target;
      }
      place();
      const moving = !!drag || st.s !== st.target;
      if (moving) settled = false;
      else if (!settled) {
        settled = true;
        pulse();
      }
      raf = moving && on ? requestAnimationFrame(tick) : 0;
    };
    const kick = () => {
      if (!raf && on) {
        last = performance.now();
        raf = requestAnimationFrame(tick);
      }
    };
    const goTo = (i) => {
      const cur = Math.round(st.target);
      let d = mod(i - cur, N);
      if (d > N / 2) d -= N;
      st.target = cur + d;
      kick();
    };
    const step = (dir) => { st.target = Math.round(st.target) + dir; kick(); };

    // Swipe: the loop follows the finger; letting go carries on with the flick and settles on a project.
    const onDown = (e) => {
      if (!e.isPrimary || e.button !== 0) return;
      press = { x: e.clientX, y: e.clientY, s: st.s, id: e.pointerId, hist: [{ x: e.clientX, t: performance.now() }] };
    };
    const onMove = (e) => {
      if (!press || e.pointerId !== press.id) return;
      const dx = e.clientX - press.x;
      const dy = e.clientY - press.y;
      if (!drag) {
        if (Math.abs(dy) > 12 && Math.abs(dy) > Math.abs(dx)) { press = null; return; } // a page scroll
        if (Math.abs(dx) < 8) return;
        drag = press; // measured from where the finger went down, so a fast flick loses nothing
        rootEl.classList.add('ring-touched');
        try { stage.setPointerCapture(e.pointerId); } catch (err) { /* not capturable */ }
      }
      st.s = drag.s - (e.clientX - drag.x) / (cardW * 0.9);
      st.target = st.s;
      drag.hist.push({ x: e.clientX, t: performance.now() });
      if (drag.hist.length > 6) drag.hist.shift();
      kick();
    };
    const onUp = (e) => {
      if (!press || e.pointerId !== press.id) return;
      if (drag) {
        const h = drag.hist;
        const a = h[0];
        const b = h[h.length - 1];
        const v = b.t - a.t > 0 && performance.now() - b.t < 90 ? (b.x - a.x) / (b.t - a.t) : 0; // px per ms
        const flick = st.s - (v * 170) / (cardW * 0.9);
        const from = Math.round(drag.s);
        st.target = Math.max(from - 2, Math.min(from + 2, Math.round(flick)));
        stage.setAttribute('data-drag-click', ''); // the click that ends a drag opens nothing
        window.clearTimeout(dragTimer);
        dragTimer = window.setTimeout(() => stage.removeAttribute('data-drag-click'), 160);
        drag = null;
        kick();
      }
      press = null;
    };
    // Tapping a card that is not in front brings it to the front instead of opening it.
    const onClick = (e) => {
      if (stage.hasAttribute('data-drag-click')) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }
      const li = e.target instanceof Element ? e.target.closest('.corridor-item') : null;
      if (!li) return;
      const i = items.indexOf(li);
      if (i >= 0 && i !== mod(Math.round(st.s), N)) {
        e.preventDefault();
        e.stopPropagation();
        rootEl.classList.add('ring-touched');
        goTo(i);
      }
    };
    const onFocus = (e) => {
      const li = e.target instanceof Element ? e.target.closest('.corridor-item') : null;
      const i = li ? items.indexOf(li) : -1;
      if (i >= 0 && i !== mod(Math.round(st.target), N)) goTo(i);
    };
    const onKey = (e) => {
      if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
      e.preventDefault();
      step(e.key === 'ArrowRight' ? 1 : -1);
      const next = items[mod(Math.round(st.target), N)].querySelector('a');
      if (next) next.focus({ preventScroll: true });
    };
    const noDrag = (e) => e.preventDefault(); // no ghost image when dragging with a mouse

    const io = new IntersectionObserver(([e]) => {
      on = e.isIntersecting;
      if (on) kick();
    }, { rootMargin: '150px 0px' });
    const ro = new ResizeObserver(() => { size(); place(); });
    size();
    place();
    io.observe(rootEl);
    ro.observe(stage);
    stage.addEventListener('pointerdown', onDown);
    stage.addEventListener('pointermove', onMove);
    stage.addEventListener('pointerup', onUp);
    stage.addEventListener('pointercancel', onUp);
    stage.addEventListener('click', onClick, true);
    stage.addEventListener('focusin', onFocus);
    stage.addEventListener('keydown', onKey);
    stage.addEventListener('dragstart', noDrag);
    return () => {
      io.disconnect();
      ro.disconnect();
      if (raf) cancelAnimationFrame(raf);
      window.clearTimeout(pulseTimer);
      window.clearTimeout(dragTimer);
      stage.removeEventListener('pointerdown', onDown);
      stage.removeEventListener('pointermove', onMove);
      stage.removeEventListener('pointerup', onUp);
      stage.removeEventListener('pointercancel', onUp);
      stage.removeEventListener('click', onClick, true);
      stage.removeEventListener('focusin', onFocus);
      stage.removeEventListener('keydown', onKey);
      stage.removeEventListener('dragstart', noDrag);
      stage.removeAttribute('data-drag-click');
      items.forEach((el) => {
        el.style.removeProperty('transform');
        el.style.removeProperty('z-index');
        el.style.removeProperty('--dim');
        el.classList.remove('is-pulse');
      });
      ['--rp', '--floor-x', '--ring-w'].forEach((k) => rootEl.style.removeProperty(k));
      rootEl.classList.remove('ring-touched');
    };
  }, [mode]);

  // Reduced motion: the pinned preview shows the project whose details are being read (the last card whose top has
  // passed a reading line just under the preview, or mid-screen when they sit side by side).
  useEffect(() => {
    if (mode !== 'pin') return undefined;
    const rootEl = rootRef.current;
    const cam = camRef.current;
    const list = infosRef.current;
    if (!rootEl || !cam || !list) return undefined;
    let raf = 0;
    let on = false;
    let last = -1;
    // The preview pins just under the header when the header is showing (it hides while scrolling down).
    const header = document.querySelector('.site-header');
    const fitHeader = () => {
      if (header) rootEl.style.setProperty('--cor-hdr', `${Math.round(header.getBoundingClientRect().height)}px`);
    };
    fitHeader();
    const measure = () => {
      raf = 0;
      const c = cam.getBoundingClientRect();
      const vh = window.innerHeight;
      const sideBySide = c.right <= list.getBoundingClientRect().left + 1;
      const line = sideBySide ? vh * 0.5 : c.bottom + Math.max(0, vh - c.bottom) * 0.35;
      let idx = 0;
      const cards = list.children;
      for (let i = 0; i < cards.length; i += 1) {
        if (cards[i].getBoundingClientRect().top <= line) idx = i;
        else break;
      }
      if (idx !== last) {
        last = idx;
        setActive(idx);
      }
    };
    const onScroll = () => { if (on && !raf) raf = requestAnimationFrame(measure); };
    const onResize = () => { fitHeader(); onScroll(); };
    const io = new IntersectionObserver(([e]) => {
      on = e.isIntersecting;
      onScroll();
    }, { rootMargin: '100px 0px' });
    io.observe(rootEl);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      if (raf) cancelAnimationFrame(raf);
      rootEl.style.removeProperty('--cor-hdr');
    };
  }, [mode]);

  // Desktop corridor arrows: scroll to the next or previous stop.
  const go = (dir) => {
    const target = Math.min(n - 1, Math.max(0, active + dir));
    const r = rootRef.current;
    const span = r.offsetHeight - window.innerHeight;
    const y = r.getBoundingClientRect().top + window.scrollY + span * (target / (n - 1));
    if (window.__lenis) window.__lenis.scrollTo(y, { duration: 1.1 });
    else window.scrollTo({ top: y, behavior: 'smooth' });
  };

  const stateOf = (i) => (i === active ? 'active' : i < active ? 'past' : i === active + 1 ? 'next' : 'far');
  const ring = mode === 'ring';
  const modeClass = ring ? ' is-ring' : mode3d ? ' is-3d' : mode === 'pin' ? ' is-pin' : '';

  return (
    <div
      ref={rootRef}
      className={`corridor${live ? ' is-live' : ''}${modeClass}`}
      style={{ '--n': n, '--a': active }}
      role="region"
      aria-roledescription="carousel"
      aria-label="Client websites"
    >
      <div ref={stageRef} className="corridor-stage">
        {ring && (
          <div className="corridor-sky" aria-hidden="true">
            <span className="corridor-orb" />
            <i /><i /><i /><i /><i />
          </div>
        )}
        <div className="corridor-floor" aria-hidden="true"><div className="corridor-floor-grid" /></div>
        <div ref={camRef} className="corridor-cam">
          <ol ref={trackRef} className="corridor-track">
            {sites.map((s, i) => {
              const base = `/images/optimized/${imgName(s.image)}`;
              return (
                <li
                  key={s.slug}
                  className="corridor-item"
                  data-state={stateOf(i)}
                  data-no-transition={ring && i !== active ? '' : undefined}
                  style={{ '--i': i, '--side': i % 2 ? 1 : -1 }}
                  aria-roledescription="slide"
                  aria-label={`${i + 1} of ${n}`}
                >
                  <Link href={`/portfolio/${s.slug}`} className="corridor-frame">
                    <span className="corridor-bar" aria-hidden="true">
                      <span className="corridor-dots"><i /><i /><i /></span>
                      <span className="corridor-url">{s.domain}</span>
                    </span>
                    <picture>
                      <source type="image/avif" srcSet={`${base}-720.avif 720w, ${base}-960.avif 960w`} sizes="(max-width: 1023px) 82vw, 46vw" />
                      <source type="image/webp" srcSet={`${base}-720.webp 720w, ${base}-960.webp 960w`} sizes="(max-width: 1023px) 82vw, 46vw" />
                      <img src={`${base}-720.jpg`} alt={`${s.name} website, open the case study`} loading="lazy" decoding="async" width={960} height={600} />
                    </picture>
                  </Link>
                  <p className="corridor-label" aria-hidden="true"><span>{pad(i + 1)}</span> {s.name}</p>
                </li>
              );
            })}
            <li
              className="corridor-item corridor-door"
              data-state={stateOf(n - 1)}
              data-no-transition={ring && active !== n - 1 ? '' : undefined}
              style={{ '--i': n - 1, '--side': (n - 1) % 2 ? 1 : -1 }}
              aria-roledescription="slide"
              aria-label={`${n} of ${n}`}
            >
              <Link href="/portfolio" className="corridor-frame">
                <span className="corridor-bar" aria-hidden="true">
                  <span className="corridor-dots"><i /><i /><i /></span>
                  <span className="corridor-url">embratechnologies.org/portfolio</span>
                </span>
                <span className="corridor-door-face">
                  <span className="corridor-door-count">{totalProjects}</span>
                  <span className="corridor-door-text">live client projects</span>
                  <span className="corridor-door-cta">See the full portfolio &rarr;</span>
                </span>
              </Link>
              <p className="corridor-label" aria-hidden="true"><span>{pad(n)}</span> Full portfolio</p>
            </li>
          </ol>
        </div>
        {ring && (
          <div className="corridor-ringui" aria-hidden="true">
            <span className="corridor-swipe">Swipe</span>
            <span className="corridor-count"><b>{pad(active + 1)}</b> / {pad(n)}</span>
          </div>
        )}

        <div className="corridor-hud">
          <div className="corridor-progress" aria-hidden="true">
            <span>{pad(active + 1)}</span>
            <span className="corridor-progress-bar"><span style={{ transform: `scaleX(${(active + 1) / n})` }} /></span>
            <span>{pad(n)}</span>
          </div>
          <ol ref={infosRef} className="corridor-infos">
            {sites.map((s, i) => (
              <li key={s.slug} className="corridor-info" data-active={i === active ? '' : undefined}>
                <p className="ci-meta">{s.industry} &middot; {s.location}</p>
                <h3>{s.name}</h3>
                <ul className="ci-tags">{s.tags.map((t) => <li key={t}>{t}</li>)}</ul>
                <p className="ci-desc">{s.desc}</p>
                {s.results && s.results.length > 0 && (
                  <ul className="ci-results">
                    {s.results.map((r) => (
                      <li key={r.label}>
                        {r.href ? <a href={r.href} target="_blank" rel="noopener noreferrer">{r.label} &#8599;</a> : r.label}
                      </li>
                    ))}
                  </ul>
                )}
                <div className="ci-actions">
                  <Link href={`/portfolio/${s.slug}`} className="btn-flip btn-primary btn-small">
                    <span className="btn-flip-inner">
                      <span className="btn-flip-state">Read the case study &rarr;</span>
                      <span className="btn-flip-state" aria-hidden="true">Read the case study &rarr;</span>
                    </span>
                  </Link>
                  <a href={s.url} target="_blank" rel="noopener noreferrer" className="ci-visit">Visit live site &#8599;</a>
                </div>
              </li>
            ))}
            <li className="corridor-info" data-active={active === n - 1 ? '' : undefined}>
              <p className="ci-meta">Portfolio</p>
              <h3>See all {totalProjects} client projects</h3>
              <p className="ci-desc">Auto body, handyman, tree service, lawn care, home health care and more, each with a case study.</p>
              <div className="ci-actions">
                <Link href="/portfolio" className="btn-flip btn-primary btn-small">
                  <span className="btn-flip-inner">
                    <span className="btn-flip-state">Open the portfolio &rarr;</span>
                    <span className="btn-flip-state" aria-hidden="true">Open the portfolio &rarr;</span>
                  </span>
                </Link>
              </div>
            </li>
          </ol>
          {mode3d && (
            <div className="corridor-controls">
              <button type="button" onClick={() => go(-1)} disabled={active === 0} aria-label="Previous project">&larr;</button>
              <p className="corridor-hint">Scroll to walk through &middot; click a site to step inside</p>
              <button type="button" onClick={() => go(1)} disabled={active === n - 1} aria-label="Next project">&rarr;</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
