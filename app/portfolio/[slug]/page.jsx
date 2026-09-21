import Link from 'next/link';
import { notFound } from 'next/navigation';
import Cta from '../../../components/Cta';

export const dynamicParams = false;

const PAGESPEED = (domain) =>
  `https://pagespeed.web.dev/analysis?url=https%3A%2F%2F${encodeURIComponent(domain)}%2F`;

const CASE_STUDIES = {
  'tuxford-collision': {
    name: 'Tuxford Collision Center',
    domain: 'tuxfordcollision.com',
    url: 'https://tuxfordcollision.com/',
    industry: 'Auto Body & Collision Repair',
    location: 'Los Angeles, CA',
    timeline: '3 weeks',
    tags: ['Web Design', 'Local SEO', 'Quote Forms'],
    challenge: `Tuxford Collision Center serves Los Angeles drivers who need fast, trustworthy auto body repair — often in stressful post-accident situations. Their previous online presence did nothing to build trust when it mattered most: when someone was searching at 11 PM after a collision, phone in hand, trying to decide who to call. The site was slow, hard to navigate on mobile, and gave no immediate reason to trust a stranger with a damaged car.`,
    approach: [
      { title: 'Trust-first hierarchy', body: 'We led with licensing credentials, Google rating, and a clear "Free Towing + Free Estimate" guarantee — the three questions every distressed driver asks before calling. Trust signals above the fold, not buried in a footer.' },
      { title: 'Conversion-engineered layout', body: 'Every page fold includes a phone number and a quote form. We eliminated decision friction by making the next step always visible, regardless of scroll position — critical when your customer is stressed and in a hurry.' },
      { title: 'Local SEO structure', body: 'Service-area pages, LocalBusiness JSON-LD schema markup, and metadata targeting "auto body repair Los Angeles" and surrounding neighborhoods for maximum local search coverage.' },
    ],
    results: [
      { label: '+280% Organic Traffic', verified: false },
      { label: 'PageSpeed 97/100', verified: true, href: PAGESPEED('tuxfordcollision.com') },
    ],
  },
  'vvasquez-handyman': {
    name: 'V Vasquez Handyman LLC',
    domain: 'vvasquezhandymanllc.net',
    url: 'https://vvasquezhandymanllc.net/',
    industry: 'Handyman Services',
    location: 'United States',
    timeline: '2 weeks',
    tags: ['Web Design', 'Service Pages', 'Mobile First'],
    challenge: `Handyman businesses are saturated with low-quality online presences — blurry logos, generic template sites, and no clear service listing. V Vasquez Handyman had the skills and reputation but an online presence that didn't reflect either. Homeowners searching on mobile were bouncing before making contact, costing real jobs every week.`,
    approach: [
      { title: 'Structured service catalog', body: 'We built each service its own section with clear scope, pricing signals, and a "Request This Service" CTA — letting visitors find exactly what they need without wading through irrelevant content.' },
      { title: 'Mobile-first execution', body: 'Over 80% of handyman searches happen on a phone. We designed and tested mobile experience first, then scaled up — not the other way around. Tap targets, font sizes, and form inputs all optimised for thumbs.' },
      { title: 'Instant quote flow', body: 'A streamlined quote request form with service selection pre-fills context, reducing back-and-forth and getting jobs booked faster with less friction for both sides.' },
    ],
    results: [
      { label: '3.4× Quote Submissions', verified: false },
      { label: 'PageSpeed 99/100', verified: true, href: PAGESPEED('vvasquezhandymanllc.net') },
    ],
  },
  'alaska-fast-fix': {
    name: 'Alaska Fast Fix Handyman',
    domain: 'alaskafastfixhandyman.com',
    url: 'https://alaskafastfixhandyman.com/',
    industry: 'Handyman Services',
    location: 'Alaska',
    timeline: '2 weeks',
    tags: ['Web Design', 'Local SEO', 'Lead Capture'],
    challenge: `Operating in Alaska means serving a geographically spread-out market where customers often can't afford to wait. Emergency repair requests — burst pipes, broken heating, storm damage — need an immediate response. The business needed a site that communicated urgency, reliability, and local expertise the moment someone landed on it from a stressed, late-night search.`,
    approach: [
      { title: 'Urgency-driven design', body: 'We led with "Fast Response" messaging and placed the phone number at the top of every page — designed for the high-stress "I need this fixed today" search intent. Seconds matter when a pipe is bursting.' },
      { title: 'Service area clarity', body: 'A prominent, early service area section prevents wasted calls from outside the coverage zone and builds trust with customers who specifically want someone local and accountable.' },
      { title: 'Local search coverage', body: 'Structured data markup, service-area headings optimised for "handyman near me" searches, and Google Business Profile alignment to rank across the service region.' },
    ],
    results: [
      { label: '+190% Local Calls', verified: false },
      { label: 'PageSpeed 98/100', verified: true, href: PAGESPEED('alaskafastfixhandyman.com') },
    ],
  },
  'bestbreaks': {
    name: 'BestBreaks',
    domain: 'bestbreaks.com.au',
    url: 'https://bestbreaks.com.au/',
    industry: 'Travel & Accommodation',
    location: 'Australia & New Zealand',
    timeline: '4 weeks',
    tags: ['Web Design', 'E-Commerce Flow', 'Booking UX'],
    challenge: `Selling holiday accommodation vouchers online requires visual polish and booking confidence that most small travel businesses struggle to achieve. BestBreaks needed to present multi-night packages across dozens of properties in a way that felt premium, clear, and trustworthy — without the budget of a Booking.com. Visitors were landing, browsing, and leaving without converting.`,
    approach: [
      { title: 'Booking-confidence UX', body: 'We structured each package with clear inclusions, duration, pricing, and property highlights — giving visitors enough information to feel confident purchasing without ever needing to call.' },
      { title: 'Performance engineering', body: 'Travel sites live and die by load speed. We achieved a 0.41s TTFB and 96/100 PageSpeed — critical for conversions and Google ranking in a competitive travel market where every second of load time costs bookings.' },
      { title: 'Visual hierarchy for packages', body: 'Multi-night packages (7, 10, 14 & 21 nights) presented as scannable cards with clear duration, destination, and value signals — reducing the cognitive load of comparing options.' },
    ],
    results: [
      { label: 'PageSpeed 96/100', verified: true, href: PAGESPEED('bestbreaks.com.au') },
      { label: '0.41s TTFB', verified: true, href: PAGESPEED('bestbreaks.com.au') },
    ],
  },
  'sky-high-tree': {
    name: 'Sky High Tree Service',
    domain: 'skyhightreeservicechicago.com',
    url: 'https://skyhightreeservicechicago.com/',
    industry: 'Tree Service',
    location: 'Chicago, IL',
    timeline: '3 weeks',
    tags: ['Web Design', 'Local SEO', 'Emergency CTAs'],
    challenge: `Tree service is a high-urgency, high-ticket category. Customers searching for emergency tree removal after a storm don't browse — they call the first site that looks credible and local. Sky High needed a site that converted those emergency searches into booked jobs immediately, while also building a sustainable organic presence in the competitive Chicago market.`,
    approach: [
      { title: 'Emergency CTA architecture', body: 'High-visibility emergency contact options above the fold on every page — phone number, click-to-call button, and a "24/7 Emergency Service" badge that builds confidence before a visitor reads a single word of body copy.' },
      { title: 'Credibility signals up front', body: 'Insurance verification, license numbers, and before/after imagery are prioritised on the homepage — removing the trust barriers that cause storm-damaged homeowners to keep scrolling to a competitor.' },
      { title: 'Service-area SEO', body: 'Dedicated pages for key Chicago neighborhoods and suburbs, each with LocalBusiness schema, targeting "tree removal [neighborhood]" queries that convert at the highest rate in this market.' },
    ],
    results: [
      { label: '+215% Emergency Leads', verified: false },
      { label: 'PageSpeed 95/100', verified: true, href: PAGESPEED('skyhightreeservicechicago.com') },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(CASE_STUDIES).map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const cs = CASE_STUDIES[params.slug];
  if (!cs) return {};
  return {
    alternates: { canonical: `/portfolio/${params.slug}` },
    title: `${cs.name} — Web Design Case Study | Embra Technologies`,
    description: `How Embra Technologies built a high-performance website for ${cs.name} in ${cs.location}. Results: ${cs.results.map((r) => r.label).join(', ')}.`,
    openGraph: {
      title: `${cs.name} Case Study — Embra Technologies`,
      description: `Web design & SEO results for ${cs.name}: ${cs.results.map((r) => r.label).join(', ')}.`,
      url: `https://www.embratechnologies.org/portfolio/${params.slug}`,
    },
  };
}

export default function CaseStudyPage({ params }) {
  const cs = CASE_STUDIES[params.slug];
  if (!cs) notFound();

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${cs.name} — Web Design Case Study`,
    description: `How Embra Technologies built a high-performance website for ${cs.name} in ${cs.location}.`,
    image: 'https://www.embratechnologies.org/opengraph-image.jpg',
    author: { '@type': 'Organization', name: 'Embra Technologies', url: 'https://www.embratechnologies.org' },
    publisher: {
      '@type': 'Organization',
      name: 'Embra Technologies',
      url: 'https://www.embratechnologies.org',
      logo: { '@type': 'ImageObject', url: 'https://www.embratechnologies.org/images/logo.png' },
    },
    about: { '@type': 'Organization', name: cs.name, url: cs.url },
    url: `https://www.embratechnologies.org/portfolio/${params.slug}`,
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.embratechnologies.org/' },
      { '@type': 'ListItem', position: 2, name: 'Portfolio', item: 'https://www.embratechnologies.org/portfolio' },
      { '@type': 'ListItem', position: 3, name: cs.name, item: `https://www.embratechnologies.org/portfolio/${params.slug}` },
    ],
  };

  const ArrowUp = () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
      <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
    </svg>
  );
  const ArrowLeft = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
      <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
    </svg>
  );

  return (
    <div className="page-shell case-study-shell">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="page-hero case-hero">
        <div className="wrap">
          <nav className="cs-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">›</span>
            <Link href="/portfolio">Portfolio</Link>
            <span aria-hidden="true">›</span>
            <span>{cs.name}</span>
          </nav>

          <div className="cs-meta-row">
            <span className="cs-industry-pill">{cs.industry}</span>
            <span className="cs-location-pill">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
              </svg>
              {cs.location}
            </span>
            <span className="cs-timeline-pill">⏱ {cs.timeline}</span>
          </div>

          <h1 className="cs-title">{cs.name}</h1>
          <p className="cs-sub">A case study by Embra Technologies</p>

          <div className="cs-result-chips">
            {cs.results.map((r) =>
              r.verified ? (
                <a
                  key={r.label}
                  href={r.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cs-chip cs-chip--verified"
                  title="Click to verify on Google PageSpeed"
                >
                  {r.label}
                  <span className="cs-chip-verify">Verify ↗</span>
                </a>
              ) : (
                <span key={r.label} className="cs-chip">{r.label}</span>
              )
            )}
          </div>

          <div className="cs-live-row">
            <a href={cs.url} target="_blank" rel="noopener noreferrer" className="btn-flip btn-primary btn-small">
              <span className="btn-flip-inner">
                <span className="btn-flip-state">Visit Live Site <ArrowUp /></span>
                <span className="btn-flip-state" aria-hidden="true">{cs.domain} <ArrowUp /></span>
              </span>
            </a>
            <div className="cs-tags">
              {cs.tags.map((t) => <span key={t} className="bento-tag">{t}</span>)}
            </div>
          </div>
        </div>
      </section>

      {/* ── Challenge ────────────────────────────────────────── */}
      <section className="cs-section">
        <div className="wrap cs-two-col">
          <div className="cs-col-label">The Challenge</div>
          <div className="cs-col-body">
            <p>{cs.challenge}</p>
          </div>
        </div>
      </section>

      {/* ── Approach ─────────────────────────────────────────── */}
      <section className="cs-section cs-section--alt">
        <div className="wrap">
          <div className="cs-approach-header">
            <div className="cs-col-label">Our Approach</div>
          </div>
          <div className="cs-approach-grid">
            {cs.approach.map((a, i) => (
              <div key={i} className="cs-approach-card">
                <span className="cs-approach-num">0{i + 1}</span>
                <h3>{a.title}</h3>
                <p>{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Results ──────────────────────────────────────────── */}
      <section className="cs-section">
        <div className="wrap cs-two-col">
          <div className="cs-col-label">Results</div>
          <div className="cs-col-body">
            <div className="cs-results-grid">
              {cs.results.map((r) => (
                <div key={r.label} className="cs-result-stat">
                  <div className="cs-result-value">{r.label}</div>
                  {r.verified && (
                    <a href={r.href} target="_blank" rel="noopener noreferrer" className="cs-verify-link">
                      Verify on Google PageSpeed →
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Nav row ──────────────────────────────────────────── */}
      <section className="cs-nav-section">
        <div className="wrap cs-nav-row">
          <Link href="/portfolio" className="btn-flip btn-ghost btn-small">
            <span className="btn-flip-inner">
              <span className="btn-flip-state"><ArrowLeft /> Back to Portfolio</span>
              <span className="btn-flip-state" aria-hidden="true"><ArrowLeft /> Back to Portfolio</span>
            </span>
          </Link>
          <Link href="/contact" className="btn-flip btn-primary btn-small">
            <span className="btn-flip-inner">
              <span className="btn-flip-state">Start Your Project <ArrowUp /></span>
              <span className="btn-flip-state" aria-hidden="true">Start Your Project <ArrowUp /></span>
            </span>
          </Link>
        </div>
      </section>

      <Cta variant="portfolio" />
    </div>
  );
}
