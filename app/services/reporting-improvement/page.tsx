import Link from 'next/link'
import Navbar from '../../components/Navbar'
import { Footer } from '../../components/Sections'
import {
  CheckCircle2, LineChart, TrendingUp, ClipboardList, Percent,
  SearchCheck, ShieldCheck, MailCheck, ListChecks, RefreshCw,
  AlertTriangle, Workflow, DollarSign, Megaphone, Users, ArrowRight,
} from 'lucide-react'

const revenueBars = [
  { label: 'Apr', h: 34 },
  { label: 'May', h: 44 },
  { label: 'Jun', h: 56 },
  { label: 'Jul', h: 70 },
  { label: 'Aug', h: 90 },
]

const monitorItems = [
  { icon: MailCheck,     label: 'Inbox Placement' },
  { icon: ShieldCheck,   label: 'Sender Score' },
  { icon: RefreshCw,     label: 'Bounce Rate' },
  { icon: AlertTriangle, label: 'Spam Complaints' },
]

const optimizeHubNodes = [
  { icon: Workflow,   label: 'Flows',     x: 50, y: 8 },
  { icon: Megaphone,  label: 'Campaigns', x: 89, y: 35 },
  { icon: Users,      label: 'Segments',  x: 74, y: 88 },
  { icon: ListChecks, label: 'Forms',     x: 26, y: 88 },
  { icon: SearchCheck,label: 'Templates', x: 11, y: 35 },
]

const included = [
  'Monthly performance report & walkthrough call',
  'A/B testing program across flows & campaigns',
  'Deliverability monitoring & alerts',
  'List hygiene maintenance',
  'Flow optimization based on live data',
  'Segmentation refinement over time',
  'Quarterly strategy review',
  'Direct access to your account manager',
]

const steps = [
  { n: '01', title: 'Report & Review', desc: 'Every month you get a clear report on revenue, engagement, and deliverability, translated out of raw metrics.' },
  { n: '02', title: 'Test & Refine', desc: 'We run structured A/B tests on subject lines, send times, and content, and roll out what wins.' },
  { n: '03', title: 'Optimize & Repeat', desc: 'Underperforming flows and campaigns get rebuilt, and the cycle repeats so results keep compounding.' },
]

export default function ReportingImprovementPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '68px' }}>
        <style>{`
          .rpi-hero {
            padding: 64px 0 76px;
            background:
              radial-gradient(ellipse at top left, rgba(30, 166, 114, 0.14) 0%, transparent 60%),
              radial-gradient(ellipse at bottom right, rgba(30, 166, 114, 0.14) 0%, transparent 60%),
              #ffffff;
            overflow: hidden; position: relative;
          }
          .rpi-hero-grid { display: grid; grid-template-columns: minmax(0,1fr) minmax(0,1fr); gap: 48px; align-items: center; }
          .rpi-hero-left .section-tag::before { display: none; }
          .rpi-hero-left h1 { margin-bottom: 18px; }
          .rpi-hero-left .section-sub { margin-bottom: 32px; max-width: 480px; }
          .rpi-btns { display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 28px; }
          .rpi-proof { display: flex; align-items: center; gap: 6px; font-size: 13px; color: var(--ink3); }

          .rpi-hero-card {
            background: #fff; border: 1px solid var(--border); border-radius: 20px;
            padding: 40px 38px; box-shadow: 0 28px 70px rgba(15,22,35,.09);
            max-width: 480px; width: 100%; margin: 0 auto;
          }
          .rpi-hero-card-title { font-size: 14px; font-weight: 800; text-transform: uppercase; letter-spacing: .04em; color: var(--g); margin-bottom: 22px; }
          .rpi-hero-card ul { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 20px; }
          .rpi-hero-card li { display: flex; align-items: flex-start; gap: 12px; font-size: 15.5px; color: var(--ink2); line-height: 1.5; }
          .rpi-hero-card li svg { color: var(--g); flex-shrink: 0; margin-top: 2px; }

          @media(max-width:1000px){
            .rpi-hero-grid { grid-template-columns: 1fr; }
            .rpi-hero-card { max-width: 520px; }
          }

          .rpi-feature { padding: 72px 0; }
          .rpi-feature-alt { background: var(--soft); }
          .rpi-feature-alt .rpi-chart-viz,
          .rpi-feature-alt .rpi-foundation-viz,
          .rpi-feature-alt .rpi-cost-viz .rpi-cost-card { background: #fff; }
          .rpi-feature-grid { display: grid; grid-template-columns: minmax(0,1fr) minmax(0,1fr); gap: 56px; align-items: center; }
          .rpi-feature-tag { font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: .05em; color: var(--g); margin-bottom: 12px; }
          .rpi-feature h2 { font-size: clamp(24px, 2.4vw, 30px); color: var(--ink); margin-bottom: 14px; }
          .rpi-feature-sub { color: var(--ink3); font-size: 15.5px; line-height: 1.75; margin-bottom: 22px; max-width: 460px; }
          .rpi-feature ul { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 14px; }
          .rpi-feature li { display: flex; align-items: flex-start; gap: 10px; font-size: 14.5px; color: var(--ink2); line-height: 1.55; max-width: 440px; }
          .rpi-feature li svg { color: var(--g); flex-shrink: 0; margin-top: 2px; }

          @media(max-width:900px){
            .rpi-feature-grid { grid-template-columns: 1fr; }
          }

          .rpi-chart-viz { background: var(--soft); border-radius: 16px; padding: 32px 24px 20px; }
          .rpi-chart-bars { display: flex; align-items: flex-end; gap: 10px; height: 140px; margin-bottom: 12px; }
          .rpi-chart-bar { flex: 1; background: linear-gradient(180deg, #1ea672, #17845b); border-radius: 6px 6px 0 0; }
          .rpi-chart-labels { display: flex; gap: 10px; }
          .rpi-chart-labels span { flex: 1; text-align: center; font-size: 10.5px; color: var(--ink4); font-weight: 600; }
          .rpi-chart-tag {
            display: inline-flex; align-items: center; gap: 6px; margin-top: 14px;
            background: var(--gl); color: var(--gd); font-size: 12px; font-weight: 700;
            padding: 5px 12px; border-radius: 20px;
          }

          .rpi-cost-viz { display: flex; align-items: center; gap: 14px; }
          .rpi-cost-card {
            flex: 1; background: #fff; border: 1px solid var(--border); border-radius: 14px;
            padding: 22px 18px; text-align: center;
          }
          .rpi-cost-card.after { border-color: var(--gm); background: var(--gl); }
          .rpi-cost-card span { display: block; font-size: 11.5px; font-weight: 700; color: var(--ink4); text-transform: uppercase; letter-spacing: .03em; margin-bottom: 10px; }
          .rpi-cost-num { font-size: 26px; font-weight: 800; color: var(--ink); margin-bottom: 4px; }
          .rpi-cost-card.after .rpi-cost-num { color: var(--gd); }
          .rpi-cost-sub { font-size: 12.5px; color: var(--ink4); }
          .rpi-cost-arrow { color: var(--g); flex-shrink: 0; }

          .rpi-foundation-viz {
            background: var(--soft); border-radius: 16px; padding: 24px;
            display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 14px;
          }
          .rpi-foundation-card {
            background: #fff; border: 1px solid var(--border); border-radius: 12px;
            padding: 22px 14px; text-align: center;
          }
          .rpi-foundation-ico {
            width: 40px; height: 40px; border-radius: 10px; background: var(--gl); color: var(--g);
            display: flex; align-items: center; justify-content: center; margin: 0 auto 10px;
          }
          .rpi-foundation-card span { font-size: 12.5px; font-weight: 700; color: var(--ink2); line-height: 1.3; }

          .rpi-hub-viz { position: relative; width: 100%; max-width: 340px; aspect-ratio: 1/1; margin: 0 auto; }
          .rpi-hub-lines { position: absolute; inset: 0; width: 100%; height: 100%; }
          .rpi-hub-center {
            position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%);
            width: 34%; aspect-ratio: 1/1; border-radius: 50%;
            background: linear-gradient(135deg, #1ea672, #17845b); color: #fff;
            display: flex; align-items: center; justify-content: center;
            font-size: 12.5px; font-weight: 800; letter-spacing: .02em; text-align: center;
            box-shadow: 0 16px 40px rgba(30,166,114,.3); z-index: 2; padding: 6px;
          }
          .rpi-hub-node {
            position: absolute; transform: translate(-50%,-50%);
            width: 30%; display: flex; flex-direction: column; align-items: center; gap: 6px; z-index: 2;
          }
          .rpi-hub-node-ico {
            width: 38px; height: 38px; border-radius: 10px; background: #fff; border: 1px solid var(--border);
            color: var(--g); display: flex; align-items: center; justify-content: center;
            box-shadow: 0 6px 16px rgba(15,22,35,.06);
          }
          .rpi-hub-node span { font-size: 10.5px; font-weight: 700; color: var(--ink3); }

          .rpi-included { background: var(--soft); padding: 72px 0; }
          .rpi-included-grid { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 18px 40px; max-width: 880px; margin: 0 auto; }
          .rpi-included-item { display: flex; align-items: flex-start; gap: 12px; font-size: 15px; color: var(--ink2); font-weight: 600; }
          .rpi-included-item svg { color: var(--g); flex-shrink: 0; margin-top: 2px; }
          @media(max-width:640px){ .rpi-included-grid { grid-template-columns: 1fr; } }

          .rpi-steps { padding: 72px 0 88px; }
          .rpi-steps-grid { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 32px; }
          .rpi-step { min-width: 0; }
          .rpi-step-num {
            width: 44px; height: 44px; border-radius: 50%;
            background: var(--gl); color: var(--gd); font-weight: 800; font-size: 15px;
            display: flex; align-items: center; justify-content: center; margin-bottom: 18px;
          }
          .rpi-step h3 { font-size: 17px; color: var(--ink); margin-bottom: 8px; }
          .rpi-step p { font-size: 14px; color: var(--ink3); line-height: 1.7; }
          @media(max-width:900px){ .rpi-steps-grid { grid-template-columns: 1fr; } }

          .rpi-bottom { text-align: center; padding: 64px 0 96px; }
          .rpi-bottom p { color: var(--ink3); font-size: 16px; margin-bottom: 24px; }
        `}</style>

        <section className="rpi-hero">
          <div className="wrap rpi-hero-grid">
            <div className="rpi-hero-left">
              <div className="section-tag">Reporting & Improvement</div>
              <h1 style={{ fontSize: 'clamp(32px,3.8vw,46px)' }}>Clear reporting,<br /><em style={{ color: 'var(--g)', fontStyle: 'normal' }}>and a plan to keep improving it.</em></h1>
              <p className="section-sub">Clear performance reporting paired with continuous testing and optimization to keep results improving month over month.</p>
              <div className="rpi-btns">
                <Link href="/#contact" className="btn-primary">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                  Book a Free Call
                </Link>
                <Link href="/#cases" className="btn-ghost">See Case Studies →</Link>
              </div>
              <div className="rpi-proof">
                <span style={{ color: '#f5a623', fontSize: '15px', letterSpacing: '1px' }}>⭐⭐⭐⭐⭐</span>
                <span>5.0 · 752 reviews on Upwork</span>
              </div>
            </div>

            <div className="rpi-hero-card">
              <div className="rpi-hero-card-title">What you get</div>
              <ul>
                <li><CheckCircle2 size={21} strokeWidth={2} /> A monthly performance report in plain language</li>
                <li><CheckCircle2 size={21} strokeWidth={2} /> A structured A/B testing program across flows & campaigns</li>
                <li><CheckCircle2 size={21} strokeWidth={2} /> Deliverability monitored so inbox placement stays healthy</li>
                <li><CheckCircle2 size={21} strokeWidth={2} /> Continuous flow optimization based on real data</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rpi-feature">
          <div className="wrap rpi-feature-grid">
            <div>
              <div className="rpi-feature-tag">Monthly Performance Reporting</div>
              <h2>Know exactly how your program is performing.</h2>
              <p className="rpi-feature-sub">Every month you get a clear report on revenue, engagement, and list growth, translated out of raw metrics into plain language.</p>
              <ul>
                <li><LineChart size={17} /> A clear monthly report on revenue & engagement</li>
                <li><TrendingUp size={17} /> Trends tracked across flows, campaigns & lists</li>
                <li><ClipboardList size={17} /> Key metrics translated into plain language</li>
              </ul>
            </div>
            <div className="rpi-chart-viz">
              <div className="rpi-chart-bars">
                {revenueBars.map((b) => (
                  <div key={b.label} className="rpi-chart-bar" style={{ height: `${b.h}%` }} />
                ))}
              </div>
              <div className="rpi-chart-labels">
                {revenueBars.map((b) => <span key={b.label}>{b.label}</span>)}
              </div>
              <span className="rpi-chart-tag"><TrendingUp size={13} /> Revenue trending up month over month</span>
            </div>
          </div>
        </section>

        <section className="rpi-feature rpi-feature-alt">
          <div className="wrap rpi-feature-grid">
            <div className="rpi-cost-viz" style={{ order: 1 }}>
              <div className="rpi-cost-card">
                <span>Before Testing</span>
                <div className="rpi-cost-num">28%</div>
                <div className="rpi-cost-sub">open rate</div>
              </div>
              <ArrowRight className="rpi-cost-arrow" size={22} />
              <div className="rpi-cost-card after">
                <span>After Testing</span>
                <div className="rpi-cost-num">41%</div>
                <div className="rpi-cost-sub">open rate</div>
              </div>
            </div>
            <div style={{ order: 2 }}>
              <div className="rpi-feature-tag">A/B Testing Program</div>
              <h2>Every send is a chance to learn something.</h2>
              <p className="rpi-feature-sub">Subject lines, send times, and content are tested continuously, with winning variants rolled into future sends.</p>
              <ul>
                <li><Percent size={17} /> Subject lines, send times & content tested</li>
                <li><SearchCheck size={17} /> Winning variants rolled out automatically</li>
                <li><TrendingUp size={17} /> Compounding lift tracked test over test</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rpi-feature">
          <div className="wrap rpi-feature-grid">
            <div>
              <div className="rpi-feature-tag">Deliverability Monitoring</div>
              <h2>Protect the inbox placement your revenue depends on.</h2>
              <p className="rpi-feature-sub">We keep a constant eye on sender reputation and list hygiene, so deliverability issues get caught before they hurt revenue.</p>
              <ul>
                <li><ShieldCheck size={17} /> Inbox placement monitored across providers</li>
                <li><MailCheck size={17} /> Sender reputation tracked and protected</li>
                <li><ListChecks size={17} /> List hygiene maintained on an ongoing basis</li>
              </ul>
            </div>
            <div className="rpi-foundation-viz">
              {monitorItems.map((item) => (
                <div key={item.label} className="rpi-foundation-card">
                  <div className="rpi-foundation-ico"><item.icon size={20} /></div>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="rpi-feature rpi-feature-alt">
          <div className="wrap rpi-feature-grid">
            <div className="rpi-hub-viz" style={{ order: 1 }}>
              <svg className="rpi-hub-lines" viewBox="0 0 100 100" preserveAspectRatio="none">
                {optimizeHubNodes.map((n) => (
                  <line key={n.label} x1="50" y1="50" x2={n.x} y2={n.y} stroke="var(--border)" strokeWidth="1" />
                ))}
              </svg>
              <div className="rpi-hub-center">Optimize</div>
              {optimizeHubNodes.map((n) => (
                <div key={n.label} className="rpi-hub-node" style={{ left: `${n.x}%`, top: `${n.y}%` }}>
                  <div className="rpi-hub-node-ico"><n.icon size={18} /></div>
                  <span>{n.label}</span>
                </div>
              ))}
            </div>
            <div style={{ order: 2 }}>
              <div className="rpi-feature-tag">Continuous Flow Optimization</div>
              <h2>Your program should get better every month, not stay static.</h2>
              <p className="rpi-feature-sub">Underperforming flows get identified and rebuilt, and new flows are added as your program matures.</p>
              <ul>
                <li><RefreshCw size={17} /> Underperforming flows identified and rebuilt</li>
                <li><Workflow size={17} /> New flows added as your program matures</li>
                <li><DollarSign size={17} /> Revenue per flow improved month over month</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rpi-included">
          <div className="wrap">
            <div className="sh-row" style={{ textAlign: 'center', marginBottom: '40px' }}>
              <h2>What&apos;s <em style={{ color: 'var(--g)', fontStyle: 'normal' }}>included.</em></h2>
              <p className="section-sub" style={{ margin: '0 auto' }}>Ongoing reporting and optimization to keep results moving forward.</p>
            </div>
            <div className="rpi-included-grid">
              {included.map((item) => (
                <div key={item} className="rpi-included-item">
                  <CheckCircle2 size={19} strokeWidth={2} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="rpi-steps">
          <div className="wrap">
            <div className="sh-row" style={{ textAlign: 'center', marginBottom: '48px' }}>
              <h2>How it <em style={{ color: 'var(--g)', fontStyle: 'normal' }}>works.</em></h2>
              <p className="section-sub" style={{ margin: '0 auto' }}>Three steps, repeated every month.</p>
            </div>
            <div className="rpi-steps-grid">
              {steps.map((s) => (
                <div key={s.n} className="rpi-step">
                  <div className="rpi-step-num">{s.n}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="rpi-bottom">
          <p>Ready for reporting and optimization that never stops?</p>
          <Link href="/#contact" className="btn-primary">Book a Free Call →</Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
