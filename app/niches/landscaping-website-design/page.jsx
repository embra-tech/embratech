import Link from 'next/link';
import PageHeader from '../../../components/PageHeader';
import Breadcrumb from '../../../components/Breadcrumb';
import Cta from '../../../components/Cta';
import JsonLd from '../../../components/JsonLd';
import siteConfig from '../../../lib/site-config';

export const metadata = {
  title: 'Landscaping Website Design for More Local Jobs | Embra',
  alternates: { canonical: `/niches/landscaping-website-design` },
  description: 'Showcase your work and dominate local search in your service areas.',
  openGraph: {
    title: 'Landscaping Website Design for More Local Jobs | Embra',
    description: 'Showcase your work and dominate local search in your service areas.',
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
          <Breadcrumb label="Landscaping Website Design Built to Rank Locally" href={`/niches/landscaping-website-design`} />
          <PageHeader
            pill="Niche Web Design"
            title={<>Landscaping Website Design Built to Rank Locally</>}
            sub="Showcase your work and dominate local search in your service areas."
          />
        </div>
      </section>

      <section className="location-content" style={{ padding: '80px 0' }}>
        <div className="wrap text-content reveal-up" style={{ maxWidth: 800, margin: '0 auto', fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text-muted)' }}>
          
      <p style={{ marginBottom: '24px' }}>
        Landscaping is a highly visual and seasonal industry. A successful landscaping website must do two things exceptionally well: showcase the quality of your work through high-resolution imagery, and capture local search traffic for seasonal services before your competitors do.
      </p>
      <p style={{ marginBottom: '24px' }}>
        We structure landscaping websites with dedicated service catalogs separating routine lawn care from high-ticket hardscaping, irrigation, and landscape design. We integrate optimized before-and-after galleries that load instantly without slowing down the site. Our local SEO strategy ensures you rank for the specific neighborhoods and subdivisions you want to target.
      </p>
      <p style={{ marginBottom: '40px' }}>
        We delivered these results for <Link href="/portfolio/vvasquez-handyman" style={{ color: 'var(--primary-bright)', textDecoration: 'underline' }}>V Vasquez Handyman</Link> (specializing in lawn care, concrete, and irrigation). Our custom-built, blazing-fast sites start at $700, providing an incredible ROI compared to generic, slow-loading templates.
      </p>

      <h2 style={{ color: '#fff', fontSize: '2rem', marginBottom: '24px' }}>Landscaping Web Design FAQs</h2>
      <div style={{ marginBottom: '24px' }}>
        <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '12px' }}>Should I show pricing on my landscaping site?</h3>
        <p>For recurring services like lawn mowing or fertilization, displaying starting prices can filter out low-budget leads and save you time. For custom hardscaping or design, we recommend emphasizing "Free Custom Quotes" rather than listing fixed prices.</p>
      </div>
      <div style={{ marginBottom: '40px' }}>
        <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '12px' }}>How do I rank for seasonal services?</h3>
        <p>We build dedicated pages for seasonal services (e.g., "Fall Cleanup" or "Snow Removal") and leave them live year-round. This builds continuous SEO authority, so when the season hits, your page is already indexed and ranking at the top of Google.</p>
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
