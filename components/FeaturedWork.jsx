'use client';

import Link from 'next/link';
import SiteCard from './SiteCard';

const FEATURED_SITES = [
  {
    name: 'Tuxford Collision Center',
    domain: 'tuxfordcollision.com',
    slug: 'tuxford-collision',
    url: 'https://tuxfordcollision.com/',
    image: '/images/tuxford.webp',
    industry: 'Auto Body & Collision Repair',
    location: 'Los Angeles, CA',
    desc: 'A fully licensed auto body repair center with free towing and estimate services. A bold, trust-first site built to convert distressed drivers into booked repairs.',
    c1: '#E8654F',
    c2: '#7A2A1A',
    tags: ['Web Design', 'Local SEO', 'Quote Forms'],
    results: [
      { label: 'Free towing + estimate offer up front', href: null },
      { label: 'PageSpeed 97/100', href: 'https://pagespeed.web.dev/analysis?url=https%3A%2F%2Ftuxfordcollision.com%2F' },
    ],
  },
  {
    name: 'Alaska Fast Fix Handyman',
    domain: 'alaskafastfixhandyman.com',
    slug: 'alaska-fast-fix',
    url: 'https://alaskafastfixhandyman.com/',
    image: '/images/alaskahandyman.webp',
    industry: 'Handyman Services',
    location: 'Alaska',
    desc: 'Local handyman services built for instant phone call and quote form conversion, backed by strong local SEO structure.',
    c1: '#4A90E2',
    c2: '#1A3F7A',
    tags: ['Local SEO', 'Instant Quotes', 'Mobile-First'],
    results: [
      { label: 'Tap-to-call on every page', href: null },
      { label: 'PageSpeed 98/100', href: 'https://pagespeed.web.dev/analysis?url=https%3A%2F%2Falaskafastfixhandyman.com%2F' },
    ],
  },
  {
    name: 'Sky High Tree Service',
    domain: 'skyhightreeservicechicago.com',
    slug: 'sky-high-tree',
    url: 'https://skyhightreeservicechicago.com/',
    image: '/images/skyhightreeservice.webp',
    industry: 'Tree Service',
    // 2026-10-19: matched to the portfolio card and case study (unproven "+215%" and fixed 95/100 badge removed).
    location: 'Naperville / Chicagoland, IL',
    desc: 'A tree-care website with service information, project photos, service-area details and clear ways to call or request an estimate.',
    c1: '#2E7D32',
    c2: '#1B5E20',
    tags: ['Web Design', 'Service Information', 'Estimate Requests'],
    results: [
      { label: 'Call and estimate options', href: null },
      { label: 'Project gallery', href: null },
    ],
  },
];

export default function FeaturedWork() {
  return (
    <section className="featured-work-section" id="work" style={{ padding: '80px 0' }}>
      <div className="wrap">
        <div className="section-head reveal-up" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px', marginBottom: '48px' }}>
          <div>
            <div className="section-badge"><span className="badge-pill">Proof</span><span className="badge-text">Selected Work</span></div>
            <h2>Websites We&apos;ve Built &amp; Ranked.</h2>
            <p>Real client sites in production, sub-second speeds, custom design, and verified performance.</p>
          </div>
          <Link href="/portfolio" className="btn-flip btn-ghost btn-small">
            <span className="btn-flip-inner">
              <span className="btn-flip-state">View All 6 Projects &rarr;</span>
              <span className="btn-flip-state" aria-hidden="true">View All 6 Projects &rarr;</span>
            </span>
          </Link>
        </div>

        <div className="work-grid">
          {FEATURED_SITES.map((site, i) => (
            <SiteCard key={site.domain} site={site} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
