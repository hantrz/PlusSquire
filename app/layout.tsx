import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import ScrollReveal from './components/ScrollReveal'
import { ALLOW_INDEXING, SITE_NAME, SITE_URL } from './lib/site'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
})

const defaultTitle = 'PlusSquire: Shopify Engineering, Email Flows & Growth Systems'
const defaultDescription = 'Shopify development and email marketing under one roof: pixel-perfect builds, revenue-driving flows, and growth systems for eCommerce brands ready to scale.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: defaultTitle, template: `%s | ${SITE_NAME}` },
  description: defaultDescription,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: SITE_NAME,
    title: defaultTitle,
    description: defaultDescription,
  },
  twitter: { card: 'summary_large_image', title: defaultTitle, description: defaultDescription },
  // Kept out of search results until ALLOW_INDEXING is switched on (see lib/site.ts).
  robots: ALLOW_INDEXING ? { index: true, follow: true } : { index: false, follow: false },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body>
        {children}
        <ScrollReveal />
      </body>
    </html>
  )
}
