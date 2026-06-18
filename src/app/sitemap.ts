import type { MetadataRoute } from 'next';

/**
 * Auto-generated sitemap.xml — required by SKILL.md.
 * Next.js serves this at /sitemap.xml at build time.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

  const routes = ['/', '/about', '/experience', '/projects', '/contact'];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: (route === '/' ? 'weekly' : 'monthly') as
      | 'weekly'
      | 'monthly',
    priority: route === '/' ? 1 : 0.8,
  }));
}
