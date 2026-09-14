'use client';

import { useEffect, useState } from 'react';

const ITEMS = [
  { href: '/contact', label: 'Contact', icon: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></> },
  { href: '/#faqs', label: 'FAQs', icon: <><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" /></> },
  { href: '/#services', label: 'Services', icon: <><rect x="3" y="3" width="7.5" height="7.5" rx="1.5" /><rect x="13.5" y="3" width="7.5" height="7.5" rx="1.5" /><rect x="3" y="13.5" width="7.5" height="7.5" rx="1.5" /><rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.5" /></> },
  { href: '#top', label: 'Back to Top', icon: <><line x1="12" y1="19" x2="12" y2="5" /><polyline points="5 12 12 5 19 12" /></> },
];

export default function FabNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  const go = (e, href) => {
    e.preventDefault();
    setOpen(false);
    const lenis = window.__lenis;
    if (href === '#top') {
      if (lenis) lenis.scrollTo(0, { duration: 1.4 });
      else window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const [path, hash] = href.split('#');
    if (hash && window.location.pathname === path) {
      if (lenis) lenis.scrollTo(`#${hash}`, { offset: -70, duration: 1.4 });
      else document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = href; // cross-page: full navigation (also scrolls to hash)
    }
  };

  return (
    <>
      <div className={`fab-scrim ${open ? 'is-visible' : ''}`} onClick={() => setOpen(false)} aria-hidden="true"></div>
      <div className={`fab-nav ${open ? 'is-open' : ''}`}>
        <div className="fab-menu" role="menu" aria-label="Quick navigation">
          {ITEMS.map((item, i) => (
            <a href={item.href} className="fab-item" role="menuitem" style={{ '--fi': i }} key={item.label} onClick={(e) => go(e, item.href)}>
              <span className="fab-item-label">{item.label}</span>
              <span className="fab-item-dot">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">{item.icon}</svg>
              </span>
            </a>
          ))}
        </div>
        <button
          type="button"
          className="fab-toggle"
          aria-expanded={open}
          aria-label="Open quick navigation"
          onClick={() => setOpen(!open)}
        >
          <span className="fab-toggle-icon"><span></span><span></span></span>
        </button>
      </div>
    </>
  );
}
