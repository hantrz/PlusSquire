import Link from 'next/link'
import Navbar from '../../components/Navbar'
import { Footer } from '../../components/Sections'
import {
  CheckCircle2, ShieldCheck, Workflow, Users, Paintbrush, MailCheck,
  SearchCheck, TrendingUp, Target, ListChecks, Percent, Star,
  Sparkles, RefreshCw, ClipboardList, ArrowRight,
} from 'lucide-react'

const foundationItems = [
  { icon: ShieldCheck, label: 'Deliverability' },
  { icon: Workflow,    label: 'Flows' },
  { icon: Users,       label: 'Segments' },
  { icon: Paintbrush,  label: 'Templates' },
]

const segmentHubNodes = [
  { icon: Star,      label: 'VIP',      x: 50, y: 8 },
  { icon: Sparkles,  label: 'New',      x: 89, y: 35 },
  { icon: Users,     label: 'Engaged',  x: 74, y: 88 },
  { icon: RefreshCw, label: 'Lapsed',   x: 26, y: 88 },
  { icon: Target,    label: 'At-Risk',  x: 11, y: 35 },
]

const actionBars = [
  { label: 'Wk 1', h: 30 },
  { label: 'Wk 2', h: 48 },
  { label: 'Wk 3', h: 62 },
  { label: 'Wk 4', h: 80 },
  { label: 'Wk 5', h: 96 },
]

const included = [
  'Full deliverability & authentication check',
  'List health & engagement analysis',
  'Flow-by-flow performance review',
  'Segmentation & targeting audit',
  'Template & design review',
  'Competitive benchmarking',
  'Prioritized 90-day action plan',
  'Live walkthrough of every finding',
]

const steps = [
  { n: '01', title: 'Deep-Dive Audit', desc: 'We go through every corner of your account, deliverability, flows, segments, templates, and log every finding.' },
  { n: '02', title: 'Score & Benchmark', desc: 'Your program is scored against industry benchmarks so you know exactly where you stand.' },
  { n: '03', title: 'Deliver Action Plan', desc: 'You get a prioritized, ranked plan and a live walkthrough of what to fix first and why.' },
]

export default function AccountAuditPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '68px' }}>
        <style>{`
          .aud-hero {
            padding: 64px 0 76px;
            background:
              radial-gradient(ellipse at top left, rgba(30, 166, 114, 0.14) 0%, transparent 60%),
              radial-gradient(ellipse at bottom right, rgba(30, 166, 114, 0.14) 0%, transparent 60%),
              #ffffff;
            overflow: hidden; position: relative;
          }
          .aud-hero-grid { display: grid; grid-template-columns: minmax(0,1fr) minmax(0,1fr); gap: 48px; align-items: center; }
          .aud-hero-left .section-tag::before { display: none; }
          .aud-hero-left h1 { margin-bottom: 18px; }
          .aud-hero-left .section-sub { margin-bottom: 32px; max-width: 480px; }
          .aud-btns { display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 28px; }
          .aud-proof { display: flex; align-items: center; gap: 6px; font-size: 13px; color: var(--ink3); }

          .aud-hero-card {
            background: #fff; border: 1px solid var(--border); border-radius: 20px;
            padding: 40px 38px; box-shadow: 0 28px 70px rgba(15,22,35,.09);
            max-width: 480px; width: 100%; margin: 0 auto;
          }
          .aud-hero-card-title { font-size: 14px; font-weight: 800; text-transform: uppercase; letter-spacing: .04em; color: var(--g); margin-bottom: 22px; }
          .aud-hero-card ul { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 20px; }
          .aud-hero-card li { display: flex; align-items: flex-start; gap: 12px; font-size: 15.5px; color: var(--ink2); line-height: 1.5; }
          .aud-hero-card li svg { color: var(--g); flex-shrink: 0; margin-top: 2px; }

          @media(max-width:1000px){
            .aud-hero-grid { grid-template-columns: 1fr; }
            .aud-hero-card { max-width: 520px; }
          }

          .aud-feature { padding: 72px 0; }
          .aud-feature-alt { background: var(--soft); }
          .aud-feature-alt .aud-foundation-viz,
          .aud-feature-alt .aud-chart-viz,
          .aud-feature-alt .aud-cost-viz .aud-cost-card { background: #fff; }
          .aud-feature-grid { display: grid; grid-template-columns: minmax(0,1fr) minmax(0,1fr); gap: 56px; align-items: center; }
          .aud-feature-tag { font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: .05em; color: var(--g); margin-bottom: 12px; }
          .aud-feature h2 { font-size: clamp(24px, 2.4vw, 30px); color: var(--ink); margin-bottom: 14px; }
          .aud-feature-sub { color: var(--ink3); font-size: 15.5px; line-height: 1.75; margin-bottom: 22px; max-width: 460px; }
          .aud-feature ul { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 14px; }
          .aud-feature li { display: flex; align-items: flex-start; gap: 10px; font-size: 14.5px; color: var(--ink2); line-height: 1.55; max-width: 440px; }
          .aud-feature li svg { color: var(--g); flex-shrink: 0; margin-top: 2px; }

          @media(max-width:900px){
            .aud-feature-grid { grid-template-columns: 1fr; }
          }

          .aud-foundation-viz {
            background: var(--soft); border-radius: 16px; padding: 24px;
            display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 14px;
          }
          .aud-foundation-card {
            background: #fff; border: 1px solid var(--border); border-radius: 12px;
            padding: 22px 14px; text-align: center;
          }
          .aud-foundation-ico {
            width: 40px; height: 40px; border-radius: 10px; background: var(--gl); color: var(--g);
            display: flex; align-items: center; justify-content: center; margin: 0 auto 10px;
          }
          .aud-foundation-card span { font-size: 12.5px; font-weight: 700; color: var(--ink2); line-height: 1.3; }

          .aud-cost-viz { display: flex; align-items: center; gap: 14px; }
          .aud-cost-card {
            flex: 1; background: #fff; border: 1px solid var(--border); border-radius: 14px;
            padding: 22px 18px; text-align: center;
          }
          .aud-cost-card.after { border-color: var(--gm); background: var(--gl); }
          .aud-cost-card span { display: block; font-size: 11.5px; font-weight: 700; color: var(--ink4); text-transform: uppercase; letter-spacing: .03em; margin-bottom: 10px; }
          .aud-cost-num { font-size: 26px; font-weight: 800; color: var(--ink); margin-bottom: 4px; }
          .aud-cost-card.after .aud-cost-num { color: var(--gd); }
          .aud-cost-sub { font-size: 12.5px; color: var(--ink4); }
          .aud-cost-arrow { color: var(--g); flex-shrink: 0; }

          .aud-hub-viz { position: relative; width: 100%; max-width: 340px; aspect-ratio: 1/1; margin: 0 auto; }
          .aud-hub-lines { position: absolute; inset: 0; width: 100%; height: 100%; }
          .aud-hub-center {
            position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%);
            width: 34%; aspect-ratio: 1/1; border-radius: 50%;
            background: linear-gradient(135deg, #1ea672, #17845b); color: #fff;
            display: flex; align-items: center; justify-content: center;
            font-size: 12.5px; font-weight: 800; letter-spacing: .02em; text-align: center;
            box-shadow: 0 16px 40px rgba(30,166,114,.3); z-index: 2; padding: 6px;
          }
          .aud-hub-node {
            position: absolute; transform: translate(-50%,-50%);
            width: 30%; display: flex; flex-direction: column; align-items: center; gap: 6px; z-index: 2;
          }
          .aud-hub-node-ico {
            width: 38px; height: 38px; border-radius: 10px; background: #fff; border: 1px solid var(--border);
            color: var(--g); display: flex; align-items: center; justify-content: center;
            box-shadow: 0 6px 16px rgba(15,22,35,.06);
          }
          .aud-hub-node span { font-size: 10.5px; font-weight: 700; color: var(--ink3); }

          .aud-chart-viz { background: var(--soft); border-radius: 16px; padding: 32px 24px 20px; }
          .aud-chart-bars { display: flex; align-items: flex-end; gap: 10px; height: 140px; margin-bottom: 12px; }
          .aud-chart-bar { flex: 1; background: linear-gradient(180deg, #1ea672, #17845b); border-radius: 6px 6px 0 0; }
          .aud-chart-labels { display: flex; gap: 10px; }
          .aud-chart-labels span { flex: 1; text-align: center; font-size: 10.5px; color: var(--ink4); font-weight: 600; }
          .aud-chart-tag {
            display: inline-flex; align-items: center; gap: 6px; margin-top: 14px;
            background: var(--gl); color: var(--gd); font-size: 12px; font-weight: 700;
            padding: 5px 12px; border-radius: 20px;
          }

          .aud-included { background: var(--soft); padding: 72px 0; }
          .aud-included-grid { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 18px 40px; max-width: 880px; margin: 0 auto; }
          .aud-included-item { display: flex; align-items: flex-start; gap: 12px; font-size: 15px; color: var(--ink2); font-weight: 600; }
          .aud-included-item svg { color: var(--g); flex-shrink: 0; margin-top: 2px; }
          @media(max-width:640px){ .aud-included-grid { grid-template-columns: 1fr; } }

          .aud-steps { padding: 72px 0 88px; }
          .aud-steps-grid { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 32px; }
          .aud-step { min-width: 0; }
          .aud-step-num {
            width: 44px; height: 44px; border-radius: 50%;
            background: var(--gl); color: var(--gd); font-weight: 800; font-size: 15px;
            display: flex; align-items: center; justify-content: center; margin-bottom: 18px;
          }
          .aud-step h3 { font-size: 17px; color: var(--ink); margin-bottom: 8px; }
          .aud-step p { font-size: 14px; color: var(--ink3); line-height: 1.7; }
          @media(max-width:900px){ .aud-steps-grid { grid-template-columns: 1fr; } }

          .aud-bottom { text-align: center; padding: 64px 0 96px; }
          .aud-bottom p { color: var(--ink3); font-size: 16px; margin-bottom: 24px; }
        `}</style>

        <section className="aud-hero">
          <div className="wrap aud-hero-grid">
            <div className="aud-hero-left">
              <div className="section-tag">Klaviyo Account Audit</div>
              <h1 style={{ fontSize: 'clamp(32px,3.8vw,46px)' }}>Know exactly what&apos;s working,<br /><em style={{ color: 'var(--g)', fontStyle: 'normal' }}>and what&apos;s costing you revenue.</em></h1>
              <p className="section-sub">A comprehensive review of your entire email program, with a prioritized action plan you can hand straight to your team.</p>
              <div className="aud-btns">
                <Link href="/#contact" className="btn-primary">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                  Book a Free Call
                </Link>
                <Link href="/#cases" className="btn-ghost">See Case Studies →</Link>
              </div>
              <div className="aud-proof">
                <span style={{ color: '#f5a623', fontSize: '15px', letterSpacing: '1px' }}>⭐⭐⭐⭐⭐</span>
                <span>5.0 · 752 reviews on Upwork</span>
              </div>
            </div>

            <div className="aud-hero-card">
              <div className="aud-hero-card-title">What you get</div>
              <ul>
                <li><CheckCircle2 size={21} strokeWidth={2} /> Full deliverability & list health diagnostic</li>
                <li><CheckCircle2 size={21} strokeWidth={2} /> Every flow and automation reviewed line by line</li>
                <li><CheckCircle2 size={21} strokeWidth={2} /> Segmentation & targeting evaluated for waste</li>
                <li><CheckCircle2 size={21} strokeWidth={2} /> A prioritized action plan ranked by revenue impact</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="aud-feature">
          <div className="wrap aud-feature-grid">
            <div>
              <div className="aud-feature-tag">Deliverability & List Health</div>
              <h2>Make sure your emails actually reach the inbox.</h2>
              <p className="aud-feature-sub">We check sender reputation, authentication, and list hygiene to make sure your program isn&apos;t leaking revenue to spam folders.</p>
              <ul>
                <li><MailCheck size={17} /> Inbox placement & sender reputation reviewed</li>
                <li><Users size={17} /> List hygiene: engagement, bounces & spam traps</li>
                <li><ShieldCheck size={17} /> Authentication (SPF, DKIM, DMARC) verified</li>
              </ul>
            </div>
            <div className="aud-foundation-viz">
              {foundationItems.map((item) => (
                <div key={item.label} className="aud-foundation-card">
                  <div className="aud-foundation-ico"><item.icon size={20} /></div>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="aud-feature aud-feature-alt">
          <div className="wrap aud-feature-grid">
            <div className="aud-cost-viz" style={{ order: 1 }}>
              <div className="aud-cost-card">
                <span>Audit Score</span>
                <div className="aud-cost-num">54</div>
                <div className="aud-cost-sub">out of 100</div>
              </div>
              <ArrowRight className="aud-cost-arrow" size={22} />
              <div className="aud-cost-card after">
                <span>Action Plan</span>
                <div className="aud-cost-num">12</div>
                <div className="aud-cost-sub">ranked fixes</div>
              </div>
            </div>
            <div style={{ order: 2 }}>
              <div className="aud-feature-tag">Flow & Automation Review</div>
              <h2>Every flow, checked for gaps and missed revenue.</h2>
              <p className="aud-feature-sub">We audit each active flow against your business model to find broken logic, missed triggers, and underperforming sends.</p>
              <ul>
                <li><Workflow size={17} /> Every active flow audited for gaps</li>
                <li><SearchCheck size={17} /> Broken logic & missed triggers identified</li>
                <li><TrendingUp size={17} /> Revenue-per-flow benchmarked against industry</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="aud-feature">
          <div className="wrap aud-feature-grid">
            <div>
              <div className="aud-feature-tag">Segmentation & Targeting</div>
              <h2>Stop messaging every subscriber the same way.</h2>
              <p className="aud-feature-sub">We review how your lists and segments are built to catch over-messaging, fatigue risk, and wasted sends.</p>
              <ul>
                <li><Target size={17} /> Segment logic audited for accuracy</li>
                <li><Percent size={17} /> Over-messaging & fatigue risk flagged</li>
                <li><ListChecks size={17} /> Audience overlap and waste identified</li>
              </ul>
            </div>
            <div className="aud-hub-viz">
              <svg className="aud-hub-lines" viewBox="0 0 100 100" preserveAspectRatio="none">
                {segmentHubNodes.map((n) => (
                  <line key={n.label} x1="50" y1="50" x2={n.x} y2={n.y} stroke="var(--border)" strokeWidth="1" />
                ))}
              </svg>
              <div className="aud-hub-center">Segments</div>
              {segmentHubNodes.map((n) => (
                <div key={n.label} className="aud-hub-node" style={{ left: `${n.x}%`, top: `${n.y}%` }}>
                  <div className="aud-hub-node-ico"><n.icon size={18} /></div>
                  <span>{n.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="aud-feature aud-feature-alt">
          <div className="wrap aud-feature-grid">
            <div className="aud-chart-viz" style={{ order: 1 }}>
              <div className="aud-chart-bars">
                {actionBars.map((b) => (
                  <div key={b.label} className="aud-chart-bar" style={{ height: `${b.h}%` }} />
                ))}
              </div>
              <div className="aud-chart-labels">
                {actionBars.map((b) => <span key={b.label}>{b.label}</span>)}
              </div>
              <span className="aud-chart-tag"><ClipboardList size={13} /> Issues resolved on schedule</span>
            </div>
            <div style={{ order: 2 }}>
              <div className="aud-feature-tag">Prioritized Action Plan</div>
              <h2>A clear roadmap, not just a list of problems.</h2>
              <p className="aud-feature-sub">Every finding is ranked by effort versus impact, so your team knows exactly what to fix first.</p>
              <ul>
                <li><ClipboardList size={17} /> Every finding ranked by effort vs impact</li>
                <li><TrendingUp size={17} /> Clear roadmap for the next 90 days</li>
                <li><CheckCircle2 size={17} /> Optional hands-on implementation support</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="aud-included">
          <div className="wrap">
            <div className="sh-row" style={{ textAlign: 'center', marginBottom: '40px' }}>
              <h2>What&apos;s <em style={{ color: 'var(--g)', fontStyle: 'normal' }}>included.</em></h2>
              <p className="section-sub" style={{ margin: '0 auto' }}>A full diagnostic of your account, delivered as a plan you can act on.</p>
            </div>
            <div className="aud-included-grid">
              {included.map((item) => (
                <div key={item} className="aud-included-item">
                  <CheckCircle2 size={19} strokeWidth={2} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="aud-steps">
          <div className="wrap">
            <div className="sh-row" style={{ textAlign: 'center', marginBottom: '48px' }}>
              <h2>How it <em style={{ color: 'var(--g)', fontStyle: 'normal' }}>works.</em></h2>
              <p className="section-sub" style={{ margin: '0 auto' }}>Three steps, start to finish.</p>
            </div>
            <div className="aud-steps-grid">
              {steps.map((s) => (
                <div key={s.n} className="aud-step">
                  <div className="aud-step-num">{s.n}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="aud-bottom">
          <p>Ready to see exactly what your email program needs?</p>
          <Link href="/#contact" className="btn-primary">Book a Free Call →</Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
