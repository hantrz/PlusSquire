import type { Metadata } from 'next'
import Navbar from '../../components/Navbar'
import { Footer } from '../../components/Sections'
import { SITE_NAME } from '../../lib/site'
import '../7-day-flash-growth-case-study/case-study.css'

const slug = '/case-studies/dtc-fashion-klaviyo-flows-case-study'
const title = 'How We Drove a 42% Email Revenue Lift & 3.8x Flow ROI for a DTC Fashion Brand'
const description =
  'How PlusSquire rebuilt a DTC fashion brand’s entire Klaviyo automation stack—Welcome Series, Added-to-Cart, Abandoned Checkout, Browse Abandonment, and VIP Post-Purchase flows—achieving a 58% open rate and 42% lift in attributed revenue.'

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
    images: [{ url: '/images/services/flow-setup/hero-flows-autopilot.jpg', width: 1400, height: 764 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${title} | ${SITE_NAME}`,
    description,
    images: ['/images/services/flow-setup/hero-flows-autopilot.jpg'],
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
          <span>DTC Fashion Klaviyo Flow Overhaul</span>
        </div>

        <div class="tag-badge">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
          eCommerce · Klaviyo Lifecycle Architecture
        </div>

        <h1 class="hero-title">
          How PlusSquire Drove a <span class="highlight">+42% Email Revenue Lift</span> &amp; 3.8× Flow ROI for a DTC Fashion Brand
        </h1>

        <p class="hero-sub">
          Replacing default 2-step templates with a 7-flow behavioral lifecycle engine, dynamic size-in-stock blocks, and margin-safe checkout splits that turned Klaviyo into their #1 profit channel.
        </p>

        <div class="hero-meta-strip">
          <div class="meta-chip">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            Client: Women’s Contemporary DTC Apparel Brand
          </div>
          <div class="meta-chip">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            Implementation Window: 21 Days
          </div>
          <div class="meta-chip">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
            Core Result: 58.2% Avg. Flow Open Rate
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
            <span class="stat-label">Attributed Email Revenue Lift</span>
            <strong class="stat-num final-val">+42%</strong>
            <span class="stat-meta">Within 45 Days of Flow Relaunch</span>
          </div>
          <div class="stat-box">
            <span class="stat-label">Automated Flow ROI</span>
            <strong class="stat-num">3.8×</strong>
            <span class="stat-meta">Higher Revenue Per Recipient vs Legacy</span>
          </div>
          <div class="stat-box">
            <span class="stat-label">Average Flow Open Rate</span>
            <strong class="stat-num" style="color:var(--g)">58%</strong>
            <span class="stat-meta">Across All 7 Core Lifecycle Flows</span>
          </div>
        </div>
        <div class="headline-notice">
          <strong>Strategic Insight:</strong> Apparel shoppers abandon carts primarily over fit uncertainty and shipping questions—not just price. By adding dynamic size/fit guides, real customer measurements in UGC blocks, and splitting first-time visitors from repeat VIPs, we lifted checkout recovery without giving away unnecessary discounts.
        </div>
      </section>

      <section class="article-section">
        <h2 class="section-title">The Challenge: High Ad Spend, Leaky Post-Click Retention</h2>
        <p class="lead-p">
          This DTC fashion brand was scaling paid social spend on Meta and TikTok, driving tens of thousands of monthly store visitors—but their Klaviyo account was still running the basic starter templates they set up three years earlier.
        </p>
        <p>
          They had no custom <code>Added to Cart</code> trigger (missing shoppers who added items to the slide-cart without starting checkout), their Welcome Series consisted of a single 10%-off email, and every post-purchase buyer received the exact same generic receipt regardless of whether they spent $48 or $420.
        </p>
      </section>

      <section class="infographic-box">
        <div class="infographic-head">
          <span class="infographic-tag">Visual Infographic 01</span>
          <h3>Flow-by-Flow Revenue Contribution After Rebuild</h3>
          <p>How the 7 rebuilt Klaviyo flows performed across the first 60 days post-launch</p>
        </div>

        <svg class="svg-graphic" viewBox="0 0 800 280" xmlns="http://www.w3.org/2000/svg">
          <rect width="800" height="280" fill="#f8fafc" rx="14" />
          <line x1="70" y1="50" x2="750" y2="50" stroke="#e2e8f0" stroke-dasharray="4 4"/>
          <line x1="70" y1="110" x2="750" y2="110" stroke="#e2e8f0" stroke-dasharray="4 4"/>
          <line x1="70" y1="170" x2="750" y2="170" stroke="#e2e8f0" stroke-dasharray="4 4"/>
          <line x1="70" y1="220" x2="750" y2="220" stroke="#0f1623" stroke-width="1.5"/>

          <rect x="100" y="65" width="85" height="155" rx="6" fill="#1ea672" />
          <text x="142" y="55" fill="#0f1623" font-size="12" font-weight="800" text-anchor="middle">34% Share</text>
          <text x="142" y="242" fill="#0f1623" font-size="12" font-weight="700" text-anchor="middle">Welcome</text>
          <text x="142" y="257" fill="#64748b" font-size="10" text-anchor="middle">4-Part Series</text>

          <rect x="235" y="80" width="85" height="140" rx="6" fill="#2ac98d" />
          <text x="277" y="70" fill="#0f1623" font-size="12" font-weight="800" text-anchor="middle">28% Share</text>
          <text x="277" y="242" fill="#0f1623" font-size="12" font-weight="700" text-anchor="middle">Checkout</text>
          <text x="277" y="257" fill="#64748b" font-size="10" text-anchor="middle">Cart Value Split</text>

          <rect x="370" y="125" width="85" height="95" rx="6" fill="#34d399" />
          <text x="412" y="115" fill="#0f1623" font-size="12" font-weight="800" text-anchor="middle">16% Share</text>
          <text x="412" y="242" fill="#0f1623" font-size="12" font-weight="700" text-anchor="middle">Added-to-Cart</text>
          <text x="412" y="257" fill="#64748b" font-size="10" text-anchor="middle">Custom Trigger</text>

          <rect x="505" y="145" width="85" height="75" rx="6" fill="#6ee7b7" />
          <text x="547" y="135" fill="#0f1623" font-size="12" font-weight="800" text-anchor="middle">12% Share</text>
          <text x="547" y="242" fill="#0f1623" font-size="12" font-weight="700" text-anchor="middle">Browse Aband.</text>
          <text x="547" y="257" fill="#64748b" font-size="10" text-anchor="middle">Category Split</text>

          <rect x="640" y="155" width="85" height="65" rx="6" fill="#1ea672" />
          <text x="682" y="145" fill="#0f1623" font-size="12" font-weight="800" text-anchor="middle">10% Share</text>
          <text x="682" y="242" fill="#0f1623" font-size="12" font-weight="700" text-anchor="middle">Post-Purchase</text>
          <text x="682" y="257" fill="#64748b" font-size="10" text-anchor="middle">VIP &amp; Win-Back</text>
        </svg>
      </section>

      <section class="article-section">
        <h2 class="section-title">What We Built Inside Klaviyo &amp; Shopify</h2>

        <div class="day-step-card">
          <div class="day-top-bar">
            <span class="day-badge">Pillar 01 · Welcome &amp; Zero-Party Fit Quiz</span>
            <span class="day-revenue-tag">61.4% Open Rate</span>
          </div>
          <h3>4-Email Editorial Welcome Journey</h3>
          <p>Upgraded their pop-up to capture style preference in Step 1, then branched the Welcome Series dynamically so dress shoppers saw seasonal dresses while activewear shoppers saw performance sets—coded in crisp, dark-mode-safe HTML.</p>
        </div>

        <div class="day-step-card">
          <div class="day-top-bar">
            <span class="day-badge">Pillar 02 · 3-Tier Abandonment Ladder</span>
            <span class="day-revenue-tag">+114% Cart Recovery</span>
          </div>
          <h3>Browse, Added-to-Cart &amp; Checkout Splits</h3>
          <p>Installed custom Shopify AJAX cart tracking so Klaviyo captured Added-to-Cart events immediately. Built conditional splits at $125 AOV threshold so high-margin carts received free express shipping or tiered gifts rather than blanket percentage discounts.</p>
        </div>

        <div class="day-step-card">
          <div class="day-top-bar">
            <span class="day-badge">Pillar 03 · Post-Purchase Cross-Sell &amp; Sunset</span>
            <span class="day-revenue-tag">+29% Repeat Order Rate</span>
          </div>
          <h3>Automated Lookbook Cross-Sell &amp; List Hygiene</h3>
          <p>Paired every first-time order with a "Complete the Look" dynamic recommendation 14 days post-delivery, while an automated 120-day Sunset Flow kept sender reputation spotless and open rates at 58%.</p>
        </div>
      </section>

      <section class="testimonial-box">
        <div class="testimonial-top-row">
          <div class="stars">★★★★★</div>
          <div class="testimonial-cat">Klaviyo Flow Setup</div>
        </div>
        <blockquote class="testimonial-quote">
          “Zahidul completely transformed our Klaviyo account in three weeks. Our flows look like a luxury fashion magazine on mobile and dark mode, and our automated flow revenue jumped by 42% without discounting our core collection.”
        </blockquote>
        <div class="author-info">
          <div class="author-avatar">ER</div>
          <div>
            <div class="author-name">Elena R.</div>
            <div class="author-role">Head of eCommerce, DTC Fashion Brand</div>
            <div class="author-source">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
              Verified Upwork Client
            </div>
          </div>
        </div>
      </section>

      <section class="cta-banner">
        <h2>Ready to Turn Your Klaviyo Flows Into Your #1 Revenue Channel?</h2>
        <p>
          Book a free 30-minute discovery call or claim a complimentary Klaviyo audit to see what your flows are missing.
        </p>
        <div class="cta-btns">
          <a class="btn-cta-main" href="/?service=flow-setup#contact">Book a Free Discovery Call →</a>
          <a class="btn-cta-alt" href="/services/flow-setup">Explore Klaviyo Flow Setup</a>
        </div>
      </section>
    </div>
  </main>
`

export default function DTCFashionFlowsCaseStudyPage() {
  return (
    <>
      <Navbar />
      <div className="flash-cs" dangerouslySetInnerHTML={{ __html: html }} />
      <Footer />
    </>
  )
}
