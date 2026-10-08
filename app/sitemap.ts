import type { MetadataRoute } from 'next'
import { SERVICES, SITE_URL } from './lib/site'

// About, Insights and Portfolio are left out until they have real content.
const staticRoutes = ['', '/services', '/pricing', '/faq', '/case-studies', '/privacy', '/terms']

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return [
    ...staticRoutes.map((path) => ({
      url: `${SITE_URL}${path}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: path === '' ? 1 : 0.7,
    })),
    ...SERVICES.map((s) => ({
      url: `${SITE_URL}/services/${s.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ]
}
