'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import { Footer } from '../components/Sections'
import { ChevronDown } from 'lucide-react'

const categories = [
  {
    key: 'general',
    label: 'General',
    questions: [
      {
        q: 'What does PlusSquire actually do?',
        a: 'We’re a two-in-one team for eCommerce brands: Shopify development on one side (themes, migrations, speed, custom features) and Klaviyo / email marketing on the other (account setup, flows, campaigns, SMS). Most agencies only offer one of these — we handle both so your store and your email program are built to work together.',
      },
      {
        q: 'How is PlusSquire different from a general web agency or freelancer?',
        a: 'We only work in the Shopify + email/SMS marketing space, so every recommendation comes from pattern-matching across dozens of similar stores rather than general web development. You also get one team responsible for both the storefront and the revenue channel that depends on it, instead of coordinating between two separate vendors.',
      },
      {
        q: 'Do you work with brands outside Shopify or Klaviyo?',
        a: 'Our core focus is Shopify and Klaviyo since that’s where we can move fastest and guarantee quality. If you’re on a different platform, reach out and tell us your setup — we can usually still help, especially with migrations onto Shopify or Klaviyo.',
      },
      {
        q: 'How long does a typical project take?',
        a: 'It depends on scope. A single email flow or a landing page tweak can be done in a few days. A full custom theme build or a platform migration usually takes 4–6 weeks. We’ll give you a realistic timeline before any work starts.',
      },
      {
        q: 'Do you offer ongoing support after launch, or is it one-time only?',
        a: 'Both. Every project ends with a clean handover, but most of our clients keep us on a monthly retainer for continued development, campaign management, or reporting — see the Pricing page for our ongoing plans.',
      },
    ],
  },
  {
    key: 'shopify',
    label: 'Shopify Development',
    questions: [
      {
        q: 'Can you build a fully custom Shopify theme from a Figma design?',
        a: 'Yes — pixel-perfect implementation from Figma, PSD, or XD is one of our core services. We build on Shopify’s Online Store 2.0 architecture so your theme stays flexible and easy to update later.',
      },
      {
        q: 'We’re on another platform — can you migrate to Shopify without losing our SEO rankings?',
        a: 'Yes. Migrations include a full URL mapping and 301 redirect plan, metadata and structured data parity, and a pre-launch checklist specifically to protect your existing search rankings and historical data.',
      },
      {
        q: 'Our store feels slow. Can you actually improve our page speed?',
        a: 'In most cases, yes. We audit render-blocking apps, unoptimized images, and bloated theme code, then rebuild the problem areas. We report before/after Core Web Vitals numbers so the improvement is measurable, not just a feeling.',
      },
      {
        q: 'Do you build custom Shopify apps, or only work with existing apps?',
        a: 'Both. We integrate and configure existing apps where they cover your need, and build custom Shopify features or lightweight apps when off-the-shelf options don’t fit — for example a custom product configurator or a unique checkout upsell.',
      },
      {
        q: 'Will my theme still work after Shopify releases updates?',
        a: 'Yes — we build on Shopify’s current theme architecture and standard Liquid conventions rather than hacky workarounds, so your theme stays compatible with platform updates. Clients on a retainer also get proactive fixes if something ever needs adjusting.',
      },
    ],
  },
  {
    key: 'email',
    label: 'Email Marketing & Klaviyo',
    questions: [
      {
        q: 'We already have Klaviyo — can you just audit and optimize it instead of starting over?',
        a: 'Yes, that’s exactly what our Account Audit service is for. We review your existing flows, segments, and deliverability setup, then fix or rebuild only what’s underperforming — no need to tear down what’s already working.',
      },
      {
        q: 'What’s the difference between "Account Setup" and "Flow Setup"?',
        a: 'Account Setup covers the foundation — domain authentication, list structure, branding, and integrations. Flow Setup is the automations built on top of that foundation, like welcome series, abandoned cart, and post-purchase emails. New accounts typically need both; existing accounts often just need flows added or rebuilt.',
      },
      {
        q: 'How many email flows should a store realistically have running?',
        a: 'Most healthy stores run somewhere between 6 and 12 core flows — welcome, abandoned cart, browse abandonment, post-purchase, win-back, and a few list-growth or review-request flows. We’ll recommend a set based on your traffic and product type rather than a one-size-fits-all number.',
      },
      {
        q: 'Do you also handle SMS marketing, or only email?',
        a: 'We handle both. SMS campaigns and flows can be set up alongside your Klaviyo email program, sharing the same segmentation and sign-up data.',
      },
      {
        q: 'Can you write the actual email copy, or do we need to supply that?',
        a: 'We can write it, using your brand voice and product details as a starting point, or work from copy your team already has. Either way you’ll review and approve everything before it goes live.',
      },
    ],
  },
  {
    key: 'pricing',
    label: 'Pricing & Engagement',
    questions: [
      {
        q: 'Are the prices on your Pricing page fixed, or do they change based on scope?',
        a: 'The Pricing page shows realistic starting points for the most common project sizes. Your exact quote depends on scope — number of pages, integrations, or flows involved — which we confirm with you before any work begins.',
      },
      {
        q: 'Do you require a long-term contract?',
        a: 'No. One-time projects are just that — one time. Ongoing retainers are billed monthly and can be paused or cancelled with notice; we don’t lock clients into long fixed terms.',
      },
      {
        q: 'How do payments work — upfront, milestones, or after delivery?',
        a: 'Most one-time projects are split into a deposit to begin and a final payment at delivery; larger builds may include a mid-project milestone. Retainers are billed monthly in advance.',
      },
      {
        q: 'What do you need from us to get started?',
        a: 'Access to your Shopify admin and/or Klaviyo account, any brand assets or design files you already have, and a short call to align on goals. We’ll send a simple checklist once you book a call.',
      },
      {
        q: 'What if we’re not happy with the result?',
        a: 'Every project includes revision rounds before final sign-off, so feedback gets addressed before launch, not after. If something’s still off post-launch, tell us — fixing it is part of the job.',
      },
    ],
  },
]

export default function FAQPage() {
  const [activeCat, setActiveCat] = useState(categories[0].key)
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const activeCategory = categories.find((c) => c.key === activeCat) ?? categories[0]

  const selectCategory = (key: string) => {
    setActiveCat(key)
    setOpenIndex(0)
  }

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '68px' }}>
        <style>{`
          .faq { background: var(--soft); padding: 96px 0; }

          .faq-tag {
            display: inline-flex; flex-direction: column; align-items: center;
            gap: 6px; color: var(--g); font-size: 16px; font-weight: 700;
            text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 14px;
          }
          .faq-tag-bar { width: 40px; height: 2px; background: var(--g); border-radius: 2px; }

          .faq-tabs {
            display: flex; align-items: center; justify-content: center; flex-wrap: wrap;
            gap: 4px; margin: 8px auto 48px; padding: 5px;
            background: #fff; border: 1px solid var(--border); border-radius: 100px;
            width: fit-content; max-width: 100%;
          }
          .faq-tab {
            padding: 11px 22px; border-radius: 100px; border: none; background: transparent;
            color: var(--ink3); font-size: 14.5px; font-weight: 600; font-family: inherit;
            cursor: pointer; transition: background .18s, color .18s; white-space: nowrap;
          }
          .faq-tab:hover { color: var(--ink); }
          .faq-tab.active { background: var(--g); color: #fff; }

          .faq-list {
            max-width: 820px; margin: 0 auto;
            background: #fff; border: 1px solid var(--border); border-radius: 20px;
            overflow: hidden;
          }
          .faq-item { border-bottom: 1px solid var(--border); }
          .faq-item:last-child { border-bottom: none; }
          .faq-q {
            width: 100%; display: flex; align-items: center; justify-content: space-between;
            gap: 16px; text-align: left; background: none; border: none; cursor: pointer;
            padding: 22px 28px; font-family: inherit; font-size: 16px; font-weight: 600;
            color: var(--ink); transition: color .15s;
          }
          .faq-q:hover { color: var(--g); }
          .faq-chevron { flex-shrink: 0; color: var(--ink4); transition: transform .25s ease, color .15s; }
          .faq-item.open .faq-chevron { transform: rotate(180deg); color: var(--g); }

          .faq-a { display: grid; grid-template-rows: 0fr; transition: grid-template-rows .25s ease; }
          .faq-item.open .faq-a { grid-template-rows: 1fr; }
          .faq-a-inner { overflow: hidden; }
          .faq-a-inner p { padding: 0 28px 22px; margin: 0; font-size: 14.5px; color: var(--ink3); line-height: 1.75; }

          .faq-bottom { text-align: center; margin-top: 56px; }
          .faq-bottom p { font-size: 16px; color: var(--ink3); margin-bottom: 24px; }

          @media(max-width:700px){ .faq-tabs { border-radius: 16px; } }
          @media(max-width:600px){
            .faq-q { padding: 18px 20px; font-size: 15px; }
            .faq-a-inner p { padding: 0 20px 18px; }
          }
        `}</style>

        <section className="faq">
          <div className="wrap">
            <div className="sh-row">
              <div className="faq-tag">FAQ<span className="faq-tag-bar" /></div>
              <h2>Questions, <em style={{ color: 'var(--g)', fontStyle: 'normal' }}>answered.</em></h2>
              <p className="section-sub">Everything you need to know before starting a project with PlusSquire.</p>
            </div>

            <div className="faq-tabs" role="tablist">
              {categories.map((c) => (
                <button
                  key={c.key}
                  role="tab"
                  aria-selected={activeCat === c.key}
                  className={`faq-tab${activeCat === c.key ? ' active' : ''}`}
                  onClick={() => selectCategory(c.key)}
                >
                  {c.label}
                </button>
              ))}
            </div>

            <div className="faq-list">
              {activeCategory.questions.map((item, i) => (
                <div key={item.q} className={`faq-item${openIndex === i ? ' open' : ''}`}>
                  <button
                    className="faq-q"
                    aria-expanded={openIndex === i}
                    onClick={() => toggle(i)}
                  >
                    {item.q}
                    <ChevronDown size={18} className="faq-chevron" />
                  </button>
                  <div className="faq-a">
                    <div className="faq-a-inner">
                      <p>{item.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="faq-bottom">
              <p>Still have a question we didn&apos;t cover?</p>
              <Link href="/#contact" className="btn-primary">Book a Free Call →</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
