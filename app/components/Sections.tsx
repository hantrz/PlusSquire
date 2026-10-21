'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle2, ChevronDown, SearchCheck, Layers, Code2, Rocket, Handshake } from 'lucide-react'
import ContactServiceFields from './ContactServiceFields'
import { BOOKING_URL, UPWORK_URL, LINKEDIN_URL, WHATSAPP_URL } from '../lib/site'
import { INSIGHTS, INSIGHT_CATEGORIES } from '../lib/insights'

/* ══════════════ INSIGHTS ══════════════ */

export function Insights({ hideHeader = false }: { hideHeader?: boolean }) {
  const [activeCat, setActiveCat] = useState<string>('All')

  const displayedArticles = hideHeader
    ? activeCat === 'All'
      ? INSIGHTS
      : INSIGHTS.filter((item) => item.category === activeCat)
    : INSIGHTS.slice(0, 3)

  const featuredArticle = INSIGHTS[0]

  return (
    <>
      <style>{`
        .insights { background: #fff; padding: 96px 0; }
        .insights-page { padding-top: 48px; background: var(--soft); }

        /* Featured Spotlight Card on /insights page */
        .ins-featured {
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: 36px;
          align-items: center;
          background: #ffffff;
          border: 1px solid var(--border);
          border-radius: 22px;
          padding: 24px;
          margin-bottom: 44px;
          text-decoration: none;
          box-shadow: 0 18px 44px rgba(15, 22, 35, 0.06);
          transition: transform 0.24s ease, box-shadow 0.24s ease, border-color 0.24s ease;
        }
        .ins-featured:hover {
          transform: translateY(-3px);
          box-shadow: 0 24px 56px rgba(30, 166, 114, 0.12);
          border-color: var(--gm);
        }
        .ins-feat-img {
          border-radius: 14px;
          overflow: hidden;
          background: var(--soft);
          border: 1px solid var(--border);
          aspect-ratio: 1400 / 764;
        }
        .ins-feat-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.35s ease;
        }
        .ins-featured:hover .ins-feat-img img {
          transform: scale(1.03);
        }
        .ins-feat-body {
          padding: 12px 16px 12px 4px;
        }
        .ins-feat-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 11.5px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--g);
          margin-bottom: 12px;
        }
        .ins-feat-body h2 {
          font-size: clamp(22px, 2.4vw, 30px);
          font-weight: 800;
          color: var(--ink);
          line-height: 1.28;
          margin: 0 0 14px;
          text-align: left;
        }
        .ins-feat-body p {
          font-size: 15px;
          color: var(--ink3);
          line-height: 1.72;
          margin: 0 0 20px;
        }
        .ins-feat-foot {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding-top: 16px;
          border-top: 1px solid var(--border);
        }
        .ins-feat-meta {
          font-size: 12.5px;
          color: var(--ink4);
          font-weight: 600;
        }

        /* Category Filter Tabs on /insights page */
        .ins-filter-bar {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 36px;
        }
        .ins-filter-btn {
          padding: 10px 18px;
          border-radius: 100px;
          border: 1px solid var(--border);
          background: #ffffff;
          color: var(--ink2);
          font-family: inherit;
          font-size: 13.5px;
          font-weight: 700;
          cursor: pointer;
          transition: background 0.18s ease, color 0.18s ease, border-color 0.18s ease;
        }
        .ins-filter-btn:hover {
          border-color: var(--g);
          color: var(--g);
        }
        .ins-filter-btn.active {
          background: var(--g);
          border-color: var(--g);
          color: #ffffff;
        }

        /* Cards Grid */
        .ins-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .ins-card {
          background: #ffffff;
          border: 1px solid var(--border);
          border-radius: 18px;
          overflow: hidden;
          cursor: pointer;
          transition: box-shadow 0.22s ease, transform 0.22s ease, border-color 0.22s ease;
          text-decoration: none;
          display: flex;
          flex-direction: column;
          position: relative;
          z-index: 1;
        }
        .ins-card:hover {
          box-shadow: 0 16px 36px rgba(15, 22, 35, 0.08);
          transform: translateY(-4px);
          border-color: var(--gm);
        }
        .ins-thumb-img {
          position: relative;
          width: 100%;
          aspect-ratio: 1400 / 764;
          overflow: hidden;
          background: var(--soft);
          border-bottom: 1px solid var(--border);
        }
        .ins-thumb-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.35s ease;
        }
        .ins-card:hover .ins-thumb-img img {
          transform: scale(1.04);
        }
        .ins-body {
          padding: 24px 22px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .ins-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          margin-bottom: 12px;
        }
        .ins-cat {
          background: var(--gl);
          color: var(--gd);
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          padding: 3px 10px;
          border-radius: 4px;
        }
        .ins-date {
          font-size: 12px;
          color: var(--ink4);
          font-weight: 500;
        }
        .ins-card h3 {
          font-size: 16.5px;
          font-weight: 800;
          line-height: 1.38;
          margin-bottom: 10px;
          color: var(--ink);
        }
        .ins-card p {
          font-size: 13.5px;
          color: var(--ink3);
          line-height: 1.68;
          flex: 1;
          margin: 0;
        }
        .ins-read {
          margin-top: 18px;
          padding-top: 14px;
          border-top: 1px solid var(--border);
          color: var(--g);
          font-size: 13px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 5px;
          transition: gap 0.18s;
        }
        .ins-read-time {
          font-size: 12px;
          color: var(--ink4);
          font-weight: 500;
        }
        .ins-cta {
          text-align: center;
          margin-top: 48px;
        }

        @media (max-width: 960px) {
          .ins-featured {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .ins-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 640px) {
          .ins-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
      <section className={`insights${hideHeader ? ' insights-page' : ''}`} id="insights">
        <div className="wrap">
          {!hideHeader && (
            <div className="sh-row" data-reveal="up">
              <h2>Email &amp; Shopify <em>know-how.</em></h2>
              <p className="section-sub">Practical playbooks on Klaviyo flows, deliverability, HTML email development, and Shopify engineering.</p>
            </div>
          )}

          {hideHeader && (
            <>
              <Link
                href={`/insights/${featuredArticle.slug}`}
                className="ins-featured"
                data-reveal="up"
              >
                <div className="ins-feat-img">
                  <Image
                    src={featuredArticle.heroImage}
                    alt={featuredArticle.heroAlt}
                    width={1400}
                    height={764}
                    priority
                  />
                </div>
                <div className="ins-feat-body">
                  <div className="ins-feat-badge">
                    <span>Featured Playbook</span> · <span>{featuredArticle.category}</span>
                  </div>
                  <h2>{featuredArticle.title}</h2>
                  <p>{featuredArticle.excerpt}</p>
                  <div className="ins-feat-foot">
                    <span className="ins-feat-meta">
                      {featuredArticle.date} · {featuredArticle.readTime}
                    </span>
                    <span style={{ color: 'var(--g)', fontWeight: 700, fontSize: '14px' }}>
                      Read Full Playbook →
                    </span>
                  </div>
                </div>
              </Link>

              <div className="ins-filter-bar" role="tablist">
                {INSIGHT_CATEGORIES.map((cat) => {
                  const count =
                    cat === 'All'
                      ? INSIGHTS.length
                      : INSIGHTS.filter((i) => i.category === cat).length
                  return (
                    <button
                      key={cat}
                      type="button"
                      role="tab"
                      aria-selected={activeCat === cat}
                      className={`ins-filter-btn${activeCat === cat ? ' active' : ''}`}
                      onClick={() => setActiveCat(cat)}
                    >
                      {cat} ({count})
                    </button>
                  )
                })}
              </div>
            </>
          )}

          <div className="ins-grid">
            {displayedArticles.map((a, i) => (
              <Link
                key={a.slug}
                href={`/insights/${a.slug}`}
                className="ins-card"
                data-reveal="up"
                style={{ transitionDelay: `${(i % 3) * 80}ms` }}
              >
                <div className="ins-thumb-img">
                  <Image
                    src={a.heroImage}
                    alt={a.heroAlt}
                    width={700}
                    height={382}
                  />
                </div>
                <div className="ins-body">
                  <div className="ins-meta">
                    <span className="ins-cat">{a.category}</span>
                    <span className="ins-date">{a.date}</span>
                  </div>
                  <h3>{a.title}</h3>
                  <p>{a.excerpt}</p>
                  <div className="ins-read">
                    <span>Read Playbook →</span>
                    <span className="ins-read-time">{a.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {!hideHeader && (
            <div className="ins-cta" data-reveal="fade">
              <Link href="/insights" className="btn-ghost">
                Explore All 12 Playbooks &amp; Guides →
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

/* ══════════════ 4-STEP PROCESS SECTION ══════════════ */
const processSteps = [
  {
    num: '01',
    icon: SearchCheck,
    title: 'Deep Audit & Revenue Roadmap',
    body: 'We audit your Shopify store speed, conversion bottlenecks, Klaviyo flows, deliverability, and segmentation—giving you a ranked action plan of quick wins.',
  },
  {
    num: '02',
    icon: Layers,
    title: 'Design & Flow Architecture',
    body: 'We map out high-converting Shopify OS 2.0 sections and on-brand Figma email designs tailored to every stage of your customer journey.',
  },
  {
    num: '03',
    icon: Code2,
    title: 'Bulletproof Build & 50+ Device QA',
    body: 'We hand-code clean Shopify Liquid and responsive HTML emails tested across 50+ email clients—including Outlook, Apple Mail, and Gmail Dark Mode.',
  },
  {
    num: '04',
    icon: Rocket,
    title: 'Launch, A/B Test & Compound',
    body: 'We launch with zero downtime, monitor real-time attribution, and continuously optimize flows, forms, and store UX to compound your revenue.',
  },
]

export function ProcessSection() {
  return (
    <>
      <style>{`
        .proc-sec { background: #fff; padding: 96px 0; border-top: 1px solid var(--border); }
        .proc-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
        }
        .proc-card {
          background: var(--soft);
          border: 1px solid var(--border);
          border-radius: 18px;
          padding: 32px 26px;
          position: relative;
          transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease, background .25s ease;
        }
        .proc-card:hover {
          transform: translateY(-5px);
          background: #fff;
          border-color: var(--gm);
          box-shadow: 0 14px 36px rgba(30, 166, 114, 0.14);
        }
        .proc-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 22px;
        }
        .proc-ico {
          width: 48px; height: 48px; border-radius: 12px;
          background: var(--gl); color: var(--g);
          display: flex; align-items: center; justify-content: center;
          transition: background .25s ease, color .25s ease;
        }
        .proc-card:hover .proc-ico {
          background: var(--g); color: #fff;
        }
        .proc-step-num {
          font-family: 'Inter', sans-serif;
          font-size: 28px;
          font-weight: 800;
          color: var(--gm);
        }
        .proc-card h3 {
          font-size: 18px;
          color: var(--ink);
          margin-bottom: 10px;
          line-height: 1.3;
        }
        .proc-card p {
          font-size: 14px;
          color: var(--ink3);
          line-height: 1.7;
          margin: 0;
        }
        @media(max-width:1024px){ .proc-grid { grid-template-columns: repeat(2, 1fr); } }
        @media(max-width:600px){ .proc-grid { grid-template-columns: 1fr; } }
      `}</style>
      <section className="proc-sec">
        <div className="wrap">
          <div className="sh-row" data-reveal="up">
            <h2>From audit to revenue in <em>4 clear steps.</em></h2>
            <p className="section-sub">A battle-tested system refined across 800+ Shopify and Klaviyo projects.</p>
          </div>
          <div className="proc-grid">
            {processSteps.map((s, i) => (
              <div key={s.num} className="proc-card" data-reveal="up" style={{ transitionDelay: `${i * 90}ms` }}>
                <div className="proc-top">
                  <div className="proc-ico"><s.icon size={22} strokeWidth={2.2} /></div>
                  <div className="proc-step-num">{s.num}</div>
                </div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

/* ══════════════ ABOUT & FOUNDER AUTHORITY ══════════════ */
const checks = [
  '13+ Years Klaviyo, Email Design & Bulletproof HTML Email Development',
  '2+ Years Custom Shopify OS 2.0 Liquid Theme Development & Speed Tuning',
  'Top Rated Plus on Upwork (Top 3% Talent · 100% Job Success · 800+ Projects)',
  'Pixel-perfect Figma/PSD to Klaviyo HTML tested on 50+ email clients & Dark Mode',
  'Trusted by DTC brands & white-label eCommerce agencies across US, UK, CA & AU',
]

export function About() {
  return (
    <>
      <style>{`
        .about { background: var(--dark); padding: 96px 0; position: relative; overflow: hidden; }
        .about-grid { display: grid; grid-template-columns: 0.92fr 1.08fr; gap: 72px; align-items: center; }
        .about-vis {
          border-radius: 22px;
          overflow: hidden;
          background: var(--dark2);
          border: 1px solid rgba(255,255,255,.12);
          box-shadow: 0 24px 64px rgba(0,0,0,.35);
        }
        .av-photo-wrap {
          position: relative;
          height: 460px;
          background: #ffffff;
          overflow: hidden;
          padding-top: 14px;
        }
        .av-name-bar {
          position: absolute;
          bottom: 16px;
          right: 16px;
          left: 16px;
          background: rgba(9, 13, 22, 0.9);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.14);
          border-radius: 14px;
          padding: 14px 18px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          z-index: 2;
        }
        .av-name-bar h4 { color: #fff; font-size: 16px; font-weight: 800; margin: 0; }
        .av-name-bar span { color: #34d399; font-size: 12px; font-weight: 600; display: block; margin-top: 2px; }
        .av-upwork-pill {
          background: var(--g);
          color: #fff;
          font-size: 11.5px;
          font-weight: 700;
          padding: 7px 13px;
          border-radius: 8px;
          text-decoration: none;
          white-space: nowrap;
          transition: background .18s;
        }
        .av-upwork-pill:hover { background: var(--gd); }
        .av-row { display: grid; grid-template-columns: repeat(3, 1fr); border-top: 1px solid rgba(255,255,255,.08); background: #0d1320; }
        .av-stat { padding: 20px 16px; text-align: center; border-right: 1px solid rgba(255,255,255,.07); }
        .av-stat:last-child { border-right: none; }
        .av-num { font-family: 'Inter', sans-serif; font-size: 25px; font-weight: 800; color: var(--g); }
        .av-lbl { font-size: 11.5px; color: rgba(255,255,255,.5); margin-top: 3px; font-weight: 600; }
        .about h2 { color: #fff; text-align: left; margin-top: 0; }
        .about p { color: rgba(255,255,255,.68); font-size: 15.5px; line-height: 1.8; margin-bottom: 16px; }
        .about-checks { list-style: none; margin: 24px 0 34px; }
        .about-checks li { display: flex; align-items: center; gap: 12px; padding: 11px 0; border-bottom: 1px solid rgba(255,255,255,.07); color: rgba(255,255,255,.85); font-size: 14.5px; font-weight: 500; }
        .chk { width: 22px; height: 22px; border-radius: 50%; background: var(--g); color: #fff; display: flex; align-items: center; justify-content: center; font-size: 11px; flex-shrink: 0; font-weight: 800; }
        .about-btns { display: flex; gap: 14px; flex-wrap: wrap; align-items: center; }
        .btn-dark-outline {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 13px 22px; border-radius: 10px;
          border: 1.5px solid rgba(255,255,255,0.2);
          color: #fff; font-size: 14.5px; font-weight: 600; text-decoration: none;
          transition: border-color .2s, background .2s;
        }
        .btn-dark-outline:hover { border-color: var(--g); background: rgba(30,166,114,0.12); }

        /* White-Label Partner Callout Bar */
        .partner-bar {
          margin-top: 64px;
          background: linear-gradient(135deg, rgba(30,166,114,0.14), rgba(21,128,88,0.06));
          border: 1px solid rgba(30,166,114,0.32);
          border-radius: 18px;
          padding: 28px 34px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 28px;
          flex-wrap: wrap;
        }
        .pb-left { display: flex; align-items: center; gap: 18px; max-width: 760px; }
        .pb-ico {
          width: 52px; height: 52px; border-radius: 14px;
          background: rgba(30,166,114,0.2); color: #34d399;
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        .pb-left h4 { color: #fff; font-size: 18px; font-weight: 800; margin-bottom: 4px; }
        .pb-left p { color: rgba(255,255,255,0.68); font-size: 14px; line-height: 1.6; margin: 0; }

        @media(max-width:900px){
          .about-grid { grid-template-columns: 1fr; gap: 44px; }
          .partner-bar { flex-direction: column; align-items: flex-start; }
        }
      `}</style>
      <section className="about" id="about">
        <div className="wrap">
          <div className="about-grid">
            <div className="about-vis" data-reveal="left">
              <div className="av-photo-wrap">
                <Image
                  src="/images/zahidul.png"
                  alt="Zahidul Islam — Founder of PlusSquire"
                  width={600}
                  height={720}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
                />
                <div className="av-name-bar">
                  <div>
                    <h4>Zahidul Islam</h4>
                    <span>Founder · Lead Klaviyo &amp; Shopify Engineer</span>
                  </div>
                  <a href={UPWORK_URL} target="_blank" rel="noopener noreferrer" className="av-upwork-pill">
                    Verify on Upwork ↗
                  </a>
                </div>
              </div>
              <div className="av-row">
                <div className="av-stat"><div className="av-num">800+</div><div className="av-lbl">Projects Delivered</div></div>
                <div className="av-stat"><div className="av-num">7,000+</div><div className="av-lbl">Emails Coded</div></div>
                <div className="av-stat"><div className="av-num">13+ yrs</div><div className="av-lbl">Experience</div></div>
              </div>
            </div>
            <div data-reveal="right">
              <h2>Built by a Shopify &amp; <em>email obsessive.</em></h2>
              <p>
                PlusSquire is led by <strong>Zahidul Islam</strong>—a senior Klaviyo strategist, bulletproof HTML email developer (13+ years), and Shopify theme engineer (2+ years) who has personally shipped <strong>800+ projects</strong> and <strong>7,000+ custom email templates</strong> for global eCommerce brands.
              </p>
              <p>
                Unlike traditional agencies that pass your account to junior coordinators, you work directly with a battle-tested technical team that bridges custom Shopify Liquid engineering and high-converting Klaviyo retention systems.
              </p>
              <ul className="about-checks">
                {checks.map((c) => (
                  <li key={c}><span className="chk">✓</span>{c}</li>
                ))}
              </ul>
              <div className="about-btns">
                <Link href="/#contact" className="btn-primary">Start a Project →</Link>
                <a href={UPWORK_URL} target="_blank" rel="noopener noreferrer" className="btn-dark-outline">
                  View Upwork Profile (100% JSS) ↗
                </a>
              </div>
            </div>
          </div>

          {/* Agency White-Label & Overflow Partner Callout */}
          <div className="partner-bar" data-reveal="up">
            <div className="pb-left">
              <div className="pb-ico"><Handshake size={26} /></div>
              <div>
                <h4>Running a Shopify, Creative, or Retention Agency?</h4>
                <p>
                  We partner with leading US, UK, Canadian &amp; Australian agencies as a reliable white-label or overflow partner for Figma-to-Klaviyo HTML coding, flow setup, and Shopify Liquid sprints.
                </p>
              </div>
            </div>
            <Link href="/#contact" className="btn-primary" style={{ whiteSpace: 'nowrap' }}>
              Partner With Us →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

/* ══════════════ PORTFOLIO ══════════════ */
type PortfolioItem = {
  img: string
  title: string
  sub: string
  category: 'Klaviyo Flows' | 'Email Design & HTML' | 'Shopify Builds' | 'Forms & SMS'
  metric: string
  href: string
  summary: string
  deliverables: string[]
}

const PORTFOLIO_CATEGORIES = [
  'All',
  'Klaviyo Flows',
  'Email Design & HTML',
  'Shopify Builds',
  'Forms & SMS',
] as const

const portfolio: PortfolioItem[] = [
  {
    img: '/images/services/flow-setup/welcome-series.jpg',
    title: 'Multi-Step Welcome Series',
    sub: 'Klaviyo Flow · DTC Skincare',
    category: 'Klaviyo Flows',
    metric: '58% Open Rate · 4.8× ROI',
    href: '/services/flow-setup',
    summary: '4-part zero-party data welcome automation built with conditional skin-type branching, dynamic product recommendations, and mobile-first dark-mode-ready templates.',
    deliverables: [
      '4-email branched welcome flow in Klaviyo',
      'Dynamic product feed personalization by skin concern',
      'Smart coupon expiration reminder for non-buyers',
      '50+ inbox & dark mode QA verification',
    ],
  },
  {
    img: '/images/services/shopify-theme-development/conversion-ux.jpg',
    title: 'Custom Shopify OS 2.0 Rebuild',
    sub: 'Shopify Theme · Apparel & Lifestyle',
    category: 'Shopify Builds',
    metric: '+24% Conversion · 1.4s Load',
    href: '/services/shopify-theme-development',
    summary: 'Bespoke Online Store 2.0 theme architecture with native slide-out cart upsells, thumb-zone mobile product pages, and zero-bloat Liquid sections.',
    deliverables: [
      'Custom OS 2.0 modular theme sections & metafields',
      'Slide-out AJAX cart drawer with free-shipping progress bar',
      'Mobile thumb-zone sticky ATC & size guide modal',
      '96/100 Desktop & 89/100 Mobile PageSpeed score',
    ],
  },
  {
    img: '/images/services/email-design/hero-pixel-perfect.jpg',
    title: 'Figma-to-HTML Campaign System',
    sub: 'Email Design & Code · Luxury Retail',
    category: 'Email Design & HTML',
    metric: '50+ Clients & Dark Mode QA',
    href: '/services/email-design',
    summary: 'Modular Figma design system and hand-coded responsive HTML master templates built for rapid weekly campaign deployment across global markets.',
    deliverables: [
      '20+ reusable Figma & Klaviyo universal content blocks',
      'Hand-coded HTML/CSS with Outlook VML fallbacks',
      'True dark-mode color & logo inversion styling',
      'Sub-85KB HTML payload to prevent Gmail clipping',
    ],
  },
  {
    img: '/images/services/flow-setup/abandoned-cart-browse.jpg',
    title: 'High-Recovery Cart & Checkout Flow',
    sub: 'Klaviyo Automation · Home & Living',
    category: 'Klaviyo Flows',
    metric: '+$142K Recovered Revenue',
    href: '/services/email-automations',
    summary: 'Multi-split Cart & Checkout Abandonment architecture separating high-AOV vs. standard carts and first-time vs. VIP repeat shoppers.',
    deliverables: [
      'Server-side Added to Cart & Checkout Started triggers',
      'AOV-based conditional split ($150+ vs. under $150)',
      'Dynamic cart item rebuild link & objection-handling blocks',
      'Integrated SMS follow-up for opted-in VIP profiles',
    ],
  },
  {
    img: '/images/services/email-development/cross-client-compatibility.jpg',
    title: 'Bulletproof Outlook & Mobile HTML',
    sub: 'Custom HTML/Liquid · B2B & SaaS',
    category: 'Email Design & HTML',
    metric: '100% Render Accuracy',
    href: '/services/email-development',
    summary: 'Enterprise-grade HTML email engineering designed specifically for B2B decision-makers using legacy desktop Outlook (2016–2021), Office 365, and iOS Mail.',
    deliverables: [
      'Hybrid fluid-responsive table & ghost-table VML code',
      'Live HTML typography & bulletproof VML CTA buttons',
      'Litmus & Email on Acid 50+ client QA test report',
      'Dynamic Liquid variables for account-level metrics',
    ],
  },
  {
    img: '/images/services/shopify-speed-optimization/vitals-before-after.jpg',
    title: 'Core Web Vitals & Speed Overhaul',
    sub: 'Shopify Engineering · Beauty Brand',
    category: 'Shopify Builds',
    metric: '−31% Cart Abandonment',
    href: '/services/shopify-speed-optimization',
    summary: 'Surgical Shopify performance sprint eliminating leftover third-party scripts, optimizing Liquid render loops, and fixing LCP/INP Core Web Vitals.',
    deliverables: [
      'Removed 14 ghost app scripts & unused JS bundles',
      'Native Liquid replacement for 3 heavy frontend apps',
      'Preloaded hero WebP assets & deferred non-critical scripts',
      'Mobile LCP reduced from 4.6s down to 1.7s',
    ],
  },
  {
    img: '/images/services/sign-up-forms/on-brand-form-design.jpg',
    title: 'Zero-Party Data Capture Pop-Ups',
    sub: 'Klaviyo Forms · Food & Beverage',
    category: 'Forms & SMS',
    metric: '11.4% Opt-In Conversion',
    href: '/services/sign-up-forms',
    summary: 'Multi-step micro-quiz pop-up and mobile teaser system capturing flavor preference, email, and SMS consent without hurting storefront UX.',
    deliverables: [
      '3-step micro-commitment quiz pop-up (Flavor → Email → SMS)',
      'Custom CSS matching storefront typography & border radii',
      'Behavioral exit-intent & 45% scroll trigger rules',
      'A/B tested mystery offer vs. tiered gift unlock',
    ],
  },
  {
    img: '/images/services/sms-campaigns/hero-sms-revenue.jpg',
    title: 'VIP Email + SMS Flash Launch',
    sub: 'Omnichannel · DTC Fashion',
    category: 'Forms & SMS',
    metric: '$84.3K in 7 Days',
    href: '/services/sms-campaigns',
    summary: 'Coordinated 7-day product drop combining early-access VIP SMS alerts, countdown email sequences, and smart exclusion segments.',
    deliverables: [
      'VIP early-access SMS + email calendar & copywriting',
      'Real-time purchaser exclusion segments across channels',
      'TCPA/GDPR compliant quiet-hours & attribution setup',
      'Post-drop restock & back-in-stock automated capture',
    ],
  },
  {
    img: '/images/services/email-deliverability/hero-email-deliverability.jpg',
    title: 'Primary Inbox Placement & DNS Recovery',
    sub: 'Deliverability · 8-Figure Supplement Brand',
    category: 'Klaviyo Flows',
    metric: '21% → 49.6% Open Rate',
    href: '/services/email-deliverability',
    summary: 'Complete sender reputation turnaround including custom branded sending domain authentication, sunset suppression flows, and 30-day tiered warm-up.',
    deliverables: [
      'Branded sending domain SPF, 2048-bit DKIM & DMARC p=quarantine',
      '30/60/90-day engaged behavioral segmentation matrix',
      'Automated 3-part Sunset Flow & spam-trap purging',
      'Google Postmaster Tools & Microsoft SNDS monitoring',
    ],
  },
  {
    img: '/images/services/shopify-custom-features/bespoke-features-showcase.jpg',
    title: 'Native Bundle Builder & Tiered Cart',
    sub: 'Shopify Custom Liquid · Pet Wellness',
    category: 'Shopify Builds',
    metric: '+$19.40 Average Order Value',
    href: '/services/shopify-custom-features',
    summary: 'Custom-coded "Build Your Pack" bundle configurator built directly into Shopify OS 2.0 theme blocks—eliminating $299/mo in recurring app fees.',
    deliverables: [
      'Interactive 3-tier bundle selector (Save 10% / 15% / 20%)',
      '100% editable inside Shopify Theme Editor via blocks',
      'Zero external script delay—instant native Cart AJAX API',
      'Seamless Klaviyo cart-item property passing for flows',
    ],
  },
  {
    img: '/images/services/email-design/design-systems-hub.jpg',
    title: 'Dark-Mode-Proof Master Template Library',
    sub: 'Email Design System · Consumer Tech',
    category: 'Email Design & HTML',
    metric: '3× Faster Campaign Builds',
    href: '/services/email-design',
    summary: 'Comprehensive 18-module email design system engineered in Figma and Klaviyo so internal marketers can launch campaigns in 20 minutes.',
    deliverables: [
      '18 drag-and-drop + custom HTML hybrid Klaviyo blocks',
      'Dark-mode tested hero, comparison table & review modules',
      'Annotated Figma component library with brand guardrails',
      'Team Loom training & pre-send QA checklist',
    ],
  },
  {
    img: '/images/services/shopify-migration/hero-cutover.jpg',
    title: 'WooCommerce to Shopify OS 2.0 Migration',
    sub: 'Platform Migration · UK Heritage Retail',
    category: 'Shopify Builds',
    metric: '100% SEO Traffic Retained',
    href: '/services/shopify-migration',
    summary: 'Zero-downtime migration of 4,200+ SKUs, 68,000 customer records, historical orders, and 301 URL redirects into a fast Shopify OS 2.0 storefront.',
    deliverables: [
      'Full product, variant, customer & order history migration',
      '1-to-1 301 redirect mapping preserving organic rankings',
      'Unified Klaviyo historical purchase & event re-sync',
      'Post-launch 30-day hypercare & Search Console audit',
    ],
  },
]

export function Portfolio({ hideHeader = false }: { hideHeader?: boolean }) {
  const [activeCat, setActiveCat] = useState<string>('All')
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null)

  const filteredItems = hideHeader
    ? activeCat === 'All'
      ? portfolio
      : portfolio.filter((p) => p.category === activeCat)
    : activeCat === 'All'
      ? portfolio.slice(0, 8)
      : portfolio.filter((p) => p.category === activeCat).slice(0, 8)

  return (
    <>
      <style>{`
        .portfolio { background: var(--soft); padding: 96px 0; border-top: 1px solid var(--border); }
        .portfolio-page { padding-top: 56px; }
        .port-filters {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 32px;
          justify-content: center;
        }
        .port-filter-btn {
          background: #fff;
          border: 1.5px solid var(--border);
          color: var(--ink2);
          padding: 9px 18px;
          border-radius: 999px;
          font-size: 13px;
          font-weight: 700;
          font-family: inherit;
          cursor: pointer;
          transition: all .18s ease;
        }
        .port-filter-btn:hover {
          border-color: var(--g);
          color: var(--g);
        }
        .port-filter-btn.active {
          background: var(--ink);
          border-color: var(--ink);
          color: #fff;
          box-shadow: 0 6px 18px rgba(15, 22, 35, 0.14);
        }
        .port-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
        .port-item {
          border-radius: 16px;
          overflow: hidden;
          background: #fff;
          border: 1px solid var(--border);
          text-decoration: none;
          display: flex;
          flex-direction: column;
          cursor: pointer;
          text-align: left;
          padding: 0;
          font-family: inherit;
          transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease;
        }
        .port-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 38px rgba(15, 22, 35, 0.1);
          border-color: var(--gm);
        }
        .port-img-wrap {
          position: relative;
          height: 200px;
          width: 100%;
          background: var(--dark);
          overflow: hidden;
          border-bottom: 1px solid var(--border);
        }
        .port-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform .4s ease;
        }
        .port-item:hover .port-img-wrap img {
          transform: scale(1.06);
        }
        .port-metric-badge {
          position: absolute;
          bottom: 10px;
          left: 10px;
          background: rgba(9, 13, 22, 0.86);
          backdrop-filter: blur(8px);
          color: #34d399;
          font-size: 11px;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 6px;
          border: 1px solid rgba(52, 211, 153, 0.3);
        }
        .port-zoom-pill {
          position: absolute;
          top: 10px;
          right: 10px;
          background: rgba(15, 22, 35, 0.78);
          backdrop-filter: blur(6px);
          color: #fff;
          font-size: 11px;
          font-weight: 700;
          padding: 4px 9px;
          border-radius: 6px;
          opacity: 0;
          transform: translateY(-4px);
          transition: opacity .2s ease, transform .2s ease;
        }
        .port-item:hover .port-zoom-pill {
          opacity: 1;
          transform: translateY(0);
        }
        .port-info {
          padding: 18px 20px 20px;
          display: flex;
          flex-direction: column;
          flex: 1;
          width: 100%;
        }
        .port-sub {
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--gd);
          margin-bottom: 5px;
        }
        .port-info h4 {
          font-size: 16px;
          font-weight: 700;
          color: var(--ink);
          margin-bottom: 10px;
          line-height: 1.3;
        }
        .port-link-txt {
          margin-top: auto;
          font-size: 13px;
          font-weight: 700;
          color: var(--g);
          display: inline-flex;
          align-items: center;
          gap: 5px;
        }

        /* Lightbox Preview Modal */
        .port-modal-backdrop {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: rgba(9, 13, 22, 0.82);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          animation: portFadeIn .2s ease;
        }
        @keyframes portFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .port-modal-card {
          background: #fff;
          border-radius: 22px;
          max-width: 920px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          box-shadow: 0 28px 80px rgba(0, 0, 0, 0.45);
          border: 1px solid var(--border);
          position: relative;
        }
        .port-modal-close {
          position: absolute;
          top: 16px;
          right: 16px;
          z-index: 10;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 1px solid var(--border);
          background: rgba(255, 255, 255, 0.92);
          color: var(--ink);
          font-size: 18px;
          font-weight: 800;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 14px rgba(0,0,0,0.12);
          transition: background .15s, transform .15s;
        }
        .port-modal-close:hover {
          background: #fff;
          transform: scale(1.06);
        }
        .port-modal-visual {
          background: var(--dark);
          position: relative;
          min-height: 360px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .port-modal-visual img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .port-modal-body {
          padding: 36px 34px;
          display: flex;
          flex-direction: column;
        }
        .port-modal-cat {
          display: inline-flex;
          align-self: flex-start;
          background: var(--gl);
          color: var(--gd);
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: .07em;
          padding: 5px 12px;
          border-radius: 999px;
          margin-bottom: 12px;
        }
        .port-modal-body h3 {
          font-size: 24px;
          font-weight: 800;
          color: var(--ink);
          line-height: 1.25;
          margin: 0 0 6px;
        }
        .port-modal-sub {
          font-size: 13.5px;
          font-weight: 600;
          color: var(--ink3);
          margin-bottom: 16px;
        }
        .port-modal-metric {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #0f1623;
          color: #34d399;
          font-size: 13px;
          font-weight: 800;
          padding: 8px 14px;
          border-radius: 9px;
          margin-bottom: 18px;
          align-self: flex-start;
        }
        .port-modal-desc {
          font-size: 14.5px;
          color: var(--ink2);
          line-height: 1.7;
          margin-bottom: 20px;
        }
        .port-modal-deliv-title {
          font-size: 11.5px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: .08em;
          color: var(--ink3);
          margin-bottom: 10px;
        }
        .port-modal-list {
          list-style: none;
          padding: 0;
          margin: 0 0 26px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .port-modal-list li {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 13.5px;
          color: var(--ink2);
          line-height: 1.5;
        }
        .port-modal-list li span {
          color: var(--g);
          font-weight: 800;
          flex-shrink: 0;
        }
        .port-modal-actions {
          margin-top: auto;
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }
        @media(max-width:1100px){ .port-grid { grid-template-columns: repeat(2,1fr); } }
        @media(max-width:820px){
          .port-modal-card { grid-template-columns: 1fr; }
          .port-modal-visual { min-height: 240px; max-height: 280px; }
          .port-modal-body { padding: 26px 22px; }
        }
        @media(max-width:600px){ .port-grid { grid-template-columns: 1fr; } }
      `}</style>
      <section className={`portfolio${hideHeader ? ' portfolio-page' : ''}`} id="portfolio">
        <div className="wrap">
          {!hideHeader && (
            <div className="sh-row" data-reveal="up">
              <h2>Crafted to look flawless <em>and convert.</em></h2>
              <p className="section-sub">A look at our custom Shopify theme builds, Klaviyo flow systems, and hand-coded HTML email templates.</p>
              <Link href="/portfolio" className="link-more">Full Portfolio →</Link>
            </div>
          )}

          {/* Category Filter Tabs */}
          <div className="port-filters" data-reveal="up">
            {PORTFOLIO_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`port-filter-btn${activeCat === cat ? ' active' : ''}`}
                onClick={() => setActiveCat(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="port-grid">
            {filteredItems.map((p, i) => (
              <button
                key={p.title}
                type="button"
                className="port-item"
                onClick={() => setSelectedItem(p)}
                data-reveal="up"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div className="port-img-wrap">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.img} alt={p.title} loading="lazy" />
                  <span className="port-metric-badge">{p.metric}</span>
                  <span className="port-zoom-pill">Quick Preview ↗</span>
                </div>
                <div className="port-info">
                  <div className="port-sub">{p.sub}</div>
                  <h4>{p.title}</h4>
                  <span className="port-link-txt">Inspect Deliverable →</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Lightbox Modal */}
      {selectedItem && (
        <div
          className="port-modal-backdrop"
          onClick={() => setSelectedItem(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedItem.title}
        >
          <div className="port-modal-card" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="port-modal-close"
              onClick={() => setSelectedItem(null)}
              aria-label="Close preview"
            >
              ✕
            </button>
            <div className="port-modal-visual">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={selectedItem.img} alt={selectedItem.title} />
            </div>
            <div className="port-modal-body">
              <span className="port-modal-cat">{selectedItem.category}</span>
              <h3>{selectedItem.title}</h3>
              <div className="port-modal-sub">{selectedItem.sub}</div>
              <div className="port-modal-metric">⚡ {selectedItem.metric}</div>
              <p className="port-modal-desc">{selectedItem.summary}</p>
              <div className="port-modal-deliv-title">What Was Engineered</div>
              <ul className="port-modal-list">
                {selectedItem.deliverables.map((d) => (
                  <li key={d}>
                    <span>✓</span>
                    {d}
                  </li>
                ))}
              </ul>
              <div className="port-modal-actions">
                <Link
                  href="/#contact"
                  className="btn-primary"
                  onClick={() => setSelectedItem(null)}
                >
                  Request Similar Build →
                </Link>
                <Link
                  href={selectedItem.href}
                  className="btn-dark-outline"
                  onClick={() => setSelectedItem(null)}
                >
                  Explore Service Page
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

/* ══════════════ HOMEPAGE FAQ ACCORDION ══════════════ */
const homeFaqs = [
  {
    q: 'How is PlusSquire different from hiring a separate Shopify dev and email agency?',
    a: 'Most email agencies cannot touch Shopify Liquid code, and most Shopify developers do not build Klaviyo flows or hand-code Outlook-proof HTML emails. At PlusSquire, we engineer both under one roof—meaning zero vendor handoffs, faster launches, and a storefront + inbox built as one revenue system.',
  },
  {
    q: 'Do you provide white-label or overflow support for other agencies?',
    a: 'Yes! We regularly partner with Klaviyo Elite, Shopify Plus, and creative agencies across the US, UK, Canada, and Australia. Whether you need Figma-to-HTML email coding, complex Klaviyo flow builds, or custom Shopify OS 2.0 sections, we plug seamlessly into your Slack and project management tools.',
  },
  {
    q: 'How fast is your turnaround time?',
    a: 'Custom HTML email templates and single flow builds are typically delivered within 24–72 hours. Full Klaviyo account setups take 7–10 days, and complete custom Shopify theme builds or migrations take 3–6 weeks.',
  },
  {
    q: 'Will my emails render properly in Outlook, Apple Mail, and Gmail Dark Mode?',
    a: 'Guaranteed. With 13+ years and 7,000+ HTML templates coded, we test every email across 50+ device and inbox combinations (including legacy desktop Outlook and iOS/Android Dark Mode) before launch.',
  },
  {
    q: 'Do you require long-term lock-in contracts?',
    a: 'Never. We offer both fixed-price one-time projects (audits, theme builds, flow setups, template coding) and flexible monthly retainers that you can pause or cancel anytime.',
  },
]

export function HomeFaq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0)
  return (
    <>
      <style>{`
        .hfaq { background: var(--soft); padding: 96px 0; border-top: 1px solid var(--border); }
        .hfaq-box {
          max-width: 840px;
          margin: 0 auto;
          background: #fff;
          border: 1px solid var(--border);
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 8px 30px rgba(15, 22, 35, 0.04);
        }
        .hfaq-item { border-bottom: 1px solid var(--border); }
        .hfaq-item:last-child { border-bottom: none; }
        .hfaq-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          text-align: left;
          background: none;
          border: none;
          padding: 22px 28px;
          font-family: inherit;
          font-size: 16px;
          font-weight: 700;
          color: var(--ink);
          cursor: pointer;
          transition: color .15s;
        }
        .hfaq-btn:hover { color: var(--g); }
        .hfaq-chev { flex-shrink: 0; color: var(--ink4); transition: transform .25s ease, color .15s; }
        .hfaq-item.open .hfaq-chev { transform: rotate(180deg); color: var(--g); }
        .hfaq-ans {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows .25s ease;
        }
        .hfaq-item.open .hfaq-ans { grid-template-rows: 1fr; }
        .hfaq-ans-in { overflow: hidden; }
        .hfaq-ans-in p {
          padding: 0 28px 22px;
          margin: 0;
          font-size: 14.5px;
          color: var(--ink3);
          line-height: 1.75;
        }
        .hfaq-more { text-align: center; margin-top: 36px; }
      `}</style>
      <section className="hfaq">
        <div className="wrap">
          <div className="sh-row" data-reveal="up">
            <h2>Common questions, <em>straight answers.</em></h2>
            <p className="section-sub">Everything you need to know about working with PlusSquire.</p>
          </div>
          <div className="hfaq-box" data-reveal="up">
            {homeFaqs.map((item, i) => (
              <div key={item.q} className={`hfaq-item${openIdx === i ? ' open' : ''}`}>
                <button
                  type="button"
                  className="hfaq-btn"
                  onClick={() => setOpenIdx(openIdx === i ? null : i)}
                >
                  <span>{item.q}</span>
                  <ChevronDown size={18} className="hfaq-chev" />
                </button>
                <div className="hfaq-ans">
                  <div className="hfaq-ans-in">
                    <p>{item.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="hfaq-more">
            <Link href="/faq" className="link-more">View All 20+ FAQs →</Link>
          </div>
        </div>
      </section>
    </>
  )
}

/* ══════════════ STATS BAR ══════════════ */
export function StatsBar() {
  return (
    <>
      <style>{`
        .hero-stats-bar-dark { background: var(--dark); border-top: 1px solid rgba(255,255,255,.07); }
        .hero-stats-inner-dark {
          max-width: var(--max); margin: 0 auto;
          padding: 36px var(--px);
          display: flex;
        }
        .hs-item-d {
          flex: 1; text-align: center; padding: 0 24px;
          border-right: 1px solid rgba(255,255,255,.07);
        }
        .hs-item-d:last-child { border-right: none; }
        .hs-num-d { font-family: 'Inter', sans-serif; font-size: 36px; font-weight: 800; color: #fff; line-height: 1; }
        .hs-num-d span { color: var(--g); }
        .hs-lbl-d { font-size: 12.5px; color: rgba(255,255,255,.5); margin-top: 6px; font-weight: 600; }
        @media(max-width:1100px){
          .hero-stats-inner-dark { flex-wrap: wrap; }
          .hs-item-d { border-right: none; padding: 12px 16px; flex: 1 1 45%; }
        }
      `}</style>
      <div className="hero-stats-bar-dark">
        <div className="hero-stats-inner-dark">
          {[
            { num: '7,000', sup: '+',     lbl: 'Email Templates Built' },
            { num: '800',   sup: '+',     lbl: 'Projects Delivered' },
            { num: '13',    sup: '+ yrs', lbl: 'Industry Experience' },
            { num: '100',   sup: '%',     lbl: 'Job Success Score' },
            { num: 'Top',   sup: ' ⭐',   lbl: 'Rated Plus · Upwork' },
          ].map((s, i) => (
            <div key={s.lbl} className="hs-item-d" data-reveal="up" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="hs-num-d">{s.num}<span>{s.sup}</span></div>
              <div className="hs-lbl-d">{s.lbl}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

/* ══════════════ CTA BAND ══════════════ */
export function CtaBand() {
  return (
    <>
      <style>{`
        .cta-band { background: linear-gradient(135deg, #0d6846 0%, #1ea672 50%, #158058 100%); padding: 80px 0; }
        .cta-inner { display: flex; align-items: center; justify-content: space-between; gap: 40px; flex-wrap: wrap; }
        .cta-band h2 { color: #fff; margin: 0; }
        .cta-band h2 em { font-style: normal; color: #bbf7d0; }
        .cta-btns-wrap { display: flex; gap: 14px; flex-wrap: wrap; align-items: center; }
        .btn-cta-solid {
          background: #fff; color: var(--gd); padding: 15px 30px; border-radius: 10px;
          font-size: 15px; font-weight: 800; text-decoration: none;
          box-shadow: 0 10px 28px rgba(0,0,0,0.15);
          transition: transform .18s, box-shadow .18s;
        }
        .btn-cta-solid:hover { transform: translateY(-2px); box-shadow: 0 14px 34px rgba(0,0,0,0.22); }
        .btn-cta-white { background: transparent; color: #fff; border: 2px solid rgba(255,255,255,0.75); padding: 13.5px 28px; border-radius: 10px; font-size: 15px; font-weight: 700; text-decoration: none; flex-shrink: 0; white-space: nowrap; transition: border-color .18s, background .18s, transform .18s; position: relative; z-index: 1; }
        .btn-cta-white:hover { transform: translateY(-2px); border-color: #fff; background: rgba(255,255,255,0.12); }
        @media(max-width:768px){ .cta-band { padding: 60px 0; } .cta-band .cta-br { display: none; } }
      `}</style>
      <div className="cta-band">
        <div className="wrap">
          <div className="cta-inner" data-reveal="up">
            <h2>Ready to turn your store and inbox<br className="cta-br" />into your <em>#1 revenue channel?</em></h2>
            <div className="cta-btns-wrap">
              <Link href="/#contact" className="btn-cta-solid">Start a Project →</Link>
              <Link href="/services/account-audit" className="btn-cta-white">Get a Free Audit</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

/* ══════════════ CONTACT ══════════════ */
export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [isSending, setIsSending] = useState(false)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [website, setWebsite] = useState('')
  const [fallbackMailto, setFallbackMailto] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const service = (formData.get('service') as string) || 'Shopify & Klaviyo Inquiry'
    const message = (formData.get('message') as string) || ''

    const subject = encodeURIComponent(`New Project Inquiry from ${firstName} ${lastName} (${website || 'PlusSquire'})`)
    const body = encodeURIComponent(
      `Name: ${firstName} ${lastName}\nEmail: ${email}\nWebsite: ${website}\nService Needed: ${service}\n\nProject Details:\n${message}`
    )
    const mailtoUrl = `mailto:hello@plussquire.com?subject=${subject}&body=${body}`
    setFallbackMailto(mailtoUrl)
    setIsSending(true)

    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          website,
          service,
          message,
        }),
      })
    } catch {
      // Even if offline, show the confirmation screen with direct WhatsApp & email options
    } finally {
      setIsSending(false)
      setSubmitted(true)
    }
  }

  return (
    <>
      <style>{`
        .contact { background: #fff; padding: 96px 0; }
        .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: stretch; }
        .contact-left h2 { text-align: left; }
        .contact-left p { color: var(--ink3); font-size: 15.5px; line-height: 1.8; margin-bottom: 32px; }
        .cinfo { display: flex; align-items: center; gap: 14px; margin-bottom: 14px; color: var(--ink2); font-size: 14.5px; font-weight: 500; text-decoration: none; }
        .cinfo-ico { width: 38px; height: 38px; border-radius: 10px; background: var(--gl); color: var(--g); display: flex; align-items: center; justify-content: center; font-size: 15px; flex-shrink: 0; }
        .cal-block { margin-top: 32px; background: var(--soft); border: 1px solid var(--border); border-radius: 16px; padding: 28px; }
        .cal-block h4 { font-size: 16.5px; margin-bottom: 8px; color: var(--ink); }
        .cal-block p { font-size: 14px; color: var(--ink3); margin-bottom: 18px; }
        .cal-btns { display: flex; gap: 10px; }
        .cal-btns > a { flex: 1 1 0; }
        .btn-cal { display: inline-flex; align-items: center; justify-content: center; text-align: center; gap: 7px; background: var(--ink); color: #fff; padding: 12px 14px; border-radius: 9px; font-size: 13.5px; font-weight: 600; text-decoration: none; transition: background .18s; }
        .btn-cal:hover { background: var(--ink2); }
        .btn-whatsapp { display: inline-flex; align-items: center; justify-content: center; text-align: center; gap: 7px; background: var(--g); color: #fff; padding: 12px 14px; border-radius: 9px; font-size: 13.5px; font-weight: 600; text-decoration: none; transition: background .18s; }
        .btn-whatsapp:hover { background: var(--gd); }
        .btn-cal svg, .btn-whatsapp svg { flex-shrink: 0; }
        @media(max-width:480px){ .cal-btns { flex-direction: column; } }
        .contact-form { background: var(--soft); border: 1px solid var(--border); border-radius: 20px; padding: 40px; height: 100%; box-sizing: border-box; }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
        .fg { display: flex; flex-direction: column; gap: 7px; margin-bottom: 14px; }
        label { font-size: 11.5px; font-weight: 700; letter-spacing: .07em; text-transform: uppercase; color: var(--ink3); }
        input,textarea,select { background: #fff; border: 1.5px solid var(--border); color: var(--ink); padding: 12px 15px; border-radius: 8px; font-size: 14.5px; font-family: inherit; outline: none; transition: border-color .18s, box-shadow .18s; width: 100%; -webkit-appearance: none; }
        input:focus,textarea:focus,select:focus { border-color: var(--g); box-shadow: 0 0 0 3px rgba(30,166,114,.1); }
        textarea { min-height: 120px; resize: vertical; }
        .form-submit { width: 100%; background: linear-gradient(135deg, #1ea672 0%, #158058 100%); color: #fff; border: none; cursor: pointer; padding: 15px; border-radius: 10px; font-size: 15px; font-weight: 700; font-family: inherit; transition: transform .18s, box-shadow .18s; margin-top: 6px; position: relative; z-index: 1; box-shadow: 0 4px 16px rgba(30,166,114,0.28); }
        .form-submit:hover { transform: translateY(-1px); box-shadow: 0 8px 24px rgba(30,166,114,0.36); }
        .form-success {
          background: var(--gl);
          border: 1.5px solid var(--g);
          border-radius: 14px;
          padding: 28px;
          text-align: center;
          color: var(--ink);
        }
        .form-success h4 { font-size: 20px; margin: 10px 0 8px; color: var(--gd); }
        .form-success p { font-size: 14.5px; color: var(--ink2); margin-bottom: 18px; }
        @media(max-width:768px){ .contact-grid { grid-template-columns: 1fr; } .form-row { grid-template-columns: 1fr; } }
      `}</style>
      <section className="contact" id="contact">
        <div className="wrap">
          <div className="contact-grid">
            <div className="contact-left" data-reveal="left">
              <h2>Let&apos;s build something<br /><em>great together.</em></h2>
              <p>Whether it&apos;s a custom Shopify build, a Klaviyo retention overhaul, or white-label agency support—tell us about your goals. We respond within 24 hours.</p>
              <a href="mailto:hello@plussquire.com" className="cinfo">
                <div className="cinfo-ico"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 7L2 7"/></svg></div>
                hello@plussquire.com
              </a>
              <div className="cinfo">
                <div className="cinfo-ico"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div>
                Fast response within 24 hours
              </div>
              <div className="cinfo">
                <div className="cinfo-ico"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg></div>
                Serving DTC brands &amp; agencies across US, UK, CA &amp; AU
              </div>
              <a href={UPWORK_URL} target="_blank" rel="noopener noreferrer" className="cinfo">
                <div className="cinfo-ico"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></div>
                Top Rated Plus on Upwork · 100% Job Success (800+ Projects) ↗
              </a>
              <div className="cal-block">
                <h4>📅 Prefer to talk first?</h4>
                <p>Book a free 30-minute discovery call, no commitment, just a quick chat to see if we&apos;re a good fit.</p>
                <div className="cal-btns">
                  <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-cal">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                    Book a Free Discovery Call
                  </a>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.05 2zm5.8 14.1c-.24.68-1.4 1.3-1.93 1.38-.5.08-1.11.11-1.79-.11a16.7 16.7 0 0 1-1.6-.6c-2.82-1.22-4.66-4.07-4.8-4.26-.14-.19-1.15-1.53-1.15-2.92 0-1.39.73-2.07.99-2.35.26-.28.57-.35.76-.35.19 0 .38 0 .55.01.18.01.41-.07.64.49.24.58.81 2 .88 2.15.07.15.12.32.02.51-.09.19-.14.31-.28.48-.14.17-.29.37-.42.5-.14.14-.28.29-.12.57.16.28.72 1.19 1.55 1.93 1.06.95 1.96 1.24 2.24 1.38.28.14.44.12.61-.07.17-.19.71-.83.9-1.11.19-.28.38-.24.64-.14.26.09 1.66.78 1.94.92.28.14.47.21.54.33.07.12.07.68-.17 1.36z"/></svg>
                    Urgent? Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
            <form className="contact-form" data-reveal="right" onSubmit={handleSubmit}>
              {submitted ? (
                <div className="form-success">
                  <CheckCircle2 size={44} color="var(--g)" style={{ margin: '0 auto' }} />
                  <h4>Inquiry Received — Thank You, {firstName || 'There'}!</h4>
                  <p>
                    Your project details have been submitted to <strong>hello@plussquire.com</strong>. Zahidul and the engineering team will review your requirements and reply within <strong>24 hours</strong>.
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center', marginTop: '14px' }}>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      Fast-Track on WhatsApp ↗
                    </a>
                    {fallbackMailto && (
                      <a href={fallbackMailto} className="btn-dark-outline">
                        Send Copy via Email App
                      </a>
                    )}
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      style={{
                        background: 'transparent',
                        border: 'none',
                        color: 'var(--ink3)',
                        fontSize: '13px',
                        fontWeight: 600,
                        cursor: 'pointer',
                        textDecoration: 'underline',
                        width: '100%',
                        marginTop: '6px',
                      }}
                    >
                      Submit another inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="form-row">
                    <div className="fg">
                      <label>First Name *</label>
                      <input type="text" required placeholder="John" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    </div>
                    <div className="fg">
                      <label>Last Name</label>
                      <input type="text" placeholder="Smith" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    </div>
                  </div>
                  <div className="fg">
                    <label>Email Address *</label>
                    <input type="email" required placeholder="john@company.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div className="fg">
                    <label>Company / Store URL</label>
                    <input type="text" placeholder="mystore.com" value={website} onChange={(e) => setWebsite(e.target.value)} />
                  </div>
                  <ContactServiceFields />
                  <button type="submit" className="form-submit" disabled={isSending} style={{ opacity: isSending ? 0.75 : 1 }}>
                    {isSending ? 'Sending Project Inquiry...' : 'Send Project Inquiry →'}
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

/* ══════════════ FOOTER ══════════════ */
export function Footer() {
  return (
    <>
      <style>{`
        footer { background: var(--dark); padding: 72px 0 36px; }
        .footer-inner { max-width: var(--max); margin: 0 auto; padding: 0 var(--px); }
        .footer-top { display: grid; grid-template-columns: 2.2fr 1fr 1fr 1fr; gap: 60px; padding-bottom: 56px; border-bottom: 1px solid rgba(255,255,255,.07); }
        .footer-logo { display: flex; align-items: center; gap: 8px; text-decoration: none; margin-bottom: 16px; font-family: 'Inter', sans-serif; font-weight: 800; font-size: 20px; color: #fff; }
        .footer-desc { color: rgba(255,255,255,.5); font-size: 14px; line-height: 1.8; max-width: 300px; margin-bottom: 24px; }
        .social-links { display: flex; gap: 10px; }
        .social-btn { width: 36px; height: 36px; border-radius: 8px; border: 1px solid rgba(255,255,255,.1); display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 700; text-decoration: none; color: rgba(255,255,255,.5); transition: border-color .15s, color .15s; }
        .social-btn:hover { border-color: var(--g); color: var(--g); }
        .fcol h4 { font-size: 11px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; color: rgba(255,255,255,.35); margin-bottom: 20px; }
        .fcol ul { list-style: none; }
        .fcol ul li { margin-bottom: 11px; }
        .fcol ul li a { color: rgba(255,255,255,.6); font-size: 14px; text-decoration: none; transition: color .15s; }
        .fcol ul li a:hover { color: #fff; }
        .footer-bottom { padding-top: 30px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px; color: rgba(255,255,255,.35); font-size: 13px; }
        .footer-bottom a { color: rgba(255,255,255,.5); text-decoration: none; transition: color .15s; }
        .footer-bottom a:hover { color: #fff; }
        @media(max-width:1100px){ .footer-top { grid-template-columns: 1fr 1fr; } }
        @media(max-width:480px){ .footer-top { grid-template-columns: 1fr; gap: 32px; } }
      `}</style>
      <footer>
        <div className="footer-inner">
          <div className="footer-top" data-reveal="up">
            <div>
              <Link href="/" className="footer-logo">
                <Image src="/plussquire-logo-dark.svg" alt="PlusSquire" width={141} height={24} unoptimized />
              </Link>
              <p className="footer-desc">Shopify engineering, bulletproof HTML email development, and Klaviyo retention systems. Led by Zahidul Islam · Top Rated Plus on Upwork · 13+ years · 800+ projects delivered.</p>
              <div className="social-links">
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="LinkedIn">in</a>
                <a href="#" className="social-btn" aria-label="X / Twitter">𝕏</a>
                <a href="#" className="social-btn" aria-label="Instagram">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
                </a>
                <a href={UPWORK_URL} target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Upwork">Up</a>
              </div>
            </div>
            <div className="fcol">
              <h4>Services</h4>
              <ul>
                <li><Link href="/services/shopify-theme-development">Shopify Theme Development</Link></li>
                <li><Link href="/services/shopify-migration">Shopify Migration</Link></li>
                <li><Link href="/services/klaviyo-account-setup">Klaviyo Account Setup</Link></li>
                <li><Link href="/services/email-design">Email Design &amp; HTML Dev</Link></li>
                <li><Link href="/services/flow-setup">Flow Setup &amp; Optimize</Link></li>
                <li><Link href="/services/email-deliverability">Email Deliverability</Link></li>
              </ul>
            </div>
            <div className="fcol">
              <h4>Company</h4>
              <ul>
                {[['About Us','/about'],['Case Studies','/case-studies'],['Pricing','/pricing'],['Portfolio','/portfolio'],['Insights','/insights'],['FAQ','/faq']].map(([l,h]) => (
                  <li key={l}><Link href={h}>{l}</Link></li>
                ))}
              </ul>
            </div>
            <div className="fcol">
              <h4>Verified Connect</h4>
              <ul>
                <li><a href={UPWORK_URL} target="_blank" rel="noopener noreferrer">Upwork Profile (100% JSS) ↗</a></li>
                <li><a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a></li>
                <li><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">WhatsApp Direct ↗</a></li>
                <li><a href="mailto:hello@plussquire.com">hello@plussquire.com</a></li>
                <li><Link href="/#contact">Start a Project →</Link></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 PlusSquire. All rights reserved.</span>
            <span><Link href="/privacy">Privacy Policy</Link> · <Link href="/terms">Terms &amp; Conditions</Link></span>
          </div>
        </div>
      </footer>
    </>
  )
}
