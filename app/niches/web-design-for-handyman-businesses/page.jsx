import Link from 'next/link';
import PageHeader from '../../../components/PageHeader';
import Breadcrumb from '../../../components/Breadcrumb';
import Cta from '../../../components/Cta';
import JsonLd from '../../../components/JsonLd';
import StockPhoto from '../../../components/StockPhoto';
import FaqAccordion from '../../../components/FaqAccordion';
import siteConfig from '../../../lib/site-config';

// 2026-10-21: copy rewritten (owner gave full permission). Search Console (Oct 4-17) showed the
// page's impressions were mostly "website design for handyman [city]" variants in one week; the
// copy now targets the national buyer phrases (handyman website design, affordable web design
// for handyman, handyman website builder) and answers city searches in an FAQ instead of adding
// city pages. Unsourced stats, fixed PageSpeed numbers and hype removed. Layout unchanged.

const PAGE_DESCRIPTION = 'Affordable handyman website design: custom, mobile-first sites with tap-to-call and photo quote requests. From $700, or $600 paid in full. Free sample first.';

export const metadata = {
  title: 'Handyman Website Design: Custom Sites From $700',
  alternates: { canonical: '/niches/web-design-for-handyman-businesses' },
  description: PAGE_DESCRIPTION,
  openGraph: {
    title: 'Handyman Website Design: Custom Sites From $700 | Embra',
    description: PAGE_DESCRIPTION,
    url: `${siteConfig.siteUrl}/niches/web-design-for-handyman-businesses`,
    images: [
      {
        url: siteConfig.ogImage,
        width: siteConfig.ogImageWidth,
        height: siteConfig.ogImageHeight,
        alt: 'Handyman website design by Embra Technologies',
      },
    ],
  },
};

const link = { color: 'var(--primary-bright)', textDecoration: 'underline' };
const h2 = { color: '#fff', fontSize: '2rem', marginBottom: '24px', marginTop: '48px' };
const para = { marginBottom: '20px' };

const FAQS = [
  {
    q: 'Do you design websites for handymen in my city?',
    a: 'Yes. We work remotely with handyman businesses across the United States, so your location doesn\'t matter. Your website is built around the towns you actually serve, with your service area shown clearly near the top so local homeowners can see you cover them.',
  },
  {
    q: 'Is there an affordable option for a one-person handyman business?',
    a: 'Yes. Our Starter website is $700 total with split payments, or $600 paid in full. It includes a custom homepage plus 2 inner pages, tap-to-call buttons, a quote request form and on-page SEO basics. You own the website, and there is no long-term contract.',
  },
  {
    q: 'I offer dozens of different repair services. How do I show them all without confusing visitors?',
    a: 'We group your work into 4 to 6 clear categories, such as carpentry and trim, drywall and paint, fixtures and hardware, minor plumbing and electrical, and exterior maintenance. Each category describes the kinds of jobs you take on, so a homeowner looking for drywall repair can confirm quickly that you do it.',
  },
  {
    q: 'Can my website bring in work before I have many Google reviews?',
    a: 'It can help. Clear services, real photos of your work, your insurance and any licenses that apply in your state, and an easy way to send a photo for a quote all build confidence. Reviews still matter, so we also set up a simple way to ask every happy customer for one.',
  },
  {
    q: 'Do you also do SEO for handyman and drywall businesses?',
    a: 'Yes. Our local SEO service covers your Google Business Profile, clear service pages and consistent business details across directories, for general handymen and specialty trades like drywall, carpentry or painting. It starts with a free review of where you stand today.',
  },
  {
    q: 'How long does it take to design and launch a handyman website?',
    a: 'Most projects take 2 to 3 weeks from the first call to launch, depending on how quickly photos and details are ready. Before you commit to anything, we design a free custom homepage sample within 24 hours.',
  },
];

export default function NichePage() {
  // 2026-10-13 Phase 1: removed a second BreadcrumbList (Home > Services > page) that
  // contradicted the visible breadcrumb. <Breadcrumb> below already outputs the matching one.
  const jsonLdData = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Handyman Website Design",
      "serviceType": "Web Design for Handyman Businesses",
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
          <Breadcrumb label="Handyman Website Design" href="/niches/web-design-for-handyman-businesses" />
          <PageHeader
            pill="Industry Web Design"
            title={<>Handyman Website Design for Small Repair Businesses</>}
            sub="Websites for handymen across the US: clear services, real photos and easy ways for homeowners to call or send a photo for a quote. Starter: $700 total with split payments, or $600 paid in full."
          />
        </div>
      </section>

      <section className="location-content" style={{ padding: '80px 0' }}>
        <div className="wrap text-content " style={{ maxWidth: 840, margin: '0 auto', fontSize: '1.1rem', lineHeight: 1.85, color: 'var(--text-muted)' }}>

          <h2 style={h2}>What a Handyman Website Needs to Do</h2>
          <p style={para}>When something small breaks at home, a sticking door, a running toilet or a hole in the drywall, most homeowners would rather call a local handyman than a specialist contractor. Their biggest hesitation is trust: they are inviting someone they haven&apos;t met into their home.</p>
          <p style={para}>A good handyman website answers that hesitation quickly. It shows the jobs you take on, real photos of your work, your insurance and any licenses that apply in your state, what customers say about you, and the fastest way to reach you. An outdated template or a half-finished Facebook page leaves homeowners guessing.</p>
          <p style={para}>We build custom websites for handyman businesses around those questions, so a homeowner with a broken fixture can see within seconds that you do the job, that you&apos;re trustworthy, and how to get on your schedule.</p>

          {/* Visual Showcase Card */}
          <div data-preview-card="true" style={{ margin: '48px 0', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--line-dark)', background: 'rgba(255,255,255,0.02)' }}>
            <div style={{ background: 'rgba(0,0,0,0.5)', padding: '12px 18px', display: 'flex', alignItems: 'center', gap: '12px', borderBottom: '1px solid var(--line-dark)' }}>
              <div style={{ display: 'flex', gap: '6px' }}>
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f56', display: 'inline-block' }} />
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ffbd2e', display: 'inline-block' }} />
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#27c93f', display: 'inline-block' }} />
              </div>
              <div style={{ flex: 1, background: 'rgba(255,255,255,0.06)', borderRadius: '6px', padding: '4px 12px', fontSize: '0.82rem', color: 'var(--muted-inv)', fontFamily: 'monospace' }}>
                alaskafastfixhandyman.com
              </div>
            </div>
            <picture>
              <source type="image/avif" srcSet="/images/optimized/alaskahandyman-480.avif 480w, /images/optimized/alaskahandyman-720.avif 720w, /images/optimized/alaskahandyman-960.avif 960w" sizes="(max-width: 840px) 100vw, 840px" />
              <source type="image/webp" srcSet="/images/optimized/alaskahandyman-480.webp 480w, /images/optimized/alaskahandyman-720.webp 720w, /images/optimized/alaskahandyman-960.webp 960w" sizes="(max-width: 840px) 100vw, 840px" />
              <img
                src="/images/optimized/alaskahandyman-720.jpg"
                alt="Alaska Fast Fix Handyman website preview designed by Embra Technologies"
                loading="lazy"
                decoding="async"
                width={840}
                height={480}
                style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
              />
            </picture>
            <div style={{ padding: '16px 20px', borderTop: '1px solid var(--line-dark)', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '10px', background: 'rgba(0,0,0,0.25)' }}>
              <span style={{ fontSize: '0.88rem', color: 'var(--muted-inv)' }}>Live handyman project: Alaska Fast Fix Handyman. Tap-to-call on every page and a clear service-area section.</span>
              <Link href="/portfolio/alaska-fast-fix" style={{ color: 'var(--primary-bright)', fontSize: '0.88rem', textDecoration: 'underline' }}>Read Alaska Fast Fix Case Study &rarr;</Link>
            </div>
          </div>

          <h2 style={h2}>How We Structure a Handyman Website</h2>
          <p style={para}>Most homeowners looking for repair work are dealing with an annoyance right now. They want to know quickly whether you do the job, roughly what to expect and how to get on your schedule. Every handyman site we build is organized around three things:</p>
          <p style={para}>1. <strong>Clear service categories:</strong> instead of a long list of fifty chores, your work is grouped into a few clear categories (for example carpentry and trim, drywall and paint, fixtures and hardware, minor plumbing and electrical, exterior maintenance), each with a short description and its own quote button.</p>
          <p style={para}>2. <strong>Easy contact on a phone:</strong> a contact bar that stays in view, a tap-to-call button, and a text or WhatsApp option if you use one, placed where a thumb naturally reaches.</p>
          <p style={para}>3. <strong>Photo quote requests:</strong> many homeowners struggle to describe what&apos;s wrong. The quote form lets them snap a photo and send it with their request, so you can judge the job before you drive out.</p>

          <h2 style={h2}>Handyman Websites We&apos;ve Built</h2>
          <p style={para}>For <Link href="/portfolio/alaska-fast-fix" style={link}>Alaska Fast Fix Handyman</Link>, many calls are urgent and the service area is large. We put the phone number one tap away on every page and showed the service area near the top, so homeowners know straight away whether the business covers them.</p>
          <p style={para}>For <Link href="/portfolio/vvasquez-handyman" style={link}>V Vasquez Handyman LLC</Link> in Merced, CA, which does lawn care, concrete and irrigation work, we replaced a generic template with a clear catalog of services and a quote form that pre-selects the service the visitor was viewing.</p>
          <p style={para}>Each case study links to the site&apos;s live PageSpeed report, so you can check how quickly it loads for yourself.</p>

          <StockPhoto name="stock-handyman" />

          <h2 style={h2}>Getting Found by Homeowners Near You</h2>
          <p style={para}>Every handyman website we build includes the search basics: a clear heading structure, a sitemap, and LocalBusiness structured data with your service area and hours. Most local calls come through your Google Business Profile, so a complete, active profile and a steady flow of reviews matter just as much as the website.</p>
          <p style={para}>If you serve several nearby towns, we add town pages only where there is something real to show, such as jobs you&apos;ve done and reviews from local customers, rather than copying one page and swapping the city name. Learn more about our <Link href="/services/local-seo" style={link}>local SEO service for home service businesses</Link>.</p>

          <h2 style={h2}>Pricing for Handyman Websites</h2>
          <p style={para}>Straightforward pricing, no hidden fees and no platform lock-in:</p>
          <p style={para}>• <strong>Starter ($700 total with split payments, or $600 paid in full):</strong> a custom homepage plus 2 inner pages, built mobile-first with tap-to-call buttons, a quote request form and on-page SEO basics.</p>
          <p style={para}>• <strong>Growth ($1,000):</strong> up to 7 pages, for handymen who want separate pages for each type of work, plus structured data and Google Business Profile setup.</p>
          <p style={para}>• <strong>Care Plan ($150/month, optional):</strong> hosting, security, SEO monitoring, content updates and priority support. Cancel anytime.</p>
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
            <h3 style={{ color: '#fff', fontSize: '1.6rem', marginBottom: '12px', fontWeight: 700 }}>See Your New Handyman Website Before You Pay</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: '620px', margin: '0 auto 24px', lineHeight: 1.6 }}>We design a custom homepage sample for your handyman business within 24 hours, free and with no commitment.</p>
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
            <h3 style={{ color: '#fff', fontSize: '1.35rem', marginBottom: '12px' }}>Ready to Get More Handyman Jobs?</h3>
            <p style={{ fontSize: '1rem', marginBottom: '20px', lineHeight: 1.7 }}>
              Custom handyman websites from $700 total with split payments, or $600 paid in full. Start with a free homepage sample, ready within 24 hours.
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
