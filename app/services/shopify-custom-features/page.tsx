import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../../components/Navbar'
import { Footer } from '../../components/Sections'
import {
  CheckCircle2, Puzzle, Layers, Wrench, Settings2,
  Repeat, Filter, Code2, Star, ShieldCheck,
} from 'lucide-react'

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

const whatYouGet = [
  { icon: Layers,      label: 'Custom theme sections & blocks' },
  { icon: Puzzle,      label: 'Third-party app integrations wired in correctly' },
  { icon: Wrench,      label: 'Bespoke functionality built to spec' },
  { icon: ShieldCheck, label: 'Ongoing support as your store grows' },
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

          .scf-hero-visual {
            position: relative; border-radius: 20px; overflow: hidden;
            box-shadow: 0 28px 70px rgba(15,22,35,.09);
            max-width: 650px; width: 100%; margin: 0 auto; background: var(--soft);
          }
          .scf-hero-visual img { width: 100%; height: auto; display: block; }

          @media(max-width:1000px){
            .scf-hero-grid { grid-template-columns: 1fr; }
            .scf-hero-visual { max-width: 600px; }
          }

          /* What You Get — highlighted through the tinted background, a
             centered tag, and gradient icon "medallions"; deliberately NOT
             a bordered card/box. Items sit in one open row divided by thin
             rules, not stacked inside a container. */
          .scf-whatget {
            padding: 64px 0 72px; position: relative; overflow: hidden;
            background:
              radial-gradient(ellipse at top right, rgba(30,166,114,0.14) 0%, transparent 55%),
              radial-gradient(ellipse at bottom left, rgba(30,166,114,0.10) 0%, transparent 55%),
              var(--soft);
            border-top: 1px solid var(--border); border-bottom: 1px solid var(--border);
          }
          .scf-whatget-head { text-align: center; max-width: 720px; margin: 0 auto 48px; }
          .scf-whatget-tag {
            display: inline-flex; align-items: center; gap: 8px; background: var(--gl); color: var(--gd);
            font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: .06em;
            padding: 6px 14px; border-radius: 100px; margin-bottom: 16px;
          }
          .scf-whatget-head h2 { font-size: clamp(20px, 2.4vw, 32px); margin-bottom: 0; white-space: nowrap; }
          @media(max-width:560px){
            .scf-whatget-head h2 { white-space: normal; font-size: clamp(20px, 5.5vw, 24px); }
          }

          .scf-whatget-row {
            display: flex; align-items: flex-start; justify-content: center;
            max-width: 1000px; margin: 0 auto; flex-wrap: wrap;
          }
          .scf-whatget-item {
            flex: 1 1 210px; display: flex; flex-direction: column; align-items: center;
            text-align: center; gap: 16px; padding: 0 26px; position: relative;
          }
          .scf-whatget-item:not(:last-child)::after {
            content: ''; position: absolute; right: 0; top: 4px; bottom: 4px; width: 1px; background: var(--gm);
          }
          .scf-whatget-ico {
            width: 54px; height: 54px; border-radius: 50%;
            background: linear-gradient(135deg, #1ea672, #17845b); color: #fff;
            display: flex; align-items: center; justify-content: center;
            box-shadow: 0 10px 24px rgba(30,166,114,.32);
          }
          .scf-whatget-item p { font-size: 14.5px; font-weight: 600; color: var(--ink2); line-height: 1.5; max-width: 200px; }

          @media(max-width:820px){
            .scf-whatget-row { flex-direction: column; align-items: center; gap: 32px; }
            .scf-whatget-item { padding: 0; }
            .scf-whatget-item:not(:last-child)::after { display: none; }
          }

          .scf-feature { padding: 72px 0; }
          .scf-feature-alt { background: var(--soft); }
          .scf-feature-alt .scf-diagram-img { background: #fff; }
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

          .scf-diagram-img {
            border-radius: 16px; overflow: hidden; background: var(--soft);
            box-shadow: 0 20px 50px rgba(15,22,35,.08);
          }
          .scf-diagram-img img { width: 100%; height: auto; display: block; }

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
            <div className="scf-hero-left" data-reveal="up">
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

            <div className="scf-hero-visual" data-reveal="right" style={{ transitionDelay: '150ms' }}>
              <Image
                src="/images/services/shopify-custom-features/hero-custom-code.jpg"
                alt="Custom Liquid and metafields built exactly to spec, zero monthly app fees, replacing bloated third-party apps"
                width={1400}
                height={764}
              />
            </div>
          </div>
        </section>

        <section className="scf-whatget">
          <div className="wrap">
            <div className="scf-whatget-head" data-reveal="up">
              <div className="scf-whatget-tag">What You Get</div>
              <h2>Everything included, <em style={{ color: 'var(--g)', fontStyle: 'normal' }}>nothing left to guess.</em></h2>
            </div>
            <div className="scf-whatget-row">
              {whatYouGet.map((item, i) => (
                <div key={item.label} className="scf-whatget-item" data-reveal="up" style={{ transitionDelay: `${i * 90}ms` }}>
                  <div className="scf-whatget-ico"><item.icon size={22} strokeWidth={1.75} /></div>
                  <p>{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="scf-feature">
          <div className="wrap scf-feature-grid">
            <div data-reveal="up">
              <div className="scf-feature-tag">Custom Sections & Theme Blocks</div>
              <h2>If you can picture it, we can build it into your theme.</h2>
              <p className="scf-feature-sub">Fully custom, merchant-editable sections that give you real control without touching code.</p>
              <ul>
                <li><Layers size={17} /> Fully custom, drag-and-drop sections</li>
                <li><Puzzle size={17} /> Built to match your existing theme</li>
                <li><Settings2 size={17} /> Editable by your team in the theme editor</li>
              </ul>
            </div>
            <div className="scf-diagram-img" data-reveal="zoom" style={{ transitionDelay: '120ms' }}>
              <Image
                src="/images/services/shopify-custom-features/theme-editor-blocks.jpg"
                alt="Shopify theme editor with custom metafields, dynamic pricing rules, and promotional banners built as a custom section block"
                width={1400}
                height={764}
              />
            </div>
          </div>
        </section>

        <section className="scf-feature scf-feature-alt">
          <div className="wrap scf-feature-grid">
            <div className="scf-diagram-img" data-reveal="zoom">
              <Image
                src="/images/services/shopify-custom-features/app-integrations-hub.jpg"
                alt="Shopify connected to Recharge and Skio subscriptions, Yotpo and Judge.me reviews, Smile.io loyalty, and Gorgias and Zendesk support"
                width={1400}
                height={764}
              />
            </div>
            <div data-reveal="up" style={{ transitionDelay: '120ms' }}>
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
            <div data-reveal="up">
              <div className="scf-feature-tag">Bespoke Store Functionality</div>
              <h2>Functionality your theme was never built to handle.</h2>
              <p className="scf-feature-sub">Subscriptions, wholesale portals, advanced filtering: built custom when an off-the-shelf app can&apos;t do the job.</p>
              <ul>
                <li><Repeat size={17} /> Subscription & wholesale portal builds</li>
                <li><Filter size={17} /> Advanced filtering & search</li>
                <li><Wrench size={17} /> Custom checkout & cart logic (Shopify Plus)</li>
              </ul>
            </div>
            <div className="scf-diagram-img" data-reveal="zoom" style={{ transitionDelay: '120ms' }}>
              <Image
                src="/images/services/shopify-custom-features/bespoke-features-showcase.jpg"
                alt="Custom bundle and tiered discount builder, advanced slide-out cart drawer, and an interactive product configurator"
                width={1400}
                height={764}
              />
            </div>
          </div>
        </section>

        <section className="scf-feature scf-feature-alt">
          <div className="wrap scf-feature-grid">
            <div className="scf-diagram-img" data-reveal="zoom">
              <Image
                src="/images/services/shopify-custom-features/ongoing-feature-sprints.jpg"
                alt="Dedicated monthly feature sprints with code hygiene, 24-hour emergency bug fixes, and third-party app compatibility updates"
                width={1400}
                height={764}
              />
            </div>
            <div data-reveal="up" style={{ transitionDelay: '120ms' }}>
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
            <div className="sh-row" style={{ textAlign: 'center', marginBottom: '40px' }} data-reveal="up">
              <h2>What&apos;s <em style={{ color: 'var(--g)', fontStyle: 'normal' }}>included.</em></h2>
              <p className="section-sub" style={{ margin: '0 auto' }}>Everything needed to get custom functionality live and working correctly.</p>
            </div>
            <div className="scf-included-grid">
              {included.map((item, i) => (
                <div key={item} className="scf-included-item" data-reveal="up" style={{ transitionDelay: `${i * 60}ms` }}>
                  <CheckCircle2 size={19} strokeWidth={2} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="scf-steps">
          <div className="wrap">
            <div className="sh-row" style={{ textAlign: 'center', marginBottom: '48px' }} data-reveal="up">
              <h2>How it <em style={{ color: 'var(--g)', fontStyle: 'normal' }}>works.</em></h2>
              <p className="section-sub" style={{ margin: '0 auto' }}>Three steps, start to finish.</p>
            </div>
            <div className="scf-steps-grid">
              {steps.map((s, i) => (
                <div key={s.n} className="scf-step" data-reveal="up" style={{ transitionDelay: `${i * 100}ms` }}>
                  <div className="scf-step-num">{s.n}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="scf-bottom" data-reveal="up">
          <p>Ready to build the functionality your theme is missing?</p>
          <Link href="/#contact" className="btn-primary">Book a Free Call →</Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
