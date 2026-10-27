import Link from 'next/link';
import Breadcrumb from '../../../components/Breadcrumb';
import PageHeader from '../../../components/PageHeader';
import Cta from '../../../components/Cta';
import JsonLd from '../../../components/JsonLd';
import ProjectShot from '../../../components/ProjectShot';
import FaqAccordion from '../../../components/FaqAccordion';
import siteConfig from '../../../lib/site-config';

// 2026-10-21: copy rewritten (owner gave full permission). Removed promises nobody can keep
// ("ensure" Map Pack placement, "dominate", review-rating markup, "Yes" to a page per city) and
// added honest FAQs.
// 2026-10-26: layout made easier to scan (owner feedback): short intro, 3 ranking-factor cards,
// "How it works" steps with a call to action, a call to action on each feature card, FAQ dropdowns.
// The SEO wording is kept; only its presentation changed.

export const metadata = {
  alternates: { canonical: '/services/local-seo' },
  title: 'Local SEO Services for Home Service Businesses',
  description:
    'Local SEO for plumbers, HVAC, roofing, tree service and handyman businesses: Google Business Profile, service pages and consistent listings. Start with a free review.',
  openGraph: {
    title: 'Local SEO Services for Home Service Businesses | Embra',
    description:
      'Local SEO for plumbers, HVAC, roofing, tree service and handyman businesses: Google Business Profile, service pages and consistent listings. Start with a free review.',
    url: `${siteConfig.siteUrl}/services/local-seo`,
    images: [
      {
        url: siteConfig.ogImage,
        width: siteConfig.ogImageWidth,
        height: siteConfig.ogImageHeight,
        alt: 'Embra Technologies Local SEO',
      },
    ],
  },
};

const FACTORS = [
  {
    tag: 'You can improve',
    title: 'Relevance',
    text: 'How well your Google Business Profile and website match what someone searched for: accurate categories, every service listed, a clear page for each service.',
    icon: <><circle cx="11" cy="11" r="7" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></>,
  },
  {
    tag: 'Fixed',
    title: 'Distance',
    text: 'How far the searcher is from your business or service area. Nobody can change this, which is why no honest agency guarantees a Map Pack spot.',
    icon: <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></>,
  },
  {
    tag: 'You can improve',
    title: 'Prominence',
    text: 'How well known and well reviewed your business is: steady genuine reviews, consistent listings across the web and mentions from other local sites.',
    icon: <><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></>,
  },
];

const STEPS = [
  { n: '1', title: 'Free review', text: 'We check your Google Business Profile, website and service area, then send practical next steps.' },
  { n: '2', title: 'Clear quote', text: 'You get a quote for only the work your profile and website actually need. No long-term contract.' },
  { n: '3', title: 'We do the work', text: 'We fix your profile, service pages and listings, and keep you updated in plain language.' },
];

const SEO_FEATURES = [
  {
    title: 'Google Business Profile Optimization',
    desc: 'For most trades, the Business Profile brings in more calls than the website. We help you claim and verify it (Google runs verification and may need your input), choose accurate primary and secondary categories, list each service, keep hours current and add real job photos. We also set up a simple way to ask every happy customer for a review.',
    points: ['Claiming and verification support', 'Accurate categories and services', 'Review requests that follow Google\'s rules', 'Regular photo and profile updates'],
  },
  {
    title: 'Structured Data (Schema Markup)',
    desc: 'We add LocalBusiness structured data to your website that matches what visitors can see: business name, phone number, hours, service area and, where you have one, your address. It helps search engines read your details consistently. Structured data does not raise rankings by itself, and we don\'t add star-rating markup for reviews you host about yourself, because Google doesn\'t show it.',
    points: ['LocalBusiness structured data', 'Service area and hours', 'Matches your visible details', 'Checked with Google\'s Rich Results Test'],
  },
  {
    title: 'Consistent Business Details (NAP)',
    desc: 'NAP stands for name, address and phone number. When these differ between your website, your Google profile and directories like Yelp, Angi or the BBB, it muddies the picture for customers and for Google. We audit where you are listed, fix mismatches, and complete the directories that matter for your trade.',
    points: ['Listing audit', 'Fixing mismatched details', 'Relevant trade directories', 'One consistent business description'],
  },
  {
    title: 'Service and Area Pages That Earn Their Place',
    desc: 'Google ranks pages, not businesses, so each core service (drain cleaning, AC repair, tree removal) deserves its own clear page. For the towns you serve, we add pages only where there is something real to say: local jobs and reviews. Copying one page and swapping the town name tends to backfire; Google\'s spam policies treat that pattern as doorway pages.',
    points: ['One page per core service', 'Town pages backed by real local work', 'Clear headings and internal links', 'No copied city-swap pages'],
  },
];

const SEO_FAQS = [
  {
    q: 'How long does local SEO take to work?',
    a: 'Fixes to your Google Business Profile and website can show results within a few weeks to a few months. Ranking for competitive searches in a busy area usually takes longer and depends on your competition, your reviews, how far searchers are from your business and where you are starting from. We\'ll tell you what we see in the free review rather than promise a date.',
  },
  {
    q: 'Can you guarantee a top-3 spot in the Google Map Pack?',
    a: 'No, and you should be wary of anyone who does. Google decides local rankings, and one of its three main factors is the distance between the searcher and your business, which nobody can change. What we can do is improve the things Google weighs that you control: how relevant and complete your profile and website are, and how well known and well reviewed your business is.',
  },
  {
    q: 'Do I need a separate page for every city I serve?',
    a: 'Not necessarily. Start with strong pages for your core services, then add town pages only where you have real local work, reviews or details to show. A handful of genuinely useful town pages beats dozens of copies that only swap the city name.',
  },
  {
    q: 'What do you need from me?',
    a: 'Access to your Google Business Profile and website, a list of the services you offer and the areas you cover, recent job photos, and a list of past customers you are comfortable asking for reviews. We handle the rest and check in when we need a decision from you.',
  },
  {
    q: 'How is local SEO priced?',
    a: 'We start with a free review of your local search visibility and then quote the work your profile and website actually need, so you are not paying for tasks you don\'t need. Website clients can also add our $150/month Care Plan for hosting, security, SEO monitoring and content updates.',
  },
];

export default function LocalSeoPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      // 2026-10-13: removed a second BreadcrumbList (Home > Services > Local SEO) that contradicted
      // the visible breadcrumb; <Breadcrumb> below already outputs the matching one.
      {
        '@type': 'Service',
        serviceType: 'Local SEO',
        provider: {
          '@type': 'Organization',
          name: siteConfig.brandName,
          url: siteConfig.siteUrl,
        },
        description: 'Local SEO for home service businesses: Google Business Profile optimization, LocalBusiness structured data, consistent business listings and service-area pages.',
        areaServed: { '@type': 'Country', name: 'United States' }, // 2026-10-13 option B: was the old Brooklyn address city
      }
    ]
  };

  return (
    <div className="page-shell">
      <JsonLd data={jsonLd} />
      <section className="page-hero">
        <div className="wrap">
          <Breadcrumb label="Local SEO" href="/services/local-seo" />
          <PageHeader
            offer="seo"
            pill="Local Search Optimization"
            title={<>Local SEO for <span className="highlight-text">Home Service Businesses</span></>}
            sub="Help local customers find your plumbing, HVAC, roofing, tree service or handyman business. We improve your Google Business Profile, service pages and business information around the services and areas you actually cover."
          />
        </div>
      </section>

      {/* How local ranking works: short intro + 3 factor cards */}
      <section className="section-pad gradient-divider">
        <div className="wrap">
          <div className="section-head " style={{ textAlign: 'center', marginBottom: '36px', maxWidth: 760, marginLeft: 'auto', marginRight: 'auto' }}>
            <h2>How Google Decides Who Shows Up Locally</h2>
            <p>
              When a pipe bursts or an AC unit fails, homeowners search on their phones for someone nearby. Google&apos;s{' '}
              <a href="https://support.google.com/business/answer/7091" target="_blank" rel="noopener noreferrer" className="text-link">guidance on local ranking</a>{' '}
              names three factors. We focus on the two you can influence.
            </p>
          </div>
          <div className="factor-grid">
            {FACTORS.map((f) => (
              <div key={f.title} className={`factor-card${f.tag === 'Fixed' ? ' factor-fixed' : ''}`}>
                <div className="factor-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">{f.icon}</svg>
                </div>
                <span className="factor-tag">{f.tag}</span>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
          <div className="link-chips">
            <Link href="/blog/local-seo-guide-for-service-businesses" className="link-chip">Read the free local SEO guide &rarr;</Link>
            <Link href="/blog/hvac-local-seo" className="link-chip">HVAC SEO guide &rarr;</Link>
            <Link href="/services/web-design" className="link-chip">Need a new website too? &rarr;</Link>
          </div>
        </div>
      </section>

      {/* Real local SEO project (lazy-loaded, below the fold) */}
      <section style={{ padding: '0 0 10px' }}>
        <div className="wrap" style={{ maxWidth: 840, margin: '0 auto' }}>
          <ProjectShot
            name="pndlaundry"
            url="pndlaundry.com"
            alt="Pick N Drop Laundry website, a Los Angeles local SEO project by Embra Technologies"
            caption="Local SEO project: Pick N Drop Laundry, Los Angeles. Clicks 9 to 21, impressions 471 to 1,399 (Search Console)."
            href="/portfolio/pnd-laundry"
            linkText="Read the case study"
          />
        </div>
      </section>

      {/* How it works: 3 steps + CTA */}
      <section className="section-pad gradient-divider">
        <div className="wrap">
          <div className="section-head " style={{ textAlign: 'center', marginBottom: '36px' }}>
            <h2>How It Works</h2>
            <p>Three simple steps, starting with a free review.</p>
          </div>
          <div className="steps-row">
            {STEPS.map((s) => (
              <div key={s.n} className="step-card">
                <span className="step-num">{s.n}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            <Link href="/contact" className="btn-flip btn-primary btn-large">
              <span className="btn-flip-inner">
                <span className="btn-flip-state">Request My Free Local SEO Review &rarr;</span>
                <span className="btn-flip-state" aria-hidden="true">Request My Free Local SEO Review &rarr;</span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* What is included */}
      <section className="section-pad gradient-divider">
        <div className="wrap">
          <div className="section-head " style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div className="section-badge"><span className="badge-pill">Methodology</span><span className="badge-text">What We Do</span></div>
            <h2>What Our Local SEO Work Includes</h2>
            <p>Practical work on the things Google looks at for local results, so you can focus on serving your customers.</p>
          </div>

          <div className="feature-grid">
            {SEO_FEATURES.map((f) => (
              <article key={f.title} className="feature-card">
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
                <ul className="check-list">
                  {f.points.map((pt) => (
                    <li key={pt}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                      {pt}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="card-cta">Include this in my free review &rarr;</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad gradient-divider" style={{ background: 'rgba(255,255,255,0.015)' }}>
        <div className="wrap" style={{ maxWidth: 820, margin: '0 auto' }}>
          <div className="section-head " style={{ textAlign: 'center', marginBottom: '36px' }}>
            <h2>Local SEO Frequently Asked Questions</h2>
          </div>
          <FaqAccordion items={SEO_FAQS} />
        </div>
      </section>

      <Cta variant="default" />
    </div>
  );
}
