'use client';

import { useRef } from 'react';
import { useReveal } from '../../../lib/useReveal';
import PageHeader from '../../../components/PageHeader';
import Breadcrumb from '../../../components/Breadcrumb';
import Cta from '../../../components/Cta';
import Link from 'next/link';
import ProjectShot from '../../../components/ProjectShot';

function LosAngelesContent() {
  return (
    <>
      <p style={{ marginBottom: '24px' }}>
        Los Angeles is one of the most competitive places in the country to run a service business online. When someone in LA searches for an "auto body shop near me" or an "emergency plumber," they compare a few options on their phone in minutes: who looks trustworthy, who covers their neighborhood and who is easiest to reach. Embra Technologies builds websites for service businesses in Los Angeles, from auto body shops to plumbers and contractors, around exactly those questions.
      </p>
      <p style={{ marginBottom: '40px' }}>
        Many service-business websites run on heavy templates that load slowly on a phone, especially on a weak signal. We build custom websites with Next.js that load quickly, then set up the local search basics: a complete Google Business Profile, clear service pages and accurate business details. For a business covering several parts of LA, such as the Westside, the San Fernando Valley or the South Bay, we add area pages only where there are real jobs and reviews to show.
      </p>

      <h2 style={{ color: '#fff', fontSize: '2rem', marginBottom: '24px' }}>Case Study: Tuxford Collision Center</h2>
      <p style={{ marginBottom: '24px' }}>
        In Los Angeles we built the website for <strong>Tuxford Collision Center</strong>, a licensed auto body repair shop. Its previous site was slow, hard to use on a phone and didn't show what a driver needs to see after an accident: licensing, reviews and what happens next.
      </p>
      <p style={{ marginBottom: '24px' }}>
        We rebuilt the site around trust: licensing details, the shop's Google rating and a clear "Free Towing + Free Estimate" offer at the top of the page, with a phone number and a quote form within reach on every screen.
      </p>
      <p style={{ marginBottom: '24px' }}>
        We also set up the local search basics: LocalBusiness structured data and page titles focused on auto body repair in Los Angeles, so Google understands where the shop works. The site's current speed can be checked at any time through the PageSpeed report linked from the case study.
      </p>
      <p style={{ marginBottom: '40px' }}>
        <Link href="/portfolio/tuxford-collision" style={{ color: 'var(--primary-bright)', textDecoration: 'underline' }}>Read the full Los Angeles auto body case study &rarr;</Link>
      </p>
      <ProjectShot name="tuxford" url="tuxfordcollision.com" alt="Tuxford Collision Center website for a Los Angeles auto body shop, by Embra Technologies" caption="Tuxford Collision Center, Los Angeles: licensing, rating and free towing offer up front." href="/portfolio/tuxford-collision" linkText="Case study" />

      {/* 2026-10-26: second LA case study (local SEO, measured in the client's own Search Console). */}
      <h2 style={{ color: '#fff', fontSize: '2rem', marginBottom: '24px' }}>Local SEO Results: Pick N Drop Laundry</h2>
      <p style={{ marginBottom: '24px' }}>
        <strong>Pick N Drop Laundry</strong> offers laundry pickup and dry cleaning across Los Angeles neighborhoods. We added neighborhood pages, fixed its structured data and breadcrumbs, and optimized its Google Business Profile. In the client&apos;s own Google Search Console data, clicks from Google grew from 9 to 21 and impressions from 471 to 1,399, comparing March 15–April 13 with September 11–October 10, 2026.
      </p>
      <p style={{ marginBottom: '40px' }}>
        <Link href="/portfolio/pnd-laundry" style={{ color: 'var(--primary-bright)', textDecoration: 'underline' }}>Read the Pick N Drop Laundry local SEO case study &rarr;</Link>
      </p>

      <h2 style={{ color: '#fff', fontSize: '2rem', marginBottom: '24px' }}>Service Businesses We Build For in Los Angeles</h2>
      <p style={{ marginBottom: '40px' }}>
        We design websites and handle local SEO for LA service businesses including{' '}
        <Link href="/niches/auto-body-shop-website-design" style={{ color: 'var(--primary-bright)', textDecoration: 'underline' }}>auto body and collision repair shops</Link>,{' '}
        <Link href="/niches/hvac-website-design" style={{ color: 'var(--primary-bright)', textDecoration: 'underline' }}>HVAC companies</Link>,{' '}
        <Link href="/niches/plumber-website-design" style={{ color: 'var(--primary-bright)', textDecoration: 'underline' }}>plumbers</Link>,{' '}
        <Link href="/niches/roofing-website-design" style={{ color: 'var(--primary-bright)', textDecoration: 'underline' }}>roofers</Link>,{' '}
        <Link href="/niches/web-design-for-handyman-businesses" style={{ color: 'var(--primary-bright)', textDecoration: 'underline' }}>handymen</Link> and other contractors. For marketing ideas, read our <Link href="/blog/auto-body-shop-marketing" style={{ color: 'var(--primary-bright)', textDecoration: 'underline' }}>auto body shop marketing guide</Link> or <Link href="/blog/hvac-local-seo" style={{ color: 'var(--primary-bright)', textDecoration: 'underline' }}>HVAC SEO guide</Link>, or see our <Link href="/services/local-seo" style={{ color: 'var(--primary-bright)', textDecoration: 'underline' }}>local SEO service</Link>.
      </p>

      <h2 style={{ color: '#fff', fontSize: '2rem', marginBottom: '24px' }}>Why Choose Embra for Your LA Business?</h2>
      <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px' }}>
        <li><strong>Fast on Phones:</strong> Speed matters to visitors and is one of the signals Google uses. Each case study links to the client site's live PageSpeed report, so you can check it yourself.</li>
        <li><strong>Local Detail Where It&apos;s Real:</strong> We cover the neighborhoods you actually serve, adding area pages only where you have jobs and reviews to show, rather than copied pages for every zip code.</li>
        <li><strong>Published Pricing:</strong> Our <Link href="/pricing" style={{ color: 'var(--primary-bright)', textDecoration: 'underline' }}>pricing plans</Link> start at $700 total with split payments, or $600 paid in full, with no retainers.</li>
      </ul>

      <h2 style={{ color: '#fff', fontSize: '2rem', marginBottom: '24px' }}>Los Angeles Web Design FAQs</h2>
      <div style={{ marginBottom: '24px' }}>
        <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '12px' }}>How do you help LA businesses rank on Google Maps?</h3>
        <p>We make your website&apos;s business details match your Google Business Profile, keep your name, address and phone number consistent across the web, and help you collect genuine reviews. Distance from the searcher also matters, so nobody can guarantee a map position, but these are the factors you can influence.</p>
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
        Chicago homeowners deal with storm damage, frozen pipes and furnace failures in winter and heavy AC use in summer, so the businesses that fix those problems need websites people trust at a glance. Whether you run a tree service, a plumbing company, an HVAC company or a roofing business, a Chicago homeowner with an urgent problem will usually call the first company that looks professional, local and easy to reach. Embra Technologies builds websites for Chicago service businesses around exactly that.
      </p>
      <p style={{ marginBottom: '40px' }}>
        Many contractor websites run on heavy templates that load slowly on a phone. We build custom websites with Next.js that load quickly, then set up the local search basics for Chicagoland, from the city to the suburbs you actually serve: a complete Google Business Profile, clear service pages and accurate business details.
      </p>

      <h2 style={{ color: '#fff', fontSize: '2rem', marginBottom: '24px' }}>Case Study: Sky High Tree Service</h2>
      <p style={{ marginBottom: '24px' }}>
        Tree service is urgent, high-value work: after a storm, Chicago homeowners need someone quickly and don&apos;t have time for a confusing website. For <strong>Sky High Tree Service</strong>, the goal was a site that makes it easy to call or ask for an estimate, at any time of year.
      </p>
      <p style={{ marginBottom: '24px' }}>
        The site gives homeowners two clear ways to get in touch, phone links and a free-estimate form, alongside service descriptions, project photos and a service-area section, so they can check the work and the coverage before they call.
      </p>
      <p style={{ marginBottom: '24px' }}>
        The case study describes these website features. It does not claim a measured increase in leads; outcome numbers will be added only with a dated source.
      </p>
      <p style={{ marginBottom: '40px' }}>
        <Link href="/portfolio/sky-high-tree" style={{ color: 'var(--primary-bright)', textDecoration: 'underline' }}>Read the full Chicago tree service case study &rarr;</Link>
      </p>
      <ProjectShot name="skyhightreeservice" url="skyhightreeservicechicago.com" alt="Sky High Tree Service website for a Chicagoland tree service, by Embra Technologies" caption="Sky High Tree Service, Chicagoland: call and estimate options, project photos and service area." href="/portfolio/sky-high-tree" linkText="Case study" />

      {/* 2026-10-26: Chicago HVAC section (US queries "seo company for hvac repair in chicago", "hvac seo chicago"). */}
      <h2 style={{ color: '#fff', fontSize: '2rem', marginBottom: '24px' }}>Local SEO for Chicago HVAC and Plumbing Contractors</h2>
      <p style={{ marginBottom: '24px' }}>
        In Chicago, heating and cooling searches swing hard with the seasons: furnace and boiler repair when the first cold snap arrives, AC repair once summer heat sets in. For an HVAC company, local SEO means having heating and cooling service pages ready before each season, a Google Business Profile that lists every service you offer, and a steady flow of genuine reviews from Chicago customers.
      </p>
      <p style={{ marginBottom: '40px' }}>
        Our <Link href="/blog/hvac-local-seo" style={{ color: 'var(--primary-bright)', textDecoration: 'underline' }}>HVAC SEO guide</Link> walks through the steps, including how to choose an SEO company for HVAC repair. If you&apos;d rather have it done for you, our <Link href="/services/local-seo" style={{ color: 'var(--primary-bright)', textDecoration: 'underline' }}>local SEO service</Link> starts with a free review, and our <Link href="/niches/hvac-website-design" style={{ color: 'var(--primary-bright)', textDecoration: 'underline' }}>HVAC website design</Link> page shows how we build heating and cooling websites. We work remotely with contractors across Chicagoland.
      </p>

      <h2 style={{ color: '#fff', fontSize: '2rem', marginBottom: '24px' }}>Our Approach to Chicago Web Design</h2>
      <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px' }}>
        <li><strong>A Clear Next Step:</strong> Every page guides visitors to the phone or the quote form, with no hunting for contact details.</li>
        <li><strong>The Areas You Actually Serve:</strong> We set up your Google profile and service pages around the city neighborhoods and suburbs you cover, adding area pages only where you have real work to show.</li>
        <li><strong>Published Pricing:</strong> No retainers. See our <Link href="/pricing" style={{ color: 'var(--primary-bright)', textDecoration: 'underline' }}>pricing page</Link>: the Starter website is $700 total with split payments, or $600 paid in full.</li>
      </ul>

      <h2 style={{ color: '#fff', fontSize: '2rem', marginBottom: '24px' }}>Chicago Web Design FAQs</h2>
      <div style={{ marginBottom: '24px' }}>
        <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '12px' }}>Do you provide ongoing support after the site goes live?</h3>
        <p>Yes. Our optional $150/month Care Plan covers hosting, security updates, monthly content updates and SEO monitoring, so you can focus on running your business.</p>
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
        A generic website template won't cut it when your customers are dealing with harsh weather emergencies or urgent home repairs. They need a site that loads instantly on a smartphone-even on spotty cellular connections-and immediately shows them you are local, available, and capable. We utilize modern React architecture to deliver sub-second load times, paired with precise local SEO to ensure your business ranks prominently when Alaskans search for services "near me."
      </p>

      <h2 style={{ color: '#fff', fontSize: '2rem', marginBottom: '24px' }}>Case Study: Alaska Fast Fix Handyman</h2>
      <p style={{ marginBottom: '24px' }}>
        Emergency repair requests in Alaska-like burst pipes, broken heating systems, or severe storm damage-require immediate response. When <strong>Alaska Fast Fix Handyman</strong> approached us, they needed a website that communicated urgency and local expertise the moment a stressed customer landed on the page late at night.
      </p>
      <p style={{ marginBottom: '24px' }}>
        We completely redesigned their user experience around an urgency-driven layout. We placed "Fast Response" messaging and the primary phone number at the absolute top of every page. Knowing that seconds matter when a pipe bursts, we optimized the site to load almost instantly. We also built a prominent service area section to prevent wasted calls from outside their coverage zone, building trust with locals who specifically want accountable, regional experts.
      </p>
      <p style={{ marginBottom: '24px' }}>
        We added structured data and service-area headings, and matched the site's business details to their Google Business Profile, so Google understands where they work. The site's current speed can be checked through the PageSpeed report linked from the case study.
      </p>
      <p style={{ marginBottom: '40px' }}>
        <Link href="/portfolio/alaska-fast-fix" style={{ color: 'var(--primary-bright)', textDecoration: 'underline' }}>Read the full Alaska handyman case study &rarr;</Link>
      </p>
      <ProjectShot name="alaskahandyman" url="alaskafastfixhandyman.com" alt="Alaska Fast Fix Handyman website by Embra Technologies" caption="Alaska Fast Fix Handyman: tap-to-call on every page and a clear service-area section." href="/portfolio/alaska-fast-fix" linkText="Case study" />

      <h2 style={{ color: '#fff', fontSize: '2rem', marginBottom: '24px' }}>Why Embra is Right for Alaskan Businesses</h2>
      <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px' }}>
        <li><strong>Built for Speed & Reliability:</strong> Your site is hosted on Vercel&apos;s global network, so pages load quickly even on slower mobile connections.</li>
        <li><strong>Clear Service Area Targeting:</strong> We set up your service pages and Google Business Profile around the towns you actually serve, so the right customers can find you and others can see you don&apos;t cover their area.</li>
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

function BrooklynContent() {
  return (
    <>
      <p style={{ marginBottom: '24px' }}>
        Embra Technologies builds high-performance custom websites and local SEO systems for home service businesses across the United States, including Brooklyn and the rest of New York City. We are a fully remote team with support on US business hours, so your location never limits whether we can help. Our clients are in Los Angeles, Chicago, Alaska, Merced, and beyond.
      </p>
      <p style={{ marginBottom: '24px' }}>
        If you run a home service business, a handyman operation, a plumbing company, a tree service, a roofing contractor, an HVAC business, or a landscaping company, you know that most of your customers find you online first. And what they find determines whether they call you or your competitor. A slow, generic website built on an outdated WordPress template will cost you leads every single day. At Embra Technologies, we build custom websites using the modern Next.js (React) framework, engineered to load in under one second and designed to convert first-time visitors into booked jobs.
      </p>
      <p style={{ marginBottom: '40px' }}>
        Brooklyn rewards businesses that are direct and dependable, and that is how we approach every project: honest pricing, real timelines, and a 24-hour custom homepage sample so you can see what we build before you commit to anything. No retainers, no lock-in, no surprises.
      </p>

      <h2 style={{ color: '#fff', fontSize: '2rem', marginBottom: '24px' }}>What We Build for US Home Service Businesses</h2>
      <p style={{ marginBottom: '24px' }}>
        Our clients come from every trade. We have built websites for tree services, auto body shops, handymen, and lawn care and irrigation contractors. Each project is custom, tailored to the specific services, geography, and customer psychology of that business. Below are some of the real results we have delivered for clients across the country.
      </p>
      <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
        <li><strong>Sky High Tree Service (Chicago, IL):</strong> Emergency tree removal and storm damage services. We built an urgency-driven site with 24/7 emergency CTAs and neighborhood-level local SEO. <Link href="/portfolio/sky-high-tree" style={{ color: 'var(--primary-bright)', textDecoration: 'underline' }}>Read the case study &rarr;</Link></li>
        <li><strong>Tuxford Collision Center (Los Angeles, CA):</strong> Auto body and collision repair. We built a trust-first website with licensing credentials, Google rating, and free towing guarantee above the fold, designed for the 11 PM accident scenario. <Link href="/portfolio/tuxford-collision" style={{ color: 'var(--primary-bright)', textDecoration: 'underline' }}>Read the case study &rarr;</Link></li>
        <li><strong>Alaska Fast Fix Handyman (Alaska):</strong> Emergency handyman services across a geographically spread-out market. We led with fast response messaging, instant tap-to-call, and a clear service area map. <Link href="/portfolio/alaska-fast-fix" style={{ color: 'var(--primary-bright)', textDecoration: 'underline' }}>Read the case study &rarr;</Link></li>
        <li><strong>V Vasquez Handyman LLC (Merced, CA):</strong> Lawn care, concrete, and irrigation services. We structured each service into its own clear section with quote request CTAs and optimized for mobile-first local search. <Link href="/portfolio/vvasquez-handyman" style={{ color: 'var(--primary-bright)', textDecoration: 'underline' }}>Read the case study &rarr;</Link></li>
      </ul>

      <h2 style={{ color: '#fff', fontSize: '2rem', marginBottom: '24px' }}>Why Brooklyn Home Service Businesses Work With Us</h2>
      <p style={{ marginBottom: '24px' }}>
        You get custom design and engineering without the overhead of a big agency. We are a focused team with a narrow specialization: home service businesses. We are not trying to serve everyone. We build websites for contractors, tradespeople, and service businesses, and we are very good at it.
      </p>
      <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px' }}>
        <li><strong>Fast on Phones:</strong> Speed matters to visitors and is one of the signals Google uses. Each case study links to the client site's live PageSpeed report, so you can check it yourself.</li>
        <li><strong>Honest, Flat-Rate Pricing:</strong> Our <Link href="/pricing" style={{ color: 'var(--primary-bright)', textDecoration: 'underline' }}>pricing</Link> starts at $700 for a complete starter site. No retainers, no hidden fees.</li>
        <li><strong>24-Hour Free Sample:</strong> We build a fully custom homepage mockup for your business within 24 hours, at no cost. You review it before you sign anything.</li>
        <li><strong>National Reach, Local Focus:</strong> We serve businesses coast to coast. Every site we build is optimized for the local search intent of the specific cities and neighborhoods your customers live in.</li>
      </ul>

      <h2 style={{ color: '#fff', fontSize: '2rem', marginBottom: '24px' }}>Brooklyn Web Design FAQs</h2>
      <div style={{ marginBottom: '24px' }}>
        <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '12px' }}>Do you meet clients in person in Brooklyn?</h3>
        <p>We work fully remotely with clients across the United States. Discovery calls, design reviews, and project updates happen over video, email, and shared documents during US business hours. We have delivered projects in California, Illinois, Alaska, and beyond.</p>
      </div>
      <div style={{ marginBottom: '40px' }}>
        <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '12px' }}>How long does a project take?</h3>
        <p>Most projects take between 2 to 4 weeks from our initial discovery call to final launch, depending on scope. We share a clear timeline before any work begins, and nothing is billed without your approval. We also offer a 24-hour free homepage sample so you can see the quality of our work before committing.</p>
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
            pill={`Web Design & SEO in ${loc.name}`}
            title={<>Websites &amp; SEO for Service Businesses in <span className="highlight-text">{loc.name}</span></>}
            sub={`Custom websites and local SEO for plumbers, HVAC companies, roofers, tree services, handymen and auto body shops in ${loc.name}, built by a remote team with US business-hours support.`}
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
          ) : loc.slug === 'brooklyn' ? (
            <BrooklynContent />
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
                <li><strong>Fast on Phones:</strong> Speed matters to visitors and is one of the signals Google uses. Each case study links to the client site&apos;s live PageSpeed report, so you can check it yourself.</li>
                <li><strong>Local Search Basics:</strong> LocalBusiness structured data, clear service pages and accurate business details for {loc.name}, with area pages only where there is real local work to show.</li>
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
