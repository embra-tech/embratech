'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

// 2026-11-20: homepage project showcase; original code (CSS 3D, no WebGL, no extra libraries). Mobile first; the
// layout is chosen after the page has loaded:
//   - stack (phones, tablets, touch screens): stacking cards. One card per project (site screenshot + details);
//     scrolling slides the next card up over the previous one, which stays pinned just above it and shrinks and
//     dims a little, so a neat pile builds up. Nothing to swipe or learn. (Owner request: replaces a swipeable
//     figure-8 ring that could confuse visitors.)
//   - corridor (wide screens with a mouse): the Hyperiux-templates-style corridor; frames float in 3D space, the
//     camera walks past them as you scroll, a glass panel shows the active project, clicking a frame opens it
// SEO-safe: the server HTML (what Google and visitors without JavaScript get) lists every project in full, as real
// text and links: name, trade, city, description, results, case-study and live-site links.
const pad = (n) => String(n).padStart(2, '0');
const imgName = (src) => src.replace('/images/', '').replace(/\.(webp|png|jpe?g|avif)$/i, '');
const STEP = 14; // px: how far below the previous card each card stops, so the pile shows every card's top edge

function Shot({ base, alt, sizes }) {
  return (
    <picture>
      <source type="image/avif" srcSet={`${base}-720.avif 720w, ${base}-960.avif 960w`} sizes={sizes} />
      <source type="image/webp" srcSet={`${base}-720.webp 720w, ${base}-960.webp 960w`} sizes={sizes} />
      <img src={`${base}-720.jpg`} alt={alt} loading="lazy" decoding="async" width={960} height={600} />
    </picture>
  );
}

function Bar({ url, num }) {
  return (
    <span className="corridor-bar" aria-hidden="true">
      <span className="corridor-dots"><i /><i /><i /></span>
      <span className="corridor-url">{url}</span>
      {num && <span className="pstack-num">{num}</span>}
    </span>
  );
}

function Results({ results, markPlain }) {
  if (!results || results.length === 0) return null;
  return (
    <ul className="ci-results">
      {results.map((r) => (
        <li key={r.label} className={markPlain && !r.href ? 'ci-plain' : undefined}>
          {r.href ? <a href={r.href} target="_blank" rel="noopener noreferrer">{r.label} &#8599;</a> : r.label}
        </li>
      ))}
    </ul>
  );
}

function FlipLink({ href, children }) {
  return (
    <Link href={href} className="btn-flip btn-primary btn-small">
      <span className="btn-flip-inner">
        <span className="btn-flip-state">{children}</span>
        <span className="btn-flip-state" aria-hidden="true">{children}</span>
      </span>
    </Link>
  );
}

export default function ProjectCorridor({ sites, totalProjects }) {
  const rootRef = useRef(null);
  const stageRef = useRef(null);
  const stackRef = useRef(null);
  const [active, setActive] = useState(0);
  const [mode, setMode] = useState('none'); // none (server, bots) | stack | 3d
  const n = sites.length + 1; // the client sites plus the "see all projects" card
  const mode3d = mode === '3d';

  useEffect(() => {
    if (document.documentElement.hasAttribute('data-bot')) return undefined;
    const mq3d = window.matchMedia('(min-width: 1024px) and (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)');
    const apply = () => setMode(mq3d.matches ? '3d' : 'stack');
    apply();
    mq3d.addEventListener('change', apply);
    return () => mq3d.removeEventListener('change', apply);
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

  // Stacking cards. The pinning itself is CSS (position: sticky); this only measures how far each card has slid over
  // the one before (--in, 0 to 1) and how many cards lie on top of each card (--cov), which drive a small tilt, shrink
  // and dim. The pile is switched off (plain list) for reduced motion, or when a card is too tall for the screen.
  useEffect(() => {
    if (mode !== 'stack') return undefined;
    const rootEl = rootRef.current;
    const list = stackRef.current;
    if (!rootEl || !list) return undefined;
    const cards = Array.from(list.children);
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)');
    const header = document.querySelector('.site-header');
    let raf = 0;
    let on = false;
    let flat = false;
    const fit = () => {
      if (header) rootEl.style.setProperty('--cor-hdr', `${Math.round(header.getBoundingClientRect().height)}px`);
      // every card as tall as the tallest, so a card on top always hides the ones below it completely
      rootEl.style.removeProperty('--card-h');
      const tallest = Math.max(...cards.map((c) => c.firstElementChild.offsetHeight));
      rootEl.style.setProperty('--card-h', `${tallest}px`);
      flat = calm.matches || tallest > window.innerHeight - 24 - (cards.length - 1) * STEP;
      rootEl.classList.toggle('stack-flat', flat);
    };
    const measure = () => {
      raf = 0;
      if (flat) return;
      const p = cards.map(() => 0);
      for (let j = 1; j < cards.length; j += 1) {
        const prev = cards[j - 1];
        const h = prev.offsetHeight;
        const overlap = prev.getBoundingClientRect().top + h - cards[j].getBoundingClientRect().top;
        p[j] = Math.min(1, Math.max(0, overlap / Math.max(1, h - STEP)));
      }
      let cov = 0;
      for (let i = cards.length - 1; i >= 0; i -= 1) {
        cards[i].style.setProperty('--cov', cov.toFixed(3));
        cards[i].style.setProperty('--in', i === 0 ? '1' : p[i].toFixed(3));
        cov += p[i];
      }
    };
    const onScroll = () => { if (on && !raf) raf = requestAnimationFrame(measure); };
    const onResize = () => { fit(); onScroll(); };
    const io = new IntersectionObserver(([e]) => {
      on = e.isIntersecting;
      onScroll();
    }, { rootMargin: '150px 0px' });
    fit();
    measure();
    io.observe(rootEl);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize, { passive: true });
    calm.addEventListener('change', onResize);
    return () => {
      io.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      calm.removeEventListener('change', onResize);
      if (raf) cancelAnimationFrame(raf);
      rootEl.style.removeProperty('--cor-hdr');
      rootEl.style.removeProperty('--card-h');
      rootEl.classList.remove('stack-flat');
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

  if (mode === 'stack') {
    return (
      <div ref={rootRef} className="corridor is-live is-stack" role="region" aria-label="Client websites">
        <ol ref={stackRef} className="pstack">
          {sites.map((s, i) => (
            <li key={s.slug} className="pstack-card" style={{ '--i': i }}>
              <article className="pstack-inner">
                <Link href={`/portfolio/${s.slug}`} className="corridor-frame pstack-shot">
                  <Bar url={s.domain} num={`${pad(i + 1)} / ${pad(n)}`} />
                  <Shot base={`/images/optimized/${imgName(s.image)}`} alt={`${s.name} website, open the case study`} sizes="(max-width: 767px) 92vw, 50vw" />
                </Link>
                <div className="pstack-body">
                  <p className="ci-meta">{s.industry} &middot; {s.location}</p>
                  <h3>{s.name}</h3>
                  <ul className="ci-tags">{s.tags.map((t) => <li key={t}>{t}</li>)}</ul>
                  <p className="ci-desc">{s.desc}</p>
                  <Results results={s.results} markPlain />
                  <div className="ci-actions">
                    <FlipLink href={`/portfolio/${s.slug}`}>Read the case study &rarr;</FlipLink>
                    <a href={s.url} target="_blank" rel="noopener noreferrer" className="ci-visit">Visit live site &#8599;</a>
                  </div>
                </div>
              </article>
            </li>
          ))}
          <li className="pstack-card pstack-door" style={{ '--i': n - 1 }}>
            <article className="pstack-inner">
              <Link href="/portfolio" className="corridor-frame pstack-shot">
                <Bar url="embratechnologies.org/portfolio" num={`${pad(n)} / ${pad(n)}`} />
                <span className="corridor-door-face">
                  <span className="corridor-door-count">{totalProjects}</span>
                  <span className="corridor-door-text">live client projects</span>
                </span>
              </Link>
              <div className="pstack-body">
                <p className="ci-meta">Portfolio</p>
                <h3>See all {totalProjects} client projects</h3>
                <p className="ci-desc">Auto body, handyman, tree service, lawn care, home health care and more, each with a case study.</p>
                <div className="ci-actions">
                  <FlipLink href="/portfolio">Open the portfolio &rarr;</FlipLink>
                </div>
              </div>
            </article>
          </li>
        </ol>
      </div>
    );
  }

  const stateOf = (i) => (i === active ? 'active' : i < active ? 'past' : i === active + 1 ? 'next' : 'far');

  return (
    <div
      ref={rootRef}
      className={`corridor${mode3d ? ' is-live is-3d' : ''}`}
      style={{ '--n': n }}
      role="region"
      aria-roledescription="carousel"
      aria-label="Client websites"
    >
      <div ref={stageRef} className="corridor-stage">
        <div className="corridor-floor" aria-hidden="true"><div className="corridor-floor-grid" /></div>
        <div className="corridor-cam">
          <ol className="corridor-track">
            {sites.map((s, i) => (
              <li
                key={s.slug}
                className="corridor-item"
                data-state={stateOf(i)}
                style={{ '--i': i, '--side': i % 2 ? 1 : -1 }}
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${n}`}
              >
                <Link href={`/portfolio/${s.slug}`} className="corridor-frame">
                  <Bar url={s.domain} />
                  <Shot base={`/images/optimized/${imgName(s.image)}`} alt={`${s.name} website, open the case study`} sizes="(max-width: 1023px) 82vw, 46vw" />
                </Link>
                <p className="corridor-label" aria-hidden="true"><span>{pad(i + 1)}</span> {s.name}</p>
              </li>
            ))}
            <li
              className="corridor-item corridor-door"
              data-state={stateOf(n - 1)}
              style={{ '--i': n - 1, '--side': (n - 1) % 2 ? 1 : -1 }}
              aria-roledescription="slide"
              aria-label={`${n} of ${n}`}
            >
              <Link href="/portfolio" className="corridor-frame">
                <Bar url="embratechnologies.org/portfolio" />
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

        <div className="corridor-hud">
          <div className="corridor-progress" aria-hidden="true">
            <span>{pad(active + 1)}</span>
            <span className="corridor-progress-bar"><span style={{ transform: `scaleX(${(active + 1) / n})` }} /></span>
            <span>{pad(n)}</span>
          </div>
          <ol className="corridor-infos">
            {sites.map((s, i) => (
              <li key={s.slug} className="corridor-info" data-active={i === active ? '' : undefined}>
                <p className="ci-meta">{s.industry} &middot; {s.location}</p>
                <h3>{s.name}</h3>
                <ul className="ci-tags">{s.tags.map((t) => <li key={t}>{t}</li>)}</ul>
                <p className="ci-desc">{s.desc}</p>
                <Results results={s.results} />
                <div className="ci-actions">
                  <FlipLink href={`/portfolio/${s.slug}`}>Read the case study &rarr;</FlipLink>
                  <a href={s.url} target="_blank" rel="noopener noreferrer" className="ci-visit">Visit live site &#8599;</a>
                </div>
              </li>
            ))}
            <li className="corridor-info" data-active={active === n - 1 ? '' : undefined}>
              <p className="ci-meta">Portfolio</p>
              <h3>See all {totalProjects} client projects</h3>
              <p className="ci-desc">Auto body, handyman, tree service, lawn care, home health care and more, each with a case study.</p>
              <div className="ci-actions">
                <FlipLink href="/portfolio">Open the portfolio &rarr;</FlipLink>
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
