import Link from 'next/link';
import Breadcrumb from '../../../components/Breadcrumb';
import PageHeader from '../../../components/PageHeader';
import Cta from '../../../components/Cta';
import JsonLd from '../../../components/JsonLd';
import siteConfig from '../../../lib/site-config';

// 2026-10-21: copy rewritten (owner gave full permission). Removed promises nobody can keep
// ("ensure" Map Pack placement, "dominate", review-rating markup, "Yes" to a page per city) and
// added honest FAQs. Layout and styling unchanged.

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

const SEO_FEATURES = [
  {
    title: 'Google Business Profile Optimization',
    desc: 'For most trades, the Business Profile brings in more calls than the website. We help you claim and verify it (Google runs verification and may need your input), choose accurate primary and secondary categories, list each service, keep hours current and add real job photos. We also set up a simple way to ask every happy customer for a review. Google decides who appears in the Map Pack, and distance from the searcher is part of that, so we work on what you can influence: relevance, completeness and steady reviews.',
    points: ['Claiming and verification support', 'Accurate categories and services', 'Review requests that follow Google\'s rules', 'Regular photo and profile updates'],
  },
  {
    title: 'Structured Data (Schema Markup)',
    desc: 'We add LocalBusiness structured data to your website that matches what visitors can see: business name, phone number, hours, service area and, where you have one, your address. It helps search engines read your details consistently and connect your website to your business. Structured data does not raise rankings by itself, and we don\'t add star-rating markup for reviews you host about yourself, because Google doesn\'t show it.',
    points: ['LocalBusiness structured data', 'Service area and hours', 'Matches your visible details', 'Checked with Google\'s Rich Results Test'],
  },
  {
    title: 'Consistent Business Details (NAP)',
    desc: 'NAP stands for name, address and phone number. When these differ between your website, your Google profile and directories like Yelp, Angi or the BBB, it muddies the picture of who you are for customers and for Google. We audit where your business is listed, fix mismatched details, and add complete profiles on the directories that matter for your trade, with one consistent description everywhere.',
    points: ['Listing audit', 'Fixing mismatched details', 'Relevant trade directories', 'One consistent business description'],
  },
  {
    title: 'Service and Area Pages That Earn Their Place',
    desc: 'Google ranks pages, not businesses, so each core service (drain cleaning, AC repair, tree removal) deserves its own clear page. For the towns you serve, we add pages only where there is something real to say: jobs you have done there, local conditions and reviews from local customers. Copying one page and swapping the town name tends to backfire, and Google\'s spam policies treat that pattern as doorway pages.',
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
            pill="Local Search Optimization"
            title={<>Local SEO for <span className="highlight-text">Home Service Businesses</span></>}
            sub="Help local customers find your plumbing, HVAC, roofing, tree service or handyman business. We improve your Google Business Profile, service pages and business information around the services and areas you actually cover."
          />
        </div>
      </section>

      {/* Introduction */}
      <section style={{ padding: '60px 0', borderBottom: '1px solid var(--line-dark)' }}>
        <div className="wrap" style={{ maxWidth: 800, margin: '0 auto', color: 'var(--muted-inv)', fontSize: '1.05rem', lineHeight: 1.7 }}>
          <p style={{ marginBottom: '20px' }}>
            When a pipe bursts, a roof leaks or an AC unit fails in the middle of summer, homeowners pull out their phones and search for someone nearby. Local SEO is the work that helps your business show up for those searches, both in the map results and in the regular results below them.
          </p>
          <p style={{ marginBottom: '20px' }}>
            It isn&apos;t about sprinkling keywords on your homepage. Google&apos;s own <a href="https://support.google.com/business/answer/7091" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>guidance on local ranking</a> names three factors: how relevant your business is to the search, how far it is from the searcher, and how well known it is. We focus on the two you can influence, relevance and prominence, through your Google Business Profile, clear service pages and consistent business details across the web.
          </p>
          <p style={{ marginBottom: '20px' }}>
            Want to see the steps first? Read our free <Link href="/blog/local-seo-guide-for-service-businesses" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>local SEO guide for home service businesses</Link>, or the <Link href="/blog/hvac-local-seo" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>HVAC local SEO guide</Link> if you run a heating and cooling company.
          </p>
          <p>
            Start with a free review of your local search visibility. We look at your website, Google Business Profile and target service area to identify practical next steps. <Link href="/contact" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>Request your local SEO review</Link>. If you also need a new website, explore our <Link href="/services/web-design" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>website design for home service businesses</Link>.
          </p>
        </div>
      </section>

      {/* What is included */}
      <section style={{ padding: '80px 0' }}>
        <div className="wrap">
          <div className="section-head " style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div className="section-badge"><span className="badge-pill">Methodology</span><span className="badge-text">What We Do</span></div>
            <h2>What Our Local SEO Work Includes</h2>
            <p>Practical work on the things Google looks at for local results, so you can focus on serving your customers.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            {SEO_FEATURES.map((f) => (
              <article
                key={f.title}
                style={{
                  background: 'var(--card-bg, rgba(255,255,255,0.03))',
                  border: '1px solid var(--line-dark)',
                  borderRadius: '16px',
                  padding: '32px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                }}
              >
                <h3 style={{ color: '#fff', fontSize: '1.25rem' }}>{f.title}</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--muted-inv)', lineHeight: 1.6 }}>{f.desc}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '8px 0 0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {f.points.map((pt) => (
                    <li key={pt} style={{ fontSize: '0.88rem', color: 'var(--paper-bright)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                      {pt}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: '80px 0', borderTop: '1px solid var(--line-dark)', background: 'rgba(255,255,255,0.015)' }}>
        <div className="wrap" style={{ maxWidth: 800, margin: '0 auto' }}>
          <div className="section-head " style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2>Local SEO Frequently Asked Questions</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {SEO_FAQS.map((faq) => (
              <div key={faq.q} style={{ padding: '24px', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--line-dark)', borderRadius: '12px' }}>
                <h3 style={{ color: '#fff', fontSize: '1.05rem', marginBottom: '8px' }}>{faq.q}</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--muted-inv)', lineHeight: 1.6 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Cta variant="default" />
    </div>
  );
}
