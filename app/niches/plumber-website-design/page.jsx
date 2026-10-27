import Link from 'next/link';
import PageHeader from '../../../components/PageHeader';
import Breadcrumb from '../../../components/Breadcrumb';
import Cta from '../../../components/Cta';
import JsonLd from '../../../components/JsonLd';
import StockPhoto from '../../../components/StockPhoto';
import FaqAccordion from '../../../components/FaqAccordion';
import siteConfig from '../../../lib/site-config';

// 2026-10-25: copy rewritten (owner gave full permission) to read as specific and accurate: removed an
// invented "Google data confirms" claim, unsupported franchise comparisons, hype, "pages for every town"
// and an unconfirmed ServiceTitan embed; pricing aligned with /pricing; honest FAQ about the concept
// design. Layout and concept image unchanged.

const PAGE_DESCRIPTION = 'Plumber website design for independent plumbing companies: tap-to-call on every page, emergency and scheduled service pages, license details up front. From $700.';

export const metadata = {
  title: 'Plumber Website Design: Custom Plumbing Websites',
  alternates: { canonical: '/niches/plumber-website-design' },
  description: PAGE_DESCRIPTION,
  openGraph: {
    title: 'Plumber Website Design: Custom Plumbing Websites | Embra',
    description: PAGE_DESCRIPTION,
    url: `${siteConfig.siteUrl}/niches/plumber-website-design`,
    images: [
      {
        url: siteConfig.ogImage,
        width: siteConfig.ogImageWidth,
        height: siteConfig.ogImageHeight,
        alt: 'Plumber website design by Embra Technologies',
      },
    ],
  },
};

const link = { color: 'var(--primary-bright)', textDecoration: 'underline' };
const h2 = { color: '#fff', fontSize: '2rem', marginBottom: '24px', marginTop: '48px' };
const para = { marginBottom: '20px' };

const FAQS = [
  {
    q: 'How can an independent plumber compete with franchises online?',
    a: 'Mostly on the basics customers check before they call: a complete Google Business Profile, a steady flow of genuine reviews, a clear page for each service you offer, your license and insurance details, and a phone number that is one tap away on every page. Franchises often have bigger ad budgets, but those basics are where an independent plumber can match or beat them.',
  },
  {
    q: 'What pages should a plumbing website have?',
    a: 'Besides Home, About and Contact, give each main service its own page: emergency plumbing, drain cleaning, water heater repair and installation, sewer line repair, leak detection and repiping, for example. Each page should say what the job involves, show photos of real work and end with a way to call or request a quote.',
  },
  {
    q: 'Can customers book a plumbing appointment online?',
    a: 'Yes, if your scheduling tool offers a booking link or embed, such as Calendly. We add it to the relevant pages and check that it still loads quickly on a phone. If you prefer calls for emergencies, we keep the phone number first and offer online booking only for scheduled work.',
  },
  {
    q: 'Is the website shown on this page a real plumbing client?',
    a: 'No. Apex Plumbing is a concept design we created to show the layout we recommend for plumbers. Our live client projects are in auto body repair, tree service, handyman, landscaping and laundry services, and the same principles apply. Before you commit, we design a free homepage sample for your own plumbing business.',
  },
  {
    q: 'How much does a plumbing website cost?',
    a: 'Our Starter website is $700 total with split payments, or $600 paid in full, for a custom homepage plus 2 inner pages. Growth is $1,000 for up to 7 pages, enough for separate service pages, plus structured data and Google Business Profile setup. The optional Care Plan is $150/month.',
  },
];

export default function NichePage() {
  // 2026-10-13 Phase 1: removed a second BreadcrumbList (Home > Services > page) that
  // contradicted the visible breadcrumb. <Breadcrumb> below already outputs the matching one.
  const jsonLdData = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Plumber Website Design",
      "serviceType": "Website Design for Plumbing Companies",
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
          <Breadcrumb label="Plumber Website Design" href="/niches/plumber-website-design" />
          <PageHeader
            pill="Industry Web Design"
            title={<>Plumber Website Design for Independent Plumbing Companies</>}
            sub="Websites for plumbing companies across the US: tap-to-call on every page, separate pages for emergency and scheduled work, and your license and reviews up front. Starter: $700 total with split payments, or $600 paid in full."
          />
        </div>
      </section>

      <section className="location-content" style={{ padding: '80px 0' }}>
        <div className="wrap text-content " style={{ maxWidth: 840, margin: '0 auto', fontSize: '1.1rem', lineHeight: 1.85, color: 'var(--text-muted)' }}>

          <h2 style={h2}>What a Plumbing Website Needs to Do</h2>
          <p style={para}>Plumbing work comes in two kinds. Emergencies, like a burst pipe, a backed-up sewer line or a failed water heater, send homeowners straight to their phones to find someone who can come today. Scheduled jobs, like a tankless water heater, repiping or a bathroom remodel, give them time to compare a few companies first.</p>
          <p style={para}>A plumbing website has to serve both. Emergency callers need the phone number immediately and a clear sign that you handle urgent work. People planning a bigger job need to see your license, insurance, reviews and real photos before they trust you inside their walls and under their floors.</p>
          <p style={para}>We design plumbing websites around those two journeys, so whichever kind of customer arrives, the next step is obvious.</p>

          {/* Visual Showcase Card */}
          <div data-preview-card="true" style={{ margin: '48px 0', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--line-dark)', background: 'rgba(255,255,255,0.02)' }}>
            <div style={{ background: 'rgba(0,0,0,0.5)', padding: '12px 18px', display: 'flex', alignItems: 'center', gap: '12px', borderBottom: '1px solid var(--line-dark)' }}>
              <div style={{ display: 'flex', gap: '6px' }}>
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f56', display: 'inline-block' }} />
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ffbd2e', display: 'inline-block' }} />
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#27c93f', display: 'inline-block' }} />
              </div>
              <div style={{ flex: 1, background: 'rgba(255,255,255,0.06)', borderRadius: '6px', padding: '4px 12px', fontSize: '0.82rem', color: 'var(--muted-inv)', fontFamily: 'monospace' }}>
                Concept design: Apex Plumbing (sample brand, not a client)
              </div>
            </div>
            <picture>
              <source type="image/avif" srcSet="/images/optimized/plumbing-mockup-480.avif 480w, /images/optimized/plumbing-mockup-720.avif 720w, /images/optimized/plumbing-mockup-960.avif 960w" sizes="(max-width: 840px) 100vw, 840px" />
              <source type="image/webp" srcSet="/images/optimized/plumbing-mockup-480.webp 480w, /images/optimized/plumbing-mockup-720.webp 720w, /images/optimized/plumbing-mockup-960.webp 960w" sizes="(max-width: 840px) 100vw, 840px" />
              <img
                src="/images/optimized/plumbing-mockup-720.jpg"
                alt="Concept design for Apex Plumbing, a sample brand (not a real client), by Embra Technologies"
                loading="lazy"
                decoding="async"
                width={840}
                height={480}
                style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
              />
            </picture>
            <div style={{ padding: '16px 20px', borderTop: '1px solid var(--line-dark)', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '10px', background: 'rgba(0,0,0,0.25)' }}>
              <span style={{ fontSize: '0.88rem', color: 'var(--muted-inv)' }}>Concept design. Apex Plumbing is a sample brand we created to show the layout: tap-to-call mobile header, instant quote form and 24/7 emergency callouts.</span>
              <Link href="/services/web-design" style={{ color: 'var(--primary-bright)', fontSize: '0.88rem', textDecoration: 'underline' }}>Explore Custom Web Design Services &rarr;</Link>
            </div>
          </div>

          <h2 style={h2}>How We Structure a Plumbing Website</h2>
          <p style={para}>1. <strong>Tap-to-call that never leaves the screen:</strong> a phone button in a header that stays visible on mobile, plus a clear &quot;emergency service&quot; message if you offer it, so an urgent caller never has to hunt for your number.</p>
          <p style={para}>2. <strong>License, insurance and reviews up front:</strong> your license number where your state requires one, insurance, years in business and recent Google reviews near the top of the page, before the visitor has to scroll.</p>
          <p style={para}>3. <strong>Emergency and scheduled work kept separate:</strong> urgent services (burst pipes, leaks, sewer backups) and planned installations (tankless water heaters, repiping, water filtration) each get their own clear pages, with the right call to action for each.</p>

          <StockPhoto name="stock-plumber" />

          <h2 style={h2}>Getting Found for Plumbing Searches</h2>
          <p style={para}>Most plumbing calls from search come through Google&apos;s map results and the pages below them. Every plumbing website we build includes clear service pages, a sitemap and LocalBusiness and Plumber structured data with your service area and hours. Your Google Business Profile and steady, genuine reviews matter just as much as the website.</p>
          <p style={para}>If you serve several towns, we add town pages only where there is something real to show, such as jobs you&apos;ve done and reviews from local customers, rather than copying one page and swapping the town name. Read our <Link href="/blog/local-seo-guide-for-service-businesses" style={link}>local SEO guide for home service businesses</Link>, or see our <Link href="/services/local-seo" style={link}>local SEO service</Link>.</p>

          <h2 style={h2}>Connecting Your Website to How You Work</h2>
          <p style={para}>Quote requests can arrive by email the moment they are sent, and customers can text you or message you on WhatsApp if you use it. If your scheduling software offers a booking link or embed, we add it where it helps without slowing the page down. See our <Link href="/services/website-integrations" style={link}>website integrations</Link> page for the options.</p>

          <h2 style={h2}>Pricing for Plumbing Websites</h2>
          <p style={para}>Published pricing, no long-term contract, and you own the finished website:</p>
          <p style={para}>&bull; <strong>Starter ($700 total with split payments, or $600 paid in full):</strong> a custom homepage plus 2 inner pages, built mobile-first with tap-to-call buttons, a quote request form and on-page SEO basics.</p>
          <p style={para}>&bull; <strong>Growth ($1,000):</strong> up to 7 pages, enough for separate water heater, drain cleaning and emergency pages, plus structured data and Google Business Profile setup.</p>
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
            <h3 style={{ color: '#fff', fontSize: '1.6rem', marginBottom: '12px', fontWeight: 700 }}>See Your Plumbing Website Before You Pay</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: '620px', margin: '0 auto 24px', lineHeight: 1.6 }}>We design a custom homepage sample for your plumbing company within 24 hours, free and with no commitment.</p>
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
            <h3 style={{ color: '#fff', fontSize: '1.35rem', marginBottom: '12px' }}>Ready for a Plumbing Website That Brings in Calls?</h3>
            <p style={{ fontSize: '1rem', marginBottom: '20px', lineHeight: 1.7 }}>
              Custom plumbing websites from $700 total with split payments, or $600 paid in full. Start with a free homepage sample, ready within 24 hours.
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
