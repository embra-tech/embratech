import Link from 'next/link';
import Breadcrumb from '../../../components/Breadcrumb';
import PageHeader from '../../../components/PageHeader';
import Cta from '../../../components/Cta';
import JsonLd from '../../../components/JsonLd';
import siteConfig from '../../../lib/site-config';

// 2026-10-25: copy rewritten (owner gave full permission) to read as specific, current and plain:
// removed an unsourced statistic, hype ("relentless", "unparalleled", "flawlessly"), the "immune to
// WordPress hacks" overclaim and "color psychology"; pricing aligned with /pricing; FAQs expanded with
// the questions buyers ask (cost, timing, trades) and links to every industry page. Layout unchanged.

const PAGE_DESCRIPTION = 'Custom website design for plumbers, HVAC companies, roofers, tree services, handymen and auto body shops. From $700, or $600 paid in full. Free homepage sample first.';

export const metadata = {
  alternates: { canonical: '/services/web-design' },
  title: 'Website Design for Home Service Businesses',
  description: PAGE_DESCRIPTION,
  openGraph: {
    title: 'Website Design for Home Service Businesses | Embra',
    description: PAGE_DESCRIPTION,
    url: `${siteConfig.siteUrl}/services/web-design`,
    images: [
      {
        url: siteConfig.ogImage,
        width: siteConfig.ogImageWidth,
        height: siteConfig.ogImageHeight,
        alt: 'Website design for home service businesses by Embra Technologies',
      },
    ],
  },
};

const link = { color: 'var(--primary)', textDecoration: 'underline' };

const DESIGN_FEATURES = [
  {
    title: 'Custom-Built Sites, Not Templates',
    desc: 'Many contractor websites are a bought theme with the logo swapped in, plus a stack of plugins that need constant updates. We build each site from scratch with Next.js, around the services you actually sell and the areas you actually cover. There are no plugins to keep patching, pages load quickly on a phone, and you own the finished website.',
    points: ['Built from scratch for your business', 'No plugins to keep updating', 'Fast loading on phones', 'You own the site and its content'],
  },
  {
    title: 'Designed for Phones First',
    desc: 'Most people looking for an urgent home repair search on a phone, often while something is leaking, broken or blocking the driveway. We design the phone version first: large buttons, a menu that is easy to use with one thumb, readable text without zooming, and your phone number always within reach. The desktop version is built from there.',
    points: ['Works on every screen size', 'Large, easy-to-tap buttons', 'Phone number always within reach', 'Readable without zooming'],
  },
  {
    title: 'Trust Signals Near the Top',
    desc: 'Homeowners are deciding whether to let a stranger into their home. Near the top of the page we show what helps them decide: your license and insurance details where they apply, years in business, real reviews, photos of your own work, and any guarantee you offer. These answer the first questions before a visitor has to scroll or search.',
    points: ['License and insurance details', 'Real Google reviews', 'Photos of your own work', 'Your guarantees, if you offer them'],
  },
  {
    title: 'A Clear Next Step on Every Page',
    desc: 'A good-looking website still has to make the phone ring. Every section ends with a clear next step: a tap-to-call button, a short quote form or a text option. Forms ask only for what you need to call the customer back, and each service page has its own quote button so requests arrive with the right context.',
    points: ['Tap-to-call on every page', 'Short quote request forms', 'A quote button on each service', 'Text or WhatsApp option if you use one'],
  },
];

const DESIGN_FAQS = [
  {
    q: 'How much does a website for a home service business cost?',
    a: 'Our Starter website is $700 total with split payments, or $600 paid in full, for a custom homepage plus 2 inner pages. Growth is $1,000 for up to 7 pages with structured data and Google Business Profile setup, and Pro is $1,500 with an admin dashboard and inquiry management. An optional Care Plan at $150/month covers hosting, security, SEO monitoring and content updates.',
  },
  {
    q: 'How long does it take to build a contractor website?',
    a: 'Most projects take 2 to 4 weeks from the first call to launch, depending on how many pages you need and how quickly your photos and details are ready. Before you commit to anything, we design a free custom homepage sample within 24 hours.',
  },
  {
    q: 'What platform do you build on?',
    a: 'We write custom code with Next.js and React rather than using Wix, Squarespace or a WordPress theme. That keeps pages fast and avoids plugin updates. You own the finished website, and there is no long-term contract.',
  },
  {
    q: 'How is this different from a template or a website builder?',
    a: 'A template makes your business fit a pre-made layout. We start from your services, your service area and the questions your customers ask, then design pages around them. You see a free homepage sample before deciding, so you can judge the difference yourself.',
  },
  {
    q: 'Which trades do you build websites for?',
    a: 'Home service businesses across the US, including plumbers, HVAC companies, roofers, tree services, handymen, landscapers and auto body shops. Each trade has its own page explaining what its website needs.',
  },
];

export default function WebDesignPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      // 2026-10-13: removed a second BreadcrumbList (Home > Services > Web Design) that contradicted
      // the visible breadcrumb; <Breadcrumb> below already outputs the matching one.
      {
        '@type': 'Service',
        serviceType: 'Website Design for Home Service Businesses',
        provider: {
          '@type': 'Organization',
          name: siteConfig.brandName,
          url: siteConfig.siteUrl,
        },
        description: PAGE_DESCRIPTION,
        areaServed: { '@type': 'Country', name: 'United States' }, // 2026-10-13 option B: was the old Brooklyn address city
      }
    ]
  };

  return (
    <div className="page-shell">
      <JsonLd data={jsonLd} />
      <section className="page-hero">
        <div className="wrap">
          <Breadcrumb label="Web Design" href="/services/web-design" />
          <PageHeader
            pill="Custom Web Design"
            title={<>Website Design for <span className="highlight-text">Home Service Businesses</span></>}
            sub="Custom websites for US plumbers, roofers, HVAC companies, tree services and other home service businesses. Give customers a clear way to explore your services, call your team and request an estimate. See a free custom homepage sample before you decide to buy."
          />
        </div>
      </section>

      {/* Pricing Pill Banner */}
      <section style={{ padding: '30px 0', borderBottom: '1px solid var(--line-dark)', background: 'rgba(255,255,255,0.015)' }}>
        <div className="wrap" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '20px' }}>
          <div>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: '#fff' }}>
              $700 <span style={{ fontSize: '1rem', fontWeight: 400, color: 'var(--muted-inv)' }}>Starter with split payments, or $600 paid in full</span>
            </div>
            <div style={{ fontSize: '0.88rem', color: 'var(--muted-inv)', marginTop: '4px' }}>
              Optional Care Plan at $150/mo for hosting, security, SEO monitoring and updates. View our <Link href="/pricing" style={link}>full pricing</Link> for details.
            </div>
          </div>
          <Link href="/contact" className="btn-flip btn-primary btn-large">
            <span className="btn-flip-inner">
              <span className="btn-flip-state">Get Your Free Sample &rarr;</span>
              <span className="btn-flip-state" aria-hidden="true">Get Your Free Sample &rarr;</span>
            </span>
          </Link>
        </div>
      </section>

      {/* Introduction */}
      <section style={{ padding: '60px 0', borderBottom: '1px solid var(--line-dark)' }}>
        <div className="wrap" style={{ maxWidth: 800, margin: '0 auto', color: 'var(--muted-inv)', fontSize: '1.05rem', lineHeight: 1.7 }}>
          <p style={{ marginBottom: '20px' }}>
            For most home service businesses, the website is where a homeowner decides whether to call. If it loads slowly, is hard to use on a phone or doesn&apos;t make clear what you do and where, they go back to the search results and call the next company. A good contractor website answers three questions quickly: do you do this job, can I trust you, and how do I reach you?
          </p>
          <p style={{ marginBottom: '20px' }}>
            We design websites around those questions for each trade we work with. See what that looks like for{' '}
            <Link href="/niches/plumber-website-design" style={link}>plumbers</Link>,{' '}
            <Link href="/niches/hvac-website-design" style={link}>HVAC companies</Link>,{' '}
            <Link href="/niches/roofing-website-design" style={link}>roofers</Link>,{' '}
            <Link href="/niches/tree-service-website-design" style={link}>tree services</Link>,{' '}
            <Link href="/niches/web-design-for-handyman-businesses" style={link}>handymen</Link>,{' '}
            <Link href="/niches/landscaping-website-design" style={link}>landscapers</Link> and{' '}
            <Link href="/niches/auto-body-shop-website-design" style={link}>auto body shops</Link>.
          </p>
          <p style={{ marginBottom: '20px' }}>
            Before you pay anything, we design a <strong>free custom homepage sample</strong> for your business within 24 hours, with no commitment. You can judge the work on your own business rather than on someone else&apos;s, and browse our <Link href="/portfolio" style={link}>portfolio</Link> to see live client websites.
          </p>
          <p style={{ marginBottom: '20px' }}>
            Pricing is published, not quoted case by case: the Starter website is $700 total with split payments, or $600 paid in full, and the optional $150/month Care Plan covers hosting, security, SEO monitoring and content updates after launch. Our guide to <Link href="/blog/website-cost-for-home-service-businesses" style={link}>what a contractor website costs</Link> compares the other options on the market.
          </p>
          <p>
            Need help getting found after launch? Explore our <Link href="/services/local-seo" style={link}>local SEO services for home service businesses</Link>, including Google Business Profile optimization and service-page planning.
          </p>
        </div>
      </section>

      {/* What is included */}
      <section style={{ padding: '80px 0' }}>
        <div className="wrap">
          <div className="section-head " style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div className="section-badge"><span className="badge-pill">Features</span><span className="badge-text">How We Build</span></div>
            <h2>What Every Website We Build Includes</h2>
            <p>The basics a home service website needs to turn visitors into calls and quote requests.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            {DESIGN_FEATURES.map((f) => (
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
            <h2>Web Design Frequently Asked Questions</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {DESIGN_FAQS.map((faq) => (
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
