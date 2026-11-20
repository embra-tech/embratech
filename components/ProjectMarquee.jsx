'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { CLIENTS } from '../lib/proof';

// 2026-11-20: drifting strip of real client websites (idea: Hyperiux "Draggable Marquee"); original code.
// SEO-safe: the server HTML has each project once, as a normal link to its case study (more internal links to the
// case studies Google has not indexed yet). The second copy needed for the endless loop is added in the browser
// only, hidden from screen readers and keyboard. Bots and no-JS visitors get a plain sideways-scrolling row.
// Speed: screenshots are small (480px), lazy-loaded; the animation only runs while the strip is on screen and is
// a single transform per frame. Reduced-motion visitors get no drift (dragging still works).
const ITEMS = [
  { slug: 'tuxford-collision', image: 'tuxford', trade: 'Auto body & collision' },
  { slug: 'alaska-handyman-services', image: 'alaskahandymanservices', trade: 'Handyman & home repair' },
  { slug: 'sky-high-tree', image: 'skyhightreeservice', trade: 'Tree service' },
  { slug: 'pnd-laundry', image: 'pndlaundry', trade: 'Laundry pickup & local SEO' },
  { slug: 'jcp-lawn-service', image: 'jcplawn', trade: 'Lawn care & landscaping' },
  { slug: 'royal-home-health-care', image: 'royalcare', trade: 'Home health care' },
  { slug: 'vvasquez-handyman', image: 'vvasquez', trade: 'Lawn care & concrete' },
  { slug: 'alaska-fast-fix', image: 'alaskahandyman', trade: 'Handyman services' },
  { slug: 'bestbreaks', image: 'bestbreaks', trade: 'Travel & stays' },
];

function Card({ item, copy }) {
  const c = CLIENTS[item.slug];
  if (!c) return null;
  const base = `/images/optimized/${item.image}`;
  return (
    <li className="pm-item" aria-hidden={copy ? 'true' : undefined}>
      <Link href={`/portfolio/${item.slug}`} className="pm-card" tabIndex={copy ? -1 : undefined} draggable={false}>
        <span className="pm-shot">
          <picture>
            <source type="image/avif" srcSet={`${base}-480.avif`} />
            <source type="image/webp" srcSet={`${base}-480.webp`} />
            <img
              src={`${base}-480.jpg`}
              alt={copy ? '' : `${c.name} website screenshot`}
              loading="lazy"
              decoding="async"
              width={480}
              height={300}
              draggable={false}
            />
          </picture>
        </span>
        <span className="pm-meta">
          <strong>{c.name}</strong>
          <span>{item.trade} &middot; {c.where}</span>
        </span>
      </Link>
    </li>
  );
}

export default function ProjectMarquee({
  title = 'Recent Client Projects',
  intro = 'Real businesses we have designed websites or run local SEO for. Open any project for the full case study.',
}) {
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const [live, setLive] = useState(false);

  useEffect(() => {
    if (document.documentElement.hasAttribute('data-bot')) return;
    setLive(true);
  }, []);

  useEffect(() => {
    if (!live) return undefined;
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return undefined;

    const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const SPEED = 26; // px per second
    let x = 0;
    let v = 0;
    let half = track.scrollWidth / 2;
    let last = performance.now();
    let raf = 0;
    let onScreen = false;
    let hover = false;
    let focus = false;
    let drag = null;
    let dragged = false;

    const wrap = () => {
      if (half <= 0) return;
      while (x <= -half) x += half;
      while (x > 0) x -= half;
    };
    const paint = () => {
      wrap();
      track.style.transform = `translate3d(${x.toFixed(2)}px,0,0)`;
    };
    const tick = (now) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      if (!drag) {
        if (Math.abs(v) > 8) {
          x += v * dt;
          v *= Math.pow(0.03, dt); // glide to a stop after a throw
        } else {
          v = 0;
          if (!calm && !hover && !focus && !document.hidden) x -= SPEED * dt;
        }
      }
      paint();
      raf = onScreen ? requestAnimationFrame(tick) : 0;
    };
    const start = () => {
      if (raf || !onScreen) return;
      last = performance.now();
      raf = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(([entry]) => {
      onScreen = entry.isIntersecting;
      start();
    }, { rootMargin: '120px 0px' });
    io.observe(viewport);
    const ro = new ResizeObserver(() => { half = track.scrollWidth / 2; paint(); });
    ro.observe(track);

    const onDown = (e) => {
      if (e.pointerType === 'mouse' && e.button !== 0) return;
      drag = { id: e.pointerId, x0: e.clientX, y0: e.clientY, lastX: e.clientX, t: performance.now(), started: false };
      dragged = false;
      v = 0;
    };
    const onMove = (e) => {
      if (!drag || e.pointerId !== drag.id) return;
      const dx = e.clientX - drag.x0;
      if (!drag.started) {
        if (Math.abs(dx) < 6) return;
        if (e.pointerType !== 'mouse' && Math.abs(e.clientY - drag.y0) > Math.abs(dx)) { drag = null; return; }
        drag.started = true;
        dragged = true;
        try { viewport.setPointerCapture(e.pointerId); } catch (err) { /* ignore */ }
        viewport.classList.add('is-dragging');
      }
      const now = performance.now();
      const step = e.clientX - drag.lastX;
      v = (step / Math.max(8, now - drag.t)) * 1000;
      drag.lastX = e.clientX;
      drag.t = now;
      x += step;
      paint();
    };
    const onUp = (e) => {
      if (!drag || e.pointerId !== drag.id) return;
      if (performance.now() - drag.t > 90) v = 0;
      if (drag.started) {
        // tells the page transition (components/PageTransition.jsx) that the coming click ends a drag
        viewport.setAttribute('data-drag-click', '');
        setTimeout(() => viewport.removeAttribute('data-drag-click'), 120);
      }
      drag = null;
      viewport.classList.remove('is-dragging');
    };
    // A drag must not open a case study by accident.
    const onClick = (e) => {
      if (!dragged) return;
      e.preventDefault();
      e.stopPropagation();
      dragged = false;
    };
    const onWheel = (e) => {
      if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return; // vertical scrolling stays with the page
      e.preventDefault();
      x -= e.deltaX;
      v = 0;
      paint();
    };
    const onEnter = (e) => { if (e.pointerType === 'mouse') hover = true; };
    const onLeave = () => { hover = false; };
    // Keyboard: pause, and bring the focused card into view.
    const onFocusIn = (e) => {
      focus = true;
      const li = e.target.closest('.pm-item');
      if (!li) return;
      const left = li.offsetLeft + x;
      const right = left + li.offsetWidth;
      if (left < 0 || right > viewport.clientWidth) {
        x = -(li.offsetLeft - 24);
        v = 0;
        paint();
      }
    };
    const onFocusOut = () => { focus = false; };

    viewport.addEventListener('pointerdown', onDown);
    viewport.addEventListener('pointermove', onMove);
    viewport.addEventListener('pointerup', onUp);
    viewport.addEventListener('pointercancel', onUp);
    viewport.addEventListener('click', onClick, true);
    viewport.addEventListener('wheel', onWheel, { passive: false });
    viewport.addEventListener('pointerenter', onEnter);
    viewport.addEventListener('pointerleave', onLeave);
    viewport.addEventListener('focusin', onFocusIn);
    viewport.addEventListener('focusout', onFocusOut);

    return () => {
      if (raf) cancelAnimationFrame(raf);
      io.disconnect();
      ro.disconnect();
      viewport.removeEventListener('pointerdown', onDown);
      viewport.removeEventListener('pointermove', onMove);
      viewport.removeEventListener('pointerup', onUp);
      viewport.removeEventListener('pointercancel', onUp);
      viewport.removeEventListener('click', onClick, true);
      viewport.removeEventListener('wheel', onWheel);
      viewport.removeEventListener('pointerenter', onEnter);
      viewport.removeEventListener('pointerleave', onLeave);
      viewport.removeEventListener('focusin', onFocusIn);
      viewport.removeEventListener('focusout', onFocusOut);
    };
  }, [live]);

  return (
    <section className="proj-marquee" aria-labelledby="pm-title">
      <div className="wrap">
        <div className="section-head" style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div className="section-badge"><span className="badge-pill">Our Work</span><span className="badge-text">Live Client Sites</span></div>
          <h2 id="pm-title">{title}</h2>
          <p>{intro}</p>
        </div>
      </div>
      <div ref={viewportRef} className={`pm-viewport${live ? ' is-live' : ''}`}>
        <ul ref={trackRef} className="pm-track">
          {ITEMS.map((item) => <Card key={item.slug} item={item} />)}
          {live && ITEMS.map((item) => <Card key={`${item.slug}-copy`} item={item} copy />)}
        </ul>
      </div>
      <p className="pm-hint">
        <span className="pm-hint-drag" aria-hidden="true">Drag to browse &middot; </span>
        <Link href="/portfolio">See all projects and results &rarr;</Link>
      </p>
    </section>
  );
}
