import type { Metadata } from 'next'
import Navbar from '../../components/Navbar'
import { Footer } from '../../components/Sections'
import { SITE_NAME } from '../../lib/site'
import { flashSaleHtml } from './content'
import './case-study.css'

const slug = '/case-studies/7-day-flash-growth-case-study'
const title = 'How We Generated $84,320 in 7 Days for a DTC Apparel Brand'
const description = 'How PlusSquire ran a synchronized 7-day email and SMS flash campaign with dynamic buyer suppression and Shopify slide-cart tier unlocks, generating $84,320 in attributed revenue and a 34.2% lift in weekly store sales.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: slug },
  openGraph: { type: 'article', url: slug, siteName: SITE_NAME, title: `${title} | ${SITE_NAME}`, description },
  twitter: { card: 'summary_large_image', title: `${title} | ${SITE_NAME}`, description },
}

export default function FlashSaleCaseStudyPage() {
  return (
    <>
      <Navbar />
      <div className="flash-cs" dangerouslySetInnerHTML={{ __html: flashSaleHtml }} />
      <Footer />
    </>
  )
}
