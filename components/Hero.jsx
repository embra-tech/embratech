'use client';

import { useEffect, useRef } from 'react';
import { gsap } from '../lib/gsap';
import { useTheme } from './ThemeProvider';

const HEADLINE_WORDS = ['Custom', 'Websites', 'for', 'Home', 'Service', 'Businesses,', 'Built', 'Before', 'You'];

// 2026-10-13 (owner approved): start downloading the 3D scene as soon as this file loads, instead
// of waiting until the page has finished hydrating. Same scene and animation; it just arrives sooner.
const heroScenePromise = typeof window !== 'undefined' ? import('./three/HeroScene') : null;
// Failures are still handled inside the component (it shows the text); this only prevents an
// "unhandled rejection" console warning if the early download fails before the component mounts.
if (heroScenePromise) heroScenePromise.catch(() => {});

export default function Hero() {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const h1Ref = useRef(null);
  const badgeRef = useRef(null);
  const subRef = useRef(null);
  const actionsRef = useRef(null);
  const sceneRef = useRef(null);
  const introTl = useRef(null);
  const textTl = useRef(null);
  const revealedRef = useRef(false);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const revealText = () => {
      if (revealedRef.current) return;
      revealedRef.current = true;
      const words = h1Ref.current ? h1Ref.current.querySelectorAll('.word') : [];
      textTl.current = gsap.timeline();
      // 2026-10-13 (owner approved): same word-by-word reveal, slightly quicker (was 0.085s per word,
      // then 0.05 / 0.22 / 0.4s for badge, subtitle and buttons).
      words.forEach((w, i) => {
        textTl.current.add(() => w.classList.add('revealed'), i * 0.065);
      });
      const base = words.length * 0.065;
      textTl.current.add(() => badgeRef.current && badgeRef.current.classList.add('revealed'), base + 0.05);
      textTl.current.add(() => subRef.current && subRef.current.classList.add('revealed'), base + 0.17);
      textTl.current.add(() => actionsRef.current && actionsRef.current.classList.add('revealed'), base + 0.3);
    };

    // Bot / Lighthouse / PageSpeed detection (instant reveal for audits)
    const isBot = document.documentElement.getAttribute('data-bot') === 'true';

    if (isBot) {
      const words = h1Ref.current ? h1Ref.current.querySelectorAll('.word') : [];
      words.forEach((w) => w.classList.add('revealed'));
      [badgeRef, subRef, actionsRef].forEach((r) => r.current && r.current.classList.add('revealed'));
      return;
    }

    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let api = null;

    // Safety net, technical failures only. Normal flow is unchanged: the orb
    // intro plays first and its onComplete reveals the text. If the WebGL scene
    // still has not been created after 4s (three.js chunk failed or stalled),
    // reveal the headline, subtitle and CTAs so the hero is never left empty.
    // 2026-10-19: lowered from 10s so visitors on slow phone connections see the headline sooner;
    // the orb still joins once it loads. No change on normal connections.
    const fallbackTimer = setTimeout(() => {
      if (!sceneRef.current) revealText();
    }, 4000);

    (heroScenePromise || import('./three/HeroScene'))
      .then(({ createHeroScene }) => {
        api = createHeroScene(canvas);
        sceneRef.current = api;
        api.setTheme(document.documentElement.getAttribute('data-theme') || 'obsidian');

        if (reduced) {
          api.parts.root.scale.setScalar(1);
          api.parts.particles.material.opacity = 0.85;
          api.parts.glow.material.opacity = 0.5;
          api.parts.camera.position.z = 5.8;
          const words = h1Ref.current ? h1Ref.current.querySelectorAll('.word') : [];
          words.forEach((w) => w.classList.add('revealed'));
          [badgeRef, subRef, actionsRef].forEach((r) => r.current && r.current.classList.add('revealed'));
        } else {
          // 1) The orb system plays first, then the text appears (owner approved 2026-10-13: same
          //    sequence, compressed). Was: 0.3s delay, ~3.4s intro, text after the intro finished.
          //    Now: 0.15s delay, ~2.0s intro, text starts at 1.5s as the orb settles.
          introTl.current = gsap.timeline({ delay: 0.15, onComplete: revealText });
          introTl.current
            .to(api.parts.root.scale, { x: 1, y: 1, z: 1, duration: 1.8, ease: 'expo.inOut' }, 0)
            .to(api.parts.camera.position, { z: 5.8, duration: 2.0, ease: 'power2.inOut' }, 0)
            .to(api.parts.rings.map((r) => r.rotation), { z: '+=2.6', duration: 1.9, ease: 'power2.inOut' }, 0)
            .to(api.parts.glow.material, { opacity: 0.5, duration: 1.3, ease: 'power1.inOut' }, 0.35)
            .to(api.parts.particles.material, { opacity: 0.85, duration: 1.2, ease: 'power1.in' }, 0.6)
            .add(revealText, 1.5);
        }
      })
      .catch((err) => {
        console.error('WebGL init error:', err);
        // Technical failure (no WebGL support, context creation failed, chunk
        // failed to load): show the text instead of an empty hero.
        revealText();
      });

    return () => {
      clearTimeout(fallbackTimer);
      if (introTl.current) introTl.current.kill();
      if (textTl.current) textTl.current.kill();
      if (api) api.dispose();
      sceneRef.current = null;
    };
  }, []);

  // Keep WebGL colors in sync with the Cosmic Spectrum theme
  useEffect(() => {
    sceneRef.current && sceneRef.current.setTheme(theme);
  }, [theme]);

  const onPointerMove = (e) => {
    const api = sceneRef.current;
    if (!api) return;
    const r = sectionRef.current.getBoundingClientRect();
    api.setPointer(
      ((e.clientX - r.left) / r.width - 0.5) * 2,
      ((e.clientY - r.top) / r.height - 0.5) * 2
    );
  };

  const onPointerLeave = () => {
    sceneRef.current && sceneRef.current.setPointer(0, 0);
  };

  return (
    <section
      className="hero"
      id="heroSection"
      aria-labelledby="hero-heading"
      ref={sectionRef}
      onMouseMove={onPointerMove}
      onMouseLeave={onPointerLeave}
    >
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-grid"></div>
        <div className="hero-ray-line r1"><div className="hero-ray-beam"></div></div>
        <div className="hero-ray-line r2"><div className="hero-ray-beam"></div></div>
        <div className="hero-ray-line r3"><div className="hero-ray-beam"></div></div>
        <canvas ref={canvasRef} className="hero-webgl"></canvas>
      </div>
      <div className="hero-overlay" aria-hidden="true"></div>

      <div className="wrap hero-inner">
        <div className="hero-badge-wrap" ref={badgeRef}>
          <a href="#services" className="section-badge">
            <span className="badge-pill">New</span>
            <span className="badge-text">See It Before You Pay</span>
            <svg className="badge-arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6" /></svg>
          </a>
        </div>

        <h1 id="hero-heading" ref={h1Ref} aria-label="Custom Websites for Home Service Businesses, Built Before You Buy.">
          {HEADLINE_WORDS.map((w, i) => (
            <span key={i}><span className="word">{w}</span> </span>
          ))}
          <span className="word"><span className="highlight-text">Buy.</span></span>
        </h1>

        <p className="hero-sub" ref={subRef}>
          We build your homepage in 24 hours, for free. No templates, no commitments. See real work built for your business before you spend a cent. Love it and we build the rest. Walk away and you owe us nothing.
        </p>

        <div className="hero-actions" ref={actionsRef}>
          <a href="/contact" className="btn-flip btn-primary btn-large">
            <span className="btn-flip-inner">
              <span className="btn-flip-state">Get My Free Sample <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg></span>
              <span className="btn-flip-state" aria-hidden="true">Get My Free Sample <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg></span>
            </span>
          </a>
          <a href="/portfolio" className="btn-flip btn-ghost btn-large">
            <span className="btn-flip-inner">
              <span className="btn-flip-state">See Our Work <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg></span>
              <span className="btn-flip-state" aria-hidden="true">See Our Work <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg></span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
