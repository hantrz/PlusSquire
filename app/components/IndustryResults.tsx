'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

type IndustryTab = {
  key: string
  line1: string
  line2: string
  headline: string
  description: string
  metrics: [
    { val: string; label: string },
    { val: string; label: string },
    { val: string; label: string },
  ]
  image: string
  imageAlt: string
  icon: React.ReactNode
}

const industries: IndustryTab[] = [
  {
    key: 'skincare-beauty',
    line1: 'Skincare & Beauty',
    line2: 'Industry',
    headline: 'From One-Time Buyers to Daily Rituals: 38.4% of Total Store Revenue from Klaviyo',
    description:
      'By pairing a skin-type quiz pop-up with automated replenishment reminders and custom-coded HTML campaigns, we turned first-time sample buyers into loyal repeat subscribers.',
    metrics: [
      { val: '+61%', label: 'Increase in Open Rate' },
      { val: '+118%', label: 'Increase in Click-Through Rate' },
      { val: '+54%', label: 'Increase in Attributed Email Revenue' },
    ],
    image: '/images/services/industry-results/beauty-skincare-industry.jpg',
    imageAlt: 'Skincare and beauty brand Klaviyo email marketing and Shopify results showcase',
    icon: (
      <svg width="26" height="32" viewBox="0 0 26 32" fill="none">
        <defs>
          <linearGradient id="indGrad1" x1="0" y1="0" x2="26" y2="32" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1ea672" />
            <stop offset="100%" stopColor="#46d39a" />
          </linearGradient>
        </defs>
        <rect x="6" y="11" width="14" height="19" rx="3" stroke="url(#indGrad1)" strokeWidth="2" />
        <path d="M10 11V7H16V11" stroke="url(#indGrad1)" strokeWidth="2" strokeLinecap="round" />
        <path d="M13 7V3M10 3H17" stroke="url(#indGrad1)" strokeWidth="2" strokeLinecap="round" />
        <path d="M9.5 18H16.5M9.5 22.5H14.5" stroke="url(#indGrad1)" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    key: 'food-beverage',
    line1: 'Food & Beverage',
    line2: 'Industry',
    headline: 'High-Velocity Repeat Orders: Scaling Subscription & Bundle Revenue',
    description:
      'A complete Klaviyo lifecycle overhaul—combining flavor-based segmentation, post-purchase cross-sell flows, and VIP SMS drops—transformed this consumable brand’s retention metrics.',
    metrics: [
      { val: '+49%', label: 'Increase in Open Rate' },
      { val: '+94%', label: 'Increase in Flow Click Rate' },
      { val: '+68%', label: 'Increase in Attributed Email Revenue' },
    ],
    image: '/images/services/industry-results/food-beverage-industry.jpg',
    imageAlt: 'Food and beverage brand email flow and campaign revenue growth showcase',
    icon: (
      <svg width="26" height="30" viewBox="0 0 26 30" fill="none">
        <defs>
          <linearGradient id="indGrad2" x1="0" y1="0" x2="26" y2="30" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1ea672" />
            <stop offset="100%" stopColor="#46d39a" />
          </linearGradient>
        </defs>
        <path d="M5 10H21L19.5 27C19.4 28.1 18.5 29 17.4 29H8.6C7.5 29 6.6 28.1 6.5 27L5 10Z" stroke="url(#indGrad2)" strokeWidth="2" />
        <path d="M3 10H23" stroke="url(#indGrad2)" strokeWidth="2" strokeLinecap="round" />
        <path d="M15 10L17.5 3H21" stroke="url(#indGrad2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="13" cy="19" r="3.5" stroke="url(#indGrad2)" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    key: 'fashion-apparel',
    line1: 'Fashion & Apparel',
    line2: 'Industry',
    headline: 'Lookbook Editorial Meets High-Converting Flows: 2.4X Cart Recovery Lift',
    description:
      'We rebuilt their multi-step abandoned cart and browse abandonment sequences with dynamic size/stock blocks and mobile-first HTML templates that render flawlessly in dark mode.',
    metrics: [
      { val: '+57%', label: 'Increase in Open Rate' },
      { val: '+82%', label: 'Increase in Click-Through Rate' },
      { val: '+142%', label: 'Increase in Attributed Email Revenue' },
    ],
    image: '/images/services/industry-results/fashion-apparel-industry.jpg',
    imageAlt: 'Fashion and apparel brand Shopify and Klaviyo email revenue showcase',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <defs>
          <linearGradient id="indGrad3" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1ea672" />
            <stop offset="100%" stopColor="#46d39a" />
          </linearGradient>
        </defs>
        <path d="M9 4L3 8.5L6 13L9 11V24H19V11L22 13L25 8.5L19 4C18 6.2 16.2 7.5 14 7.5C11.8 7.5 10 6.2 9 4Z" stroke="url(#indGrad3)" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    key: 'health-wellness',
    line1: 'Health & Wellness',
    line2: 'Industry',
    headline: 'Inbox Recovery & Lifecycle Education: From 14% to 41% Email Revenue Share',
    description:
      'After repairing their sender reputation with full DMARC authentication and a 30-day warm-up, we launched educational onboarding and 30/60/90-day win-back sequences that compounded LTV.',
    metrics: [
      { val: '+64%', label: 'Increase in Open Rate' },
      { val: '+91%', label: 'Increase in Click-Through Rate' },
      { val: '+210%', label: 'Increase in Attributed Email Revenue' },
    ],
    image: '/images/services/industry-results/health-wellness-industry.jpg',
    imageAlt: 'Health and wellness brand Klaviyo retention and email revenue showcase',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <defs>
          <linearGradient id="indGrad4" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1ea672" />
            <stop offset="100%" stopColor="#46d39a" />
          </linearGradient>
        </defs>
        <path d="M14 24.5C14 24.5 4 18.2 4 10.5C4 6.9 6.8 4 10.3 4C12.3 4 14 5 14 5C14 5 15.7 4 17.7 4C21.2 4 24 6.9 24 10.5C24 18.2 14 24.5 14 24.5Z" stroke="url(#indGrad4)" strokeWidth="2" strokeLinejoin="round" />
        <path d="M9 13.5H12L13.5 10L15.5 16.5L17 13.5H19.5" stroke="url(#indGrad4)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

export default function IndustryResults() {
  const [activeKey, setActiveKey] = useState<string>(industries[0].key)
  const activeTab = industries.find((t) => t.key === activeKey) ?? industries[0]

  return (
    <section className="ind-res-sec">
      <style>{`
        .ind-res-sec {
          position: relative;
          background:
            radial-gradient(ellipse at 70% 35%, rgba(30, 166, 114, 0.20) 0%, transparent 55%),
            radial-gradient(ellipse at 15% 80%, rgba(23, 132, 91, 0.16) 0%, transparent 50%),
            #0f1623;
          padding: 110px 0 0;
          overflow: hidden;
          color: #ffffff;
        }
        /* Bottom fade-out gradient overlay just like Flowium */
        .ind-res-sec::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 110px;
          background: linear-gradient(0deg, #0f1623 0%, rgba(15, 22, 35, 0) 100%);
          pointer-events: none;
          z-index: 2;
        }

        .ind-res-head {
          text-align: left;
          margin-bottom: 36px;
        }
        .ind-res-head h2 {
          font-size: clamp(28px, 3.4vw, 42px);
          font-weight: 800;
          line-height: 1.22;
          color: #ffffff;
          margin: 0 0 10px;
          letter-spacing: -0.015em;
        }
        .ind-res-head p {
          font-size: 18px;
          color: #cbd5e1;
          line-height: 1.6;
          margin: 0;
        }

        /* ── Horizontal 4-Tab Bar ── */
        .ind-tabs-bar {
          display: flex;
          align-items: stretch;
          position: relative;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          overflow-x: auto;
          scrollbar-width: none;
        }
        .ind-tabs-bar::-webkit-scrollbar {
          display: none;
        }
        .ind-tab-btn {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 15px;
          min-width: 230px;
          padding: 20px 38px 22px 24px;
          background: transparent;
          border: none;
          cursor: pointer;
          text-align: left;
          font-family: inherit;
          font-size: 13px;
          font-weight: 500;
          line-height: 1.45;
          color: #94a3b8;
          transition: color 0.22s ease;
          flex-shrink: 0;
        }
        .ind-tab-btn:hover {
          color: #ffffff;
        }
        .ind-tab-btn.active {
          color: #ffffff;
          font-weight: 700;
        }
        .ind-tab-btn::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 4px;
          border-radius: 20px;
          background: #1ea672;
          transition: width 0.3s ease;
        }
        .ind-tab-btn.active::after {
          width: 100%;
        }
        .ind-tab-ico {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        /* ── 2-Column Content Split (50% Left Copy/Stats, 50% Right Visual) ── */
        .ind-panel {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          gap: 48px;
          align-items: end;
          position: relative;
        }
        .ind-panel-left {
          padding: 56px 10px 120px 0;
          position: relative;
          z-index: 3;
        }
        .ind-panel-left h3 {
          font-size: clamp(20px, 2vw, 24px);
          font-weight: 700;
          line-height: 1.38;
          color: #ffffff;
          margin: 0 0 16px;
        }
        .ind-panel-desc {
          font-size: 16.5px;
          line-height: 1.75;
          color: #cbd5e1;
          margin: 0 0 34px;
          max-width: 540px;
        }

        /* 2+1 KPI Metrics Grid */
        .ind-metrics-row1 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px;
          margin-bottom: 32px;
        }
        .ind-metrics-row2 {
          margin-bottom: 40px;
        }
        .ind-metric-val {
          font-size: clamp(32px, 3.4vw, 44px);
          font-weight: 800;
          line-height: 1.15;
          color: #ffffff;
          letter-spacing: -0.02em;
          margin-bottom: 6px;
        }
        .ind-metric-lbl {
          font-size: 16px;
          font-weight: 400;
          line-height: 1.5;
          color: #e2e8f0;
        }

        /* Ghost Pill CTA Button */
        .ind-ghost-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 14px 30px;
          border-radius: 100px;
          border: 1px solid #ffffff;
          background: transparent;
          color: #ffffff;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          transition: background 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
        }
        .ind-ghost-btn:hover {
          background: rgba(30, 166, 114, 0.22);
          border-color: #1ea672;
          transform: translateY(-2px);
        }

        /* Right Column Showcase Image */
        .ind-panel-right {
          position: relative;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          padding-top: 40px;
        }
        .ind-img-frame {
          position: relative;
          width: 108%;
          max-width: 680px;
          border-radius: 18px 18px 0 0;
          overflow: hidden;
          box-shadow: 0 28px 70px rgba(0, 0, 0, 0.45);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-bottom: none;
          background: #162032;
        }
        .ind-img-frame img {
          width: 100%;
          height: auto;
          display: block;
        }

        @media (max-width: 980px) {
          .ind-res-sec {
            padding: 76px 0 0;
          }
          .ind-panel {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .ind-panel-left {
            padding: 36px 0 28px;
          }
          .ind-panel-right {
            padding-top: 0;
          }
          .ind-img-frame {
            width: 100%;
          }
        }

        @media (max-width: 560px) {
          .ind-tab-btn {
            min-width: 185px;
            padding: 16px 20px;
          }
          .ind-metrics-row1 {
            grid-template-columns: 1fr 1fr;
            gap: 18px;
          }
          .ind-metric-lbl {
            font-size: 13.5px;
          }
        }
      `}</style>

      <div className="wrap">
        <div className="ind-res-head" data-reveal="up">
          <h2>Grow Your Business Revenue and Get Real Results</h2>
          <p>Just like these eCommerce brands we&apos;ve scaled across Shopify &amp; Klaviyo!</p>
        </div>

        <div className="ind-tabs-bar" role="tablist" aria-label="Results by Industry">
          {industries.map((tab) => {
            const isActive = tab.key === activeTab.key
            return (
              <button
                key={tab.key}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`ind-tab-btn${isActive ? ' active' : ''}`}
                onClick={() => setActiveKey(tab.key)}
              >
                <span className="ind-tab-ico">{tab.icon}</span>
                <span>
                  {tab.line1}
                  <br />
                  {tab.line2}
                </span>
              </button>
            )
          })}
        </div>

        <div className="ind-panel" key={activeTab.key}>
          <div className="ind-panel-left">
            <h3>{activeTab.headline}</h3>
            <p className="ind-panel-desc">{activeTab.description}</p>

            <div className="ind-metrics-row1">
              <div>
                <div className="ind-metric-val">{activeTab.metrics[0].val}</div>
                <div className="ind-metric-lbl">{activeTab.metrics[0].label}</div>
              </div>
              <div>
                <div className="ind-metric-val">{activeTab.metrics[1].val}</div>
                <div className="ind-metric-lbl">{activeTab.metrics[1].label}</div>
              </div>
            </div>

            <div className="ind-metrics-row2">
              <div className="ind-metric-val">{activeTab.metrics[2].val}</div>
              <div className="ind-metric-lbl">{activeTab.metrics[2].label}</div>
            </div>

            <Link href="/case-studies" className="ind-ghost-btn">
              View More Case Studies
            </Link>
          </div>

          <div className="ind-panel-right">
            <div className="ind-img-frame">
              <Image
                src={activeTab.image}
                alt={activeTab.imageAlt}
                width={1400}
                height={764}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
