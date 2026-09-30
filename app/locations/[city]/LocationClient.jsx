'use client';

import { useRef } from 'react';
import { useReveal } from '../../../lib/useReveal';
import PageHeader from '../../../components/PageHeader';
import Breadcrumb from '../../../components/Breadcrumb';
import Cta from '../../../components/Cta';
import Link from 'next/link';

function LosAngelesContent() {
  return (
    <>
      <p style={{ marginBottom: '24px' }}>
        In a market as vast and competitive as Los Angeles, simply having a website is no longer enough. Home service businesses, auto repair shops, plumbers, and contractors face an incredibly dense digital landscape. When an LA resident searches for an "auto body shop near me" or an "emergency plumber," they expect a lightning-fast mobile experience, clear trust signals, and an effortless way to get in touch. Embra Technologies specializes in engineering these exact high-performance websites for Los Angeles businesses, turning raw search traffic into booked local jobs.
      </p>
      <p style={{ marginBottom: '40px' }}>
        Traditional agencies often rely on bloated WordPress templates that load slowly, particularly on mobile networks across Southern California. This slow loading speed directly hurts your Google rankings and causes potential customers to bounce to your competitors. We take a different approach. By utilizing the modern Next.js framework, we build custom web applications that load in under a second. We pair this raw speed with aggressive local SEO strategies designed specifically for the LA market—targeting high-value neighborhood searches from Santa Monica to Pasadena, and Silver Lake to the San Fernando Valley.
      </p>

      <h2 style={{ color: '#fff', fontSize: '2rem', marginBottom: '24px' }}>Case Study: Tuxford Collision Center</h2>
      <p style={{ marginBottom: '24px' }}>
        One of our proudest LA partnerships is with <strong>Tuxford Collision Center</strong>, a fully licensed auto body repair shop. When they came to us, they had a major problem: their previous online presence did nothing to build trust when it mattered most. If a driver got into a fender bender on the 405 at 11 PM, they needed a fast, trustworthy shop immediately. Tuxford's old site was slow, clunky on mobile, and lacked the immediate trust signals necessary to win that late-night emergency call.
      </p>
      <p style={{ marginBottom: '24px' }}>
        We completely rebuilt their digital identity. We engineered a trust-first hierarchy, placing licensing credentials, their glowing Google rating, and a clear "Free Towing + Free Estimate" guarantee above the fold. We built a conversion-engineered layout where every page fold includes a phone number and an instant quote form, eliminating all decision friction.
      </p>
      <p style={{ marginBottom: '24px' }}>
        Furthermore, we implemented a robust local SEO structure using LocalBusiness JSON-LD schema markup and neighborhood-specific metadata targeting "auto body repair Los Angeles." The results? Tuxford Collision Center saw a <strong>280% increase in organic traffic</strong> and achieved a flawless 97/100 on Google PageSpeed Insights.
      </p>
      <p style={{ marginBottom: '40px' }}>
        <Link href="/portfolio/tuxford-collision" style={{ color: 'var(--primary-bright)', textDecoration: 'underline' }}>Read the full Los Angeles auto body case study &rarr;</Link>
      </p>

      <h2 style={{ color: '#fff', fontSize: '2rem', marginBottom: '24px' }}>Why Choose Embra for Your LA Business?</h2>
      <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px' }}>
        <li><strong>Sub-Second Load Times:</strong> Speed is a ranking factor. Our custom builds average 96/100 on PageSpeed, ensuring you never lose an impatient customer.</li>
        <li><strong>Hyper-Local Focus:</strong> We don't just target "Los Angeles." We build service-area clusters that target the specific neighborhoods and zip codes where your best customers live.</li>
        <li><strong>Transparent, Flat-Rate Pricing:</strong> We don't hide our fees. Our comprehensive <Link href="/pricing" style={{ color: 'var(--primary-bright)', textDecoration: 'underline' }}>pricing plans</Link> start at a flat rate of $700 for a starter build, with no surprise agency retainers.</li>
      </ul>

      <h2 style={{ color: '#fff', fontSize: '2rem', marginBottom: '24px' }}>Los Angeles Web Design FAQs</h2>
      <div style={{ marginBottom: '24px' }}>
        <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '12px' }}>How do you help LA businesses rank on Google Maps?</h3>
        <p>We align your website's LocalBusiness schema exactly with your Google Business Profile. We also build location-specific landing pages and ensure your NAP (Name, Address, Phone number) consistency is flawless across your site.</p>
      </div>
      <div style={{ marginBottom: '40px' }}>
        <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '12px' }}>Can I see a design before committing?</h3>
        <p>Yes. We offer a free, no-obligation custom homepage sample built in 24 hours. You can view it on your phone and desktop before you sign a contract or pay a cent.</p>
      </div>
    </>
  );
}

function ChicagoContent() {
  return (
    <>
      <p style={{ marginBottom: '24px' }}>
        Chicago is a tough, hard-working market, and local businesses here need an online presence that reflects that same reliability. Whether you run a tree service navigating harsh Midwestern storms, a plumbing company, or a roofing business, your customers need to know they can count on you. When a Chicago homeowner has an emergency, they don't browse five different websites—they call the first business that looks professional, local, and fast. At Embra Technologies, we engineer websites that convert these high-intent local searches into booked jobs.
      </p>
      <p style={{ marginBottom: '40px' }}>
        A slow, bloated website built on an outdated template will cost you leads. Google specifically rewards fast-loading sites, especially for mobile searches. By utilizing Next.js, we build custom applications that load almost instantly. We combine this technical superiority with localized SEO strategies targeting Chicagoland—from the Loop out to the suburbs—ensuring your business appears exactly when customers are searching for your services.
      </p>

      <h2 style={{ color: '#fff', fontSize: '2rem', marginBottom: '24px' }}>Case Study: Sky High Tree Service</h2>
      <p style={{ marginBottom: '24px' }}>
        Tree service is a high-urgency, high-ticket industry. When severe storms hit Chicago, homeowners need emergency tree removal immediately. They don't have time to navigate a confusing website. <strong>Sky High Tree Service</strong> needed an online presence that captured these emergency searches instantly and built a sustainable organic presence year-round.
      </p>
      <p style={{ marginBottom: '24px' }}>
        Our approach was to implement an emergency CTA (Call to Action) architecture. We placed high-visibility emergency contact options above the fold on every single page, including click-to-call buttons and a "24/7 Emergency Service" badge. We front-loaded their credibility signals—insurance verification, license numbers, and before-and-after imagery—so stressed homeowners knew they were dealing with true professionals immediately.
      </p>
      <p style={{ marginBottom: '24px' }}>
        On the SEO side, we created dedicated service-area pages for key Chicago neighborhoods and suburbs, enriched with LocalBusiness schema targeting queries like "tree removal [neighborhood]." This aggressive strategy paid off: Sky High Tree Service saw a <strong>215% increase in emergency leads</strong> and maintains a 95/100 Google PageSpeed score.
      </p>
      <p style={{ marginBottom: '40px' }}>
        <Link href="/portfolio/sky-high-tree" style={{ color: 'var(--primary-bright)', textDecoration: 'underline' }}>Read the full Chicago tree service case study &rarr;</Link>
      </p>

      <h2 style={{ color: '#fff', fontSize: '2rem', marginBottom: '24px' }}>Our Approach to Chicago Web Design</h2>
      <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px' }}>
        <li><strong>Conversion-First Layouts:</strong> We design your site to guide the user naturally to the phone or the quote form, eliminating friction at every step.</li>
        <li><strong>Built for Local Dominance:</strong> Our SEO architecture ensures you aren't just ranking in the city center, but in the specific Chicago suburbs you want to target.</li>
        <li><strong>Clear, Honest Pricing:</strong> No hidden retainers. Check out our <Link href="/pricing" style={{ color: 'var(--primary-bright)', textDecoration: 'underline' }}>pricing page</Link> for transparent packages, starting at just $700 for a complete, blazing-fast starter site.</li>
      </ul>

      <h2 style={{ color: '#fff', fontSize: '2rem', marginBottom: '24px' }}>Chicago Web Design FAQs</h2>
      <div style={{ marginBottom: '24px' }}>
        <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '12px' }}>Do you provide ongoing support after the site goes live?</h3>
        <p>Yes. Our $150/mo Care Plan covers ultra-fast managed hosting, monthly content updates, security patches, and localized SEO tracking, so you can focus on running your business.</p>
      </div>
      <div style={{ marginBottom: '40px' }}>
        <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '12px' }}>How long does it take to build a site for a Chicago contractor?</h3>
        <p>Most projects take between 2 to 4 weeks from our initial discovery call to the final launch, depending on the number of service pages and specific integrations required.</p>
      </div>
    </>
  );
}

function AlaskaContent() {
  return (
    <>
      <p style={{ marginBottom: '24px' }}>
        Operating a business in Alaska presents unique geographical and logistical challenges. Your customers are often spread out across vast areas, and when they need a home service, they need to know you actually serve their specific region. For handymen, repair services, and contractors in Alaska, your website serves as your digital storefront, dispatcher, and trust-builder all rolled into one. At Embra Technologies, we build rugged, reliable, high-performance websites tailored to the unique demands of Alaskan businesses.
      </p>
      <p style={{ marginBottom: '40px' }}>
        A generic website template won't cut it when your customers are dealing with harsh weather emergencies or urgent home repairs. They need a site that loads instantly on a smartphone—even on spotty cellular connections—and immediately shows them you are local, available, and capable. We utilize modern React architecture to deliver sub-second load times, paired with precise local SEO to ensure your business ranks prominently when Alaskans search for services "near me."
      </p>

      <h2 style={{ color: '#fff', fontSize: '2rem', marginBottom: '24px' }}>Case Study: Alaska Fast Fix Handyman</h2>
      <p style={{ marginBottom: '24px' }}>
        Emergency repair requests in Alaska—like burst pipes, broken heating systems, or severe storm damage—require immediate response. When <strong>Alaska Fast Fix Handyman</strong> approached us, they needed a website that communicated urgency and local expertise the moment a stressed customer landed on the page late at night.
      </p>
      <p style={{ marginBottom: '24px' }}>
        We completely redesigned their user experience around an urgency-driven layout. We placed "Fast Response" messaging and the primary phone number at the absolute top of every page. Knowing that seconds matter when a pipe bursts, we optimized the site to load almost instantly. We also built a prominent service area section to prevent wasted calls from outside their coverage zone, building trust with locals who specifically want accountable, regional experts.
      </p>
      <p style={{ marginBottom: '24px' }}>
        By implementing structured data markup and optimizing service-area headings for "handyman near me" searches, we aligned their site perfectly with their Google Business Profile. As a result, Alaska Fast Fix saw a <strong>190% increase in local calls</strong> and secured a 98/100 score on Google PageSpeed Insights.
      </p>
      <p style={{ marginBottom: '40px' }}>
        <Link href="/portfolio/alaska-fast-fix" style={{ color: 'var(--primary-bright)', textDecoration: 'underline' }}>Read the full Alaska handyman case study &rarr;</Link>
      </p>

      <h2 style={{ color: '#fff', fontSize: '2rem', marginBottom: '24px' }}>Why Embra is Right for Alaskan Businesses</h2>
      <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px' }}>
        <li><strong>Built for Speed & Reliability:</strong> Our Next.js architecture means your site is served from global edge networks, ensuring it loads lightning fast even on slower mobile connections.</li>
        <li><strong>Clear Service Area Targeting:</strong> We use advanced local SEO tactics to ensure your site ranks for the exact boroughs, towns, and regions you service, filtering out unqualified leads.</li>
        <li><strong>No Hidden Costs:</strong> Transparency is key. Review our <Link href="/pricing" style={{ color: 'var(--primary-bright)', textDecoration: 'underline' }}>pricing options</Link> to see our flat-rate builds and affordable monthly care plans.</li>
      </ul>

      <h2 style={{ color: '#fff', fontSize: '2rem', marginBottom: '24px' }}>Alaska Local SEO FAQs</h2>
      <div style={{ marginBottom: '24px' }}>
        <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '12px' }}>How do you handle SEO for businesses covering large regions?</h3>
        <p>We build dedicated location pages for each major town or region you serve. These pages are specifically optimized with unique content and schema markup to capture local search intent across broad geographic areas.</p>
      </div>
      <div style={{ marginBottom: '40px' }}>
        <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '12px' }}>What happens if I need to update my site for seasonal services?</h3>
        <p>Our monthly Care Plan includes content updates. Whether you're shifting from summer deck repairs to winter heating maintenance, just let us know and we will update your messaging and CTA buttons within 24 hours.</p>
      </div>
    </>
  );
}

export default function LocationClient({ loc }) {
  const ref = useRef(null);
  useReveal(ref);

  const displayLocName = loc.name === 'the Gulf Coast' ? 'Gulf Coast' : loc.name;

  return (
    <div ref={ref} className="page-shell">
      <section className="page-hero">
        <div className="wrap">
          <Breadcrumb label={loc.name} href={`/locations/${loc.slug}`} />
          <PageHeader
            pill={`Web Design in ${loc.name}`}
            title={<>Dominating Search in <span className="highlight-text">{loc.name}</span></>}
            sub={`We help local businesses in ${loc.name} rank higher, load faster, and convert more traffic into paying customers.`}
          />
        </div>
      </section>

      <section className="location-content" style={{ padding: '80px 0' }}>
        <div className="wrap text-content reveal-up" style={{ maxWidth: 800, margin: '0 auto', fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text-muted)' }}>
          
          {loc.slug === 'los-angeles' ? (
            <LosAngelesContent />
          ) : loc.slug === 'chicago' ? (
            <ChicagoContent />
          ) : loc.slug === 'alaska' ? (
            <AlaskaContent />
          ) : (
            <>
              <h2 style={{ color: '#fff', fontSize: '2rem', marginBottom: '24px' }}>Custom Web Development for {displayLocName} Businesses</h2>
              <p style={{ marginBottom: '24px' }}>
                When customers in <strong>{loc.name}</strong> search for your services, they aren't looking for a slow, outdated website. 
                They want immediate answers, trust signals, and a seamless way to contact you. We specialize in building digital 
                experiences that meet those exact needs.
              </p>
              <p style={{ marginBottom: '40px' }}>
                Unlike traditional agencies that use bloated WordPress templates, we engineer custom-built Next.js applications that load 
                in under a second. We combine this technical foundation with aggressive Local SEO strategies to ensure you dominate 
                the local search market.
              </p>

              <h2 style={{ color: '#fff', fontSize: '2rem', marginBottom: '24px' }}>Why {displayLocName} Companies Choose Embra</h2>
              <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <li><strong>Sub-Second Load Times:</strong> Google explicitly rewards speed in local search. Our client websites average 96/100 on Google PageSpeed Insights.</li>
                <li><strong>Hyper-Local SEO:</strong> We structure your site with LocalBusiness JSON-LD schema, service-area clusters, and optimized metadata tailored to {loc.name}.</li>
                <li><strong>Zero Upfront Risk:</strong> We build a custom, interactive homepage sample for your brand in 24 hours. You only move forward if you love it.</li>
              </ul>
            </>
          )}

          <div style={{ marginTop: '40px', padding: '24px', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid var(--line-dark)' }}>
            <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '12px' }}>Explore Our Work &amp; Services</h3>
            <p style={{ fontSize: '0.95rem', marginBottom: '12px' }}>
              See how we help businesses achieve measurable search visibility and conversion gains:
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              <Link href="/services" style={{ color: 'var(--primary-bright)', textDecoration: 'underline' }}>Explore All Services &rarr;</Link>
              <Link href="/pricing" style={{ color: 'var(--primary-bright)', textDecoration: 'underline' }}>View Pricing Plans &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      <Cta variant="default" />
    </div>
  );
}
