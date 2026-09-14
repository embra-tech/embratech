import * as THREE from 'three';

/*
 * Service-card WebGL scenes, ported from the "elite-service-animations"
 * concepts and recolored to Embra's Obsidian Blue palette so they read as
 * part of the same brand as the rest of the site (see HeroScene.js
 * SCENE_THEMES.obsidian and app/globals.css --primary/--secondary/--accent).
 *
 *   PRIMARY   #6FA8F5  — was cyan
 *   SECONDARY #1E56B0  — was violet
 *   ACCENT    #A9D2FF  — was amber/white accents
 *   WHITE     #FFFFFF  — highlights only, unchanged
 */
const PRIMARY = 0x6fa8f5;
const SECONDARY = 0x1e56b0;
const ACCENT = 0xa9d2ff;
const WHITE = 0xffffff;
const GRID_LINE = 0x223357;
const GRID_LINE_DIM = 0x0f1626;

const clamp01 = (x) => Math.min(1, Math.max(0, x));
const smooth = (x) => { x = clamp01(x); return x * x * (3 - 2 * x); };
const rnd = (seed) => () => { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; };

/* ============================================================
   SEO — RANK CLIMB
   Bars ascending toward position #1, a marker riding the leader.
   ============================================================ */
export function initRankClimb(root) {
  const g = new THREE.Group();
  root.add(g);

  const bars = [];
  const COUNT = 7;
  for (let i = 0; i < COUNT; i++) {
    const color = new THREE.Color(PRIMARY).lerp(new THREE.Color(SECONDARY), i / (COUNT - 1));
    const bar = new THREE.Mesh(
      new THREE.BoxGeometry(0.34, 1, 0.34),
      new THREE.MeshStandardMaterial({ color, roughness: 0.3, metalness: 0.5 })
    );
    bar.position.x = (i - (COUNT - 1) / 2) * 0.55;
    bar.userData.i = i;
    g.add(bar);
    bars.push(bar);
  }

  const floor = new THREE.GridHelper(5, 12, GRID_LINE, GRID_LINE_DIM);
  floor.position.y = -1.05;
  g.add(floor);

  const marker = new THREE.Mesh(
    new THREE.OctahedronGeometry(0.14),
    new THREE.MeshBasicMaterial({ color: WHITE })
  );
  g.add(marker);
  const markerGlow = new THREE.Mesh(
    new THREE.SphereGeometry(0.26, 16, 16),
    new THREE.MeshBasicMaterial({ color: PRIMARY, transparent: true, opacity: 0.3, blending: THREE.AdditiveBlending })
  );
  marker.add(markerGlow);

  g.rotation.x = 0.25;

  return {
    update(t) {
      const cycle = (t * 0.16) % 1;
      bars.forEach((bar) => {
        const i = bar.userData.i;
        const h = 0.35 + 2.3 * smooth(cycle * 1.7 - i * 0.12);
        bar.scale.y = h;
        bar.position.y = -1.05 + h / 2;
      });
      const lead = Math.min(6, Math.floor(cycle * 1.7 / 0.12 + 0.0001));
      const topBar = bars[Math.max(0, Math.min(lead, COUNT - 1))];
      marker.position.set(topBar.position.x, topBar.position.y + topBar.scale.y / 2 + 0.28 + 0.08 * Math.sin(t * 3), 0);
      marker.rotation.y = t * 1.6;
    },
  };
}

/* ============================================================
   DIGITAL IDENTITY — CONSTELLATION
   Connected reputation nodes across a sphere.
   ============================================================ */
export function initConstellation(root) {
  const g = new THREE.Group();
  root.add(g);

  const rand = rnd(42);
  const COUNT = 26, nodes = [];
  const matP = new THREE.MeshStandardMaterial({ color: PRIMARY, emissive: PRIMARY, emissiveIntensity: 0.6, roughness: 0.3 });
  const matS = new THREE.MeshStandardMaterial({ color: SECONDARY, emissive: SECONDARY, emissiveIntensity: 0.6, roughness: 0.3 });

  for (let i = 0; i < COUNT; i++) {
    const th = rand() * Math.PI * 2, ph = Math.acos(2 * rand() - 1);
    const r = 1.5 + rand() * 0.25;
    const p = new THREE.Vector3(
      r * Math.sin(ph) * Math.cos(th),
      r * Math.cos(ph) * 0.8,
      r * Math.sin(ph) * Math.sin(th)
    );
    const node = new THREE.Mesh(new THREE.SphereGeometry(0.055, 10, 10), i % 3 ? matP : matS);
    node.position.copy(p);
    node.userData.phase = rand() * Math.PI * 2;
    nodes.push(node);
    g.add(node);
  }

  const lineMat = new THREE.LineBasicMaterial({ color: ACCENT, transparent: true, opacity: 0.16 });
  for (let i = 0; i < COUNT; i++) {
    for (let j = i + 1; j < COUNT; j++) {
      if (nodes[i].position.distanceTo(nodes[j].position) < 0.95) {
        const geo = new THREE.BufferGeometry().setFromPoints([nodes[i].position, nodes[j].position]);
        g.add(new THREE.Line(geo, lineMat));
      }
    }
  }

  const shell = new THREE.Mesh(
    new THREE.SphereGeometry(1.85, 24, 16),
    new THREE.MeshBasicMaterial({ color: SECONDARY, wireframe: true, transparent: true, opacity: 0.06 })
  );
  g.add(shell);

  return {
    update(t) {
      g.rotation.y = t * 0.16;
      g.rotation.x = Math.sin(t * 0.2) * 0.15;
      nodes.forEach((n) => {
        n.scale.setScalar(0.85 + 0.45 * Math.sin(t * 2 + n.userData.phase));
      });
    },
  };
}

/* ============================================================
   DIGITAL SYSTEMS & INTEGRATIONS — DATA STREAMS
   Packets flowing through curved pipes between two systems.
   ============================================================ */
export function initDataStreams(root) {
  const g = new THREE.Group();
  root.add(g);

  const mkSystem = (x, color) => {
    const grp = new THREE.Group();
    const box = new THREE.Mesh(
      new THREE.BoxGeometry(0.55, 0.8, 0.55),
      new THREE.MeshStandardMaterial({ color: 0x0a0f1a, roughness: 0.4, metalness: 0.7 })
    );
    const edges = new THREE.LineSegments(
      new THREE.EdgesGeometry(box.geometry),
      new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.9 })
    );
    grp.add(box, edges);
    grp.position.x = x;
    g.add(grp);
    return grp;
  };
  const sysA = mkSystem(-1.9, PRIMARY);
  const sysB = mkSystem(1.9, SECONDARY);

  const streams = [];
  for (let i = 0; i < 3; i++) {
    const y = -0.45 + i * 0.45;
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-1.6, y, 0),
      new THREE.Vector3(-0.6, y + 0.35 * (i % 2 ? -1 : 1), 0.45),
      new THREE.Vector3(0.6, y + 0.35 * (i % 2 ? 1 : -1), -0.45),
      new THREE.Vector3(1.6, y, 0),
    ]);
    const tubeColor = i === 1 ? WHITE : (i ? SECONDARY : PRIMARY);
    const tube = new THREE.Mesh(
      new THREE.TubeGeometry(curve, 40, 0.018, 8, false),
      new THREE.MeshBasicMaterial({ color: tubeColor, transparent: true, opacity: 0.3, blending: THREE.AdditiveBlending })
    );
    g.add(tube);
    for (let j = 0; j < 4; j++) {
      const pkt = new THREE.Mesh(
        new THREE.SphereGeometry(0.05, 10, 10),
        new THREE.MeshBasicMaterial({ color: tubeColor, blending: THREE.AdditiveBlending, transparent: true })
      );
      pkt.userData = { curve, off: j / 4, speed: 0.3 + i * 0.08 };
      streams.push(pkt);
      g.add(pkt);
    }
  }

  g.rotation.x = 0.15;

  return {
    update(t) {
      sysA.position.y = Math.sin(t * 1.1) * 0.08;
      sysB.position.y = Math.sin(t * 1.1 + 1.5) * 0.08;
      sysA.rotation.y = t * 0.4;
      sysB.rotation.y = -t * 0.4;
      streams.forEach((s) => {
        const u = (t * s.userData.speed + s.userData.off) % 1;
        s.position.copy(s.userData.curve.getPointAt(u));
        s.material.opacity = Math.sin(u * Math.PI) * 0.95;
      });
    },
  };
}

/* ============================================================
   CUSTOM UI DESIGN — LAYER STACK
   Artboards floating in depth, a cursor gliding on top.
   ============================================================ */
export function initLayerStack(root) {
  const g = new THREE.Group();
  root.add(g);

  const layers = [];
  const colors = [SECONDARY, PRIMARY, WHITE, ACCENT];
  for (let i = 0; i < 4; i++) {
    const geo = new THREE.PlaneGeometry(2.3, 1.45);
    const border = new THREE.LineSegments(
      new THREE.EdgesGeometry(geo),
      new THREE.LineBasicMaterial({ color: colors[i], transparent: true, opacity: 0.85 })
    );
    const fill = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({
      color: colors[i], transparent: true, opacity: 0.05, side: THREE.DoubleSide,
    }));
    border.add(fill);
    border.position.z = i * 0.45 - 0.7;
    border.userData = { i };
    layers.push(border);
    g.add(border);
  }

  const cursor = new THREE.Mesh(
    new THREE.SphereGeometry(0.06, 12, 12),
    new THREE.MeshBasicMaterial({ color: WHITE })
  );
  cursor.position.z = layers[3].position.z + 0.1;
  g.add(cursor);
  const cursorRing = new THREE.Mesh(
    new THREE.TorusGeometry(0.14, 0.008, 8, 40),
    new THREE.MeshBasicMaterial({ color: PRIMARY, transparent: true, opacity: 0.55 })
  );
  cursor.add(cursorRing);

  g.rotation.y = -0.35;
  g.rotation.x = 0.18;

  return {
    update(t) {
      layers.forEach((l) => {
        const i = l.userData.i;
        l.position.y = Math.sin(t * 1.2 + i * 0.8) * 0.1;
        l.rotation.z = Math.sin(t * 0.5 + i * 0.9) * 0.04;
      });
      cursor.position.x = Math.sin(t * 0.8) * 0.9;
      cursor.position.y = Math.cos(t * 1.1) * 0.5;
      cursorRing.scale.setScalar(1 + 0.3 * Math.sin(t * 3));
    },
  };
}

/* ============================================================
   LAUNCH & SCALE — ROCKET ARC
   A launch climbing its trajectory, trail burning behind it.
   ============================================================ */
export function initRocketArc(root) {
  const g = new THREE.Group();
  root.add(g);

  const curve = new THREE.QuadraticBezierCurve3(
    new THREE.Vector3(-1.7, -1.2, 0),
    new THREE.Vector3(0.3, -0.4, 0.6),
    new THREE.Vector3(1.5, 1.35, 0)
  );

  const guide = new THREE.Line(
    new THREE.BufferGeometry().setFromPoints(curve.getPoints(60)),
    new THREE.LineBasicMaterial({ color: ACCENT, transparent: true, opacity: 0.14 })
  );
  g.add(guide);

  const flameColor = new THREE.Color(PRIMARY).lerp(new THREE.Color(WHITE), 0.55);

  const rocket = new THREE.Group();
  const nose = new THREE.Mesh(new THREE.ConeGeometry(0.11, 0.32, 16), new THREE.MeshStandardMaterial({ color: WHITE, roughness: 0.3, metalness: 0.5 }));
  nose.position.y = 0.22;
  const body = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.4, 16), new THREE.MeshStandardMaterial({ color: PRIMARY, roughness: 0.3, metalness: 0.6 }));
  const flame = new THREE.Mesh(new THREE.ConeGeometry(0.08, 0.3, 12), new THREE.MeshBasicMaterial({ color: flameColor, transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending }));
  flame.position.y = -0.35;
  flame.rotation.x = Math.PI;
  rocket.add(nose, body, flame);
  g.add(rocket);

  const N = 40;
  const eGeo = new THREE.BufferGeometry();
  const ePos = new Float32Array(N * 3);
  eGeo.setAttribute('position', new THREE.BufferAttribute(ePos, 3));
  const exhaust = new THREE.Points(eGeo, new THREE.PointsMaterial({
    color: flameColor, size: 0.05, transparent: true, opacity: 0.8,
    blending: THREE.AdditiveBlending, depthWrite: false,
  }));
  g.add(exhaust);

  const pos = new THREE.Vector3(), tan = new THREE.Vector3(), target = new THREE.Vector3();

  return {
    update(t) {
      const p = clamp01((t * 0.22) % 1.15);
      const pe = p < 1 ? p : 1;
      const eased = pe * pe * (3 - 2 * pe);
      curve.getPointAt(eased, pos);
      curve.getTangentAt(eased, tan);
      rocket.position.copy(pos);
      target.copy(pos).add(tan);
      rocket.lookAt(target);
      rocket.rotateX(Math.PI / 2);
      flame.scale.setScalar(0.8 + 0.4 * Math.sin(t * 22));
      rocket.visible = p < 1;

      for (let i = 0; i < N; i++) {
        const trail = clamp01(eased - i * 0.012);
        curve.getPointAt(trail, pos);
        ePos[i * 3] = pos.x + (Math.sin(i * 7.3) * 0.05) * (1 - trail);
        ePos[i * 3 + 1] = pos.y - i * 0.012;
        ePos[i * 3 + 2] = pos.z + (Math.cos(i * 5.1) * 0.05) * (1 - trail);
      }
      eGeo.attributes.position.needsUpdate = true;
    },
  };
}
