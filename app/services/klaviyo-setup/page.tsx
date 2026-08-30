import Link from 'next/link'
import Navbar from '../../components/Navbar'
import { Footer } from '../../components/Sections'
import {
  CheckCircle2, RefreshCw, TrendingUp, DollarSign,
  ShoppingBag, Star, Repeat, MessageSquare, Megaphone,
} from 'lucide-react'

const integrationNodes = [
  { icon: ShoppingBag,    label: 'Shopify',       x: 50, y: 8 },
  { icon: Star,           label: 'Reviews',       x: 89, y: 35 },
  { icon: Repeat,         label: 'Subscriptions', x: 74, y: 88 },
  { icon: MessageSquare,  label: 'Support',       x: 26, y: 88 },
  { icon: Megaphone,      label: 'Ads',           x: 11, y: 35 },
]

const included = [
  'Full account setup or platform migration',
  'List import, cleaning & deduplication',
  'Shopify + app integrations connected',
  'Core flows: welcome, abandoned cart, post-purchase',
  'Deliverability & sending domain setup',
  'List segmentation strategy',
  'On-brand email templates',
  'Handover walkthrough & training',
]

const steps = [
  { n: '01', title: 'Audit & Plan', desc: 'We review your current setup (or your old platform, if you’re migrating) and map out exactly what needs to move, connect, and get cleaned up.' },
  { n: '02', title: 'Build & Connect', desc: 'List migrated or imported, integrations wired in, and your core flows built, all inside a clean, organized account.' },
  { n: '03', title: 'Launch & Train', desc: 'Sending volume ramped up on a schedule, and a full walkthrough so your team knows exactly where everything lives.' },
]

export default function KlaviyoSetupPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '68px' }}>
        <style>{`
          .ksp-hero {
            padding: 64px 0 76px;
            background:
              radial-gradient(ellipse at top left, rgba(30, 166, 114, 0.14) 0%, transparent 60%),
              radial-gradient(ellipse at bottom right, rgba(30, 166, 114, 0.14) 0%, transparent 60%),
              #ffffff;
            overflow: hidden; position: relative;
          }
          .ksp-hero-grid { display: grid; grid-template-columns: minmax(0,1fr) minmax(0,1fr); gap: 48px; align-items: center; }
          .ksp-hero-left .section-tag::before { display: none; }
          .ksp-hero-left h1 { margin-bottom: 18px; }
          .ksp-hero-left .section-sub { margin-bottom: 32px; max-width: 480px; }
          .ksp-btns { display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 28px; }
          .ksp-proof { display: flex; align-items: center; gap: 6px; font-size: 13px; color: var(--ink3); }

          .ksp-hero-card {
            background: #fff; border: 1px solid var(--border); border-radius: 20px;
            padding: 40px 38px; box-shadow: 0 28px 70px rgba(15,22,35,.09);
            max-width: 480px; width: 100%; margin: 0 auto;
          }
          .ksp-hero-card-title { font-size: 14px; font-weight: 800; text-transform: uppercase; letter-spacing: .04em; color: var(--g); margin-bottom: 22px; }
          .ksp-hero-card ul { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 20px; }
          .ksp-hero-card li { display: flex; align-items: flex-start; gap: 12px; font-size: 15.5px; color: var(--ink2); line-height: 1.5; }
          .ksp-hero-card li svg { color: var(--g); flex-shrink: 0; margin-top: 2px; }

          @media(max-width:1000px){
            .ksp-hero-grid { grid-template-columns: 1fr; }
            .ksp-hero-card { max-width: 520px; }
          }

          /* Feature sections: text one side, visual the other, alternating */
          .ksp-feature { padding: 72px 0; border-bottom: 1px solid var(--border); }
          .ksp-feature:last-of-type { border-bottom: none; }
          .ksp-feature-grid { display: grid; grid-template-columns: minmax(0,1fr) minmax(0,1fr); gap: 56px; align-items: center; }
          .ksp-feature-tag { font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: .05em; color: var(--g); margin-bottom: 12px; }
          .ksp-feature h2 { font-size: clamp(24px, 2.4vw, 30px); color: var(--ink); margin-bottom: 14px; }
          .ksp-feature-sub { color: var(--ink3); font-size: 15.5px; line-height: 1.75; margin-bottom: 22px; max-width: 460px; }
          .ksp-feature ul { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 14px; }
          .ksp-feature li { display: flex; align-items: flex-start; gap: 10px; font-size: 14.5px; color: var(--ink2); line-height: 1.55; max-width: 440px; }
          .ksp-feature li svg { color: var(--g); flex-shrink: 0; margin-top: 2px; }

          @media(max-width:900px){
            .ksp-feature-grid { grid-template-columns: 1fr; }
          }

          /* Migration diagram */
          .ksp-migrate-viz {
            background: var(--soft); border-radius: 16px; padding: 32px 24px;
            display: flex; align-items: center; justify-content: center; gap: 14px;
          }
          .ksp-migrate-box {
            flex: 1; background: #fff; border: 1px solid var(--border); border-radius: 12px;
            padding: 22px 16px; text-align: center;
          }
          .ksp-migrate-box span { display: block; font-size: 12px; font-weight: 700; color: var(--ink4); text-transform: uppercase; letter-spacing: .03em; margin-bottom: 10px; }
          .ksp-migrate-box strong { font-size: 15px; color: var(--ink); }
          .ksp-migrate-arrow { color: var(--g); flex-shrink: 0; }

          /* Integration hub-spoke */
          .ksp-hub-viz { position: relative; width: 100%; max-width: 340px; aspect-ratio: 1/1; margin: 0 auto; }
          .ksp-hub-lines { position: absolute; inset: 0; width: 100%; height: 100%; }
          .ksp-hub-center {
            position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%);
            width: 34%; aspect-ratio: 1/1; border-radius: 50%;
            background: linear-gradient(135deg, #1ea672, #17845b); color: #fff;
            display: flex; align-items: center; justify-content: center;
            font-size: 12.5px; font-weight: 800; letter-spacing: .02em; text-align: center;
            box-shadow: 0 16px 40px rgba(30,166,114,.3); z-index: 2; padding: 6px;
          }
          .ksp-hub-node {
            position: absolute; transform: translate(-50%,-50%);
            width: 30%; display: flex; flex-direction: column; align-items: center; gap: 6px; z-index: 2;
          }
          .ksp-hub-node-ico {
            width: 38px; height: 38px; border-radius: 10px; background: #fff; border: 1px solid var(--border);
            color: var(--g); display: flex; align-items: center; justify-content: center;
            box-shadow: 0 6px 16px rgba(15,22,35,.06);
          }
          .ksp-hub-node span { font-size: 10.5px; font-weight: 700; color: var(--ink3); }

          /* Warm-up chart */
          .ksp-chart-viz { background: var(--soft); border-radius: 16px; padding: 32px 24px 20px; }
          .ksp-chart-bars { display: flex; align-items: flex-end; gap: 10px; height: 140px; margin-bottom: 12px; }
          .ksp-chart-bar { flex: 1; background: linear-gradient(180deg, #1ea672, #17845b); border-radius: 6px 6px 0 0; }
          .ksp-chart-labels { display: flex; gap: 10px; }
          .ksp-chart-labels span { flex: 1; text-align: center; font-size: 10.5px; color: var(--ink4); font-weight: 600; }
          .ksp-chart-tag {
            display: inline-flex; align-items: center; gap: 6px; margin-top: 14px;
            background: var(--gl); color: var(--gd); font-size: 12px; font-weight: 700;
            padding: 5px 12px; border-radius: 20px;
          }

          /* Cost before/after */
          .ksp-cost-viz { display: flex; align-items: center; gap: 14px; }
          .ksp-cost-card {
            flex: 1; background: #fff; border: 1px solid var(--border); border-radius: 14px;
            padding: 22px 18px; text-align: center;
          }
          .ksp-cost-card.after { border-color: var(--gm); background: var(--gl); }
          .ksp-cost-card span { display: block; font-size: 11.5px; font-weight: 700; color: var(--ink4); text-transform: uppercase; letter-spacing: .03em; margin-bottom: 10px; }
          .ksp-cost-num { font-size: 26px; font-weight: 800; color: var(--ink); margin-bottom: 4px; }
          .ksp-cost-card.after .ksp-cost-num { color: var(--gd); }
          .ksp-cost-sub { font-size: 12.5px; color: var(--ink4); }
          .ksp-cost-arrow { color: var(--g); flex-shrink: 0; }

          /* Included */
          .ksp-included { background: var(--soft); padding: 72px 0; }
          .ksp-included-grid { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 18px 40px; max-width: 880px; margin: 0 auto; }
          .ksp-included-item { display: flex; align-items: flex-start; gap: 12px; font-size: 15px; color: var(--ink2); font-weight: 600; }
          .ksp-included-item svg { color: var(--g); flex-shrink: 0; margin-top: 2px; }
          @media(max-width:640px){ .ksp-included-grid { grid-template-columns: 1fr; } }

          /* How it works */
          .ksp-steps { padding: 72px 0 88px; }
          .ksp-steps-grid { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 32px; }
          .ksp-step { min-width: 0; }
          .ksp-step-num {
            width: 44px; height: 44px; border-radius: 50%;
            background: var(--gl); color: var(--gd); font-weight: 800; font-size: 15px;
            display: flex; align-items: center; justify-content: center; margin-bottom: 18px;
          }
          .ksp-step h3 { font-size: 17px; color: var(--ink); margin-bottom: 8px; }
          .ksp-step p { font-size: 14px; color: var(--ink3); line-height: 1.7; }
          @media(max-width:900px){ .ksp-steps-grid { grid-template-columns: 1fr; } }
        `}</style>

        <section className="ksp-hero">
          <div className="wrap ksp-hero-grid">
            <div className="ksp-hero-left">
              <div className="section-tag">Klaviyo Account Setup</div>
              <h1 style={{ fontSize: 'clamp(32px,3.8vw,46px)' }}>Set up right from day one,<br /><em style={{ color: 'var(--g)', fontStyle: 'normal' }}>or migrated over without losing a thing.</em></h1>
              <p className="section-sub">Starting fresh on Klaviyo or moving from another platform, we handle the entire account: clean data, proper integrations, and flows built to convert from week one.</p>
              <div className="ksp-btns">
                <Link href="/#contact" className="btn-primary">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                  Book a Free Call
                </Link>
                <Link href="/#cases" className="btn-ghost">See Case Studies →</Link>
              </div>
              <div className="ksp-proof">
                <span style={{ color: '#f5a623', fontSize: '15px', letterSpacing: '1px' }}>⭐⭐⭐⭐⭐</span>
                <span>5.0 · 752 reviews on Upwork</span>
              </div>
            </div>

            <div className="ksp-hero-card">
              <div className="ksp-hero-card-title">What you get</div>
              <ul>
                <li><CheckCircle2 size={21} strokeWidth={2} /> Clean migration or setup, zero data loss</li>
                <li><CheckCircle2 size={21} strokeWidth={2} /> Every integration connected and firing correctly</li>
                <li><CheckCircle2 size={21} strokeWidth={2} /> Deliverability protected from the first send</li>
                <li><CheckCircle2 size={21} strokeWidth={2} /> Full handover, so your team owns the account</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="ksp-feature">
          <div className="wrap ksp-feature-grid">
            <div>
              <div className="ksp-feature-tag">List Migration</div>
              <h2>Moving platforms? Nothing gets lost on the way.</h2>
              <p className="ksp-feature-sub">If you're coming from Mailchimp, Omnisend, or anywhere else, your list, history, and segments move over clean, not just copy-pasted.</p>
              <ul>
                <li><RefreshCw size={17} /> Inactive and unengaged contacts filtered out before they hit your new list</li>
                <li><RefreshCw size={17} /> Tags, segments, and purchase history mapped over correctly</li>
                <li><RefreshCw size={17} /> Full historical data preserved so your flows keep the context they need</li>
              </ul>
            </div>
            <div className="ksp-migrate-viz">
              <div className="ksp-migrate-box"><span>From</span><strong>Old Platform</strong></div>
              <svg className="ksp-migrate-arrow" width="28" height="16" viewBox="0 0 28 16" fill="none">
                <path d="M0 8H26M26 8L19 1M26 8L19 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div className="ksp-migrate-box"><span>To</span><strong>Klaviyo</strong></div>
            </div>
          </div>
        </section>

        <section className="ksp-feature">
          <div className="wrap ksp-feature-grid">
            <div className="ksp-hub-viz">
              <svg className="ksp-hub-lines" viewBox="0 0 100 100">
                {integrationNodes.map((n) => (
                  <line key={n.label} x1="50" y1="50" x2={n.x} y2={n.y} stroke="#d9e6e0" strokeWidth="0.9" />
                ))}
              </svg>
              <div className="ksp-hub-center">Klaviyo</div>
              {integrationNodes.map((n) => (
                <div key={n.label} className="ksp-hub-node" style={{ top: `${n.y}%`, left: `${n.x}%` }}>
                  <div className="ksp-hub-node-ico"><n.icon size={17} strokeWidth={1.75} /></div>
                  <span>{n.label}</span>
                </div>
              ))}
            </div>
            <div>
              <div className="ksp-feature-tag">Integrations</div>
              <h2>Every tool you already use, connected properly.</h2>
              <p className="ksp-feature-sub">Klaviyo is only as good as the data flowing into it. We connect your full stack so nothing is guessed at.</p>
              <ul>
                <li><CheckCircle2 size={17} /> Shopify, reviews, subscriptions, and support tools synced in</li>
                <li><CheckCircle2 size={17} /> Events fire at the right time so flows react to real behavior</li>
                <li><CheckCircle2 size={17} /> Richer segmentation from day one, because the data is actually there</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="ksp-feature">
          <div className="wrap ksp-feature-grid">
            <div>
              <div className="ksp-feature-tag">Account Warm-Up</div>
              <h2>Deliverability protected from the very first send.</h2>
              <p className="ksp-feature-sub">A new account (or a big list import) can tank your inbox placement if you send too much, too soon. We ramp it up on a schedule instead.</p>
              <ul>
                <li><TrendingUp size={17} /> Sending volume increased gradually, not all at once</li>
                <li><TrendingUp size={17} /> Domain and sender reputation protected during ramp-up</li>
                <li><TrendingUp size={17} /> A strong inbox placement foundation before your first big campaign</li>
              </ul>
            </div>
            <div className="ksp-chart-viz">
              <div className="ksp-chart-bars">
                <div className="ksp-chart-bar" style={{ height: '18%' }} />
                <div className="ksp-chart-bar" style={{ height: '32%' }} />
                <div className="ksp-chart-bar" style={{ height: '48%' }} />
                <div className="ksp-chart-bar" style={{ height: '64%' }} />
                <div className="ksp-chart-bar" style={{ height: '82%' }} />
                <div className="ksp-chart-bar" style={{ height: '100%' }} />
              </div>
              <div className="ksp-chart-labels">
                <span>Wk 1</span><span>Wk 2</span><span>Wk 3</span><span>Wk 4</span><span>Wk 5</span><span>Wk 6</span>
              </div>
              <div className="ksp-chart-tag"><TrendingUp size={14} /> Deliverability Protected</div>
            </div>
          </div>
        </section>

        <section className="ksp-feature">
          <div className="wrap ksp-feature-grid">
            <div className="ksp-cost-viz">
              <div className="ksp-cost-card">
                <span>Before</span>
                <div className="ksp-cost-num">85,000</div>
                <div className="ksp-cost-sub">profiles · $720/mo</div>
              </div>
              <svg className="ksp-cost-arrow" width="24" height="16" viewBox="0 0 24 16" fill="none">
                <path d="M0 8H22M22 8L15 1M22 8L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div className="ksp-cost-card after">
                <span>After</span>
                <div className="ksp-cost-num">52,000</div>
                <div className="ksp-cost-sub">profiles · $395/mo</div>
              </div>
            </div>
            <div>
              <div className="ksp-feature-tag">Cost Minimization</div>
              <h2>A cleaner list costs less, and performs better.</h2>
              <p className="ksp-feature-sub">Klaviyo bills by profile count. Cleaning out dead weight before migration often pays for the whole project.</p>
              <ul>
                <li><DollarSign size={17} /> Unengaged and duplicate profiles removed before they cost you monthly</li>
                <li><DollarSign size={17} /> Smaller, cleaner list with better open and click rates across the board</li>
                <li><DollarSign size={17} /> Typical savings land in the thousands per year, not just a one-time cleanup</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="ksp-included">
          <div className="wrap">
            <div className="sh-row" style={{ textAlign: 'center', marginBottom: '40px' }}>
              <h2>What&apos;s <em style={{ color: 'var(--g)', fontStyle: 'normal' }}>included.</em></h2>
              <p className="section-sub" style={{ margin: '0 auto' }}>Everything needed to get your account fully live and producing revenue.</p>
            </div>
            <div className="ksp-included-grid">
              {included.map((item) => (
                <div key={item} className="ksp-included-item">
                  <CheckCircle2 size={19} strokeWidth={2} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="ksp-steps">
          <div className="wrap">
            <div className="sh-row" style={{ textAlign: 'center', marginBottom: '48px' }}>
              <h2>How it <em style={{ color: 'var(--g)', fontStyle: 'normal' }}>works.</em></h2>
              <p className="section-sub" style={{ margin: '0 auto' }}>Three steps, start to finish.</p>
            </div>
            <div className="ksp-steps-grid">
              {steps.map((s) => (
                <div key={s.n} className="ksp-step">
                  <div className="ksp-step-num">{s.n}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="svp-bottom">
          <p>Ready to get your Klaviyo account set up right?</p>
          <Link href="/#contact" className="btn-primary">Book a Free Call →</Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
