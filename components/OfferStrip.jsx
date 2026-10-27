import Link from 'next/link';

// 2026-10-26: offer shown near the top of pages, matched to what the page sells.
//   variant="sample" (default): website pages, free 24-hour homepage sample.
//   variant="seo": local SEO and marketing pages, free local SEO review.
// Plain server-rendered HTML (no pop-up, no layout shift, no extra JavaScript).
const OFFERS = {
  sample: {
    lead: 'Free custom homepage sample in 24 hours.',
    text: 'No payment and no obligation: see your new website before you decide.',
    cta: 'Get My Free Sample',
  },
  seo: {
    lead: 'Free local SEO review.',
    text: 'We check your Google Business Profile, website and service area, then send practical next steps. No obligation.',
    cta: 'Request My Free Review',
  },
};

export default function OfferStrip({ variant = 'sample' }) {
  const o = OFFERS[variant] || OFFERS.sample;
  return (
    <div className="page-head-offer">
      <span className="offer-dot" aria-hidden="true" />
      <p>
        <strong>{o.lead}</strong> {o.text}
      </p>
      <Link href="/contact" className="btn-flip btn-primary btn-small">
        <span className="btn-flip-inner">
          <span className="btn-flip-state">{o.cta} &rarr;</span>
          <span className="btn-flip-state" aria-hidden="true">{o.cta} &rarr;</span>
        </span>
      </Link>
    </div>
  );
}
