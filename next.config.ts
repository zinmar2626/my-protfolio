import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Image optimization — AVIF/WebP formats (SKILL.md §Image Optimization)
  images: {
    formats: ['image/avif', 'image/webp'],
  },

  // Security & caching headers
  headers: async () => [
    // Static assets with content hash — cache for 1 year (SKILL.md §Caching)
    {
      source: '/_next/static/(.*)',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable',
        },
      ],
    },
    // Public assets (fonts, images, etc.)
    {
      source: '/(.*\\.(?:woff2?|ttf|otf|png|jpe?g|webp|avif|svg|ico))',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable',
        },
      ],
    },
    // Security headers for all routes
    {
      source: '/(.*)',
      headers: [
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
        {
          key: 'X-Frame-Options',
          value: 'DENY',
        },
        {
          key: 'Referrer-Policy',
          value: 'strict-origin-when-cross-origin',
        },
        {
          key: 'X-DNS-Prefetch-Control',
          value: 'on',
        },
        {
          key: 'Strict-Transport-Security',
          value: 'max-age=63072000; includeSubDomains; preload',
        },
      ],
    },
  ],
};

export default nextConfig;
