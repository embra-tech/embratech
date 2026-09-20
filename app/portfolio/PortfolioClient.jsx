'use client';

import { useRef } from 'react';
import { useReveal } from '../../lib/useReveal';
import PageHeader from '../../components/PageHeader';
import SiteCard from '../../components/SiteCard';
import Cta from '../../components/Cta';
import Breadcrumb from '../../components/Breadcrumb';

const PAGESPEED = (domain) =>
  `https://pagespeed.web.dev/analysis?url=https%3A%2F%2F${encodeURIComponent(domain)}%2F`;

const SITES = [
  {
    name: 'Tuxford Collision Center',
    domain: 'tuxfordcollision.com',
    slug: 'tuxford-collision',
    url: 'https://tuxfordcollision.com/',
    image: '/images/tuxford.png',
    industry: 'Auto Body & Collision Repair',
    location: 'Los Angeles, CA',
    desc: 'A fully licensed auto body repair center with free towing and estimate services. A bold, trust-first site built to convert distressed drivers into booked repairs.',
    c1: '#E8654F', c2: '#7A2A1A',
    tags: ['Web Design', 'Local SEO', 'Quote Forms'],
    results: [
      { label: '↑ 280% organic traffic', href: null },
      { label: 'PageSpeed 97/100', href: PAGESPEED('tuxfordcollision.com') },
    ],
  },
  {
    name: 'V Vasquez Handyman LLC',
    domain: 'vvasquezhandymanllc.net',
    slug: 'vvasquez-handyman',
    url: 'https://vvasquezhandymanllc.net/',
    image: '/images/vvasquez.png',
    industry: 'Handyman Services',
    location: 'United States',
    desc: 'A professional handyman brand with a clean service catalog, instant quote calls-to-action, and a mobile-first layout that turns searches into scheduled jobs.',
    c1: '#E8A552', c2: '#6E4517',
    tags: ['Web Design', 'Service Pages', 'Mobile First'],
    results: [
      { label: 'PageSpeed 99/100', href: PAGESPEED('vvasquezhandymanllc.net') },
      { label: '3.4x Quote Submissions', href: null },
    ],
  },
  {
    name: 'Alaska Fast Fix Handyman',
    domain: 'alaskafastfixhandyman.com',
    slug: 'alaska-fast-fix',
    url: 'https://alaskafastfixhandyman.com/',
    image: '/images/alaskahandyman.png',
    industry: 'Handyman Services',
    location: 'Alaska',
    desc: 'Fast, reliable home repairs in the Last Frontier. A rugged, trustworthy design with clear service areas and friction-free contact paths for urgent fixes.',
    c1: '#5BB8E8', c2: '#173E56',
    tags: ['Web Design', 'Local SEO', 'Lead Capture'],
    results: [
      { label: 'PageSpeed 98/100', href: PAGESPEED('alaskafastfixhandyman.com') },
      { label: '+190% Local Calls', href: null },
    ],
  },
  {
    name: 'BestBreaks',
    domain: 'bestbreaks.com.au',
    slug: 'bestbreaks',
    url: 'https://bestbreaks.com.au/',
    image: '/images/bestbreaks.png',
    industry: 'Travel & Accommodation',
    location: 'Australia & New Zealand',
    desc: 'Holiday accommodation voucher packages across Australia and New Zealand. A polished booking-style experience presenting 7, 10, 14 & 21-night packages with confidence.',
    c1: '#3ECF8E', c2: '#0C4A38',
    tags: ['Web Design', 'E-Commerce Flow', 'Booking UX'],
    results: [
      { label: 'PageSpeed 96/100', href: PAGESPEED('bestbreaks.com.au') },
      { label: '0.41s TTFB', href: PAGESPEED('bestbreaks.com.au') },
    ],
  },
  {
    name: 'Sky High Tree Service',
    domain: 'skyhightreeservicechicago.com',
    slug: 'sky-high-tree',
    url: 'https://skyhightreeservicechicago.com/',
    image: '/images/skyhightreeservice.png',
    industry: 'Tree Service',
    location: 'Chicago, IL',
    desc: 'Professional tree care for the Chicago area. A high-converting local site with emergency-service CTAs, credibility signals, and SEO structured for service-area dominance.',
    c1: '#6DBE4A', c2: '#23491A',
    tags: ['Web Design', 'Local SEO', 'Emergency CTAs'],
    results: [
      { label: 'PageSpeed 95/100', href: PAGESPEED('skyhightreeservicechicago.com') },
      { label: '+215% Emergency Leads', href: null },
    ],
  },
];

export default function PortfolioClient() {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <div ref={ref} className="page-shell">
      <section className="page-hero">
        <div className="wrap">
          <Breadcrumb label="Portfolio" href="/portfolio" />
          <PageHeader
            pill="Portfolio"
            badge="Selected Work"
            title={<>Websites we&apos;ve <span className="highlight-text">shipped.</span></>}
            sub="Real, live websites for real businesses — designed, built, and optimised by Embra Technologies. Every project below is in production and serving customers today."
          />
        </div>
      </section>

      <section className="portfolio-section">
        <div className="wrap">
          <div className="work-grid">
            {SITES.map((site, i) => (
              <SiteCard key={site.domain} site={site} index={i} />
            ))}
          </div>

          <div className="portfolio-note reveal-up">
            <div>
              <h3>Your business could be next.</h3>
              <p>Every project ships with sub-second load times, search-optimised structure, and a design built to convert. Timeline: under 4 weeks from brief to live.</p>
            </div>
            <a href="/contact" className="btn-flip btn-primary btn-large">
              <span className="btn-flip-inner">
                <span className="btn-flip-state">Start Your Project <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg></span>
                <span className="btn-flip-state" aria-hidden="true">Start Your Project <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg></span>
              </span>
            </a>
          </div>
        </div>
      </section>

      <Cta variant="portfolio" />
    </div>
  );
}

