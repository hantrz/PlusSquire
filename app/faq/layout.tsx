import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Answers to common questions about working with PlusSquire on Shopify development, Klaviyo and email marketing, timelines, pricing and support.',
  alternates: { canonical: '/faq' },
}

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return children
}
