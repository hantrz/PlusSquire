import Link from 'next/link'
import Navbar from '../../components/Navbar'
import { Footer } from '../../components/Sections'
import {
  CheckCircle2, Workflow, Target, ListChecks, Sparkles, Percent,
  TrendingUp, ShoppingCart, Eye, DollarSign, Repeat, RefreshCw,
  MailCheck, ArrowRight,
} from 'lucide-react'

const flowHubNodes = [
  { icon: MailCheck,    label: 'Welcome',       x: 50, y: 8 },
  { icon: ShoppingCart, label: 'Abandoned Cart', x: 89, y: 35 },
  { icon: Eye,          label: 'Browse Abandon', x: 74, y: 88 },
  { icon: Repeat,       label: 'Post-Purchase',  x: 26, y: 88 },
  { icon: RefreshCw,    label: 'Win-Back',       x: 11, y: 35 },
]

const welcomeBars = [
  { label: 'Email 1', h: 38 },
  { label: 'Email 2', h: 56 },
  { label: 'Email 3', h: 74 },
  { label: 'Email 4', h: 62 },
  { label: 'Email 5', h: 88 },
]

const included = [
  'Full flow strategy & customer journey map',
  'Welcome series (3-5 emails)',
  'Abandoned cart flow (multi-step)',
  'Browse abandonment flow',
  'Post-purchase flow with review requests',
  'Win-back flow for lapsed customers',
  'On-brand templates for every flow',
  'Flow performance report after 30 days',
]

const steps = [
  { n: '01', title: 'Map & Strategize', desc: 'We map your customer\'s full journey and rank which flows will move revenue fastest for your store.' },
  { n: '02', title: 'Build & Design', desc: 'Every flow is written, designed on-brand, and wired into your triggers, timing, and segments.' },
  { n: '03', title: 'Launch & Optimize', desc: 'Flows go live, and we track performance to refine subject lines, timing, and offers over time.' },
]

export default function FlowSetupPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '68px' }}>
        <style>{`
          .flw-hero {
            padding: 64px 0 76px;
            background:
              radial-gradient(ellipse at top left, rgba(30, 166, 114, 0.14) 0%, transparent 60%),
              radial-gradient(ellipse at bottom right, rgba(30, 166, 114, 0.14) 0%, transparent 60%),
              #ffffff;
            overflow: hidden; position: relative;
          }
          .flw-hero-grid { display: grid; grid-template-columns: minmax(0,1fr) minmax(0,1fr); gap: 48px; align-items: center; }
          .flw-hero-left .section-tag::before { display: none; }
          .flw-hero-left h1 { margin-bottom: 18px; }
          .flw-hero-left .section-sub { margin-bottom: 32px; max-width: 480px; }
          .flw-btns { display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 28px; }
          .flw-proof { display: flex; align-items: center; gap: 6px; font-size: 13px; color: var(--ink3); }

          .flw-hero-card {
            background: #fff; border: 1px solid var(--border); border-radius: 20px;
            padding: 40px 38px; box-shadow: 0 28px 70px rgba(15,22,35,.09);
            max-width: 480px; width: 100%; margin: 0 auto;
          }
          .flw-hero-card-title { font-size: 14px; font-weight: 800; text-transform: uppercase; letter-spacing: .04em; color: var(--g); margin-bottom: 22px; }
          .flw-hero-card ul { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 20px; }
          .flw-hero-card li { display: flex; align-items: flex-start; gap: 12px; font-size: 15.5px; color: var(--ink2); line-height: 1.5; }
          .flw-hero-card li svg { color: var(--g); flex-shrink: 0; margin-top: 2px; }

          @media(max-width:1000px){
            .flw-hero-grid { grid-template-columns: 1fr; }
            .flw-hero-card { max-width: 520px; }
          }

          .flw-feature { padding: 72px 0; }
          .flw-feature-alt { background: var(--soft); }
          .flw-feature-alt .flw-chart-viz,
          .flw-feature-alt .flw-cost-viz .flw-cost-card,
          .flw-feature-alt .flw-migrate-box { background: #fff; }
          .flw-feature-grid { display: grid; grid-template-columns: minmax(0,1fr) minmax(0,1fr); gap: 56px; align-items: center; }
          .flw-feature-tag { font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: .05em; color: var(--g); margin-bottom: 12px; }
          .flw-feature h2 { font-size: clamp(24px, 2.4vw, 30px); color: var(--ink); margin-bottom: 14px; }
          .flw-feature-sub { color: var(--ink3); font-size: 15.5px; line-height: 1.75; margin-bottom: 22px; max-width: 460px; }
          .flw-feature ul { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 14px; }
          .flw-feature li { display: flex; align-items: flex-start; gap: 10px; font-size: 14.5px; color: var(--ink2); line-height: 1.55; max-width: 440px; }
          .flw-feature li svg { color: var(--g); flex-shrink: 0; margin-top: 2px; }

          @media(max-width:900px){
            .flw-feature-grid { grid-template-columns: 1fr; }
          }

          .flw-hub-viz { position: relative; width: 100%; max-width: 340px; aspect-ratio: 1/1; margin: 0 auto; }
          .flw-hub-lines { position: absolute; inset: 0; width: 100%; height: 100%; }
          .flw-hub-center {
            position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%);
            width: 34%; aspect-ratio: 1/1; border-radius: 50%;
            background: linear-gradient(135deg, #1ea672, #17845b); color: #fff;
            display: flex; align-items: center; justify-content: center;
            font-size: 12.5px; font-weight: 800; letter-spacing: .02em; text-align: center;
            box-shadow: 0 16px 40px rgba(30,166,114,.3); z-index: 2; padding: 6px;
          }
          .flw-hub-node {
            position: absolute; transform: translate(-50%,-50%);
            width: 30%; display: flex; flex-direction: column; align-items: center; gap: 6px; z-index: 2;
          }
          .flw-hub-node-ico {
            width: 38px; height: 38px; border-radius: 10px; background: #fff; border: 1px solid var(--border);
            color: var(--g); display: flex; align-items: center; justify-content: center;
            box-shadow: 0 6px 16px rgba(15,22,35,.06);
          }
          .flw-hub-node span { font-size: 10.5px; font-weight: 700; color: var(--ink3); }

          .flw-chart-viz { background: var(--soft); border-radius: 16px; padding: 32px 24px 20px; }
          .flw-chart-bars { display: flex; align-items: flex-end; gap: 10px; height: 140px; margin-bottom: 12px; }
          .flw-chart-bar { flex: 1; background: linear-gradient(180deg, #1ea672, #17845b); border-radius: 6px 6px 0 0; }
          .flw-chart-labels { display: flex; gap: 10px; }
          .flw-chart-labels span { flex: 1; text-align: center; font-size: 10.5px; color: var(--ink4); font-weight: 600; }
          .flw-chart-tag {
            display: inline-flex; align-items: center; gap: 6px; margin-top: 14px;
            background: var(--gl); color: var(--gd); font-size: 12px; font-weight: 700;
            padding: 5px 12px; border-radius: 20px;
          }

          .flw-cost-viz { display: flex; align-items: center; gap: 14px; }
          .flw-cost-card {
            flex: 1; background: #fff; border: 1px solid var(--border); border-radius: 14px;
            padding: 22px 18px; text-align: center;
          }
          .flw-cost-card.after { border-color: var(--gm); background: var(--gl); }
          .flw-cost-card span { display: block; font-size: 11.5px; font-weight: 700; color: var(--ink4); text-transform: uppercase; letter-spacing: .03em; margin-bottom: 10px; }
          .flw-cost-num { font-size: 26px; font-weight: 800; color: var(--ink); margin-bottom: 4px; }
          .flw-cost-card.after .flw-cost-num { color: var(--gd); }
          .flw-cost-sub { font-size: 12.5px; color: var(--ink4); }
          .flw-cost-arrow { color: var(--g); flex-shrink: 0; }

          .flw-migrate-viz {
            background: var(--soft); border-radius: 16px; padding: 32px 24px;
            display: flex; align-items: center; justify-content: center; gap: 14px;
          }
          .flw-migrate-box {
            flex: 1; background: #fff; border: 1px solid var(--border); border-radius: 12px;
            padding: 22px 16px; text-align: center;
          }
          .flw-migrate-box span { display: block; font-size: 12px; font-weight: 700; color: var(--ink4); text-transform: uppercase; letter-spacing: .03em; margin-bottom: 10px; }
          .flw-migrate-box strong { font-size: 15px; color: var(--ink); }
          .flw-migrate-arrow { color: var(--g); flex-shrink: 0; }

          .flw-included { background: var(--soft); padding: 72px 0; }
          .flw-included-grid { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 18px 40px; max-width: 880px; margin: 0 auto; }
          .flw-included-item { display: flex; align-items: flex-start; gap: 12px; font-size: 15px; color: var(--ink2); font-weight: 600; }
          .flw-included-item svg { color: var(--g); flex-shrink: 0; margin-top: 2px; }
          @media(max-width:640px){ .flw-included-grid { grid-template-columns: 1fr; } }

          .flw-steps { padding: 72px 0 88px; }
          .flw-steps-grid { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 32px; }
          .flw-step { min-width: 0; }
          .flw-step-num {
            width: 44px; height: 44px; border-radius: 50%;
            background: var(--gl); color: var(--gd); font-weight: 800; font-size: 15px;
            display: flex; align-items: center; justify-content: center; margin-bottom: 18px;
          }
          .flw-step h3 { font-size: 17px; color: var(--ink); margin-bottom: 8px; }
          .flw-step p { font-size: 14px; color: var(--ink3); line-height: 1.7; }
          @media(max-width:900px){ .flw-steps-grid { grid-template-columns: 1fr; } }

          .flw-bottom { text-align: center; padding: 64px 0 96px; }
          .flw-bottom p { color: var(--ink3); font-size: 16px; margin-bottom: 24px; }
        `}</style>

        <section className="flw-hero">
          <div className="wrap flw-hero-grid">
            <div className="flw-hero-left">
              <div className="section-tag">Klaviyo Flow Builds</div>
              <h1 style={{ fontSize: 'clamp(32px,3.8vw,46px)' }}>Automated flows that sell,<br /><em style={{ color: 'var(--g)', fontStyle: 'normal' }}>while you sleep.</em></h1>
              <p className="section-sub">Custom Klaviyo flow builds, welcome series, abandoned cart, post-purchase, and win-back sequences engineered to convert on autopilot.</p>
              <div className="flw-btns">
                <Link href="/#contact" className="btn-primary">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                  Book a Free Call
                </Link>
                <Link href="/#cases" className="btn-ghost">See Case Studies →</Link>
              </div>
              <div className="flw-proof">
                <span style={{ color: '#f5a623', fontSize: '15px', letterSpacing: '1px' }}>⭐⭐⭐⭐⭐</span>
                <span>5.0 · 752 reviews on Upwork</span>
              </div>
            </div>

            <div className="flw-hero-card">
              <div className="flw-hero-card-title">What you get</div>
              <ul>
                <li><CheckCircle2 size={21} strokeWidth={2} /> Full flow strategy mapped to your customer journey</li>
                <li><CheckCircle2 size={21} strokeWidth={2} /> Welcome, cart, post-purchase & win-back flows built and live</li>
                <li><CheckCircle2 size={21} strokeWidth={2} /> On-brand templates tuned for opens, clicks & revenue</li>
                <li><CheckCircle2 size={21} strokeWidth={2} /> Ongoing performance tracking so flows keep improving</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="flw-feature">
          <div className="wrap flw-feature-grid">
            <div>
              <div className="flw-feature-tag">Strategy & Mapping</div>
              <h2>Every flow mapped to a moment that matters.</h2>
              <p className="flw-feature-sub">We start by mapping your full customer lifecycle, so every flow fires at the right time with the right message.</p>
              <ul>
                <li><Workflow size={17} /> Full customer journey mapped end to end</li>
                <li><Target size={17} /> Trigger logic tailored to your store&apos;s behavior</li>
                <li><ListChecks size={17} /> Flow priority ranked by revenue potential</li>
              </ul>
            </div>
            <div className="flw-hub-viz">
              <svg className="flw-hub-lines" viewBox="0 0 100 100" preserveAspectRatio="none">
                {flowHubNodes.map((n) => (
                  <line key={n.label} x1="50" y1="50" x2={n.x} y2={n.y} stroke="var(--border)" strokeWidth="1" />
                ))}
              </svg>
              <div className="flw-hub-center">Flows</div>
              {flowHubNodes.map((n) => (
                <div key={n.label} className="flw-hub-node" style={{ left: `${n.x}%`, top: `${n.y}%` }}>
                  <div className="flw-hub-node-ico"><n.icon size={18} /></div>
                  <span>{n.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="flw-feature flw-feature-alt">
          <div className="wrap flw-feature-grid">
            <div className="flw-chart-viz" style={{ order: 1 }}>
              <div className="flw-chart-bars">
                {welcomeBars.map((b) => (
                  <div key={b.label} className="flw-chart-bar" style={{ height: `${b.h}%` }} />
                ))}
              </div>
              <div className="flw-chart-labels">
                {welcomeBars.map((b) => <span key={b.label}>{b.label}</span>)}
              </div>
              <span className="flw-chart-tag"><TrendingUp size={13} /> +42% conversion by email 5</span>
            </div>
            <div style={{ order: 2 }}>
              <div className="flw-feature-tag">Welcome Series</div>
              <h2>First impressions that turn into first orders.</h2>
              <p className="flw-feature-sub">A multi-touch welcome series that builds trust fast and nudges new subscribers toward their first purchase.</p>
              <ul>
                <li><Sparkles size={17} /> Multi-email series introducing your brand</li>
                <li><Percent size={17} /> Incentive-based conversion touchpoints</li>
                <li><TrendingUp size={17} /> Send timing optimized for maximum engagement</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="flw-feature">
          <div className="wrap flw-feature-grid">
            <div>
              <div className="flw-feature-tag">Abandoned Cart & Browse</div>
              <h2>Recover carts and browsers before they forget you.</h2>
              <p className="flw-feature-sub">Multi-step abandoned cart and browse abandonment flows that bring shoppers back before they buy elsewhere.</p>
              <ul>
                <li><ShoppingCart size={17} /> Cart recovery sequence with smart timing</li>
                <li><Eye size={17} /> Browse abandonment for non-cart visitors</li>
                <li><DollarSign size={17} /> Incentive escalation to close the sale</li>
              </ul>
            </div>
            <div className="flw-cost-viz">
              <div className="flw-cost-card">
                <span>Without Flows</span>
                <div className="flw-cost-num">3%</div>
                <div className="flw-cost-sub">carts recovered</div>
              </div>
              <ArrowRight className="flw-cost-arrow" size={22} />
              <div className="flw-cost-card after">
                <span>With Flows</span>
                <div className="flw-cost-num">18%</div>
                <div className="flw-cost-sub">carts recovered</div>
              </div>
            </div>
          </div>
        </section>

        <section className="flw-feature flw-feature-alt">
          <div className="wrap flw-feature-grid">
            <div className="flw-migrate-viz" style={{ order: 1 }}>
              <div className="flw-migrate-box">
                <span>Before</span>
                <strong>One-Time Buyer</strong>
              </div>
              <ArrowRight className="flw-migrate-arrow" size={20} />
              <div className="flw-migrate-box">
                <span>After</span>
                <strong>Repeat Customer</strong>
              </div>
            </div>
            <div style={{ order: 2 }}>
              <div className="flw-feature-tag">Post-Purchase & Win-Back</div>
              <h2>Turn one-time buyers into repeat customers.</h2>
              <p className="flw-feature-sub">Post-purchase nurture and win-back sequences that increase repeat purchase rate and rescue lapsing customers.</p>
              <ul>
                <li><Repeat size={17} /> Post-purchase upsell & review requests</li>
                <li><RefreshCw size={17} /> Win-back sequences for lapsed customers</li>
                <li><TrendingUp size={17} /> Customer lifetime value tracked and optimized</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="flw-included">
          <div className="wrap">
            <div className="sh-row" style={{ textAlign: 'center', marginBottom: '40px' }}>
              <h2>What&apos;s <em style={{ color: 'var(--g)', fontStyle: 'normal' }}>included.</em></h2>
              <p className="section-sub" style={{ margin: '0 auto' }}>Everything needed to get your flows fully live and producing revenue.</p>
            </div>
            <div className="flw-included-grid">
              {included.map((item) => (
                <div key={item} className="flw-included-item">
                  <CheckCircle2 size={19} strokeWidth={2} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="flw-steps">
          <div className="wrap">
            <div className="sh-row" style={{ textAlign: 'center', marginBottom: '48px' }}>
              <h2>How it <em style={{ color: 'var(--g)', fontStyle: 'normal' }}>works.</em></h2>
              <p className="section-sub" style={{ margin: '0 auto' }}>Three steps, start to finish.</p>
            </div>
            <div className="flw-steps-grid">
              {steps.map((s) => (
                <div key={s.n} className="flw-step">
                  <div className="flw-step-num">{s.n}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="flw-bottom">
          <p>Ready to put your revenue flows on autopilot?</p>
          <Link href="/#contact" className="btn-primary">Book a Free Call →</Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
