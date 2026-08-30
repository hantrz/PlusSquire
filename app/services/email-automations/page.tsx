import Link from 'next/link'
import Navbar from '../../components/Navbar'
import { Footer } from '../../components/Sections'
import {
  CheckCircle2, Mail, MessageSquare, Star, Gift, ShoppingBag,
  PackageCheck, Truck, Repeat, RotateCcw, Users, TrendingUp,
} from 'lucide-react'

const eauHubNodes = [
  { icon: Mail,          label: 'Intro Email',   x: 50, y: 8 },
  { icon: MessageSquare, label: 'Brand Story',   x: 89, y: 35 },
  { icon: Star,          label: 'Social Proof',  x: 74, y: 88 },
  { icon: Gift,          label: 'First Offer',   x: 26, y: 88 },
  { icon: ShoppingBag,   label: 'Product Tour',  x: 11, y: 35 },
]

const eauFoundationItems = [
  { icon: PackageCheck, label: 'Order Confirmation' },
  { icon: Truck,        label: 'Shipping Updates' },
  { icon: Repeat,       label: 'Replenishment Reminder' },
  { icon: Star,         label: 'Review Request' },
]

const eauIncluded = [
  'Welcome series to convert new subscribers immediately',
  'Abandoned cart & browse abandonment recovery flows',
  'Post-purchase, replenishment & cross-sell automations',
  'Win-back flows built for lapsing subscribers',
  'Sunset & suppression flows that protect deliverability',
  'Dynamic personalization based on browsing & purchase behavior',
  'Flow-level reporting & revenue attribution',
  'Ongoing testing & optimization of every automation',
]

const eauSteps = [
  { n: '01', title: 'Map the Customer Journey', desc: 'We identify every key moment worth automating: signup, cart abandon, purchase, repeat, and beyond.' },
  { n: '02', title: 'Build & Connect Flows', desc: 'Flows are built, timed, and connected directly to your store data so they trigger on real customer behavior.' },
  { n: '03', title: 'Launch & Optimize', desc: 'Flows go live, then get tested and refined against real performance so they keep improving over time.' },
]

export default function EmailAutomationsPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '68px' }}>
        <style>{`
          .eau-hero {
            padding: 64px 0 76px;
            background:
              radial-gradient(ellipse at top left, rgba(30, 166, 114, 0.14) 0%, transparent 60%),
              radial-gradient(ellipse at bottom right, rgba(30, 166, 114, 0.14) 0%, transparent 60%),
              #ffffff;
            overflow: hidden; position: relative;
          }
          .eau-hero-grid { display: grid; grid-template-columns: minmax(0,1fr) minmax(0,1fr); gap: 48px; align-items: center; }
          .eau-hero-left .section-tag::before { display: none; }
          .eau-hero-left h1 { margin-bottom: 18px; }
          .eau-hero-left .section-sub { margin-bottom: 32px; max-width: 480px; }
          .eau-btns { display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 28px; }
          .eau-proof { display: flex; align-items: center; gap: 6px; font-size: 13px; color: var(--ink3); }

          .eau-hero-card {
            background: #fff; border: 1px solid var(--border); border-radius: 20px;
            padding: 40px 38px; box-shadow: 0 28px 70px rgba(15,22,35,.09);
            max-width: 480px; width: 100%; margin: 0 auto;
          }
          .eau-hero-card-title { font-size: 14px; font-weight: 800; text-transform: uppercase; letter-spacing: .04em; color: var(--g); margin-bottom: 22px; }
          .eau-hero-card ul { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 20px; }
          .eau-hero-card li { display: flex; align-items: flex-start; gap: 12px; font-size: 15.5px; color: var(--ink2); line-height: 1.5; }
          .eau-hero-card li svg { color: var(--g); flex-shrink: 0; margin-top: 2px; }

          @media(max-width:1000px){
            .eau-hero-grid { grid-template-columns: 1fr; }
            .eau-hero-card { max-width: 520px; }
          }

          .eau-feature { padding: 72px 0; }
          .eau-feature-alt { background: var(--soft); }
          .eau-feature-alt .eau-migrate-viz,
          .eau-feature-alt .eau-cost-viz,
          .eau-feature-alt .eau-foundation-viz { background: #fff; }
          .eau-feature-grid { display: grid; grid-template-columns: minmax(0,1fr) minmax(0,1fr); gap: 56px; align-items: center; }
          .eau-feature-tag { font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: .05em; color: var(--g); margin-bottom: 12px; }
          .eau-feature h2 { font-size: clamp(24px, 2.4vw, 30px); color: var(--ink); margin-bottom: 14px; }
          .eau-feature-sub { color: var(--ink3); font-size: 15.5px; line-height: 1.75; margin-bottom: 22px; max-width: 460px; }
          .eau-feature ul { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 14px; }
          .eau-feature li { display: flex; align-items: flex-start; gap: 10px; font-size: 14.5px; color: var(--ink2); line-height: 1.55; max-width: 440px; }
          .eau-feature li svg { color: var(--g); flex-shrink: 0; margin-top: 2px; }

          @media(max-width:900px){
            .eau-feature-grid { grid-template-columns: 1fr; }
          }

          .eau-hub-viz { position: relative; width: 100%; max-width: 340px; aspect-ratio: 1/1; margin: 0 auto; }
          .eau-hub-lines { position: absolute; inset: 0; width: 100%; height: 100%; }
          .eau-hub-center {
            position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%);
            width: 34%; aspect-ratio: 1/1; border-radius: 50%;
            background: linear-gradient(135deg, #1ea672, #17845b); color: #fff;
            display: flex; align-items: center; justify-content: center;
            font-size: 12.5px; font-weight: 800; letter-spacing: .02em; text-align: center;
            box-shadow: 0 16px 40px rgba(30,166,114,.3); z-index: 2; padding: 6px;
          }
          .eau-hub-node {
            position: absolute; transform: translate(-50%,-50%);
            width: 30%; display: flex; flex-direction: column; align-items: center; gap: 6px; z-index: 2;
          }
          .eau-hub-node-ico {
            width: 38px; height: 38px; border-radius: 10px; background: #fff; border: 1px solid var(--border);
            color: var(--g); display: flex; align-items: center; justify-content: center;
            box-shadow: 0 6px 16px rgba(15,22,35,.06);
          }
          .eau-hub-node span { font-size: 10.5px; font-weight: 700; color: var(--ink3); }

          .eau-migrate-viz {
            background: var(--soft); border-radius: 16px; padding: 32px 24px;
            display: flex; align-items: center; justify-content: center; gap: 14px;
          }
          .eau-migrate-box {
            flex: 1; background: #fff; border: 1px solid var(--border); border-radius: 12px;
            padding: 22px 16px; text-align: center;
          }
          .eau-migrate-box span { display: block; font-size: 12px; font-weight: 700; color: var(--ink4); text-transform: uppercase; letter-spacing: .03em; margin-bottom: 10px; }
          .eau-migrate-box strong { font-size: 15px; color: var(--ink); }
          .eau-migrate-arrow { color: var(--g); flex-shrink: 0; }

          .eau-foundation-viz {
            background: var(--soft); border-radius: 16px; padding: 24px;
            display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 14px;
          }
          .eau-foundation-card {
            background: #fff; border: 1px solid var(--border); border-radius: 12px;
            padding: 22px 14px; text-align: center;
          }
          .eau-foundation-ico {
            width: 40px; height: 40px; border-radius: 10px; background: var(--gl); color: var(--g);
            display: flex; align-items: center; justify-content: center; margin: 0 auto 10px;
          }
          .eau-foundation-card span { font-size: 12.5px; font-weight: 700; color: var(--ink2); line-height: 1.3; }

          .eau-cost-viz { display: flex; align-items: center; gap: 14px; }
          .eau-cost-card {
            flex: 1; background: #fff; border: 1px solid var(--border); border-radius: 14px;
            padding: 22px 18px; text-align: center;
          }
          .eau-cost-card.after { border-color: var(--gm); background: var(--gl); }
          .eau-cost-card span { display: block; font-size: 11.5px; font-weight: 700; color: var(--ink4); text-transform: uppercase; letter-spacing: .03em; margin-bottom: 10px; }
          .eau-cost-num { font-size: 26px; font-weight: 800; color: var(--ink); margin-bottom: 4px; }
          .eau-cost-card.after .eau-cost-num { color: var(--gd); }
          .eau-cost-sub { font-size: 12.5px; color: var(--ink4); }
          .eau-cost-arrow { color: var(--g); flex-shrink: 0; }

          .eau-included { background: var(--soft); padding: 72px 0; }
          .eau-included-grid { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 18px 40px; max-width: 880px; margin: 0 auto; }
          .eau-included-item { display: flex; align-items: flex-start; gap: 12px; font-size: 15px; color: var(--ink2); font-weight: 600; }
          .eau-included-item svg { color: var(--g); flex-shrink: 0; margin-top: 2px; }
          @media(max-width:640px){ .eau-included-grid { grid-template-columns: 1fr; } }

          .eau-steps { padding: 72px 0 88px; }
          .eau-steps-grid { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 32px; }
          .eau-step { min-width: 0; }
          .eau-step-num {
            width: 44px; height: 44px; border-radius: 50%;
            background: var(--gl); color: var(--gd); font-weight: 800; font-size: 15px;
            display: flex; align-items: center; justify-content: center; margin-bottom: 18px;
          }
          .eau-step h3 { font-size: 17px; color: var(--ink); margin-bottom: 8px; }
          .eau-step p { font-size: 14px; color: var(--ink3); line-height: 1.7; }
          @media(max-width:900px){ .eau-steps-grid { grid-template-columns: 1fr; } }

          .eau-bottom { text-align: center; padding: 64px 0 96px; }
          .eau-bottom p { color: var(--ink3); font-size: 16px; margin-bottom: 24px; }
        `}</style>

        <section className="eau-hero">
          <div className="wrap eau-hero-grid">
            <div className="eau-hero-left">
              <div className="section-tag">Email Automations</div>
              <h1 style={{ fontSize: 'clamp(32px,3.8vw,46px)' }}>Set up once,<br /><em style={{ color: 'var(--g)', fontStyle: 'normal' }}>earn revenue on autopilot.</em></h1>
              <p className="section-sub">Welcome, abandoned cart, post-purchase and win-back flows, built once and left to quietly earn revenue in the background, every single day.</p>
              <div className="eau-btns">
                <Link href="/#contact" className="btn-primary">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                  Book a Free Call
                </Link>
                <Link href="/#cases" className="btn-ghost">See Case Studies →</Link>
              </div>
              <div className="eau-proof">
                <span style={{ color: '#f5a623', fontSize: '15px', letterSpacing: '1px' }}>⭐⭐⭐⭐⭐</span>
                <span>5.0 · 752 reviews on Upwork</span>
              </div>
            </div>

            <div className="eau-hero-card">
              <div className="eau-hero-card-title">What you get</div>
              <ul>
                <li><CheckCircle2 size={21} strokeWidth={2} /> A welcome series that converts new subscribers fast</li>
                <li><CheckCircle2 size={21} strokeWidth={2} /> Cart & browse abandonment flows that recover sales</li>
                <li><CheckCircle2 size={21} strokeWidth={2} /> Post-purchase flows that turn buyers into repeat customers</li>
                <li><CheckCircle2 size={21} strokeWidth={2} /> Win-back flows that revive subscribers before they churn</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="eau-feature">
          <div className="wrap eau-feature-grid">
            <div>
              <div className="eau-feature-tag">Welcome Series</div>
              <h2>First impressions that turn into first purchases.</h2>
              <p className="eau-feature-sub">A new subscriber is at their most engaged the moment they sign up. We build a welcome series that introduces your brand, builds trust and moves them toward that first order.</p>
              <ul>
                <li><Mail size={17} /> An intro sequence timed to peak subscriber interest</li>
                <li><Star size={17} /> Social proof and brand story woven in naturally</li>
                <li><Gift size={17} /> A first-purchase incentive placed at the right moment</li>
              </ul>
            </div>
            <div className="eau-hub-viz">
              <svg className="eau-hub-lines" viewBox="0 0 100 100">
                {eauHubNodes.map((node) => (
                  <line key={node.label} x1="50" y1="50" x2={node.x} y2={node.y} stroke="var(--border)" strokeWidth="1" />
                ))}
              </svg>
              <div className="eau-hub-center">Welcome<br />Series</div>
              {eauHubNodes.map((node) => (
                <div key={node.label} className="eau-hub-node" style={{ left: `${node.x}%`, top: `${node.y}%` }}>
                  <div className="eau-hub-node-ico"><node.icon size={17} /></div>
                  <span>{node.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="eau-feature eau-feature-alt">
          <div className="wrap eau-feature-grid">
            <div className="eau-migrate-viz">
              <div className="eau-migrate-box">
                <span>Without a Flow</span>
                <strong>Cart Abandoned</strong>
              </div>
              <div className="eau-migrate-arrow">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
              </div>
              <div className="eau-migrate-box">
                <span>With a Flow</span>
                <strong>Sale Recovered</strong>
              </div>
            </div>
            <div>
              <div className="eau-feature-tag">Abandoned Cart & Browse</div>
              <h2>Catch the sale before it slips away.</h2>
              <p className="eau-feature-sub">Most carts get abandoned, and most browsers leave without adding anything at all. We build recovery flows for both, timed and worded to bring shoppers back.</p>
              <ul>
                <li><ShoppingBag size={17} /> Cart abandonment flows timed to real shopper behavior</li>
                <li><Repeat size={17} /> Browse abandonment flows for shoppers who never added to cart</li>
                <li><TrendingUp size={17} /> Incentives escalated only when they're needed to convert</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="eau-feature">
          <div className="wrap eau-feature-grid">
            <div>
              <div className="eau-feature-tag">Post-Purchase</div>
              <h2>Turn a single sale into a repeat customer.</h2>
              <p className="eau-feature-sub">The relationship doesn't end at checkout. We build flows that confirm the order, keep customers informed, and bring them back for the next purchase at exactly the right time.</p>
              <ul>
                <li><PackageCheck size={17} /> Order & shipping confirmations that reduce support tickets</li>
                <li><Repeat size={17} /> Replenishment reminders timed to your product's usage cycle</li>
                <li><Star size={17} /> Review requests sent once customers have had time to use it</li>
              </ul>
            </div>
            <div className="eau-foundation-viz">
              {eauFoundationItems.map((item, i) => (
                <div key={item.label + i} className="eau-foundation-card">
                  <div className="eau-foundation-ico"><item.icon size={20} /></div>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="eau-feature eau-feature-alt">
          <div className="wrap eau-feature-grid">
            <div className="eau-cost-viz">
              <div className="eau-cost-card">
                <span>Before Flows</span>
                <div className="eau-cost-num">12%</div>
                <div className="eau-cost-sub">of email revenue automated</div>
              </div>
              <div className="eau-cost-arrow">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
              </div>
              <div className="eau-cost-card after">
                <span>After Flows</span>
                <div className="eau-cost-num">38%</div>
                <div className="eau-cost-sub">of email revenue automated</div>
              </div>
            </div>
            <div>
              <div className="eau-feature-tag">Win-Back & Sunset</div>
              <h2>Revive lapsing subscribers, or let them go cleanly.</h2>
              <p className="eau-feature-sub">Not every subscriber can be saved, and that's fine. We build win-back flows to earn one more purchase where possible, and sunset flows to suppress the rest before they hurt deliverability.</p>
              <ul>
                <li><RotateCcw size={17} /> Win-back flows targeted at subscribers before they go cold</li>
                <li><Users size={17} /> Sunset & suppression flows that protect sender reputation</li>
                <li><TrendingUp size={17} /> A growing share of revenue earned on autopilot</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="eau-included">
          <div className="wrap">
            <div className="sh-row" style={{ textAlign: 'center', marginBottom: '40px' }}>
              <h2>What&apos;s <em style={{ color: 'var(--g)', fontStyle: 'normal' }}>included.</em></h2>
              <p className="section-sub" style={{ margin: '0 auto' }}>Everything needed to get revenue-generating flows live and running.</p>
            </div>
            <div className="eau-included-grid">
              {eauIncluded.map((item) => (
                <div key={item} className="eau-included-item">
                  <CheckCircle2 size={19} strokeWidth={2} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="eau-steps">
          <div className="wrap">
            <div className="sh-row" style={{ textAlign: 'center', marginBottom: '48px' }}>
              <h2>How it <em style={{ color: 'var(--g)', fontStyle: 'normal' }}>works.</em></h2>
              <p className="section-sub" style={{ margin: '0 auto' }}>Three steps, start to finish.</p>
            </div>
            <div className="eau-steps-grid">
              {eauSteps.map((s) => (
                <div key={s.n} className="eau-step">
                  <div className="eau-step-num">{s.n}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="eau-bottom">
          <p>Ready for revenue that runs while you sleep?</p>
          <Link href="/#contact" className="btn-primary">Book a Free Call →</Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
