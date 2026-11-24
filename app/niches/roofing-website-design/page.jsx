import Link from 'next/link';
import PageHeader from '../../../components/PageHeader';
import Breadcrumb from '../../../components/Breadcrumb';
import Cta from '../../../components/Cta';
import JsonLd from '../../../components/JsonLd';
import StockPhoto from '../../../components/StockPhoto';
import FaqAccordion from '../../../components/FaqAccordion';
import siteConfig from '../../../lib/site-config';

// 2026-10-26: copy rewritten (batch 2): plain, specific copy replacing the old template; concept design
// labelled clearly as a sample brand; removed an unsourced cost range, hype ("institutional-grade",
// "unshakeable") and the "adjuster meeting representation" promise (claim negotiation is licensed
// public-adjuster work in many states); pricing aligned; 6 FAQs. Layout and concept image unchanged.

// 2026-11-24: Search Console round: "Roofing Company Web Design Services" section (110 impressions, position 38.6)
// and a hosting note in the pricing section (roofing website cost 21/23.1, roofing website hosting 8/23.2).
// 2026-11-24 (round 2, owner's list; last 28 days): roofing website design 44/38.5, roofing web design 28/41.9,
// web design for roofers 13/39.5, website design for roofers 9/37.6, web design for commercial roofing business 4/33,
// roofing landing page 6/78.8, roofing custom website 3/11.7. Added residential vs commercial, landing pages,
// custom vs template, choosing a company, project steps, cost/hosting headings and 4 FAQs. Title, H1, existing
// sections and the concept image are unchanged.
const PAGE_DESCRIPTION = 'Roofing website design for roofing contractors: license and insurance up front, storm damage and replacement pages, photo galleries and inspection requests. From $700.';

export const metadata = {
  title: 'Roofing Website Design for Roofing Contractors',
  alternates: { canonical: '/niches/roofing-website-design' },
  description: PAGE_DESCRIPTION,
  openGraph: {
    title: 'Roofing Website Design for Roofing Contractors | Embra',
    description: PAGE_DESCRIPTION,
    url: `${siteConfig.siteUrl}/niches/roofing-website-design`,
    images: [
      {
        url: siteConfig.ogImage,
        width: siteConfig.ogImageWidth,
        height: siteConfig.ogImageHeight,
        alt: 'Roofing website design by Embra Technologies',
      },
    ],
  },
};

const link = { color: 'var(--primary-bright)', textDecoration: 'underline' };
const h2 = { color: '#fff', fontSize: '2rem', marginBottom: '24px', marginTop: '48px' };
const para = { marginBottom: '20px' };

const FAQS = [
  {
    q: 'What should a roofing contractor website show first?',
    a: 'Your phone number, the areas you serve, your license and insurance details, how long you have been in business locally, real reviews and photos of roofs you have completed. Homeowners worry about storm chasers, so proof that you are local and established matters more than anything else.',
  },
  {
    q: 'How should a roofing website explain insurance claims?',
    a: 'Explain the process in plain steps: what your inspection covers, what photos and documents you provide, and what the homeowner can expect from their insurer. Avoid promising to negotiate with the insurer on the homeowner\u2019s behalf, because in many states that is licensed public-adjuster work.',
  },
  {
    q: 'Can we show manufacturer certifications?',
    a: 'Yes, if you hold them. Certifications such as GAF, Owens Corning or CertainTeed contractor programs can be shown with the warranty options they allow. We only display credentials you can verify.',
  },
  {
    q: 'Is the roofing website shown on this page a real client?',
    a: 'No. Summit Peak Roofing is a concept design we created to show the layout we recommend for roofing contractors. Our live client projects are in auto body repair, tree service, handyman, landscaping and laundry services. Before you commit, we design a free homepage sample for your own roofing company.',
  },
  {
    q: 'How much does a roofing website cost?',
    a: 'Our Starter website is $700 total with split payments, or $600 paid in full, for a custom homepage plus 2 inner pages. Growth is $1,000 for up to 7 pages, enough for separate replacement, repair, storm damage and gallery pages, plus structured data and Google Business Profile setup.',
  },
  {
    q: 'Do you work with roofing companies in my area?',
    a: 'Yes. We work remotely with roofing contractors across the US. Your website is built around the towns you actually serve, with your service area shown clearly near the top.',
  },
  {
    q: 'How long does it take to build a roofing website?',
    a: 'Most roofing websites take 2 to 4 weeks from the first call to launch, depending on the number of pages and how quickly photos and details are ready. The free homepage sample comes first, within 24 hours.',
  },
  {
    q: 'Do you build websites for commercial roofing companies?',
    a: 'Yes. Commercial roofing sites are written for property managers and general contractors: the roof systems you install, maintenance programs, a project list, insurance and bonding details, and a bid request form. If you also do residential work, each audience gets its own section.',
  },
  {
    q: 'Can you redesign our current roofing website without losing our Google rankings?',
    a: 'We keep your existing page addresses where we can and redirect any that change, then check Search Console after launch. No one can guarantee rankings, but those steps protect the positions your current pages have earned.',
  },
  {
    q: 'Do roofers still need a website if they have a Google Business Profile?',
    a: 'Yes. The profile gets you into the map results, but homeowners click through to your website to check your work, credentials and warranty before they call, and Google uses your website to understand which services and towns you cover.',
  },
];

export default function NichePage() {
  // 2026-10-13 Phase 1: removed a second BreadcrumbList (Home > Services > page) that
  // contradicted the visible breadcrumb. <Breadcrumb> below already outputs the matching one.
  const jsonLdData = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Roofing Website Design",
      "serviceType": "Website Design for Roofing Contractors",
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
          <Breadcrumb label="Roofing Website Design" href="/niches/roofing-website-design" />
          <PageHeader
            pill="Industry Web Design"
            title={<>Roofing Website Design for Roofing Contractors</>}
            sub="Websites for roofing companies across the US: license, insurance and local proof up front, storm damage and replacement pages, and easy inspection requests. Starter: $700 total with split payments, or $600 paid in full."
          />
        </div>
      </section>

      <section className="location-content" style={{ padding: '80px 0' }}>
        <div className="wrap text-content " style={{ maxWidth: 840, margin: '0 auto', fontSize: '1.1rem', lineHeight: 1.85, color: 'var(--text-muted)' }}>

          <h2 style={h2}>What a Roofing Website Needs to Do</h2>
          <p style={para}>A new roof is one of the biggest repairs a homeowner will pay for, and many have heard stories about storm chasers: out-of-town crews who arrive after a hailstorm, collect a deposit and disappear. So before they call, homeowners look for proof that you are licensed, insured, local and still going to be around when the warranty matters.</p>
          <p style={para}>A roofing website has to provide that proof quickly, then make the next step easy, whether that is an emergency tarp after a storm or a free inspection for a planned replacement.</p>
          <p style={para}>Our roofing web design is built around those questions: custom websites for roofing contractors, with your credentials, completed work and service area front and center.</p>

          {/* Visual Showcase Card */}
          <div data-preview-card="true" style={{ margin: '48px 0', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--line-dark)', background: 'rgba(255,255,255,0.02)' }}>
            <div style={{ background: 'rgba(0,0,0,0.5)', padding: '12px 18px', display: 'flex', alignItems: 'center', gap: '12px', borderBottom: '1px solid var(--line-dark)' }}>
              <div style={{ display: 'flex', gap: '6px' }}>
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f56', display: 'inline-block' }} />
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ffbd2e', display: 'inline-block' }} />
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#27c93f', display: 'inline-block' }} />
              </div>
              <div style={{ flex: 1, background: 'rgba(255,255,255,0.06)', borderRadius: '6px', padding: '4px 12px', fontSize: '0.82rem', color: 'var(--muted-inv)', fontFamily: 'monospace' }}>
                Concept design: Summit Peak Roofing (sample brand, not a client)
              </div>
            </div>
            <picture>
              <source type="image/avif" srcSet="/images/optimized/roofing-mockup-480.avif 480w, /images/optimized/roofing-mockup-720.avif 720w, /images/optimized/roofing-mockup-960.avif 960w" sizes="(max-width: 840px) 100vw, 840px" />
              <source type="image/webp" srcSet="/images/optimized/roofing-mockup-480.webp 480w, /images/optimized/roofing-mockup-720.webp 720w, /images/optimized/roofing-mockup-960.webp 960w" sizes="(max-width: 840px) 100vw, 840px" />
              <img
                src="/images/optimized/roofing-mockup-720.jpg"
                alt="Concept design for Summit Peak Roofing, a sample brand (not a real client), by Embra Technologies"
                loading="lazy"
                decoding="async"
                width={840}
                height={480}
                style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
              />
            </picture>
            <div style={{ padding: '16px 20px', borderTop: '1px solid var(--line-dark)', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '10px', background: 'rgba(0,0,0,0.25)' }}>
              <span style={{ fontSize: '0.88rem', color: 'var(--muted-inv)' }}>Concept design. Summit Peak Roofing is a sample brand we created to show the layout: inspection requests, insurance claim steps and certification badges.</span>
              <Link href="/contact" style={{ color: 'var(--primary-bright)', fontSize: '0.88rem', textDecoration: 'underline', fontWeight: 600 }}>See your own design free in 24 hours &rarr;</Link>
            </div>
          </div>

          <h2 style={h2}>How We Structure a Roofing Website</h2>
          <p style={para}>1. <strong>Local proof up front:</strong> your license and insurance details, years in business, the towns you serve and recent reviews near the top of the page, so homeowners can tell you apart from storm chasers at a glance.</p>
          <p style={para}>2. <strong>A clear insurance claim explanation:</strong> plain steps covering what your inspection includes, what photos and documentation you provide, and what to expect from the insurer, without promising to negotiate the claim for them.</p>
          <p style={para}>3. <strong>A gallery of finished roofs:</strong> before-and-after photos of real jobs, organized by roof type, with an inspection request button on every page.</p>

          <h2 style={h2}>Pages Every Roofing Website Needs</h2>
          <p style={para}>Give each service its own page: roof replacement, roof repair, storm and hail damage, emergency tarping if you offer it, gutters, commercial roofing if you do it, and a project gallery. Each page should say what the job involves, show real work and end with a way to call or request an inspection.</p>

          {/* 2026-11-11: checklist for the near-page-1 search "roofing website" (46 impressions, position 14.2). */}
          <h2 style={h2}>Roofing Website Checklist</h2>
          <p style={para}>Use this to check the roofing website you have now, or to brief whoever builds your next one:</p>
          <p style={para}>&bull; <strong>Local proof in the first screen:</strong> license and insurance details, years in business, the towns you serve and your Google rating.</p>
          <p style={para}>&bull; <strong>A tap-to-call button that never scrolls away,</strong> plus a short inspection request form.</p>
          <p style={para}>&bull; <strong>Separate pages</strong> for replacement, repair, storm and hail damage, and gutters, each with real photos.</p>
          <p style={para}>&bull; <strong>A plain insurance claim explanation</strong> that describes your inspection and documentation without promising to negotiate the claim.</p>
          <p style={para}>&bull; <strong>A gallery of finished roofs</strong> organized by roof type, with before-and-after pairs where you have them.</p>
          <p style={para}>&bull; <strong>Fast loading on a phone</strong>, because many homeowners search from the driveway after a storm.</p>

          <StockPhoto name="stock-roofing" />

          <h2 style={h2}>Roofing Company Web Design Services</h2>
          <p style={para}>Our roofing company web design services cover the full site, designed and written for your business rather than adapted from a template:</p>
          <p style={para}>&bull; <strong>Service pages</strong> for roof replacement, roof repair, storm and hail damage, gutters, siding and commercial roofing, each with the questions homeowners ask before they call.</p>
          <p style={para}>&bull; <strong>An inspection request form</strong> that works on a phone and lets homeowners attach photos of the damage.</p>
          <p style={para}>&bull; <strong>Project galleries</strong> with before-and-after photos of your own roofs, sorted by job type.</p>
          <p style={para}>&bull; <strong>Trust details up front:</strong> license and insurance information, the manufacturer certifications you actually hold, and your workmanship warranty in plain terms.</p>
          <p style={para}>&bull; <strong>Insurance claim and financing sections</strong>, written carefully: how you help with claims, and financing only if you offer it.</p>
          <p style={para}>&bull; <strong>On-page SEO and structured data</strong>, plus a sitemap submitted to Google when the site launches.</p>

          <h2 style={h2}>Web Design for Roofers: Residential and Commercial</h2>
          <p style={para}>Homeowners and commercial buyers choose a roofer in different ways, so a good roofing website speaks to each of them separately instead of mixing both on one page.</p>
          <p style={para}>&bull; <strong>Residential roofing:</strong> homeowners usually compare two or three roofers. They want to see that you are local, licensed and insured, what your workmanship warranty covers, photos of roofs on homes like theirs, financing if you offer it, and a quick way to book an inspection.</p>
          <p style={para}>&bull; <strong>Commercial roofing:</strong> property managers, facility managers and general contractors look for the systems you install (TPO, EPDM, modified bitumen, metal), maintenance and inspection programs, a project list with building types and sizes, your insurance and bonding details and safety record, and a way to request a bid or download a capability statement.</p>
          <p style={para}>If you do both, commercial work gets its own section and its own contact form, so a property manager is never sent through a homeowner&apos;s inspection request.</p>

          <h2 style={h2}>Roofing Landing Pages for Ads and Storm Season</h2>
          <p style={para}>A landing page is a single page built for one offer, usually for Google Ads, a mailer or a yard sign QR code. For roofers that might be a free inspection offer, a roof replacement financing page if you offer financing, or a storm response page after hail or high winds in your area.</p>
          <p style={para}>Good roofing landing pages repeat the exact offer from the ad, keep the phone number and one short form in view, show local proof such as reviews and finished roofs nearby, and leave out the full site menu so visitors are not distracted. Keep storm pages accurate: name the actual storm and the areas affected, and update or remove the page once the work is done. If you run ads, we can build landing pages alongside your main website.</p>

          <h2 style={h2}>Custom Roofing Website or a Template?</h2>
          <p style={para}>A website builder or a roofing template can work for a new company. The catch is that the template only provides the layout: someone still has to write a page for each service, explain your inspection and claims process, sort your photos by roof type and keep everything current, and the monthly fee keeps running either way.</p>
          <p style={para}>A custom roofing website from us is a one-time cost from $600 (paid in full). You own it, it is written for your services and service area, and there is no monthly fee unless you choose the Care Plan. If you already have a site that ranks in Google, a redesign should keep your existing page addresses or redirect them to the new ones, so you keep the rankings you have earned. We do that on every redesign.</p>

          <h2 style={h2}>Choosing a Roofing Web Design Company</h2>
          <p style={para}>Whoever you hire, ask these questions before you sign:</p>
          <p style={para}>&bull; <strong>Will I own the website and the domain?</strong> Some roofing website platforms rent the site to you, and it disappears when you stop paying.</p>
          <p style={para}>&bull; <strong>Is the price published and fixed?</strong> You should know the total before the work starts.</p>
          <p style={para}>&bull; <strong>Can I see live sites you have built and check their speed?</strong> A screenshot is not enough; open the sites on your phone.</p>
          <p style={para}>&bull; <strong>Who writes the content?</strong> Service pages are most of the work. Find out whether the price includes writing them.</p>
          <p style={para}>&bull; <strong>Do they promise guaranteed rankings?</strong> No one controls Google&apos;s results, so treat a guarantee as a warning sign.</p>
          <p style={para}>To be clear about our own record: we have not launched a live roofing client yet. Our live sites are in auto body repair, handyman, tree service, landscaping and other trades, all in our <Link href="/portfolio" style={link}>portfolio</Link> with links to their PageSpeed reports. That is why we design a free homepage sample for your roofing company first, so you can judge the work before you pay anything.</p>

          <h2 style={h2}>How a Roofing Website Project Works</h2>
          <p style={para}>1. <strong>Free homepage sample:</strong> tell us your company name, services and service area, and we send a custom homepage design within 24 hours.</p>
          <p style={para}>2. <strong>Discovery call:</strong> we go through your services, the towns you cover, your license, insurance and certifications, and the job photos you have.</p>
          <p style={para}>3. <strong>Design and writing:</strong> we write and design each page, and you review everything before launch.</p>
          <p style={para}>4. <strong>Launch:</strong> we publish the site, submit the sitemap to Google and connect your Google Business Profile to the right pages.</p>
          <p style={para}>Most roofing websites take 2 to 4 weeks from the first call to launch, depending on how quickly photos and details are ready.</p>

          <h2 style={h2}>Local SEO for Roofing Contractors</h2>
          <p style={para}>Roofing searches rise sharply after storms, and homeowners usually search for &quot;roof repair near me&quot; or &quot;roofing contractor&quot; plus their town. Most of those calls come through your Google Business Profile and the map results, so a complete profile with real job photos and steady reviews matters as much as the website.</p>
          <p style={para}>We add LocalBusiness and RoofingContractor structured data, give each service its own page, and add town pages only where you have real jobs and reviews to show. Read our <Link href="/blog/local-seo-guide-for-service-businesses" style={link}>local SEO guide for home service businesses</Link>, or see our <Link href="/services/local-seo" style={link}>local SEO service</Link>.</p>

          <h2 style={h2}>Roofing Website Cost and Pricing</h2>
          <p style={para}>Published pricing, no long-term contract, and you own the finished website:</p>
          <p style={para}>&bull; <strong>Starter ($700 total with split payments, or $600 paid in full):</strong> a custom homepage plus 2 inner pages, built mobile-first with tap-to-call buttons, an inspection request form and on-page SEO basics.</p>
          <p style={para}>&bull; <strong>Growth ($1,000):</strong> up to 7 pages, enough for separate replacement, repair, storm damage and gallery pages, plus structured data and Google Business Profile setup.</p>
          <p style={para}>&bull; <strong>Care Plan ($150/month, optional):</strong> after each storm season we add your newest roof photos, and we keep hosting, security and search monitoring handled. Cancel anytime.</p>
          <p style={para}>All plans are on our <Link href="/pricing" style={link}>pricing page</Link>; our <Link href="/blog/website-cost-for-home-service-businesses" style={link}>guide to contractor website costs</Link> shows what roofing companies usually pay elsewhere.</p>
          <h3 style={{ color: '#fff', fontSize: '1.35rem', marginBottom: '16px', marginTop: '32px' }}>Roofing Website Hosting</h3>
          <p style={para}>Roofing website hosting is included in the optional Care Plan along with security and updates. Without it, the site is still yours: we hand over the files and you can host it wherever you like.</p>

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
            <h3 style={{ color: '#fff', fontSize: '1.6rem', marginBottom: '12px', fontWeight: 700 }}>See Your Roofing Website Before You Pay</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: '620px', margin: '0 auto 24px', lineHeight: 1.6 }}>We design a custom homepage sample for your roofing company within 24 hours, free and with no commitment.</p>
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
            <h3 style={{ color: '#fff', fontSize: '1.35rem', marginBottom: '12px' }}>Ready for a Roofing Website Homeowners Trust?</h3>
            <p style={{ fontSize: '1rem', marginBottom: '20px', lineHeight: 1.7 }}>
              Custom roofing websites from $700 total with split payments, or $600 paid in full. Start with a free homepage sample, ready within 24 hours.
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
