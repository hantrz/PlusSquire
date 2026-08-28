import Link from 'next/link'
import Navbar from '../components/Navbar'
import { Footer } from '../components/Sections'

const cases = [
  {
    tag: 'eCommerce · Klaviyo',
    title: '42% email revenue lift for a DTC fashion brand',
    body: "Rebuilt their entire Klaviyo automation stack: welcome series, abandoned cart, and post-purchase flows from the ground up with a data-led approach that turned automations into their #1 revenue channel.",
    metrics: [{ val: '+42%', lbl: 'Email Revenue' }, { val: '3.8×', lbl: 'Flow ROI' }, { val: '58%', lbl: 'Open Rate' }],
    featured: true,
  },
  {
    tag: 'SaaS · HubSpot',
    title: 'Onboarding redesign reduced churn for a B2B SaaS',
    body: 'Rebuilt a 12-email HTML onboarding sequence focused on activation milestones, cutting early churn and significantly improving 30-day retention.',
    metrics: [{ val: '−28%', lbl: 'Churn' }, { val: '+61%', lbl: 'Activation' }],
    featured: false,
  },
  {
    tag: 'Retail · Mailchimp',
    title: '£92K from 8 holiday emails for a UK retail chain',
    body: 'Designed and deployed 8 seasonal campaigns across Black Friday, Christmas, and New Year with sharp copy, mobile-first design, and an avg 4.2% CTR.',
    metrics: [{ val: '£92K', lbl: 'Revenue Generated' }, { val: '4.2%', lbl: 'Avg CTR' }],
    featured: false,
  },
]

function EmailMockup() {
  return (
    <div className="email-mockup">
      <div className="em-header" />
      <div className="em-line em-line-1" />
      <div className="em-line em-line-2" />
      <div className="em-line em-line-3" />
      <div className="em-cta" />
    </div>
  )
}

export default function CaseStudiesPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '68px' }}>
        <style>{`
          .cases { background: #fff; padding: 96px 0; }
          .cases-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 22px; }
          .case-card {
            border: 1px solid var(--border); border-radius: 18px;
            overflow: hidden; cursor: pointer;
            transition: box-shadow .22s, transform .22s; text-decoration: none; display: block;
          }
          .case-card:hover { box-shadow: 0 14px 40px rgba(0,0,0,.08); transform: translateY(-3px); }
          .case-body { padding: 38px; }
          .case-tag {
            display: inline-block;
            background: var(--gl); color: var(--gd);
            font-size: 11px; font-weight: 700; letter-spacing: .06em;
            text-transform: uppercase; padding: 4px 11px; border-radius: 4px; margin-bottom: 18px;
          }
          .case-card h3 { font-size: 21px; margin-bottom: 12px; line-height: 1.25; color: var(--ink); }
          .case-card p { color: var(--ink3); font-size: 14px; line-height: 1.75; margin-bottom: 26px; }
          .case-nums { display: flex; gap: 24px; }
          .cn-val { font-family: 'Inter', sans-serif; font-size: 26px; font-weight: 800; color: var(--g); line-height: 1; }
          .cn-lbl { font-size: 11.5px; color: var(--ink4); margin-top: 3px; }
          .case-thumb {
            background: linear-gradient(135deg, #e8f5f0, #d0ede3);
            display: flex; align-items: center; justify-content: center;
          }
          .case-featured { grid-column: span 2; display: grid; grid-template-columns: 1fr 360px; }
          .case-featured .case-thumb { min-height: 280px; }
          .case-thumb-sm { height: 120px; }

          /* Email mockup visual (placeholder) */
          .email-mockup {
            display: flex; flex-direction: column; align-items: center; gap: 8px;
            width: 120px;
          }
          .em-header {
            width: 60%; height: 10px;
            background: #1a2e28; border-radius: 4px; opacity: 0.25;
          }
          .em-line {
            height: 6px; border-radius: 3px;
            background: #1a2e28; opacity: 0.15;
          }
          .em-line-1 { width: 100%; }
          .em-line-2 { width: 80%; }
          .em-line-3 { width: 90%; }
          .em-cta {
            width: 80px; height: 20px;
            background: var(--g); border-radius: 6px; opacity: 0.4;
            margin-top: 2px;
          }

          @media(max-width:768px){
            .cases-grid { grid-template-columns: 1fr; }
            .case-featured { grid-column: span 1; grid-template-columns: 1fr; }
            .case-featured .case-thumb { min-height: 160px; }
          }
        `}</style>

        <section className="cases">
          <div className="wrap">
            <div className="sh-row">
              <div className="section-tag" style={{ justifyContent: 'center' }}>Case Studies</div>
              <h1 style={{ fontSize: 'clamp(36px,4.5vw,56px)' }}>Real clients. Real revenue. <em style={{ color: 'var(--g)', fontStyle: 'normal' }}>Real results.</em></h1>
              <p className="section-sub">Here&apos;s what we&apos;ve delivered for real brands, across Shopify builds and email programs.</p>
            </div>
            <div className="cases-grid">
              {cases.map((c) => (
                <Link key={c.title} href="/case-studies" className={`case-card${c.featured ? ' case-featured' : ''}`}>
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
                  </div>
                  <div className={`case-thumb${c.featured ? '' : ' case-thumb-sm'}`}>
                    <EmailMockup />
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
