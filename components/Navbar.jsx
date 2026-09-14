'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from './Logo';

// Anchor links scroll on the home page; page links use Next routing
const NAV_ITEMS = [
  { href: '/#showcase', label: 'Showcase' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
  { href: '/#testimonials', label: 'Reviews' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const headerRef = useRef(null);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const header = headerRef.current;
    let lastY = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      header.classList.toggle('scrolled', y > 35);
      if (y > 120 && y > lastY) header.classList.add('nav-hidden');
      else header.classList.remove('nav-hidden');
      lastY = y;
    };
    const onMouse = (e) => {
      if (e.clientY <= 65) header.classList.remove('nav-hidden');
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('mousemove', onMouse, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('mousemove', onMouse);
    };
  }, []);

  const go = (e, href) => {
    setOpen(false);
    const [path, hash] = href.split('#');
    if (hash && pathname === path) {
      // Same-page anchor: smooth-scroll with Lenis
      e.preventDefault();
      const lenis = window.__lenis;
      if (lenis) lenis.scrollTo(`#${hash}`, { offset: -70, duration: 1.4 });
      else document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
    }
    // Cross-page links fall through to Next's <Link> routing
  };

  return (
    <header className="site-header" id="topHeader" ref={headerRef}>
      <div className="wrap header-inner">
        <Link href="/" className="logo" aria-label="Embra Technologies home">
          <Logo size={36} />
        </Link>

        <nav className={`site-nav ${open ? 'open' : ''}`} id="site-nav" aria-label="Primary">
          {NAV_ITEMS.map((l) => (
            <Link key={l.href} href={l.href} onClick={(e) => go(e, l.href)}>{l.label}</Link>
          ))}
        </nav>

        <div className="header-actions">
          <Link href="/contact" className="btn-flip btn-primary btn-small">
            <span className="btn-flip-inner">
              <span className="btn-flip-state">Start Project <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg></span>
              <span className="btn-flip-state">Start Project <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg></span>
            </span>
          </Link>
          <button
            className="nav-toggle"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="site-nav"
            onClick={() => setOpen(!open)}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
