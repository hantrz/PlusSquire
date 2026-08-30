import Link from 'next/link'
import Navbar from '../../components/Navbar'
import { Footer } from '../../components/Sections'
import {
  CheckCircle2, RefreshCw, ShoppingBag, Users, PackageCheck,
  Star, Link2, Search, ShieldCheck, Layout, ArrowRightLeft, Wrench,
} from 'lucide-react'

const migrationNodes = [
  { icon: PackageCheck, label: 'Products',   x: 50, y: 8 },
  { icon: Users,        label: 'Customers',  x: 89, y: 35 },
  { icon: ShoppingBag,  label: 'Orders',     x: 74, y: 88 },
  { icon: Star,         label: 'Reviews',    x: 26, y: 88 },
  { icon: Search,       label: 'SEO URLs',   x: 11, y: 35 },
]

const rebuildGrid = [
  { icon: Layout,      label: 'Homepage' },
  { icon: ShoppingBag, label: 'Product Pages' },
  { icon: Link2,       label: 'Navigation' },
  { icon: ShieldCheck, label: 'Checkout' },
]

const included = [
  'Full product, variant & collection migration',
  'Customer account & order history migration',
  '301 redirect mapping for SEO continuity',
  'Theme build matching or upgrading your current design',
  'App & integration reconnection',
  'Staging preview before go-live',
  'Zero-downtime cutover plan',
  '30 days of post-launch support',
]

const steps = [
  { n: '01', title: 'Audit & Map', desc: 'We review your current store and map every product, page, and URL that needs to move, before touching anything live.' },
  { n: '02', title: 'Migrate & Build', desc: 'Data is migrated into Shopify and the theme is built or upgraded, with integrations reconnected on a staging environment.' },
  { n: '03', title: 'Launch & Support', desc: 'A scheduled cutover, redirect verification, and hands-on support through your first weeks live.' },
]

export default function ShopifyMigrationPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '68px' }}>
        <style>{`
          .smg-hero {
            padding: 64px 0 76px;
            background:
              radial-gradient(ellipse at top left, rgba(30, 166, 114, 0.14) 0%, transparent 60%),
              radial-gradient(ellipse at bottom right, rgba(30, 166, 114, 0.14) 0%, transparent 60%),
              #ffffff;
            overflow: hidden; position: relative;
          }
          .smg-hero-grid { display: grid; grid-template-columns: minmax(0,1fr) minmax(0,1fr); gap: 48px; align-items: center; }
          .smg-hero-left .section-tag::before { display: none; }
          .smg-hero-left h1 { margin-bottom: 18px; }
          .smg-hero-left .section-sub { margin-bottom: 32px; max-width: 480px; }
          .smg-btns { display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 28px; }
          .smg-proof { display: flex; align-items: center; gap: 6px; font-size: 13px; color: var(--ink3); }

          .smg-hero-card {
            background: #fff; border: 1px solid var(--border); border-radius: 20px;
            padding: 40px 38px; box-shadow: 0 28px 70px rgba(15,22,35,.09);
            max-width: 480px; width: 100%; margin: 0 auto;
          }
          .smg-hero-card-title { font-size: 14px; font-weight: 800; text-transform: uppercase; letter-spacing: .04em; color: var(--g); margin-bottom: 22px; }
          .smg-hero-card ul { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 20px; }
          .smg-hero-card li { display: flex; align-items: flex-start; gap: 12px; font-size: 15.5px; color: var(--ink2); line-height: 1.5; }
          .smg-hero-card li svg { color: var(--g); flex-shrink: 0; margin-top: 2px; }

          @media(max-width:1000px){
            .smg-hero-grid { grid-template-columns: 1fr; }
            .smg-hero-card { max-width: 520px; }
          }

          .smg-feature { padding: 72px 0; }
          .smg-feature-alt { background: var(--soft); }
          .smg-feature-alt .smg-migrate-viz,
          .smg-feature-alt .smg-chart-viz,
          .smg-feature-alt .smg-foundation-viz { background: #fff; }
          .smg-feature-grid { display: grid; grid-template-columns: minmax(0,1fr) minmax(0,1fr); gap: 56px; align-items: center; }
          .smg-feature-tag { font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: .05em; color: var(--g); margin-bottom: 12px; }
          .smg-feature h2 { font-size: clamp(24px, 2.4vw, 30px); color: var(--ink); margin-bottom: 14px; }
          .smg-feature-sub { color: var(--ink3); font-size: 15.5px; line-height: 1.75; margin-bottom: 22px; max-width: 460px; }
          .smg-feature ul { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 14px; }
          .smg-feature li { display: flex; align-items: flex-start; gap: 10px; font-size: 14.5px; color: var(--ink2); line-height: 1.55; max-width: 440px; }
          .smg-feature li svg { color: var(--g); flex-shrink: 0; margin-top: 2px; }

          @media(max-width:900px){
            .smg-feature-grid { grid-template-columns: 1fr; }
          }

          /* Old platform -> Shopify flow diagram */
          .smg-migrate-viz {
            background: var(--soft); border-radius: 16px; padding: 32px 24px;
            display: flex; align-items: center; justify-content: center; gap: 14px;
          }
          .smg-migrate-box {
            flex: 1; background: #fff; border: 1px solid var(--border); border-radius: 12px;
            padding: 22px 16px; text-align: center;
          }
          .smg-migrate-box span { display: block; font-size: 12px; font-weight: 700; color: var(--ink4); text-transform: uppercase; letter-spacing: .03em; margin-bottom: 10px; }
          .smg-migrate-box strong { font-size: 15px; color: var(--ink); }
          .smg-migrate-arrow { color: var(--g); flex-shrink: 0; }

          /* Rebuild grid (2x2 icon cards) */
          .smg-foundation-viz {
            background: var(--soft); border-radius: 16px; padding: 24px;
            display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 14px;
          }
          .smg-foundation-card {
            background: #fff; border: 1px solid var(--border); border-radius: 12px;
            padding: 22px 14px; text-align: center;
          }
          .smg-foundation-ico {
            width: 40px; height: 40px; border-radius: 10px; background: var(--gl); color: var(--g);
            display: flex; align-items: center; justify-content: center; margin: 0 auto 10px;
          }
          .smg-foundation-card span { font-size: 12.5px; font-weight: 700; color: var(--ink2); line-height: 1.3; }

          /* Hub-spoke: everything that migrates */
          .smg-hub-viz { position: relative; width: 100%; max-width: 340px; aspect-ratio: 1/1; margin: 0 auto; }
          .smg-hub-lines { position: absolute; inset: 0; width: 100%; height: 100%; }
          .smg-hub-center {
            position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%);
            width: 34%; aspect-ratio: 1/1; border-radius: 50%;
            background: linear-gradient(135deg, #1ea672, #17845b); color: #fff;
            display: flex; align-items: center; justify-content: center;
            font-size: 12.5px; font-weight: 800; letter-spacing: .02em; text-align: center;
            box-shadow: 0 16px 40px rgba(30,166,114,.3); z-index: 2; padding: 6px;
          }
          .smg-hub-node {
            position: absolute; transform: translate(-50%,-50%);
            width: 30%; display: flex; flex-direction: column; align-items: center; gap: 6px; z-index: 2;
          }
          .smg-hub-node-ico {
            width: 38px; height: 38px; border-radius: 10px; background: #fff; border: 1px solid var(--border);
            color: var(--g); display: flex; align-items: center; justify-content: center;
            box-shadow: 0 6px 16px rgba(15,22,35,.06);
          }
          .smg-hub-node span { font-size: 10.5px; font-weight: 700; color: var(--ink3); }

          /* Bar-chart diagram: traffic / rankings retained */
          .smg-chart-viz { background: var(--soft); border-radius: 16px; padding: 32px 24px 20px; }
          .smg-chart-bars { display: flex; align-items: flex-end; gap: 10px; height: 140px; margin-bottom: 12px; }
          .smg-chart-bar { flex: 1; background: linear-gradient(180deg, #1ea672, #17845b); border-radius: 6px 6px 0 0; }
          .smg-chart-labels { display: flex; gap: 10px; }
          .smg-chart-labels span { flex: 1; text-align: center; font-size: 10.5px; color: var(--ink4); font-weight: 600; }
          .smg-chart-tag {
            display: inline-flex; align-items: center; gap: 6px; margin-top: 14px;
            background: var(--gl); color: var(--gd); font-size: 12px; font-weight: 700;
            padding: 5px 12px; border-radius: 20px;
          }

          .smg-included { background: var(--soft); padding: 72px 0; }
          .smg-included-grid { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 18px 40px; max-width: 880px; margin: 0 auto; }
          .smg-included-item { display: flex; align-items: flex-start; gap: 12px; font-size: 15px; color: var(--ink2); font-weight: 600; }
          .smg-included-item svg { color: var(--g); flex-shrink: 0; margin-top: 2px; }
          @media(max-width:640px){ .smg-included-grid { grid-template-columns: 1fr; } }

          .smg-steps { padding: 72px 0 88px; }
          .smg-steps-grid { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 32px; }
          .smg-step { min-width: 0; }
          .smg-step-num {
            width: 44px; height: 44px; border-radius: 50%;
            background: var(--gl); color: var(--gd); font-weight: 800; font-size: 15px;
            display: flex; align-items: center; justify-content: center; margin-bottom: 18px;
          }
          .smg-step h3 { font-size: 17px; color: var(--ink); margin-bottom: 8px; }
          .smg-step p { font-size: 14px; color: var(--ink3); line-height: 1.7; }
          @media(max-width:900px){ .smg-steps-grid { grid-template-columns: 1fr; } }

          .smg-bottom { text-align: center; padding: 64px 0 96px; }
          .smg-bottom p { color: var(--ink3); font-size: 16px; margin-bottom: 24px; }
        `}</style>

        <section className="smg-hero">
          <div className="wrap smg-hero-grid">
            <div className="smg-hero-left">
              <div className="section-tag">Shopify Migration</div>
              <h1 style={{ fontSize: 'clamp(32px,3.8vw,46px)' }}>Move to Shopify<br /><em style={{ color: 'var(--g)', fontStyle: 'normal' }}>without losing a single order.</em></h1>
              <p className="section-sub">Migrating from WooCommerce, BigCommerce, or another platform: clean data, no downtime, and a design that&apos;s ready to sell from launch day.</p>
              <div className="smg-btns">
                <Link href="/#contact" className="btn-primary">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                  Book a Free Call
                </Link>
                <Link href="/#cases" className="btn-ghost">See Case Studies →</Link>
              </div>
              <div className="smg-proof">
                <span style={{ color: '#f5a623', fontSize: '15px', letterSpacing: '1px' }}>⭐⭐⭐⭐⭐</span>
                <span>5.0 · 752 reviews on Upwork</span>
              </div>
            </div>

            <div className="smg-hero-card">
              <div className="smg-hero-card-title">What you get</div>
              <ul>
                <li><CheckCircle2 size={21} strokeWidth={2} /> Every product, customer & order migrated accurately</li>
                <li><CheckCircle2 size={21} strokeWidth={2} /> SEO rankings protected with proper redirects</li>
                <li><CheckCircle2 size={21} strokeWidth={2} /> Zero downtime during cutover</li>
                <li><CheckCircle2 size={21} strokeWidth={2} /> Full post-launch support included</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="smg-feature">
          <div className="wrap smg-feature-grid">
            <div>
              <div className="smg-feature-tag">Zero-Downtime Cutover</div>
              <h2>Launch day, without the disruption.</h2>
              <p className="smg-feature-sub">We plan the cutover so your store keeps taking orders right up until the new site goes live.</p>
              <ul>
                <li><RefreshCw size={17} /> Cutover scheduled around your traffic patterns</li>
                <li><ShieldCheck size={17} /> Old store stays live until Shopify is ready</li>
                <li><Link2 size={17} /> DNS & domain switch handled for you</li>
              </ul>
            </div>
            <div className="smg-migrate-viz">
              <div className="smg-migrate-box">
                <span>Currently On</span>
                <strong>Old Platform</strong>
              </div>
              <div className="smg-migrate-arrow">
                <ArrowRightLeft size={26} />
              </div>
              <div className="smg-migrate-box">
                <span>Moving To</span>
                <strong>Shopify</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="smg-feature smg-feature-alt">
          <div className="wrap smg-feature-grid">
            <div className="smg-hub-viz">
              <svg className="smg-hub-lines" viewBox="0 0 100 100" preserveAspectRatio="none">
                {migrationNodes.map((n) => (
                  <line key={n.label} x1="50" y1="50" x2={n.x} y2={n.y} stroke="var(--gm)" strokeWidth="1" />
                ))}
              </svg>
              <div className="smg-hub-center">Shopify</div>
              {migrationNodes.map((n) => (
                <div key={n.label} className="smg-hub-node" style={{ left: `${n.x}%`, top: `${n.y}%` }}>
                  <div className="smg-hub-node-ico"><n.icon size={18} /></div>
                  <span>{n.label}</span>
                </div>
              ))}
            </div>
            <div>
              <div className="smg-feature-tag">Full Data Migration</div>
              <h2>Every product, order, and customer, moved accurately.</h2>
              <p className="smg-feature-sub">We migrate your full catalog and historical data, not just whatever fits easily.</p>
              <ul>
                <li><PackageCheck size={17} /> Products, variants & collections</li>
                <li><Users size={17} /> Customer accounts & order history</li>
                <li><Star size={17} /> Reviews & metafields where supported</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="smg-feature">
          <div className="wrap smg-feature-grid">
            <div>
              <div className="smg-feature-tag">Design Parity Or Upgrade</div>
              <h2>Keep what works, or use the move to upgrade.</h2>
              <p className="smg-feature-sub">We can rebuild your current design on Shopify, or use the migration as a chance to modernize it.</p>
              <ul>
                <li><Layout size={17} /> Match your existing look & feel, or redesign</li>
                <li><ShoppingBag size={17} /> Improved navigation & mobile experience</li>
                <li><Wrench size={17} /> Built on a theme structure that&apos;s easy to grow</li>
              </ul>
            </div>
            <div className="smg-foundation-viz">
              {rebuildGrid.map((item) => (
                <div key={item.label} className="smg-foundation-card">
                  <div className="smg-foundation-ico"><item.icon size={19} /></div>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="smg-feature smg-feature-alt">
          <div className="wrap smg-feature-grid">
            <div className="smg-chart-viz">
              <div className="smg-chart-bars">
                <div className="smg-chart-bar" style={{ height: '94%' }} />
                <div className="smg-chart-bar" style={{ height: '96%' }} />
                <div className="smg-chart-bar" style={{ height: '95%' }} />
                <div className="smg-chart-bar" style={{ height: '97%' }} />
              </div>
              <div className="smg-chart-labels">
                <span>Week 1</span>
                <span>Week 2</span>
                <span>Week 3</span>
                <span>Week 4</span>
              </div>
              <span className="smg-chart-tag"><ShieldCheck size={13} /> Rankings & traffic protected</span>
            </div>
            <div>
              <div className="smg-feature-tag">Post-Launch Support</div>
              <h2>We stay through launch week and beyond.</h2>
              <p className="smg-feature-sub">Migrations can surface small issues after go-live, and we&apos;re on call to fix them fast.</p>
              <ul>
                <li><ShieldCheck size={17} /> Priority support for the first 30 days</li>
                <li><Search size={17} /> SEO redirect monitoring</li>
                <li><Wrench size={17} /> Bug fixes & adjustments as they come up</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="smg-included">
          <div className="wrap">
            <div className="sh-row" style={{ textAlign: 'center', marginBottom: '40px' }}>
              <h2>What&apos;s <em style={{ color: 'var(--g)', fontStyle: 'normal' }}>included.</em></h2>
              <p className="section-sub" style={{ margin: '0 auto' }}>Everything needed for a clean, complete move to Shopify.</p>
            </div>
            <div className="smg-included-grid">
              {included.map((item) => (
                <div key={item} className="smg-included-item">
                  <CheckCircle2 size={19} strokeWidth={2} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="smg-steps">
          <div className="wrap">
            <div className="sh-row" style={{ textAlign: 'center', marginBottom: '48px' }}>
              <h2>How it <em style={{ color: 'var(--g)', fontStyle: 'normal' }}>works.</em></h2>
              <p className="section-sub" style={{ margin: '0 auto' }}>Three steps, start to finish.</p>
            </div>
            <div className="smg-steps-grid">
              {steps.map((s) => (
                <div key={s.n} className="smg-step">
                  <div className="smg-step-num">{s.n}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="smg-bottom">
          <p>Ready to move to Shopify without the risk?</p>
          <Link href="/#contact" className="btn-primary">Book a Free Call →</Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
