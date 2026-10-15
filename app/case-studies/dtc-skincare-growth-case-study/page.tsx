import type { Metadata } from 'next'
import Navbar from '../../components/Navbar'
import { Footer } from '../../components/Sections'
import { SITE_NAME } from '../../lib/site'
import CaseStudyBody from './CaseStudyBody'
import './case-study.css'

const slug = '/case-studies/dtc-skincare-growth-case-study'
const title = 'How We Scaled a DTC Skincare Brand From $142K to $1.86M/Month'
const description = 'How PlusSquire engineered an end-to-end retention system and Shopify optimization for a high-growth DTC skincare brand, lifting store revenue from $142K to $1.86M/month while scaling email and SMS revenue to $574K+.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: slug },
  openGraph: { type: 'article', url: slug, siteName: SITE_NAME, title: `${title} | ${SITE_NAME}`, description },
  twitter: { card: 'summary_large_image', title: `${title} | ${SITE_NAME}`, description },
}

export default function DtcSkincareCaseStudyPage() {
  return (
    <>
      <Navbar />
      <CaseStudyBody />
      <Footer />
    </>
  )
}
