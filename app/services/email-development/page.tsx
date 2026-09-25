import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../../components/Navbar'
import { Footer } from '../../components/Sections'
import {
  CheckCircle2, Mail, Code2, Moon, Eye, Zap, ShieldCheck,
  ShoppingBag, Clock, MapPin, Gauge,
} from 'lucide-react'

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

const whatYouGet = [
  { icon: Code2,       label: 'Hand-coded HTML built for every major client' },
  { icon: ShieldCheck, label: 'Outlook and Gmail quirks handled before they ship' },
  { icon: Zap,         label: 'Accessible, fast-loading markup on every send' },
  { icon: Eye,         label: 'Full QA across clients before anything goes out' },
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

          .edv-hero-visual {
            position: relative; border-radius: 20px; overflow: hidden;
            box-shadow: 0 28px 70px rgba(15,22,35,.09);
            max-width: 650px; width: 100%; margin: 0 auto; background: var(--soft);
          }
          .edv-hero-visual img { width: 100%; height: auto; display: block; }

          @media(max-width:1000px){
            .edv-hero-grid { grid-template-columns: 1fr; }
            .edv-hero-visual { max-width: 600px; }
          }

          /* What You Get — highlighted through the tinted background, a
             centered tag, and gradient icon "medallions"; deliberately NOT
             a bordered card/box. Items sit in one open row divided by thin
             rules, not stacked inside a container. */
          .edv-whatget {
            padding: 64px 0 72px; position: relative; overflow: hidden;
            background:
              radial-gradient(ellipse at top right, rgba(30,166,114,0.14) 0%, transparent 55%),
              radial-gradient(ellipse at bottom left, rgba(30,166,114,0.10) 0%, transparent 55%),
              var(--soft);
            border-top: 1px solid var(--border); border-bottom: 1px solid var(--border);
          }
          .edv-whatget-head { text-align: center; max-width: 720px; margin: 0 auto 48px; }
          .edv-whatget-tag {
            display: inline-flex; align-items: center; gap: 8px; background: var(--gl); color: var(--gd);
            font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: .06em;
            padding: 6px 14px; border-radius: 100px; margin-bottom: 16px;
          }
          .edv-whatget-head h2 { font-size: clamp(20px, 2.4vw, 32px); margin-bottom: 0; white-space: nowrap; }
          @media(max-width:560px){
            .edv-whatget-head h2 { white-space: normal; font-size: clamp(20px, 5.5vw, 24px); }
          }

          .edv-whatget-row {
            display: flex; align-items: flex-start; justify-content: center;
            max-width: 1000px; margin: 0 auto; flex-wrap: wrap;
          }
          .edv-whatget-item {
            flex: 1 1 210px; display: flex; flex-direction: column; align-items: center;
            text-align: center; gap: 16px; padding: 0 26px; position: relative;
          }
          .edv-whatget-item:not(:last-child)::after {
            content: ''; position: absolute; right: 0; top: 4px; bottom: 4px; width: 1px; background: var(--gm);
          }
          .edv-whatget-ico {
            width: 54px; height: 54px; border-radius: 50%;
            background: linear-gradient(135deg, #1ea672, #17845b); color: #fff;
            display: flex; align-items: center; justify-content: center;
            box-shadow: 0 10px 24px rgba(30,166,114,.32);
          }
          .edv-whatget-item p { font-size: 14.5px; font-weight: 600; color: var(--ink2); line-height: 1.5; max-width: 200px; }

          @media(max-width:820px){
            .edv-whatget-row { flex-direction: column; align-items: center; gap: 32px; }
            .edv-whatget-item { padding: 0; }
            .edv-whatget-item:not(:last-child)::after { display: none; }
          }

          .edv-feature { padding: 72px 0; }
          .edv-feature-alt { background: var(--soft); }
          .edv-feature-alt .edv-diagram-img { background: #fff; }
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

          .edv-diagram-img {
            border-radius: 16px; overflow: hidden; background: var(--soft);
            box-shadow: 0 20px 50px rgba(15,22,35,.08);
          }
          .edv-diagram-img img { width: 100%; height: auto; display: block; }

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
            <div className="edv-hero-left" data-reveal="up">
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

            <div className="edv-hero-visual" data-reveal="right" style={{ transitionDelay: '150ms' }}>
              <Image
                src="/images/services/email-development/hero-code-renders.jpg"
                alt="Hand-coded email rendering flawlessly across laptop, phone and tablet with 100% inbox placement and zero layout shifts"
                width={1400}
                height={764}
              />
            </div>
          </div>
        </section>

        <section className="edv-whatget">
          <div className="wrap">
            <div className="edv-whatget-head" data-reveal="up">
              <div className="edv-whatget-tag">What You Get</div>
              <h2>Everything included, <em style={{ color: 'var(--g)', fontStyle: 'normal' }}>nothing left to guess.</em></h2>
            </div>
            <div className="edv-whatget-row">
              {whatYouGet.map((item, i) => (
                <div key={item.label} className="edv-whatget-item" data-reveal="up" style={{ transitionDelay: `${i * 90}ms` }}>
                  <div className="edv-whatget-ico"><item.icon size={22} strokeWidth={1.75} /></div>
                  <p>{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="edv-feature">
          <div className="wrap edv-feature-grid">
            <div data-reveal="up">
              <div className="edv-feature-tag">Cross-Client Compatibility</div>
              <h2>Built to survive Outlook's rendering engine.</h2>
              <p className="edv-feature-sub">Outlook's notoriously broken rendering engine, Gmail's content clipping, and inconsistent dark-mode behavior break most emails. We code around all three from the start.</p>
              <ul>
                <li><Code2 size={17} /> Table-based structure with Outlook-specific fixes baked in</li>
                <li><Mail size={17} /> Kept well under Gmail's clipping length on every send</li>
                <li><Moon size={17} /> Dark-mode colors tested so nothing flips wrong</li>
              </ul>
            </div>
            <div className="edv-diagram-img" data-reveal="zoom" style={{ transitionDelay: '120ms' }}>
              <Image
                src="/images/services/email-development/cross-client-compatibility.jpg"
                alt="Email template certified Gmail compatible, Outlook tested for 2016-365, Apple Mail flawless, and Yahoo verified with VML and ghost tables"
                width={1400}
                height={764}
              />
            </div>
          </div>
        </section>

        <section className="edv-feature edv-feature-alt">
          <div className="wrap edv-feature-grid">
            <div className="edv-diagram-img" data-reveal="zoom">
              <Image
                src="/images/services/email-development/accessible-fast-code.jpg"
                alt="Bloated code over 102KB and clipped by Gmail compared against lean HTML under 75KB that is screen-reader accessible and blazing fast to load"
                width={1400}
                height={764}
              />
            </div>
            <div data-reveal="up" style={{ transitionDelay: '120ms' }}>
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
            <div data-reveal="up">
              <div className="edv-feature-tag">Dynamic Content</div>
              <h2>Content that changes for every subscriber.</h2>
              <p className="edv-feature-sub">Beyond a first-name merge tag: product recommendations, countdown timers, location-aware offers and loyalty status, all coded to update automatically per send.</p>
              <ul>
                <li><ShoppingBag size={17} /> Personalized product blocks pulled from browsing behavior</li>
                <li><Clock size={17} /> Live countdown timers that update in real time</li>
                <li><MapPin size={17} /> Location and loyalty-aware content blocks</li>
              </ul>
            </div>
            <div className="edv-diagram-img" data-reveal="zoom" style={{ transitionDelay: '120ms' }}>
              <Image
                src="/images/services/email-development/dynamic-content-hub.jpg"
                alt="Dynamic Liquid logic powering first-name personalization, VIP tiered discounts, abandoned cart items, and location-based shipping notices"
                width={1400}
                height={764}
              />
            </div>
          </div>
        </section>

        <section className="edv-feature edv-feature-alt">
          <div className="wrap edv-feature-grid">
            <div className="edv-diagram-img" data-reveal="zoom">
              <Image
                src="/images/services/email-development/qa-testing-results.jpg"
                alt="99.7% flawless client compatibility score tested across Gmail, Outlook, Apple Mail, Yahoo and AOL with zero broken tables and dark mode certified"
                width={1400}
                height={764}
              />
            </div>
            <div data-reveal="up" style={{ transitionDelay: '120ms' }}>
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
            <div className="sh-row" style={{ textAlign: 'center', marginBottom: '40px' }} data-reveal="up">
              <h2>What&apos;s <em style={{ color: 'var(--g)', fontStyle: 'normal' }}>included.</em></h2>
              <p className="section-sub" style={{ margin: '0 auto' }}>Everything needed to make sure every send renders right, everywhere.</p>
            </div>
            <div className="edv-included-grid">
              {edvIncluded.map((item, i) => (
                <div key={item} className="edv-included-item" data-reveal="up" style={{ transitionDelay: `${i * 60}ms` }}>
                  <CheckCircle2 size={19} strokeWidth={2} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="edv-steps">
          <div className="wrap">
            <div className="sh-row" style={{ textAlign: 'center', marginBottom: '48px' }} data-reveal="up">
              <h2>How it <em style={{ color: 'var(--g)', fontStyle: 'normal' }}>works.</em></h2>
              <p className="section-sub" style={{ margin: '0 auto' }}>Three steps, start to finish.</p>
            </div>
            <div className="edv-steps-grid">
              {edvSteps.map((s, i) => (
                <div key={s.n} className="edv-step" data-reveal="up" style={{ transitionDelay: `${i * 100}ms` }}>
                  <div className="edv-step-num">{s.n}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="edv-bottom" data-reveal="up">
          <p>Ready for emails that render perfectly everywhere they land?</p>
          <Link href="/#contact" className="btn-primary">Book a Free Call →</Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
