const fs = require('fs');
const path = require('path');

const niches = [
  {
    slug: 'web-design-for-handyman-businesses',
    title: 'Handyman Website Design That Wins More Jobs | Embra',
    h1: 'Web Design for Handyman Businesses',
    sub: 'Professional digital presence that builds trust and drives local service calls.',
    content: `
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
    `
  },
  {
    slug: 'tree-service-website-design',
    title: 'Tree Service Website Design for More Calls | Embra',
    h1: 'Tree Service Website Design Built for Emergency Calls',
    sub: 'High-converting websites optimized for storm damage and tree removal searches.',
    content: `
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
    `
  },
  {
    slug: 'auto-body-shop-website-design',
    title: 'Auto Body Shop Website Design That Builds Trust | Embra',
    h1: 'Auto Body Shop Website Design That Converts at 11 PM',
    sub: 'Websites engineered to capture high-stress post-accident searches.',
    content: `
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
    `
  },
  {
    slug: 'landscaping-website-design',
    title: 'Landscaping Website Design for More Local Jobs | Embra',
    h1: 'Landscaping Website Design Built to Rank Locally',
    sub: 'Showcase your work and dominate local search in your service areas.',
    content: `
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
    `
  },
  {
    slug: 'plumber-website-design',
    title: 'Plumber Website Design That Gets Emergency Calls | Embra',
    h1: 'Plumber Website Design Built for Emergency Searches',
    sub: 'Mobile-first websites designed to capture urgent plumbing leads.',
    content: `
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
    `
  },
  {
    slug: 'hvac-website-design',
    title: 'HVAC Website Design for Contractors | Embra',
    h1: 'HVAC Website Design Built for Seasonal Demand',
    sub: 'Capture peak season traffic and generate leads year-round.',
    content: `
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
    `
  },
  {
    slug: 'roofing-website-design',
    title: 'Roofing Website Design for Contractors | Embra',
    h1: 'Roofing Website Design Built to Get Storm Damage Leads',
    sub: 'Professional digital presence for high-ticket roofing contractors.',
    content: `
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
    `
  }
];

const template = (niche) => `import Link from 'next/link';
import PageHeader from '../../../components/PageHeader';
import Breadcrumb from '../../../components/Breadcrumb';
import Cta from '../../../components/Cta';
import JsonLd from '../../../components/JsonLd';
import siteConfig from '../../../lib/site-config';

export const metadata = {
  title: '${niche.title}',
  alternates: { canonical: \`/niches/${niche.slug}\` },
  description: '${niche.sub}',
  openGraph: {
    title: '${niche.title}',
    description: '${niche.sub}',
    url: \`\${siteConfig.siteUrl}/niches/${niche.slug}\`,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: '${niche.title}',
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
        { "@type": "ListItem", "position": 2, "name": "Services", "item": \`\${siteConfig.siteUrl}/services\` },
        { "@type": "ListItem", "position": 3, "name": "${niche.h1}", "item": \`\${siteConfig.siteUrl}/niches/${niche.slug}\` }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "${niche.h1}",
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
          <Breadcrumb label="${niche.h1}" href={\`/niches/${niche.slug}\`} />
          <PageHeader
            pill="Niche Web Design"
            title={<>${niche.h1}</>}
            sub="${niche.sub}"
          />
        </div>
      </section>

      <section className="location-content" style={{ padding: '80px 0' }}>
        <div className="wrap text-content reveal-up" style={{ maxWidth: 800, margin: '0 auto', fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text-muted)' }}>
          ${niche.content}
          
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
`;

niches.forEach(niche => {
  const dir = path.join(__dirname, 'app', 'niches', niche.slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'page.jsx'), template(niche));
});
console.log('Done');
