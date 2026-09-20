const ITEMS = [
  {
    title: 'Strategy First',
    text: 'We ask about your customers, your competitors, and how you currently get leads — before we design a single pixel.',
    icon: <><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></>,
  },
  {
    title: 'Custom Engineered',
    text: "Not Squarespace. Not Wix. Not a WordPress theme someone else already has. Every page is written from scratch in React — built specifically for your business and no one else.",
    icon: <><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></>,
  },
  {
    title: 'Blazing Performance',
    text: 'Sub-second TTFB, and flawless responsiveness across all devices. <a href="https://pagespeed.web.dev/analysis?url=https%3A%2F%2Fwww.embratechnologies.org%2F" target="_blank" rel="noopener noreferrer" style="color:var(--primary);text-decoration:underline;">Verify our own live score</a>.',
    icon: <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />,
  },
  {
    title: 'Long-Term Partnership',
    text: 'You get a real reply within one business day — not a ticket, not a bot. We stand by every site we ship, long after launch.',
    icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
  },
];

export default function WhyUs() {
  return (
    <section id="why" aria-labelledby="why-heading">
      <div className="wrap">
        <div className="section-head reveal-up">
          <div className="section-badge"><span className="badge-pill">Why Embra</span><span className="badge-text">Built to Win</span></div>
          <h2 id="why-heading">Built Around Your Business, Not a Template.</h2>
          <p>We combine modern design with high-performance engineering to deliver measurable business results.</p>
        </div>
        <div className="why-grid">
          {ITEMS.map((item) => (
            <div className="why-card reveal-up" key={item.title}>
              <div className="why-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">{item.icon}</svg>
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
