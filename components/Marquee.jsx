const ITEMS = [
  { icon: 'play',   label: 'NEXT.JS 14' },
  { icon: 'layers', label: 'REACT 18 ARCHITECTURE' },
  { icon: 'search', label: 'GOOGLE CORE WEB VITALS' },
  { icon: 'bolt',   label: 'GSAP ANIMATIONS' },
  { icon: 'tri',    label: 'THREE.JS WebGL' },
  { icon: 'grid',   label: 'VERCEL EDGE CLOUD' },
  { icon: 'stripe', label: 'STRIPE PAYMENTS' },
];

const ICONS = {
  play:   <><circle cx="12" cy="12" r="10" /><polygon points="10 8 16 12 10 16 10 8" /></>,
  layers: <path d="M12 2L2 7l10 5 10-5-10-5z" />,
  search: <><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></>,
  bolt:   <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />,
  tri:    <polygon points="12 2 2 22 22 22" />,
  grid:   <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M9 3v18" /></>,
  stripe: <><rect x="2" y="7" width="20" height="10" rx="3" /><path d="M9 12h6" /></>,
};

export default function Marquee() {
  const track = [...ITEMS, ...ITEMS]; // duplicated for a seamless loop
  return (
    <div className="logos-strip">
      <p className="logos-tagline">Engineered with Industry-Leading Technologies</p>
      <div className="marquee-container">
        <div className="marquee-track">
          {track.map((item, i) => (
            <div className="marquee-item" key={`${item.label}-${i}`}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">{ICONS[item.icon]}</svg>
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
