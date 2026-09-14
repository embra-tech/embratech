'use client';

import { useEffect, useRef } from 'react';
import { gsap } from '../lib/gsap';
import { createHeroScene } from './three/HeroScene';
import { useTheme } from './ThemeProvider';

const HEADLINE_WORDS = ['Websites', 'that', 'make', 'your', 'business', 'look'];

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

  // Build scene + 3.2s intro, then reveal text
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const api = createHeroScene(canvas);
    sceneRef.current = api;
    api.setTheme(document.documentElement.getAttribute('data-theme') || 'obsidian');

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const revealText = () => {
      if (revealedRef.current) return;
      revealedRef.current = true;
      const words = h1Ref.current ? h1Ref.current.querySelectorAll('.word') : [];
      textTl.current = gsap.timeline();
      words.forEach((w, i) => {
        textTl.current.add(() => w.classList.add('revealed'), i * 0.085);
      });
      const base = words.length * 0.085;
      textTl.current.add(() => badgeRef.current && badgeRef.current.classList.add('revealed'), base + 0.05);
      textTl.current.add(() => subRef.current && subRef.current.classList.add('revealed'), base + 0.22);
      textTl.current.add(() => actionsRef.current && actionsRef.current.classList.add('revealed'), base + 0.4);
    };

    if (reduced) {
      api.parts.root.scale.setScalar(1);
      api.parts.particles.material.opacity = 0.85;
      api.parts.glow.material.opacity = 0.5;
      api.parts.camera.position.z = 5.8;
      h1Ref.current && h1Ref.current.querySelectorAll('.word').forEach((w) => w.classList.add('revealed'));
      [badgeRef, subRef, actionsRef].forEach((r) => r.current && r.current.classList.add('revealed'));
    } else {
      // 1) The orb system plays alone for ~3.2s
      introTl.current = gsap.timeline({ delay: 0.3, onComplete: revealText });
      introTl.current
        .to(api.parts.root.scale, { x: 1, y: 1, z: 1, duration: 3.0, ease: 'expo.inOut' }, 0)
        .to(api.parts.camera.position, { z: 5.8, duration: 3.4, ease: 'power2.inOut' }, 0)
        .to(api.parts.rings.map((r) => r.rotation), { z: '+=2.6', duration: 3.2, ease: 'power2.inOut' }, 0)
        .to(api.parts.glow.material, { opacity: 0.5, duration: 2.2, ease: 'power1.inOut' }, 0.6)
        .to(api.parts.particles.material, { opacity: 0.85, duration: 2.0, ease: 'power1.in' }, 1.0);
    }

    return () => {
      if (introTl.current) introTl.current.kill();
      if (textTl.current) textTl.current.kill();
      api.dispose();
      sceneRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
            <span className="badge-text">Websites &amp; SEO Built for Scale</span>
            <svg className="badge-arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6" /></svg>
          </a>
        </div>

        <h1 id="hero-heading" ref={h1Ref}>
          {HEADLINE_WORDS.map((w) => (
            <span className="word" key={w}>{w}</span>
          ))}{' '}
          <span className="word"><span className="highlight-text">exceptional.</span></span>
        </h1>

        <p className="hero-sub" ref={subRef}>
          We design and build fast, modern websites, improve search rankings, and manage your digital identity — converting more qualified visitors into paying clients.
        </p>

        <div className="hero-actions" ref={actionsRef}>
          <a href="/contact" className="btn-flip btn-primary btn-large">
            <span className="btn-flip-inner">
              <span className="btn-flip-state">Start Your Project <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg></span>
              <span className="btn-flip-state">Start Your Project <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg></span>
            </span>
          </a>
          <a href="/portfolio" className="btn-flip btn-ghost btn-large">
            <span className="btn-flip-inner">
              <span className="btn-flip-state">See Our Work <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg></span>
              <span className="btn-flip-state">See Our Work <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg></span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
