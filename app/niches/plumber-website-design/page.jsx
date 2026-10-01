import Link from 'next/link';
import PageHeader from '../../../components/PageHeader';
import Breadcrumb from '../../../components/Breadcrumb';
import Cta from '../../../components/Cta';
import JsonLd from '../../../components/JsonLd';
import siteConfig from '../../../lib/site-config';

export const metadata = {
  title: 'Plumber Website Design That Gets Emergency Calls | Embra',
  alternates: { canonical: `/niches/plumber-website-design` },
  description: 'Mobile-first websites designed to capture urgent plumbing leads.',
  openGraph: {
    title: 'Plumber Website Design That Gets Emergency Calls | Embra',
    description: 'Mobile-first websites designed to capture urgent plumbing leads.',
    url: `${siteConfig.siteUrl}/niches/plumber-website-design`,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'Plumber Website Design That Gets Emergency Calls | Embra',
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
        { "@type": "ListItem", "position": 3, "name": "Plumber Website Design Built for Emergency Searches", "item": `${siteConfig.siteUrl}/niches/plumber-website-design` }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Plumber Website Design Built for Emergency Searches",
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
          <Breadcrumb label="Plumber Website Design Built for Emergency Searches" href={`/niches/plumber-website-design`} />
          <PageHeader
            pill="Niche Web Design"
            title={<>Plumber Website Design Built for Emergency Searches</>}
            sub="Mobile-first websites designed to capture urgent plumbing leads."
          />
        </div>
      </section>

      <section className="location-content" style={{ padding: '80px 0' }}>
        <div className="wrap text-content reveal-up" style={{ maxWidth: 800, margin: '0 auto', fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text-muted)' }}>
          
      <p style={{ marginBottom: '24px' }}>
        When a homeowner searches for a plumber, they usually have an active leak, a clogged drain, or no hot water. These are high-urgency, emergency searches. A plumbing website must be engineered for immediate contact. If your site takes longer than three seconds to load on a smartphone, the customer will hit the back button and call the next plumber on the list.
      </p>
      <p style={{ marginBottom: '24px' }}>
        Our plumber website design focuses entirely on mobile-first speed and click-to-call prominence. We place 24/7 availability messaging and tap-to-call buttons where thumbs naturally rest on mobile screens. We build deep local SEO foundations, creating dedicated pages for water heater repair, drain cleaning, and emergency services so you rank for the specific problems customers are facing.
      </p>
      <p style={{ marginBottom: '40px' }}>
        We integrate trust signals like licensing, insurance, and rapid-response guarantees directly into the header. Our starter builds for plumbing contractors begin at a flat $700, delivering custom Next.js performance that outranks bloated template sites.
      </p>

      <h2 style={{ color: '#fff', fontSize: '2rem', marginBottom: '24px' }}>Plumbing Web Design FAQs</h2>
      <div style={{ marginBottom: '24px' }}>
        <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '12px' }}>How do I compete with big plumbing franchises online?</h3>
        <p>You compete by dominating hyper-local search and out-performing them on speed. Franchises often have slow, corporate websites. We build lightning-fast local sites tailored to specific neighborhoods, emphasizing your local ownership and faster response times.</p>
      </div>
      <div style={{ marginBottom: '40px' }}>
        <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '12px' }}>What pages should a plumber's website have?</h3>
        <p>Beyond the Home, About, and Contact pages, you need dedicated service pages for Emergency Plumbing, Water Heaters, Drain Cleaning, Leak Detection, and Commercial Plumbing. Each page targets specific high-value search terms.</p>
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
