/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: process.env.BUILD_DIR || '.next',

  // ── Image Optimization ──────────────────────────────────────────
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 2592000, // 30 days
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // DENY matches the CSP below (frame-ancestors 'none'), which modern browsers already enforce.
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://vercel.live https://va.vercel-scripts.com",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: blob: https:",
              "font-src 'self'",
              "connect-src 'self' https://api.axiom.co https://formsubmit.co https://vitals.vercel-insights.com https://va.vercel-scripts.com",
              "frame-ancestors 'none'",
              "form-action 'self' https://formsubmit.co",
              "base-uri 'self'",
            ].join('; '),
          },
        ],
      },
      // ── Cache static assets aggressively ──
      {
        source: '/images/(.*)',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
    ];
  },

  async redirects() {
    return [
      {
        source: '/portfolio/skyhightreeservice',
        destination: '/portfolio/sky-high-tree',
        permanent: true,
      },
      {
        source: '/care-plan',
        destination: '/services/care-plan',
        permanent: true,
      },
      {
        source: '/web-design-for-handyman-businesses',
        destination: '/niches/web-design-for-handyman-businesses',
        permanent: true,
      },
      {
        source: '/tree-service-website-design',
        destination: '/niches/tree-service-website-design',
        permanent: true,
      },
      {
        source: '/auto-body-shop-website-design',
        destination: '/niches/auto-body-shop-website-design',
        permanent: true,
      },
      {
        source: '/landscaping-website-design',
        destination: '/niches/landscaping-website-design',
        permanent: true,
      },
      {
        source: '/plumber-website-design',
        destination: '/niches/plumber-website-design',
        permanent: true,
      },
      {
        source: '/hvac-website-design',
        destination: '/niches/hvac-website-design',
        permanent: true,
      },
      {
        source: '/roofing-website-design',
        destination: '/niches/roofing-website-design',
        permanent: true,
      },
      {
        source: '/locations/web-design-for-handyman-businesses',
        destination: '/niches/web-design-for-handyman-businesses',
        permanent: true,
      },
      {
        source: '/locations/tree-service-website-design',
        destination: '/niches/tree-service-website-design',
        permanent: true,
      },
      {
        source: '/locations/auto-body-shop-website-design',
        destination: '/niches/auto-body-shop-website-design',
        permanent: true,
      },
      {
        source: '/locations/landscaping-website-design',
        destination: '/niches/landscaping-website-design',
        permanent: true,
      },
      {
        source: '/locations/plumber-website-design',
        destination: '/niches/plumber-website-design',
        permanent: true,
      },
      {
        source: '/locations/hvac-website-design',
        destination: '/niches/hvac-website-design',
        permanent: true,
      },
      {
        source: '/locations/roofing-website-design',
        destination: '/niches/roofing-website-design',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
