import credits from '../lib/stock-credits.json';

// 2026-10-26: Pexels photo served from our own site (optimized by scripts/generate-images.mjs).
// SEO-safe: lazy-loaded, fixed 3:2 box (no layout shift), descriptive alt text.
// Renders nothing until the photo has been downloaded (scripts/fetch-pexels.mjs), so the build never
// shows a broken image.
export default function StockPhoto({ name, alt, caption, variant = 'figure' }) {
  const c = credits[name];
  if (!c) return null;
  const base = `/images/optimized/${name}`;
  const img = (
    <picture>
      <source type="image/avif" srcSet={`${base}-480.avif 480w, ${base}-720.avif 720w, ${base}-960.avif 960w`} sizes={variant === 'thumb' ? '(max-width: 640px) 100vw, 380px' : '(max-width: 840px) 100vw, 840px'} />
      <source type="image/webp" srcSet={`${base}-480.webp 480w, ${base}-720.webp 720w, ${base}-960.webp 960w`} sizes={variant === 'thumb' ? '(max-width: 640px) 100vw, 380px' : '(max-width: 840px) 100vw, 840px'} />
      <img src={`${base}-720.jpg`} alt={alt || c.alt} loading="lazy" decoding="async" width={960} height={640} />
    </picture>
  );
  if (variant === 'thumb') return <div className="stock-thumb">{img}</div>;
  return (
    <figure className="stock-photo">
      {img}
      <figcaption>
        {caption && <span>{caption}</span>}
        <span className="stock-credit">
          Photo: <a href={c.pexelsUrl} target="_blank" rel="noopener noreferrer nofollow">{c.photographer} / Pexels</a>
        </span>
      </figcaption>
    </figure>
  );
}
