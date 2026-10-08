import type { Metadata } from 'next'
import { SITE_NAME } from './site'

type ServiceMetaInput = {
  slug: string
  title: string
  description: string
  image?: string
}

export function serviceMetadata({ slug, title, description, image }: ServiceMetaInput): Metadata {
  const url = `/services/${slug}`
  const fullTitle = `${title} | ${SITE_NAME}`
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      url,
      siteName: SITE_NAME,
      title: fullTitle,
      description,
      images: image ? [{ url: image, width: 1400, height: 764 }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: image ? [image] : undefined,
    },
  }
}
