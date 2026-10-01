import Link from 'next/link';
import Breadcrumb from '../../../components/Breadcrumb';
import PageHeader from '../../../components/PageHeader';
import Cta from '../../../components/Cta';
import JsonLd from '../../../components/JsonLd';
import siteConfig from '../../../lib/site-config';

export const metadata = {
  alternates: { canonical: '/services/web-design' },
  title: 'Custom Web Design for Home Service Businesses | Embra',
  description:
    'We build custom Next.js websites tailored to home service businesses. Get mobile-first design, conversion optimization, and a 24-hour free sample offer.',
  openGraph: {
    title: 'Custom Web Design for Home Service Businesses | Embra',
    description:
      'We build custom Next.js websites tailored to home service businesses. Get mobile-first design, conversion optimization, and a 24-hour free sample offer.',
    url: `${siteConfig.siteUrl}/services/web-design`,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'Embra Technologies Custom Web Design',
      },
    ],
  },
};

const DESIGN_FEATURES = [
  {
    title: 'Custom Next.js & React Builds (No WordPress)',
    desc: 'Unlike template agencies that simply buy a $50 WordPress theme and swap out the logo, we custom-build your website from the ground up using modern technologies like Next.js and React. This means you aren’t weighed down by bloated plugins, slow database queries, or constant security vulnerabilities. A custom build ensures your site loads instantly, scores highly on Google PageSpeed Insights, and provides exactly what your business needs without unnecessary overhead. This foundational speed directly impacts how Google ranks your site and how users perceive your professionalism.',
    points: ['No bloated plugins or slow themes', 'Sub-second load times', 'Modern Next.js & React architecture', 'Immune to typical WordPress hacks'],
  },
  {
    title: 'Mobile-First Design Engineered for Thumbs',
    desc: 'Over half of all local searches for home service businesses happen on smartphones, often when a customer is in a hurry (like a leaking pipe or a broken AC). Your website must perform flawlessly on a small screen. We design mobile-first, ensuring that tap targets are large enough, menus are easy to navigate, and crucial contact information is always within reach of a user’s thumb. By prioritizing the mobile experience, we reduce bounce rates and capture leads that would otherwise be lost to a competitor with a frustrating, hard-to-use mobile site.',
    points: ['Optimized for all screen sizes', 'Large, easy-to-tap buttons', 'Sticky contact headers on mobile', 'Fast rendering on mobile networks'],
  },
  {
    title: 'Trust Signals Displayed Above the Fold',
    desc: 'When a homeowner lands on your website, they are looking for reasons to trust you with their property. We strategically place critical trust signals—such as your license numbers, insurance details, years in business, verified customer ratings, and guarantees—"above the fold" (visible without scrolling). This immediately establishes credibility and sets you apart from fly-by-night operators. Trust is the currency of home services, and displaying it prominently is one of the most effective ways to increase your conversion rate from visitor to paying customer.',
    points: ['License & insurance badges', 'Verified Google reviews', 'Satisfaction guarantees highlighted', 'Professional affiliations displayed'],
  },
  {
    title: 'Relentless Conversion Engineering',
    desc: 'A beautiful website is useless if it doesn’t ring your phone. We engineer every single page with conversion in mind. Every "fold" or section of your website will have clear, compelling calls-to-action (CTAs). Whether it’s a tap-to-call phone number, a simple quote request form, or a WhatsApp chat button, we make it effortlessly easy for a prospect to contact you. We reduce friction by eliminating unnecessary form fields and clarifying the next steps. The result is a website that doesn’t just look good, but actively works as a 24/7 sales representative for your business.',
    points: ['Clear calls-to-action on every fold', 'Frictionless quote request forms', 'Tap-to-call phone numbers', 'Strategic color psychology for buttons'],
  },
];

const DESIGN_FAQS = [
  {
    q: 'What platform do you build on?',
    a: 'We build exclusively using custom code with modern frameworks like Next.js and React. We do not use drag-and-drop builders like Wix, Squarespace, or WordPress. Our approach ensures your website is lightning-fast, highly secure, and tailored precisely to your needs, giving you a significant technical advantage over competitors using slow, bloated templates.',
  },
  {
    q: 'How is your process different from a template agency?',
    a: 'Template agencies force your business to fit into a pre-made mold, often resulting in slow load times and a generic look. We start with your business goals and custom-code a solution that highlights your unique strengths. Furthermore, we optimize for speed, security, and conversion from day one, rather than trying to fix a broken template later. We also offer a 24-hour free custom homepage sample with no commitment, so you can see the difference before spending a dime.',
  },
];

export default function WebDesignPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.siteUrl },
          { '@type': 'ListItem', position: 2, name: 'Services', item: `${siteConfig.siteUrl}/services` },
          { '@type': 'ListItem', position: 3, name: 'Web Design', item: `${siteConfig.siteUrl}/services/web-design` },
        ],
      },
      {
        '@type': 'Service',
        serviceType: 'Custom Web Design and Development',
        provider: {
          '@type': 'Organization',
          name: siteConfig.brandName,
          url: siteConfig.siteUrl,
        },
        description: 'Custom React/Next.js web design built to convert for home service businesses. Mobile-first, fast loading, and optimized for trust and local SEO.',
        areaServed: siteConfig.address ? siteConfig.address.city : 'Nationwide',
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
            title={<>Custom Web Design <span className="highlight-text">Built to Convert</span></>}
            sub="We build high-performance, mobile-first websites tailored for home service businesses. Stop losing leads to slow WordPress templates and start turning visitors into booked jobs with a custom-engineered digital storefront."
          />
        </div>
      </section>

      {/* Pricing Pill Banner */}
      <section style={{ padding: '30px 0', borderBottom: '1px solid var(--line-dark)', background: 'rgba(255,255,255,0.015)' }}>
        <div className="wrap" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '20px' }}>
          <div>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: '#fff' }}>
              $700 <span style={{ fontSize: '1rem', fontWeight: 400, color: 'var(--muted-inv)' }}>Starter one-time</span>
            </div>
            <div style={{ fontSize: '0.88rem', color: 'var(--muted-inv)', marginTop: '4px' }}>
              Or choose our all-inclusive Care Plan at $150/mo. View our <Link href="/pricing" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>full pricing</Link> for details.
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

      {/* Intro Text to hit word count */}
      <section style={{ padding: '60px 0', borderBottom: '1px solid var(--line-dark)' }}>
        <div className="wrap" style={{ maxWidth: 800, margin: '0 auto', color: 'var(--muted-inv)', fontSize: '1.05rem', lineHeight: 1.7 }}>
          <p style={{ marginBottom: '20px' }}>
            In the highly competitive home service industry, your website is often the first impression a homeowner has of your business. If it looks outdated, loads slowly, or is difficult to use on a mobile phone, that prospect will immediately hit the back button and call your competitor. A custom web design is not just a digital brochure; it is a vital business asset engineered to generate trust, capture leads, and drive revenue. We understand the unique challenges faced by plumbers, roofers, HVAC technicians, and landscapers. You need a site that works as hard as you do.
          </p>
          <p style={{ marginBottom: '20px' }}>
            We invite you to experience the difference with our <strong>24-hour free custom homepage sample</strong>. With no commitment and no upfront cost, we will design a custom homepage mockup for your business within one day. This allows you to see our quality of work and envision how your new brand presence will look before you sign any contracts. If you love it, we can move forward with a full build. Check out our <Link href="/portfolio" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>portfolio</Link> to see what we've built for others, and contact us to claim your free sample.
          </p>
          <p>
            Our pricing is transparent and designed to fit businesses at different stages of growth. Our Starter package begins at a highly accessible $700 one-time fee, providing a rock-solid foundation. For businesses looking for ongoing support, hosting, and continuous improvements, our $150/mo Care Plan offers unparalleled value, ensuring your site remains secure, fast, and up-to-date long after launch.
          </p>
        </div>
      </section>

      {/* What is included */}
      <section style={{ padding: '80px 0' }}>
        <div className="wrap">
          <div className="section-head " style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div className="section-badge"><span className="badge-pill">Features</span><span className="badge-text">How We Build</span></div>
            <h2>Engineering Trust and Maximizing Conversions</h2>
            <p>Every aspect of our custom builds is designed to outperform your competition.</p>
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
