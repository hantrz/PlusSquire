import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing — Transparent Shopify, Klaviyo & Email Marketing Packages',
  description:
    'Simple, transparent pricing for custom Shopify theme development, store migrations, Klaviyo flow setups, custom HTML email templates, and monthly retention retainers.',
  alternates: { canonical: '/pricing' },
}

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return children
}
