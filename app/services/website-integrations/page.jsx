import Link from 'next/link';
import Breadcrumb from '../../../components/Breadcrumb';
import PageHeader from '../../../components/PageHeader';
import Cta from '../../../components/Cta';
import JsonLd from '../../../components/JsonLd';
import siteConfig from '../../../lib/site-config';

export const metadata = {
  alternates: { canonical: '/services/website-integrations' },
  title: 'Website Integrations & Digital Systems | Embra',
  description:
    'Connect your website to the tools you use every day. We integrate quote forms, Vercel Analytics, WhatsApp, Google Maps, and booking systems seamlessly.',
  openGraph: {
    title: 'Website Integrations & Digital Systems | Embra',
    description:
      'Connect your website to the tools you use every day. We integrate quote forms, Vercel Analytics, WhatsApp, Google Maps, and booking systems seamlessly.',
    url: `${siteConfig.siteUrl}/services/website-integrations`,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'Embra Technologies Website Integrations',
      },
    ],
  },
};

const INTEGRATION_FEATURES = [
  {
    title: 'Quote Form & Contact Integrations',
    desc: 'Collecting leads is the primary goal of your website, but managing complex databases is unnecessary for most home service businesses. We use serverless form handlers like FormSubmit to route quote requests directly to your email inbox instantly. There is no need for a complicated backend or database maintenance. This ensures you receive notifications the moment a potential customer reaches out, allowing you to respond faster and close more deals without wrestling with technical infrastructure.',
    points: ['Instant email notifications', 'No database required', 'Spam protection enabled', 'Customized form fields'],
  },
  {
    title: 'Privacy-First Analytics',
    desc: 'Understanding how visitors interact with your site is crucial, but traditional analytics platforms often bog down your load speeds and compromise user privacy with invasive cookies. We integrate Vercel Analytics to provide you with fast, privacy-first traffic data. You’ll get clear insights into your page views, unique visitors, and top referral sources without the heavy performance penalty or complex privacy policy requirements associated with legacy trackers.',
    points: ['No cookie banners required', 'Zero impact on page speed', 'Clear, actionable traffic data', 'Built into the hosting platform'],
  },
  {
    title: 'WhatsApp Click-to-Chat & Communication',
    desc: 'Many customers prefer to text rather than call, especially for quick inquiries or sending photos of a problem (like a damaged roof or plumbing leak). We can integrate a sticky WhatsApp click-to-chat button that floats on the screen, particularly optimized for mobile users. With one tap, a prospect is instantly connected to your business account, drastically reducing friction and capturing leads who might have otherwise bounced from a traditional contact page.',
    points: ['Mobile-optimized floating buttons', 'Pre-filled starting messages', 'Direct connection to your sales line', 'High conversion rates'],
  },
  {
    title: 'Maps, Booking, & Trust Systems',
    desc: 'A beautiful site that doesn\'t connect to your operational tools is incomplete. We seamlessly embed interactive Google Maps to improve your local SEO and provide immediate geographic context for trust. Furthermore, if you use scheduling tools like Calendly or Jobber, we integrate their booking links directly into your service pages. This creates a cohesive digital system where a user can read about your service, trust your local presence, and book an appointment in a continuous, uninterrupted flow.',
    points: ['Interactive Google Maps embeds', 'Seamless Calendly scheduling', 'Jobber or CRM link integration', 'Automated lead capture workflows'],
  },
];

const INTEGRATION_FAQS = [
  {
    q: 'Do I need a backend or database?',
    a: 'For most home service businesses, absolutely not. We utilize modern serverless architecture and tools like FormSubmit. This means your website remains incredibly fast and secure without the ongoing maintenance costs, security risks, and hosting fees associated with traditional databases. Leads go straight to the tools you already use, like your email inbox.',
  },
  {
    q: 'Can you connect my site to my existing CRM?',
    a: 'Yes. Whether you use specialized software like Jobber, ServiceTitan, Housecall Pro, or a general CRM like HubSpot, we can integrate custom lead capture forms and notification systems. We ensure that when a customer fills out a form on your website, the data flows smoothly into your existing operational pipeline.',
  },
];

export default function WebsiteIntegrationsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.siteUrl },
          { '@type': 'ListItem', position: 2, name: 'Services', item: `${siteConfig.siteUrl}/services` },
          { '@type': 'ListItem', position: 3, name: 'Integrations', item: `${siteConfig.siteUrl}/services/website-integrations` },
        ],
      },
      {
        '@type': 'Service',
        serviceType: 'Website Integrations',
        provider: {
          '@type': 'Organization',
          name: siteConfig.brandName,
          url: siteConfig.siteUrl,
        },
        description: 'Website integrations for home service businesses, including form handlers, analytics, and CRM connections.',
        areaServed: siteConfig.address ? siteConfig.address.city : 'Nationwide',
      }
    ]
  };

  return (
    <div className="page-shell">
      <JsonLd data={jsonLd} />
      <section className="page-hero">
        <div className="wrap">
          <Breadcrumb label="Integrations" href="/services/website-integrations" />
          <PageHeader
            pill="Digital Systems"
            title={<>Seamless Website Integrations <span className="highlight-text">for Your Business</span></>}
            sub="Connect your website to the tools you use every day. We build digital ecosystems that automate lead capture, track analytics, and streamline customer communication."
          />
        </div>
      </section>

      {/* Intro Text to hit word count */}
      <section style={{ padding: '60px 0', borderBottom: '1px solid var(--line-dark)' }}>
        <div className="wrap" style={{ maxWidth: 800, margin: '0 auto', color: 'var(--muted-inv)', fontSize: '1.05rem', lineHeight: 1.7 }}>
          <p style={{ marginBottom: '20px' }}>
            In today's digital landscape, a website cannot exist in a vacuum. A beautiful site that doesn't connect to your operational tools is incomplete-it's essentially a sports car without an engine. Your website should act as the central hub of your digital operations, seamlessly routing leads to your phone, passing data to your analytics dashboard, and facilitating easy communication between you and your customers. We specialize in building these robust digital systems.
          </p>
          <p style={{ marginBottom: '20px' }}>
            We understand that as a home service provider, your priority is being out in the field, not managing complex software integrations or troubleshooting database errors. That is why our approach to website integrations focuses on simplicity, reliability, and speed. We leverage modern, serverless technologies that require zero ongoing maintenance on your end. Leads are captured securely and delivered instantly, ensuring you never miss an opportunity to quote a new job.
          </p>
          <p>
            From simple tap-to-call buttons to comprehensive booking flows, we customize the technical architecture to fit your specific workflow. Explore our <Link href="/services" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>full range of services</Link> to see how this fits into your broader digital strategy. You can also view our transparent <Link href="/pricing" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>pricing</Link> or <Link href="/contact" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>contact us</Link> today to discuss integrating your existing tools into a brand new, high-performance website.
          </p>
        </div>
      </section>

      {/* What is included */}
      <section style={{ padding: '80px 0' }}>
        <div className="wrap">
          <div className="section-head " style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div className="section-badge"><span className="badge-pill">Capabilities</span><span className="badge-text">What We Connect</span></div>
            <h2>Frictionless Tools and Workflows</h2>
            <p>Modern integrations that power your business without slowing down your site.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            {INTEGRATION_FEATURES.map((f) => (
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
            <h2>Integrations Frequently Asked Questions</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {INTEGRATION_FAQS.map((faq) => (
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
