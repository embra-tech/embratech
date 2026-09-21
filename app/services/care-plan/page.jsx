import Link from 'next/link';
import Breadcrumb from '../../../components/Breadcrumb';
import PageHeader from '../../../components/PageHeader';
import Cta from '../../../components/Cta';

export const metadata = {
  alternates: { canonical: '/services/care-plan' },
  title: 'Website Care Plan ($150/mo) — Hosting, Maintenance & SEO — Embra Technologies',
  description:
    'Keep your website fast, secure, and ranking. Our $150/month Care Plan includes high-performance hosting, content updates, security patches, monthly SEO reports, and 24-hour turnaround support. Cancel anytime.',
  openGraph: {
    title: 'Website Care Plan ($150/mo) — Embra Technologies',
    description:
      'Everything needed to keep your business website running at peak speed and ranking on Google. No lock-in contracts, full client ownership.',
    url: 'https://www.embratechnologies.org/services/care-plan',
    images: [
      {
        url: 'https://www.embratechnologies.org/opengraph-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Embra Technologies Website Care Plan',
      },
    ],
  },
};

const CARE_FEATURES = [
  {
    title: 'Ultra-Fast Managed Hosting',
    desc: 'Global edge-network delivery with 99.99% uptime, automated SSL certificates, and sub-second server response times.',
    points: ['Enterprise edge CDN routing', 'Automated SSL renewals', 'DDoS mitigation & firewall', 'Continuous uptime monitoring'],
  },
  {
    title: 'Content & Layout Updates',
    desc: 'Need to add new team members, update service pricing, swap photos, or post customer reviews? We handle it within 24 hours.',
    points: ['Up to 2 hours of monthly updates', 'Text and image revisions', 'New promotion banners & announcements', '24-hour business turnaround'],
  },
  {
    title: 'Speed & Core Web Vitals Audits',
    desc: 'We continually audit and optimize your site to preserve sub-second load times and ensure your 95+ PageSpeed scores never slip.',
    points: ['Monthly Lighthouse & CrUX audit', 'Asset compression maintenance', 'Cache validation checks', 'Mobile responsiveness assurance'],
  },
  {
    title: 'Security & Dependency Updates',
    desc: 'Regular audits of server-side APIs, form endpoints, and package dependencies so your site stays fortified against vulnerabilities.',
    points: ['Package & security patches', 'Spam protection for contact forms', 'Secure header compliance', 'Daily automated backups'],
  },
  {
    title: 'Monthly Local SEO & Keyword Tracking',
    desc: 'A plain-English monthly report showing your Google rankings, local map pack visibility, and search impression trajectories.',
    points: ['Target keyword ranking reports', 'Google Business Profile health check', 'Search Console crawl monitoring', 'Actionable growth recommendations'],
  },
  {
    title: 'Priority 24-Hour Support',
    desc: 'Direct access to the senior engineers and designers who built your site. No ticketing queues, no offshore call centers.',
    points: ['Direct email & WhatsApp access', 'Guaranteed 24-hour SLA response', 'Emergency support for critical outages', 'Friendly, non-technical explanations'],
  },
];

const CARE_FAQS = [
  {
    q: 'Do I have to sign a long-term contract?',
    a: 'No. The Care Plan is billed on a rolling month-to-month basis. You can cancel at any time with a simple written email notice. There are no cancellation penalties or hidden lock-in fees.',
  },
  {
    q: 'What happens to my website if I cancel the Care Plan?',
    a: 'You own 100% of your website code, domain, and assets. Upon cancellation, we transfer all source code, credentials, and hosting documentation to you within 7 business days. Your website continues running without interruption.',
  },
  {
    q: 'Can I add the Care Plan to a website you did not build?',
    a: 'Yes. If you have an existing modern website (React, Next.js, or static HTML), we conduct an initial technical and performance audit. Once onboarded, we take over full maintenance, security, and updates.',
  },
  {
    q: 'How do I submit update requests?',
    a: 'Simply email sales@embratechnologies.org or message us via WhatsApp with your requested changes. Minor updates are typically completed and live within 24 business hours.',
  },
];

export default function CarePlanPage() {
  return (
    <div className="page-shell">
      <section className="page-hero">
        <div className="wrap">
          <Breadcrumb label="Care Plan" href="/services/care-plan" />
          <PageHeader
            pill="Maintenance &amp; Support"
            title={<>The $150/mo <span className="highlight-text">Website Care Plan</span></>}
            sub="Never worry about updates, security patches, or slow loading speeds again. We keep your website running at peak performance so you can focus on running your business."
          />
        </div>
      </section>

      {/* Pricing Pill Banner */}
      <section style={{ padding: '30px 0', borderBottom: '1px solid var(--line-dark)', background: 'rgba(255,255,255,0.015)' }}>
        <div className="wrap" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '20px' }}>
          <div>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: '#fff' }}>
              $150 <span style={{ fontSize: '1rem', fontWeight: 400, color: 'var(--muted-inv)' }}>/ month</span>
            </div>
            <div style={{ fontSize: '0.88rem', color: 'var(--muted-inv)', marginTop: '4px' }}>
              Rolling monthly subscription · No contracts · Cancel anytime with 7-day file handover
            </div>
          </div>
          <a href="/contact" className="btn-flip btn-primary btn-large">
            <span className="btn-flip-inner">
              <span className="btn-flip-state">Get Started Today &rarr;</span>
              <span className="btn-flip-state" aria-hidden="true">Get Started Today &rarr;</span>
            </span>
          </a>
        </div>
      </section>

      {/* What is included */}
      <section style={{ padding: '80px 0' }}>
        <div className="wrap">
          <div className="section-head reveal-up" style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div className="section-badge"><span className="badge-pill">Coverage</span><span className="badge-text">What Is Included</span></div>
            <h2>Comprehensive Maintenance, Performance &amp; Peace of Mind</h2>
            <p>Every critical piece of ongoing website health managed by senior builders.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            {CARE_FEATURES.map((f) => (
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

      {/* SLA & Handover Guarantees */}
      <section style={{ padding: '80px 0', borderTop: '1px solid var(--line-dark)', background: 'rgba(255,255,255,0.015)' }}>
        <div className="wrap" style={{ maxWidth: 860, margin: '0 auto' }}>
          <div className="section-head reveal-up" style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2>Transparent SLAs and Full Ownership</h2>
            <p>No fine print. We believe you should stay because the service is great, not because you're locked in.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
            <div style={{ padding: '24px', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--line-dark)', borderRadius: '12px' }}>
              <strong style={{ color: '#fff', fontSize: '1.1rem', display: 'block', marginBottom: '8px' }}>24-Hour Turnaround</strong>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted-inv)' }}>Content updates and standard inquiries are actioned within one business day.</p>
            </div>
            <div style={{ padding: '24px', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--line-dark)', borderRadius: '12px' }}>
              <strong style={{ color: '#fff', fontSize: '1.1rem', display: 'block', marginBottom: '8px' }}>100% Asset Ownership</strong>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted-inv)' }}>You own your domain, code, and content. We never hold client files hostage.</p>
            </div>
            <div style={{ padding: '24px', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--line-dark)', borderRadius: '12px' }}>
              <strong style={{ color: '#fff', fontSize: '1.1rem', display: 'block', marginBottom: '8px' }}>7-Day Handover</strong>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted-inv)' }}>If you ever cancel, we provide a full transfer of all repository files and credentials within 7 days.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: '80px 0' }}>
        <div className="wrap" style={{ maxWidth: 800, margin: '0 auto' }}>
          <div className="section-head reveal-up" style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2>Care Plan Frequently Asked Questions</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {CARE_FAQS.map((faq) => (
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
