import type { Metadata } from 'next'
import Navbar from '../../components/Navbar'
import { Footer } from '../../components/Sections'
import { SITE_NAME } from '../../lib/site'
import { luxurySpiritsHtml } from './content'
import './case-study.css'

const slug = '/case-studies/luxury-spirits-growth-case-study'
const title = 'How We Added $438,000/Month in Retention Revenue to a Luxury DTC Brand'
const description = 'How PlusSquire re-engineered an enterprise Shopify store and an 8-stage Klaviyo retention system for a luxury DTC spirits brand, adding $438,000/month in net retention revenue and scaling store revenue from $2.18M to $5.12M/month.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: slug },
  openGraph: { type: 'article', url: slug, siteName: SITE_NAME, title: `${title} | ${SITE_NAME}`, description, images: [{ url: '/og-image.png', width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', title: `${title} | ${SITE_NAME}`, description, images: ['/og-image.png'] },
}

export default function LuxurySpiritsCaseStudyPage() {
  return (
    <>
      <Navbar />
      <div className="lux-cs" dangerouslySetInnerHTML={{ __html: luxurySpiritsHtml }} />
      <Footer />
    </>
  )
}
