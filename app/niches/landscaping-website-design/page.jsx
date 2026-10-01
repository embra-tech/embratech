import Link from 'next/link';
import PageHeader from '../../../components/PageHeader';
import Breadcrumb from '../../../components/Breadcrumb';
import Cta from '../../../components/Cta';
import JsonLd from '../../../components/JsonLd';
import siteConfig from '../../../lib/site-config';

export const metadata = {
  title: 'Landscaping Website Design for More Local Jobs | Embra',
  alternates: { canonical: '/niches/landscaping-website-design' },
  description: 'Visually compelling, high-converting websites designed to showcase hardscaping, lawn maintenance, and irrigation systems across all seasons.',
  openGraph: {
    title: 'Landscaping Website Design for More Local Jobs | Embra',
    description: 'Visually compelling, high-converting websites designed to showcase hardscaping, lawn maintenance, and irrigation systems across all seasons.',
    url: `${siteConfig.siteUrl}/niches/landscaping-website-design`,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'Landscaping Website Design for More Local Jobs | Embra',
      },
    ],
  },
};

export default function NichePage() {
  const jsonLdData = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": siteConfig.siteUrl },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": `${siteConfig.siteUrl}/services` },
        { "@type": "ListItem", "position": 3, "name": "Landscaping Website Design Built to Rank Locally", "item": `${siteConfig.siteUrl}/niches/landscaping-website-design` }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Landscaping Website Design Built to Rank Locally",
      "serviceType": "Landscaping Website Design Built to Rank Locally",
      "provider": {
        "@type": "LocalBusiness",
        "name": siteConfig.legalName,
        "url": siteConfig.siteUrl,
        "telephone": siteConfig.phone,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": siteConfig.address.street,
          "addressLocality": siteConfig.address.city,
          "addressRegion": siteConfig.address.state,
          "postalCode": siteConfig.address.zip,
          "addressCountry": siteConfig.address.country
        }
      },
      "description": "Visually compelling, high-converting websites designed to showcase hardscaping, lawn maintenance, and irrigation systems across all seasons."
    }
  ];

  return (
    <div className="page-shell">
      <JsonLd data={jsonLdData} />
      <section className="page-hero">
        <div className="wrap">
          <Breadcrumb label="Landscaping Website Design Built to Rank Locally" href="/niches/landscaping-website-design" />
          <PageHeader
            pill="Industry Web Design"
            title={<>Landscaping Website Design Built to Rank Locally</>}
            sub="Visually compelling, high-converting websites designed to showcase hardscaping, lawn maintenance, and irrigation systems across all seasons."
          />
        </div>
      </section>

      <section className="location-content" style={{ padding: '80px 0' }}>
        <div className="wrap text-content " style={{ maxWidth: 840, margin: '0 auto', fontSize: '1.1rem', lineHeight: 1.85, color: 'var(--text-muted)' }}>
          
          <h2 style={{ color: '#fff', fontSize: '2rem', marginBottom: '24px', marginTop: '48px' }}>The Visual Psychology of High-End Landscaping & Lawn Care</h2>
          <p style={{ marginBottom: '20px' }}>Landscaping, hardscaping, and lawn care are deeply visual, aspirational investments. Whether a residential homeowner is seeking routine weekly mowing, an elaborate backyard patio installation, a modern retaining wall, or a smart irrigation system, they make their purchasing decisions based on visible evidence of quality craftsmanship.</p>
          <p style={{ marginBottom: '20px' }}>When landscaping companies use blurry stock photography, cluttered templates, or slow image carousels that freeze mobile browsers, high-value prospects quickly navigate away. Affluent homeowners wanting $15,000 outdoor living spaces expect a contractor whose digital presence matches the elegance of their physical work.</p>
          <p style={{ marginBottom: '20px' }}>At Embra Technologies, we build custom Next.js websites for landscaping contractors, grounds maintenance specialists, and hardscape artisans. We engineer fast, responsive photo galleries, clear service tier breakdowns, and localized search frameworks that keep your crews booked through spring, summer, and fall.</p>
  

          
          {/* Visual Showcase Card */}
          <div data-preview-card="true" style={{ margin: '48px 0', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--line-dark)', background: 'rgba(255,255,255,0.02)' }}>
            <div style={{ background: 'rgba(0,0,0,0.5)', padding: '12px 18px', display: 'flex', alignItems: 'center', gap: '12px', borderBottom: '1px solid var(--line-dark)' }}>
              <div style={{ display: 'flex', gap: '6px' }}>
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f56', display: 'inline-block' }} />
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ffbd2e', display: 'inline-block' }} />
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#27c93f', display: 'inline-block' }} />
              </div>
              <div style={{ flex: 1, background: 'rgba(255,255,255,0.06)', borderRadius: '6px', padding: '4px 12px', fontSize: '0.82rem', color: 'var(--muted-inv)', fontFamily: 'monospace' }}>
                vvasquezhandymanllc.net
              </div>
            </div>
            <picture>
              <source type="image/avif" srcSet="/images/optimized/vvasquez-480.avif 480w, /images/optimized/vvasquez-720.avif 720w, /images/optimized/vvasquez-960.avif 960w" sizes="(max-width: 840px) 100vw, 840px" />
              <source type="image/webp" srcSet="/images/optimized/vvasquez-480.webp 480w, /images/optimized/vvasquez-720.webp 720w, /images/optimized/vvasquez-960.webp 960w" sizes="(max-width: 840px) 100vw, 840px" />
              <img
                src="/images/optimized/vvasquez-720.jpg"
                alt="V Vasquez LLC website preview designed by Embra Technologies"
                loading="lazy"
                decoding="async"
                width={840}
                height={480}
                style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
              />
            </picture>
            <div style={{ padding: '16px 20px', borderTop: '1px solid var(--line-dark)', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '10px', background: 'rgba(0,0,0,0.25)' }}>
              <span style={{ fontSize: '0.88rem', color: 'var(--muted-inv)' }}>Live Landscaping & Concrete Project: V Vasquez LLC Merced, CA, 99/100 PageSpeed & instant quote flow.</span>
              <Link href="/portfolio/vvasquez-handyman" style={{ color: 'var(--primary-bright)', fontSize: '0.88rem', textDecoration: 'underline' }}>Read V Vasquez Case Study &rarr;</Link>
            </div>
          </div>

<h2 style={{ color: '#fff', fontSize: '2rem', marginBottom: '24px', marginTop: '48px' }}>Overcoming Seasonality with Multi-Service Conversion Architecture</h2>
          <p style={{ marginBottom: '20px' }}>A major challenge facing landscaping businesses is revenue seasonality. A company that focuses heavily on spring cleanups and summer lawn maintenance often experiences revenue lulls in autumn and winter unless their website strategically pivots:</p>
          <p style={{ marginBottom: '20px' }}>1. **Year-Round Service Silos:** We build persistent, dedicated landing pages for both warm-weather services (Aeration, Mowing, Irrigation Installation, Patio Construction) and cold-weather services (Fall Leaf Removal, Mulching, Winterization, Snow & Ice Management). Because these pages remain live year-round, they accumulate continuous organic search equity.</p>
          <p style={{ marginBottom: '20px' }}>2. **Performance-Optimized Before-and-After Galleries:** We implement next-generation image optimization (WebP/AVIF formats with responsive srcset attributes), allowing visitors to inspect high-resolution before-and-after transformations instantly without penalizing Core Web Vitals.</p>
          <p style={{ marginBottom: '20px' }}>3. **Commercial vs. Residential Portals:** If your company services commercial HOA properties alongside residential homeowners, we build distinct user pathways that present tailored capabilities, insurance credentials, and quote workflows for property managers.</p>
  

          <h2 style={{ color: '#fff', fontSize: '2rem', marginBottom: '24px', marginTop: '48px' }}>Real-World Proof: The V Vasquez Handyman Case Study</h2>
          <p style={{ marginBottom: '20px' }}>We applied our localized service catalog methodology when developing the digital storefront for <Link href="/portfolio/vvasquez-handyman" style={{ color: "var(--primary-bright)", textDecoration: "underline" }}>V Vasquez Handyman LLC</Link>, serving Merced, CA. Specializing in lawn care, concrete work, and irrigation maintenance, Victor Vasquez needed an online platform that separated his distinct outdoor trades into clear, navigable offerings.</p>
          <p style={{ marginBottom: '20px' }}>We structured a mobile-first site featuring dedicated service sections and instant estimate request flows, achieving a verified 99/100 Google PageSpeed score. Read our full <Link href="/portfolio/vvasquez-handyman" style={{ color: "var(--primary-bright)", textDecoration: "underline" }}>V Vasquez Handyman Case Study</Link> to inspect our technical execution.</p>
  

          <h2 style={{ color: '#fff', fontSize: '2rem', marginBottom: '24px', marginTop: '48px' }}>Local SEO Strategy for Landscapers and Hardscaping Contractors</h2>
          <p style={{ marginBottom: '20px' }}>To generate consistent quote requests, your business needs to rank for terms like "landscaper near me," "hardscape contractor," "sprinkler repair," and "lawn mowing service" across every neighborhood in your service territory.</p>
          <p style={{ marginBottom: '20px' }}>We engineer custom websites with comprehensive LocalBusiness structured data, clean heading hierarchies, and geo-targeted service area landing pages that capture affluent suburban searches. Learn more about our technical methodology in our <Link href="/services/local-seo" style={{ color: "var(--primary-bright)", textDecoration: "underline" }}>Local SEO Services</Link> documentation.</p>
  

          <h2 style={{ color: '#fff', fontSize: '2rem', marginBottom: '24px', marginTop: '48px' }}>Transparent Pricing for Landscaping Professionals</h2>
          <p style={{ marginBottom: '20px' }}>Our transparent pricing model ensures your outdoor service business gets an enterprise-grade digital foundation at an accessible investment level:</p>
          <p style={{ marginBottom: '20px' }}>• **Starter Custom Build ($700 one-time):** A custom React/Next.js website with up to 5 core pages, responsive before-and-after photo galleries, seasonal service showcases, quote request forms, and full schema markup.</p>
          <p style={{ marginBottom: '20px' }}>• **Website Care Plan ($150/mo):** Global edge hosting on Vercel, automated SSL certificates, seasonal gallery and banner updates, and monthly local search ranking monitoring.</p>
          <p style={{ marginBottom: '20px' }}>Visit our comprehensive <Link href="/pricing" style={{ color: "var(--primary-bright)", textDecoration: "underline" }}>Pricing Page</Link> for complete details.</p>
  

          
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
            <h3 style={{ color: '#fff', fontSize: '1.6rem', marginBottom: '12px', fontWeight: 700 }}>Book High-Margin Landscaping, Irrigation & Hardscape Jobs</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: '620px', margin: '0 auto 24px', lineHeight: 1.6 }}>Showcase your seasonal services, before-and-after projects, and transparent estimates with a lightning-fast custom website.</p>
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
            
            <div style={{ marginBottom: '28px' }}>
              <h3 style={{ color: '#fff', fontSize: '1.25rem', marginBottom: '12px' }}>Should I display fixed pricing for lawn care and landscaping on my website?</h3>
              <p style={{ color: 'var(--text-muted)' }}>For standardized maintenance packages (such as weekly mowing or spring aeration), listing "starting from" price points is highly effective for pre-qualifying leads. For custom design-build hardscaping, we recommend emphasizing "Free On-Site Consultations" rather than rigid price tags.</p>
            </div>
  

            <div style={{ marginBottom: '28px' }}>
              <h3 style={{ color: '#fff', fontSize: '1.25rem', marginBottom: '12px' }}>How does our website stay relevant and rank during the off-season winter months?</h3>
              <p style={{ color: 'var(--text-muted)' }}>We keep your seasonal service pages live throughout the entire year. By maintaining pages for leaf cleanup, winter pruning, and commercial snow removal year-round, Google establishes long-term domain authority, ensuring you rank at the top the moment seasonal demand begins.</p>
            </div>
  

            <div style={{ marginBottom: '28px' }}>
              <h3 style={{ color: '#fff', fontSize: '1.25rem', marginBottom: '12px' }}>Can we easily update our project portfolio with new photos of completed jobs?</h3>
              <p style={{ color: 'var(--text-muted)' }}>Yes. Under our $150/mo Website Care Plan, you simply send us your latest project photos via email or WhatsApp, and our engineering team optimizes, tags, and publishes them to your live website within 24 hours.</p>
            </div>
  
          </div>

          <div style={{ marginTop: '48px', padding: '32px', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid var(--line-dark)' }}>
            <h3 style={{ color: '#fff', fontSize: '1.35rem', marginBottom: '12px' }}>Ready to Scale Your Contracting Business?</h3>
            <p style={{ fontSize: '1rem', marginBottom: '20px', lineHeight: 1.7 }}>
              Get a custom-engineered Next.js website starting at just $700 one-time, or request our free 24-hour custom homepage sample with zero upfront commitment.
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
