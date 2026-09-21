'use client';

import Link from 'next/link';

/**
 * Portfolio screenshot sizes:
 *   480px  — mobile / single-column card
 *   720px  — tablet / 2-col grid
 *   960px  — desktop large
 *
 * The container maxes at ~480px in CSS; sizes attr tells browser which to fetch.
 * Static files at public/images/optimized/ — no /_next/image round-trip.
 */
function SitePreview({ site }) {
  const name = site.image.replace('/images/', '').replace('.webp', '').replace('.png', '');
  const base = `/images/optimized/${name}`;
  const sizes = '(max-width: 720px) 100vw, 480px';

  return (
    <div className="site-preview" style={{ '--sc1': site.c1, '--sc2': site.c2 }}>
      <div className="sp-browserbar">
        <div className="sp-dots"><span></span><span></span><span></span></div>
        <div className="sp-url">{site.domain}</div>
      </div>
      <div className="sp-screenshot">
        <picture>
          {/* AVIF — best compression, Chrome 85+, Firefox 93+, Safari 16+ */}
          <source
            type="image/avif"
            srcSet={`${base}-480.avif 480w, ${base}-720.avif 720w, ${base}-960.avif 960w`}
            sizes={sizes}
          />
          {/* WebP — broad support fallback */}
          <source
            type="image/webp"
            srcSet={`${base}-480.webp 480w, ${base}-720.webp 720w, ${base}-960.webp 960w`}
            sizes={sizes}
          />
          {/* JPEG — universal baseline */}
          <img
            src={`${base}-480.jpg`}
            srcSet={`${base}-480.jpg 480w, ${base}-720.jpg 720w, ${base}-960.jpg 960w`}
            sizes={sizes}
            alt={`${site.name} website screenshot`}
            loading="lazy"
            decoding="async"
            width={480}
            height={320}
            style={{ objectFit: 'cover', objectPosition: 'top', width: '100%', height: '100%', display: 'block' }}
          />
        </picture>
      </div>
    </div>
  );
}

export default function SiteCard({ site, index }) {
  return (
    <article className="work-card reveal-up">
      <div className="work-card-index">
        <span>{String(index + 1).padStart(2, '0')}</span>
        <span className="work-card-live"><span className="status-dot"></span>Live</span>
      </div>

      <SitePreview site={site} />

      <div className="work-card-body">
        <div className="work-card-title-row">
          <h3>{site.name}</h3>
          <span className="work-industry">{site.industry}</span>
        </div>
        <p>{site.desc}</p>

        {/* Optional measurable-results badges — linked to live PageSpeed reports where available */}
        {site.results && site.results.length > 0 && (
          <div className="work-results" aria-label="Verified results">
            {site.results.map((r) =>
              r.href ? (
                <a
                  key={r.label}
                  href={r.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="work-result-badge work-result-badge--link"
                  title="View live report"
                >
                  {r.label}
                  <span className="cs-chip-verify">Verify ↗</span>
                </a>
              ) : (
                <span key={r.label} className="work-result-badge">
                  {r.label}
                </span>
              )
            )}
          </div>
        )}

        <div className="work-tags">
          {site.tags.map((t) => <span className="work-tag" key={t}>{t}</span>)}
        </div>
        <div className="work-card-footer">
          <span className="work-location">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {site.location}
          </span>
          <div style={{ display: 'flex', gap: '15px' }}>
            {site.slug && (
              <Link href={`/portfolio/${site.slug}`} className="work-visit" style={{ color: '#fff' }}>
                Read Case Study
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            )}
            <a href={site.url} target="_blank" rel="noopener noreferrer" className="work-visit">
              Visit Site
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
