import Link from 'next/link';
import PageHeader from '../../../components/PageHeader';
import Breadcrumb from '../../../components/Breadcrumb';
import Cta from '../../../components/Cta';
import JsonLd from '../../../components/JsonLd';
import siteConfig from '../../../lib/site-config';

export const metadata = {
  title: 'HVAC Website Design for Contractors | Embra',
  alternates: { canonical: `/niches/hvac-website-design` },
  description: 'Capture peak season traffic and generate leads year-round.',
  openGraph: {
    title: 'HVAC Website Design for Contractors | Embra',
    description: 'Capture peak season traffic and generate leads year-round.',
    url: `${siteConfig.siteUrl}/niches/hvac-website-design`,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'HVAC Website Design for Contractors | Embra',
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
        { "@type": "ListItem", "position": 3, "name": "HVAC Website Design Built for Seasonal Demand", "item": `${siteConfig.siteUrl}/niches/hvac-website-design` }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "HVAC Website Design Built for Seasonal Demand",
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
      }
    }
  ];

  return (
    <div className="page-shell">
      <JsonLd data={jsonLdData} />
      <section className="page-hero">
        <div className="wrap">
          <Breadcrumb label="HVAC Website Design Built for Seasonal Demand" href={`/niches/hvac-website-design`} />
          <PageHeader
            pill="Niche Web Design"
            title={<>HVAC Website Design Built for Seasonal Demand</>}
            sub="Capture peak season traffic and generate leads year-round."
          />
        </div>
      </section>

      <section className="location-content" style={{ padding: '80px 0' }}>
        <div className="wrap text-content reveal-up" style={{ maxWidth: 800, margin: '0 auto', fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text-muted)' }}>
          
      <p style={{ marginBottom: '24px' }}>
        HVAC is defined by extreme seasonal peaks—blistering summers driving AC repair searches, and freezing winters driving furnace replacements. An effective HVAC website must be agile enough to capture this seasonal demand while maintaining strong SEO authority during the shoulder seasons.
      </p>
      <p style={{ marginBottom: '24px' }}>
        We build HVAC websites with distinct, highly optimized silos for Heating, Cooling, and Indoor Air Quality. We emphasize trust signals such as NATE certifications, brand partnerships (Carrier, Trane, etc.), and integrate clear financing options, which are critical for high-ticket system replacements. Our local SEO strategies ensure you appear in the map pack right when temperatures spike or drop.
      </p>
      <p style={{ marginBottom: '40px' }}>
        Our custom Next.js architecture guarantees your site loads instantly, preventing frustrated homeowners from bouncing to a competitor. We offer full HVAC starter websites beginning at $700, a fraction of what large marketing agencies charge for slower, inferior products.
      </p>

      <h2 style={{ color: '#fff', fontSize: '2rem', marginBottom: '24px' }}>HVAC Web Design FAQs</h2>
      <div style={{ marginBottom: '24px' }}>
        <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '12px' }}>Should I have separate pages for AC and heating?</h3>
        <p>Yes. Someone searching for "AC repair near me" expects to land on a page about air conditioning, not a generic HVAC page. Dedicated pages for AC, Furnaces, Heat Pumps, and Maintenance allow for highly targeted SEO and better conversion rates.</p>
      </div>
      <div style={{ marginBottom: '40px' }}>
        <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '12px' }}>How do I rank during the off-season?</h3>
        <p>During the shoulder seasons, we focus SEO efforts on maintenance plans, indoor air quality (IAQ) services, and early-bird tune-up specials. A fast, well-structured site accumulates authority year-round, securing your rankings before the extreme weather hits.</p>
      </div>
    
          
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
