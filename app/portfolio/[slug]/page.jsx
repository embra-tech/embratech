import Link from 'next/link';
import { notFound } from 'next/navigation';
import Cta from '../../../components/Cta';
import siteConfig from '../../../lib/site-config';

export const dynamicParams = false;

const PAGESPEED = (domain) =>
  `https://pagespeed.web.dev/analysis?url=https%3A%2F%2F${encodeURIComponent(domain)}%2F`;

const CASE_STUDIES = {
  // 2026-10-13: added with the client's permission. Every number below comes from the client's
  // Google Search Console (property https://pndlaundry.com/), pulled on 2026-10-13.
  'pnd-laundry': {
    name: 'Pick N Drop Laundry',
    metaTitle: 'Local SEO Case Study, Pick N Drop Laundry',
    metaDescription: 'How we grew Google clicks 133% for Pick N Drop Laundry in Los Angeles with 30 neighborhood pages, schema fixes and Business Profile work (Search Console data).',
    domain: 'pndlaundry.com',
    url: 'https://pndlaundry.com/',
    industry: 'Laundry Pickup & Dry Cleaning',
    location: 'Los Angeles, CA',
    timeline: 'Ongoing',
    tags: ['Local SEO', 'Neighborhood Pages', 'Google Business Profile'],
    stack: 'WordPress · Rank Math SEO · WP Rocket · Google Search Console',
    challenge: `Pick N Drop Laundry offers laundry pickup and delivery and dry cleaning across Los Angeles. Its customers search by neighborhood, for example "dry cleaners Brentwood" or "laundry pickup Van Nuys", but the site did not have pages for the individual neighborhoods it serves.

The site's structured data needed fixing, pages had no breadcrumb navigation, and the Google Business Profile needed work. Together, these made it harder for Google to understand where the business operates and which searches it should appear for.`,
    approach: [
      { title: '30 neighborhood pages', body: 'We added 30 neighborhood pages, so the site can appear when people search for laundry pickup and dry cleaning in specific parts of Los Angeles, such as Brentwood, Beverly Hills and Van Nuys. Each page targets the searches customers in that area actually make.' },
      { title: 'Schema and breadcrumb fixes', body: 'We fixed the site\'s structured data so Google reads the business details correctly, and added breadcrumbs so visitors and search engines can see how the neighborhood and service pages fit together.' },
      { title: 'Business Profile and technical fixes', body: 'We optimized the Google Business Profile and made a range of technical SEO fixes across the site, so the listing and the website send Google consistent signals about the business.' },
    ],
    deepDive: `<p>All figures on this page come from Pick N Drop Laundry\'s own Google Search Console account, shared with the owner\'s permission. We compared the first 30 days of data in the account (March 15 to April 13, 2026) with the most recent 30 days available when we published this case study (September 11 to October 10, 2026).</p><p>Over that time, clicks from Google search grew from 9 to 21 (up 133%), and the number of times the site appeared in Google results grew from 471 to 1,399 (up 197%). Growth sped up in early October: on most days between October 4 and 10, the site appeared in Google results 75 to 156 times a day, compared with roughly 15 to 50 a day over the summer.</p><p>These are early-stage numbers for a local business, and we report them exactly as they are. Based on average position in Search Console for September 11 to October 10, 2026, the site now appears on the first page of Google for searches such as "dry cleaners van nuys" and "drop off laundry service near me".</p>`,
    results: [
      { label: '+133% Google Clicks', verified: false, source: 'Google Search Console' },
      { label: '+197% Search Impressions', verified: false, source: 'Google Search Console' },
      { label: 'Page 1: "dry cleaners van nuys"', verified: false, source: 'Google Search Console' },
    ],
  },
  'tuxford-collision': {
    // 2026-10-19: rewritten in plain language; unproven "+280% organic traffic" removed (no dated source).
    name: 'Tuxford Collision Center',
    metaTitle: 'Auto Body Shop Website Design, Tuxford',
    metaDescription: 'How Embra built a mobile-first website for Tuxford Collision Center in Los Angeles: licensing, rating and free towing offer up front, with a phone number and quote form on every screen.',
    dateModified: '2026-10-19',
    domain: 'tuxfordcollision.com',
    url: 'https://tuxfordcollision.com/',
    industry: 'Auto Body & Collision Repair',
    location: 'Los Angeles, CA',
    timeline: '3 weeks',
    tags: ['Web Design', 'Local SEO', 'Quote Forms'],
    stack: 'Next.js · React · Vercel · FormSubmit',
    challenge: `Tuxford Collision Center repairs cars for Los Angeles drivers, many of whom are searching on a phone shortly after an accident. Their previous website was slow to load and hard to use on mobile, and it didn't show what a worried driver looks for first: proof that the shop is licensed, what other customers think, and what happens next.

The goal was a site that answers those questions in the first few seconds and makes calling or requesting a quote easy from any page.`,
    approach: [
      { title: 'Trust signals first', body: 'The top of the site shows the shop\'s licensing, its Google rating and its free towing and free estimate offer. These answer the questions drivers ask before they call, so nobody has to scroll or search for them.' },
      { title: 'A next step on every screen', body: 'A phone number and a short quote form stay within reach as visitors scroll, so the next step is always visible on a phone.' },
      { title: 'Local search basics', body: 'Service-area pages for nearby neighborhoods, LocalBusiness structured data and page titles focused on auto body repair in Los Angeles help Google understand where the shop works and what it does.' },
    ],
    deepDive: `<p>The rebuilt site is designed around one journey: a driver arrives on a phone, sees within seconds that the shop is licensed, well reviewed and offers free towing and estimates, then calls or sends a quote request.</p><p>The site runs on Next.js and Vercel, and its current speed can be checked at any time through the linked PageSpeed report. Quote requests are delivered by FormSubmit, so there is no separate system for the shop to maintain.</p><p>This case study describes the website and its features. It does not claim a measured increase in traffic or leads; outcome numbers will be added only with a dated source. Planning a similar site? See our <a href="/niches/auto-body-shop-website-design">auto body shop website design</a> offer, compare <a href="/pricing">website plans</a> or request a <a href="/contact">free homepage sample</a>.</p>`,
    resultsLabel: 'Highlights',
    results: [
      { label: 'Free towing + estimate offer up front' },
      { label: 'PageSpeed 97/100', verified: true, href: PAGESPEED('tuxfordcollision.com') },
    ],
  },
  'vvasquez-handyman': {
    name: 'V Vasquez Handyman LLC',
    metaTitle: 'Lawn Care Website Design, V Vasquez',
    domain: 'vvasquezhandymanllc.net',
    url: 'https://vvasquezhandymanllc.net/',
    industry: 'Lawn Care, Concrete & Irrigation',
    location: 'Merced, CA',
    timeline: '2 weeks',
    tags: ['Web Design', 'Service Pages', 'Mobile First'],
    stack: 'Next.js · React · Vercel · FormSubmit',
    challenge: `V Vasquez Handyman LLC does lawn care, concrete and irrigation work for homeowners in Merced, CA. The business had a good local reputation, but its old website used a generic template with blurry branding and no clear list of services, so visitors on phones couldn't quickly tell whether the company handled their job.

The goal was a site that shows each service clearly and makes it easy to ask for a quote from a phone.`,
    approach: [
      { title: 'A clear service catalog', body: 'Lawn care, concrete work and irrigation each have their own section with a description of the work, pricing guidance and a "Request This Service" button, so visitors can find their job without reading about the others.' },
      { title: 'Designed for phones first', body: 'The mobile layout was designed and tested before the desktop version: larger tap targets, text that is readable without zooming, and form fields that are easy to fill in with a thumb.' },
      { title: 'Quick quote requests', body: 'The quote form pre-selects the service the visitor was viewing, so each request arrives with the right context and fewer follow-up questions.' },
    ],
    deepDive: `<p>The site gives each of V Vasquez's services its own clear path, from description to quote request, so homeowners can quickly confirm that the company does the job they need.</p><p>It runs on Next.js and Vercel, and its current speed can be checked at any time through the linked PageSpeed report. Quote requests are sent through FormSubmit, with the selected service filled in automatically.</p><p>This case study describes the website and its features. It does not claim a measured increase in quote requests; outcome numbers will be added only with a dated source. Planning a similar site? See our <a href="/niches/landscaping-website-design">landscaping website design</a> offer, compare <a href="/pricing">website plans</a> or request a <a href="/contact">free homepage sample</a>.</p>`,
    resultsLabel: 'Highlights',
    results: [
      { label: 'Service-specific quote requests' },
      { label: 'PageSpeed 99/100', verified: true, href: PAGESPEED('vvasquezhandymanllc.net') },
    ],
  },
  'alaska-fast-fix': {
    name: 'Alaska Fast Fix Handyman',
    metaTitle: 'Handyman Website Design, Alaska Fast Fix',
    domain: 'alaskafastfixhandyman.com',
    url: 'https://alaskafastfixhandyman.com/',
    industry: 'Handyman Services',
    location: 'Alaska',
    timeline: '2 weeks',
    tags: ['Web Design', 'Local SEO', 'Lead Capture'],
    stack: 'Next.js · React · Vercel · FormSubmit',
    challenge: `Alaska Fast Fix Handyman serves homeowners across a large, spread-out area, and many calls are urgent: a burst pipe, a heating problem in freezing weather or storm damage. The previous website didn't make it quick to call, or clear which areas the business covers.

The goal was a site that puts the phone number one tap away on every page and tells visitors straight away whether their area is covered.`,
    approach: [
      { title: 'Call in one tap', body: 'A "Fast Response" message and the phone number sit at the top of every page, so someone dealing with an urgent repair can call immediately.' },
      { title: 'Service areas up front', body: 'A service-area section near the top shows where the business works. Visitors outside the area know before they call, and local homeowners can see that the company serves them.' },
      { title: 'Local search basics', body: 'Structured data, service-area headings and business details that match the Google Business Profile help Google understand where the business operates.' },
    ],
    deepDive: `<p>The site is built around speed and clarity for urgent repairs: visitors see the phone number, the type of work and the service area within seconds of arriving.</p><p>It runs on Next.js and Vercel, which matters where mobile signal can be weak, and its current speed can be checked at any time through the linked PageSpeed report. A quote form, delivered by FormSubmit, offers a second way to get in touch, but the main route is a direct phone call.</p><p>This case study describes the website and its features. It does not claim a measured increase in calls; outcome numbers will be added only with a dated source. Planning a similar site? See our <a href="/niches/web-design-for-handyman-businesses">handyman website design</a> offer, compare <a href="/pricing">website plans</a> or request a <a href="/contact">free homepage sample</a>.</p>`,
    resultsLabel: 'Highlights',
    results: [
      { label: 'Tap-to-call on every page' },
      { label: 'PageSpeed 98/100', verified: true, href: PAGESPEED('alaskafastfixhandyman.com') },
    ],
  },
  'bestbreaks': {
    name: 'BestBreaks',
    metaTitle: 'Travel Website Design, BestBreaks',
    domain: 'bestbreaks.com.au',
    url: 'https://bestbreaks.com.au/',
    industry: 'Travel & Accommodation',
    location: 'Australia & New Zealand',
    timeline: '4 weeks',
    tags: ['Web Design', 'E-Commerce Flow', 'Booking UX'],
    stack: 'Next.js · React · Vercel',
    challenge: `BestBreaks sells holiday accommodation vouchers for properties across Australia and New Zealand. To sell online, each multi-night package has to feel clear and trustworthy, with inclusions, length of stay and price easy to compare. The previous website made browsing confusing, and visitors were leaving without buying.

The goal was a polished, fast site that gives buyers enough detail to purchase with confidence, without the budget of a large booking platform.`,
    approach: [
      { title: 'Clear package details', body: 'Each package shows its inclusions, length of stay, price and property highlights in a consistent layout, so buyers have what they need without calling to ask.' },
      { title: 'Fast pages', body: 'The site is built to load quickly, with a 0.41s server response time and a 96/100 PageSpeed score shown in the linked reports. Speed matters for travel buyers who compare several options.' },
      { title: 'Easy comparison', body: 'The 7, 10, 14 and 21-night packages appear as scannable cards showing duration, destination and value, which makes comparing options quicker.' },
    ],
    deepDive: `<p>The redesign focused on making high-value travel packages easy to understand and compare: a consistent card layout, clear inclusions and transparent pricing across properties in Australia and New Zealand.</p><p>The site runs on Next.js and Vercel. Its speed figures link to live PageSpeed reports, so they can be re-checked at any time.</p><p>This case study describes the website and its features. It does not claim a measured change in sales or bookings.</p>`,
    results: [
      { label: 'PageSpeed 96/100', verified: true, href: PAGESPEED('bestbreaks.com.au') },
      { label: '0.41s TTFB', verified: true, href: PAGESPEED('bestbreaks.com.au') },
    ],
  },
  'sky-high-tree': {
    name: 'Sky High Tree Service',
    metaTitle: 'Tree Service Website Design, Sky High',
    metaDescription: "Explore Embra's Sky High Tree Service website project: service information, project photos and clear call and estimate options for local customers.",
    articleDescription: "Explore Embra's Sky High Tree Service website project: service information, project photos and clear call and estimate options for local customers.",
    dateModified: '2026-10-19',
    domain: 'skyhightreeservicechicago.com',
    url: 'https://skyhightreeservicechicago.com/',
    industry: 'Tree Service',
    location: 'Naperville / Chicagoland, IL',
    tags: ['Web Design', 'Service Information', 'Estimate Requests'],
    challengeLabel: 'Project Focus',
    challenge: `Tree-care customers may be planning routine work or looking for help after a storm. This project presents the business's services and gives visitors clear routes to make contact.

The design focus is straightforward: explain the available work, show project images and coverage, and make calling or requesting an estimate easy to find.`,
    approach: [
      { title: 'Clear contact routes', body: 'Phone links and a free-estimate form offer two ways to contact the team. Visitors can choose the route that suits their inquiry.' },
      { title: 'Services and project photos', body: 'Service descriptions and project images help visitors understand the work offered and prepare questions for the company.' },
      { title: 'Service-area information', body: 'A coverage section helps visitors check whether their location is listed before contacting the team. This is a website feature, not evidence of a particular search ranking.' },
    ],
    deepDiveLabel: 'Project Walkthrough',
    deepDive: `<p>The live website brings service descriptions, a project gallery, service-area information and contact options into one browsing journey. Homeowners can review the work offered and move to a call or estimate request.</p><p>This case study describes visible website features. It does not claim a measured increase in leads, revenue or Google rankings. Outcome reporting requires a dated source and a clearly defined comparison period.</p><p>Planning a similar site? Explore our <a href="/niches/tree-service-website-design">tree service website design</a> offer, compare <a href="/pricing">website plans</a> or request a <a href="/contact">free homepage sample</a>.</p>`,
    resultsLabel: 'Website Features',
    results: [
      { label: 'Call and estimate options' },
      { label: 'Project gallery' },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(CASE_STUDIES).map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const cs = CASE_STUDIES[params.slug];
  if (!cs) return {};
  // 2026-10-13 Phase 1: these strings used escaped placeholders (\${...}), so Google
  // received a literal "/portfolio/${params.slug}" canonical for every case study.
  // Search snippets now use verified results only (unverified claims wait for Phase 2 evidence).
  const verifiedResults = cs.results.filter((r) => r.verified || r.source).map((r) => r.label).join(', ');
  return {
    alternates: { canonical: `/portfolio/${params.slug}` },
    title: cs.metaTitle,
    description: cs.metaDescription || `How Embra Technologies designed and built a fast, mobile-first website for ${cs.name} in ${cs.location}. Verified result: ${verifiedResults}.`,
    openGraph: {
      title: `${cs.name} Case Study, Embra Technologies`,
      description: cs.metaDescription || `Web design case study for ${cs.name} (${cs.industry}, ${cs.location}). Verified: ${verifiedResults}.`,
      url: `${siteConfig.siteUrl}/portfolio/${params.slug}`,
      images: [
        {
          url: siteConfig.ogImage,
          width: siteConfig.ogImageWidth,
          height: siteConfig.ogImageHeight,
          alt: `${cs.name} Case Study, Embra Technologies`,
        },
      ],
    },
  };
}

export default function CaseStudyPage({ params }) {
  const cs = CASE_STUDIES[params.slug];
  if (!cs) notFound();

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${cs.name}, Web Design Case Study`,
    description: cs.articleDescription || `How Embra Technologies built a high-performance website for ${cs.name} in ${cs.location}.`,
    image: `${siteConfig.siteUrl}${siteConfig.ogImage}`,
    datePublished: '2026-09-30',
    dateModified: cs.dateModified || '2026-10-01',
    author: { '@type': 'Organization', name: siteConfig.legalName, url: siteConfig.siteUrl },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.legalName,
      url: siteConfig.siteUrl,
      logo: { '@type': 'ImageObject', url: `${siteConfig.siteUrl}${siteConfig.logo}` },
    },
    about: { '@type': 'Organization', name: cs.name, url: cs.url },
    url: `${siteConfig.siteUrl}/portfolio/${params.slug}`,
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteConfig.siteUrl}/` },
      { '@type': 'ListItem', position: 2, name: 'Portfolio', item: `${siteConfig.siteUrl}/portfolio` },
      { '@type': 'ListItem', position: 3, name: cs.name, item: `${siteConfig.siteUrl}/portfolio/${params.slug}` },
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
            {cs.timeline && <span className="cs-timeline-pill">⏱ {cs.timeline}</span>}
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
          <div className="cs-col-label">{cs.challengeLabel || 'The Challenge'}</div>
          <div className="cs-col-body">
            {cs.challenge.split(/\n\s*\n/).map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
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

      {/* ── Deep Dive ────────────────────────────────────────── */}
      {cs.deepDive && (
        <section className="cs-section">
          <div className="wrap cs-two-col">
            <div className="cs-col-label">{cs.deepDiveLabel || 'Deep Dive'}</div>
            <div className="cs-col-body" dangerouslySetInnerHTML={{ __html: cs.deepDive }} />
          </div>
        </section>
      )}

      {/* ── Tech Stack ───────────────────────────────────────── */}
      {cs.stack && (
        <section className="cs-section cs-section--alt">
          <div className="wrap cs-two-col">
            <div className="cs-col-label">Tech Stack</div>
            <div className="cs-col-body"><p>{cs.stack}</p></div>
          </div>
        </section>
      )}

      {/* ── Results ──────────────────────────────────────────── */}
      <section className="cs-section">
        <div className="wrap cs-two-col">
          <div className="cs-col-label">{cs.resultsLabel || 'Results'}</div>
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
