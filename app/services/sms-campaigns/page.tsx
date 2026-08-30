import Link from 'next/link'
import Navbar from '../../components/Navbar'
import { Footer } from '../../components/Sections'
import {
  CheckCircle2, ShieldCheck, MessageSquare, ListChecks, ShoppingCart,
  Bell, Zap, Calendar, Megaphone, Percent, LineChart, DollarSign,
  TrendingUp, ArrowRight,
} from 'lucide-react'

const smsHubNodes = [
  { icon: ShoppingCart,   label: 'Cart Recovery',  x: 50, y: 8 },
  { icon: Bell,           label: 'Back-in-Stock',  x: 89, y: 35 },
  { icon: Zap,            label: 'Flash Sale',     x: 74, y: 88 },
  { icon: MessageSquare,  label: 'Welcome',        x: 26, y: 88 },
  { icon: Calendar,       label: 'Reminders',      x: 11, y: 35 },
]

const smsBars = [
  { label: 'Wk 1', h: 40 },
  { label: 'Wk 2', h: 55 },
  { label: 'Wk 3', h: 48 },
  { label: 'Wk 4', h: 70 },
  { label: 'Wk 5', h: 62 },
]

const included = [
  'Compliant opt-in flow setup',
  'SMS welcome series',
  'Abandoned cart SMS flow',
  'Back-in-stock SMS alerts',
  'Flash sale & urgency campaigns',
  'Monthly SMS campaign calendar',
  'Combined email + SMS attribution reporting',
  'Ongoing list growth strategy',
]

const steps = [
  { n: '01', title: 'Set Up Compliant Opt-In', desc: 'We build compliant opt-in flows into your existing forms and checkout so your SMS list grows the right way.' },
  { n: '02', title: 'Build Flows & Calendar', desc: 'Core SMS flows go live alongside a monthly campaign calendar planned around your promotions.' },
  { n: '03', title: 'Launch & Track Attribution', desc: 'Campaigns and flows launch, and we track revenue across both channels so you see the full picture.' },
]

export default function SmsCampaignsPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '68px' }}>
        <style>{`
          .sms-hero {
            padding: 64px 0 76px;
            background:
              radial-gradient(ellipse at top left, rgba(30, 166, 114, 0.14) 0%, transparent 60%),
              radial-gradient(ellipse at bottom right, rgba(30, 166, 114, 0.14) 0%, transparent 60%),
              #ffffff;
            overflow: hidden; position: relative;
          }
          .sms-hero-grid { display: grid; grid-template-columns: minmax(0,1fr) minmax(0,1fr); gap: 48px; align-items: center; }
          .sms-hero-left .section-tag::before { display: none; }
          .sms-hero-left h1 { margin-bottom: 18px; }
          .sms-hero-left .section-sub { margin-bottom: 32px; max-width: 480px; }
          .sms-btns { display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 28px; }
          .sms-proof { display: flex; align-items: center; gap: 6px; font-size: 13px; color: var(--ink3); }

          .sms-hero-card {
            background: #fff; border: 1px solid var(--border); border-radius: 20px;
            padding: 40px 38px; box-shadow: 0 28px 70px rgba(15,22,35,.09);
            max-width: 480px; width: 100%; margin: 0 auto;
          }
          .sms-hero-card-title { font-size: 14px; font-weight: 800; text-transform: uppercase; letter-spacing: .04em; color: var(--g); margin-bottom: 22px; }
          .sms-hero-card ul { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 20px; }
          .sms-hero-card li { display: flex; align-items: flex-start; gap: 12px; font-size: 15.5px; color: var(--ink2); line-height: 1.5; }
          .sms-hero-card li svg { color: var(--g); flex-shrink: 0; margin-top: 2px; }

          @media(max-width:1000px){
            .sms-hero-grid { grid-template-columns: 1fr; }
            .sms-hero-card { max-width: 520px; }
          }

          .sms-feature { padding: 72px 0; }
          .sms-feature-alt { background: var(--soft); }
          .sms-feature-alt .sms-migrate-box,
          .sms-feature-alt .sms-chart-viz,
          .sms-feature-alt .sms-cost-viz .sms-cost-card { background: #fff; }
          .sms-feature-grid { display: grid; grid-template-columns: minmax(0,1fr) minmax(0,1fr); gap: 56px; align-items: center; }
          .sms-feature-tag { font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: .05em; color: var(--g); margin-bottom: 12px; }
          .sms-feature h2 { font-size: clamp(24px, 2.4vw, 30px); color: var(--ink); margin-bottom: 14px; }
          .sms-feature-sub { color: var(--ink3); font-size: 15.5px; line-height: 1.75; margin-bottom: 22px; max-width: 460px; }
          .sms-feature ul { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 14px; }
          .sms-feature li { display: flex; align-items: flex-start; gap: 10px; font-size: 14.5px; color: var(--ink2); line-height: 1.55; max-width: 440px; }
          .sms-feature li svg { color: var(--g); flex-shrink: 0; margin-top: 2px; }

          @media(max-width:900px){
            .sms-feature-grid { grid-template-columns: 1fr; }
          }

          .sms-migrate-viz {
            background: var(--soft); border-radius: 16px; padding: 32px 24px;
            display: flex; align-items: center; justify-content: center; gap: 14px;
          }
          .sms-migrate-box {
            flex: 1; background: #fff; border: 1px solid var(--border); border-radius: 12px;
            padding: 22px 16px; text-align: center;
          }
          .sms-migrate-box span { display: block; font-size: 12px; font-weight: 700; color: var(--ink4); text-transform: uppercase; letter-spacing: .03em; margin-bottom: 10px; }
          .sms-migrate-box strong { font-size: 15px; color: var(--ink); }
          .sms-migrate-arrow { color: var(--g); flex-shrink: 0; }

          .sms-hub-viz { position: relative; width: 100%; max-width: 340px; aspect-ratio: 1/1; margin: 0 auto; }
          .sms-hub-lines { position: absolute; inset: 0; width: 100%; height: 100%; }
          .sms-hub-center {
            position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%);
            width: 34%; aspect-ratio: 1/1; border-radius: 50%;
            background: linear-gradient(135deg, #1ea672, #17845b); color: #fff;
            display: flex; align-items: center; justify-content: center;
            font-size: 12.5px; font-weight: 800; letter-spacing: .02em; text-align: center;
            box-shadow: 0 16px 40px rgba(30,166,114,.3); z-index: 2; padding: 6px;
          }
          .sms-hub-node {
            position: absolute; transform: translate(-50%,-50%);
            width: 30%; display: flex; flex-direction: column; align-items: center; gap: 6px; z-index: 2;
          }
          .sms-hub-node-ico {
            width: 38px; height: 38px; border-radius: 10px; background: #fff; border: 1px solid var(--border);
            color: var(--g); display: flex; align-items: center; justify-content: center;
            box-shadow: 0 6px 16px rgba(15,22,35,.06);
          }
          .sms-hub-node span { font-size: 10.5px; font-weight: 700; color: var(--ink3); }

          .sms-chart-viz { background: var(--soft); border-radius: 16px; padding: 32px 24px 20px; }
          .sms-chart-bars { display: flex; align-items: flex-end; gap: 10px; height: 140px; margin-bottom: 12px; }
          .sms-chart-bar { flex: 1; background: linear-gradient(180deg, #1ea672, #17845b); border-radius: 6px 6px 0 0; }
          .sms-chart-labels { display: flex; gap: 10px; }
          .sms-chart-labels span { flex: 1; text-align: center; font-size: 10.5px; color: var(--ink4); font-weight: 600; }
          .sms-chart-tag {
            display: inline-flex; align-items: center; gap: 6px; margin-top: 14px;
            background: var(--gl); color: var(--gd); font-size: 12px; font-weight: 700;
            padding: 5px 12px; border-radius: 20px;
          }

          .sms-cost-viz { display: flex; align-items: center; gap: 14px; }
          .sms-cost-card {
            flex: 1; background: #fff; border: 1px solid var(--border); border-radius: 14px;
            padding: 22px 18px; text-align: center;
          }
          .sms-cost-card.after { border-color: var(--gm); background: var(--gl); }
          .sms-cost-card span { display: block; font-size: 11.5px; font-weight: 700; color: var(--ink4); text-transform: uppercase; letter-spacing: .03em; margin-bottom: 10px; }
          .sms-cost-num { font-size: 26px; font-weight: 800; color: var(--ink); margin-bottom: 4px; }
          .sms-cost-card.after .sms-cost-num { color: var(--gd); }
          .sms-cost-sub { font-size: 12.5px; color: var(--ink4); }
          .sms-cost-arrow { color: var(--g); flex-shrink: 0; }

          .sms-included { background: var(--soft); padding: 72px 0; }
          .sms-included-grid { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 18px 40px; max-width: 880px; margin: 0 auto; }
          .sms-included-item { display: flex; align-items: flex-start; gap: 12px; font-size: 15px; color: var(--ink2); font-weight: 600; }
          .sms-included-item svg { color: var(--g); flex-shrink: 0; margin-top: 2px; }
          @media(max-width:640px){ .sms-included-grid { grid-template-columns: 1fr; } }

          .sms-steps { padding: 72px 0 88px; }
          .sms-steps-grid { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 32px; }
          .sms-step { min-width: 0; }
          .sms-step-num {
            width: 44px; height: 44px; border-radius: 50%;
            background: var(--gl); color: var(--gd); font-weight: 800; font-size: 15px;
            display: flex; align-items: center; justify-content: center; margin-bottom: 18px;
          }
          .sms-step h3 { font-size: 17px; color: var(--ink); margin-bottom: 8px; }
          .sms-step p { font-size: 14px; color: var(--ink3); line-height: 1.7; }
          @media(max-width:900px){ .sms-steps-grid { grid-template-columns: 1fr; } }

          .sms-bottom { text-align: center; padding: 64px 0 96px; }
          .sms-bottom p { color: var(--ink3); font-size: 16px; margin-bottom: 24px; }
        `}</style>

        <section className="sms-hero">
          <div className="wrap sms-hero-grid">
            <div className="sms-hero-left">
              <div className="section-tag">SMS Marketing</div>
              <h1 style={{ fontSize: 'clamp(32px,3.8vw,46px)' }}>Add a second channel that<br /><em style={{ color: 'var(--g)', fontStyle: 'normal' }}>recovers revenue email misses.</em></h1>
              <p className="section-sub">SMS flows and campaigns that drive urgency and recover lost revenue, running right alongside your email program.</p>
              <div className="sms-btns">
                <Link href="/#contact" className="btn-primary">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                  Book a Free Call
                </Link>
                <Link href="/#cases" className="btn-ghost">See Case Studies →</Link>
              </div>
              <div className="sms-proof">
                <span style={{ color: '#f5a623', fontSize: '15px', letterSpacing: '1px' }}>⭐⭐⭐⭐⭐</span>
                <span>5.0 · 752 reviews on Upwork</span>
              </div>
            </div>

            <div className="sms-hero-card">
              <div className="sms-hero-card-title">What you get</div>
              <ul>
                <li><CheckCircle2 size={21} strokeWidth={2} /> Compliant opt-in flows built into your existing forms</li>
                <li><CheckCircle2 size={21} strokeWidth={2} /> SMS flows for cart recovery, back-in-stock & flash sales</li>
                <li><CheckCircle2 size={21} strokeWidth={2} /> A coordinated campaign calendar across email & SMS</li>
                <li><CheckCircle2 size={21} strokeWidth={2} /> Combined attribution so you see the full picture</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="sms-feature">
          <div className="wrap sms-feature-grid">
            <div>
              <div className="sms-feature-tag">Strategy & Compliance</div>
              <h2>A second channel, set up the right way.</h2>
              <p className="sms-feature-sub">We build compliant opt-in flows into your existing forms and checkout, so your SMS list grows without any shortcuts.</p>
              <ul>
                <li><ShieldCheck size={17} /> Compliant opt-in flows built the right way</li>
                <li><MessageSquare size={17} /> Messaging cadence tuned to avoid fatigue</li>
                <li><ListChecks size={17} /> Keyword & consent tracking set up correctly</li>
              </ul>
            </div>
            <div className="sms-migrate-viz">
              <div className="sms-migrate-box">
                <span>Existing</span>
                <strong>Email List</strong>
              </div>
              <ArrowRight className="sms-migrate-arrow" size={20} />
              <div className="sms-migrate-box">
                <span>New Channel</span>
                <strong>SMS List</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="sms-feature sms-feature-alt">
          <div className="wrap sms-feature-grid">
            <div className="sms-hub-viz" style={{ order: 1 }}>
              <svg className="sms-hub-lines" viewBox="0 0 100 100" preserveAspectRatio="none">
                {smsHubNodes.map((n) => (
                  <line key={n.label} x1="50" y1="50" x2={n.x} y2={n.y} stroke="var(--border)" strokeWidth="1" />
                ))}
              </svg>
              <div className="sms-hub-center">SMS Flows</div>
              {smsHubNodes.map((n) => (
                <div key={n.label} className="sms-hub-node" style={{ left: `${n.x}%`, top: `${n.y}%` }}>
                  <div className="sms-hub-node-ico"><n.icon size={18} /></div>
                  <span>{n.label}</span>
                </div>
              ))}
            </div>
            <div style={{ order: 2 }}>
              <div className="sms-feature-tag">Flow Builds</div>
              <h2>Timely texts that recover revenue email can&apos;t.</h2>
              <p className="sms-feature-sub">Cart recovery, back-in-stock alerts, and flash sale flows land where email often gets missed: right on the lock screen.</p>
              <ul>
                <li><ShoppingCart size={17} /> Abandoned cart recovery via text</li>
                <li><Bell size={17} /> Back-in-stock alerts sent the moment it&apos;s live</li>
                <li><Zap size={17} /> Flash sale & urgency-driven flows</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="sms-feature">
          <div className="wrap sms-feature-grid">
            <div>
              <div className="sms-feature-tag">Campaign Calendar</div>
              <h2>Promotions sent on a schedule, not a whim.</h2>
              <p className="sms-feature-sub">A monthly SMS campaign calendar keeps sends coordinated with your promotions, without overwhelming your list.</p>
              <ul>
                <li><Calendar size={17} /> Monthly SMS campaign calendar planned in advance</li>
                <li><Megaphone size={17} /> Promotions & drops sent at the right cadence</li>
                <li><Percent size={17} /> Send frequency capped to protect opt-out rate</li>
              </ul>
            </div>
            <div className="sms-chart-viz">
              <div className="sms-chart-bars">
                {smsBars.map((b) => (
                  <div key={b.label} className="sms-chart-bar" style={{ height: `${b.h}%` }} />
                ))}
              </div>
              <div className="sms-chart-labels">
                {smsBars.map((b) => <span key={b.label}>{b.label}</span>)}
              </div>
              <span className="sms-chart-tag"><TrendingUp size={13} /> Steady click-through week over week</span>
            </div>
          </div>
        </section>

        <section className="sms-feature sms-feature-alt">
          <div className="wrap sms-feature-grid">
            <div className="sms-cost-viz" style={{ order: 1 }}>
              <div className="sms-cost-card">
                <span>Email Only</span>
                <div className="sms-cost-num">$1.00</div>
                <div className="sms-cost-sub">baseline revenue</div>
              </div>
              <ArrowRight className="sms-cost-arrow" size={22} />
              <div className="sms-cost-card after">
                <span>Email + SMS</span>
                <div className="sms-cost-num">$1.24</div>
                <div className="sms-cost-sub">combined revenue</div>
              </div>
            </div>
            <div style={{ order: 2 }}>
              <div className="sms-feature-tag">Combined Attribution</div>
              <h2>See exactly what each channel is worth.</h2>
              <p className="sms-feature-sub">Unified reporting attributes revenue accurately across both channels, so you know where to invest next.</p>
              <ul>
                <li><LineChart size={17} /> Unified reporting across both channels</li>
                <li><DollarSign size={17} /> Revenue attributed accurately per channel</li>
                <li><TrendingUp size={17} /> Channel mix optimized month over month</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="sms-included">
          <div className="wrap">
            <div className="sh-row" style={{ textAlign: 'center', marginBottom: '40px' }}>
              <h2>What&apos;s <em style={{ color: 'var(--g)', fontStyle: 'normal' }}>included.</em></h2>
              <p className="section-sub" style={{ margin: '0 auto' }}>Everything needed to launch SMS alongside your email program.</p>
            </div>
            <div className="sms-included-grid">
              {included.map((item) => (
                <div key={item} className="sms-included-item">
                  <CheckCircle2 size={19} strokeWidth={2} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="sms-steps">
          <div className="wrap">
            <div className="sh-row" style={{ textAlign: 'center', marginBottom: '48px' }}>
              <h2>How it <em style={{ color: 'var(--g)', fontStyle: 'normal' }}>works.</em></h2>
              <p className="section-sub" style={{ margin: '0 auto' }}>Three steps, start to finish.</p>
            </div>
            <div className="sms-steps-grid">
              {steps.map((s) => (
                <div key={s.n} className="sms-step">
                  <div className="sms-step-num">{s.n}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="sms-bottom">
          <p>Ready to add SMS as a second revenue channel?</p>
          <Link href="/#contact" className="btn-primary">Book a Free Call →</Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
