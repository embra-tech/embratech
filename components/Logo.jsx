'use client';

import { useId } from 'react';

export default function Logo({ withText = true, size = 36, className = '' }) {
  const uid = useId().replace(/[:]/g, '');
  const coreId = `logoCore-${uid}`;
  const wireId = `logoWire-${uid}`;

  return (
    <span className={`brand-logo ${className}`}>
      <svg
        className="brand-mark"
        viewBox="0 0 100 100"
        width={size}
        height={size}
        aria-hidden="true"
      >
        <defs>
          <radialGradient id={coreId} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#D6ECFF" />
            <stop offset="45%" stopColor="#6FA8F5" />
            <stop offset="100%" stopColor="#1E56B0" stopOpacity="0" />
          </radialGradient>
          <linearGradient id={wireId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8FC4FF" />
            <stop offset="100%" stopColor="#1E56B0" />
          </linearGradient>
        </defs>

        {/* Outer orbit rings, each a rigid group that spins about the center */}
        <g className="brand-orbit brand-orbit-1">
          <ellipse cx="50" cy="50" rx="46" ry="15" stroke={`url(#${wireId})`} transform="rotate(-24 50 50)" />
          <circle className="brand-node" r="2.6" transform="rotate(-24 50 50) translate(96 50)" />
        </g>
        <g className="brand-orbit brand-orbit-2">
          <ellipse cx="50" cy="50" rx="46" ry="15" stroke={`url(#${wireId})`} transform="rotate(24 50 50)" />
          <circle className="brand-node" r="2.6" transform="rotate(24 50 50) translate(4 50)" />
        </g>

        {/* Wireframe geodesic sphere */}
        <g className="brand-sphere">
          <circle cx="50" cy="50" r="21" stroke={`url(#${wireId})`} />
          <ellipse cx="50" cy="50" rx="21" ry="7" stroke={`url(#${wireId})`} />
          <ellipse cx="50" cy="50" rx="21" ry="7" stroke={`url(#${wireId})`} transform="rotate(60 50 50)" />
          <ellipse cx="50" cy="50" rx="21" ry="7" stroke={`url(#${wireId})`} transform="rotate(120 50 50)" />
        </g>

        {/* Glowing core */}
        <circle className="brand-core" cx="50" cy="50" r="11" fill={`url(#${coreId})`} />

        {/* Twinkling particles */}
        <rect className="brand-particle p1" x="13" y="17" width="3" height="3" />
        <rect className="brand-particle p2" x="83" y="23" width="2.4" height="2.4" />
        <rect className="brand-particle p3" x="19" y="79" width="2.6" height="2.6" />
        <rect className="brand-particle p4" x="80" y="75" width="2" height="2" />
      </svg>

      {withText && (
        <span className="brand-text">
          <span className="brand-name">EMBRA</span>
          <span className="brand-sub">Technologies</span>
        </span>
      )}
    </span>
  );
}
