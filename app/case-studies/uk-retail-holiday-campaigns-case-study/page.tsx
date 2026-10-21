import type { Metadata } from 'next'
import Navbar from '../../components/Navbar'
import { Footer } from '../../components/Sections'
import { SITE_NAME } from '../../lib/site'
import '../7-day-flash-growth-case-study/case-study.css'

const slug = '/case-studies/uk-retail-holiday-campaigns-case-study'
const title = 'How 8 Holiday Email Campaigns Generated £92,400 for a Multi-Store UK Retail Brand'
const description =
  'How PlusSquire planned, designed, hand-coded, and deployed 8 Q4 holiday campaigns across Black Friday, Christmas Gifting, and Boxing Day for a UK retail brand, achieving a 4.2% average CTR and £92.4K in attributed sales.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: slug },
  openGraph: {
    type: 'article',
    url: slug,
    siteName: SITE_NAME,
    title: `${title} | ${SITE_NAME}`,
    description,
    images: [{ url: '/images/services/email-design/hero-pixel-perfect.jpg', width: 1400, height: 764 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${title} | ${SITE_NAME}`,
    description,
    images: ['/images/services/email-design/hero-pixel-perfect.jpg'],
  },
}

const html = String.raw`
  <header class="hero">
    <div class="container">
      <div class="content-container">
        <div class="breadcrumbs">
          <a href="/">Home</a>
          <span>/</span>
          <a href="/case-studies">Case Studies</a>
          <span>/</span>
          <span>UK Retail Q4 Holiday Campaign Series</span>
        </div>

        <div class="tag-badge">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
          Retail · Q4 Seasonal Campaign Strategy, Design &amp; Deployment
        </div>

        <h1 class="hero-title">
          How 8 Holiday Campaigns Generated <span class="highlight">£92,400 in Q4 Revenue</span> for a UK Retail Brand
        </h1>

        <p class="hero-sub">
          Combining pre-season deliverability warm-up, price-tier gift guides, and lightweight mobile-first HTML emails across Black Friday, Christmas shipping cutoffs, and New Year clearance.
        </p>

        <div class="hero-meta-strip">
          <div class="meta-chip">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            Client: Heritage UK Home &amp; Lifestyle Retailer
          </div>
          <div class="meta-chip">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            Scope: 8 Custom Campaigns (Nov – Dec)
          </div>
          <div class="meta-chip">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
            Average Click-Through Rate: 4.2%
          </div>
        </div>
      </div>
    </div>
  </header>

  <main class="container">
    <div class="content-container">
      <section class="headline-card">
        <div class="headline-grid">
          <div class="stat-box">
            <span class="stat-label">Attributed Holiday Revenue</span>
            <strong class="stat-num final-val">£92.4K</strong>
            <span class="stat-meta">Generated Across 8 Segmented Sends</span>
          </div>
          <div class="stat-box">
            <span class="stat-label">Average Click-Through Rate</span>
            <strong class="stat-num">4.2%</strong>
            <span class="stat-meta">2.4× Above Previous Q4 Benchmark</span>
          </div>
          <div class="stat-box">
            <span class="stat-label">Gmail Clipping Incidents</span>
            <strong class="stat-num" style="color:var(--g)">0</strong>
            <span class="stat-meta">Every Email Engineered Under 65 KB HTML</span>
          </div>
        </div>
        <div class="headline-notice">
          <strong>Merchandising Insight:</strong> During December, shoppers aren’t browsing for themselves—they are shopping by budget and recipient ("Gifts Under £30", "Gifts for Him", "Last-Minute Stocking Fillers"). Structuring emails around 1-tap price-tier gift grids doubled click-to-purchase conversion.
        </div>
      </section>

      <section class="article-section">
        <h2 class="section-title">The 8-Campaign Q4 Playbook</h2>

        <div class="day-step-card">
          <div class="day-top-bar">
            <span class="day-badge">Campaigns 01–03 · Black Friday &amp; Cyber Weekend</span>
            <span class="day-revenue-tag">£41,800</span>
          </div>
          <h3>VIP Early Access, Black Friday Main Drop &amp; Cyber Monday Plain-Text Note</h3>
          <p>Opened the sale 24 hours early for VIPs, followed by a visual hero showcase on Black Friday morning and a personal plain-text reminder from the founder on Cyber Monday evening to non-purchasers who had clicked earlier in the weekend.</p>
        </div>

        <div class="day-step-card">
          <div class="day-top-bar">
            <span class="day-badge">Campaigns 04–06 · Curated Christmas Gift Guides</span>
            <span class="day-revenue-tag">£31,200</span>
          </div>
          <h3>Price-Tiered Merchandising &amp; Royal Mail Cutoff Urgency</h3>
          <p>Designed mobile-first gift grids segmented by price point (Under £25, Under £50, Luxury Hampers) and concluded with a countdown campaign 48 hours before the final UK pre-Christmas guaranteed delivery cutoff.</p>
        </div>

        <div class="day-step-card">
          <div class="day-top-bar">
            <span class="day-badge">Campaigns 07–08 · Boxing Day &amp; New Year VIP Clearance</span>
            <span class="day-revenue-tag">£19,400</span>
          </div>
          <h3>Dynamic Category Personalization</h3>
          <p>Used Klaviyo conditional blocks to show each subscriber clearance items from the exact product category they had browsed during November and December.</p>
        </div>
      </section>

      <section class="testimonial-box">
        <div class="testimonial-top-row">
          <div class="stars">★★★★★</div>
          <div class="testimonial-cat">Email Design &amp; Campaigns</div>
        </div>
        <blockquote class="testimonial-quote">
          “PlusSquire took the entire stress of Q4 off our shoulders. Every single campaign was written, designed, hand-coded, and scheduled ahead of deadline, and £92K from eight emails broke our holiday record.”
        </blockquote>
        <div class="author-info">
          <div class="author-avatar">HC</div>
          <div>
            <div class="author-name">Hannah C.</div>
            <div class="author-role">Marketing Director, UK Retail Brand</div>
            <div class="author-source">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
              Verified Upwork Client
            </div>
          </div>
        </div>
      </section>

      <section class="cta-banner">
        <h2>Want High-Converting Email Campaigns Planned, Designed &amp; Sent For You?</h2>
        <p>
          Book a free discovery call to plan your next seasonal launch or monthly campaign calendar with PlusSquire.
        </p>
        <div class="cta-btns">
          <a class="btn-cta-main" href="/?service=email-campaigns#contact">Book a Free Discovery Call →</a>
          <a class="btn-cta-alt" href="/services/email-campaigns">Explore Email Campaign Management</a>
        </div>
      </section>
    </div>
  </main>
`

export default function UKRetailCaseStudyPage() {
  return (
    <>
      <Navbar />
      <div className="flash-cs" dangerouslySetInnerHTML={{ __html: html }} />
      <Footer />
    </>
  )
}
