import Link from 'next/link'
import Navbar from '../../components/Navbar'
import { Footer } from '../../components/Sections'
import {
  CheckCircle2, Puzzle, Layers, Wrench, Settings2, PackageCheck,
  Repeat, Filter, Code2, Star, Megaphone, Boxes, ShieldCheck,
} from 'lucide-react'

const integrationNodes = [
  { icon: Star,       label: 'Reviews',       x: 50, y: 8 },
  { icon: Repeat,     label: 'Subscriptions', x: 89, y: 35 },
  { icon: Boxes,      label: 'Inventory',     x: 74, y: 88 },
  { icon: Megaphone,  label: 'Marketing',     x: 26, y: 88 },
  { icon: PackageCheck, label: 'Loyalty',     x: 11, y: 35 },
]

const sectionsGrid = [
  { icon: Layers,    label: 'Custom Sections' },
  { icon: Puzzle,    label: 'Theme Blocks' },
  { icon: Settings2, label: 'Metafields' },
  { icon: Code2,     label: 'Theme Editor' },
]

const included = [
  'Custom theme sections & blocks',
  'Third-party app integration & configuration',
  'Custom API integrations where needed',
  'Subscription, wholesale or membership builds',
  'Advanced filtering & search functionality',
  'Ongoing development support',
  'Documentation for every custom build',
  'Testing across devices & browsers',
]

const steps = [
  { n: '01', title: 'Scope & Plan', desc: 'We map out exactly what you need built, how it should work, and where it fits into your existing theme and apps.' },
  { n: '02', title: 'Build & Integrate', desc: 'Custom code and integrations are built and tested directly against your live theme, not in isolation.' },
  { n: '03', title: 'Ship & Support', desc: 'The feature ships with documentation, plus ongoing support as your needs evolve.' },
]

export default function ShopifyCustomFeaturesPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '68px' }}>
        <style>{`
          .scf-hero {
            padding: 64px 0 76px;
            background:
              radial-gradient(ellipse at top left, rgba(30, 166, 114, 0.14) 0%, transparent 60%),
              radial-gradient(ellipse at bottom right, rgba(30, 166, 114, 0.14) 0%, transparent 60%),
              #ffffff;
            overflow: hidden; position: relative;
          }
          .scf-hero-grid { display: grid; grid-template-columns: minmax(0,1fr) minmax(0,1fr); gap: 48px; align-items: center; }
          .scf-hero-left .section-tag::before { display: none; }
          .scf-hero-left h1 { margin-bottom: 18px; }
          .scf-hero-left .section-sub { margin-bottom: 32px; max-width: 480px; }
          .scf-btns { display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 28px; }
          .scf-proof { display: flex; align-items: center; gap: 6px; font-size: 13px; color: var(--ink3); }

          .scf-hero-card {
            background: #fff; border: 1px solid var(--border); border-radius: 20px;
            padding: 40px 38px; box-shadow: 0 28px 70px rgba(15,22,35,.09);
            max-width: 480px; width: 100%; margin: 0 auto;
          }
          .scf-hero-card-title { font-size: 14px; font-weight: 800; text-transform: uppercase; letter-spacing: .04em; color: var(--g); margin-bottom: 22px; }
          .scf-hero-card ul { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 20px; }
          .scf-hero-card li { display: flex; align-items: flex-start; gap: 12px; font-size: 15.5px; color: var(--ink2); line-height: 1.5; }
          .scf-hero-card li svg { color: var(--g); flex-shrink: 0; margin-top: 2px; }

          @media(max-width:1000px){
            .scf-hero-grid { grid-template-columns: 1fr; }
            .scf-hero-card { max-width: 520px; }
          }

          .scf-feature { padding: 72px 0; }
          .scf-feature-alt { background: var(--soft); }
          .scf-feature-alt .scf-chart-viz,
          .scf-feature-alt .scf-foundation-viz,
          .scf-feature-alt .scf-cost-viz .scf-cost-card { background: #fff; }
          .scf-feature-grid { display: grid; grid-template-columns: minmax(0,1fr) minmax(0,1fr); gap: 56px; align-items: center; }
          .scf-feature-tag { font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: .05em; color: var(--g); margin-bottom: 12px; }
          .scf-feature h2 { font-size: clamp(24px, 2.4vw, 30px); color: var(--ink); margin-bottom: 14px; }
          .scf-feature-sub { color: var(--ink3); font-size: 15.5px; line-height: 1.75; margin-bottom: 22px; max-width: 460px; }
          .scf-feature ul { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 14px; }
          .scf-feature li { display: flex; align-items: flex-start; gap: 10px; font-size: 14.5px; color: var(--ink2); line-height: 1.55; max-width: 440px; }
          .scf-feature li svg { color: var(--g); flex-shrink: 0; margin-top: 2px; }

          @media(max-width:900px){
            .scf-feature-grid { grid-template-columns: 1fr; }
          }

          /* Custom sections grid (2x2 icon cards) */
          .scf-foundation-viz {
            background: var(--soft); border-radius: 16px; padding: 24px;
            display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 14px;
          }
          .scf-foundation-card {
            background: #fff; border: 1px solid var(--border); border-radius: 12px;
            padding: 22px 14px; text-align: center;
          }
          .scf-foundation-ico {
            width: 40px; height: 40px; border-radius: 10px; background: var(--gl); color: var(--g);
            display: flex; align-items: center; justify-content: center; margin: 0 auto 10px;
          }
          .scf-foundation-card span { font-size: 12.5px; font-weight: 700; color: var(--ink2); line-height: 1.3; }

          /* Hub-spoke: app integrations */
          .scf-hub-viz { position: relative; width: 100%; max-width: 340px; aspect-ratio: 1/1; margin: 0 auto; }
          .scf-hub-lines { position: absolute; inset: 0; width: 100%; height: 100%; }
          .scf-hub-center {
            position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%);
            width: 34%; aspect-ratio: 1/1; border-radius: 50%;
            background: linear-gradient(135deg, #1ea672, #17845b); color: #fff;
            display: flex; align-items: center; justify-content: center;
            font-size: 12.5px; font-weight: 800; letter-spacing: .02em; text-align: center;
            box-shadow: 0 16px 40px rgba(30,166,114,.3); z-index: 2; padding: 6px;
          }
          .scf-hub-node {
            position: absolute; transform: translate(-50%,-50%);
            width: 30%; display: flex; flex-direction: column; align-items: center; gap: 6px; z-index: 2;
          }
          .scf-hub-node-ico {
            width: 38px; height: 38px; border-radius: 10px; background: #fff; border: 1px solid var(--border);
            color: var(--g); display: flex; align-items: center; justify-content: center;
            box-shadow: 0 6px 16px rgba(15,22,35,.06);
          }
          .scf-hub-node span { font-size: 10.5px; font-weight: 700; color: var(--ink3); }

          /* Off-the-shelf vs custom build comparison */
          .scf-cost-viz { display: flex; align-items: center; gap: 14px; }
          .scf-cost-card {
            flex: 1; background: #fff; border: 1px solid var(--border); border-radius: 14px;
            padding: 22px 18px; text-align: center;
          }
          .scf-cost-card.after { border-color: var(--gm); background: var(--gl); }
          .scf-cost-card span { display: block; font-size: 11.5px; font-weight: 700; color: var(--ink4); text-transform: uppercase; letter-spacing: .03em; margin-bottom: 10px; }
          .scf-cost-num { font-size: 17px; font-weight: 800; color: var(--ink); margin-bottom: 4px; }
          .scf-cost-card.after .scf-cost-num { color: var(--gd); }
          .scf-cost-sub { font-size: 12.5px; color: var(--ink4); }
          .scf-cost-arrow { color: var(--g); flex-shrink: 0; }

          /* Bar-chart diagram: features shipped over time */
          .scf-chart-viz { background: var(--soft); border-radius: 16px; padding: 32px 24px 20px; }
          .scf-chart-bars { display: flex; align-items: flex-end; gap: 10px; height: 140px; margin-bottom: 12px; }
          .scf-chart-bar { flex: 1; background: linear-gradient(180deg, #1ea672, #17845b); border-radius: 6px 6px 0 0; }
          .scf-chart-labels { display: flex; gap: 10px; }
          .scf-chart-labels span { flex: 1; text-align: center; font-size: 10.5px; color: var(--ink4); font-weight: 600; }
          .scf-chart-tag {
            display: inline-flex; align-items: center; gap: 6px; margin-top: 14px;
            background: var(--gl); color: var(--gd); font-size: 12px; font-weight: 700;
            padding: 5px 12px; border-radius: 20px;
          }

          .scf-included { background: var(--soft); padding: 72px 0; }
          .scf-included-grid { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 18px 40px; max-width: 880px; margin: 0 auto; }
          .scf-included-item { display: flex; align-items: flex-start; gap: 12px; font-size: 15px; color: var(--ink2); font-weight: 600; }
          .scf-included-item svg { color: var(--g); flex-shrink: 0; margin-top: 2px; }
          @media(max-width:640px){ .scf-included-grid { grid-template-columns: 1fr; } }

          .scf-steps { padding: 72px 0 88px; }
          .scf-steps-grid { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 32px; }
          .scf-step { min-width: 0; }
          .scf-step-num {
            width: 44px; height: 44px; border-radius: 50%;
            background: var(--gl); color: var(--gd); font-weight: 800; font-size: 15px;
            display: flex; align-items: center; justify-content: center; margin-bottom: 18px;
          }
          .scf-step h3 { font-size: 17px; color: var(--ink); margin-bottom: 8px; }
          .scf-step p { font-size: 14px; color: var(--ink3); line-height: 1.7; }
          @media(max-width:900px){ .scf-steps-grid { grid-template-columns: 1fr; } }

          .scf-bottom { text-align: center; padding: 64px 0 96px; }
          .scf-bottom p { color: var(--ink3); font-size: 16px; margin-bottom: 24px; }
        `}</style>

        <section className="scf-hero">
          <div className="wrap scf-hero-grid">
            <div className="scf-hero-left">
              <div className="section-tag">Shopify App & Custom Features</div>
              <h1 style={{ fontSize: 'clamp(32px,3.8vw,46px)' }}>Custom functionality,<br /><em style={{ color: 'var(--g)', fontStyle: 'normal' }}>built exactly the way you need it.</em></h1>
              <p className="section-sub">Custom sections, app integrations, and store functionality your theme doesn&apos;t come with out of the box.</p>
              <div className="scf-btns">
                <Link href="/#contact" className="btn-primary">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                  Book a Free Call
                </Link>
                <Link href="/#cases" className="btn-ghost">See Case Studies →</Link>
              </div>
              <div className="scf-proof">
                <span style={{ color: '#f5a623', fontSize: '15px', letterSpacing: '1px' }}>⭐⭐⭐⭐⭐</span>
                <span>5.0 · 752 reviews on Upwork</span>
              </div>
            </div>

            <div className="scf-hero-card">
              <div className="scf-hero-card-title">What you get</div>
              <ul>
                <li><CheckCircle2 size={21} strokeWidth={2} /> Custom theme sections & blocks</li>
                <li><CheckCircle2 size={21} strokeWidth={2} /> Third-party app integrations wired in correctly</li>
                <li><CheckCircle2 size={21} strokeWidth={2} /> Bespoke functionality built to spec</li>
                <li><CheckCircle2 size={21} strokeWidth={2} /> Ongoing support as your store grows</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="scf-feature">
          <div className="wrap scf-feature-grid">
            <div>
              <div className="scf-feature-tag">Custom Sections & Theme Blocks</div>
              <h2>If you can picture it, we can build it into your theme.</h2>
              <p className="scf-feature-sub">Fully custom, merchant-editable sections that give you real control without touching code.</p>
              <ul>
                <li><Layers size={17} /> Fully custom, drag-and-drop sections</li>
                <li><Puzzle size={17} /> Built to match your existing theme</li>
                <li><Settings2 size={17} /> Editable by your team in the theme editor</li>
              </ul>
            </div>
            <div className="scf-foundation-viz">
              {sectionsGrid.map((item) => (
                <div key={item.label} className="scf-foundation-card">
                  <div className="scf-foundation-ico"><item.icon size={19} /></div>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="scf-feature scf-feature-alt">
          <div className="wrap scf-feature-grid">
            <div className="scf-hub-viz">
              <svg className="scf-hub-lines" viewBox="0 0 100 100" preserveAspectRatio="none">
                {integrationNodes.map((n) => (
                  <line key={n.label} x1="50" y1="50" x2={n.x} y2={n.y} stroke="var(--gm)" strokeWidth="1" />
                ))}
              </svg>
              <div className="scf-hub-center">Your Store</div>
              {integrationNodes.map((n) => (
                <div key={n.label} className="scf-hub-node" style={{ left: `${n.x}%`, top: `${n.y}%` }}>
                  <div className="scf-hub-node-ico"><n.icon size={18} /></div>
                  <span>{n.label}</span>
                </div>
              ))}
            </div>
            <div>
              <div className="scf-feature-tag">Third-Party App Integrations</div>
              <h2>Your apps, working together instead of against each other.</h2>
              <p className="scf-feature-sub">We connect the tools you already rely on so data flows correctly across your stack.</p>
              <ul>
                <li><Star size={17} /> Reviews, loyalty & subscription apps connected</li>
                <li><Code2 size={17} /> Custom API integrations where needed</li>
                <li><ShieldCheck size={17} /> No conflicting scripts or duplicate data</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="scf-feature">
          <div className="wrap scf-feature-grid">
            <div>
              <div className="scf-feature-tag">Bespoke Store Functionality</div>
              <h2>Functionality your theme was never built to handle.</h2>
              <p className="scf-feature-sub">Subscriptions, wholesale portals, advanced filtering: built custom when an off-the-shelf app can&apos;t do the job.</p>
              <ul>
                <li><Repeat size={17} /> Subscription & wholesale portal builds</li>
                <li><Filter size={17} /> Advanced filtering & search</li>
                <li><Wrench size={17} /> Custom checkout & cart logic (Shopify Plus)</li>
              </ul>
            </div>
            <div className="scf-cost-viz">
              <div className="scf-cost-card">
                <span>Off-The-Shelf App</span>
                <div className="scf-cost-num">Close, not quite</div>
                <div className="scf-cost-sub">Forces workarounds</div>
              </div>
              <div className="scf-cost-arrow">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </div>
              <div className="scf-cost-card after">
                <span>Custom Build</span>
                <div className="scf-cost-num">Built to spec</div>
                <div className="scf-cost-sub">Fits your process exactly</div>
              </div>
            </div>
          </div>
        </section>

        <section className="scf-feature scf-feature-alt">
          <div className="wrap scf-feature-grid">
            <div className="scf-chart-viz">
              <div className="scf-chart-bars">
                <div className="scf-chart-bar" style={{ height: '35%' }} />
                <div className="scf-chart-bar" style={{ height: '55%' }} />
                <div className="scf-chart-bar" style={{ height: '78%' }} />
                <div className="scf-chart-bar" style={{ height: '95%' }} />
              </div>
              <div className="scf-chart-labels">
                <span>Month 1</span>
                <span>Month 2</span>
                <span>Month 3</span>
                <span>Month 4</span>
              </div>
              <span className="scf-chart-tag"><Wrench size={13} /> Features shipped, on demand</span>
            </div>
            <div>
              <div className="scf-feature-tag">Ongoing Feature Support</div>
              <h2>As your store grows, your theme grows with it.</h2>
              <p className="scf-feature-sub">New features, new apps, new ideas: we&apos;re here for the ongoing build-out, not just a one-time project.</p>
              <ul>
                <li><Settings2 size={17} /> Monthly or as-needed development support</li>
                <li><ShieldCheck size={17} /> Priority fixes when something breaks</li>
                <li><Code2 size={17} /> A dev who already knows your codebase</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="scf-included">
          <div className="wrap">
            <div className="sh-row" style={{ textAlign: 'center', marginBottom: '40px' }}>
              <h2>What&apos;s <em style={{ color: 'var(--g)', fontStyle: 'normal' }}>included.</em></h2>
              <p className="section-sub" style={{ margin: '0 auto' }}>Everything needed to get custom functionality live and working correctly.</p>
            </div>
            <div className="scf-included-grid">
              {included.map((item) => (
                <div key={item} className="scf-included-item">
                  <CheckCircle2 size={19} strokeWidth={2} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="scf-steps">
          <div className="wrap">
            <div className="sh-row" style={{ textAlign: 'center', marginBottom: '48px' }}>
              <h2>How it <em style={{ color: 'var(--g)', fontStyle: 'normal' }}>works.</em></h2>
              <p className="section-sub" style={{ margin: '0 auto' }}>Three steps, start to finish.</p>
            </div>
            <div className="scf-steps-grid">
              {steps.map((s) => (
                <div key={s.n} className="scf-step">
                  <div className="scf-step-num">{s.n}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="scf-bottom">
          <p>Ready to build the functionality your theme is missing?</p>
          <Link href="/#contact" className="btn-primary">Book a Free Call →</Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
