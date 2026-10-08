import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../../components/Navbar'
import { Footer } from '../../components/Sections'
import {
  CheckCircle2, Mail, Star, Gift, ShoppingBag,
  PackageCheck, Repeat, RotateCcw, Users, TrendingUp,
} from 'lucide-react'

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

const whatYouGet = [
  { icon: Mail,         label: 'A welcome series that converts new subscribers fast' },
  { icon: ShoppingBag,  label: 'Cart & browse abandonment flows that recover sales' },
  { icon: PackageCheck, label: 'Post-purchase flows that turn buyers into repeat customers' },
  { icon: RotateCcw,    label: 'Win-back flows that revive subscribers before they churn' },
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

          .eau-hero-visual {
            position: relative; border-radius: 20px; overflow: hidden;
            box-shadow: 0 28px 70px rgba(15,22,35,.09);
            max-width: 650px; width: 100%; margin: 0 auto; background: var(--soft);
          }
          .eau-hero-visual img { width: 100%; height: auto; display: block; }

          @media(max-width:1000px){
            .eau-hero-grid { grid-template-columns: 1fr; }
            .eau-hero-visual { max-width: 600px; }
          }

          /* What You Get — highlighted through the tinted background, a
             centered tag, and gradient icon "medallions"; deliberately NOT
             a bordered card/box. Items sit in one open row divided by thin
             rules, not stacked inside a container. */
          .eau-whatget {
            padding: 64px 0 72px; position: relative; overflow: hidden;
            background:
              radial-gradient(ellipse at top right, rgba(30,166,114,0.14) 0%, transparent 55%),
              radial-gradient(ellipse at bottom left, rgba(30,166,114,0.10) 0%, transparent 55%),
              var(--soft);
            border-top: 1px solid var(--border); border-bottom: 1px solid var(--border);
          }
          .eau-whatget-head { text-align: center; max-width: 720px; margin: 0 auto 48px; }
          .eau-whatget-tag {
            display: inline-flex; align-items: center; gap: 8px; background: var(--gl); color: var(--gd);
            font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: .06em;
            padding: 6px 14px; border-radius: 100px; margin-bottom: 16px;
          }
          .eau-whatget-head h2 { font-size: clamp(20px, 2.4vw, 32px); margin-bottom: 0; white-space: nowrap; }
          @media(max-width:560px){
            .eau-whatget-head h2 { white-space: normal; font-size: clamp(20px, 5.5vw, 24px); }
          }

          .eau-whatget-row {
            display: flex; align-items: flex-start; justify-content: center;
            max-width: 1000px; margin: 0 auto; flex-wrap: wrap;
          }
          .eau-whatget-item {
            flex: 1 1 210px; display: flex; flex-direction: column; align-items: center;
            text-align: center; gap: 16px; padding: 0 26px; position: relative;
          }
          .eau-whatget-item:not(:last-child)::after {
            content: ''; position: absolute; right: 0; top: 4px; bottom: 4px; width: 1px; background: var(--gm);
          }
          .eau-whatget-ico {
            width: 54px; height: 54px; border-radius: 50%;
            background: linear-gradient(135deg, #1ea672, #17845b); color: #fff;
            display: flex; align-items: center; justify-content: center;
            box-shadow: 0 10px 24px rgba(30,166,114,.32);
          }
          .eau-whatget-item p { font-size: 14.5px; font-weight: 600; color: var(--ink2); line-height: 1.5; max-width: 200px; }

          @media(max-width:820px){
            .eau-whatget-row { flex-direction: column; align-items: center; gap: 32px; }
            .eau-whatget-item { padding: 0; }
            .eau-whatget-item:not(:last-child)::after { display: none; }
          }

          .eau-feature { padding: 72px 0; }
          .eau-feature-alt { background: var(--soft); }
          .eau-feature-alt .eau-diagram-img { background: #fff; }
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

          .eau-diagram-img {
            border-radius: 16px; overflow: hidden; background: var(--soft);
            box-shadow: 0 20px 50px rgba(15,22,35,.08);
          }
          .eau-diagram-img img { width: 100%; height: auto; display: block; }

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
            <div className="eau-hero-left" data-reveal="up">
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

            <div className="eau-hero-visual" data-reveal="right" style={{ transitionDelay: '150ms' }}>
              <Image
                src="/images/services/email-automations/hero-autopilot-revenue.jpg"
                alt="Klaviyo automation flows on a tablet driving 30% of store revenue and $42,850 in autopilot revenue with 24/7 smart triggers"
                width={1400}
                height={764}
              />
            </div>
          </div>
        </section>

        <section className="eau-whatget">
          <div className="wrap">
            <div className="eau-whatget-head" data-reveal="up">
              <div className="eau-whatget-tag">What You Get</div>
              <h2>Everything included, <em style={{ color: 'var(--g)', fontStyle: 'normal' }}>nothing left to guess.</em></h2>
            </div>
            <div className="eau-whatget-row">
              {whatYouGet.map((item, i) => (
                <div key={item.label} className="eau-whatget-item" data-reveal="up" style={{ transitionDelay: `${i * 90}ms` }}>
                  <div className="eau-whatget-ico"><item.icon size={22} strokeWidth={1.75} /></div>
                  <p>{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="eau-feature">
          <div className="wrap eau-feature-grid">
            <div data-reveal="up">
              <div className="eau-feature-tag">Welcome Series</div>
              <h2>First impressions that turn into first purchases.</h2>
              <p className="eau-feature-sub">A new subscriber is at their most engaged the moment they sign up. We build a welcome series that introduces your brand, builds trust and moves them toward that first order.</p>
              <ul>
                <li><Mail size={17} /> An intro sequence timed to peak subscriber interest</li>
                <li><Star size={17} /> Social proof and brand story woven in naturally</li>
                <li><Gift size={17} /> A first-purchase incentive placed at the right moment</li>
              </ul>
            </div>
            <div className="eau-diagram-img" data-reveal="zoom" style={{ transitionDelay: '120ms' }}>
              <Image
                src="/images/services/email-automations/welcome-series.jpg"
                alt="Three-email welcome series from signup: instant welcome with 10% code, brand story and founder values, then social proof and best sellers leading to a first purchase"
                width={1400}
                height={781}
              />
            </div>
          </div>
        </section>

        <section className="eau-feature eau-feature-alt">
          <div className="wrap eau-feature-grid">
            <div className="eau-diagram-img" data-reveal="zoom">
              <Image
                src="/images/services/email-automations/abandoned-cart-browse.jpg"
                alt="Abandoned cart with lost intent recovered through smart-delay reminders and one-click checkout, a 24.8% flow recovery rate"
                width={1400}
                height={781}
              />
            </div>
            <div data-reveal="up" style={{ transitionDelay: '120ms' }}>
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
            <div data-reveal="up">
              <div className="eau-feature-tag">Post-Purchase</div>
              <h2>Turn a single sale into a repeat customer.</h2>
              <p className="eau-feature-sub">The relationship doesn't end at checkout. We build flows that confirm the order, keep customers informed, and bring them back for the next purchase at exactly the right time.</p>
              <ul>
                <li><PackageCheck size={17} /> Order & shipping confirmations that reduce support tickets</li>
                <li><Repeat size={17} /> Replenishment reminders timed to your product's usage cycle</li>
                <li><Star size={17} /> Review requests sent once customers have had time to use it</li>
              </ul>
            </div>
            <div className="eau-diagram-img" data-reveal="zoom" style={{ transitionDelay: '120ms' }}>
              <Image
                src="/images/services/email-automations/post-purchase.jpg"
                alt="Post-purchase and customer retention flows around a loyalty hub: order and shipping updates, cross-sell upsell, UGC review request and replenishment reminder"
                width={1400}
                height={764}
              />
            </div>
          </div>
        </section>

        <section className="eau-feature eau-feature-alt">
          <div className="wrap eau-feature-grid">
            <div className="eau-diagram-img" data-reveal="zoom">
              <Image
                src="/images/services/email-automations/win-back-sunset.jpg"
                alt="Win-back re-engagement rising from 12% to 38% with a sunset flow that cleans unengaged contacts to protect sender reputation and domain health"
                width={1400}
                height={764}
              />
            </div>
            <div data-reveal="up" style={{ transitionDelay: '120ms' }}>
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
            <div className="sh-row" style={{ textAlign: 'center', marginBottom: '40px' }} data-reveal="up">
              <h2>What&apos;s <em style={{ color: 'var(--g)', fontStyle: 'normal' }}>included.</em></h2>
              <p className="section-sub" style={{ margin: '0 auto' }}>Everything needed to get revenue-generating flows live and running.</p>
            </div>
            <div className="eau-included-grid">
              {eauIncluded.map((item, i) => (
                <div key={item} className="eau-included-item" data-reveal="up" style={{ transitionDelay: `${i * 60}ms` }}>
                  <CheckCircle2 size={19} strokeWidth={2} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="eau-steps">
          <div className="wrap">
            <div className="sh-row" style={{ textAlign: 'center', marginBottom: '48px' }} data-reveal="up">
              <h2>How it <em style={{ color: 'var(--g)', fontStyle: 'normal' }}>works.</em></h2>
              <p className="section-sub" style={{ margin: '0 auto' }}>Three steps, start to finish.</p>
            </div>
            <div className="eau-steps-grid">
              {eauSteps.map((s, i) => (
                <div key={s.n} className="eau-step" data-reveal="up" style={{ transitionDelay: `${i * 100}ms` }}>
                  <div className="eau-step-num">{s.n}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="eau-bottom" data-reveal="up">
          <p>Ready for revenue that runs while you sleep?</p>
          <Link href="/#contact" className="btn-primary">Book a Free Call →</Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
