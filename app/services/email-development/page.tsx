import Link from 'next/link'
import Navbar from '../../components/Navbar'
import { Footer } from '../../components/Sections'
import {
  CheckCircle2, Mail, Code2, Moon, Eye, Zap, ShieldCheck,
  ShoppingBag, Clock, MapPin, Star, Gauge,
} from 'lucide-react'

const edvFoundationItems = [
  { icon: Mail, label: 'Gmail' },
  { icon: Mail, label: 'Outlook' },
  { icon: Mail, label: 'Apple Mail' },
  { icon: Mail, label: 'Yahoo Mail' },
]

const edvHubNodes = [
  { icon: ShoppingBag, label: 'Product Recs',  x: 50, y: 8 },
  { icon: Clock,       label: 'Countdown',     x: 89, y: 35 },
  { icon: MapPin,      label: 'Location',      x: 74, y: 88 },
  { icon: Star,        label: 'Loyalty Tier',  x: 26, y: 88 },
  { icon: Zap,         label: 'Behavior',      x: 11, y: 35 },
]

const edvIncluded = [
  'Hand-coded, table-based HTML built for maximum client support',
  'Outlook-specific fixes: conditional comments, VML & MSO code',
  'Gmail clipping & rendering safeguards',
  'Dark-mode color handling so your brand never inverts wrong',
  'Accessible markup: alt text, semantic structure, readable type',
  'Dynamic, personalized content blocks (recs, countdowns, location)',
  'Rigorous multi-client QA before every single send',
  'Fast-loading, optimized image & code delivery',
]

const edvSteps = [
  { n: '01', title: 'Code & Build', desc: 'We hand-code HTML/CSS from your approved designs, table-based and built for maximum email client compatibility.' },
  { n: '02', title: 'Test Across Clients', desc: 'Every template is checked across major clients and devices before it ever reaches a real inbox.' },
  { n: '03', title: 'QA & Ship', desc: 'A final render, link and tracking check, then handed off ready to send or scheduled on your platform.' },
]

export default function EmailDevelopmentPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '68px' }}>
        <style>{`
          .edv-hero {
            padding: 64px 0 76px;
            background:
              radial-gradient(ellipse at top left, rgba(30, 166, 114, 0.14) 0%, transparent 60%),
              radial-gradient(ellipse at bottom right, rgba(30, 166, 114, 0.14) 0%, transparent 60%),
              #ffffff;
            overflow: hidden; position: relative;
          }
          .edv-hero-grid { display: grid; grid-template-columns: minmax(0,1fr) minmax(0,1fr); gap: 48px; align-items: center; }
          .edv-hero-left .section-tag::before { display: none; }
          .edv-hero-left h1 { margin-bottom: 18px; }
          .edv-hero-left .section-sub { margin-bottom: 32px; max-width: 480px; }
          .edv-btns { display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 28px; }
          .edv-proof { display: flex; align-items: center; gap: 6px; font-size: 13px; color: var(--ink3); }

          .edv-hero-card {
            background: #fff; border: 1px solid var(--border); border-radius: 20px;
            padding: 40px 38px; box-shadow: 0 28px 70px rgba(15,22,35,.09);
            max-width: 480px; width: 100%; margin: 0 auto;
          }
          .edv-hero-card-title { font-size: 14px; font-weight: 800; text-transform: uppercase; letter-spacing: .04em; color: var(--g); margin-bottom: 22px; }
          .edv-hero-card ul { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 20px; }
          .edv-hero-card li { display: flex; align-items: flex-start; gap: 12px; font-size: 15.5px; color: var(--ink2); line-height: 1.5; }
          .edv-hero-card li svg { color: var(--g); flex-shrink: 0; margin-top: 2px; }

          @media(max-width:1000px){
            .edv-hero-grid { grid-template-columns: 1fr; }
            .edv-hero-card { max-width: 520px; }
          }

          .edv-feature { padding: 72px 0; }
          .edv-feature-alt { background: var(--soft); }
          .edv-feature-alt .edv-migrate-viz,
          .edv-feature-alt .edv-cost-viz,
          .edv-feature-alt .edv-foundation-viz { background: #fff; }
          .edv-feature-grid { display: grid; grid-template-columns: minmax(0,1fr) minmax(0,1fr); gap: 56px; align-items: center; }
          .edv-feature-tag { font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: .05em; color: var(--g); margin-bottom: 12px; }
          .edv-feature h2 { font-size: clamp(24px, 2.4vw, 30px); color: var(--ink); margin-bottom: 14px; }
          .edv-feature-sub { color: var(--ink3); font-size: 15.5px; line-height: 1.75; margin-bottom: 22px; max-width: 460px; }
          .edv-feature ul { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 14px; }
          .edv-feature li { display: flex; align-items: flex-start; gap: 10px; font-size: 14.5px; color: var(--ink2); line-height: 1.55; max-width: 440px; }
          .edv-feature li svg { color: var(--g); flex-shrink: 0; margin-top: 2px; }

          @media(max-width:900px){
            .edv-feature-grid { grid-template-columns: 1fr; }
          }

          .edv-foundation-viz {
            background: var(--soft); border-radius: 16px; padding: 24px;
            display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 14px;
          }
          .edv-foundation-card {
            background: #fff; border: 1px solid var(--border); border-radius: 12px;
            padding: 22px 14px; text-align: center;
          }
          .edv-foundation-ico {
            width: 40px; height: 40px; border-radius: 10px; background: var(--gl); color: var(--g);
            display: flex; align-items: center; justify-content: center; margin: 0 auto 10px;
          }
          .edv-foundation-card span { font-size: 12.5px; font-weight: 700; color: var(--ink2); line-height: 1.3; }

          .edv-migrate-viz {
            background: var(--soft); border-radius: 16px; padding: 32px 24px;
            display: flex; align-items: center; justify-content: center; gap: 14px;
          }
          .edv-migrate-box {
            flex: 1; background: #fff; border: 1px solid var(--border); border-radius: 12px;
            padding: 22px 16px; text-align: center;
          }
          .edv-migrate-box span { display: block; font-size: 12px; font-weight: 700; color: var(--ink4); text-transform: uppercase; letter-spacing: .03em; margin-bottom: 10px; }
          .edv-migrate-box strong { font-size: 15px; color: var(--ink); }
          .edv-migrate-arrow { color: var(--g); flex-shrink: 0; }

          .edv-hub-viz { position: relative; width: 100%; max-width: 340px; aspect-ratio: 1/1; margin: 0 auto; }
          .edv-hub-lines { position: absolute; inset: 0; width: 100%; height: 100%; }
          .edv-hub-center {
            position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%);
            width: 34%; aspect-ratio: 1/1; border-radius: 50%;
            background: linear-gradient(135deg, #1ea672, #17845b); color: #fff;
            display: flex; align-items: center; justify-content: center;
            font-size: 12.5px; font-weight: 800; letter-spacing: .02em; text-align: center;
            box-shadow: 0 16px 40px rgba(30,166,114,.3); z-index: 2; padding: 6px;
          }
          .edv-hub-node {
            position: absolute; transform: translate(-50%,-50%);
            width: 30%; display: flex; flex-direction: column; align-items: center; gap: 6px; z-index: 2;
          }
          .edv-hub-node-ico {
            width: 38px; height: 38px; border-radius: 10px; background: #fff; border: 1px solid var(--border);
            color: var(--g); display: flex; align-items: center; justify-content: center;
            box-shadow: 0 6px 16px rgba(15,22,35,.06);
          }
          .edv-hub-node span { font-size: 10.5px; font-weight: 700; color: var(--ink3); }

          .edv-cost-viz { display: flex; align-items: center; gap: 14px; }
          .edv-cost-card {
            flex: 1; background: #fff; border: 1px solid var(--border); border-radius: 14px;
            padding: 22px 18px; text-align: center;
          }
          .edv-cost-card.after { border-color: var(--gm); background: var(--gl); }
          .edv-cost-card span { display: block; font-size: 11.5px; font-weight: 700; color: var(--ink4); text-transform: uppercase; letter-spacing: .03em; margin-bottom: 10px; }
          .edv-cost-num { font-size: 22px; font-weight: 800; color: var(--ink); margin-bottom: 4px; }
          .edv-cost-card.after .edv-cost-num { color: var(--gd); }
          .edv-cost-sub { font-size: 12.5px; color: var(--ink4); }
          .edv-cost-arrow { color: var(--g); flex-shrink: 0; }

          .edv-included { background: var(--soft); padding: 72px 0; }
          .edv-included-grid { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 18px 40px; max-width: 880px; margin: 0 auto; }
          .edv-included-item { display: flex; align-items: flex-start; gap: 12px; font-size: 15px; color: var(--ink2); font-weight: 600; }
          .edv-included-item svg { color: var(--g); flex-shrink: 0; margin-top: 2px; }
          @media(max-width:640px){ .edv-included-grid { grid-template-columns: 1fr; } }

          .edv-steps { padding: 72px 0 88px; }
          .edv-steps-grid { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 32px; }
          .edv-step { min-width: 0; }
          .edv-step-num {
            width: 44px; height: 44px; border-radius: 50%;
            background: var(--gl); color: var(--gd); font-weight: 800; font-size: 15px;
            display: flex; align-items: center; justify-content: center; margin-bottom: 18px;
          }
          .edv-step h3 { font-size: 17px; color: var(--ink); margin-bottom: 8px; }
          .edv-step p { font-size: 14px; color: var(--ink3); line-height: 1.7; }
          @media(max-width:900px){ .edv-steps-grid { grid-template-columns: 1fr; } }

          .edv-bottom { text-align: center; padding: 64px 0 96px; }
          .edv-bottom p { color: var(--ink3); font-size: 16px; margin-bottom: 24px; }
        `}</style>

        <section className="edv-hero">
          <div className="wrap edv-hero-grid">
            <div className="edv-hero-left">
              <div className="section-tag">Email Development</div>
              <h1 style={{ fontSize: 'clamp(32px,3.8vw,46px)' }}>Code that renders<br /><em style={{ color: 'var(--g)', fontStyle: 'normal' }}>the same everywhere.</em></h1>
              <p className="section-sub">Clean, hand-coded HTML/CSS that displays correctly in Gmail, Outlook, Apple Mail, Yahoo and everywhere else your subscribers actually read.</p>
              <div className="edv-btns">
                <Link href="/#contact" className="btn-primary">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                  Book a Free Call
                </Link>
                <Link href="/#cases" className="btn-ghost">See Case Studies →</Link>
              </div>
              <div className="edv-proof">
                <span style={{ color: '#f5a623', fontSize: '15px', letterSpacing: '1px' }}>⭐⭐⭐⭐⭐</span>
                <span>5.0 · 752 reviews on Upwork</span>
              </div>
            </div>

            <div className="edv-hero-card">
              <div className="edv-hero-card-title">What you get</div>
              <ul>
                <li><CheckCircle2 size={21} strokeWidth={2} /> Hand-coded HTML built for every major client</li>
                <li><CheckCircle2 size={21} strokeWidth={2} /> Outlook and Gmail quirks handled before they ship</li>
                <li><CheckCircle2 size={21} strokeWidth={2} /> Accessible, fast-loading markup on every send</li>
                <li><CheckCircle2 size={21} strokeWidth={2} /> Full QA across clients before anything goes out</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="edv-feature">
          <div className="wrap edv-feature-grid">
            <div>
              <div className="edv-feature-tag">Cross-Client Compatibility</div>
              <h2>Built to survive Outlook's rendering engine.</h2>
              <p className="edv-feature-sub">Outlook's notoriously broken rendering engine, Gmail's content clipping, and inconsistent dark-mode behavior break most emails. We code around all three from the start.</p>
              <ul>
                <li><Code2 size={17} /> Table-based structure with Outlook-specific fixes baked in</li>
                <li><Mail size={17} /> Kept well under Gmail's clipping length on every send</li>
                <li><Moon size={17} /> Dark-mode colors tested so nothing flips wrong</li>
              </ul>
            </div>
            <div className="edv-foundation-viz">
              {edvFoundationItems.map((item, i) => (
                <div key={item.label + i} className="edv-foundation-card">
                  <div className="edv-foundation-ico"><item.icon size={20} /></div>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="edv-feature edv-feature-alt">
          <div className="wrap edv-feature-grid">
            <div className="edv-migrate-viz">
              <div className="edv-migrate-box">
                <span>Before</span>
                <strong>Bloated Template Code</strong>
              </div>
              <div className="edv-migrate-arrow">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
              </div>
              <div className="edv-migrate-box">
                <span>After</span>
                <strong>Lean, Accessible Code</strong>
              </div>
            </div>
            <div>
              <div className="edv-feature-tag">Accessible & Fast</div>
              <h2>Lightweight code that loads and reads well for everyone.</h2>
              <p className="edv-feature-sub">Heavy, unstructured markup slows emails down and locks out screen-reader users. We build lean, semantic code that's quick to load and easy for every subscriber to use.</p>
              <ul>
                <li><Zap size={17} /> Optimized images & minimal markup for fast load times</li>
                <li><Eye size={17} /> Alt text and semantic structure for screen readers</li>
                <li><Gauge size={17} /> Readable font sizing and contrast on every screen</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="edv-feature">
          <div className="wrap edv-feature-grid">
            <div>
              <div className="edv-feature-tag">Dynamic Content</div>
              <h2>Content that changes for every subscriber.</h2>
              <p className="edv-feature-sub">Beyond a first-name merge tag: product recommendations, countdown timers, location-aware offers and loyalty status, all coded to update automatically per send.</p>
              <ul>
                <li><ShoppingBag size={17} /> Personalized product blocks pulled from browsing behavior</li>
                <li><Clock size={17} /> Live countdown timers that update in real time</li>
                <li><MapPin size={17} /> Location and loyalty-aware content blocks</li>
              </ul>
            </div>
            <div className="edv-hub-viz">
              <svg className="edv-hub-lines" viewBox="0 0 100 100">
                {edvHubNodes.map((node) => (
                  <line key={node.label} x1="50" y1="50" x2={node.x} y2={node.y} stroke="var(--border)" strokeWidth="1" />
                ))}
              </svg>
              <div className="edv-hub-center">Dynamic<br />Content</div>
              {edvHubNodes.map((node) => (
                <div key={node.label} className="edv-hub-node" style={{ left: `${node.x}%`, top: `${node.y}%` }}>
                  <div className="edv-hub-node-ico"><node.icon size={17} /></div>
                  <span>{node.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="edv-feature edv-feature-alt">
          <div className="wrap edv-feature-grid">
            <div className="edv-cost-viz">
              <div className="edv-cost-card">
                <span>Before QA</span>
                <div className="edv-cost-num">Broken</div>
                <div className="edv-cost-sub">in Outlook & older clients</div>
              </div>
              <div className="edv-cost-arrow">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
              </div>
              <div className="edv-cost-card after">
                <span>After QA</span>
                <div className="edv-cost-num">99.7%</div>
                <div className="edv-cost-sub">render accuracy across clients</div>
              </div>
            </div>
            <div>
              <div className="edv-feature-tag">QA Testing</div>
              <h2>Tested across real clients before you ever hit send.</h2>
              <p className="edv-feature-sub">Every template is checked across major desktop, webmail and mobile clients, so what you approve is exactly what your subscribers see, dark mode included.</p>
              <ul>
                <li><ShieldCheck size={17} /> Multi-client rendering checks before every send</li>
                <li><Code2 size={17} /> Links, tracking & merge tags verified end to end</li>
                <li><CheckCircle2 size={17} /> Sign-off only once it renders clean everywhere</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="edv-included">
          <div className="wrap">
            <div className="sh-row" style={{ textAlign: 'center', marginBottom: '40px' }}>
              <h2>What&apos;s <em style={{ color: 'var(--g)', fontStyle: 'normal' }}>included.</em></h2>
              <p className="section-sub" style={{ margin: '0 auto' }}>Everything needed to make sure every send renders right, everywhere.</p>
            </div>
            <div className="edv-included-grid">
              {edvIncluded.map((item) => (
                <div key={item} className="edv-included-item">
                  <CheckCircle2 size={19} strokeWidth={2} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="edv-steps">
          <div className="wrap">
            <div className="sh-row" style={{ textAlign: 'center', marginBottom: '48px' }}>
              <h2>How it <em style={{ color: 'var(--g)', fontStyle: 'normal' }}>works.</em></h2>
              <p className="section-sub" style={{ margin: '0 auto' }}>Three steps, start to finish.</p>
            </div>
            <div className="edv-steps-grid">
              {edvSteps.map((s) => (
                <div key={s.n} className="edv-step">
                  <div className="edv-step-num">{s.n}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="edv-bottom">
          <p>Ready for emails that render perfectly everywhere they land?</p>
          <Link href="/#contact" className="btn-primary">Book a Free Call →</Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
