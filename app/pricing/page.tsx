'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import { Footer } from '../components/Sections'

const shopifyPlans = [
  {
    tag: 'ONE-TIME',
    name: 'Shopify Starter',
    price: '$799',
    period: '',
    desc: 'For brands that need a conversion-focused theme set up and customized fast.',
    features: [
      'Custom theme setup & customization',
      'Up to 10 product/collection pages',
      'Mobile-optimized, on-brand design',
      'Basic app integrations',
      'Delivered in 2–3 weeks',
    ],
    featured: false,
  },
  {
    tag: 'MOST POPULAR',
    name: 'Shopify Growth',
    price: '$2,499',
    period: '',
    desc: 'A full custom build or migration for brands ready to launch or switch platforms.',
    features: [
      'Full custom theme development',
      'Migration from your current platform (if any)',
      'Speed & Core Web Vitals optimization',
      'App integrations & custom features',
      'Post-launch QA across devices',
      'Delivered in 4–6 weeks',
    ],
    featured: true,
  },
  {
    tag: 'ONGOING',
    name: 'Shopify Partner',
    price: '$999',
    period: '/mo',
    desc: 'A dedicated Shopify dev on retainer for stores that keep shipping new features.',
    features: [
      'Ongoing theme updates & feature requests',
      'Performance monitoring',
      'App management & troubleshooting',
      'Priority bug fixes',
      'Monthly strategy call',
    ],
    featured: false,
  },
]

const emailPlans = [
  {
    tag: 'ONE-TIME',
    name: 'Starter',
    price: '$199',
    period: '',
    desc: 'Perfect for brands that need a single high-quality email or template built fast.',
    features: [
      '1 custom HTML email design',
      'Cross-client rendering tested',
      'Figma / PSD to HTML conversion',
      '2 revision rounds',
      'Delivered in 3–5 days',
    ],
    featured: false,
  },
  {
    tag: 'MOST POPULAR',
    name: 'Growth',
    price: '$799',
    period: '',
    desc: 'For eCommerce brands ready to build a revenue-generating email program.',
    features: [
      'Full Klaviyo flow setup (welcome, abandoned cart, post-purchase)',
      'Email design and HTML development',
      'List segmentation strategy',
      'Performance review after 30 days',
      'Delivered in 7–10 days',
    ],
    featured: true,
  },
  {
    tag: 'ONGOING',
    name: 'Full-Service',
    price: '$1,499',
    period: '/mo',
    desc: 'A dedicated email team for brands that want consistent results every month.',
    features: [
      'Monthly campaign design and deployment',
      'Flow management and optimization',
      'A/B testing and reporting',
      'SMS campaigns (optional add-on)',
      'Priority support',
    ],
    featured: false,
  },
]

const groups = [
  { key: 'shopify', label: 'Shopify Development', sub: 'Theme builds, migrations, speed, and ongoing support.', plans: shopifyPlans },
  { key: 'email', label: 'Email Marketing', sub: 'Design, development, flows, and full-service management.', plans: emailPlans },
]

export default function PricingPage() {
  const [active, setActive] = useState('shopify')
  const activeGroup = groups.find((g) => g.key === active) ?? groups[0]

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '68px' }}>
        <style>{`
          .pricing-hero {
            padding: 64px 0 56px;
            background:
              radial-gradient(ellipse at top left, rgba(30, 166, 114, 0.14) 0%, transparent 60%),
              radial-gradient(ellipse at bottom right, rgba(30, 166, 114, 0.14) 0%, transparent 60%),
              #ffffff;
          }
          .pricing { background: var(--soft); padding: 56px 0 96px; }

          /* Section label */
          .pricing-tag {
            display: inline-flex; flex-direction: column; align-items: center;
            gap: 6px; color: var(--g); font-size: 16px; font-weight: 700;
            text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 14px;
          }
          .pricing-tag-bar { width: 40px; height: 2px; background: var(--g); border-radius: 2px; }

          /* Tab toggle */
          .pricing-tabs {
            display: flex; align-items: center; justify-content: center;
            gap: 4px; margin: 8px auto 48px; padding: 5px;
            background: #fff; border: 1px solid var(--border); border-radius: 100px;
            width: fit-content;
          }
          .pricing-tab {
            padding: 11px 26px; border-radius: 100px; border: none; background: transparent;
            color: var(--ink3); font-size: 15px; font-weight: 600; font-family: inherit;
            cursor: pointer; transition: background .18s, color .18s; white-space: nowrap;
          }
          .pricing-tab:hover { color: var(--ink); }
          .pricing-tab.active { background: var(--g); color: #fff; }
          @media(max-width:480px){ .pricing-tabs { flex-direction: column; width: 100%; border-radius: 16px; } .pricing-tab { width: 100%; } }

          /* Grid */
          .pricing-grid {
            display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;
            align-items: stretch;
          }

          /* Card */
          .pricing-card {
            background: #fff; border: 1px solid var(--border); border-radius: 20px;
            padding: 40px 36px; display: flex; flex-direction: column;
            transition: box-shadow .22s, transform .22s;
          }
          .pricing-card:hover { box-shadow: 0 14px 40px rgba(0,0,0,.08); transform: translateY(-3px); }

          .pricing-card.featured {
            border: 2px solid var(--g);
            box-shadow: 0 8px 32px rgba(30,166,114,.15);
          }
          .pricing-card.featured:hover { box-shadow: 0 16px 48px rgba(30,166,114,.22); }

          /* Tag pill */
          .plan-tag {
            display: inline-block; background: var(--gl); color: var(--gd);
            font-size: 11px; font-weight: 700; letter-spacing: .08em;
            text-transform: uppercase; padding: 4px 11px; border-radius: 4px;
            margin-bottom: 20px; align-self: flex-start;
          }
          .pricing-card.featured .plan-tag {
            background: var(--g); color: #fff;
          }

          /* Name & price */
          .plan-name { font-size: 22px; font-weight: 700; color: var(--ink); margin-bottom: 8px; }
          .plan-from { font-size: 12px; color: var(--ink4); text-transform: uppercase; letter-spacing: .06em; margin-bottom: 4px; }
          .plan-price {
            font-family: 'Inter', sans-serif; font-size: 48px; font-weight: 800;
            color: var(--ink); line-height: 1; margin-bottom: 6px;
          }
          .plan-price span { font-size: 18px; font-weight: 500; color: var(--ink3); }
          .plan-desc { font-size: 14px; color: var(--ink3); line-height: 1.7; margin: 18px 0 28px; }

          /* Divider */
          .plan-divider { height: 1px; background: var(--border); margin-bottom: 24px; }

          /* Feature list */
          .plan-features { list-style: none; flex: 1; margin-bottom: 32px; }
          .plan-features li {
            display: flex; align-items: flex-start; gap: 10px;
            font-size: 14px; color: var(--ink2); line-height: 1.55; padding: 7px 0;
            border-bottom: 1px solid var(--border);
          }
          .plan-features li:last-child { border-bottom: none; }
          .plan-check {
            width: 20px; height: 20px; border-radius: 50%; background: var(--gl);
            color: var(--g); display: flex; align-items: center; justify-content: center;
            font-size: 10px; font-weight: 700; flex-shrink: 0; margin-top: 1px;
          }
          .pricing-card.featured .plan-check { background: var(--g); color: #fff; }

          /* CTA buttons */
          .btn-plan-outline {
            display: block; text-align: center; padding: 13px 24px; border-radius: 9px;
            border: 1.5px solid var(--g); color: var(--g); font-size: 15px; font-weight: 700;
            text-decoration: none; transition: background .18s, color .18s;
          }
          .btn-plan-outline:hover { background: var(--gl); }
          .btn-plan-fill {
            display: block; text-align: center; padding: 13px 24px; border-radius: 9px;
            background: var(--g); color: #fff; font-size: 15px; font-weight: 700;
            text-decoration: none; transition: background .18s, transform .18s;
          }
          .btn-plan-fill:hover { background: var(--gd); transform: translateY(-1px); }

          /* Bottom CTA */
          .pricing-bottom {
            text-align: center; margin-top: 64px;
          }
          .pricing-bottom p {
            font-size: 16px; color: var(--ink3); line-height: 1.7; margin-bottom: 24px;
          }

          .pricing-group-sub { text-align: center; color: var(--ink3); font-size: 15px; margin: -28px 0 40px; }

          @media(max-width:1100px){ .pricing-grid { grid-template-columns: 1fr; max-width: 520px; margin: 0 auto; } }
        `}</style>

        <section className="pricing-hero">
          <div className="wrap">
            <div className="sh-row" style={{ marginBottom: 0 }}>
              <div className="pricing-tag">Pricing<span className="pricing-tag-bar" /></div>
              <h1 style={{ fontSize: 'clamp(36px,4.5vw,56px)' }}>Simple, <em style={{ color: 'var(--g)', fontStyle: 'normal' }}>transparent pricing.</em></h1>
              <p className="section-sub">Every project is different. Here&apos;s a starting point.</p>
            </div>
          </div>
        </section>

        <section className="pricing">
          <div className="wrap">
            <div className="pricing-tabs" role="tablist">
              {groups.map((g) => (
                <button
                  key={g.key}
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
              {activeGroup.plans.map((plan) => (
                <div key={plan.name} className={`pricing-card${plan.featured ? ' featured' : ''}`}>
                  <div className="plan-tag">{plan.tag}</div>
                  <div className="plan-name">{plan.name}</div>
                  <div className="plan-from">Starting from</div>
                  <div className="plan-price">
                    {plan.price}<span>{plan.period}</span>
                  </div>
                  <p className="plan-desc">{plan.desc}</p>
                  <div className="plan-divider" />
                  <ul className="plan-features">
                    {plan.features.map((f) => (
                      <li key={f}>
                        <span className="plan-check">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  {plan.featured
                    ? <Link href="/#contact" className="btn-plan-fill">Get a Quote →</Link>
                    : <Link href="/#contact" className="btn-plan-outline">Get a Quote →</Link>
                  }
                </div>
              ))}
            </div>

            <div className="pricing-bottom">
              <p>Not sure which plan fits? Book a free 30-minute call and we&apos;ll figure it out together.</p>
              <Link href="/#contact" className="btn-primary">Book a Free Call →</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
