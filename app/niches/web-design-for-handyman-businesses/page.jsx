import Link from 'next/link';
import PageHeader from '../../../components/PageHeader';
import Breadcrumb from '../../../components/Breadcrumb';
import Cta from '../../../components/Cta';
import JsonLd from '../../../components/JsonLd';
import siteConfig from '../../../lib/site-config';

export const metadata = {
  title: 'Handyman Website Design That Wins More Jobs | Embra',
  alternates: { canonical: `/niches/web-design-for-handyman-businesses` },
  description: 'Professional digital presence that builds trust and drives local service calls.',
  openGraph: {
    title: 'Handyman Website Design That Wins More Jobs | Embra',
    description: 'Professional digital presence that builds trust and drives local service calls.',
    url: `${siteConfig.siteUrl}/niches/web-design-for-handyman-businesses`,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'Handyman Website Design That Wins More Jobs | Embra',
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
        { "@type": "ListItem", "position": 3, "name": "Web Design for Handyman Businesses", "item": `${siteConfig.siteUrl}/niches/web-design-for-handyman-businesses` }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Web Design for Handyman Businesses",
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
          <Breadcrumb label="Web Design for Handyman Businesses" href={`/niches/web-design-for-handyman-businesses`} />
          <PageHeader
            pill="Niche Web Design"
            title={<>Web Design for Handyman Businesses</>}
            sub="Professional digital presence that builds trust and drives local service calls."
          />
        </div>
      </section>

      <section className="location-content" style={{ padding: '80px 0' }}>
        <div className="wrap text-content reveal-up" style={{ maxWidth: 800, margin: '0 auto', fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text-muted)' }}>
          
      <p style={{ marginBottom: '24px' }}>
        The primary challenge in handyman website design is trust. Low-budget clients often expect highly professional, corporate-level websites. A handyman needs a website that not only looks incredibly polished but also clearly communicates their breadth of skills and reliability. When a homeowner is looking for someone to trust inside their house to fix a drywall hole or repair a leaky fixture, the website is the very first trust signal they evaluate.
      </p>
      <p style={{ marginBottom: '24px' }}>
        We build websites that convert traffic into leads through structured service catalogs, prominent tap-to-call buttons, and frictionless quote request forms. Local SEO for handymen requires organizing a wide variety of services—from minor plumbing to carpentry—into distinct, optimized pages so you rank when someone searches for that specific need.
      </p>
      <p style={{ marginBottom: '40px' }}>
        We've successfully partnered with businesses like <Link href="/portfolio/alaska-fast-fix" style={{ color: 'var(--primary-bright)', textDecoration: 'underline' }}>Alaska Fast Fix</Link> and <Link href="/portfolio/vvasquez-handyman" style={{ color: 'var(--primary-bright)', textDecoration: 'underline' }}>V Vasquez Handyman</Link> (lawn care, concrete, and irrigation in Merced, CA). Our pricing is transparent and accessible, with a complete starter build at just $700.
      </p>

      <h2 style={{ color: '#fff', fontSize: '2rem', marginBottom: '24px' }}>Handyman Web Design FAQs</h2>
      <div style={{ marginBottom: '24px' }}>
        <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '12px' }}>I do dozens of services — how do I show them all?</h3>
        <p>We organize your primary revenue-driving services into dedicated sections and pages, while grouping smaller tasks under a general "Odd Jobs" or "Maintenance" umbrella. This prevents the site from feeling cluttered while still capturing SEO traffic for specific trades.</p>
      </div>
      <div style={{ marginBottom: '40px' }}>
        <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '12px' }}>Can I get leads before I have Google reviews?</h3>
        <p>Yes. While reviews help, a professional website with clear pricing structures, licensing information, before-and-after photos, and an easy contact form will convert visitors who are looking for immediate availability over someone with 500 reviews who isn't answering their phone.</p>
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
