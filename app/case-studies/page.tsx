import Link from 'next/link'
import Navbar from '../components/Navbar'
import { Footer } from '../components/Sections'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Case Studies — Proven Shopify & Klaviyo Revenue Growth',
  description:
    'See how PlusSquire helps eCommerce brands scale revenue through custom Shopify engineering, Klaviyo flow architecture, email deliverability recovery, and SMS marketing.',
  alternates: { canonical: '/case-studies' },
}

type CaseItem = {
  tag: string
  title: string
  body: string
  metrics: { val: string; lbl: string }[]
  img: string
  featured: boolean
  href?: string
}

const cases: CaseItem[] = [
  {
    tag: 'Skincare · Shopify + Klaviyo',
    title: 'From $142K to $1.86M/month for a DTC skincare brand',
    body: 'Rebuilt the Shopify store experience and a full Klaviyo email and SMS retention engine in 90 days, turning automated flows from 12% of revenue into a $574K+ monthly retention channel.',
    metrics: [{ val: '$1.86M', lbl: 'Peak Monthly Revenue' }, { val: '$574K', lbl: 'Email & SMS (30 Days)' }, { val: '+215%', lbl: 'Retention Revenue' }],
    img: '/images/services/klaviyo-account-setup/hero-dashboard.jpg',
    featured: true,
    href: '/case-studies/dtc-skincare-growth-case-study',
  },
  {
    tag: 'Luxury Spirits · Shopify + Klaviyo',
    title: '+$438K/month in retention revenue for a luxury DTC brand',
    body: 'Re-engineered an enterprise Shopify store and replaced blanket promo blasts with an 8-stage Klaviyo retention system, scaling store revenue from $2.18M to $5.12M a month while protecting margins.',
    metrics: [{ val: '+$438K', lbl: 'Monthly Retention Lift' }, { val: '$5.12M', lbl: 'Monthly Store Revenue' }, { val: '+18.5%', lbl: 'AOV' }],
    img: '/images/services/reporting-improvement/hero-reporting-dashboard.jpg',
    featured: true,
    href: '/case-studies/luxury-spirits-growth-case-study',
  },
  {
    tag: 'Apparel · Email + SMS Flash',
    title: '$84,320 in 7 days for a DTC apparel brand',
    body: 'Ran a synchronized 7-day email and SMS flash campaign with automatic buyer suppression and Shopify cart tier unlocks, driving a 34.2% storewide sales lift without burning the list.',
    metrics: [{ val: '$84.3K', lbl: 'Revenue in 7 Days' }, { val: '+34.2%', lbl: 'Weekly Store Sales' }, { val: '0.01%', lbl: 'Complaint Rate' }],
    img: '/images/services/email-campaigns/hero-campaign-results.jpg',
    featured: true,
    href: '/case-studies/7-day-flash-growth-case-study',
  },
  {
    tag: 'eCommerce · Klaviyo Flows',
    title: '42% email revenue lift for a DTC fashion brand',
    body: "Rebuilt their entire Klaviyo automation stack: welcome series, abandoned cart, and post-purchase flows from the ground up with a data-led approach that turned automations into their #1 revenue channel.",
    metrics: [{ val: '+42%', lbl: 'Email Revenue' }, { val: '3.8×', lbl: 'Flow ROI' }, { val: '58%', lbl: 'Open Rate' }],
    img: '/images/services/flow-setup/hero-flows-autopilot.jpg',
    featured: true,
    href: '/#contact',
  },
  {
    tag: 'SaaS · HubSpot & HTML Dev',
    title: 'Onboarding redesign reduced churn for a B2B SaaS',
    body: 'Rebuilt a 12-email HTML onboarding sequence focused on activation milestones, cutting early churn and significantly improving 30-day retention.',
    metrics: [{ val: '−28%', lbl: 'Churn' }, { val: '+61%', lbl: 'Activation' }],
    img: '/images/services/email-development/hero-code-renders.jpg',
    featured: false,
    href: '/#contact',
  },
  {
    tag: 'Retail · Promotional Campaigns',
    title: '£92K from 8 holiday emails for a UK retail chain',
    body: 'Designed and deployed 8 seasonal campaigns across Black Friday, Christmas, and New Year with sharp copy, mobile-first design, and an avg 4.2% CTR.',
    metrics: [{ val: '£92K', lbl: 'Revenue Generated' }, { val: '4.2%', lbl: 'Avg CTR' }],
    img: '/images/services/email-design/hero-pixel-perfect.jpg',
    featured: false,
    href: '/#contact',
  },
]

export default function CaseStudiesPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '68px' }}>
        <style>{`
          .cs-hero {
            padding: 64px 0 56px;
            background:
              radial-gradient(ellipse at top left, rgba(30, 166, 114, 0.14) 0%, transparent 60%),
              radial-gradient(ellipse at bottom right, rgba(30, 166, 114, 0.14) 0%, transparent 60%),
              #ffffff;
          }
          .cases { background: #fff; padding: 56px 0 96px; }
          .cases-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
          .case-card {
            border: 1px solid var(--border); border-radius: 20px;
            overflow: hidden; cursor: pointer;
            transition: box-shadow .24s, transform .24s, border-color .24s; text-decoration: none; display: flex; flex-direction: column;
          }
          .case-card:hover { box-shadow: 0 16px 44px rgba(15,22,35,.09); transform: translateY(-4px); border-color: var(--gm); }
          .case-body { padding: 38px; flex: 1; display: flex; flex-direction: column; }
          .case-tag {
            display: inline-block; align-self: flex-start;
            background: var(--gl); color: var(--gd);
            font-size: 11px; font-weight: 700; letter-spacing: .06em;
            text-transform: uppercase; padding: 4px 11px; border-radius: 4px; margin-bottom: 18px;
          }
          .case-card h3 { font-size: 22px; margin-bottom: 12px; line-height: 1.25; color: var(--ink); }
          .case-card p { color: var(--ink3); font-size: 14.5px; line-height: 1.75; margin-bottom: 26px; flex: 1; }
          .case-nums { display: flex; gap: 26px; flex-wrap: wrap; padding-top: 20px; border-top: 1px solid var(--border); }
          .cn-val { font-family: 'Inter', sans-serif; font-size: 26px; font-weight: 800; color: var(--g); line-height: 1; }
          .cn-lbl { font-size: 11.5px; color: var(--ink3); font-weight: 600; margin-top: 4px; }
          .case-read { display: inline-block; margin-top: 22px; font-size: 14px; font-weight: 700; color: var(--gd); transition: transform .18s; }
          .case-card:hover .case-read { transform: translateX(4px); color: var(--g); }
          .case-thumb {
            background: var(--dark);
            overflow: hidden;
            border-top: 1px solid var(--border);
          }
          .case-thumb img {
            width: 100%; height: 100%; object-fit: cover; display: block;
            transition: transform .45s ease;
          }
          .case-card:hover .case-thumb img { transform: scale(1.04); }
          .case-featured { grid-column: span 2; display: grid; grid-template-columns: 1.15fr 0.85fr; }
          .case-featured .case-thumb { border-top: none; border-left: 1px solid var(--border); min-height: 300px; }
          .case-thumb-sm { height: 220px; }

          @media(max-width:860px){
            .cases-grid { grid-template-columns: 1fr; }
            .case-featured { grid-column: span 1; grid-template-columns: 1fr; }
            .case-featured .case-thumb { border-left: none; border-top: 1px solid var(--border); min-height: 220px; }
          }
        `}</style>

        <section className="cs-hero">
          <div className="wrap">
            <div className="sh-row" style={{ marginBottom: 0 }} data-reveal="up">
              <h1 style={{ fontSize: 'clamp(36px,4.5vw,56px)' }}>Real clients. Real revenue. <em>Real results.</em></h1>
              <p className="section-sub">Here&apos;s what we&apos;ve delivered for real brands across Shopify builds and Klaviyo email programs.</p>
            </div>
          </div>
        </section>

        <section className="cases">
          <div className="wrap">
            <div className="cases-grid">
              {cases.map((c, i) => (
                <Link key={c.title} href={c.href ?? '/case-studies'} className={`case-card${c.featured ? ' case-featured' : ''}`} data-reveal={i === 0 ? 'zoom' : i % 2 ? 'left' : 'right'} style={{ transitionDelay: `${i * 110}ms` }}>
                  <div className="case-body">
                    <div className="case-tag">{c.tag}</div>
                    <h3>{c.title}</h3>
                    <p>{c.body}</p>
                    <div className="case-nums">
                      {c.metrics.map((m) => (
                        <div key={m.lbl}>
                          <div className="cn-val">{m.val}</div>
                          <div className="cn-lbl">{m.lbl}</div>
                        </div>
                      ))}
                    </div>
                    {c.href?.startsWith('/case-studies/') ? (
                      <span className="case-read">Read the full case study →</span>
                    ) : (
                      <span className="case-read">Request similar results →</span>
                    )}
                  </div>
                  <div className={`case-thumb${c.featured ? '' : ' case-thumb-sm'}`}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={c.img} alt={c.title} loading="lazy" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
