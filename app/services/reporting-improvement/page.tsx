import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../../components/Navbar'
import { Footer } from '../../components/Sections'
import {
  CheckCircle2, LineChart, TrendingUp, ClipboardList, Percent,
  SearchCheck, ShieldCheck, MailCheck, ListChecks, RefreshCw,
  Workflow, DollarSign,
} from 'lucide-react'
import type { Metadata } from 'next'
import { RelatedServices, ServiceFAQ, ServiceGallery, ServiceJsonLd } from '../../components/service/ServiceBlocks'
import { contactHref } from '../../lib/site'
import { serviceMetadata } from '../../lib/seo'

export const metadata: Metadata = serviceMetadata({
  slug: 'reporting-improvement',
  title: "Email Reporting & Optimization",
  description: "A monthly email reporting and optimization retainer: plain-language reports, A/B testing, deliverability monitoring and continuous flow improvements based on real data.",
  image: '/images/services/reporting-improvement/hero-reporting-dashboard.jpg',
})

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
  { n: '01', title: 'Month 1: Baseline & Report', desc: 'Every month you get a clear report on revenue, engagement, and deliverability, translated out of raw metrics.' },
  { n: '02', title: 'Month 2: Test & Refine', desc: 'We run structured A/B tests on subject lines, send times, and content, and roll out what wins.' },
  { n: '03', title: 'Month 3 On: Optimize & Repeat', desc: 'Underperforming flows and campaigns get rebuilt, and the cycle repeats so results keep compounding.' },
]

const whatYouGet = [
  { icon: LineChart,   label: 'A monthly performance report in plain language' },
  { icon: Percent,     label: 'A structured A/B testing program across flows & campaigns' },
  { icon: ShieldCheck, label: 'Deliverability monitored so inbox placement stays healthy' },
  { icon: RefreshCw,   label: 'Continuous flow optimization based on real data' },
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

          .rpi-hero-visual {
            position: relative; border-radius: 20px; overflow: hidden;
            box-shadow: 0 28px 70px rgba(15,22,35,.09);
            max-width: 650px; width: 100%; margin: 0 auto; background: var(--soft);
          }
          .rpi-hero-visual img { width: 100%; height: auto; display: block; }

          @media(max-width:1000px){
            .rpi-hero-grid { grid-template-columns: 1fr; }
            .rpi-hero-visual { max-width: 600px; }
          }

          /* What You Get — highlighted through the tinted background, a
             centered tag, and gradient icon "medallions"; deliberately NOT
             a bordered card/box. Items sit in one open row divided by thin
             rules, not stacked inside a container. */
          .rpi-whatget {
            padding: 64px 0 72px; position: relative; overflow: hidden;
            background:
              radial-gradient(ellipse at top right, rgba(30,166,114,0.14) 0%, transparent 55%),
              radial-gradient(ellipse at bottom left, rgba(30,166,114,0.10) 0%, transparent 55%),
              var(--soft);
            border-top: 1px solid var(--border); border-bottom: 1px solid var(--border);
          }
          .rpi-whatget-head { text-align: center; max-width: 720px; margin: 0 auto 48px; }
          .rpi-whatget-tag {
            display: inline-flex; align-items: center; gap: 8px; background: var(--gl); color: var(--gd);
            font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: .06em;
            padding: 6px 14px; border-radius: 100px; margin-bottom: 16px;
          }
          .rpi-whatget-head h2 { font-size: clamp(20px, 2.4vw, 32px); margin-bottom: 0; white-space: nowrap; }
          @media(max-width:560px){
            .rpi-whatget-head h2 { white-space: normal; font-size: clamp(20px, 5.5vw, 24px); }
          }

          .rpi-whatget-row {
            display: flex; align-items: flex-start; justify-content: center;
            max-width: 1000px; margin: 0 auto; flex-wrap: wrap;
          }
          .rpi-whatget-item {
            flex: 1 1 210px; display: flex; flex-direction: column; align-items: center;
            text-align: center; gap: 16px; padding: 0 26px; position: relative;
          }
          .rpi-whatget-item:not(:last-child)::after {
            content: ''; position: absolute; right: 0; top: 4px; bottom: 4px; width: 1px; background: var(--gm);
          }
          .rpi-whatget-ico {
            width: 54px; height: 54px; border-radius: 50%;
            background: linear-gradient(135deg, #1ea672, #17845b); color: #fff;
            display: flex; align-items: center; justify-content: center;
            box-shadow: 0 10px 24px rgba(30,166,114,.32);
          }
          .rpi-whatget-item p { font-size: 14.5px; font-weight: 600; color: var(--ink2); line-height: 1.5; max-width: 200px; }

          @media(max-width:820px){
            .rpi-whatget-row { flex-direction: column; align-items: center; gap: 32px; }
            .rpi-whatget-item { padding: 0; }
            .rpi-whatget-item:not(:last-child)::after { display: none; }
          }

          .rpi-feature { padding: 72px 0; }
          .rpi-feature-alt { background: var(--soft); }
          .rpi-feature-alt .rpi-diagram-img { background: #fff; }
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

          .rpi-diagram-img {
            border-radius: 16px; overflow: hidden; background: var(--soft);
            box-shadow: 0 20px 50px rgba(15,22,35,.08);
          }
          .rpi-diagram-img img { width: 100%; height: auto; display: block; }

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
            <div className="rpi-hero-left" data-reveal="up">
              <div className="section-tag">Reporting & Improvement</div>
              <h1 style={{ fontSize: 'clamp(32px,3.8vw,46px)' }}>Clear reporting,<br /><em style={{ color: 'var(--g)', fontStyle: 'normal' }}>and a plan to keep improving it.</em></h1>
              <p className="section-sub">A monthly retainer pairing clear performance reporting with continuous testing and optimization, so results keep improving month over month.</p>
              <div className="rpi-btns">
                <Link href={contactHref('reporting-improvement')} className="btn-primary">
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

            <div className="rpi-hero-visual" data-reveal="right" style={{ transitionDelay: '150ms' }}>
              <Image
                src="/images/services/reporting-improvement/hero-reporting-dashboard.jpg"
                alt="Executive monthly performance summary with revenue chart, +34% attributed revenue, 98.2% deliverability KPI, and an action plan roadmap"
                width={1400}
                height={764}
                priority
              />
            </div>
          </div>
        </section>

        <section className="rpi-whatget">
          <div className="wrap">
            <div className="rpi-whatget-head" data-reveal="up">
              <div className="rpi-whatget-tag">What You Get</div>
              <h2>Everything included, <em style={{ color: 'var(--g)', fontStyle: 'normal' }}>nothing left to guess.</em></h2>
            </div>
            <div className="rpi-whatget-row">
              {whatYouGet.map((item, i) => (
                <div key={item.label} className="rpi-whatget-item" data-reveal="up" style={{ transitionDelay: `${i * 90}ms` }}>
                  <div className="rpi-whatget-ico"><item.icon size={22} strokeWidth={1.75} /></div>
                  <p>{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="rpi-feature">
          <div className="wrap rpi-feature-grid">
            <div data-reveal="up">
              <div className="rpi-feature-tag">Monthly Performance Reporting</div>
              <h2>Know exactly how your program is performing.</h2>
              <p className="rpi-feature-sub">Every month you get a clear report on revenue, engagement, and list growth, translated out of raw metrics into plain language.</p>
              <ul>
                <li><LineChart size={17} /> A clear monthly report on revenue & engagement</li>
                <li><TrendingUp size={17} /> Trends tracked across flows, campaigns & lists</li>
                <li><ClipboardList size={17} /> Key metrics translated into plain language</li>
                <li><DollarSign size={17} /> Metrics that matter: revenue per recipient, flow vs campaign revenue, list growth vs decay, repeat purchase rate</li>
              </ul>
            </div>
            <div className="rpi-diagram-img" data-reveal="zoom" style={{ transitionDelay: '120ms' }}>
              <Image
                src="/images/services/reporting-improvement/monthly-performance-reporting.jpg"
                alt="Monthly performance report bar chart of rising revenue, with flow versus campaign split, list health, and revenue per recipient metrics"
                width={1400}
                height={764}
              />
            </div>
          </div>
        </section>

        <section className="rpi-feature rpi-feature-alt">
          <div className="wrap rpi-feature-grid">
            <div className="rpi-diagram-img" data-reveal="zoom" style={{ order: 1 }}>
              <Image
                src="/images/services/reporting-improvement/ab-testing-program.jpg"
                alt="A/B test comparing a control variant at 28% open rate with a winning variant at 41% open rate, a 46% lift"
                width={1400}
                height={764}
              />
            </div>
            <div data-reveal="up" style={{ order: 2, transitionDelay: '120ms' }}>
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
            <div data-reveal="up">
              <div className="rpi-feature-tag">Deliverability Monitoring</div>
              <h2>Protect the inbox placement your revenue depends on.</h2>
              <p className="rpi-feature-sub">We keep a constant eye on sender reputation and list hygiene, so deliverability issues get caught before they hurt revenue.</p>
              <ul>
                <li><ShieldCheck size={17} /> Inbox placement monitored across providers</li>
                <li><MailCheck size={17} /> Sender reputation tracked and protected</li>
                <li><ListChecks size={17} /> List hygiene maintained on an ongoing basis</li>
              </ul>
            </div>
            <div className="rpi-diagram-img" data-reveal="zoom" style={{ transitionDelay: '120ms' }}>
              <Image
                src="/images/services/reporting-improvement/deliverability-monitoring.jpg"
                alt="Deliverability monitoring dashboard showing spam rate, bounce rate, inbox placement, domain health, and SPF and DKIM passing"
                width={1400}
                height={764}
              />
            </div>
          </div>
        </section>

        <section className="rpi-feature rpi-feature-alt">
          <div className="wrap rpi-feature-grid">
            <div className="rpi-diagram-img" data-reveal="zoom" style={{ order: 1 }}>
              <Image
                src="/images/services/reporting-improvement/continuous-flow-optimization.jpg"
                alt="Continuous optimization loop: audit and review, hypothesis, test and execute, then scale the winner"
                width={1400}
                height={764}
              />
            </div>
            <div data-reveal="up" style={{ order: 2, transitionDelay: '120ms' }}>
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

        <ServiceGallery tag="Sample Report" title="What your monthly report looks like" sub="A real report with client details removed." items={[{"label": "Sample monthly report (anonymized)", "alt": "Sample monthly email performance report"}, {"label": "Reporting dashboard (Klaviyo or Looker Studio)", "alt": "Email reporting dashboard"}]} />

        <section className="rpi-included">
          <div className="wrap">
            <div className="sh-row" style={{ textAlign: 'center', marginBottom: '40px' }} data-reveal="up">
              <h2>What&apos;s <em style={{ color: 'var(--g)', fontStyle: 'normal' }}>included.</em></h2>
              <p className="section-sub" style={{ margin: '0 auto' }}>Ongoing reporting and optimization to keep results moving forward.</p>
            </div>
            <div className="rpi-included-grid">
              {included.map((item, i) => (
                <div key={item} className="rpi-included-item" data-reveal="up" style={{ transitionDelay: `${i * 60}ms` }}>
                  <CheckCircle2 size={19} strokeWidth={2} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="rpi-steps">
          <div className="wrap">
            <div className="sh-row" style={{ textAlign: 'center', marginBottom: '48px' }} data-reveal="up">
              <h2>How it <em style={{ color: 'var(--g)', fontStyle: 'normal' }}>works.</em></h2>
              <p className="section-sub" style={{ margin: '0 auto' }}>Three steps, repeated every month.</p>
            </div>
            <div className="rpi-steps-grid">
              {steps.map((s, i) => (
                <div key={s.n} className="rpi-step" data-reveal="up" style={{ transitionDelay: `${i * 100}ms` }}>
                  <div className="rpi-step-num">{s.n}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ServiceFAQ items={[{"q": "Is this a one-time report or ongoing?", "a": "Ongoing. It's a monthly retainer: a report and walkthrough call every month, a quarterly strategy review, and continuous testing in between."}, {"q": "Which tools do you report from?", "a": "Klaviyo or your email platform, plus Shopify and Google Analytics 4 where needed, so email results are tied to real store revenue."}, {"q": "Who reads the report with us?", "a": "Your account manager walks you through it on a monthly call and turns findings into the next month's actions."}, {"q": "Who makes the changes the report recommends?", "a": "We do. Tests, flow fixes and improvements are part of the retainer, not extra work for your team."}, {"q": "Can we see results from other clients?", "a": "Yes, on request. We protect every client's privacy, so results and screenshots are only shared with the client's permission, with names and company details hidden. Ask on a call and we'll walk you through relevant examples."}]} />

        <RelatedServices slugs={["account-audit", "email-campaigns", "flow-setup"]} />

        <ServiceJsonLd slug="reporting-improvement" name="Email Reporting & Improvement" description="A monthly email reporting and optimization retainer: plain-language reports, A/B testing, deliverability monitoring and continuous flow improvements based on real data." />

        <div className="rpi-bottom" data-reveal="up">
          <p>Ready for reporting and optimization that never stops?</p>
          <Link href={contactHref('reporting-improvement')} className="btn-primary">Book a Free Call →</Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
