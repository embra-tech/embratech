import Link from 'next/link';
import PageHeader from '../../../components/PageHeader';
import Breadcrumb from '../../../components/Breadcrumb';
import Cta from '../../../components/Cta';
import JsonLd from '../../../components/JsonLd';
import StockPhoto from '../../../components/StockPhoto';
import FaqAccordion from '../../../components/FaqAccordion';
import siteConfig from '../../../lib/site-config';

// 2026-11-24: Search Console round (top 30 queries, 3 months): sections for HVAC web design services, heating and
// ventilation companies, website builder vs custom, choosing an HVAC web design company, project steps; 3 FAQs;
// links to the new HVAC website examples and HVAC keywords guides. No HVAC client claimed (concept stays labelled).
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
    a: 'No. Polar Air HVAC is a concept design we created to show the layout we recommend for heating and cooling contractors. Our live client projects are in auto body repair, tree service, handyman, landscaping, home health care, travel and laundry services. Before you commit, we design a free homepage sample for your own HVAC company.',
  },
  {
    q: 'How much does an HVAC website cost?',
    a: 'Our Starter website is $700 total with split payments, or $600 paid in full, for a custom homepage plus 2 inner pages. Growth is $1,000 for up to 7 pages, enough for separate cooling, heating and maintenance pages, plus structured data and Google Business Profile setup.',
  },
  {
    q: 'How long does an HVAC website take to build?',
    a: 'Most projects take 2 to 4 weeks from the first call to launch, depending on how quickly we receive your photos, service list and service area. You see a free custom homepage sample within 24 hours, before you pay anything.',
  },
  {
    q: 'Should we use an HVAC website builder instead?',
    a: 'A website builder can work if you have the time to write every service page yourself and keep it updated each season. Most HVAC owners we talk to would rather spend that time on jobs. A custom site from us costs a one-time $600 to $1,500, you own it outright, and there is no monthly platform fee unless you choose the optional Care Plan.',
  },
  {
    q: 'Do HVAC websites need a page for every city we serve?',
    a: 'No. Pages that only swap the town name help nobody and can hurt your rankings. Add a town page only where you have real local work to show, such as photos, reviews or projects in that area; otherwise list your service area on your main pages and in your Google Business Profile.',
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
              <Link href="/contact" style={{ color: 'var(--primary-bright)', fontSize: '0.88rem', textDecoration: 'underline', fontWeight: 600 }}>See your own design free in 24 hours &rarr;</Link>
            </div>
          </div>

          <h2 style={h2}>How We Structure an HVAC Website</h2>
          <p style={para}>1. <strong>Urgent repairs, one tap away:</strong> a phone button that stays visible on mobile, with clear AC repair and heating repair pages that say what you fix, the areas you cover and how quickly you can usually respond.</p>
          <p style={para}>2. <strong>Replacements that earn trust:</strong> installation and replacement pages that show the certifications you hold, such as NATE or EPA Section 608, any manufacturer dealer status you have, real reviews and photos of your installs, and your financing options if you offer them.</p>
          <p style={para}>3. <strong>Maintenance plans that smooth out the seasons:</strong> a dedicated page explaining what your tune-up plan includes and what it costs, with a simple way to sign up.</p>

          <h2 style={h2}>Web Design for Heating, Ventilation and Air Conditioning Companies</h2>
          <p style={para}>Not every HVAC business looks the same. A residential AC company, a heating and ventilation contractor and a commercial mechanical contractor need different pages, even though they share the same trade. We plan the site around the work you actually sell:</p>
          <p style={para}>&bull; <strong>Residential heating and cooling:</strong> AC repair and installation, furnace repair and replacement, heat pumps, ductless mini-splits and maintenance plans, each with its own page.</p>
          <p style={para}>&bull; <strong>Ventilation and indoor air quality:</strong> ventilation systems, energy and heat recovery ventilators (ERVs and HRVs), air purification, humidifiers and duct cleaning, explained in plain language with the problems they solve.</p>
          <p style={para}>&bull; <strong>Commercial HVAC:</strong> rooftop units, preventive maintenance agreements and service request forms for property managers, kept separate from your homeowner pages so each audience finds its own path.</p>

          <StockPhoto name="stock-hvac" />

          <h2 style={h2}>Local SEO for Heating and Cooling Contractors</h2>
          <p style={para}>Local search for HVAC contractors revolves around phrases like &quot;AC repair near me,&quot; &quot;furnace replacement,&quot; &quot;heat pump installation&quot; and &quot;ductless mini-split,&quot; and demand swings with the weather, so pages need to be ready before each season starts.</p>
          <p style={para}>We give cooling, heating, heat pumps, indoor air quality and commercial work their own clear pages, add HVACBusiness and Service structured data, and add area pages only where you have real local work to show. For a step-by-step plan, read our <Link href="/blog/hvac-local-seo" style={link}>HVAC SEO guide for AC and heating companies</Link>, see how we approach <Link href="/locations/chicago" style={link}>local SEO for Chicago HVAC contractors</Link>, or explore our <Link href="/services/local-seo" style={link}>local SEO service</Link>.</p>
          <p style={para}>We also work with heating and cooling contractors in <Link href="/locations/fairbanks" style={link}>Fairbanks</Link>, where no-heat calls come at -40°F, in the <Link href="/locations/phoenix" style={link}>Phoenix metro</Link>, where AC failures are summer emergencies, and in Los Angeles, where we cover <Link href="/locations/los-angeles" style={link}>HVAC website design in Los Angeles</Link> on its own page. {/* 2026-11-26 (round 3): hvac website design ar 57/44, mobile al 18/47.7, birmingham al 12/49.8, montgomery al 11/52.3, hvac memphis 9/27.7 */}In the South, see our guides to <Link href="/locations/arkansas" style={link}>HVAC website design in Arkansas</Link>, <Link href="/locations/alabama" style={link}>HVAC websites in Birmingham, Mobile and Montgomery</Link> and <Link href="/locations/memphis" style={link}>HVAC and plumbing websites in Memphis</Link>, where long, humid cooling seasons make AC repair pages the busiest on the site.</p>

          <h2 style={h2}>HVAC Web Design Services: What Is Included</h2>
          <p style={para}>Every HVAC website we build is designed and written from scratch for your company. Our HVAC web design services cover:</p>
          <p style={para}>&bull; <strong>Custom design</strong> in your colors, with your own trucks, team and install photos rather than stock images wherever you have them.</p>
          <p style={para}>&bull; <strong>Service pages</strong> for cooling, heating, heat pumps, indoor air quality and maintenance plans, written around the questions homeowners ask before they call.</p>
          <p style={para}>&bull; <strong>Mobile-first layout</strong> with a call button that stays on screen, and a short service request form that works with one thumb.</p>
          <p style={para}>&bull; <strong>Financing and maintenance plan sections</strong> that only show the terms and prices you actually offer.</p>
          <p style={para}>&bull; <strong>On-page SEO and structured data:</strong> page titles, descriptions, headings, HVACBusiness and Service markup, and a sitemap submitted to Google.</p>
          <p style={para}>&bull; <strong>Integrations</strong> with the scheduling, CRM or payment tools you already use, when you need them (see <Link href="/services/website-integrations" style={link}>website integrations</Link>).</p>
          <p style={para}>&bull; <strong>Full ownership:</strong> the code, content and domain are yours once the site is paid for.</p>

          <h2 style={h2}>HVAC Website Builder or a Custom HVAC Website?</h2>
          <p style={para}>DIY website builders and HVAC website templates are quick to start, and they are a reasonable choice if you enjoy writing and have time to update the site every season. The trade-offs show up later: the monthly fee never ends, every HVAC company in town can use the same template, and the pages that win calls (a separate page for each service, with real details) still have to be written by someone.</p>
          <p style={para}>A custom HVAC website costs more up front but is built around your services, your service area and your busy seasons, and you own it outright. For a side-by-side look at the real costs, see our <Link href="/blog/website-cost-for-home-service-businesses" style={link}>website cost guide for home service businesses</Link>, or work out what a website is worth to your business with our <Link href="/blog/website-roi-calculator" style={link}>contractor website ROI calculator</Link>.</p>

          <h2 style={h2}>Choosing an HVAC Web Design Agency or Company</h2>
          <p style={para}>Whoever you hire, whether it is us, a national HVAC marketing agency or a local freelancer, these questions separate good HVAC web design companies from the rest:</p>
          <p style={para}>1. <strong>Who owns the website if you leave?</strong> Some agencies rent you the site as part of a monthly contract. You should own the code, content and domain.</p>
          <p style={para}>2. <strong>Is pricing published?</strong> You should know the full cost before the first call, including any monthly fees.</p>
          <p style={para}>3. <strong>Can you see real work and check its speed?</strong> Ask for live sites, not just screenshots, and run them through Google&apos;s PageSpeed test yourself.</p>
          <p style={para}>4. <strong>Who writes the service pages?</strong> Generic copy shared across clients does little for search. Each page should describe your services and your area.</p>
          <p style={para}>5. <strong>What happens after launch?</strong> Seasonal offers, new photos and new services should be easy to add, by you or by them.</p>
          <p style={para}>About us, honestly: we are a small remote team of senior designers and developers, our pricing is published, and you see a free custom homepage sample before paying anything. We have not built a live HVAC client site yet (the design above is a concept); our live projects are in auto body repair, handyman, tree service, landscaping and other home services, and each one links to its PageSpeed report in our <Link href="/portfolio" style={link}>portfolio</Link>. For examples of what strong heating and cooling sites have in common, see our guide to <Link href="/blog/hvac-website-examples" style={link}>HVAC website examples</Link>.</p>

          <h2 style={h2}>How an HVAC Website Project Works</h2>
          <p style={para}>1. <strong>Free homepage sample (within 24 hours):</strong> tell us your services, service area and brand colors, and we design your homepage before you pay anything.</p>
          <p style={para}>2. <strong>Content and photos (week 1):</strong> we write the service pages with you, using your photos, certifications, reviews and financing details.</p>
          <p style={para}>3. <strong>Build and review (weeks 1 to 3):</strong> we build every page mobile-first and you review it on your own phone.</p>
          <p style={para}>4. <strong>Launch and Google setup (2 to 4 weeks from the first call):</strong> we connect your domain, submit the sitemap to Google Search Console and check your Google Business Profile links to the new site. Our <Link href="/blog/hvac-keywords" style={link}>HVAC keywords guide</Link> explains how we choose the searches each page targets.</p>

          <h2 style={h2}>Pricing for HVAC Websites</h2>
          <p style={para}>Published pricing, no long-term contract, and you own the finished website:</p>
          <p style={para}>&bull; <strong>Starter ($700 total with split payments, or $600 paid in full):</strong> a custom homepage plus 2 inner pages, built mobile-first with tap-to-call buttons, a service request form and on-page SEO basics.</p>
          <p style={para}>&bull; <strong>Growth ($1,000):</strong> up to 7 pages, enough for separate cooling, heating and maintenance plan pages, plus structured data and Google Business Profile setup.</p>
          <p style={para}>&bull; <strong><Link href="/services/care-plan" style={link}>Care Plan</Link> ($150/month, optional):</strong> before each season we swap in your AC or heating offers, and we keep the site hosted, secure and monitored for search. Cancel anytime.</p>
          <p style={para}>Every plan is listed on our <Link href="/pricing" style={link}>pricing page</Link>, and our <Link href="/services/web-design" style={link}>website design service</Link> page walks through the build process. To weigh an HVAC website from us against templates and larger agencies, see our <Link href="/blog/website-cost-for-home-service-businesses" style={link}>website cost breakdown</Link>.</p>

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
