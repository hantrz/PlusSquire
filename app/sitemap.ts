import type { MetadataRoute } from 'next'
import { SERVICES, SITE_URL } from './lib/site'
import { INSIGHTS } from './lib/insights'

const staticRoutes = ['', '/about', '/services', '/portfolio', '/insights', '/pricing', '/faq', '/case-studies', '/case-studies/dtc-skincare-growth-case-study', '/case-studies/luxury-spirits-growth-case-study', '/case-studies/7-day-flash-growth-case-study', '/privacy', '/terms']

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
    ...INSIGHTS.map((ins) => ({
      url: `${SITE_URL}/insights/${ins.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.75,
    })),
  ]
}
