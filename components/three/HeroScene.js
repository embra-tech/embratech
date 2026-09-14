import * as THREE from 'three';

export const SCENE_THEMES = {
  obsidian: { primary: '#6FA8F5', secondary: '#1E56B0', accent: '#A9D2FF' },
};

function hexToRgba(hex, a) {
  const n = parseInt(hex.slice(1), 16);
  return `rgba(${(n >> 16) & 255},${(n >> 8) & 255},${n & 255},${a})`;
}

function makeGlowTexture(hex) {
  const s = 256;
  const c = document.createElement('canvas');
  c.width = c.height = s;
  const ctx = c.getContext('2d');
  const g = ctx.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
  g.addColorStop(0, hexToRgba(hex, 0.95));
  g.addColorStop(0.25, hexToRgba(hex, 0.38));
  g.addColorStop(1, hexToRgba(hex, 0));
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, s, s);
  const tex = new THREE.CanvasTexture(c);
  return tex;
}

/**
 * Creates the hero WebGL scene.
 * Structure:
 *   root (GSAP intro-scales this)
 *     ├─ spin  (wireframe icosahedra + additive core)
 *     ├─ glow  (radial sprite)
 *     ├─ ring1 / ring2 / ring3 (tilted torus orbits)
 *     └─ points (~850 particles streaming into the center void)
 */
export function createHeroScene(canvas) {
  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true,
    powerPreference: 'high-performance',
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
  camera.position.set(0, 0, 9);

  const root = new THREE.Group();
  scene.add(root);

  // ---- Core: dual wireframe icosahedra + additive glow core ----
  const spin = new THREE.Group();
  const icoGeo = new THREE.IcosahedronGeometry(1.05, 1);
  const icoMat = new THREE.MeshBasicMaterial({ wireframe: true, transparent: true, opacity: 0.85 });
  const ico = new THREE.Mesh(icoGeo, icoMat);

  const icoInnerGeo = new THREE.IcosahedronGeometry(0.58, 0);
  const icoInnerMat = new THREE.MeshBasicMaterial({ wireframe: true, transparent: true, opacity: 0.55 });
  const icoInner = new THREE.Mesh(icoInnerGeo, icoInnerMat);

  const coreGeo = new THREE.SphereGeometry(0.42, 32, 32);
  const coreMat = new THREE.MeshBasicMaterial({
    transparent: true,
    opacity: 0.22,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
  const core = new THREE.Mesh(coreGeo, coreMat);
  spin.add(ico, icoInner, core);
  root.add(spin);

  // ---- Glow sprite ----
  const glowMat = new THREE.SpriteMaterial({
    transparent: true,
    opacity: 0,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
  const glow = new THREE.Sprite(glowMat);
  glow.scale.setScalar(7.5);
  root.add(glow);

  // ---- Orbit rings ----
  const ringGeo1 = new THREE.TorusGeometry(2.35, 0.008, 8, 160);
  const ringMat1 = new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.55 });
  const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
  ring1.rotation.x = Math.PI / 2.15;

  const ringGeo2 = new THREE.TorusGeometry(2.85, 0.005, 8, 160);
  const ringMat2 = new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.35 });
  const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
  ring2.rotation.x = Math.PI / 1.75;
  ring2.rotation.y = 0.4;

  const ringGeo3 = new THREE.TorusGeometry(1.7, 0.006, 8, 140);
  const ringMat3 = new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.5 });
  const ring3 = new THREE.Mesh(ringGeo3, ringMat3);
  ring3.rotation.x = Math.PI / 2.6;
  ring3.rotation.y = -0.3;

  root.add(ring1, ring2, ring3);
  const rings = [ring1, ring2, ring3];

  // ---- Particles streaming into the center void ----
  const COUNT = 850;
  const positions = new Float32Array(COUNT * 3);
  const speeds = new Float32Array(COUNT);

  const resetParticle = (i, initial) => {
    const r = initial ? 1.4 + Math.random() * 6.5 : 5.5 + Math.random() * 3.0;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);
    speeds[i] = 0.5 + Math.random() * 1.1;
  };
  for (let i = 0; i < COUNT; i++) resetParticle(i, true);

  const pGeo = new THREE.BufferGeometry();
  pGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const pMat = new THREE.PointsMaterial({
    size: 0.035,
    transparent: true,
    opacity: 0,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  const points = new THREE.Points(pGeo, pMat);
  root.add(points);

  // Initial state for the GSAP intro (system grows from nothing)
  root.scale.setScalar(0.001);

  // ---- Theme handling ----
  const glowCache = {};
  function setTheme(id) {
    const t = SCENE_THEMES[id] || SCENE_THEMES.obsidian;
    icoMat.color.set(t.primary);
    icoInnerMat.color.set(t.accent);
    coreMat.color.set(t.primary);
    ringMat1.color.set(t.accent);
    ringMat2.color.set(t.primary);
    ringMat3.color.set(t.secondary);
    pMat.color.set('#ffffff');
    if (!glowCache[id]) glowCache[id] = makeGlowTexture(t.primary);
    glowMat.map = glowCache[id];
    glowMat.needsUpdate = true;
  }

  // ---- Pointer parallax ----
  const pointer = { x: 0, y: 0 };
  function setPointer(nx, ny) {
    pointer.x = nx;
    pointer.y = ny;
  }

  // ---- Resize ----
  function resize() {
    const w = canvas.clientWidth || canvas.parentElement.clientWidth || window.innerWidth;
    const h = canvas.clientHeight || canvas.parentElement.clientHeight || window.innerHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  resize();
  window.addEventListener('resize', resize);
  const ro = new ResizeObserver(resize);
  if (canvas.parentElement) ro.observe(canvas.parentElement);

  // ---- Render loop ----
  const clock = new THREE.Clock();
  let rafId = 0;
  const tmp = new THREE.Vector3();

  function tick() {
    const dt = Math.min(clock.getDelta(), 0.05);
    const t = clock.elapsedTime;

    ico.rotation.y += dt * 0.28;
    ico.rotation.x += dt * 0.08;
    icoInner.rotation.y -= dt * 0.4;
    icoInner.rotation.z += dt * 0.12;
    core.scale.setScalar(1 + Math.sin(t * 1.6) * 0.08);

    ring1.rotation.z += dt * 0.10;
    ring2.rotation.z -= dt * 0.07;
    ring3.rotation.z += dt * 0.14;

    root.position.y = Math.sin(t * 0.6) * 0.06;
    root.rotation.y += (pointer.x * 0.22 - root.rotation.y) * 0.045;
    root.rotation.x += (pointer.y * 0.14 - root.rotation.x) * 0.045;

    const pos = pGeo.attributes.position.array;
    for (let i = 0; i < COUNT; i++) {
      const ix = i * 3;
      tmp.set(pos[ix], pos[ix + 1], pos[ix + 2]);
      const len = tmp.length();
      if (len < 1.1) {
        resetParticle(i, false);
      } else {
        const k = (speeds[i] * dt) / len;
        pos[ix] -= pos[ix] * k;
        pos[ix + 1] -= pos[ix + 1] * k;
        pos[ix + 2] -= pos[ix + 2] * k;
      }
    }
    pGeo.attributes.position.needsUpdate = true;

    renderer.render(scene, camera);
    rafId = requestAnimationFrame(tick);
  }
  tick();

  function dispose() {
    cancelAnimationFrame(rafId);
    window.removeEventListener('resize', resize);
    ro.disconnect();
    scene.traverse((obj) => {
      if (obj.geometry) obj.geometry.dispose();
      if (obj.material) {
        if (obj.material.map) obj.material.map.dispose();
        obj.material.dispose();
      }
    });
    Object.values(glowCache).forEach((tex) => tex.dispose());
    renderer.dispose();
  }

  return {
    parts: { root, camera, glow, rings, particles: points },
    setPointer,
    setTheme,
    dispose,
  };
}
