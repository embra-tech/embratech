'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';

// Mounts a raw Three.js scene driven by the GSAP ticker, matching the
// lighting/parallax/disposal rig used across the rest of the site's
// WebGL scenes (see components/three/HeroScene.js).
// init(root, camera) -> { update(t, dt), dispose?() }
import { initRankClimb, initConstellation, initDataStreams, initLayerStack, initRocketArc } from './serviceAnimations';

const INITS = { rankClimb: initRankClimb, constellation: initConstellation, dataStreams: initDataStreams, layerStack: initLayerStack, rocketArc: initRocketArc };

export default function ThreeCanvas({ type }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.set(0, 0, 6);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // Lighting tuned to the Obsidian Blue palette (primary/secondary glows)
    scene.add(new THREE.AmbientLight(0x8fb4e8, 0.85));
    const key = new THREE.DirectionalLight(0xffffff, 1.4);
    key.position.set(3, 4, 5);
    scene.add(key);
    const rim = new THREE.PointLight(0x1e56b0, 12, 20);
    rim.position.set(-4, -2, -3);
    scene.add(rim);

    const root = new THREE.Group();
    scene.add(root);

    const resize = () => {
      const w = mount.clientWidth || 1;
      const h = mount.clientHeight || 1;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(mount);

    // pointer parallax
    let tx = 0, ty = 0;
    const onMove = (e) => {
      const r = mount.getBoundingClientRect();
      tx = ((e.clientX - r.left) / r.width - 0.5) * 0.5;
      ty = ((e.clientY - r.top) / r.height - 0.5) * 0.35;
    };
    const onLeave = () => { tx = 0; ty = 0; };
    mount.addEventListener('pointermove', onMove);
    mount.addEventListener('pointerleave', onLeave);

    const init = INITS[type];
    const api = init ? init(root, camera) : null;

    const tick = (time, deltaTime) => {
      const dt = Math.min((deltaTime || 16.7) / 1000, 0.05);
      root.rotation.y += (tx - root.rotation.y) * 0.06;
      root.rotation.x += (ty - root.rotation.x) * 0.06;
      if (api && api.update) api.update(time, dt);
      renderer.render(scene, camera);
    };
    gsap.ticker.add(tick);

    return () => {
      gsap.ticker.remove(tick);
      ro.disconnect();
      mount.removeEventListener('pointermove', onMove);
      mount.removeEventListener('pointerleave', onLeave);
      api && api.dispose && api.dispose();
      scene.traverse((o) => {
        if (o.geometry) o.geometry.dispose();
        if (o.material) {
          const mats = Array.isArray(o.material) ? o.material : [o.material];
          mats.forEach((m) => {
            if (m.map) m.map.dispose();
            m.dispose();
          });
        }
      });
      renderer.dispose();
      if (renderer.domElement.parentNode === mount) mount.removeChild(renderer.domElement);
    };
  }, [type]);

  return <div ref={mountRef} className="three-mount" />;
}

