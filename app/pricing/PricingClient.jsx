'use client';

import { useState, useRef } from 'react';
import { useReveal } from '../../lib/useReveal';
import PageHeader from '../../components/PageHeader';
import Faq from '../../components/Faq';
import Cta from '../../components/Cta';
import Breadcrumb from '../../components/Breadcrumb';

/* ─── Pricing tiers ─────────────────────────────────────── */
const TIERS = [
  {
    name: 'Starter',
    scope: '3-page website',
    desc: 'Everything a local business needs to get found, build trust, and start receiving leads.',
    features: [
      'Custom homepage + 2 inner pages',
      '100% mobile responsive',
      'Contact & quote request forms',
      'On-page SEO foundation',
      'Google Analytics setup',
      'Full ownership — no lock-in',
    ],
    prices: { standard: 700, full: 600, fullSave: 100, monthly: 175 },
    featured: false,
  },
  {
    name: 'Growth',
    scope: '5–7 page website',
    desc: 'More pages, more proof, more ways for customers to find and trust you online.',
    features: [
      'Everything in Starter',
      'Up to 7 fully custom pages',
      'Blog or services directory',
      'JSON-LD schema markup',
      'Google Business Profile setup',
      'Priority support',
    ],
    prices: { standard: 1000, full: 900, fullSave: 100, monthly: 250 },
    featured: true,
  },
  {
    name: 'Pro',
    scope: 'Full-featured build',
    desc: 'A complete business platform. Manage leads, sign contracts, and run operations online.',
    features: [
      'Everything in Growth',
      'Admin dashboard',
      'Inquiry management system',
      'Contract signing with e-signature',
      '1 month of free fixes after launch',
      'Direct access to the senior builder doing your work',
    ],
    prices: { standard: 1500, full: 1350, fullSave: 150, monthly: 375 },
    featured: false,
  },
];

/* ─── Payment mode config ────────────────────────────────── */
const PAY_MODES = [
  {
    key: 'half',
    label: 'Half Now, Half at Launch',
    sub: 'Pay half to start. The rest when your site goes live. Site launches on schedule either way.',
  },
  {
    key: 'full',
    label: 'All at Once',
    badge: 'Best Value',
    sub: 'One payment, done. Save up to $150 compared to splitting it.',
  },
  {
    key: 'installment',
    label: 'Over 4 Months',
    sub: 'Spread the cost across 4 months at no extra charge. No interest, no credit check, no third-party lender.',
  },
];

function getDisplayPrice(tier, mode) {
  const p = tier.prices;
  if (mode === 'half') {
    const h = p.standard / 2;
    return { big: `$${h}`, label: `now + $${h} at launch`, note: null };
  }
  if (mode === 'full') {
    return { big: `$${p.full}`, label: 'paid in full', note: `Save $${p.fullSave}`, noteGreen: true };
  }
  return { big: `$${p.monthly}`, label: '/mo × 4 months', note: `Total $${p.monthly * 4}`, noteGreen: false };
}

const CheckSVG = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const ArrowSVG = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

const ArrowRightSVG = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

export default function PricingClient() {
  const ref = useRef(null);
  useReveal(ref);
  const [payMode, setPayMode] = useState('half');

  return (
    <div ref={ref} className="page-shell">

      {/* ── Page hero ───────────────────────────────────────── */}
      <section className="page-hero">
        <div className="wrap">
          <Breadcrumb label="Pricing" href="/pricing" />
          <PageHeader
            pill="Pricing"
            badge="Simple & Transparent"
            title={<>Honest pricing. <span className="highlight-text">No surprises.</span></>}
            sub="Pick your build size. Pick how you want to pay. Or see your homepage for free first — no deposit, no contract, no obligation."
          />
        </div>
      </section>

      {/* ── Free sample strip — first thing after hero ───────── */}
      <section className="pricing-sample-strip-section">
        <div className="wrap">
          <div className="pricing-sample-strip reveal-up">
            <div className="pricing-sample-strip-left">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
              <div>
                <strong>Not ready to commit?</strong>
                <span> We design a real, custom homepage for your business in 24&nbsp;hours — completely free. See it. Love it. Then decide.</span>
              </div>
            </div>
            <a href="/contact" className="btn-flip btn-primary btn-small pricing-strip-cta">
              <span className="btn-flip-inner">
                <span className="btn-flip-state">Get My Free Sample <ArrowSVG /></span>
                <span className="btn-flip-state" aria-hidden="true">Get My Free Sample <ArrowRightSVG /></span>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* ── Payment toggle + Pricing cards ───────────────────── */}
      <section className="pricing-section">
        <div className="wrap">

          {/* Toggle selector */}
          <div className="pricing-toggle-wrap reveal-up">
            <p className="pricing-toggle-label">How would you like to pay?</p>
            <div className="pricing-toggle" role="group" aria-label="Select payment option">
              {PAY_MODES.map((m) => (
                <button
                  key={m.key}
                  type="button"
                  className={'pricing-toggle-btn' + (payMode === m.key ? ' active' : '')}
                  onClick={() => setPayMode(m.key)}
                  aria-pressed={payMode === m.key}
                >
                  {m.label}
                  {m.badge && <span className="toggle-badge">{m.badge}</span>}
                </button>
              ))}
            </div>
            <p className="pricing-toggle-sub">
              {PAY_MODES.find((m) => m.key === payMode)?.sub}
            </p>
          </div>

          {/* Cards */}
          <div className="pricing-grid">
            {TIERS.map((tier) => {
              const dp = getDisplayPrice(tier, payMode);
              return (
                <div
                  key={tier.name}
                  className={'pricing-card reveal-up' + (tier.featured ? ' pricing-featured' : '')}
                >
                  {tier.featured && <span className="pricing-flag">Most Popular</span>}
                  <div className="pricing-card-head">
                    <span className="pricing-label">{tier.name}</span>
                    <span className="pricing-scope-tag">{tier.scope}</span>
                    <div className="pricing-amount">
                      {dp.big}
                      <span className="pricing-per"> {dp.label}</span>
                    </div>
                    {dp.note && (
                      <div className={'pricing-card-note' + (dp.noteGreen ? ' pricing-card-note--green' : '')}>
                        {dp.note}
                      </div>
                    )}
                    <p>{tier.desc}</p>
                  </div>
                  <ul className="pricing-list">
                    {tier.features.map((f) => (
                      <li key={f}><CheckSVG />{f}</li>
                    ))}
                  </ul>
                  <a
                    href="/contact"
                    className={'btn-flip btn-large pricing-btn ' + (tier.featured ? 'btn-primary' : 'btn-ghost')}
                  >
                    <span className="btn-flip-inner">
                      <span className="btn-flip-state">Get Started <ArrowSVG /></span>
                      <span className="btn-flip-state" aria-hidden="true">Get Started <ArrowRightSVG /></span>
                    </span>
                  </a>
                </div>
              );
            })}
          </div>

          {/* Reassurance micro-copy */}
          <div className="pricing-reassurance-row reveal-up">
            <span>✓ No interest, no credit check</span>
            <span>✓ Full ownership — no lock-in</span>
            <span>✓ Add the $150/mo Care Plan anytime</span>
            <span>✓ 7-day satisfaction guarantee</span>
          </div>

          {/* Decision paralysis reducer */}
          <div className="payment-help reveal-up">
            <p>
              <strong>Not sure which build fits?</strong> Tell us what your business does and how customers find you today.
              We&apos;ll say which tier fits — even when it&apos;s the cheaper one.
            </p>
            <a href="/contact" className="btn-flip btn-ghost btn-small">
              <span className="btn-flip-inner">
                <span className="btn-flip-state">Ask Us <ArrowSVG /></span>
                <span className="btn-flip-state" aria-hidden="true">Ask Us <ArrowRightSVG /></span>
              </span>
            </a>
          </div>

          {/* Ongoing care plan note */}
          <div className="pricing-care-note reveal-up">
            <strong>Already have a website?</strong> Add our <strong>$150/mo Care Plan</strong> to any existing site — hosting, security, SEO monitoring, content updates, and priority support. Cancel anytime.
            <a href="/contact" className="pricing-care-link">Learn more →</a>
          </div>

        </div>
      </section>

      {/* ── Why section ─────────────────────────────────────── */}
      <section className="pricing-how-section">
        <div className="wrap">
          <div className="section-head reveal-up">
            <div className="section-badge">
              <span className="badge-pill">Transparency</span>
              <span className="badge-text">How We Keep Prices Low</span>
            </div>
            <h2>Why a hand-crafted site from us costs less than you&apos;d expect.</h2>
            <p>We hear the question every time. Here&apos;s the honest answer.</p>
          </div>
          <div className="pricing-how-grid">
            {[
              {
                n: '01',
                title: 'Discovery before pixels',
                body: 'Every project starts with a deep intake: your industry, your competitors, your target customer, and your #1 conversion goal. That research drives every design decision — so we never guess.',
              },
              {
                n: '02',
                title: 'Purpose-built component system',
                body: 'We use a proprietary design system we built and maintain ourselves — not Squarespace, not WordPress, not Wix, not Webflow. Zero platform fees, zero template lock-in. The savings go directly to you.',
              },
              {
                n: '03',
                title: 'Focused, high-impact scope',
                body: 'A well-crafted 3-page site converts better than a bloated 20-page site. We keep scope focused on what actually wins leads, then expand only when your data says it will pay off.',
              },
              {
                n: '04',
                title: 'Lean, async team',
                body: 'No downtown office. No account managers. No bloated retainers passed to you. You talk directly to the people doing the work — faster decisions, tighter results. Your files, domain, and hosting are always yours with or without a Care Plan.',
              },
            ].map((item) => (
              <div className="pricing-how-card reveal-up" key={item.n}>
                <span className="pricing-how-num">{item.n}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Faq variant="pricing" />
      <Cta variant="pricing" />
    </div>
  );
}
