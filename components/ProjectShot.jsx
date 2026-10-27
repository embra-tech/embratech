import Link from 'next/link';

// 2026-10-26: reusable project screenshot in the same "browser window" style as the industry pages.
// SEO-safe: lazy-loaded (below the fold), fixed width/height so nothing shifts while loading,
// AVIF/WebP from the existing optimized image sets, and a descriptive alt text.
// `name` must be one of the optimized image sets in public/images/optimized (see scripts/generate-images.mjs).
export default function ProjectShot({ name, url, alt, caption, href, linkText, concept = false }) {
  const base = `/images/optimized/${name}`;
  return (
    <figure className="project-shot" data-preview-card="true">
      <div className="project-shot-bar">
        <span className="project-shot-dots" aria-hidden="true"><i /><i /><i /></span>
        <span className="project-shot-url">{concept ? `Concept design: ${url} (sample brand, not a client)` : url}</span>
      </div>
      <picture>
        <source type="image/avif" srcSet={`${base}-480.avif 480w, ${base}-720.avif 720w, ${base}-960.avif 960w`} sizes="(max-width: 840px) 100vw, 840px" />
        <source type="image/webp" srcSet={`${base}-480.webp 480w, ${base}-720.webp 720w, ${base}-960.webp 960w`} sizes="(max-width: 840px) 100vw, 840px" />
        <img src={`${base}-720.jpg`} alt={alt} loading="lazy" decoding="async" width={840} height={480} />
      </picture>
      {(caption || href) && (
        <figcaption>
          {caption && <span>{caption}</span>}
          {href && <Link href={href}>{linkText || 'Read the case study'} &rarr;</Link>}
        </figcaption>
      )}
    </figure>
  );
}
