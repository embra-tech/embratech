// 2026-10-26: small decorative "growth" graphic (pure CSS animation, no data, hidden from screen readers).
const HEIGHTS = [30, 42, 38, 55, 66, 80];

export default function GrowthBars() {
  return (
    <div className="growth-bars" aria-hidden="true">
      {HEIGHTS.map((h, i) => (
        <span key={i} style={{ height: `${h}%`, animationDelay: `${i * 0.15}s` }} />
      ))}
      <svg className="growth-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="3 17 9 11 13 15 21 7" />
        <polyline points="14 7 21 7 21 14" />
      </svg>
    </div>
  );
}
