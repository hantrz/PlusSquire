import type { MetadataRoute } from 'next'
import { ALLOW_INDEXING, SITE_URL } from './lib/site'

// Crawling stays allowed so search engines can read the "noindex" tag set in
// layout.tsx while ALLOW_INDEXING is off. Once it is on, the sitemap is listed.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: ALLOW_INDEXING ? `${SITE_URL}/sitemap.xml` : undefined,
    host: SITE_URL,
  }
}
