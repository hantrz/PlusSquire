import Link from 'next/link'
import Navbar from '../../components/Navbar'
import { Footer } from '../../components/Sections'
import {
  CheckCircle2, Gauge, Image as ImageIcon, Code2, Wrench,
  TrendingUp, Search, ShieldCheck, MonitorSmartphone, Zap, FileText,
} from 'lucide-react'

const monitoringNodes = [
  { icon: Gauge,            label: 'Vitals',  x: 50, y: 8 },
  { icon: Wrench,           label: 'Apps',    x: 89, y: 35 },
  { icon: ImageIcon,        label: 'Images',  x: 74, y: 88 },
  { icon: ShieldCheck,      label: 'Uptime',  x: 26, y: 88 },
  { icon: FileText,         label: 'Reports', x: 11, y: 35 },
]

const cleanupGrid = [
  { icon: Wrench, label: 'Apps Audited' },
  { icon: Code2,  label: 'Scripts Deferred' },
  { icon: Zap,    label: 'Code Minified' },
  { icon: FileText, label: 'Fonts Optimized' },
]

const included = [
  'Full Core Web Vitals & PageSpeed audit',
  'Image compression & lazy-loading setup',
  'App & script performance review',
  'Theme code cleanup',
  'Font & asset optimization',
  'Before & after performance report',
  'Mobile performance prioritized',
  '30 days of post-optimization monitoring',
]

const steps = [
  { n: '01', title: 'Audit', desc: 'We run a full technical audit of your theme, apps, and assets to find exactly what’s slowing your store down.' },
  { n: '02', title: 'Optimize', desc: 'Images, code, and apps are optimized or removed, with real testing after every change, not just guesswork.' },
  { n: '03', title: 'Report & Monitor', desc: 'A before/after performance report is delivered, plus ongoing checks to keep your store fast as it grows.' },
]

export default function ShopifySpeedOptimizationPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '68px' }}>
        <style>{`
          .sso-hero {
            padding: 64px 0 76px;
            background:
              radial-gradient(ellipse at top left, rgba(30, 166, 114, 0.14) 0%, transparent 60%),
              radial-gradient(ellipse at bottom right, rgba(30, 166, 114, 0.14) 0%, transparent 60%),
              #ffffff;
            overflow: hidden; position: relative;
          }
          .sso-hero-grid { display: grid; grid-template-columns: minmax(0,1fr) minmax(0,1fr); gap: 48px; align-items: center; }
          .sso-hero-left .section-tag::before { display: none; }
          .sso-hero-left h1 { margin-bottom: 18px; }
          .sso-hero-left .section-sub { margin-bottom: 32px; max-width: 480px; }
          .sso-btns { display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 28px; }
          .sso-proof { display: flex; align-items: center; gap: 6px; font-size: 13px; color: var(--ink3); }

          .sso-hero-card {
            background: #fff; border: 1px solid var(--border); border-radius: 20px;
            padding: 40px 38px; box-shadow: 0 28px 70px rgba(15,22,35,.09);
            max-width: 480px; width: 100%; margin: 0 auto;
          }
          .sso-hero-card-title { font-size: 14px; font-weight: 800; text-transform: uppercase; letter-spacing: .04em; color: var(--g); margin-bottom: 22px; }
          .sso-hero-card ul { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 20px; }
          .sso-hero-card li { display: flex; align-items: flex-start; gap: 12px; font-size: 15.5px; color: var(--ink2); line-height: 1.5; }
          .sso-hero-card li svg { color: var(--g); flex-shrink: 0; margin-top: 2px; }

          @media(max-width:1000px){
            .sso-hero-grid { grid-template-columns: 1fr; }
            .sso-hero-card { max-width: 520px; }
          }

          .sso-feature { padding: 72px 0; }
          .sso-feature-alt { background: var(--soft); }
          .sso-feature-alt .sso-chart-viz,
          .sso-feature-alt .sso-foundation-viz,
          .sso-feature-alt .sso-cost-viz .sso-cost-card { background: #fff; }
          .sso-feature-grid { display: grid; grid-template-columns: minmax(0,1fr) minmax(0,1fr); gap: 56px; align-items: center; }
          .sso-feature-tag { font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: .05em; color: var(--g); margin-bottom: 12px; }
          .sso-feature h2 { font-size: clamp(24px, 2.4vw, 30px); color: var(--ink); margin-bottom: 14px; }
          .sso-feature-sub { color: var(--ink3); font-size: 15.5px; line-height: 1.75; margin-bottom: 22px; max-width: 460px; }
          .sso-feature ul { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 14px; }
          .sso-feature li { display: flex; align-items: flex-start; gap: 10px; font-size: 14.5px; color: var(--ink2); line-height: 1.55; max-width: 440px; }
          .sso-feature li svg { color: var(--g); flex-shrink: 0; margin-top: 2px; }

          @media(max-width:900px){
            .sso-feature-grid { grid-template-columns: 1fr; }
          }

          /* Before/after PageSpeed score cards */
          .sso-cost-viz { display: flex; align-items: center; gap: 14px; }
          .sso-cost-card {
            flex: 1; background: #fff; border: 1px solid var(--border); border-radius: 14px;
            padding: 22px 18px; text-align: center;
          }
          .sso-cost-card.after { border-color: var(--gm); background: var(--gl); }
          .sso-cost-card span { display: block; font-size: 11.5px; font-weight: 700; color: var(--ink4); text-transform: uppercase; letter-spacing: .03em; margin-bottom: 10px; }
          .sso-cost-num { font-size: 26px; font-weight: 800; color: var(--ink); margin-bottom: 4px; }
          .sso-cost-card.after .sso-cost-num { color: var(--gd); }
          .sso-cost-sub { font-size: 12.5px; color: var(--ink4); }
          .sso-cost-arrow { color: var(--g); flex-shrink: 0; }

          /* Bar-chart diagram: load time dropping */
          .sso-chart-viz { background: var(--soft); border-radius: 16px; padding: 32px 24px 20px; }
          .sso-chart-bars { display: flex; align-items: flex-end; gap: 10px; height: 140px; margin-bottom: 12px; }
          .sso-chart-bar { flex: 1; background: linear-gradient(180deg, #1ea672, #17845b); border-radius: 6px 6px 0 0; }
          .sso-chart-labels { display: flex; gap: 10px; }
          .sso-chart-labels span { flex: 1; text-align: center; font-size: 10.5px; color: var(--ink4); font-weight: 600; }
          .sso-chart-tag {
            display: inline-flex; align-items: center; gap: 6px; margin-top: 14px;
            background: var(--gl); color: var(--gd); font-size: 12px; font-weight: 700;
            padding: 5px 12px; border-radius: 20px;
          }

          /* Cleanup checklist grid (2x2 icon cards) */
          .sso-foundation-viz {
            background: var(--soft); border-radius: 16px; padding: 24px;
            display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 14px;
          }
          .sso-foundation-card {
            background: #fff; border: 1px solid var(--border); border-radius: 12px;
            padding: 22px 14px; text-align: center;
          }
          .sso-foundation-ico {
            width: 40px; height: 40px; border-radius: 10px; background: var(--gl); color: var(--g);
            display: flex; align-items: center; justify-content: center; margin: 0 auto 10px;
          }
          .sso-foundation-card span { font-size: 12.5px; font-weight: 700; color: var(--ink2); line-height: 1.3; }

          /* Hub-spoke: ongoing monitoring */
          .sso-hub-viz { position: relative; width: 100%; max-width: 340px; aspect-ratio: 1/1; margin: 0 auto; }
          .sso-hub-lines { position: absolute; inset: 0; width: 100%; height: 100%; }
          .sso-hub-center {
            position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%);
            width: 34%; aspect-ratio: 1/1; border-radius: 50%;
            background: linear-gradient(135deg, #1ea672, #17845b); color: #fff;
            display: flex; align-items: center; justify-content: center;
            font-size: 12px; font-weight: 800; letter-spacing: .02em; text-align: center;
            box-shadow: 0 16px 40px rgba(30,166,114,.3); z-index: 2; padding: 6px;
          }
          .sso-hub-node {
            position: absolute; transform: translate(-50%,-50%);
            width: 30%; display: flex; flex-direction: column; align-items: center; gap: 6px; z-index: 2;
          }
          .sso-hub-node-ico {
            width: 38px; height: 38px; border-radius: 10px; background: #fff; border: 1px solid var(--border);
            color: var(--g); display: flex; align-items: center; justify-content: center;
            box-shadow: 0 6px 16px rgba(15,22,35,.06);
          }
          .sso-hub-node span { font-size: 10.5px; font-weight: 700; color: var(--ink3); }

          .sso-included { background: var(--soft); padding: 72px 0; }
          .sso-included-grid { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 18px 40px; max-width: 880px; margin: 0 auto; }
          .sso-included-item { display: flex; align-items: flex-start; gap: 12px; font-size: 15px; color: var(--ink2); font-weight: 600; }
          .sso-included-item svg { color: var(--g); flex-shrink: 0; margin-top: 2px; }
          @media(max-width:640px){ .sso-included-grid { grid-template-columns: 1fr; } }

          .sso-steps { padding: 72px 0 88px; }
          .sso-steps-grid { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 32px; }
          .sso-step { min-width: 0; }
          .sso-step-num {
            width: 44px; height: 44px; border-radius: 50%;
            background: var(--gl); color: var(--gd); font-weight: 800; font-size: 15px;
            display: flex; align-items: center; justify-content: center; margin-bottom: 18px;
          }
          .sso-step h3 { font-size: 17px; color: var(--ink); margin-bottom: 8px; }
          .sso-step p { font-size: 14px; color: var(--ink3); line-height: 1.7; }
          @media(max-width:900px){ .sso-steps-grid { grid-template-columns: 1fr; } }

          .sso-bottom { text-align: center; padding: 64px 0 96px; }
          .sso-bottom p { color: var(--ink3); font-size: 16px; margin-bottom: 24px; }
        `}</style>

        <section className="sso-hero">
          <div className="wrap sso-hero-grid">
            <div className="sso-hero-left">
              <div className="section-tag">Shopify Speed Optimization</div>
              <h1 style={{ fontSize: 'clamp(32px,3.8vw,46px)' }}>Faster pages,<br /><em style={{ color: 'var(--g)', fontStyle: 'normal' }}>fewer abandoned carts.</em></h1>
              <p className="section-sub">We diagnose what&apos;s actually slowing your store down and fix it, for better Core Web Vitals, faster checkout, and more completed sales.</p>
              <div className="sso-btns">
                <Link href="/#contact" className="btn-primary">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                  Book a Free Call
                </Link>
                <Link href="/#cases" className="btn-ghost">See Case Studies →</Link>
              </div>
              <div className="sso-proof">
                <span style={{ color: '#f5a623', fontSize: '15px', letterSpacing: '1px' }}>⭐⭐⭐⭐⭐</span>
                <span>5.0 · 752 reviews on Upwork</span>
              </div>
            </div>

            <div className="sso-hero-card">
              <div className="sso-hero-card-title">What you get</div>
              <ul>
                <li><CheckCircle2 size={21} strokeWidth={2} /> Full Core Web Vitals & PageSpeed audit</li>
                <li><CheckCircle2 size={21} strokeWidth={2} /> Image & asset optimization across the store</li>
                <li><CheckCircle2 size={21} strokeWidth={2} /> App & script bloat identified & removed</li>
                <li><CheckCircle2 size={21} strokeWidth={2} /> Before/after performance report included</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="sso-feature">
          <div className="wrap sso-feature-grid">
            <div>
              <div className="sso-feature-tag">Core Web Vitals Audit</div>
              <h2>We find exactly what&apos;s slowing you down.</h2>
              <p className="sso-feature-sub">A full technical audit across your theme, apps, and assets, not just a generic speed test.</p>
              <ul>
                <li><Gauge size={17} /> LCP, CLS & INP measured on real pages</li>
                <li><Search size={17} /> App & script impact analyzed</li>
                <li><ShieldCheck size={17} /> Prioritized fix list, ranked by impact</li>
              </ul>
            </div>
            <div className="sso-cost-viz">
              <div className="sso-cost-card">
                <span>Before</span>
                <div className="sso-cost-num">47</div>
                <div className="sso-cost-sub">Mobile PageSpeed</div>
              </div>
              <div className="sso-cost-arrow">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </div>
              <div className="sso-cost-card after">
                <span>After</span>
                <div className="sso-cost-num">92</div>
                <div className="sso-cost-sub">Mobile PageSpeed</div>
              </div>
            </div>
          </div>
        </section>

        <section className="sso-feature sso-feature-alt">
          <div className="wrap sso-feature-grid">
            <div className="sso-chart-viz">
              <div className="sso-chart-bars">
                <div className="sso-chart-bar" style={{ height: '96%' }} />
                <div className="sso-chart-bar" style={{ height: '74%' }} />
                <div className="sso-chart-bar" style={{ height: '52%' }} />
                <div className="sso-chart-bar" style={{ height: '30%' }} />
              </div>
              <div className="sso-chart-labels">
                <span>Week 1</span>
                <span>Week 2</span>
                <span>Week 3</span>
                <span>Week 4</span>
              </div>
              <span className="sso-chart-tag"><TrendingUp size={13} /> Load time down 68%</span>
            </div>
            <div>
              <div className="sso-feature-tag">Image & Asset Optimization</div>
              <h2>Your images, without the load-time cost.</h2>
              <p className="sso-feature-sub">Product photography shouldn&apos;t be the reason your pages load slowly.</p>
              <ul>
                <li><ImageIcon size={17} /> Compressed, correctly-sized images</li>
                <li><Zap size={17} /> Modern formats & lazy-loading</li>
                <li><FileText size={17} /> Optimized fonts & theme assets</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="sso-feature">
          <div className="wrap sso-feature-grid">
            <div>
              <div className="sso-feature-tag">Code & App Bloat Cleanup</div>
              <h2>Every app and script, earning its place.</h2>
              <p className="sso-feature-sub">Unused apps and unoptimized code quietly slow every page down. We clean it up.</p>
              <ul>
                <li><Wrench size={17} /> Unused apps & scripts removed</li>
                <li><Code2 size={17} /> Theme code audited & trimmed</li>
                <li><Zap size={17} /> Third-party embeds loaded efficiently</li>
              </ul>
            </div>
            <div className="sso-foundation-viz">
              {cleanupGrid.map((item) => (
                <div key={item.label} className="sso-foundation-card">
                  <div className="sso-foundation-ico"><item.icon size={19} /></div>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="sso-feature sso-feature-alt">
          <div className="wrap sso-feature-grid">
            <div className="sso-hub-viz">
              <svg className="sso-hub-lines" viewBox="0 0 100 100" preserveAspectRatio="none">
                {monitoringNodes.map((n) => (
                  <line key={n.label} x1="50" y1="50" x2={n.x} y2={n.y} stroke="var(--gm)" strokeWidth="1" />
                ))}
              </svg>
              <div className="sso-hub-center">Monitoring</div>
              {monitoringNodes.map((n) => (
                <div key={n.label} className="sso-hub-node" style={{ left: `${n.x}%`, top: `${n.y}%` }}>
                  <div className="sso-hub-node-ico"><n.icon size={18} /></div>
                  <span>{n.label}</span>
                </div>
              ))}
            </div>
            <div>
              <div className="sso-feature-tag">Ongoing Monitoring</div>
              <h2>Speed that stays fast, not just fast on launch day.</h2>
              <p className="sso-feature-sub">New apps and content can quietly slow a store back down. We keep an eye on it.</p>
              <ul>
                <li><MonitorSmartphone size={17} /> Monthly performance checks</li>
                <li><ShieldCheck size={17} /> Alerts before issues affect customers</li>
                <li><Wrench size={17} /> Guidance for your team on safe app choices</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="sso-included">
          <div className="wrap">
            <div className="sh-row" style={{ textAlign: 'center', marginBottom: '40px' }}>
              <h2>What&apos;s <em style={{ color: 'var(--g)', fontStyle: 'normal' }}>included.</em></h2>
              <p className="section-sub" style={{ margin: '0 auto' }}>Everything needed to make your store measurably faster.</p>
            </div>
            <div className="sso-included-grid">
              {included.map((item) => (
                <div key={item} className="sso-included-item">
                  <CheckCircle2 size={19} strokeWidth={2} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="sso-steps">
          <div className="wrap">
            <div className="sh-row" style={{ textAlign: 'center', marginBottom: '48px' }}>
              <h2>How it <em style={{ color: 'var(--g)', fontStyle: 'normal' }}>works.</em></h2>
              <p className="section-sub" style={{ margin: '0 auto' }}>Three steps, start to finish.</p>
            </div>
            <div className="sso-steps-grid">
              {steps.map((s) => (
                <div key={s.n} className="sso-step">
                  <div className="sso-step-num">{s.n}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="sso-bottom">
          <p>Ready to stop losing customers to slow load times?</p>
          <Link href="/#contact" className="btn-primary">Book a Free Call →</Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
