import Link from 'next/link';
import PageHeader from '../../../components/PageHeader';
import Breadcrumb from '../../../components/Breadcrumb';
import Cta from '../../../components/Cta';
import JsonLd from '../../../components/JsonLd';
import siteConfig from '../../../lib/site-config';

export const metadata = {
  title: 'Auto Body Shop Website Design That Builds Trust | Embra',
  alternates: { canonical: `/niches/auto-body-shop-website-design` },
  description: 'Websites engineered to capture high-stress post-accident searches.',
  openGraph: {
    title: 'Auto Body Shop Website Design That Builds Trust | Embra',
    description: 'Websites engineered to capture high-stress post-accident searches.',
    url: `${siteConfig.siteUrl}/niches/auto-body-shop-website-design`,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'Auto Body Shop Website Design That Builds Trust | Embra',
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
        { "@type": "ListItem", "position": 3, "name": "Auto Body Shop Website Design That Converts at 11 PM", "item": `${siteConfig.siteUrl}/niches/auto-body-shop-website-design` }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Auto Body Shop Website Design That Converts at 11 PM",
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
          <Breadcrumb label="Auto Body Shop Website Design That Converts at 11 PM" href={`/niches/auto-body-shop-website-design`} />
          <PageHeader
            pill="Niche Web Design"
            title={<>Auto Body Shop Website Design That Converts at 11 PM</>}
            sub="Websites engineered to capture high-stress post-accident searches."
          />
        </div>
      </section>

      <section className="location-content" style={{ padding: '80px 0' }}>
        <div className="wrap text-content reveal-up" style={{ maxWidth: 800, margin: '0 auto', fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text-muted)' }}>
          
      <p style={{ marginBottom: '24px' }}>
        Auto body repair is a high-stress purchase. When someone is searching for a collision center at 11 PM on the side of a highway, they aren't shopping around for a bargain; they are looking for a lifeline. Auto body shop website design must instantly communicate trust, competence, and immediate help.
      </p>
      <p style={{ marginBottom: '24px' }}>
        We build websites that highlight critical trust signals immediately: I-CAR certifications, insurance partnerships, free estimate guarantees, and towing assistance options. A streamlined quote request form allows customers to upload photos of damage directly from their phones. Robust local SEO ensures your shop appears in the local map pack when drivers search for "collision repair near me."
      </p>
      <p style={{ marginBottom: '40px' }}>
        Our strategy successfully transformed the digital presence of <Link href="/portfolio/tuxford-collision" style={{ color: 'var(--primary-bright)', textDecoration: 'underline' }}>Tuxford Collision Center</Link>. We bring this enterprise-level strategy to independent shops starting at just $700 for a comprehensive starter build.
      </p>

      <h2 style={{ color: '#fff', fontSize: '2rem', marginBottom: '24px' }}>Collision Repair Web Design FAQs</h2>
      <div style={{ marginBottom: '24px' }}>
        <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '12px' }}>What trust signals should I show above the fold?</h3>
        <p>The top fold of your website should display your primary phone number, your physical address, any major certifications (like I-CAR or OEM approvals), a badge indicating you work with all insurance companies, and a clear call-to-action for a free estimate or towing.</p>
      </div>
      <div style={{ marginBottom: '40px' }}>
        <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '12px' }}>Should I show my Google rating on the site?</h3>
        <p>Yes. We integrate verified review badges directly into the header. In a high-stress situation, a 4.8+ star rating acts as immediate social proof that helps a stressed driver make a quick, confident decision to choose your shop over the dealership.</p>
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
