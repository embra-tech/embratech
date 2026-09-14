'use client';

import { useEffect, useRef, useState } from 'react';
import { THEMES, useTheme } from './ThemeProvider';

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);

  useEffect(() => {
    const onDocClick = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('click', onDocClick);
    return () => document.removeEventListener('click', onDocClick);
  }, []);

  const active = THEMES.find((t) => t.id === theme) || THEMES[0];

  return (
    <div className={`chroma-matrix ${open ? 'is-open' : ''}`} ref={rootRef}>
      <div className="chroma-popover" role="dialog" aria-label="Cosmic Spectrum Themes">
        <div className="chroma-header">
          <span className="chroma-title">Cosmic Spectrum</span>
          <span style={{ fontFamily: 'var(--ff-mono)', fontSize: 10, color: 'var(--primary)' }}>5 Royal Palettes</span>
        </div>
        <div className="chroma-theme-list">
          {THEMES.map((t) => (
            <button
              key={t.id}
              type="button"
              className={`chroma-theme-opt ${theme === t.id ? 'active' : ''}`}
              onClick={() => { setTheme(t.id); setOpen(false); }}
            >
              <div className="chroma-opt-left">
                <span className="chroma-swatch" style={{ background: `linear-gradient(135deg, ${t.c1}, ${t.c2})` }}></span>
                <span className="chroma-opt-name">{t.name}</span>
              </div>
              <span className="chroma-opt-badge">{t.badge}</span>
            </button>
          ))}
        </div>
      </div>
      <button
        type="button"
        className="chroma-btn"
        aria-label="Open Cosmic Spectrum Switcher"
        onClick={(e) => { e.stopPropagation(); setOpen(!open); }}
      >
        <span className="chroma-orb-preview"></span>
        <span>{active.name}</span>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9" /></svg>
      </button>
    </div>
  );
}
