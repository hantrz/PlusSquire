import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../../components/Navbar'
import { Footer } from '../../components/Sections'
import {
  CheckCircle2, LayoutGrid, MousePointerClick, Layers,
  Smartphone, Palette, Gift, Sparkles,
} from 'lucide-react'

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
            max-width: 650px; width: 100%; margin: 0 auto; background: var(--soft);
          }
          .edg-hero-visual img { width: 100%; height: auto; display: block; }

          @media(max-width:1000px){
            .edg-hero-grid { grid-template-columns: 1fr; }
            .edg-hero-visual { max-width: 600px; }
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
          .edg-feature-alt .edg-diagram-img { background: #fff; }
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

          .edg-diagram-img {
            border-radius: 16px; overflow: hidden; background: var(--soft);
            box-shadow: 0 20px 50px rgba(15,22,35,.08);
          }
          .edg-diagram-img img { width: 100%; height: auto; display: block; }

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
              <Image
                src="/images/services/email-design/hero-pixel-perfect.jpg"
                alt="On-brand mobile email template with a 38% average click lift, pixel-perfect dark mode, and Figma-to-inbox handoff"
                width={1400}
                height={764}
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
            <div className="edg-diagram-img" data-reveal="zoom" style={{ transitionDelay: '120ms' }}>
              <Image
                src="/images/services/email-design/brand-consistency.jpg"
                alt="Brand style guide with primary and accent colors, typography scale, and social/product modules carried consistently across three email templates"
                width={1400}
                height={781}
              />
            </div>
          </div>
        </section>

        <section className="edg-feature edg-feature-alt">
          <div className="wrap edg-feature-grid">
            <div className="edg-diagram-img" data-reveal="zoom">
              <Image
                src="/images/services/email-design/mobile-first-layout.jpg"
                alt="Cluttered, shrunk desktop-first template next to a mobile-first layout optimized for thumb-friendly taps"
                width={1400}
                height={781}
              />
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
            <div className="edg-diagram-img" data-reveal="zoom" style={{ transitionDelay: '120ms' }}>
              <Image
                src="/images/services/email-design/conversion-hierarchy.jpg"
                alt="Email layout annotated with hook and headline attention, value proposition, balanced text-to-image ratio, and a single Shop Now CTA"
                width={1400}
                height={764}
              />
            </div>
          </div>
        </section>

        <section className="edg-feature edg-feature-alt">
          <div className="wrap edg-feature-grid">
            <div className="edg-diagram-img" data-reveal="zoom">
              <Image
                src="/images/services/email-design/design-systems-hub.jpg"
                alt="Modular email design system: header and navigation bars, dynamic product grids, review carousels, countdown timers, and footer layouts around a shared component library"
                width={1400}
                height={764}
              />
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
