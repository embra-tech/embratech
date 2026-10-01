'use client';

import Link from 'next/link';
import Logo from './Logo';
import siteConfig from '../lib/site-config';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-col footer-brand">
            <Link href="/" className="logo" style={{ marginBottom: 16, display: 'inline-flex' }}>
              <Logo size={38} />
            </Link>
            <p>{siteConfig.description}</p>
            <div className="footer-status">
              <span className="status-dot"></span>
              <span>All Systems Live, Accepting New Projects</span>
            </div>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><Link href="/portfolio">Portfolio</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/pricing">Pricing</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><Link href="/services/web-design">Website Design</Link></li>
              <li><Link href="/services/local-seo">Local SEO</Link></li>
              <li><Link href="/services/website-integrations">Integrations</Link></li>
              <li><Link href="/services/care-plan">Care Plan ($150/mo)</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Industries</h4>
            <ul>
              <li><Link href="/niches/web-design-for-handyman-businesses">Handyman</Link></li>
              <li><Link href="/niches/tree-service-website-design">Tree Service</Link></li>
              <li><Link href="/niches/plumber-website-design">Plumbing</Link></li>
              <li><Link href="/niches/hvac-website-design">HVAC</Link></li>
              <li><Link href="/niches/roofing-website-design">Roofing</Link></li>
              <li><Link href="/niches/auto-body-shop-website-design">Auto Body</Link></li>
              <li><Link href="/niches/landscaping-website-design">Landscaping</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact &amp; Legal</h4>
            <div className="footer-contact-list">
              {siteConfig.address && (
                <div className="footer-contact-item" style={{ alignItems: 'flex-start' }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" style={{ marginTop: 2 }}>
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span style={{ lineHeight: 1.4 }}>
                    {siteConfig.address.street}, {siteConfig.address.city}<br />
                    {siteConfig.address.state} {siteConfig.address.zip}, {siteConfig.address.countryName}
                  </span>
                </div>
              )}
              <div className="footer-contact-item">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m4 7 8 6 8-6" />
                </svg>
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </div>
              <div className="footer-contact-item">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
                <span>{siteConfig.hoursDisplay}</span>
              </div>
              <div className="footer-contact-item">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.8 19.8 0 0 1 1.61 3.4 2 2 0 0 1 3.58 1.22h3a2 2 0 0 1 2 1.72c.127.96.36 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6.29 6.29l1.62-1.62a2 2 0 0 1 2.11-.45c.907.34 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a href={`tel:${siteConfig.phone}`}>{siteConfig.phoneDisplay}</a>
              </div>
            </div>

            <div className="footer-socials" style={{ display: 'flex', gap: 14, marginTop: 24 }}>
              {siteConfig.social.linkedin && (
                <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer me" aria-label="Embra Technologies on LinkedIn" style={{ color: 'var(--muted-inv)' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
              )}
              {siteConfig.social.twitter && (
                <a href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer me" aria-label="Embra Technologies on X (Twitter)" style={{ color: 'var(--muted-inv)' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="footer-locations" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '8px 16px', padding: '24px 0', borderBottom: '1px solid var(--line-dark)', fontSize: '13px', color: 'var(--muted-inv)' }}>
          <span style={{ fontWeight: 600, color: 'var(--paper-bright)' }}>Service Areas:</span>
          {siteConfig.serviceAreas.map((area, index) => (
            <span key={area.slug} style={{ display: 'inline-flex', alignItems: 'center', gap: '16px' }}>
              <Link href={`/locations/${area.slug}`} style={{ color: 'var(--muted-inv)', transition: 'color 0.2s' }}>{area.name}</Link>
              {index < siteConfig.serviceAreas.length - 1 && (
                <span aria-hidden="true" style={{ opacity: 0.4 }}>·</span>
              )}
            </span>
          ))}
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">© {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.</p>
          <p className="footer-built">Built by <Link href="/">{siteConfig.legalName}</Link></p>
          <div className="footer-legal">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
            <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
