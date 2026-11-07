import Link from 'next/link';

// 2026-11-08: proven local SEO result for pages that sell SEO (city guides, Chicago).
// Real numbers from the client's own Google Search Console; the client's city, dates and source are always shown.
export function SeoResultCard({ place }) {
  return (
    <div className="seo-result">
      <div className="seo-result-head">
        <span className="seo-result-tag">Real local SEO result</span>
        <h3>Pick N Drop Laundry, a Los Angeles service business</h3>
      </div>
      <div className="seo-result-stats">
        <div className="seo-stat"><span className="seo-stat-from">9</span><span className="seo-stat-arrow" aria-hidden="true">&rarr;</span><span className="seo-stat-to">21</span><span className="seo-stat-label">clicks from Google</span></div>
        <div className="seo-stat"><span className="seo-stat-from">471</span><span className="seo-stat-arrow" aria-hidden="true">&rarr;</span><span className="seo-stat-to">1,399</span><span className="seo-stat-label">times shown in Google</span></div>
      </div>
      <p className="seo-result-note">
        Google Search Console, March 15&ndash;April 13 vs September 11&ndash;October 10, 2026. Results depend on the market{place ? `, and ${place} has its own competition` : ''}; we explain what we see in your free review.
        {' '}<Link href="/portfolio/pnd-laundry">Read the case study &rarr;</Link>
      </p>
    </div>
  );
}

// 2026-11-08: the remote process, explained as clear steps rather than a phrase in the subtitle.
export function HowWeWork({ place }) {
  const steps = [
    ['Tell us about your business', 'Send the short form or call during US business hours. No sales pitch, just questions about your services and area.'],
    ['Free homepage sample in 24 hours', 'You see a custom design for your business before paying anything.'],
    ['Built in 2\u20134 weeks', 'We build your pages, set up tap-to-call and quote forms, and keep you updated by email or video call.'],
    ['Launch, and you own it', 'Your site goes live, you own it outright, and the $150/month Care Plan is optional.'],
  ];
  return (
    <section className="how-work" aria-labelledby="how-work-title">
      <h2 id="how-work-title" style={{ color: '#fff', fontSize: '2rem', marginBottom: '12px' }}>How We Work With {place} Businesses</h2>
      <p style={{ marginBottom: '24px' }}>We are a remote team, so the process is simple and visible from the first day:</p>
      <ol className="how-steps">
        {steps.map(([title, text], i) => (
          <li key={title} className="how-step">
            <span className="step-num" aria-hidden="true">{i + 1}</span>
            <div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
