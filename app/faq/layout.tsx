import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions — Shopify, Klaviyo & Email Marketing',
  description:
    'Find clear answers to 80+ questions covering PlusSquire’s onboarding, pricing, Shopify development, migrations, speed optimization, Klaviyo flows, email deliverability, and HTML email coding.',
  alternates: { canonical: '/faq' },
}

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return children
}
