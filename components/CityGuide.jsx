import Link from 'next/link';
import StockPhoto from './StockPhoto';
import ProjectShot from './ProjectShot';
import FaqAccordion from './FaqAccordion';

// 2026-10-27: renders a city guide from lib/cityGuides.js inside /locations/[city].
// Trade cards target the city + trade searches seen in Search Console; every guide has its own
// local context, areas and FAQs, so the pages are genuinely different (not city-name swaps).
const h2 = { color: '#fff', fontSize: '2rem', marginBottom: '24px', marginTop: '48px' };

export default function CityGuide({ guide }) {
  return (
    <>
      <h2 style={{ ...h2, marginTop: 0 }}>Websites and Local Search for {guide.name} Service Businesses</h2>
      {guide.intro.map((p) => <p key={p.slice(0, 24)} style={{ marginBottom: '20px' }}>{p}</p>)}

      <h2 style={h2}>What {guide.name} Customers Search For</h2>
      <div className="feature-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
        {guide.trades.map((t) => (
          <article key={t.title} className="feature-card">
            <h3>{t.title}</h3>
            <p>{t.text}</p>
            <Link href={t.href} className="card-cta">{t.cta} &rarr;</Link>
          </article>
        ))}
      </div>

      <StockPhoto name={guide.photo} />

      <h2 style={h2}>{guide.seoTitle}</h2>
      {guide.seo.map((p) => <p key={p.slice(0, 24)} style={{ marginBottom: '20px' }}>{p}</p>)}
      <div className="link-chips" style={{ justifyContent: 'flex-start' }}>
        <Link href="/services/local-seo" className="link-chip">Local SEO service &rarr;</Link>
        <Link href="/services/web-design" className="link-chip">Website design &rarr;</Link>
        <Link href="/pricing" className="link-chip">Pricing &rarr;</Link>
      </div>

      <h2 style={h2}>Areas We Work With Around {guide.name}</h2>
      <p style={{ marginBottom: '16px' }}>We work remotely, on US business hours, with businesses serving:</p>
      <div className="link-chips" style={{ justifyContent: 'flex-start', marginTop: 0 }}>
        {guide.areas.map((a) => <span key={a} className="link-chip" style={{ cursor: 'default' }}>{a}</span>)}
      </div>

      {guide.shot && (
        <ProjectShot
          name="alaskahandyman"
          url="alaskafastfixhandyman.com"
          alt="Alaska Fast Fix Handyman website by Embra Technologies"
          caption="Our Alaska project: Alaska Fast Fix Handyman, with tap-to-call on every page and a clear service area."
          href="/portfolio/alaska-fast-fix"
          linkText="Case study"
        />
      )}

      <h2 style={h2}>{guide.name} Questions</h2>
      <FaqAccordion items={guide.faqs} />
    </>
  );
}
