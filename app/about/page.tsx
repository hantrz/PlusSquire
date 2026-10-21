import Navbar from '../components/Navbar'
import { About, StatsBar, Footer } from '../components/Sections'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us — Led by Zahidul Islam (13+ Yrs Klaviyo & Shopify Expert)',
  description:
    'Meet Zahidul Islam and the PlusSquire team: 13+ years of Klaviyo email marketing, custom HTML email development, and Shopify engineering with 800+ projects delivered and 100% Job Success on Upwork.',
  alternates: { canonical: '/about' },
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '68px' }}>
        <style>{`
          .abt-hero {
            padding: 64px 0 56px;
            background:
              radial-gradient(ellipse at top left, rgba(30, 166, 114, 0.14) 0%, transparent 60%),
              radial-gradient(ellipse at bottom right, rgba(30, 166, 114, 0.14) 0%, transparent 60%),
              #ffffff;
          }
        `}</style>
        <section className="abt-hero">
          <div className="wrap">
            <div className="sh-row" style={{ marginBottom: 0 }} data-reveal="up">
              <h1 style={{ fontSize: 'clamp(36px,4.5vw,56px)' }}>The story <em style={{ color: 'var(--g)', fontStyle: 'normal' }}>behind PlusSquire.</em></h1>
              <p className="section-sub">The experience, the numbers, and the person behind every project.</p>
            </div>
          </div>
        </section>
        <About />
        <StatsBar />
      </main>
      <Footer />
    </>
  )
}
