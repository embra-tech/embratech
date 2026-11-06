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
  // 2026-11-06 (owner request): homepage shows Tuxford plus the three newest projects; Alaska Fast Fix and
  // Sky High remain in the portfolio. New screenshots come from scripts/capture-screenshots.mjs.
  {
    name: 'JCP Lawn Service',
    domain: 'jcplawnservicecalifornia.com',
    slug: 'jcp-lawn-service',
    url: 'https://www.jcplawnservicecalifornia.com/',
    image: '/images/jcplawn.jpg',
    industry: 'Lawn Care & Landscaping',
    location: 'Rancho Cordova, CA',
    desc: 'Lawn care for homes, HOAs and commercial properties across Greater Sacramento, with services, service area and tap-to-call front and center.',
    c1: '#3FA34D',
    c2: '#143A22',
    tags: ['Web Design', 'Local SEO', 'Mobile-First'],
    results: [
      { label: 'Homes, HOAs and commercial', href: null },
      { label: 'Live PageSpeed report', href: 'https://pagespeed.web.dev/analysis?url=https%3A%2F%2Fwww.jcplawnservicecalifornia.com%2F' },
    ],
  },
  {
    name: 'Alaska Handyman Services',
    domain: 'alaskahandymanservices.com',
    slug: 'alaska-handyman-services',
    url: 'https://www.alaskahandymanservices.com/',
    image: '/images/alaskahandymanservices.jpg',
    industry: 'Handyman & Home Repair',
    location: 'Anchorage, AK',
    desc: 'A licensed Anchorage contractor with 8 service categories, before-and-after sliders, service-area pages and a free estimate form that sorts requests by service and area.',
    c1: '#4A90E2',
    c2: '#1A3F7A',
    tags: ['Web Design', 'Service Pages', 'Estimate Requests'],
    results: [
      { label: 'Before-and-after sliders', href: null },
      { label: 'Live PageSpeed report', href: 'https://pagespeed.web.dev/analysis?url=https%3A%2F%2Fwww.alaskahandymanservices.com%2F' },
    ],
  },
  {
    name: 'Royal Home Health Care',
    domain: 'royalcareathome.com',
    slug: 'royal-home-health-care',
    url: 'https://www.royalcareathome.com/',
    image: '/images/royalcare.jpg',
    industry: 'Home Health Care',
    location: 'Van Nuys, CA',
    desc: 'A licensed home health agency serving four Southern California counties, with about 20 service pages, referral information and accessibility features.',
    c1: '#C9A227',
    c2: '#12260C',
    tags: ['Web Design', 'Service Pages', 'Accessibility'],
    results: [
      { label: 'About 20 service pages', href: null },
      { label: 'Live PageSpeed report', href: 'https://pagespeed.web.dev/analysis?url=https%3A%2F%2Fwww.royalcareathome.com%2F' },
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
            <h2>Live Client Websites We&apos;ve Built.</h2>
            <p>Real client sites in production: custom design for each trade, with a case study and a live speed report for every project.</p>
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
