'use client';

import { useEffect, useRef, useState } from 'react';

// 2026-11-20: digits roll up on reels when the number scrolls into view (idea: Hyperiux "Number Counter").
// SEO-safe: the server HTML (and what bots, reduced-motion users and no-JS visitors get) is the plain number.
// While the reels show, the real number stays in the page for screen readers (.sr-only); the reels are aria-hidden.
// When the roll ends, the plain number is rendered again.
const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

export default function RollingNumber({ value, className = '' }) {
  const ref = useRef(null);
  const [mode, setMode] = useState('static'); // static | ready | run

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') return undefined;
    if (document.documentElement.hasAttribute('data-bot')) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    // Already on screen at load: keep it still (no flash of zeros).
    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight && r.bottom > 0) return undefined;

    let done;
    setMode('ready');
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      io.disconnect();
      setMode('run');
      done = setTimeout(() => setMode('static'), 1900);
    }, { threshold: 0.75 });
    io.observe(el);
    return () => {
      io.disconnect();
      clearTimeout(done);
    };
  }, []);

  if (mode === 'static') {
    return <span ref={ref} className={className}>{value}</span>;
  }

  let n = 0;
  return (
    <span ref={ref} className={`${className} roll${mode === 'run' ? ' is-run' : ''}`}>
      <span className="sr-only">{value}</span>
      <span className="roll-track" aria-hidden="true">
        {String(value).split('').map((ch, i) => {
          if (!/\d/.test(ch)) return <span key={i} className="roll-sep">{ch}</span>;
          n += 1;
          return (
            <span key={i} className="roll-digit" style={{ '--d': Number(ch), '--n': n }}>
              <span className="roll-strip">
                {DIGITS.map((d) => <span key={d}>{d}</span>)}
              </span>
            </span>
          );
        })}
      </span>
    </span>
  );
}
