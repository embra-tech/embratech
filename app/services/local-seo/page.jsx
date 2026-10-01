import Link from 'next/link';
import Breadcrumb from '../../../components/Breadcrumb';
import PageHeader from '../../../components/PageHeader';
import Cta from '../../../components/Cta';
import JsonLd from '../../../components/JsonLd';
import siteConfig from '../../../lib/site-config';

export const metadata = {
  alternates: { canonical: '/services/local-seo' },
  title: 'Local SEO Services for Home Service Businesses | Embra',
  description:
    'Dominate local search results. We optimize your Google Business Profile, fix NAP consistency, and build service-area pages to generate more leads.',
  openGraph: {
    title: 'Local SEO Services for Home Service Businesses | Embra',
    description:
      'Dominate local search results. We optimize your Google Business Profile, fix NAP consistency, and build service-area pages to generate more leads.',
    url: `${siteConfig.siteUrl}/services/local-seo`,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'Embra Technologies Local SEO',
      },
    ],
  },
};

const SEO_FEATURES = [
  {
    title: 'Google Business Profile Optimization',
    desc: 'Your Google Business Profile (GBP) is arguably the most important asset for local visibility. We claim, verify, and fully optimize your profile to ensure you appear in the highly coveted "Local Map Pack." This includes updating your business hours, selecting the exact correct primary and secondary categories, uploading high-quality photos, and responding to reviews. We also help you implement a strategy for continually generating new reviews, signaling to Google that your business is active, trusted, and relevant to local searchers.',
    points: ['Claiming and verification', 'Category optimization', 'Review generation strategies', 'Ongoing profile updates'],
  },
  {
    title: 'LocalBusiness Schema Markup',
    desc: 'Search engines are smart, but they still need structured data to understand exactly who you are, what you do, and where you do it. We implement comprehensive LocalBusiness JSON-LD schema markup directly into the code of your website. This hidden code speaks directly to search engines, explicitly detailing your business name, address, phone number, operating hours, service area, and customer ratings. This technical foundation prevents confusion and significantly boosts your chances of showing up for hyper-local queries.',
    points: ['Advanced JSON-LD implementation', 'Service area specification', 'Review rating aggregation', 'Direct search engine communication'],
  },
  {
    title: 'NAP Consistency & Digital Identity',
    desc: 'NAP stands for Name, Address, and Phone number. For local SEO to be effective, your NAP must be perfectly consistent across the entire web-on your website, your GBP, Yelp, Angi, local directories, and social media. Inconsistent information confuses search engines and degrades trust, severely harming your rankings. We conduct a thorough audit of your digital identity, claiming profiles on relevant directories and correcting any mismatched data. This solidifies your digital footprint and establishes undeniable local authority.',
    points: ['Comprehensive directory audits', 'Correction of mismatched data', 'Citation building in niche directories', 'Unified digital identity management'],
  },
  {
    title: 'Dedicated Service-Area Pages',
    desc: 'If you serve multiple cities or counties, trying to rank for all of them on just your homepage is nearly impossible. We build dedicated, hyper-targeted service-area pages (location landing pages) for each distinct area you operate in. These pages feature localized content, specific customer testimonials from that area, and optimized headings tailored to local search terms (e.g., "Emergency Plumber in Brooklyn" vs "Emergency Plumber in Queens"). This expansion strategy casts a wider net, capturing leads from surrounding towns.',
    points: ['Custom location landing pages', 'Localized on-page content', 'Targeted heading structures', 'Expanded geographical reach'],
  },
];

const SEO_FAQS = [
  {
    q: 'How long does local SEO take to work?',
    a: 'Local SEO is a marathon, not a sprint. While technical fixes (like schema markup) and GBP optimization can show improvements in as little as 30 to 60 days, establishing strong authority and consistently ranking in the top 3 of the map pack for competitive terms usually takes 3 to 6 months of sustained effort. The exact timeline depends on your starting point, your competition, and the size of your service area.',
  },
  {
    q: 'Do I need separate pages for each city I serve?',
    a: 'Yes, if you want to rank well in those cities. Search engines prefer to show the most relevant result to a user based on their location. Having dedicated service-area pages signals that you specifically cater to that community. Our local SEO strategy includes building and optimizing these pages to capture traffic across your entire service radius, rather than just your immediate zip code.',
  },
];

export default function LocalSeoPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.siteUrl },
          { '@type': 'ListItem', position: 2, name: 'Services', item: `${siteConfig.siteUrl}/services` },
          { '@type': 'ListItem', position: 3, name: 'Local SEO', item: `${siteConfig.siteUrl}/services/local-seo` },
        ],
      },
      {
        '@type': 'Service',
        serviceType: 'Local SEO',
        provider: {
          '@type': 'Organization',
          name: siteConfig.brandName,
          url: siteConfig.siteUrl,
        },
        description: 'Local SEO services including Google Business Profile optimization, LocalBusiness schema, and NAP consistency.',
        areaServed: siteConfig.address ? siteConfig.address.city : 'Nationwide',
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
            title={<>Local SEO That <span className="highlight-text">Gets You Found</span> on Google</>}
            sub="Stop letting competitors steal your local leads. We optimize your digital presence to dominate the Google Map Pack and local search results."
          />
        </div>
      </section>

      {/* Intro Text to hit word count */}
      <section style={{ padding: '60px 0', borderBottom: '1px solid var(--line-dark)' }}>
        <div className="wrap" style={{ maxWidth: 800, margin: '0 auto', color: 'var(--muted-inv)', fontSize: '1.05rem', lineHeight: 1.7 }}>
          <p style={{ marginBottom: '20px' }}>
            When a pipe bursts, a roof leaks, or an AC unit breaks down in the middle of summer, homeowners don't spend hours researching-they pull out their phones and search for a local professional right away. If your business doesn't appear at the top of those local search results, specifically in the Google Map Pack, you are losing out on the highest-intent, most profitable leads available. Local SEO (Search Engine Optimization) is the systematic process of improving your visibility for these exact, location-based searches.
          </p>
          <p style={{ marginBottom: '20px' }}>
            For home service businesses, local SEO is not just about sprinkling keywords on your homepage. It requires a holistic approach that connects your website, your Google Business Profile, and your overall digital identity across the web. We focus heavily on on-page SEO, ensuring your title tags, meta descriptions, and heading hierarchy accurately reflect your services and locations. This clear structure tells Google exactly what queries you should rank for.
          </p>
          <p>
            Whether you are looking to dominate your immediate neighborhood or expand your reach across multiple counties, our local SEO services provide a scalable blueprint for growth. We integrate seamlessly with our <Link href="/services" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>other services</Link> like custom web design to ensure your underlying technical platform is flawless. Ready to climb the rankings? View our <Link href="/pricing" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>pricing</Link> or <Link href="/contact" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>contact us</Link> for a free audit of your current local search visibility.
          </p>
        </div>
      </section>

      {/* What is included */}
      <section style={{ padding: '80px 0' }}>
        <div className="wrap">
          <div className="section-head " style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div className="section-badge"><span className="badge-pill">Methodology</span><span className="badge-text">How We Rank You</span></div>
            <h2>Comprehensive Local SEO Strategies</h2>
            <p>We handle the technical details so you can focus on serving your customers.</p>
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
                <h4 style={{ color: '#fff', fontSize: '1.05rem', marginBottom: '8px' }}>{faq.q}</h4>
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
