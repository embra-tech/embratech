import Link from 'next/link';
import PageHeader from '../../../components/PageHeader';
import Breadcrumb from '../../../components/Breadcrumb';
import Cta from '../../../components/Cta';
import JsonLd from '../../../components/JsonLd';
import siteConfig from '../../../lib/site-config';

export const metadata = {
  title: 'Tree Service Website Design for More Calls | Embra',
  alternates: { canonical: `/niches/tree-service-website-design` },
  description: 'High-converting websites optimized for storm damage and tree removal searches.',
  openGraph: {
    title: 'Tree Service Website Design for More Calls | Embra',
    description: 'High-converting websites optimized for storm damage and tree removal searches.',
    url: `${siteConfig.siteUrl}/niches/tree-service-website-design`,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'Tree Service Website Design for More Calls | Embra',
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
        { "@type": "ListItem", "position": 3, "name": "Tree Service Website Design Built for Emergency Calls", "item": `${siteConfig.siteUrl}/niches/tree-service-website-design` }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Tree Service Website Design Built for Emergency Calls",
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
          <Breadcrumb label="Tree Service Website Design Built for Emergency Calls" href={`/niches/tree-service-website-design`} />
          <PageHeader
            pill="Niche Web Design"
            title={<>Tree Service Website Design Built for Emergency Calls</>}
            sub="High-converting websites optimized for storm damage and tree removal searches."
          />
        </div>
      </section>

      <section className="location-content" style={{ padding: '80px 0' }}>
        <div className="wrap text-content reveal-up" style={{ maxWidth: 800, margin: '0 auto', fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text-muted)' }}>
          
      <p style={{ marginBottom: '24px' }}>
        Tree service is an inherently high-urgency business. When a homeowner searches for "emergency tree removal," they are likely staring at a tree leaning dangerously close to their roof. They don't have time to navigate a confusing, slow website. Tree service website design must prioritize immediate emergency contact options and instant trust signals.
      </p>
      <p style={{ marginBottom: '24px' }}>
        We engineer tree service websites with an emergency CTA (Call to Action) architecture. We place licensing and insurance verification immediately visible above the fold. During storm season surges, your website must load instantly on mobile networks and present a click-to-call button front and center. Local SEO ensures you rank exactly when and where these high-intent searches happen.
      </p>
      <p style={{ marginBottom: '40px' }}>
        For example, our work with <Link href="/portfolio/sky-high-tree" style={{ color: 'var(--primary-bright)', textDecoration: 'underline' }}>Sky High Tree Service</Link> resulted in a massive increase in emergency leads through targeted local visibility and speed optimization. We offer this level of performance starting at a $700 flat rate for a starter build.
      </p>

      <h2 style={{ color: '#fff', fontSize: '2rem', marginBottom: '24px' }}>Tree Service Web Design FAQs</h2>
      <div style={{ marginBottom: '24px' }}>
        <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '12px' }}>How do I rank for "emergency tree removal"?</h3>
        <p>Ranking for emergency services requires dedicated landing pages optimized for urgency keywords, structured schema markup that clearly defines your 24/7 availability, and sub-second mobile page speeds. Google prioritizes fast, reliable sites for mobile urgency searches.</p>
      </div>
      <div style={{ marginBottom: '40px' }}>
        <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '12px' }}>Should I have separate pages per service?</h3>
        <p>Absolutely. We build dedicated pages for Tree Removal, Stump Grinding, Tree Trimming, and Emergency Services. This allows us to target specific search intents and rank higher for those individual queries rather than clustering everything on one page.</p>
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
