'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import { Footer } from '../components/Sections'

type PlanFeature = {
  text: string
  included: boolean
}

type PlanItem = {
  tag: string
  name: string
  price: string
  periodTop: string
  periodBottom: string
  desc: string
  theme: 'teal' | 'emerald' | 'amber'
  featured: boolean
  ctaLabel?: string
  features: PlanFeature[]
}

const klaviyoPlans: PlanItem[] = [
  {
    tag: 'WELCOME FLOW',
    name: 'STARTER',
    price: '$199',
    periodTop: '3–5 email',
    periodBottom: 'welcome flow',
    desc: 'High-converting 3–5 email Welcome Series built and launched in Klaviyo.',
    theme: 'teal',
    featured: false,
    features: [
      { text: 'Welcome Flow strategy & setup (3–5 emails)', included: true },
      { text: 'Custom on-brand email design & copy', included: true },
      { text: '50+ inbox, Outlook & Dark Mode QA tested', included: true },
      { text: 'Dynamic discount code & trigger integration', included: true },
      { text: 'Abandoned Cart, Browse & Win-Back flows', included: false },
      { text: 'High-converting Sign-Up / Pop-Up form', included: false },
      { text: 'Monthly campaign management & A/B testing', included: false },
    ],
  },
  {
    tag: 'MOST POPULAR',
    name: 'GROWTH',
    price: '$699',
    periodTop: 'one-time',
    periodBottom: 'setup',
    desc: 'Complete revenue-generating Klaviyo automation & core flow architecture.',
    theme: 'emerald',
    featured: true,
    features: [
      { text: 'Welcome Flow strategy & setup (3–5 emails)', included: true },
      { text: 'Core flows (Abandoned Cart, Checkout, Browse, Win-back)', included: true },
      { text: 'Custom on-brand email design & HTML setup', included: true },
      { text: 'High-converting Sign-Up / Pop-Up form', included: true },
      { text: 'Deliverability DNS (SPF, DKIM, DMARC) setup', included: true },
      { text: '30-day post-launch performance optimization', included: true },
      { text: 'Monthly campaign management & A/B testing', included: false },
    ],
  },
  {
    tag: 'FULL-SERVICE',
    name: 'PREMIUM',
    price: '$1,499',
    periodTop: 'per',
    periodBottom: 'month',
    desc: 'Dedicated retention team managing your Klaviyo flows, campaigns & inbox placement.',
    theme: 'amber',
    featured: false,
    features: [
      { text: 'Complete Klaviyo flow buildout & expansion', included: true },
      { text: 'Continuous flow A/B testing & optimization', included: true },
      { text: 'Weekly revenue campaigns & SMS coordination', included: true },
      { text: 'Ongoing Pop-Up form & list growth testing', included: true },
      { text: 'Proactive deliverability & Postmaster monitoring', included: true },
      { text: 'Custom HTML & modular template updates', included: true },
      { text: 'Monthly executive reporting & strategy call', included: true },
    ],
  },
]

const emailDesignPlans: PlanItem[] = [
  {
    tag: 'SINGLE TEMPLATE',
    name: 'STARTER',
    price: '$99',
    periodTop: '1 email',
    periodBottom: 'design + code',
    desc: '1 custom email design, hand-coded HTML development, and full inbox QA testing.',
    theme: 'teal',
    featured: false,
    features: [
      { text: '1 custom Email Design + HTML Development', included: true },
      { text: '50+ inbox, Outlook & Dark Mode QA tested', included: true },
      { text: 'Figma / PSD to bulletproof HTML or custom design', included: true },
      { text: 'Klaviyo, Mailchimp, HubSpot & Marketo ready', included: true },
      { text: '2 revision rounds (24–48h fast delivery)', included: true },
      { text: 'Multi-template bundle discount', included: false },
      { text: 'Full modular master design system library', included: false },
    ],
  },
  {
    tag: 'BEST VALUE · 5 PACK',
    name: 'GROWTH',
    price: '$299',
    periodTop: '5 emails',
    periodBottom: 'design + code',
    desc: '5 custom-designed & hand-coded HTML email templates tested across every inbox.',
    theme: 'emerald',
    featured: true,
    features: [
      { text: '5 custom Email Designs + HTML Development', included: true },
      { text: '50+ inbox, Outlook & Dark Mode QA tested', included: true },
      { text: 'Figma / PSD to bulletproof HTML or custom design', included: true },
      { text: 'Klaviyo, Mailchimp, HubSpot & Marketo ready', included: true },
      { text: 'Reusable modular blocks for future campaigns', included: true },
      { text: 'Save $196 compared to single template rate', included: true },
      { text: 'Full modular master design system library', included: false },
    ],
  },
  {
    tag: 'VOLUME / SYSTEM',
    name: 'CUSTOM',
    price: 'Custom',
    periodTop: 'tailored',
    periodBottom: 'package',
    desc: 'Custom template volume, modular Figma-to-ESP design systems, or monthly campaign packs.',
    theme: 'amber',
    featured: false,
    ctaLabel: 'Contact for Quote →',
    features: [
      { text: '10, 20, or 50+ custom Email Designs & HTML', included: true },
      { text: 'Complete modular Master Template Design System', included: true },
      { text: '50+ inbox, Outlook VML & Dark Mode QA tested', included: true },
      { text: 'Dynamic Liquid / AMPscript personalization code', included: true },
      { text: 'Annotated Figma component library handoff', included: true },
      { text: 'Same-day / 24h priority turnaround SLA', included: true },
      { text: 'Dedicated senior email designer & HTML developer', included: true },
    ],
  },
]

const shopifyPlans: PlanItem[] = [
  {
    tag: 'ONE-TIME BUILD',
    name: 'STARTER',
    price: '$799',
    periodTop: 'one-time',
    periodBottom: 'project',
    desc: 'Fast, conversion-focused Shopify theme setup & customization.',
    theme: 'teal',
    featured: false,
    features: [
      { text: 'Custom OS 2.0 theme setup & styling', included: true },
      { text: 'Up to 10 product & collection templates', included: true },
      { text: 'Mobile-first responsive layout & QA', included: true },
      { text: 'Essential app integrations & speed setup', included: true },
      { text: 'Full platform migration & 301 redirects', included: false },
      { text: 'Bespoke Liquid features & bundle builders', included: false },
      { text: 'Ongoing monthly dev hours & priority support', included: false },
    ],
  },
  {
    tag: 'MOST POPULAR',
    name: 'GROWTH',
    price: '$2,499',
    periodTop: 'one-time',
    periodBottom: 'project',
    desc: 'Complete custom Shopify build or zero-downtime store migration.',
    theme: 'emerald',
    featured: true,
    features: [
      { text: 'Custom OS 2.0 theme setup & styling', included: true },
      { text: 'Unlimited custom page & product templates', included: true },
      { text: 'Mobile-first responsive layout & QA', included: true },
      { text: 'Core Web Vitals & speed optimization', included: true },
      { text: 'Full platform migration & 301 redirects', included: true },
      { text: 'Bespoke Liquid features & slide-out cart', included: true },
      { text: 'Ongoing monthly dev hours & priority support', included: false },
    ],
  },
  {
    tag: 'RETAINER',
    name: 'PARTNER',
    price: '$999',
    periodTop: 'per',
    periodBottom: 'month',
    desc: 'Dedicated senior Shopify engineer on retainer for continuous growth.',
    theme: 'amber',
    featured: false,
    features: [
      { text: 'Ongoing theme updates & new sections', included: true },
      { text: 'Unlimited custom page & product templates', included: true },
      { text: 'Mobile-first responsive layout & QA', included: true },
      { text: 'Monthly Core Web Vitals speed monitoring', included: true },
      { text: 'App bloat cleanup & custom Liquid builds', included: true },
      { text: 'Priority bug fixes & emergency support', included: true },
      { text: 'Monthly CRO & technical strategy call', included: true },
    ],
  },
]

const whiteLabelPlans: PlanItem[] = [
  {
    tag: 'ON-DEMAND OVERFLOW',
    name: 'PER-PROJECT',
    price: 'Custom',
    periodTop: 'partner',
    periodBottom: 'rates',
    desc: 'Ideal for agencies needing fast, reliable Figma-to-HTML or single flow builds on demand.',
    theme: 'teal',
    featured: false,
    ctaLabel: 'Contact for Rates →',
    features: [
      { text: '100% white-label & strict NDA protection', included: true },
      { text: 'Figma-to-HTML email coding & 50+ client QA', included: true },
      { text: 'Single Klaviyo flow or Shopify section sprints', included: true },
      { text: '24–48 hour rapid agency turnaround', included: true },
      { text: 'Dedicated Slack channel with your PMs', included: false },
      { text: 'Multi-client monthly volume discounts', included: false },
      { text: 'Dedicated senior engineer reserved weekly', included: false },
    ],
  },
  {
    tag: 'MOST POPULAR FOR AGENCIES',
    name: 'AGENCY PARTNER',
    price: 'Custom',
    periodTop: 'monthly',
    periodBottom: 'retainer',
    desc: 'Plug our senior Klaviyo & HTML email engineers directly into your agency workflow.',
    theme: 'emerald',
    featured: true,
    ctaLabel: 'Contact Us →',
    features: [
      { text: '100% white-label & strict NDA protection', included: true },
      { text: 'Unlimited Figma-to-Klaviyo HTML template queue', included: true },
      { text: 'Full Klaviyo flow setups & audits for your clients', included: true },
      { text: '24–48 hour rapid agency turnaround', included: true },
      { text: 'Direct integration into your Slack & Asana/ClickUp', included: true },
      { text: 'Wholesale agency margin-friendly pricing', included: true },
      { text: 'Dedicated full-time Shopify + Email pod', included: false },
    ],
  },
  {
    tag: 'FULL CAPACITY',
    name: 'DEDICATED POD',
    price: 'Custom',
    periodTop: 'full-stack',
    periodBottom: 'capacity',
    desc: 'Full-stack Shopify Liquid + Klaviyo engineering pod reserved exclusively for your agency.',
    theme: 'amber',
    featured: false,
    ctaLabel: 'Book Partner Call →',
    features: [
      { text: '100% white-label & strict NDA protection', included: true },
      { text: 'Unlimited Email Design, HTML & Klaviyo builds', included: true },
      { text: 'Custom Shopify OS 2.0 themes & Liquid features', included: true },
      { text: 'Same-day priority agency SLA', included: true },
      { text: 'Direct integration into your Slack & Asana/ClickUp', included: true },
      { text: 'Wholesale agency margin-friendly pricing', included: true },
      { text: 'Dedicated senior Shopify + Klaviyo pod', included: true },
    ],
  },
]

const groups = [
  {
    key: 'klaviyo',
    label: 'Klaviyo Growth',
    sub: 'Automated revenue flows, list segmentation, deliverability, and full-service Klaviyo management.',
    plans: klaviyoPlans,
  },
  {
    key: 'email-design',
    label: 'Email Design',
    sub: 'Pixel-perfect email design, hand-coded HTML development, and 50+ inbox & Dark Mode QA testing.',
    plans: emailDesignPlans,
  },
  {
    key: 'shopify',
    label: 'Shopify Development',
    sub: 'Theme builds, migrations, speed optimization, and ongoing engineering support.',
    plans: shopifyPlans,
  },
  {
    key: 'whitelabel',
    label: 'White-Label',
    sub: 'Silent, NDA-protected overflow fulfillment for US, UK, Canadian & Australian agencies. Contact us for custom partner rates.',
    plans: whiteLabelPlans,
  },
]

export default function PricingPage() {
  const [active, setActive] = useState('klaviyo')
  const activeGroup = groups.find((g) => g.key === active) ?? groups[0]

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '68px' }}>
        <style>{`
          .pricing-stage {
            position: relative;
            background: linear-gradient(180deg, #161d2f 0%, #161d2f 52%, #0a0e17 52%, #0a0e17 100%);
            padding: 84px 0 110px;
            overflow: hidden;
          }
          .pricing-stage::before {
            content: '';
            position: absolute;
            top: -120px;
            left: 50%;
            transform: translateX(-50%);
            width: 820px;
            height: 360px;
            background: radial-gradient(ellipse, rgba(30, 166, 114, 0.18) 0%, transparent 70%);
            pointer-events: none;
          }

          .pricing-header {
            text-align: center;
            max-width: 680px;
            margin: 0 auto 38px;
            position: relative;
            z-index: 2;
          }
          .pricing-header h1 {
            font-size: clamp(34px, 4.4vw, 52px);
            font-weight: 800;
            color: #ffffff;
            letter-spacing: -0.02em;
            margin-bottom: 14px;
          }
          .pricing-header h1 em {
            color: #34d399;
            font-style: normal;
          }
          .pricing-header p {
            font-size: 15.5px;
            color: rgba(255, 255, 255, 0.65);
            line-height: 1.75;
            margin: 0 auto;
          }

          /* Category Switcher Tabs */
          .pricing-tabs {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            gap: 6px;
            margin: 0 auto 20px;
            padding: 6px;
            background: rgba(255, 255, 255, 0.06);
            border: 1px solid rgba(255, 255, 255, 0.12);
            backdrop-filter: blur(12px);
            border-radius: 999px;
            width: fit-content;
            position: relative;
            z-index: 2;
          }
          .pricing-tab {
            padding: 11px 24px;
            border-radius: 999px;
            border: none;
            background: transparent;
            color: rgba(255, 255, 255, 0.7);
            font-size: 14.5px;
            font-weight: 700;
            font-family: inherit;
            cursor: pointer;
            transition: all .2s ease;
            white-space: nowrap;
          }
          .pricing-tab:hover {
            color: #ffffff;
          }
          .pricing-tab.active {
            background: linear-gradient(135deg, #34d399 0%, #1ea672 100%);
            color: #07110d;
            box-shadow: 0 6px 20px rgba(30, 166, 114, 0.35);
          }

          .pricing-group-sub {
            text-align: center;
            color: rgba(255, 255, 255, 0.62);
            font-size: 14.5px;
            max-width: 680px;
            line-height: 1.6;
            margin: 0 auto 48px;
            position: relative;
            z-index: 2;
          }

          /* 3-Column Dark Wave Pricing Grid */
          .pricing-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 28px;
            align-items: stretch;
            max-width: 1100px;
            margin: 0 auto;
            position: relative;
            z-index: 2;
          }

          /* Individual Dark Card */
          .wcard {
            position: relative;
            background: #111622;
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 18px;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            box-shadow: 0 24px 60px rgba(0, 0, 0, 0.55);
            transition: transform .3s cubic-bezier(.22,1,.36,1), box-shadow .3s ease, border-color .3s ease;
          }
          .wcard:hover {
            transform: translateY(-8px);
            box-shadow: 0 32px 72px rgba(0, 0, 0, 0.72);
          }
          .wcard.featured {
            border-color: rgba(52, 211, 153, 0.45);
            box-shadow: 0 28px 68px rgba(16, 185, 129, 0.18);
            transform: translateY(-6px);
          }
          .wcard.featured:hover {
            transform: translateY(-12px);
            box-shadow: 0 36px 80px rgba(16, 185, 129, 0.28);
          }

          /* Top Badge Pill */
          .wcard-badge-row {
            display: flex;
            justify-content: center;
            padding-top: 26px;
            margin-bottom: 10px;
          }
          .wcard-badge {
            font-size: 10px;
            font-weight: 800;
            letter-spacing: 0.14em;
            text-transform: uppercase;
            padding: 4px 12px;
            border-radius: 999px;
            background: rgba(255, 255, 255, 0.06);
            color: rgba(255, 255, 255, 0.65);
            border: 1px solid rgba(255, 255, 255, 0.1);
          }
          .wcard.featured .wcard-badge {
            background: rgba(52, 211, 153, 0.16);
            color: #34d399;
            border-color: rgba(52, 211, 153, 0.4);
          }

          /* Spaced Tier Title */
          .wcard-title {
            text-align: center;
            font-size: 20px;
            font-weight: 500;
            letter-spacing: 0.24em;
            text-transform: uppercase;
            margin: 4px 0 16px;
            padding-left: 0.24em;
          }
          .wcard-teal .wcard-title { color: #5eead4; }
          .wcard-emerald .wcard-title { color: #34d399; }
          .wcard-amber .wcard-title { color: #fbbf24; }

          /* Big Price + Side Stacked Period */
          .wcard-price-wrap {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            margin-bottom: 14px;
          }
          .wcard-price {
            font-family: 'Inter', sans-serif;
            font-size: 50px;
            font-weight: 800;
            line-height: 1;
            letter-spacing: -0.03em;
          }
          .wcard-teal .wcard-price { color: #2dd4bf; }
          .wcard-emerald .wcard-price { color: #34d399; }
          .wcard-amber .wcard-price { color: #fbbf24; }

          .wcard-period {
            display: flex;
            flex-direction: column;
            text-align: left;
            font-size: 12.5px;
            font-weight: 700;
            color: #ffffff;
            line-height: 1.25;
          }
          .wcard-period span:first-child {
            color: rgba(255, 255, 255, 0.65);
            font-weight: 600;
          }

          .wcard-desc {
            text-align: center;
            font-size: 13.5px;
            color: rgba(255, 255, 255, 0.55);
            line-height: 1.6;
            padding: 0 30px;
            margin-bottom: 24px;
            min-height: 44px;
          }

          /* Feature Checklist with Check & Cross Icons */
          .wcard-features {
            list-style: none;
            padding: 0 32px;
            margin: 0 0 18px;
            flex: 1;
            display: flex;
            flex-direction: column;
            gap: 13px;
          }
          .wcard-features li {
            display: flex;
            align-items: flex-start;
            gap: 13px;
            font-size: 13.5px;
            line-height: 1.45;
            color: rgba(255, 255, 255, 0.88);
          }
          .wcard-features li.excluded {
            color: rgba(255, 255, 255, 0.36);
          }
          .wcard-ico-yes,
          .wcard-ico-no {
            flex-shrink: 0;
            width: 18px;
            height: 18px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            margin-top: 1px;
          }

          /* Raised Curved Wave Footer CTA Area so GET STARTED sits 100% inside the solid wave */
          .wcard-wave-footer {
            position: relative;
            margin-top: auto;
            height: 164px;
            display: flex;
            align-items: flex-end;
            justify-content: center;
            text-decoration: none;
            overflow: hidden;
          }
          .wcard-wave-svg {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            display: block;
            pointer-events: none;
          }
          .wcard-cta-label {
            position: relative;
            z-index: 3;
            padding-bottom: 26px;
            font-size: 15.5px;
            font-weight: 800;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            color: #081119;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            transition: transform .2s ease, letter-spacing .2s ease;
          }
          .wcard-wave-footer:hover .wcard-cta-label {
            transform: translateY(-2px);
            letter-spacing: 0.12em;
          }

          /* White-Label Highlight Notice when White-Label tab is active */
          .wl-notice-bar {
            max-width: 1100px;
            margin: 32px auto 0;
            background: linear-gradient(135deg, rgba(30, 166, 114, 0.16) 0%, rgba(15, 22, 35, 0.9) 100%);
            border: 1px solid rgba(52, 211, 153, 0.35);
            border-radius: 18px;
            padding: 28px 34px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 24px;
            flex-wrap: wrap;
            position: relative;
            z-index: 2;
          }
          .wl-notice-bar h4 {
            font-size: 18px;
            font-weight: 800;
            color: #34d399;
            margin: 0 0 6px;
          }
          .wl-notice-bar p {
            font-size: 14px;
            color: rgba(255, 255, 255, 0.78);
            margin: 0;
            line-height: 1.6;
            max-width: 680px;
          }

          /* Bottom Consultation Banner */
          .pricing-bottom-box {
            max-width: 820px;
            margin: 56px auto 0;
            background: rgba(255, 255, 255, 0.04);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 20px;
            padding: 36px 40px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 28px;
            flex-wrap: wrap;
            position: relative;
            z-index: 2;
          }
          .pricing-bottom-box h3 {
            font-size: 20px;
            font-weight: 800;
            color: #ffffff;
            margin: 0 0 6px;
          }
          .pricing-bottom-box p {
            font-size: 14.5px;
            color: rgba(255, 255, 255, 0.65);
            margin: 0;
            line-height: 1.6;
          }

          @media(max-width: 1060px) {
            .pricing-grid {
              grid-template-columns: 1fr;
              max-width: 440px;
            }
            .wcard.featured {
              transform: none;
            }
            .pricing-bottom-box,
            .wl-notice-bar {
              text-align: center;
              justify-content: center;
            }
          }
          @media(max-width: 680px) {
            .pricing-tabs {
              flex-direction: column;
              width: 100%;
              border-radius: 18px;
            }
            .pricing-tab {
              width: 100%;
            }
          }
        `}</style>

        <section className="pricing-stage">
          <div className="wrap">
            <div className="pricing-header" data-reveal="up">
              <h1>Simple &amp; <em>Transparent Pricing</em></h1>
              <p>
                Fixed-scope packages, flexible monthly retainers, and white-label agency partnerships engineered for measurable ROI.
              </p>
            </div>

            <div className="pricing-tabs" role="tablist" data-reveal="fade">
              {groups.map((g) => (
                <button
                  key={g.key}
                  type="button"
                  role="tab"
                  aria-selected={active === g.key}
                  className={`pricing-tab${active === g.key ? ' active' : ''}`}
                  onClick={() => setActive(g.key)}
                >
                  {g.label}
                </button>
              ))}
            </div>

            <p className="pricing-group-sub">{activeGroup.sub}</p>

            <div className="pricing-grid">
              {activeGroup.plans.map((plan, i) => {
                const gradId = `wave-grad-${active}-${plan.theme}-${i}`
                const backFill =
                  plan.theme === 'teal'
                    ? 'rgba(45, 212, 191, 0.18)'
                    : plan.theme === 'emerald'
                      ? 'rgba(52, 211, 153, 0.22)'
                      : 'rgba(251, 191, 36, 0.18)'

                const stopStart =
                  plan.theme === 'teal'
                    ? '#5eead4'
                    : plan.theme === 'emerald'
                      ? '#6ee7b7'
                      : '#fde68a'

                const stopEnd =
                  plan.theme === 'teal'
                    ? '#0d9488'
                    : plan.theme === 'emerald'
                      ? '#1ea672'
                      : '#f59e0b'

                const href =
                  active === 'whitelabel'
                    ? '/?service=whitelabel#contact'
                    : active === 'email-design'
                      ? '/?service=email-design#contact'
                      : active === 'klaviyo'
                        ? '/?service=flow-setup#contact'
                        : '/#contact'

                return (
                  <div
                    key={`${active}-${plan.name}`}
                    className={`wcard wcard-${plan.theme}${plan.featured ? ' featured' : ''}`}
                    data-reveal="up"
                    style={{ transitionDelay: `${i * 90}ms` }}
                  >
                    <div className="wcard-badge-row">
                      <span className="wcard-badge">{plan.tag}</span>
                    </div>

                    <div className="wcard-title">{plan.name}</div>

                    <div className="wcard-price-wrap">
                      <div className="wcard-price">{plan.price}</div>
                      <div className="wcard-period">
                        <span>{plan.periodTop}</span>
                        <span>{plan.periodBottom}</span>
                      </div>
                    </div>

                    <p className="wcard-desc">{plan.desc}</p>

                    <ul className="wcard-features">
                      {plan.features.map((f) => (
                        <li key={f.text} className={f.included ? 'included' : 'excluded'}>
                          {f.included ? (
                            <span className="wcard-ico-yes" aria-hidden="true">
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                            </span>
                          ) : (
                            <span className="wcard-ico-no" aria-hidden="true">
                              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                              </svg>
                            </span>
                          )}
                          <span>{f.text}</span>
                        </li>
                      ))}
                    </ul>

                    <Link href={href} className="wcard-wave-footer">
                      <svg
                        className="wcard-wave-svg"
                        viewBox="0 0 400 164"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                      >
                        <defs>
                          <linearGradient id={gradId} x1="0%" y1="100%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor={stopEnd} />
                            <stop offset="100%" stopColor={stopStart} />
                          </linearGradient>
                        </defs>
                        {/* Raised back secondary shadow wave */}
                        <path
                          d="M0,74 Q210,64 400,6 L400,164 L0,164 Z"
                          fill={backFill}
                        />
                        {/* Raised front vibrant gradient wave */}
                        <path
                          d="M0,90 Q225,80 400,24 L400,164 L0,164 Z"
                          fill={`url(#${gradId})`}
                        />
                      </svg>
                      <span className="wcard-cta-label">{plan.ctaLabel || 'Get Started →'}</span>
                    </Link>
                  </div>
                )
              })}
            </div>

            {active === 'whitelabel' && (
              <div className="wl-notice-bar" data-reveal="up">
                <div>
                  <h4>🤝 Looking for custom White-Label or Agency Overflow pricing?</h4>
                  <p>
                    Every agency has different client volume and turnaround needs. Contact us directly with your monthly email, Klaviyo, or Shopify workload and we&apos;ll send over our wholesale agency rate card within 24 hours.
                  </p>
                </div>
                <Link
                  href="/?service=whitelabel#contact"
                  className="btn-primary"
                  style={{ whiteSpace: 'nowrap' }}
                >
                  Contact for White-Label Rates →
                </Link>
              </div>
            )}

            <div className="pricing-bottom-box" data-reveal="up">
              <div>
                <h3>Not sure which package or retainer fits your goals?</h3>
                <p>Book a free 30-minute discovery call or message us directly—we&apos;ll scope your exact requirements with zero obligation.</p>
              </div>
              <Link href="/#contact" className="btn-primary" style={{ whiteSpace: 'nowrap' }}>
                Contact Us / Book a Call →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
