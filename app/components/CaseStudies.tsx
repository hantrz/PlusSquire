import Link from 'next/link'

const cases = [
  {
    tag: 'Skincare · Shopify + Klaviyo',
    title: 'From $142K to $1.86M/month for a DTC skincare brand',
    body: 'Rebuilt the Shopify storefront for mobile conversion and deployed a complete 90-day Klaviyo email + SMS retention engine, turning automated flows into a $574K/month channel.',
    metrics: [
      { val: '$1.86M', lbl: 'Peak Monthly Revenue' },
      { val: '$574K', lbl: 'Email & SMS (30 Days)' },
      { val: '+215%', lbl: 'Retention Revenue Lift' },
    ],
    img: '/images/services/klaviyo-account-setup/hero-dashboard.jpg',
    href: '/case-studies/dtc-skincare-growth-case-study',
    featured: true,
  },
  {
    tag: 'Luxury Spirits · Shopify + Klaviyo',
    title: '+$438K/month in retention revenue for a luxury DTC brand',
    body: 'Re-engineered an enterprise Shopify store and replaced blanket promo blasts with an 8-stage Klaviyo retention system, scaling store revenue from $2.18M to $5.12M/mo.',
    metrics: [
      { val: '+$438K', lbl: 'Monthly Retention Lift' },
      { val: '$5.12M', lbl: 'Monthly Store Revenue' },
      { val: '+18.5%', lbl: 'AOV Increase' },
    ],
    img: '/images/services/reporting-improvement/hero-reporting-dashboard.jpg',
    href: '/case-studies/luxury-spirits-growth-case-study',
    featured: false,
  },
  {
    tag: 'Apparel · Email + SMS Flash',
    title: '$84,320 in 7 days for a DTC apparel brand',
    body: 'Executed a synchronized 7-day Klaviyo email and SMS flash campaign with automatic buyer suppression and custom Shopify cart tier unlocks.',
    metrics: [
      { val: '$84.3K', lbl: 'Revenue in 7 Days' },
      { val: '+34.2%', lbl: 'Weekly Store Sales' },
      { val: '0.01%', lbl: 'Complaint Rate' },
    ],
    img: '/images/services/email-campaigns/hero-campaign-results.jpg',
    href: '/case-studies/7-day-flash-growth-case-study',
    featured: false,
  },
]

export default function CaseStudies() {
  return (
    <>
      <style>{`
        .cases { background: #fff; padding: 96px 0; }
        .cases-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
        .case-card {
          background: #fff;
          border: 1px solid var(--border);
          border-radius: 20px;
          overflow: hidden;
          cursor: pointer;
          transition: box-shadow .25s ease, transform .25s ease, border-color .25s ease;
          text-decoration: none;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .case-card:hover {
          box-shadow: 0 18px 44px rgba(15, 22, 35, 0.09);
          transform: translateY(-4px);
          border-color: var(--gm);
        }
        .case-body { padding: 36px; display: flex; flex-direction: column; flex: 1; }
        .case-tag {
          display: inline-block;
          align-self: flex-start;
          background: var(--gl);
          color: var(--gd);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: .06em;
          text-transform: uppercase;
          padding: 4px 11px;
          border-radius: 4px;
          margin-bottom: 16px;
        }
        .case-card h3 { font-size: 22px; margin-bottom: 12px; line-height: 1.25; color: var(--ink); }
        .case-card p { color: var(--ink3); font-size: 14.5px; line-height: 1.75; margin-bottom: 26px; flex: 1; }
        .case-nums {
          display: flex;
          gap: 28px;
          flex-wrap: wrap;
          padding-top: 20px;
          border-top: 1px solid var(--border);
        }
        .cn-val { font-family: 'Inter', sans-serif; font-size: 26px; font-weight: 800; color: var(--g); line-height: 1; }
        .cn-lbl { font-size: 11.5px; color: var(--ink3); font-weight: 600; margin-top: 4px; }
        .case-read {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-top: 20px;
          font-size: 13.5px;
          font-weight: 700;
          color: var(--gd);
          transition: gap .18s ease;
        }
        .case-card:hover .case-read { gap: 10px; color: var(--g); }

        .case-thumb {
          position: relative;
          background: var(--dark);
          overflow: hidden;
          border-top: 1px solid var(--border);
        }
        .case-thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform .45s ease;
        }
        .case-card:hover .case-thumb img {
          transform: scale(1.04);
        }
        .case-featured {
          grid-column: span 2;
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
        }
        .case-featured .case-thumb {
          border-top: none;
          border-left: 1px solid var(--border);
          min-height: 320px;
        }
        .case-thumb-sm { height: 220px; }

        /* Bottom CTA */
        .cases-cta { text-align: center; margin-top: 48px; }

        @media(max-width:860px){
          .cases-grid { grid-template-columns: 1fr; }
          .case-featured { grid-column: span 1; grid-template-columns: 1fr; }
          .case-featured .case-thumb { border-left: none; border-top: 1px solid var(--border); min-height: 220px; }
        }
      `}</style>

      <section className="cases" id="cases">
        <div className="wrap">
          <div className="sh-row" data-reveal="up">
            <h2>Real clients. Real revenue. <em>Real results.</em></h2>
            <p className="section-sub">From custom Shopify builds to full-funnel Klaviyo retention architectures—explore our verified growth breakdowns.</p>
          </div>
          <div className="cases-grid">
            {cases.map((c, i) => (
              <Link
                key={c.title}
                href={c.href}
                className={`case-card${c.featured ? ' case-featured' : ''}`}
                data-reveal={i === 0 ? 'zoom' : i % 2 ? 'left' : 'right'}
                style={{ transitionDelay: `${i * 110}ms` }}
              >
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
                  <span className="case-read">Read Full Case Study →</span>
                </div>
                <div className={`case-thumb${c.featured ? '' : ' case-thumb-sm'}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.img} alt={c.title} loading="lazy" />
                </div>
              </Link>
            ))}
          </div>
          <div className="cases-cta">
            <Link href="/case-studies" className="link-more">Explore All 6 Case Studies →</Link>
          </div>
        </div>
      </section>
    </>
  )
}
