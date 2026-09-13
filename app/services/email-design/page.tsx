import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../../components/Navbar'
import { Footer } from '../../components/Sections'
import {
  CheckCircle2, LayoutGrid, ShoppingBag, MousePointerClick, Layers,
  Smartphone, Palette, Gift, Snowflake, Rocket, Sparkles,
} from 'lucide-react'

const edgFoundationItems = [
  { icon: LayoutGrid,        label: 'Hero Banner' },
  { icon: ShoppingBag,       label: 'Product Grid' },
  { icon: MousePointerClick, label: 'CTA Block' },
  { icon: Layers,            label: 'Footer & Nav' },
]

const edgHubNodes = [
  { icon: Gift,      label: 'Holiday',      x: 50, y: 8 },
  { icon: Rocket,     label: 'New Launch',  x: 89, y: 35 },
  { icon: Sparkles,   label: 'Summer Sale', x: 74, y: 88 },
  { icon: Snowflake,  label: 'BFCM',        x: 26, y: 88 },
  { icon: Palette,    label: 'Rebrand',     x: 11, y: 35 },
]

const edgIncluded = [
  'Custom templates designed to match your brand guidelines',
  'Mobile-first responsive layouts, tested across devices',
  'Hero banners, product grids & CTA blocks built to convert',
  'Modular design system for fast, consistent campaign turnaround',
  'Seasonal & promotional design variants (BFCM, holidays, launches)',
  'Dark-mode-aware color and contrast choices',
  'Image sourcing & optimization guidance',
  'Design QA against your brand style guide before handoff',
]

const edgSteps = [
  { n: '01', title: 'Discover & Audit', desc: "We review your brand guidelines, past campaigns, and what's working in your inbox to find the gaps and opportunities." },
  { n: '02', title: 'Design & Refine', desc: 'We draft concepts, gather your feedback, and lock in a modular system your team can reuse campaign after campaign.' },
  { n: '03', title: 'Deliver & Handoff', desc: 'Production-ready design files, organized and annotated, handed off clean and ready for development.' },
]

const whatYouGet = [
  { icon: Palette,           label: 'On-brand templates designed for your unique voice' },
  { icon: Smartphone,        label: 'Mobile-first layouts that read perfectly on any screen' },
  { icon: MousePointerClick, label: 'Clear visual hierarchy that guides readers to the CTA' },
  { icon: LayoutGrid,        label: 'A modular system built for fast campaign turnaround' },
]

export default function EmailDesignPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '68px' }}>
        <style>{`
          .edg-hero {
            padding: 64px 0 76px;
            background:
              radial-gradient(ellipse at top left, rgba(30, 166, 114, 0.14) 0%, transparent 60%),
              radial-gradient(ellipse at bottom right, rgba(30, 166, 114, 0.14) 0%, transparent 60%),
              #ffffff;
            overflow: hidden; position: relative;
          }
          .edg-hero-grid { display: grid; grid-template-columns: minmax(0,1fr) minmax(0,1fr); gap: 48px; align-items: center; }
          .edg-hero-left .section-tag::before { display: none; }
          .edg-hero-left h1 { margin-bottom: 18px; }
          .edg-hero-left .section-sub { margin-bottom: 32px; max-width: 480px; }
          .edg-btns { display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 28px; }
          .edg-proof { display: flex; align-items: center; gap: 6px; font-size: 13px; color: var(--ink3); }

          .edg-hero-visual {
            position: relative; border-radius: 20px; overflow: hidden;
            box-shadow: 0 28px 70px rgba(15,22,35,.09);
            max-width: 480px; width: 100%; margin: 0 auto; background: var(--soft);
          }
          .edg-hero-visual img { width: 100%; height: auto; display: block; }

          @media(max-width:1000px){
            .edg-hero-grid { grid-template-columns: 1fr; }
            .edg-hero-visual { max-width: 520px; }
          }

          /* What You Get — highlighted through the tinted background, a
             centered tag, and gradient icon "medallions"; deliberately NOT
             a bordered card/box. Items sit in one open row divided by thin
             rules, not stacked inside a container. */
          .edg-whatget {
            padding: 64px 0 72px; position: relative; overflow: hidden;
            background:
              radial-gradient(ellipse at top right, rgba(30,166,114,0.14) 0%, transparent 55%),
              radial-gradient(ellipse at bottom left, rgba(30,166,114,0.10) 0%, transparent 55%),
              var(--soft);
            border-top: 1px solid var(--border); border-bottom: 1px solid var(--border);
          }
          .edg-whatget-head { text-align: center; max-width: 720px; margin: 0 auto 48px; }
          .edg-whatget-tag {
            display: inline-flex; align-items: center; gap: 8px; background: var(--gl); color: var(--gd);
            font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: .06em;
            padding: 6px 14px; border-radius: 100px; margin-bottom: 16px;
          }
          .edg-whatget-head h2 { font-size: clamp(20px, 2.4vw, 32px); margin-bottom: 0; white-space: nowrap; }
          @media(max-width:560px){
            .edg-whatget-head h2 { white-space: normal; font-size: clamp(20px, 5.5vw, 24px); }
          }

          .edg-whatget-row {
            display: flex; align-items: flex-start; justify-content: center;
            max-width: 1000px; margin: 0 auto; flex-wrap: wrap;
          }
          .edg-whatget-item {
            flex: 1 1 210px; display: flex; flex-direction: column; align-items: center;
            text-align: center; gap: 16px; padding: 0 26px; position: relative;
          }
          .edg-whatget-item:not(:last-child)::after {
            content: ''; position: absolute; right: 0; top: 4px; bottom: 4px; width: 1px; background: var(--gm);
          }
          .edg-whatget-ico {
            width: 54px; height: 54px; border-radius: 50%;
            background: linear-gradient(135deg, #1ea672, #17845b); color: #fff;
            display: flex; align-items: center; justify-content: center;
            box-shadow: 0 10px 24px rgba(30,166,114,.32);
          }
          .edg-whatget-item p { font-size: 14.5px; font-weight: 600; color: var(--ink2); line-height: 1.5; max-width: 200px; }

          @media(max-width:820px){
            .edg-whatget-row { flex-direction: column; align-items: center; gap: 32px; }
            .edg-whatget-item { padding: 0; }
            .edg-whatget-item:not(:last-child)::after { display: none; }
          }

          .edg-feature { padding: 72px 0; }
          .edg-feature-alt { background: var(--soft); }
          .edg-feature-alt .edg-migrate-viz,
          .edg-feature-alt .edg-chart-viz,
          .edg-feature-alt .edg-foundation-viz { background: #fff; }
          .edg-feature-grid { display: grid; grid-template-columns: minmax(0,1fr) minmax(0,1fr); gap: 56px; align-items: center; }
          .edg-feature-tag { font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: .05em; color: var(--g); margin-bottom: 12px; }
          .edg-feature h2 { font-size: clamp(24px, 2.4vw, 30px); color: var(--ink); margin-bottom: 14px; }
          .edg-feature-sub { color: var(--ink3); font-size: 15.5px; line-height: 1.75; margin-bottom: 22px; max-width: 460px; }
          .edg-feature ul { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 14px; }
          .edg-feature li { display: flex; align-items: flex-start; gap: 10px; font-size: 14.5px; color: var(--ink2); line-height: 1.55; max-width: 440px; }
          .edg-feature li svg { color: var(--g); flex-shrink: 0; margin-top: 2px; }

          @media(max-width:900px){
            .edg-feature-grid { grid-template-columns: 1fr; }
          }

          .edg-foundation-viz {
            background: var(--soft); border-radius: 16px; padding: 24px;
            display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 14px;
          }
          .edg-foundation-card {
            background: #fff; border: 1px solid var(--border); border-radius: 12px;
            padding: 22px 14px; text-align: center;
          }
          .edg-foundation-ico {
            width: 40px; height: 40px; border-radius: 10px; background: var(--gl); color: var(--g);
            display: flex; align-items: center; justify-content: center; margin: 0 auto 10px;
          }
          .edg-foundation-card span { font-size: 12.5px; font-weight: 700; color: var(--ink2); line-height: 1.3; }

          .edg-migrate-viz {
            background: var(--soft); border-radius: 16px; padding: 32px 24px;
            display: flex; align-items: center; justify-content: center; gap: 14px;
          }
          .edg-migrate-box {
            flex: 1; background: #fff; border: 1px solid var(--border); border-radius: 12px;
            padding: 22px 16px; text-align: center;
          }
          .edg-migrate-box span { display: block; font-size: 12px; font-weight: 700; color: var(--ink4); text-transform: uppercase; letter-spacing: .03em; margin-bottom: 10px; }
          .edg-migrate-box strong { font-size: 15px; color: var(--ink); }
          .edg-migrate-arrow { color: var(--g); flex-shrink: 0; }

          .edg-hub-viz { position: relative; width: 100%; max-width: 340px; aspect-ratio: 1/1; margin: 0 auto; }
          .edg-hub-lines { position: absolute; inset: 0; width: 100%; height: 100%; }
          .edg-hub-center {
            position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%);
            width: 34%; aspect-ratio: 1/1; border-radius: 50%;
            background: linear-gradient(135deg, #1ea672, #17845b); color: #fff;
            display: flex; align-items: center; justify-content: center;
            font-size: 12.5px; font-weight: 800; letter-spacing: .02em; text-align: center;
            box-shadow: 0 16px 40px rgba(30,166,114,.3); z-index: 2; padding: 6px;
          }
          .edg-hub-node {
            position: absolute; transform: translate(-50%,-50%);
            width: 30%; display: flex; flex-direction: column; align-items: center; gap: 6px; z-index: 2;
          }
          .edg-hub-node-ico {
            width: 38px; height: 38px; border-radius: 10px; background: #fff; border: 1px solid var(--border);
            color: var(--g); display: flex; align-items: center; justify-content: center;
            box-shadow: 0 6px 16px rgba(15,22,35,.06);
          }
          .edg-hub-node span { font-size: 10.5px; font-weight: 700; color: var(--ink3); }

          .edg-chart-viz { background: var(--soft); border-radius: 16px; padding: 32px 24px 20px; }
          .edg-chart-bars { display: flex; align-items: flex-end; gap: 10px; height: 140px; margin-bottom: 12px; }
          .edg-chart-bar { flex: 1; background: linear-gradient(180deg, #1ea672, #17845b); border-radius: 6px 6px 0 0; }
          .edg-chart-labels { display: flex; gap: 10px; }
          .edg-chart-labels span { flex: 1; text-align: center; font-size: 10.5px; color: var(--ink4); font-weight: 600; }
          .edg-chart-tag {
            display: inline-flex; align-items: center; gap: 6px; margin-top: 14px;
            background: var(--gl); color: var(--gd); font-size: 12px; font-weight: 700;
            padding: 5px 12px; border-radius: 20px;
          }

          .edg-included { background: var(--soft); padding: 72px 0; }
          .edg-included-grid { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 18px 40px; max-width: 880px; margin: 0 auto; }
          .edg-included-item { display: flex; align-items: flex-start; gap: 12px; font-size: 15px; color: var(--ink2); font-weight: 600; }
          .edg-included-item svg { color: var(--g); flex-shrink: 0; margin-top: 2px; }
          @media(max-width:640px){ .edg-included-grid { grid-template-columns: 1fr; } }

          .edg-steps { padding: 72px 0 88px; }
          .edg-steps-grid { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 32px; }
          .edg-step { min-width: 0; }
          .edg-step-num {
            width: 44px; height: 44px; border-radius: 50%;
            background: var(--gl); color: var(--gd); font-weight: 800; font-size: 15px;
            display: flex; align-items: center; justify-content: center; margin-bottom: 18px;
          }
          .edg-step h3 { font-size: 17px; color: var(--ink); margin-bottom: 8px; }
          .edg-step p { font-size: 14px; color: var(--ink3); line-height: 1.7; }
          @media(max-width:900px){ .edg-steps-grid { grid-template-columns: 1fr; } }

          .edg-bottom { text-align: center; padding: 64px 0 96px; }
          .edg-bottom p { color: var(--ink3); font-size: 16px; margin-bottom: 24px; }
        `}</style>

        <section className="edg-hero">
          <div className="wrap edg-hero-grid">
            <div className="edg-hero-left" data-reveal="up">
              <div className="section-tag">Email Design</div>
              <h1 style={{ fontSize: 'clamp(32px,3.8vw,46px)' }}>Pixel-perfect designs<br /><em style={{ color: 'var(--g)', fontStyle: 'normal' }}>that stop the scroll.</em></h1>
              <p className="section-sub">On-brand, mobile-first email design built to take a subscriber from first impression to repeat purchase, without ever looking like a template.</p>
              <div className="edg-btns">
                <Link href="/#contact" className="btn-primary">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                  Book a Free Call
                </Link>
                <Link href="/#cases" className="btn-ghost">See Case Studies →</Link>
              </div>
              <div className="edg-proof">
                <span style={{ color: '#f5a623', fontSize: '15px', letterSpacing: '1px' }}>⭐⭐⭐⭐⭐</span>
                <span>5.0 · 752 reviews on Upwork</span>
              </div>
            </div>

            <div className="edg-hero-visual" data-reveal="right" style={{ transitionDelay: '150ms' }}>
              {/* Replace with a relevant photo/screenshot: drop the file at
                  public/images/services/email-design.jpg (or update
                  the src below to whatever path/filename you use). */}
              <Image
                src="/images/services/email-design.jpg"
                alt="Email design"
                width={480}
                height={400}
              />
            </div>
          </div>
        </section>

        <section className="edg-whatget">
          <div className="wrap">
            <div className="edg-whatget-head" data-reveal="up">
              <div className="edg-whatget-tag">What You Get</div>
              <h2>Everything included, <em style={{ color: 'var(--g)', fontStyle: 'normal' }}>nothing left to guess.</em></h2>
            </div>
            <div className="edg-whatget-row">
              {whatYouGet.map((item, i) => (
                <div key={item.label} className="edg-whatget-item" data-reveal="up" style={{ transitionDelay: `${i * 90}ms` }}>
                  <div className="edg-whatget-ico"><item.icon size={22} strokeWidth={1.75} /></div>
                  <p>{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="edg-feature">
          <div className="wrap edg-feature-grid">
            <div data-reveal="up">
              <div className="edg-feature-tag">Brand Consistency</div>
              <h2>Brand-first visual design, every single send.</h2>
              <p className="edg-feature-sub">Your emails should feel unmistakably yours. We build every element, from hero banners to footers, around your existing brand guidelines so nothing feels off-the-shelf.</p>
              <ul>
                <li><Palette size={17} /> Colors, type & imagery pulled straight from your brand kit</li>
                <li><LayoutGrid size={17} /> Reusable modules for banners, grids & CTA blocks</li>
                <li><Layers size={17} /> Consistent visual language across every campaign</li>
              </ul>
            </div>
            <div className="edg-foundation-viz" data-reveal="zoom" style={{ transitionDelay: '120ms' }}>
              {edgFoundationItems.map((item) => (
                <div key={item.label} className="edg-foundation-card">
                  <div className="edg-foundation-ico"><item.icon size={20} /></div>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="edg-feature edg-feature-alt">
          <div className="wrap edg-feature-grid">
            <div className="edg-migrate-viz" data-reveal="zoom">
              <div className="edg-migrate-box">
                <span>Before</span>
                <strong>Desktop-First Layout</strong>
              </div>
              <div className="edg-migrate-arrow">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
              </div>
              <div className="edg-migrate-box">
                <span>After</span>
                <strong>Mobile-First Layout</strong>
              </div>
            </div>
            <div data-reveal="up" style={{ transitionDelay: '120ms' }}>
              <div className="edg-feature-tag">Mobile-First</div>
              <h2>Built for the screen most subscribers actually use.</h2>
              <p className="edg-feature-sub">The majority of opens happen on a phone. Every layout we design is built mobile-first, then scaled up, so tap targets, type size and images all hold up on the screen that matters most.</p>
              <ul>
                <li><Smartphone size={17} /> Single-column layouts that stack cleanly on any device</li>
                <li><MousePointerClick size={17} /> Thumb-friendly buttons sized for real taps</li>
                <li><Layers size={17} /> Tested across the most common mail app viewports</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="edg-feature">
          <div className="wrap edg-feature-grid">
            <div data-reveal="up">
              <div className="edg-feature-tag">Conversion</div>
              <h2>Visual hierarchy that leads straight to the click.</h2>
              <p className="edg-feature-sub">Great design is more than pretty, it directs the eye. We design a clear path from headline to hero image to CTA, so nothing competes for attention along the way.</p>
              <ul>
                <li><MousePointerClick size={17} /> High-contrast CTAs placed where readers expect them</li>
                <li><LayoutGrid size={17} /> Deliberate spacing & sizing to guide the scroll</li>
                <li><Sparkles size={17} /> Design decisions backed by what's driven clicks before</li>
              </ul>
            </div>
            <div className="edg-chart-viz" data-reveal="zoom" style={{ transitionDelay: '120ms' }}>
              <div className="edg-chart-bars">
                <div className="edg-chart-bar" style={{ height: '100%' }} />
                <div className="edg-chart-bar" style={{ height: '76%' }} />
                <div className="edg-chart-bar" style={{ height: '52%' }} />
                <div className="edg-chart-bar" style={{ height: '30%' }} />
              </div>
              <div className="edg-chart-labels">
                <span>Headline</span>
                <span>Hero</span>
                <span>Body</span>
                <span>Footer</span>
              </div>
              <div className="edg-chart-tag"><MousePointerClick size={13} /> Clear visual path to purchase</div>
            </div>
          </div>
        </section>

        <section className="edg-feature edg-feature-alt">
          <div className="wrap edg-feature-grid">
            <div className="edg-hub-viz" data-reveal="zoom">
              <svg className="edg-hub-lines" viewBox="0 0 100 100">
                {edgHubNodes.map((node) => (
                  <line key={node.label} x1="50" y1="50" x2={node.x} y2={node.y} stroke="var(--border)" strokeWidth="1" />
                ))}
              </svg>
              <div className="edg-hub-center">Design<br />System</div>
              {edgHubNodes.map((node) => (
                <div key={node.label} className="edg-hub-node" style={{ left: `${node.x}%`, top: `${node.y}%` }}>
                  <div className="edg-hub-node-ico"><node.icon size={17} /></div>
                  <span>{node.label}</span>
                </div>
              ))}
            </div>
            <div data-reveal="up" style={{ transitionDelay: '120ms' }}>
              <div className="edg-feature-tag">Design Systems</div>
              <h2>A modular system, ready for every moment.</h2>
              <p className="edg-feature-sub">BFCM, holidays, a product launch, a rebrand mid-year: your design system flexes to fit the moment without starting from a blank canvas every time.</p>
              <ul>
                <li><Layers size={17} /> Reusable modules swapped in for any campaign theme</li>
                <li><Gift size={17} /> Seasonal variants ready ahead of your biggest sends</li>
                <li><Sparkles size={17} /> New concepts designed to slot into the same system</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="edg-included">
          <div className="wrap">
            <div className="sh-row" style={{ textAlign: 'center', marginBottom: '40px' }} data-reveal="up">
              <h2>What&apos;s <em style={{ color: 'var(--g)', fontStyle: 'normal' }}>included.</em></h2>
              <p className="section-sub" style={{ margin: '0 auto' }}>Everything needed to get every send looking like your brand made it.</p>
            </div>
            <div className="edg-included-grid">
              {edgIncluded.map((item, i) => (
                <div key={item} className="edg-included-item" data-reveal="up" style={{ transitionDelay: `${i * 60}ms` }}>
                  <CheckCircle2 size={19} strokeWidth={2} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="edg-steps">
          <div className="wrap">
            <div className="sh-row" style={{ textAlign: 'center', marginBottom: '48px' }} data-reveal="up">
              <h2>How it <em style={{ color: 'var(--g)', fontStyle: 'normal' }}>works.</em></h2>
              <p className="section-sub" style={{ margin: '0 auto' }}>Three steps, start to finish.</p>
            </div>
            <div className="edg-steps-grid">
              {edgSteps.map((s, i) => (
                <div key={s.n} className="edg-step" data-reveal="up" style={{ transitionDelay: `${i * 100}ms` }}>
                  <div className="edg-step-num">{s.n}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="edg-bottom" data-reveal="up">
          <p>Ready for emails that look as good as your brand deserves?</p>
          <Link href="/#contact" className="btn-primary">Book a Free Call →</Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
