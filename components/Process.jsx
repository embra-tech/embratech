const STEPS = [
  {
    badge: 'Step 01', title: 'Smart Discovery',
    text: 'We analyze your target market, competitors, and growth objectives to design the right strategy.',
    graphic: 'radar',
  },
  {
    badge: 'Step 02', title: 'Custom UI Design',
    text: 'Clean, high-converting interactive mockups built around your brand identity and users.',
    graphic: 'image',
  },
  {
    badge: 'Step 03', title: 'Modern Build & SEO',
    text: 'Clean code, sub-second load performance, and schema metadata ready for search dominance.',
    graphic: 'code',
  },
  {
    badge: 'Step 04', title: 'Launch & Scale',
    text: 'Smooth deployment with ongoing search monitoring and digital identity management.',
    graphic: 'scale',
  },
];

export default function Process() {
  return (
    <section id="process" aria-labelledby="process-heading">
      <div className="wrap">
        <div className="section-head reveal-up">
          <div className="section-badge"><span className="badge-pill">Process</span><span className="badge-text">How We Work</span></div>
          <h2 id="process-heading">Our Simple, Smart, and Scalable Process.</h2>
          <p>From strategic discovery to high-impact launch, precision and transparent communication at every step.</p>
        </div>
        <div className="process-grid">
          {STEPS.map((s) => (
            <div className="process-card reveal-up" key={s.badge}>
              <div>
                <span className="process-step-badge">{s.badge}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
              <div className="process-graphic">
                {s.graphic === 'radar' && (<><div className="radar-ring r1"></div><div className="radar-ring r2"></div><div className="radar-ring r3"></div><div className="radar-sweep"></div></>)}
                {s.graphic === 'image' && <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg>}
                {s.graphic === 'code' && <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.8"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>}
                {s.graphic === 'scale' && <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="1.8"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
