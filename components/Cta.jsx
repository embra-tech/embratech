const VARIANTS = {
  home: {
    badge: 'Ready?',
    badgeText: 'Start Today',
    heading: 'Your website should work while you\'re working. Let\'s build one that actually brings in customers.',
    sub: 'Tell us about your business and we reply within one business day with a free custom homepage sample — no commitment, no credit card, no obligation.',
    cta: 'Start Your Project',
    href: 'mailto:sales@embratechnologies.org',
  },
  pricing: {
    badge: 'Free Sample',
    badgeText: 'Zero Risk',
    heading: 'Ready to claim your free homepage sample?',
    sub: 'No payment. No commitment. We design a custom homepage for your business in 24 hours — you decide if you love it before spending a cent.',
    cta: 'Claim My Free Sample',
    href: '/contact',
  },
  about: {
    badge: 'Let\'s Talk',
    badgeText: 'Start Today',
    heading: 'Let\'s build something your customers can\'t ignore.',
    sub: 'Tell us about your business. We\'ll reply with a strategy and a free homepage sample within 24 hours — no obligation.',
    cta: 'Talk to Our Team',
    href: '/contact',
  },
  portfolio: {
    badge: 'Your Turn',
    badgeText: 'Next Project',
    heading: 'Your business deserves this calibre of site.',
    sub: 'Every project above shipped in under 4 weeks. Yours can too — starting with a free, no-obligation homepage sample.',
    cta: 'Start My Project',
    href: '/contact',
  },
  services: {
    badge: 'Get Started',
    badgeText: 'Zero Risk',
    heading: 'Pick the service that fits. Start with zero risk.',
    sub: 'Our free 24-hour homepage sample means you see the quality before you spend a cent. No lock-in. Full ownership.',
    cta: 'Get My Free Sample',
    href: '/contact',
  },
};

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

/**
 * @param {'home'|'pricing'|'about'|'portfolio'|'services'} variant
 */
export default function Cta({ variant = 'home' }) {
  const v = VARIANTS[variant] || VARIANTS.home;
  const isEmail = v.href.startsWith('mailto:');

  return (
    <section className="final-cta" id="contact" aria-labelledby="cta-heading">
      <div className="wrap cta-box reveal-up">
        <div className="section-badge">
          <span className="badge-pill">{v.badge}</span>
          <span className="badge-text">{v.badgeText}</span>
        </div>
        <h2 id="cta-heading">{v.heading}</h2>
        <p>{v.sub}</p>
        <a href={v.href} className="btn-flip btn-primary btn-large" style={{ marginTop: 10 }}>
          <span className="btn-flip-inner">
            <span className="btn-flip-state">{v.cta} <ArrowIcon /></span>
            <span className="btn-flip-state" aria-hidden="true">{v.cta} <ArrowRightIcon /></span>
          </span>
        </a>
        {isEmail && (
          <div className="cta-contact-pills">
            <a href="mailto:sales@embratechnologies.org"><span className="prompt-symbol">$</span> sales@embratechnologies.org</a>
            <a href="tel:+12122071152"><span className="prompt-symbol">$</span> +1 (212) 207-1152</a>
            <a href="https://embratechnologies.org" target="_blank" rel="noopener noreferrer"><span className="prompt-symbol">$</span> embratechnologies.org</a>
          </div>
        )}
      </div>
    </section>
  );
}

