'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import OfferStrip from './OfferStrip';
import ProofBar from './ProofBar';
import { HERO_MEDIA, heroSrcSet } from '../lib/heroMedia';

// 2026-10-26: shows an offer under every inner page heading, matched to the page:
//   offer="sample" (default) free homepage sample · offer="seo" free local SEO review · offer={false} none.
// 2026-11-08: hero background media by route (lib/heroMedia.js). SEO and speed safeguards:
//   - the image is real HTML (fetchpriority high, small sizes on phones, behind a dark overlay); text is never hidden
//   - the video is desktop-only (>=1024px), added after load and idle, never for reduced-motion or Save-Data users
//   - a missing image hides itself instead of showing a broken icon
function HeroMedia({ media }) {
  const [showVideo, setShowVideo] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [imgOk, setImgOk] = useState(true);

  useEffect(() => {
    if (!media.video || typeof window === 'undefined') return;
    const wide = window.matchMedia('(min-width: 1024px)').matches;
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const saver = navigator.connection && navigator.connection.saveData;
    if (!wide || calm || saver) return;
    let idleId;
    const start = () => {
      const ric = window.requestIdleCallback || ((cb) => setTimeout(cb, 1200));
      idleId = ric(() => setShowVideo(true));
    };
    if (document.readyState === 'complete') start();
    else window.addEventListener('load', start, { once: true });
    return () => {
      window.removeEventListener('load', start);
      if (idleId && window.cancelIdleCallback) window.cancelIdleCallback(idleId);
    };
  }, [media.video]);

  return (
    <div className="page-hero-media" aria-hidden="true">
      {imgOk && (
        <picture>
          <source type="image/avif" srcSet={heroSrcSet(media.image, 'avif')} sizes="(max-width: 767px) 60vw, 100vw" />
          <source type="image/webp" srcSet={heroSrcSet(media.image, 'webp')} sizes="(max-width: 767px) 60vw, 100vw" />
          <img
            src={`/images/optimized/${media.image}-960.jpg`}
            alt=""
            decoding="async"
            fetchPriority="high"
            onError={() => setImgOk(false)}
          />
        </picture>
      )}
      {showVideo && (
        <video
          className={`page-hero-video${playing ? ' is-playing' : ''}`}
          src={`/videos/${media.video}.mp4`}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onPlaying={() => setPlaying(true)}
          onError={() => setShowVideo(false)}
        />
      )}
    </div>
  );
}

export default function PageHeader({ pill, badge, title, sub, offer = 'sample' }) {
  const variant = offer === true ? 'sample' : offer;
  const pathname = usePathname();
  const media = HERO_MEDIA[pathname];
  return (
    <div className={`page-head${media ? ' has-media' : ''}`}>
      {media && <HeroMedia media={media} />}
      <div className="section-badge">
        <span className="badge-pill">{pill}</span>
        <span className="badge-text">{badge}</span>
      </div>
      <h1>{title}</h1>
      {sub && <p className="page-head-sub">{sub}</p>}
      {variant && <OfferStrip variant={variant} />}
      {/* 2026-11-08: real-client proof, phone, local-time hours and starting price (components/ProofBar.jsx). */}
      <ProofBar pathname={pathname} />
    </div>
  );
}
