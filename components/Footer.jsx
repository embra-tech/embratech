'use client';

import Link from 'next/link';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-col footer-brand">
            <Link href="/" className="logo" style={{ marginBottom: 16, display: 'inline-flex' }}>
              <Logo size={38} />
            </Link>
            <p>Designing and engineering modern websites, SEO visibility, and digital identity for growing businesses across the United States.</p>
            <div className="footer-status"><span className="status-dot"></span><span>All Systems Live — Accepting New Projects</span></div>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><Link href="/portfolio">Portfolio</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/pricing">Pricing</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><Link href="/services">Website Design</Link></li>
              <li><Link href="/services">Search Optimization</Link></li>
              <li><Link href="/services">Social Identity</Link></li>
              <li><Link href="/services">Custom Integrations</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact &amp; Legal</h4>
            <div className="footer-contact-list">
              <div className="footer-contact-item">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></svg>
                <a href="mailto:info@embratechnologies.org">info@embratechnologies.org</a>
              </div>
              <div className="footer-contact-item">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.8 19.8 0 0 1 1.61 3.4 2 2 0 0 1 3.58 1.22h3a2 2 0 0 1 2 1.72c.127.96.36 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6.29 6.29l1.62-1.62a2 2 0 0 1 2.11-.45c.907.34 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                <a href="tel:+12122071152">+1 (212) 207-1152</a>
              </div>
              <div className="footer-contact-item">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                <a href="https://embratechnologies.org" target="_blank" rel="noopener noreferrer">embratechnologies.org</a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copy">© 2026 Embra Technologies Private Limited. All rights reserved.</p>
          <p className="footer-built">Built by <a href="https://embratechnologies.org" target="_blank" rel="noopener noreferrer">Embra Technologies</a></p>
          <div className="footer-legal"><Link href="/privacy">Privacy Policy</Link><Link href="/terms">Terms of Service</Link></div>
        </div>
      </div>
    </footer>
  );
}
