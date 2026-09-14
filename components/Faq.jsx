'use client';

import { useState } from 'react';

const FAQ_SETS = {
  home: [
    {
      q: 'How long does a custom website project take?',
      a: 'Most custom website projects take between 2 to 4 weeks from initial discovery to final launch, depending on scope and complexity. We share a clear timeline before work begins.',
    },
    {
      q: 'Will my website be mobile responsive and fast?',
      a: 'Yes — every website we build is mobile-first and engineered for sub-second loading, consistently scoring 95+ on Google PageSpeed Insights and meeting Core Web Vitals.',
    },
    {
      q: 'How do your SEO services help my business?',
      a: 'We structure your site with clean semantic HTML, JSON-LD schema markup, high-intent keyword targeting, and fast server responses so search engines rank your business ahead of local competitors.',
    },
    {
      q: 'Do you provide maintenance and ongoing support?',
      a: 'Yes — our $150/mo Care Plan covers hosting, security monitoring, monthly SEO health reports, content updates, and digital identity management. Cancel anytime.',
    },
  ],

  pricing: [
    {
      q: 'What exactly is the free homepage sample?',
      a: "We design a fully custom homepage mockup for your business — styled with your brand colours and content — within 24 hours. It's a real design, not a template, and you review it at no cost before deciding anything.",
    },
    {
      q: 'What if I need more than just a homepage?',
      a: 'Our base build includes a complete homepage. Additional pages (Services, About, Contact, Blog, etc.) can be added at a transparent per-page rate quoted before we start. Nothing is billed without your approval.',
    },
    {
      q: 'Can I cancel the Care Plan at any time?',
      a: "Yes. The Care Plan is a rolling monthly subscription with no lock-in. Cancel with written notice and we'll transfer all site files and access credentials to you within 7 business days.",
    },
    {
      q: 'Do I own the website after the build?',
      a: 'Absolutely — full ownership transfers to you upon final payment. No proprietary systems, no lock-in. You get the code, the design files, and all credentials.',
    },
    {
      q: "What's your refund policy?",
      a: "If you're unsatisfied within 7 days of launch, contact us and we'll make it right. Because every build is custom, refunds after launch aren't available — but we're committed to your satisfaction throughout the project.",
    },
  ],

  services: [
    {
      q: 'Do you work with businesses that already have a website?',
      a: 'Yes. We can redesign an existing site, take over its maintenance via our Care Plan, or layer SEO and social identity services on top of a site you already own.',
    },
    {
      q: 'Is the website built on a CMS or custom code?',
      a: 'We build primarily with Next.js (React) for maximum performance and flexibility. If your team needs a CMS for editing content, we integrate CMS solutions (like Sanity or a headless approach) so non-technical staff can update pages without touching code.',
    },
    {
      q: 'Do you build e-commerce sites?',
      a: 'Yes — we integrate Stripe and other payment gateways for product sales, quote-request flows, and booking deposits. For large product catalogues, we discuss the right platform fit in discovery.',
    },
    {
      q: 'How wide is your local SEO coverage?',
      a: "We optimise for any US city or service area. We've worked with businesses in Los Angeles, Chicago, Alaska, and across the Gulf Coast. Local SEO strategy is tailored to your specific service radius and competitive landscape.",
    },
  ],
};

const PlusIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const MinusIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const HEADINGS = {
  home:     { pill: 'FAQs', text: 'Got Questions?',     h2: 'Frequently Asked Questions.',        sub: 'Everything you need to know about working with Embra Technologies.' },
  pricing:  { pill: 'FAQs', text: 'Pricing Questions',  h2: 'Common Questions About Our Pricing.', sub: 'Transparent answers about costs, ownership, and our free sample offer.' },
  services: { pill: 'FAQs', text: 'Service Questions',  h2: 'Questions About Our Services.',       sub: 'Straight answers about how we work, what we build, and who we work with.' },
};

/**
 * @param {'home'|'pricing'|'services'} variant
 */
export default function Faq({ variant = 'home' }) {
  const [openIdx, setOpenIdx] = useState(-1);
  const faqs = FAQ_SETS[variant] || FAQ_SETS.home;
  const heading = HEADINGS[variant] || HEADINGS.home;

  return (
    <section id="faqs" aria-labelledby="faqs-heading">
      <div className="wrap">
        <div className="section-head reveal-up">
          <div className="section-badge">
            <span className="badge-pill">{heading.pill}</span>
            <span className="badge-text">{heading.text}</span>
          </div>
          <h2 id="faqs-heading">{heading.h2}</h2>
          <p>{heading.sub}</p>
        </div>
        <div className="faq-wrap reveal-up">
          {faqs.map((f, i) => {
            const open = openIdx === i;
            const panelId = 'faq-panel-' + i;
            const btnId = 'faq-btn-' + i;
            return (
              <div className={'faq-item' + (open ? ' open' : '')} key={f.q}>
                <button
                  className="faq-header"
                  aria-expanded={open}
                  aria-controls={panelId}
                  id={btnId}
                  onClick={() => setOpenIdx(open ? -1 : i)}
                >
                  <span>{f.q}</span>
                  <span className="faq-icon">
                    {open ? <MinusIcon /> : <PlusIcon />}
                  </span>
                </button>
                <div id={panelId} role="region" aria-labelledby={btnId} className="faq-body" style={{ display: open ? 'block' : 'none' }}>{f.a}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
