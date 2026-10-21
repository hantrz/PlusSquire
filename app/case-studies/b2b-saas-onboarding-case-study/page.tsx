import type { Metadata } from 'next'
import Navbar from '../../components/Navbar'
import { Footer } from '../../components/Sections'
import { SITE_NAME } from '../../lib/site'
import '../7-day-flash-growth-case-study/case-study.css'

const slug = '/case-studies/b2b-saas-onboarding-case-study'
const title = 'How Custom HTML Onboarding Flows Cut 30-Day Churn by 28% for a B2B SaaS Platform'
const description =
  'How PlusSquire redesigned and hand-coded a 12-email behavioral onboarding sequence in HubSpot for a B2B SaaS platform, lifting trial-to-paid activation by 61% and cutting 30-day churn by 28%.'

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
    images: [{ url: '/images/services/email-development/hero-code-renders.jpg', width: 1400, height: 764 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${title} | ${SITE_NAME}`,
    description,
    images: ['/images/services/email-development/hero-code-renders.jpg'],
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
          <span>B2B SaaS HubSpot &amp; HTML Onboarding</span>
        </div>

        <div class="tag-badge">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
          SaaS · HubSpot Automation &amp; Bulletproof HTML Development
        </div>

        <h1 class="hero-title">
          How Custom HTML Onboarding Flows <span class="highlight">Cut 30-Day Churn by 28%</span> &amp; Lifted Activation by 61%
        </h1>

        <p class="hero-sub">
          Re-engineering a broken 12-email B2B SaaS onboarding sequence with milestone-triggered HubSpot workflows and Outlook-proof HTML templates.
        </p>

        <div class="hero-meta-strip">
          <div class="meta-chip">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            Client: B2B Workflow &amp; Analytics SaaS
          </div>
          <div class="meta-chip">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            Platform: HubSpot + Custom HTML/CSS
          </div>
          <div class="meta-chip">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
            QA Tested: 90+ Clients Including Desktop Outlook
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
            <span class="stat-label">30-Day Customer Churn</span>
            <strong class="stat-num final-val">−28%</strong>
            <span class="stat-meta">Reduction in Early Trial &amp; Month-1 Dropoff</span>
          </div>
          <div class="stat-box">
            <span class="stat-label">Feature Activation Rate</span>
            <strong class="stat-num">+61%</strong>
            <span class="stat-meta">Users Completing Core Setup Within 72 Hrs</span>
          </div>
          <div class="stat-box">
            <span class="stat-label">Outlook Render Accuracy</span>
            <strong class="stat-num" style="color:var(--g)">100%</strong>
            <span class="stat-meta">Across Outlook 2016/2019/365 &amp; Dark Mode</span>
          </div>
        </div>
        <div class="headline-notice">
          <strong>Technical Insight:</strong> Over 65% of B2B SaaS buyers open onboarding emails inside corporate Microsoft Outlook on Windows—where standard drag-and-drop emails suffer from broken columns, missing padding, and stripped buttons. By hand-coding MSO conditional ghost tables and VML bulletproof CTAs, click-through rates jumped immediately.
        </div>
      </section>

      <section class="article-section">
        <h2 class="section-title">The Problem: Time-Based Drip Emails That Ignored User Behavior</h2>
        <p class="lead-p">
          When new teams signed up for a 14-day trial of this B2B SaaS platform, they received a rigid time-based drip email every 48 hours—even if they had already completed the exact setup step the email was nagging them about, or worse, if they were stuck on Step 1.
        </p>
        <p>
          Additionally, their visual templates were built in a generic drag-and-drop editor that broke badly inside corporate Outlook desktop clients and dark mode, hurting brand credibility with enterprise buyers.
        </p>
      </section>

      <section class="article-section">
        <h2 class="section-title">The 3-Stage Onboarding Overhaul</h2>

        <div class="day-step-card">
          <div class="day-top-bar">
            <span class="day-badge">Stage 01 · Behavioral Milestone Triggers</span>
            <span class="day-revenue-tag">+61% Activation</span>
          </div>
          <h3>Event-Driven HubSpot Workflow Architecture</h3>
          <p>Replaced the static 14-day calendar drip with behavioral branches tied to product events: Workspace Created, First Integration Connected, Teammate Invited, and First Report Exported. Users only received nudges for the exact milestone they hadn’t completed yet.</p>
        </div>

        <div class="day-step-card">
          <div class="day-top-bar">
            <span class="day-badge">Stage 02 · Hand-Coded Modular HTML System</span>
            <span class="day-revenue-tag">100% Outlook QA</span>
          </div>
          <h3>Bulletproof Enterprise HTML &amp; Dark-Mode Engineering</h3>
          <p>Hand-coded 12 responsive HTML templates with MSO conditional statements, VML rounded buttons, live HTML typography, and dark-mode meta schemes—verified across 90+ devices in Litmus.</p>
        </div>

        <div class="day-step-card">
          <div class="day-top-bar">
            <span class="day-badge">Stage 03 · At-Risk Usage Intervention</span>
            <span class="day-revenue-tag">−28% Early Churn</span>
          </div>
          <h3>Automated Concierge Onboarding Call Trigger</h3>
          <p>If a trial account showed zero login activity for 96 hours, HubSpot automatically triggered a plain-text personal check-in from their Customer Success lead with a 1-click Calendly link to finish setup together.</p>
        </div>
      </section>

      <section class="testimonial-box">
        <div class="testimonial-top-row">
          <div class="stars">★★★★★</div>
          <div class="testimonial-cat">HTML Email &amp; Automation</div>
        </div>
        <blockquote class="testimonial-quote">
          “Our enterprise clients use desktop Outlook almost exclusively, and our old templates looked terrible. Zahidul hand-coded a modular HubSpot template library that renders pixel-perfect everywhere and restructured our 12-part onboarding journey. Trial activation is up 61%.”
        </blockquote>
        <div class="author-info">
          <div class="author-avatar">DM</div>
          <div>
            <div class="author-name">David M.</div>
            <div class="author-role">VP of Growth, B2B Analytics SaaS</div>
            <div class="author-source">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
              Verified Upwork Client
            </div>
          </div>
        </div>
      </section>

      <section class="cta-banner">
        <h2>Need Bulletproof HTML Emails &amp; Lifecycle Automations?</h2>
        <p>
          Whether you run on Klaviyo, HubSpot, Mailchimp, or Customer.io, we design, code, and automate sequences that convert.
        </p>
        <div class="cta-btns">
          <a class="btn-cta-main" href="/?service=email-development#contact">Book a Free Discovery Call →</a>
          <a class="btn-cta-alt" href="/services/email-development">Explore HTML Email Development</a>
        </div>
      </section>
    </div>
  </main>
`

export default function B2BSaaSCaseStudyPage() {
  return (
    <>
      <Navbar />
      <div className="flash-cs" dangerouslySetInnerHTML={{ __html: html }} />
      <Footer />
    </>
  )
}
