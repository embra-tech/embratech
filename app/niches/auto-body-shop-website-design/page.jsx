import Link from 'next/link';
import PageHeader from '../../../components/PageHeader';
import Breadcrumb from '../../../components/Breadcrumb';
import Cta from '../../../components/Cta';
import JsonLd from '../../../components/JsonLd';
import StockPhoto from '../../../components/StockPhoto';
import FaqAccordion from '../../../components/FaqAccordion';
import siteConfig from '../../../lib/site-config';

// 2026-10-25: title, description and H1 now use the phrases buyers search for (Search Console, US):
// "auto body website design", "collision repair website design", "auto body shops website design agency".
// 2026-10-26: body rewritten (batch 2): plain, specific copy replacing the old template; insurance wording
// made accurate ("which insurers you work with", right to choose only where state law provides it);
// 6 FAQs; pricing aligned. Layout and Tuxford image unchanged.
const PAGE_DESCRIPTION = 'Auto body shop and collision repair website design: trust signals up front, photo estimate forms and insurance answers. From $700, or $600 paid in full.';

export const metadata = {
  title: 'Auto Body Shop & Collision Repair Website Design',
  alternates: { canonical: '/niches/auto-body-shop-website-design' },
  description: PAGE_DESCRIPTION,
  openGraph: {
    title: 'Auto Body Shop & Collision Repair Website Design | Embra',
    description: PAGE_DESCRIPTION,
    url: `${siteConfig.siteUrl}/niches/auto-body-shop-website-design`,
    images: [
      {
        url: siteConfig.ogImage,
        width: siteConfig.ogImageWidth,
        height: siteConfig.ogImageHeight,
        alt: 'Auto body shop and collision repair website design by Embra Technologies',
      },
    ],
  },
};

const link = { color: 'var(--primary-bright)', textDecoration: 'underline' };
const h2 = { color: '#fff', fontSize: '2rem', marginBottom: '24px', marginTop: '48px' };
const para = { marginBottom: '20px' };

const FAQS = [
  {
    q: 'What should be visible at the top of an auto body shop website?',
    a: 'Your phone number as a tap-to-call button, your address and hours, a clear "Get a free estimate" button, your Google rating, which insurers you work with, and certifications you actually hold, such as I-CAR Gold Class or manufacturer certifications. Only list badges and partnerships that are current and verifiable.',
  },
  {
    q: 'Should our collision center show our Google rating on the website?',
    a: 'Yes. Showing your Google rating with a link to your reviews, plus a few real customer quotes, reassures drivers who are worried about repair quality and how long the repair will take.',
  },
  {
    q: 'Can customers send photos of the damage from their phones?',
    a: 'Yes. We build a photo estimate form where drivers upload pictures of the damage and their VIN from a phone camera, so your estimator can reply with a preliminary range before the car comes in.',
  },
  {
    q: 'Do you build websites for auto body shops outside Los Angeles?',
    a: 'Yes. We work remotely with independent auto body and collision repair shops across the US. Our Tuxford Collision Center project is in Los Angeles, and the same approach works for shops anywhere.',
  },
  {
    q: 'How much does an auto body shop website cost?',
    a: 'Our Starter website is $700 total with split payments, or $600 paid in full, for a custom homepage plus 2 inner pages. Growth is $1,000 for up to 7 pages, enough for separate collision, paint, dent repair and insurance pages, plus structured data and Google Business Profile setup.',
  },
  {
    q: 'Can you help with marketing our body shop, not just the website?',
    a: 'Yes. Our local SEO service covers your Google Business Profile, service pages and business listings. For a do-it-yourself plan, read our auto body shop marketing guide, which includes a 90-day plan for collision shops.',
  },
];

export default function NichePage() {
  // 2026-10-13 Phase 1: removed a second BreadcrumbList (Home > Services > page) that
  // contradicted the visible breadcrumb. <Breadcrumb> below already outputs the matching one.
  const jsonLdData = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Auto Body Shop Website Design",
      "serviceType": "Collision Repair Website Design",
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
          <Breadcrumb label="Auto Body Shop Website Design" href="/niches/auto-body-shop-website-design" />
          <PageHeader
            pill="Industry Web Design"
            title={<>Auto Body Shop Website Design for Collision Repair Shops</>}
            sub="Websites for independent auto body and collision repair shops across the US: licensing, reviews and warranty up front, photo estimate requests and clear insurance answers. Starter: $700 total with split payments, or $600 paid in full."
          />
        </div>
      </section>

      <section className="location-content" style={{ padding: '80px 0' }}>
        <div className="wrap text-content " style={{ maxWidth: 840, margin: '0 auto', fontSize: '1.1rem', lineHeight: 1.85, color: 'var(--text-muted)' }}>

          <h2 style={h2}>What Drivers Look For After an Accident</h2>
          <p style={para}>Collision repair is rarely a planned purchase. Most drivers look for a shop shortly after an accident, often on a phone, while worrying about the deductible, what their insurer will cover, towing, a rental car and whether the repair will be done properly.</p>
          <p style={para}>If your website looks outdated, hides the phone number or doesn&apos;t say how insurance claims work at your shop, they go back to the search results and call someone else. A collision repair website has to answer those worries within seconds.</p>
          <p style={para}>We build custom websites for independent auto body shops and collision centers that show, at a glance, why a driver can trust you with their car and how to get an estimate.</p>

          {/* Visual Showcase Card */}
          <div data-preview-card="true" style={{ margin: '48px 0', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--line-dark)', background: 'rgba(255,255,255,0.02)' }}>
            <div style={{ background: 'rgba(0,0,0,0.5)', padding: '12px 18px', display: 'flex', alignItems: 'center', gap: '12px', borderBottom: '1px solid var(--line-dark)' }}>
              <div style={{ display: 'flex', gap: '6px' }}>
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f56', display: 'inline-block' }} />
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ffbd2e', display: 'inline-block' }} />
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#27c93f', display: 'inline-block' }} />
              </div>
              <div style={{ flex: 1, background: 'rgba(255,255,255,0.06)', borderRadius: '6px', padding: '4px 12px', fontSize: '0.82rem', color: 'var(--muted-inv)', fontFamily: 'monospace' }}>
                tuxfordcollision.com
              </div>
            </div>
            <picture>
              <source type="image/avif" srcSet="/images/optimized/tuxford-480.avif 480w, /images/optimized/tuxford-720.avif 720w, /images/optimized/tuxford-960.avif 960w" sizes="(max-width: 840px) 100vw, 840px" />
              <source type="image/webp" srcSet="/images/optimized/tuxford-480.webp 480w, /images/optimized/tuxford-720.webp 720w, /images/optimized/tuxford-960.webp 960w" sizes="(max-width: 840px) 100vw, 840px" />
              <img
                src="/images/optimized/tuxford-720.jpg"
                alt="Tuxford Collision Center website preview designed by Embra Technologies"
                loading="lazy"
                decoding="async"
                width={840}
                height={480}
                style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
              />
            </picture>
            <div style={{ padding: '16px 20px', borderTop: '1px solid var(--line-dark)', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '10px', background: 'rgba(0,0,0,0.25)' }}>
              <span style={{ fontSize: '0.88rem', color: 'var(--muted-inv)' }}>Live Auto Body Project: Tuxford Collision Center, Los Angeles. Licensing, rating and free towing offer up front.</span>
              <Link href="/portfolio/tuxford-collision" style={{ color: 'var(--primary-bright)', fontSize: '0.88rem', textDecoration: 'underline' }}>Read Tuxford Case Study &rarr;</Link>
            </div>
          </div>

          <h2 style={h2}>Why Work With an Auto Body Website Design Agency That Knows Collision Repair</h2>
          <p style={para}>A general web designer can make a site look good. A collision repair website also has to handle questions specific to your trade:</p>
          <p style={para}>1. <strong>Insurance answers:</strong> which insurers you work with (only say &quot;all insurance companies&quot; if it&apos;s true), how claims work at your shop, and, where your state&apos;s law gives drivers the right to choose their repair shop, a plain explanation of that right.</p>
          <p style={para}>2. <strong>Certifications that prove capability:</strong> modern repairs involve ADAS calibration, aluminum structures and sensors. Showing the certifications you actually hold, such as I-CAR Gold Class or manufacturer certifications, tells drivers you have the training and equipment.</p>
          <p style={para}>3. <strong>A photo estimate form:</strong> drivers photograph the damage and their VIN from a phone and send it in, so they don&apos;t have to take time off work just to get a first estimate.</p>
          <p style={para}>4. <strong>Your warranty in plain terms:</strong> how long your paint and workmanship warranty lasts and what it covers, near the top of the page.</p>

          <h2 style={h2}>Pages Every Collision Repair Website Needs</h2>
          <p style={para}>Give each service its own page, so drivers find what they need and Google understands what you do: collision repair, paint and refinishing, paintless dent repair, frame and unibody repair, ADAS calibration if you offer it, insurance claims help, and a photo estimate page. Add towing or rental car help if you provide them.</p>

          <h2 style={h2}>Collision Repair Website Design Example: Tuxford Collision Center</h2>
          <p style={para}>For <Link href="/portfolio/tuxford-collision" style={link}>Tuxford Collision Center</Link>, a licensed auto body shop in Los Angeles, we put the shop&apos;s licensing details, Google rating and free towing and free estimate offer at the top of the site, with a phone number and quote form within reach on every screen. The case study links to the site&apos;s live PageSpeed report, so you can check its speed yourself.</p>

          <StockPhoto name="stock-autobody" />

          <h2 style={h2}>Local SEO for Collision Centers and Body Shops</h2>
          <p style={para}>Local search for body shops revolves around phrases like &quot;collision repair near me,&quot; &quot;auto body shop,&quot; &quot;bumper repair&quot; and &quot;paintless dent removal,&quot; and many of those calls come through your Google Business Profile and the map results.</p>
          <p style={para}>We add LocalBusiness and auto repair structured data, give each repair specialty its own clear page, and add area pages only where the shop has real local work to show. For the full playbook, covering your Business Profile, reviews, insurance questions and photo estimates, read our <Link href="/blog/auto-body-shop-marketing" style={link}>auto body shop marketing guide</Link>, or see our <Link href="/services/local-seo" style={link}>local SEO service</Link>.</p>

          <h2 style={h2}>Pricing for Auto Body Shop Websites</h2>
          <p style={para}>Published pricing, no long-term contract, and you own the finished website:</p>
          <p style={para}>&bull; <strong>Starter ($700 total with split payments, or $600 paid in full):</strong> a custom homepage plus 2 inner pages, built mobile-first with a tap-to-call button, a photo estimate form and on-page SEO basics.</p>
          <p style={para}>&bull; <strong>Growth ($1,000):</strong> up to 7 pages, enough for separate collision, paint, dent repair and insurance pages, plus structured data and Google Business Profile setup.</p>
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
            <h3 style={{ color: '#fff', fontSize: '1.6rem', marginBottom: '12px', fontWeight: 700 }}>See Your Auto Body Website Before You Pay</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: '620px', margin: '0 auto 24px', lineHeight: 1.6 }}>We design a custom homepage sample for your shop within 24 hours, free and with no commitment.</p>
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
            <h3 style={{ color: '#fff', fontSize: '1.35rem', marginBottom: '12px' }}>Ready for a Collision Repair Website Drivers Trust?</h3>
            <p style={{ fontSize: '1rem', marginBottom: '20px', lineHeight: 1.7 }}>
              Custom auto body websites from $700 total with split payments, or $600 paid in full. Start with a free homepage sample, ready within 24 hours.
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
