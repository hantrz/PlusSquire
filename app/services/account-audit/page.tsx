import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../../components/Navbar'
import { Footer } from '../../components/Sections'
import {
  CheckCircle2, ShieldCheck, Workflow, Users, MailCheck,
  SearchCheck, TrendingUp, Target, ListChecks, Percent, ClipboardList,
} from 'lucide-react'

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

const whatYouGet = [
  { icon: ShieldCheck,   label: 'Full deliverability & list health diagnostic' },
  { icon: Workflow,      label: 'Every flow and automation reviewed line by line' },
  { icon: Target,        label: 'Segmentation & targeting evaluated for waste' },
  { icon: ClipboardList, label: 'A prioritized action plan ranked by revenue impact' },
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

          .aud-hero-visual {
            position: relative; border-radius: 20px; overflow: hidden;
            box-shadow: 0 28px 70px rgba(15,22,35,.09);
            max-width: 650px; width: 100%; margin: 0 auto; background: var(--soft);
          }
          .aud-hero-visual img { width: 100%; height: auto; display: block; }

          @media(max-width:1000px){
            .aud-hero-grid { grid-template-columns: 1fr; }
            .aud-hero-visual { max-width: 600px; }
          }

          /* What You Get — highlighted through the tinted background, a
             centered tag, and gradient icon "medallions"; deliberately NOT
             a bordered card/box. Items sit in one open row divided by thin
             rules, not stacked inside a container. */
          .aud-whatget {
            padding: 64px 0 72px; position: relative; overflow: hidden;
            background:
              radial-gradient(ellipse at top right, rgba(30,166,114,0.14) 0%, transparent 55%),
              radial-gradient(ellipse at bottom left, rgba(30,166,114,0.10) 0%, transparent 55%),
              var(--soft);
            border-top: 1px solid var(--border); border-bottom: 1px solid var(--border);
          }
          .aud-whatget-head { text-align: center; max-width: 720px; margin: 0 auto 48px; }
          .aud-whatget-tag {
            display: inline-flex; align-items: center; gap: 8px; background: var(--gl); color: var(--gd);
            font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: .06em;
            padding: 6px 14px; border-radius: 100px; margin-bottom: 16px;
          }
          .aud-whatget-head h2 { font-size: clamp(20px, 2.4vw, 32px); margin-bottom: 0; white-space: nowrap; }
          @media(max-width:560px){
            .aud-whatget-head h2 { white-space: normal; font-size: clamp(20px, 5.5vw, 24px); }
          }

          .aud-whatget-row {
            display: flex; align-items: flex-start; justify-content: center;
            max-width: 1000px; margin: 0 auto; flex-wrap: wrap;
          }
          .aud-whatget-item {
            flex: 1 1 210px; display: flex; flex-direction: column; align-items: center;
            text-align: center; gap: 16px; padding: 0 26px; position: relative;
          }
          .aud-whatget-item:not(:last-child)::after {
            content: ''; position: absolute; right: 0; top: 4px; bottom: 4px; width: 1px; background: var(--gm);
          }
          .aud-whatget-ico {
            width: 54px; height: 54px; border-radius: 50%;
            background: linear-gradient(135deg, #1ea672, #17845b); color: #fff;
            display: flex; align-items: center; justify-content: center;
            box-shadow: 0 10px 24px rgba(30,166,114,.32);
          }
          .aud-whatget-item p { font-size: 14.5px; font-weight: 600; color: var(--ink2); line-height: 1.5; max-width: 200px; }

          @media(max-width:820px){
            .aud-whatget-row { flex-direction: column; align-items: center; gap: 32px; }
            .aud-whatget-item { padding: 0; }
            .aud-whatget-item:not(:last-child)::after { display: none; }
          }

          .aud-feature { padding: 72px 0; }
          .aud-feature-alt { background: var(--soft); }
          .aud-feature-alt .aud-diagram-img { background: #fff; }
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

          .aud-diagram-img {
            border-radius: 16px; overflow: hidden; background: var(--soft);
            box-shadow: 0 20px 50px rgba(15,22,35,.08);
          }
          .aud-diagram-img img { width: 100%; height: auto; display: block; }

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
            <div className="aud-hero-left" data-reveal="up">
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

            <div className="aud-hero-visual" data-reveal="right" style={{ transitionDelay: '150ms' }}>
              <Image
                src="/images/services/account-audit/hero-account-audit.jpg"
                alt="Klaviyo account audit dashboard showing audit health score, deliverability, flow gap analysis, and unlocked revenue opportunity"
                width={1400}
                height={764}
                priority
              />
            </div>
          </div>
        </section>

        <section className="aud-whatget">
          <div className="wrap">
            <div className="aud-whatget-head" data-reveal="up">
              <div className="aud-whatget-tag">What You Get</div>
              <h2>Everything included, <em style={{ color: 'var(--g)', fontStyle: 'normal' }}>nothing left to guess.</em></h2>
            </div>
            <div className="aud-whatget-row">
              {whatYouGet.map((item, i) => (
                <div key={item.label} className="aud-whatget-item" data-reveal="up" style={{ transitionDelay: `${i * 90}ms` }}>
                  <div className="aud-whatget-ico"><item.icon size={22} strokeWidth={1.75} /></div>
                  <p>{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="aud-feature">
          <div className="wrap aud-feature-grid">
            <div data-reveal="up">
              <div className="aud-feature-tag">Deliverability & List Health</div>
              <h2>Make sure your emails actually reach the inbox.</h2>
              <p className="aud-feature-sub">We check sender reputation, authentication, and list hygiene to make sure your program isn&apos;t leaking revenue to spam folders.</p>
              <ul>
                <li><MailCheck size={17} /> Inbox placement & sender reputation reviewed</li>
                <li><Users size={17} /> List hygiene: engagement, bounces & spam traps</li>
                <li><ShieldCheck size={17} /> Authentication (SPF, DKIM, DMARC) verified</li>
              </ul>
            </div>
            <div className="aud-diagram-img" data-reveal="zoom" style={{ transitionDelay: '120ms' }}>
              <Image
                src="/images/services/account-audit/deliverability-list-health.jpg"
                alt="Email deliverability audit showing DMARC, SPF and DKIM verification, Google and Yahoo sender compliance, and inbox placement"
                width={1400}
                height={764}
              />
            </div>
          </div>
        </section>

        <section className="aud-feature aud-feature-alt">
          <div className="wrap aud-feature-grid">
            <div className="aud-diagram-img" data-reveal="zoom" style={{ order: 1 }}>
              <Image
                src="/images/services/account-audit/flow-automation-review.jpg"
                alt="Klaviyo flow review showing welcome series and abandoned cart flows verified, a browse abandonment gap fixed, and $8,200 recovered"
                width={1400}
                height={764}
              />
            </div>
            <div data-reveal="up" style={{ order: 2, transitionDelay: '120ms' }}>
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
            <div data-reveal="up">
              <div className="aud-feature-tag">Segmentation & Targeting</div>
              <h2>Stop messaging every subscriber the same way.</h2>
              <p className="aud-feature-sub">We review how your lists and segments are built to catch over-messaging, fatigue risk, and wasted sends.</p>
              <ul>
                <li><Target size={17} /> Segment logic audited for accuracy</li>
                <li><Percent size={17} /> Over-messaging & fatigue risk flagged</li>
                <li><ListChecks size={17} /> Audience overlap and waste identified</li>
              </ul>
            </div>
            <div className="aud-diagram-img" data-reveal="zoom" style={{ transitionDelay: '120ms' }}>
              <Image
                src="/images/services/account-audit/segmentation-targeting.jpg"
                alt="Segmentation and targeting audit showing VIP spenders, active clickers, at-risk inactive and window shopper segments"
                width={1400}
                height={764}
              />
            </div>
          </div>
        </section>

        <section className="aud-feature aud-feature-alt">
          <div className="wrap aud-feature-grid">
            <div className="aud-diagram-img" data-reveal="zoom" style={{ order: 1 }}>
              <Image
                src="/images/services/account-audit/prioritized-action-plan.jpg"
                alt="Prioritized three-phase action plan: Phase 1 quick wins, Phase 2 flow rebuild, and Phase 3 revenue scale"
                width={1400}
                height={764}
              />
            </div>
            <div data-reveal="up" style={{ order: 2, transitionDelay: '120ms' }}>
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
            <div className="sh-row" style={{ textAlign: 'center', marginBottom: '40px' }} data-reveal="up">
              <h2>What&apos;s <em style={{ color: 'var(--g)', fontStyle: 'normal' }}>included.</em></h2>
              <p className="section-sub" style={{ margin: '0 auto' }}>A full diagnostic of your account, delivered as a plan you can act on.</p>
            </div>
            <div className="aud-included-grid">
              {included.map((item, i) => (
                <div key={item} className="aud-included-item" data-reveal="up" style={{ transitionDelay: `${i * 60}ms` }}>
                  <CheckCircle2 size={19} strokeWidth={2} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="aud-steps">
          <div className="wrap">
            <div className="sh-row" style={{ textAlign: 'center', marginBottom: '48px' }} data-reveal="up">
              <h2>How it <em style={{ color: 'var(--g)', fontStyle: 'normal' }}>works.</em></h2>
              <p className="section-sub" style={{ margin: '0 auto' }}>Three steps, start to finish.</p>
            </div>
            <div className="aud-steps-grid">
              {steps.map((s, i) => (
                <div key={s.n} className="aud-step" data-reveal="up" style={{ transitionDelay: `${i * 100}ms` }}>
                  <div className="aud-step-num">{s.n}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="aud-bottom" data-reveal="up">
          <p>Ready to see exactly what your email program needs?</p>
          <Link href="/#contact" className="btn-primary">Book a Free Call →</Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
