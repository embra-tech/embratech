import Link from 'next/link';
import PageHeader from '../../../components/PageHeader';
import Breadcrumb from '../../../components/Breadcrumb';
import Cta from '../../../components/Cta';
import JsonLd from '../../../components/JsonLd';
import siteConfig from '../../../lib/site-config';

export const metadata = {
  title: 'Roofing Website Design for Contractors | Embra',
  alternates: { canonical: `/niches/roofing-website-design` },
  description: 'Professional digital presence for high-ticket roofing contractors.',
  openGraph: {
    title: 'Roofing Website Design for Contractors | Embra',
    description: 'Professional digital presence for high-ticket roofing contractors.',
    url: `${siteConfig.siteUrl}/niches/roofing-website-design`,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'Roofing Website Design for Contractors | Embra',
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
        { "@type": "ListItem", "position": 3, "name": "Roofing Website Design Built to Get Storm Damage Leads", "item": `${siteConfig.siteUrl}/niches/roofing-website-design` }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Roofing Website Design Built to Get Storm Damage Leads",
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
          <Breadcrumb label="Roofing Website Design Built to Get Storm Damage Leads" href={`/niches/roofing-website-design`} />
          <PageHeader
            pill="Niche Web Design"
            title={<>Roofing Website Design Built to Get Storm Damage Leads</>}
            sub="Professional digital presence for high-ticket roofing contractors."
          />
        </div>
      </section>

      <section className="location-content" style={{ padding: '80px 0' }}>
        <div className="wrap text-content reveal-up" style={{ maxWidth: 800, margin: '0 auto', fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text-muted)' }}>
          
      <p style={{ marginBottom: '24px' }}>
        Roofing is a high-ticket, high-trust industry. Homeowners are wary of storm chasers and fly-by-night contractors. A roofing website must project absolute permanence, professionalism, and reliability. When a severe storm rolls through, your website needs to be the most trustworthy option on Google.
      </p>
      <p style={{ marginBottom: '24px' }}>
        We engineer roofing websites to highlight trust signals aggressively: state licensing, full insurance coverage, manufacturer certifications (like GAF Master Elite), and extensive local reviews. We build dedicated sections explaining the insurance claim process to educate and reassure anxious homeowners. High-resolution photo galleries demonstrate your craftsmanship.
      </p>
      <p style={{ marginBottom: '40px' }}>
        Coupled with our hyper-local SEO strategies, we ensure you rank for lucrative searches like "roof replacement near me" and "hail damage repair." We build these high-performance, custom React websites starting at just $700.
      </p>

      <h2 style={{ color: '#fff', fontSize: '2rem', marginBottom: '24px' }}>Roofing Web Design FAQs</h2>
      <div style={{ marginBottom: '24px' }}>
        <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '12px' }}>Should my roofing site show financing options?</h3>
        <p>Yes. Because a new roof is a major capital expense, displaying financing options prominently on your site dramatically increases conversion rates. It turns a daunting expense into a manageable monthly payment in the customer's mind.</p>
      </div>
      <div style={{ marginBottom: '40px' }}>
        <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '12px' }}>How do I rank for storm damage roofing?</h3>
        <p>We create dedicated, hyper-optimized landing pages for storm, wind, and hail damage. By keeping these pages live and authoritative, your site is immediately ready to capture organic traffic the moment a severe weather event strikes your service area.</p>
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
