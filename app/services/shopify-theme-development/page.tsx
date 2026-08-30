import Link from 'next/link'
import Navbar from '../../components/Navbar'
import { Footer } from '../../components/Sections'
import {
  CheckCircle2, Paintbrush, Smartphone, ShoppingBag, Gauge,
  Layers, Code2, MonitorSmartphone, Palette, Layout,
} from 'lucide-react'

const pageGrid = [
  { icon: Layout,            label: 'Homepage' },
  { icon: ShoppingBag,       label: 'Product Page' },
  { icon: Layers,            label: 'Collection Page' },
  { icon: MonitorSmartphone, label: 'Cart & Checkout' },
]

const included = [
  'Fully custom theme design, not a marketplace template',
  'Homepage, collection, product & cart page builds',
  'Mobile-first responsive development',
  'Core Web Vitals & speed optimization baked in',
  'Cross-browser & cross-device testing',
  'Basic on-page SEO setup',
  'Staging environment for review before launch',
  'Training & documentation handover',
]

const steps = [
  { n: '01', title: 'Discovery & Design', desc: 'We learn your brand, products, and customers, then design the key page templates for your approval before any code is written.' },
  { n: '02', title: 'Build & Test', desc: 'The theme is built section by section and tested across real devices and browsers as we go, not just at the end.' },
  { n: '03', title: 'Launch & Handover', desc: 'Final QA, a smooth launch, and a walkthrough so your team can make day-to-day edits with confidence.' },
]

export default function ShopifyThemeDevelopmentPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '68px' }}>
        <style>{`
          .std-hero {
            padding: 64px 0 76px;
            background:
              radial-gradient(ellipse at top left, rgba(30, 166, 114, 0.14) 0%, transparent 60%),
              radial-gradient(ellipse at bottom right, rgba(30, 166, 114, 0.14) 0%, transparent 60%),
              #ffffff;
            overflow: hidden; position: relative;
          }
          .std-hero-grid { display: grid; grid-template-columns: minmax(0,1fr) minmax(0,1fr); gap: 48px; align-items: center; }
          .std-hero-left .section-tag::before { display: none; }
          .std-hero-left h1 { margin-bottom: 18px; }
          .std-hero-left .section-sub { margin-bottom: 32px; max-width: 480px; }
          .std-btns { display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 28px; }
          .std-proof { display: flex; align-items: center; gap: 6px; font-size: 13px; color: var(--ink3); }

          .std-hero-card {
            background: #fff; border: 1px solid var(--border); border-radius: 20px;
            padding: 40px 38px; box-shadow: 0 28px 70px rgba(15,22,35,.09);
            max-width: 480px; width: 100%; margin: 0 auto;
          }
          .std-hero-card-title { font-size: 14px; font-weight: 800; text-transform: uppercase; letter-spacing: .04em; color: var(--g); margin-bottom: 22px; }
          .std-hero-card ul { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 20px; }
          .std-hero-card li { display: flex; align-items: flex-start; gap: 12px; font-size: 15.5px; color: var(--ink2); line-height: 1.5; }
          .std-hero-card li svg { color: var(--g); flex-shrink: 0; margin-top: 2px; }

          @media(max-width:1000px){
            .std-hero-grid { grid-template-columns: 1fr; }
            .std-hero-card { max-width: 520px; }
          }

          .std-feature { padding: 72px 0; }
          .std-feature-alt { background: var(--soft); }
          .std-feature-alt .std-migrate-viz,
          .std-feature-alt .std-chart-viz,
          .std-feature-alt .std-foundation-viz,
          .std-feature-alt .std-cost-viz .std-cost-card { background: #fff; }
          .std-feature-grid { display: grid; grid-template-columns: minmax(0,1fr) minmax(0,1fr); gap: 56px; align-items: center; }
          .std-feature-tag { font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: .05em; color: var(--g); margin-bottom: 12px; }
          .std-feature h2 { font-size: clamp(24px, 2.4vw, 30px); color: var(--ink); margin-bottom: 14px; }
          .std-feature-sub { color: var(--ink3); font-size: 15.5px; line-height: 1.75; margin-bottom: 22px; max-width: 460px; }
          .std-feature ul { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 14px; }
          .std-feature li { display: flex; align-items: flex-start; gap: 10px; font-size: 14.5px; color: var(--ink2); line-height: 1.55; max-width: 440px; }
          .std-feature li svg { color: var(--g); flex-shrink: 0; margin-top: 2px; }

          @media(max-width:900px){
            .std-feature-grid { grid-template-columns: 1fr; }
          }

          /* Page-template grid (2x2 icon cards) */
          .std-foundation-viz {
            background: var(--soft); border-radius: 16px; padding: 24px;
            display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 14px;
          }
          .std-foundation-card {
            background: #fff; border: 1px solid var(--border); border-radius: 12px;
            padding: 22px 14px; text-align: center;
          }
          .std-foundation-ico {
            width: 40px; height: 40px; border-radius: 10px; background: var(--gl); color: var(--g);
            display: flex; align-items: center; justify-content: center; margin: 0 auto 10px;
          }
          .std-foundation-card span { font-size: 12.5px; font-weight: 700; color: var(--ink2); line-height: 1.3; }

          /* Before/after two-box flow diagram */
          .std-migrate-viz {
            background: var(--soft); border-radius: 16px; padding: 32px 24px;
            display: flex; align-items: center; justify-content: center; gap: 14px;
          }
          .std-migrate-box {
            flex: 1; background: #fff; border: 1px solid var(--border); border-radius: 12px;
            padding: 22px 16px; text-align: center;
          }
          .std-migrate-box span { display: block; font-size: 12px; font-weight: 700; color: var(--ink4); text-transform: uppercase; letter-spacing: .03em; margin-bottom: 10px; }
          .std-migrate-box strong { font-size: 15px; color: var(--ink); }
          .std-migrate-arrow { color: var(--g); flex-shrink: 0; }

          /* Bar-chart-style diagram */
          .std-chart-viz { background: var(--soft); border-radius: 16px; padding: 32px 24px 20px; }
          .std-chart-bars { display: flex; align-items: flex-end; gap: 10px; height: 140px; margin-bottom: 12px; }
          .std-chart-bar { flex: 1; background: linear-gradient(180deg, #1ea672, #17845b); border-radius: 6px 6px 0 0; }
          .std-chart-labels { display: flex; gap: 10px; }
          .std-chart-labels span { flex: 1; text-align: center; font-size: 10.5px; color: var(--ink4); font-weight: 600; }
          .std-chart-tag {
            display: inline-flex; align-items: center; gap: 6px; margin-top: 14px;
            background: var(--gl); color: var(--gd); font-size: 12px; font-weight: 700;
            padding: 5px 12px; border-radius: 20px;
          }

          /* Before/after stat cards */
          .std-cost-viz { display: flex; align-items: center; gap: 14px; }
          .std-cost-card {
            flex: 1; background: #fff; border: 1px solid var(--border); border-radius: 14px;
            padding: 22px 18px; text-align: center;
          }
          .std-cost-card.after { border-color: var(--gm); background: var(--gl); }
          .std-cost-card span { display: block; font-size: 11.5px; font-weight: 700; color: var(--ink4); text-transform: uppercase; letter-spacing: .03em; margin-bottom: 10px; }
          .std-cost-num { font-size: 26px; font-weight: 800; color: var(--ink); margin-bottom: 4px; }
          .std-cost-card.after .std-cost-num { color: var(--gd); }
          .std-cost-sub { font-size: 12.5px; color: var(--ink4); }
          .std-cost-arrow { color: var(--g); flex-shrink: 0; }

          .std-included { background: var(--soft); padding: 72px 0; }
          .std-included-grid { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 18px 40px; max-width: 880px; margin: 0 auto; }
          .std-included-item { display: flex; align-items: flex-start; gap: 12px; font-size: 15px; color: var(--ink2); font-weight: 600; }
          .std-included-item svg { color: var(--g); flex-shrink: 0; margin-top: 2px; }
          @media(max-width:640px){ .std-included-grid { grid-template-columns: 1fr; } }

          .std-steps { padding: 72px 0 88px; }
          .std-steps-grid { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 32px; }
          .std-step { min-width: 0; }
          .std-step-num {
            width: 44px; height: 44px; border-radius: 50%;
            background: var(--gl); color: var(--gd); font-weight: 800; font-size: 15px;
            display: flex; align-items: center; justify-content: center; margin-bottom: 18px;
          }
          .std-step h3 { font-size: 17px; color: var(--ink); margin-bottom: 8px; }
          .std-step p { font-size: 14px; color: var(--ink3); line-height: 1.7; }
          @media(max-width:900px){ .std-steps-grid { grid-template-columns: 1fr; } }

          .std-bottom { text-align: center; padding: 64px 0 96px; }
          .std-bottom p { color: var(--ink3); font-size: 16px; margin-bottom: 24px; }
        `}</style>

        <section className="std-hero">
          <div className="wrap std-hero-grid">
            <div className="std-hero-left">
              <div className="section-tag">Shopify Theme Development</div>
              <h1 style={{ fontSize: 'clamp(32px,3.8vw,46px)' }}>Built around your brand,<br /><em style={{ color: 'var(--g)', fontStyle: 'normal' }}>not a generic template.</em></h1>
              <p className="section-sub">Custom, fast, conversion-focused themes designed and built specifically for your products and customers, not a page-builder template with your logo dropped on top.</p>
              <div className="std-btns">
                <Link href="/#contact" className="btn-primary">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                  Book a Free Call
                </Link>
                <Link href="/#cases" className="btn-ghost">See Case Studies →</Link>
              </div>
              <div className="std-proof">
                <span style={{ color: '#f5a623', fontSize: '15px', letterSpacing: '1px' }}>⭐⭐⭐⭐⭐</span>
                <span>5.0 · 752 reviews on Upwork</span>
              </div>
            </div>

            <div className="std-hero-card">
              <div className="std-hero-card-title">What you get</div>
              <ul>
                <li><CheckCircle2 size={21} strokeWidth={2} /> Fully custom design, not a theme store template</li>
                <li><CheckCircle2 size={21} strokeWidth={2} /> Built mobile-first and speed-optimized from day one</li>
                <li><CheckCircle2 size={21} strokeWidth={2} /> Conversion-focused product, cart & checkout flow</li>
                <li><CheckCircle2 size={21} strokeWidth={2} /> Clean, documented code your team can maintain</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="std-feature">
          <div className="wrap std-feature-grid">
            <div>
              <div className="std-feature-tag">Design & Brand Fit</div>
              <h2>A theme that looks like it was built for you, because it was.</h2>
              <p className="std-feature-sub">We design around your product photography, colors, and voice, not a template&apos;s built-in look.</p>
              <ul>
                <li><Palette size={17} /> Custom homepage & collection layouts</li>
                <li><Paintbrush size={17} /> On-brand typography & color system</li>
                <li><ShoppingBag size={17} /> Built around your actual product photography</li>
              </ul>
            </div>
            <div className="std-foundation-viz">
              {pageGrid.map((item) => (
                <div key={item.label} className="std-foundation-card">
                  <div className="std-foundation-ico"><item.icon size={19} /></div>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="std-feature std-feature-alt">
          <div className="wrap std-feature-grid">
            <div className="std-migrate-viz">
              <div className="std-migrate-box">
                <span>Common Approach</span>
                <strong>Desktop-First Template</strong>
              </div>
              <div className="std-migrate-arrow">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </div>
              <div className="std-migrate-box">
                <span>Our Approach</span>
                <strong>Mobile-First Build</strong>
              </div>
            </div>
            <div>
              <div className="std-feature-tag">Mobile-First Build</div>
              <h2>Built for the device most of your customers are shopping on.</h2>
              <p className="std-feature-sub">More than two-thirds of Shopify traffic is mobile, so we design and test there first, not as an afterthought.</p>
              <ul>
                <li><Smartphone size={17} /> Touch-friendly navigation & filtering</li>
                <li><Gauge size={17} /> Fast-loading images at every breakpoint</li>
                <li><MonitorSmartphone size={17} /> Tested on real devices, not just browser previews</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="std-feature">
          <div className="wrap std-feature-grid">
            <div>
              <div className="std-feature-tag">Conversion-Focused UX</div>
              <h2>Every step from product page to checkout, designed to reduce friction.</h2>
              <p className="std-feature-sub">Small UX details, like sticky add-to-cart and a streamlined checkout, add up to real revenue.</p>
              <ul>
                <li><ShoppingBag size={17} /> Sticky add-to-cart & upsell placement</li>
                <li><CheckCircle2 size={17} /> Clear shipping, returns & trust signals</li>
                <li><Layers size={17} /> Streamlined cart drawer & checkout flow</li>
              </ul>
            </div>
            <div className="std-cost-viz">
              <div className="std-cost-card">
                <span>Before</span>
                <div className="std-cost-num">1.2%</div>
                <div className="std-cost-sub">Avg. conversion rate</div>
              </div>
              <div className="std-cost-arrow">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </div>
              <div className="std-cost-card after">
                <span>After</span>
                <div className="std-cost-num">2.4%</div>
                <div className="std-cost-sub">Avg. conversion rate</div>
              </div>
            </div>
          </div>
        </section>

        <section className="std-feature std-feature-alt">
          <div className="wrap std-feature-grid">
            <div className="std-chart-viz">
              <div className="std-chart-bars">
                <div className="std-chart-bar" style={{ height: '92%' }} />
                <div className="std-chart-bar" style={{ height: '95%' }} />
                <div className="std-chart-bar" style={{ height: '90%' }} />
                <div className="std-chart-bar" style={{ height: '97%' }} />
              </div>
              <div className="std-chart-labels">
                <span>Performance</span>
                <span>Accessibility</span>
                <span>Best Practices</span>
                <span>SEO</span>
              </div>
              <span className="std-chart-tag"><Gauge size={13} /> 90+ Lighthouse score</span>
            </div>
            <div>
              <div className="std-feature-tag">Performance From Day One</div>
              <h2>Fast by default, not fixed later.</h2>
              <p className="std-feature-sub">We build lean from the start, with optimized images, minimal app bloat, and clean code, so speed isn&apos;t a separate project.</p>
              <ul>
                <li><Gauge size={17} /> Optimized image loading & lazy-load</li>
                <li><Code2 size={17} /> Minimal third-party script weight</li>
                <li><Layers size={17} /> Clean, efficient theme code</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="std-included">
          <div className="wrap">
            <div className="sh-row" style={{ textAlign: 'center', marginBottom: '40px' }}>
              <h2>What&apos;s <em style={{ color: 'var(--g)', fontStyle: 'normal' }}>included.</em></h2>
              <p className="section-sub" style={{ margin: '0 auto' }}>Everything needed to take your store from template-looking to genuinely custom.</p>
            </div>
            <div className="std-included-grid">
              {included.map((item) => (
                <div key={item} className="std-included-item">
                  <CheckCircle2 size={19} strokeWidth={2} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="std-steps">
          <div className="wrap">
            <div className="sh-row" style={{ textAlign: 'center', marginBottom: '48px' }}>
              <h2>How it <em style={{ color: 'var(--g)', fontStyle: 'normal' }}>works.</em></h2>
              <p className="section-sub" style={{ margin: '0 auto' }}>Three steps, start to finish.</p>
            </div>
            <div className="std-steps-grid">
              {steps.map((s) => (
                <div key={s.n} className="std-step">
                  <div className="std-step-num">{s.n}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="std-bottom">
          <p>Ready for a theme that&apos;s actually built for your store?</p>
          <Link href="/#contact" className="btn-primary">Book a Free Call →</Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
