import Link from 'next/link';
import Breadcrumb from '../../components/Breadcrumb';
import PageHeader from '../../components/PageHeader';
import Cta from '../../components/Cta';
import StockPhoto from '../../components/StockPhoto';
import siteConfig from '../../lib/site-config';

// 2026-10-26: a trade photo on each card (Pexels, served from our site; hidden until downloaded).
const NICHE_PHOTOS = {
  'web-design-for-handyman-businesses': 'stock-handyman',
  'tree-service-website-design': 'stock-tree',
  'auto-body-shop-website-design': 'stock-autobody',
  'landscaping-website-design': 'stock-landscaping',
  'plumber-website-design': 'stock-plumber',
  'hvac-website-design': 'stock-hvac',
  'roofing-website-design': 'stock-roofing',
};

export const metadata = {
  title: 'Industry Website Design for Home Service Contractors',
  description:
    'Website design and local SEO for handymen, tree services, auto body shops, plumbers, HVAC contractors, landscapers and roofers. Custom builds from $700.',
  alternates: { canonical: '/niches' },
  openGraph: {
    title: 'Industry Website Design for Home Service Contractors | Embra',
    description:
      'Specialist website design and local SEO for handymen, tree services, auto body shops, plumbers, HVAC contractors, landscapers, and roofers.',
    url: `${siteConfig.siteUrl}/niches`,
    images: [
      {
        url: siteConfig.ogImage,
        width: siteConfig.ogImageWidth,
        height: siteConfig.ogImageHeight,
        alt: 'Embra Technologies, Industry-Specific Website Design',
      },
    ],
  },
};

const NICHES = [
  {
    slug: 'web-design-for-handyman-businesses',
    title: 'Handyman Website Design',
    desc: 'Show your services, license and a quote form near the top, so homeowners can see you do the job and book you quickly.',
    badge: 'Handyman',
    icon: (
      <>
        <circle className="niche-icon-pulse" cx="6.5" cy="17.5" r="1.1" fill="currentColor" stroke="none" />
        <path className="niche-icon-wrench" d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </>
    ),
    caseStudy: { label: 'Alaska Fast Fix Case Study', href: '/portfolio/alaska-fast-fix' },
  },
  {
    slug: 'tree-service-website-design',
    title: 'Tree Service Website Design',
    desc: 'Clear ways to call or request an estimate, proof of insurance, and service pages for removals, trimming and storm work.',
    badge: 'Tree Service',
    icon: (
      <>
        <path d="M12 22v-5" /><path d="M9 22h6" /><g className="niche-icon-tree"><path d="M12 3 6.5 10h3.2L5 17h14l-4.7-7h3.2L12 3z" /></g>
      </>
    ),
    caseStudy: { label: 'Sky High Tree Service Case Study', href: '/portfolio/sky-high-tree' },
  },
  {
    slug: 'auto-body-shop-website-design',
    title: 'Auto Body Shop Website Design',
    desc: 'Licensing, ratings and free estimate offers up front, plus photo estimates and clear answers about insurance claims.',
    badge: 'Auto Body',
    icon: (
      <>
        <g className="niche-icon-car"><path d="M5 17H3v-4.5L5.2 7a2 2 0 0 1 1.85-1.25h9.9A2 2 0 0 1 18.8 7L21 12.5V17h-2" /><line x1="9" y1="17" x2="15" y2="17" /><circle cx="7" cy="17" r="2" /><circle cx="17" cy="17" r="2" /></g><path className="niche-icon-sparkle" d="M19 2v3M17.5 3.5h3" />
      </>
    ),
    caseStudy: { label: 'Tuxford Collision Case Study', href: '/portfolio/tuxford-collision' },
  },
  {
    slug: 'landscaping-website-design',
    title: 'Landscaping Website Design',
    desc: 'Real project galleries, separate pages for weekly lawn care and bigger projects, and easy quote requests with photos.',
    badge: 'Landscaping',
    icon: (
      <>
        <g className="niche-icon-leaf"><path d="M2 22 16 8" /><path d="M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94z" /><path d="M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94z" /><path d="M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94z" /></g><path className="niche-icon-pulse" d="M20 21a9 9 0 0 0-9-9" />
      </>
    ),
    caseStudy: { label: 'V Vasquez LLC Case Study', href: '/portfolio/vvasquez-handyman' },
  },
  {
    slug: 'plumber-website-design',
    title: 'Plumber Website Design',
    desc: 'Tap-to-call on every page, separate pages for emergency and scheduled work, and your license and reviews up front.',
    badge: 'Plumbing',
    icon: (
      <>
        <path d="M6 3v2" /><path d="M10 3v2" /><path d="M6 19v2" /><path d="M10 19v2" /><path d="M4 9a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h2a5 5 0 0 1 4 2 5 5 0 0 0 4 2h1a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2 2 2 0 0 1-2-2 2 2 0 0 0-2-2H4z" /><path className="niche-icon-drop" d="M20 13.5c.9 1.2 1.5 2.1 1.5 2.9a1.5 1.5 0 0 1-3 0c0-.8.6-1.7 1.5-2.9z" />
      </>
    ),
    caseStudy: null,
  },
  {
    slug: 'hvac-website-design',
    title: 'HVAC Website Design',
    desc: 'AC and heating pages ready before each season, financing and maintenance plan details, and tap-to-call on every page.',
    badge: 'HVAC',
    icon: (
      <>
        <path d="M12 22V2" /><path className="niche-icon-up" d="m5 9 7-7 7 7" /><path className="niche-icon-down" d="m5 15 7 7 7-7" /><circle className="niche-icon-pulse" cx="12" cy="12" r="2.2" />
      </>
    ),
    caseStudy: null,
  },
  {
    slug: 'roofing-website-design',
    title: 'Roofing Website Design',
    desc: 'License, insurance and local proof up front, storm damage and replacement pages, and easy inspection requests.',
    badge: 'Roofing',
    icon: (
      <>
        <path className="niche-icon-roof" d="m3 9 9-7 9 7" /><path d="M5 7.5V20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7.5" /><polyline points="9 22 9 12 15 12 15 22" />
      </>
    ),
    caseStudy: null,
  },
];

// 2026-10-21: page-level BreadcrumbList ("Home > Industry Pages") removed; it disagreed with the
// visible <Breadcrumb>, which already outputs the matching one.

export default function NichesPage() {
  return (
    <div className="page-shell">

      {/* Hero */}
      <section className="page-hero">
        <div className="wrap">
          <Breadcrumb label="Industry Pages" href="/niches" />
          <PageHeader
            pill="By Industry"
            badge="Specialist Sites"
            title={<>Website design built for <span className="highlight-text">your trade.</span></>}
            sub="Each trade has different customers, questions and searches. We design websites around the trust signals, calls to action and local search structure that fit your industry."
          />
        </div>
      </section>

      {/* Niche Grid */}
      <section style={{ padding: '80px 0' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {NICHES.map((n) => (
              <Link
                key={n.slug}
                href={`/niches/${n.slug}`}
                className="niche-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  padding: '32px',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid var(--line-dark)',
                  borderRadius: '16px',
                  transition: 'border-color 0.2s',
                  textDecoration: 'none',
                }}
              >
                <StockPhoto name={NICHE_PHOTOS[n.slug]} variant="thumb" alt={`${n.badge} work, illustrating ${n.title.toLowerCase()}`} />
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div className="niche-card-icon" style={{
                    width: 48, height: 48, borderRadius: '12px',
                    background: 'rgba(37,99,235,0.1)', border: '1px solid rgba(37,99,235,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary-bright, #60a5fa)" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                      {n.icon}
                    </svg>
                  </div>
                  <span style={{
                    fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.08em',
                    textTransform: 'uppercase', color: 'var(--primary-bright)',
                    background: 'rgba(37,99,235,0.08)', padding: '4px 10px', borderRadius: '6px',
                  }}>{n.badge}</span>
                </div>

                <h2 style={{ color: '#fff', fontSize: '1.25rem', fontWeight: 700, margin: 0, lineHeight: 1.3 }}>
                  {n.title}
                </h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.65, margin: 0 }}>
                  {n.desc}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '8px', marginTop: 'auto', paddingTop: '12px', borderTop: '1px solid var(--line-dark)' }}>
                  <span style={{ color: 'var(--primary-bright)', fontWeight: 500, fontSize: '0.9rem' }}>
                    View Industry Guide →
                  </span>
                  {n.caseStudy && (
                    <span style={{ fontSize: '0.78rem', color: 'var(--muted-inv)', opacity: 0.7 }}>
                      Includes live case study
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Industry-Specific Section */}
      <section style={{ padding: '80px 0', borderTop: '1px solid var(--line-dark)', background: 'rgba(255,255,255,0.015)' }}>
        <div className="wrap" style={{ maxWidth: 800, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div className="section-badge"><span className="badge-pill">Methodology</span><span className="badge-text">Why Industry-Specific</span></div>
            <h2 style={{ marginTop: '16px' }}>A plumber's website needs different trust signals than a roofer's</h2>
            <p style={{ color: 'var(--text-muted)', marginTop: '12px', lineHeight: 1.7 }}>
              Generic web agencies build the same template for every trade. We study how customers behave when searching for each niche, what makes them trust a handyman versus an auto body shop, and engineer every conversion element around that psychology.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {[
              { q: 'Emergency trades (plumbers, HVAC, tree service)', a: 'Tap-to-call dominates the fold. Dispatch availability badges. Average response time displayed. Insurance proof. The customer is panicking, every extra second loses the job.' },
              { q: 'High-trust trades (auto body, roofing)', a: 'License numbers, manufacturer certifications, and free estimate guarantees lead. Before/after imagery. Insurance claim walkthrough pages. The customer is spending $3,000+ and needs confidence.' },
              { q: 'Seasonal trades (landscaping, HVAC)', a: 'Season-specific landing pages, service-area SEO clusters, and off-season content strategies to maintain rankings when searches dip.' },
            ].map((item) => (
              <div key={item.q} style={{ padding: '24px', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--line-dark)', borderRadius: '12px' }}>
                <h3 style={{ color: '#fff', fontSize: '1.05rem', fontWeight: 600, marginBottom: '10px' }}>{item.q}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.65, margin: 0 }}>{item.a}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>
              See the results across our{' '}
              <Link href="/portfolio" style={{ color: 'var(--primary-bright)', textDecoration: 'underline' }}>live portfolio</Link>
              {' '}and learn about our full{' '}
              <Link href="/services/web-design" style={{ color: 'var(--primary-bright)', textDecoration: 'underline' }}>web design process</Link>.
              Pricing starts at <Link href="/pricing" style={{ color: 'var(--primary-bright)', textDecoration: 'underline' }}>$700 one-time</Link>.
            </p>
          </div>
        </div>
      </section>

      <Cta variant="services" />
    </div>
  );
}
