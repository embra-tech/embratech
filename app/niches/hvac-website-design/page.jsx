import Link from 'next/link';
import PageHeader from '../../../components/PageHeader';
import Breadcrumb from '../../../components/Breadcrumb';
import Cta from '../../../components/Cta';
import JsonLd from '../../../components/JsonLd';
import StockPhoto from '../../../components/StockPhoto';
import FaqAccordion from '../../../components/FaqAccordion';
import siteConfig from '../../../lib/site-config';

// 2026-10-26: copy rewritten (batch 2): plain, specific copy replacing the old template; concept design
// labelled clearly as a sample brand; removed unsourced cost and conversion claims and hype; pricing
// aligned; 6 FAQs including HVAC SEO. Layout and concept image unchanged.

const PAGE_DESCRIPTION = 'HVAC website design for heating and cooling contractors: AC and furnace pages, tap-to-call, financing and maintenance plans. From $700 ($600 paid in full).';

export const metadata = {
  title: 'HVAC Website Design for Heating & Cooling Contractors',
  alternates: { canonical: '/niches/hvac-website-design' },
  description: PAGE_DESCRIPTION,
  openGraph: {
    title: 'HVAC Website Design for Heating & Cooling Contractors | Embra',
    description: PAGE_DESCRIPTION,
    url: `${siteConfig.siteUrl}/niches/hvac-website-design`,
    images: [
      {
        url: siteConfig.ogImage,
        width: siteConfig.ogImageWidth,
        height: siteConfig.ogImageHeight,
        alt: 'HVAC website design by Embra Technologies',
      },
    ],
  },
};

const link = { color: 'var(--primary-bright)', textDecoration: 'underline' };
const h2 = { color: '#fff', fontSize: '2rem', marginBottom: '24px', marginTop: '48px' };
const para = { marginBottom: '20px' };

const FAQS = [
  {
    q: 'Do you also handle air conditioning SEO and heating and cooling SEO?',
    a: 'Yes. Our local SEO service covers your Google Business Profile, AC and furnace service pages, structured data and business listings, planned around the seasons. Our HVAC SEO guide explains the same steps if you prefer to do it yourself.',
  },
  {
    q: 'Can our website show financing options?',
    a: 'Yes, if you offer financing. We add a clear financing section to your installation and replacement pages, with a link to your financing provider\u2019s application if it has one. We only show terms you actually offer.',
  },
  {
    q: 'What pages should an HVAC website have?',
    a: 'Besides Home, About and Contact, give each main service its own page: AC repair, AC installation, furnace repair and replacement, heat pumps, ductless mini-splits, indoor air quality, maintenance plans and commercial HVAC if you offer it. Each page should end with a way to call or book.',
  },
  {
    q: 'Is the HVAC website shown on this page a real client?',
    a: 'No. Polar Air HVAC is a concept design we created to show the layout we recommend for heating and cooling contractors. Our live client projects are in auto body repair, tree service, handyman, landscaping and laundry services. Before you commit, we design a free homepage sample for your own HVAC company.',
  },
  {
    q: 'How much does an HVAC website cost?',
    a: 'Our Starter website is $700 total with split payments, or $600 paid in full, for a custom homepage plus 2 inner pages. Growth is $1,000 for up to 7 pages, enough for separate cooling, heating and maintenance pages, plus structured data and Google Business Profile setup.',
  },
  {
    q: 'Do you work with HVAC companies in my area?',
    a: 'Yes. We work remotely with heating and cooling contractors across the US. See how we approach local SEO for HVAC contractors in Chicago and websites for service businesses in Los Angeles.',
  },
];

export default function NichePage() {
  // 2026-10-13 Phase 1: removed a second BreadcrumbList (Home > Services > page) that
  // contradicted the visible breadcrumb. <Breadcrumb> below already outputs the matching one.
  const jsonLdData = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "HVAC Website Design",
      "serviceType": "Website Design for Heating and Cooling Contractors",
      "provider": { "@id": `${siteConfig.siteUrl}/#localbusiness` },
      "areaServed": { "@type": "Country", "name": "United States" },
      "description": PAGE_DESCRIPTION
    }
  ];

  return (
    <div className="page-shell">
      <JsonLd data={jsonLdData} />
      <section className="page-hero">
        <div className="wrap">
          <Breadcrumb label="HVAC Website Design" href="/niches/hvac-website-design" />
          <PageHeader
            pill="Industry Web Design"
            title={<>HVAC Website Design for Heating and Cooling Contractors</>}
            sub="Websites for HVAC companies across the US: AC and heating pages ready before each season, tap-to-call on every page, and clear financing and maintenance plan details. Starter: $700 total with split payments, or $600 paid in full."
          />
        </div>
      </section>

      <section className="location-content" style={{ padding: '80px 0' }}>
        <div className="wrap text-content " style={{ maxWidth: 840, margin: '0 auto', fontSize: '1.1rem', lineHeight: 1.85, color: 'var(--text-muted)' }}>

          <h2 style={h2}>What an HVAC Website Needs to Do</h2>
          <p style={para}>HVAC work follows the weather. The first heatwave and the first hard freeze bring a rush of urgent repair calls, while spring and fall are quieter months when homeowners plan replacements and sign up for maintenance.</p>
          <p style={para}>An HVAC website has to handle all three kinds of visitor. Someone with no cooling in July needs your phone number immediately. Someone replacing an old furnace wants to see your certifications, reviews and financing options before they invite you in for a quote. And existing customers should find it easy to join a maintenance plan.</p>
          <p style={para}>We build custom websites for heating and cooling contractors around those three journeys, so each visitor finds the right next step quickly.</p>

          {/* Visual Showcase Card */}
          <div data-preview-card="true" style={{ margin: '48px 0', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--line-dark)', background: 'rgba(255,255,255,0.02)' }}>
            <div style={{ background: 'rgba(0,0,0,0.5)', padding: '12px 18px', display: 'flex', alignItems: 'center', gap: '12px', borderBottom: '1px solid var(--line-dark)' }}>
              <div style={{ display: 'flex', gap: '6px' }}>
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f56', display: 'inline-block' }} />
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ffbd2e', display: 'inline-block' }} />
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#27c93f', display: 'inline-block' }} />
              </div>
              <div style={{ flex: 1, background: 'rgba(255,255,255,0.06)', borderRadius: '6px', padding: '4px 12px', fontSize: '0.82rem', color: 'var(--muted-inv)', fontFamily: 'monospace' }}>
                Concept design: Polar Air HVAC (sample brand, not a client)
              </div>
            </div>
            <picture>
              <source type="image/avif" srcSet="/images/optimized/hvac-mockup-480.avif 480w, /images/optimized/hvac-mockup-720.avif 720w, /images/optimized/hvac-mockup-960.avif 960w" sizes="(max-width: 840px) 100vw, 840px" />
              <source type="image/webp" srcSet="/images/optimized/hvac-mockup-480.webp 480w, /images/optimized/hvac-mockup-720.webp 720w, /images/optimized/hvac-mockup-960.webp 960w" sizes="(max-width: 840px) 100vw, 840px" />
              <img
                src="/images/optimized/hvac-mockup-720.jpg"
                alt="Concept design for Polar Air HVAC, a sample brand (not a real client), by Embra Technologies"
                loading="lazy"
                decoding="async"
                width={840}
                height={480}
                style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
              />
            </picture>
            <div style={{ padding: '16px 20px', borderTop: '1px solid var(--line-dark)', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '10px', background: 'rgba(0,0,0,0.25)' }}>
              <span style={{ fontSize: '0.88rem', color: 'var(--muted-inv)' }}>Concept design. Polar Air HVAC is a sample brand we created to show the layout: seasonal tune-up callouts, financing details and same-day service requests.</span>
              <Link href="/services/web-design" style={{ color: 'var(--primary-bright)', fontSize: '0.88rem', textDecoration: 'underline' }}>Explore Custom Web Design Services &rarr;</Link>
            </div>
          </div>

          <h2 style={h2}>How We Structure an HVAC Website</h2>
          <p style={para}>1. <strong>Urgent repairs, one tap away:</strong> a phone button that stays visible on mobile, with clear AC repair and heating repair pages that say what you fix, the areas you cover and how quickly you can usually respond.</p>
          <p style={para}>2. <strong>Replacements that earn trust:</strong> installation and replacement pages that show the certifications you hold, such as NATE or EPA Section 608, any manufacturer dealer status you have, real reviews and photos of your installs, and your financing options if you offer them.</p>
          <p style={para}>3. <strong>Maintenance plans that smooth out the seasons:</strong> a dedicated page explaining what your tune-up plan includes and what it costs, with a simple way to sign up.</p>

          <StockPhoto name="stock-hvac" />

          <h2 style={h2}>Local SEO for Heating and Cooling Contractors</h2>
          <p style={para}>Local search for HVAC contractors revolves around phrases like &quot;AC repair near me,&quot; &quot;furnace replacement,&quot; &quot;heat pump installation&quot; and &quot;ductless mini-split,&quot; and demand swings with the weather, so pages need to be ready before each season starts.</p>
          <p style={para}>We give cooling, heating, heat pumps, indoor air quality and commercial work their own clear pages, add HVACBusiness and Service structured data, and add area pages only where you have real local work to show. For a step-by-step plan, read our <Link href="/blog/hvac-local-seo" style={link}>HVAC SEO guide</Link>, see how we approach <Link href="/locations/chicago" style={link}>local SEO for Chicago HVAC contractors</Link>, or explore our <Link href="/services/local-seo" style={link}>local SEO service</Link>.</p>

          <h2 style={h2}>Pricing for HVAC Websites</h2>
          <p style={para}>Published pricing, no long-term contract, and you own the finished website:</p>
          <p style={para}>&bull; <strong>Starter ($700 total with split payments, or $600 paid in full):</strong> a custom homepage plus 2 inner pages, built mobile-first with tap-to-call buttons, a service request form and on-page SEO basics.</p>
          <p style={para}>&bull; <strong>Growth ($1,000):</strong> up to 7 pages, enough for separate cooling, heating and maintenance plan pages, plus structured data and Google Business Profile setup.</p>
          <p style={para}>&bull; <strong>Care Plan ($150/month, optional):</strong> hosting, security, SEO monitoring, content updates and priority support. Cancel anytime.</p>
          <p style={para}>See every plan on our <Link href="/pricing" style={link}>pricing page</Link>, or read our guide to <Link href="/blog/website-cost-for-home-service-businesses" style={link}>what a contractor website costs</Link>.</p>

          {/* Mid-Content Conversion CTA Box */}
          <div data-mid-cta="true" style={{
            margin: '56px 0',
            padding: '40px 32px',
            borderRadius: '16px',
            background: 'linear-gradient(135deg, rgba(37,99,235,0.08) 0%, rgba(16,185,129,0.05) 100%)',
            border: '1px solid var(--line-dark)',
            textAlign: 'center'
          }}>
            <span className="badge-pill" style={{ marginBottom: '16px', display: 'inline-block' }}>24-Hour Free Sample</span>
            <h3 style={{ color: '#fff', fontSize: '1.6rem', marginBottom: '12px', fontWeight: 700 }}>See Your HVAC Website Before You Pay</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: '620px', margin: '0 auto 24px', lineHeight: 1.6 }}>We design a custom homepage sample for your heating and cooling company within 24 hours, free and with no commitment.</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center', alignItems: 'center' }}>
              <Link href="/contact" className="btn-flip btn-primary btn-large">
                <span className="btn-flip-inner">
                  <span className="btn-flip-state">Claim Free Homepage Sample &rarr;</span>
                  <span className="btn-flip-state" aria-hidden="true">Claim Free Homepage Sample &rarr;</span>
                </span>
              </Link>
              <a href={`tel:${siteConfig.phone}`} className="btn-flip btn-ghost btn-large">
                <span className="btn-flip-inner">
                  <span className="btn-flip-state">Call {siteConfig.phoneDisplay}</span>
                  <span className="btn-flip-state" aria-hidden="true">Call {siteConfig.phoneDisplay}</span>
                </span>
              </a>
            </div>
          </div>

          <h2 style={{ color: '#fff', fontSize: '2rem', marginBottom: '28px', marginTop: '56px' }}>Frequently Asked Questions</h2>
          <div style={{ marginTop: '24px', marginBottom: '40px' }}>
            <FaqAccordion items={FAQS} />
          </div>

          <div style={{ marginTop: '48px', padding: '32px', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid var(--line-dark)' }}>
            <h3 style={{ color: '#fff', fontSize: '1.35rem', marginBottom: '12px' }}>Ready for an HVAC Website That Works Every Season?</h3>
            <p style={{ fontSize: '1rem', marginBottom: '20px', lineHeight: 1.7 }}>
              Custom HVAC websites from $700 total with split payments, or $600 paid in full. Start with a free homepage sample, ready within 24 hours.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
              <Link href="/contact" style={{ color: 'var(--primary-bright)', textDecoration: 'underline', fontWeight: 600 }}>Request Free 24-Hour Sample &rarr;</Link>
              <Link href="/pricing" style={{ color: 'var(--primary-bright)', textDecoration: 'underline', fontWeight: 600 }}>Explore Full Pricing Details &rarr;</Link>
              <Link href="/services" style={{ color: 'var(--primary-bright)', textDecoration: 'underline', fontWeight: 600 }}>View All Web &amp; SEO Services &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      <Cta variant="default" />
    </div>
  );
}
