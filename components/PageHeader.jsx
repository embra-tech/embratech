'use client';

import OfferStrip from './OfferStrip';

// 2026-10-26: shows an offer under every inner page heading, matched to the page:
//   offer="sample" (default) free homepage sample · offer="seo" free local SEO review · offer={false} none.
export default function PageHeader({ pill, badge, title, sub, offer = 'sample' }) {
  const variant = offer === true ? 'sample' : offer;
  return (
    <div className="page-head">
      <div className="section-badge">
        <span className="badge-pill">{pill}</span>
        <span className="badge-text">{badge}</span>
      </div>
      <h1>{title}</h1>
      {sub && <p className="page-head-sub">{sub}</p>}
      {variant && <OfferStrip variant={variant} />}
    </div>
  );
}
