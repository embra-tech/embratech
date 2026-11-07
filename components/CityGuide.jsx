import Link from 'next/link';
import StockPhoto from './StockPhoto';
import ProjectShot from './ProjectShot';
import FaqAccordion from './FaqAccordion';
import ClientQuotes from './ClientQuotes';
import { SeoResultCard } from './TrustBlocks';

// Renders a city guide from lib/cityGuides.js inside /locations/[city] (2026-11-02).
// Each guide has its own local context, trade cards, seasonal calendar, search examples, local tip, areas and
// FAQs, so the pages are genuinely different (not city-name swaps).
const h2 = { color: '#fff', fontSize: '2rem', marginBottom: '24px', marginTop: '48px' };

export default function CityGuide({ guide }) {
  return (
    <>
      <h2 style={{ ...h2, marginTop: 0 }}>Websites and Local Search for {guide.name} Service Businesses</h2>
      {guide.intro.map((p) => <p key={p.slice(0, 24)} style={{ marginBottom: '20px' }}>{p}</p>)}

      <h2 style={h2}>What {guide.name} Customers Search For</h2>
      <div className="feature-grid stack-cards" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
        {guide.trades.map((t) => (
          <article key={t.title} className="feature-card">
            <h3>{t.title}</h3>
            <p>{t.text}</p>
            <Link href={t.href} className="card-cta">{t.cta} &rarr;</Link>
          </article>
        ))}
      </div>

      {/* 2026-11-08: real client quotes for this city (renders nothing until lib/testimonials.js has quotes). */}
      <ClientQuotes place={guide.slug} />

      {guide.season && (
        <>
          <h2 style={h2}>{guide.name} Service Calendar</h2>
          <p style={{ marginBottom: '16px' }}>When homeowners in {guide.name} call, and what your website and Google profile should have ready:</p>
          <div className="season-table-wrap">
            <table className="season-table">
              <thead><tr><th>Season</th><th>What homeowners call about</th><th>What to have ready</th></tr></thead>
              <tbody>
                {guide.season.map(([when, calls, ready]) => (
                  <tr key={when}><td>{when}</td><td>{calls}</td><td>{ready}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}

      <StockPhoto name={guide.photo} />

      <h2 style={h2}>{guide.seoTitle}</h2>
      {guide.seo.map((p) => <p key={p.slice(0, 24)} style={{ marginBottom: '20px' }}>{p}</p>)}
      {/* 2026-11-08: proven local SEO result (client city, dates and source shown). */}
      <SeoResultCard place={guide.name} />

      {guide.searches && (
        <>
          <p style={{ marginBottom: '12px' }}>Searches your pages and profile should answer in {guide.name}, for example:</p>
          <div className="link-chips" style={{ justifyContent: 'flex-start', marginTop: 0, marginBottom: '20px' }}>
            {guide.searches.map((q) => <span key={q} className="search-chip">&ldquo;{q}&rdquo;</span>)}
          </div>
        </>
      )}

      {guide.tip && (
        <div className="local-tip">
          <strong>{guide.name} tip:</strong> {guide.tip}
        </div>
      )}

      <div className="link-chips" style={{ justifyContent: 'flex-start' }}>
        <Link href="/services/local-seo" className="link-chip">Local SEO service &rarr;</Link>
        <Link href="/services/web-design" className="link-chip">Website design &rarr;</Link>
        <Link href="/pricing" className="link-chip">Pricing &rarr;</Link>
      </div>

      <h2 style={h2}>Areas We Work With Around {guide.name}</h2>
      {/* 2026-11-08: decorative orbit of nearby areas around the city (the real list follows as text). */}
      <div className="orbit" aria-hidden="true">
        <div className="orbit-center"><span>{guide.name}</span></div>
        <div className="orbit-ring">
          {guide.areas.slice(0, 8).map((a, i) => (
            <span key={a} className="orbit-item" style={{ '--i': i, '--n': Math.min(guide.areas.length, 8) }}>
              <span className="orbit-label">{a}</span>
            </span>
          ))}
        </div>
      </div>
      <p style={{ marginBottom: '16px' }}>{guide.areasNote}</p>
      <div className="link-chips" style={{ justifyContent: 'flex-start', marginTop: 0 }}>
        {guide.areas.map((a) => <span key={a} className="link-chip" style={{ cursor: 'default' }}>{a}</span>)}
      </div>

      {guide.shot && (
        <ProjectShot
          name="alaskahandyman"
          url="alaskafastfixhandyman.com"
          alt={`Alaska Fast Fix Handyman website by Embra Technologies, shown on the ${guide.name} page`}
          caption={guide.shotCaption}
          href="/portfolio/alaska-fast-fix"
          linkText="Case study"
        />
      )}

      <h2 style={h2}>{guide.name} Questions</h2>
      <FaqAccordion items={guide.faqs} />
    </>
  );
}
