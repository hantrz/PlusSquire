import Link from 'next/link'
import Navbar from '../components/Navbar'
import { Footer } from '../components/Sections'
import { ShoppingBag, RefreshCw, Gauge, Puzzle, Paintbrush, FileCode, Send, Zap, ClipboardList, Smartphone, Settings2, SearchCheck, Workflow } from 'lucide-react'

function ShopifyIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M15.337 23.979l7.216-1.561s-2.604-17.613-2.625-17.73c-.018-.116-.114-.192-.211-.192s-1.929-.136-1.929-.136-1.275-1.274-1.439-1.411c-.045-.037-.075-.057-.121-.074l-.914 21.104h.023zM11.71 11.305s-.81-.424-1.774-.424c-1.447 0-1.504.906-1.504 1.141 0 1.232 3.24 1.715 3.24 4.629 0 2.295-1.44 3.76-3.406 3.76-2.354 0-3.54-1.465-3.54-1.465l.646-2.086s1.245 1.066 2.28 1.066c.675 0 .975-.545.975-.932 0-1.619-2.654-1.694-2.654-4.359-.034-2.237 1.571-4.416 4.827-4.416 1.257 0 1.875.361 1.875.361l-.945 2.715-.02.01zM11.17.83c.136 0 .271.038.405.135-.984.465-2.064 1.639-2.508 3.992-.656.213-1.293.405-1.889.578C7.697 3.75 8.951.84 11.17.84V.83zm1.235 2.949v.135c-.754.232-1.583.484-2.394.736.466-1.777 1.333-2.645 2.085-2.971.193.501.309 1.176.309 2.1zm.539-2.234c.694.074 1.141.867 1.429 1.755-.349.114-.735.231-1.158.366v-.252c0-.752-.096-1.371-.271-1.871v.002zm2.992 1.289c-.02 0-.06.021-.078.021s-.289.075-.714.21c-.423-1.233-1.176-2.37-2.508-2.37h-.115C12.135.209 11.669 0 11.265 0 8.159 0 6.675 3.877 6.21 5.846c-1.194.365-2.063.636-2.16.674-.675.213-.694.232-.772.87-.075.462-1.83 14.063-1.83 14.063L15.009 24l.927-21.166z" />
    </svg>
  )
}

function KlaviyoIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size * (45.4 / 68)} viewBox="0 0 68 45.4" fill="currentColor" aria-hidden="true">
      <path d="M68,45.4 L0,45.4 L0,0 L68,0 L53.6,22.7 L68,45.4 Z" />
    </svg>
  )
}

const serviceCategories = [
  {
    id: 'shopify-engineering',
    label: 'Shopify Engineering',
    sub: 'Custom theme builds, migrations, speed optimization, and store functionality, engineered to convert.',
    icon: ShopifyIcon,
    items: [
      { icon: ShoppingBag,   title: 'Shopify Theme Development', desc: 'Custom, fast, conversion-focused themes built to your brand, not a generic template.', href: '/services/shopify-theme-development' },
      { icon: RefreshCw,     title: 'Shopify Migration',   desc: 'Moving from WooCommerce, BigCommerce, or another platform: clean, no data loss, no downtime.', href: '/services/shopify-migration' },
      { icon: Gauge,         title: 'Shopify Speed Optimization', desc: 'Faster load times, better Core Web Vitals, fewer abandoned carts.',                    href: '/services/shopify-speed-optimization' },
      { icon: Puzzle,        title: 'Shopify App & Custom Features', desc: "Custom sections, app integrations, and store functionality your theme doesn't come with.", href: '/services/shopify-custom-features' },
    ],
  },
  {
    id: 'klaviyo-management',
    label: 'Klaviyo Management',
    sub: 'Full-account setup, flow builds, audits, and forms, engineered to turn your list into revenue.',
    icon: KlaviyoIcon,
    items: [
      { icon: Settings2,     title: 'Klaviyo Setup',      desc: 'Full platform onboarding: list migration, integrations, DNS, and flow architecture.',                href: '/services/klaviyo-setup' },
      { icon: Workflow,      title: 'Flow Setup',         desc: 'Custom Klaviyo flow builds: welcome series, abandoned cart, post-purchase, and win-back sequences engineered for revenue.', href: '/services/flow-setup' },
      { icon: SearchCheck,   title: 'Account Audit',      desc: 'Comprehensive review of your email program with a prioritised action plan.',                          href: '/services/account-audit' },
      { icon: ClipboardList, title: 'Sign-Up Forms',      desc: 'High-converting pop-ups and embedded forms integrated with your platform.',                           href: '/services/sign-up-forms' },
      { icon: Smartphone,    title: 'SMS Campaigns',      desc: 'SMS flows that drive urgency and recover lost revenue alongside your email program.',                 href: '/services/sms-campaigns' },
    ],
  },
  {
    id: 'email-marketing',
    label: 'Email Marketing',
    sub: 'Design, development, campaigns, and automations, built to look perfect everywhere and convert.',
    icon: Send,
    items: [
      { icon: Paintbrush,    title: 'Email Design',       desc: 'Pixel-perfect, on-brand designs that stop the scroll. From first impression to repeat purchase.',   href: '/services/email-design' },
      { icon: FileCode,      title: 'Email Development',  desc: 'Clean HTML/CSS that renders perfectly in Gmail, Outlook, Apple Mail, and beyond.',                   href: '/services/email-development' },
      { icon: Send,          title: 'Email Campaigns',    desc: 'Strategy, copy, design, and deployment for campaigns that drive opens, clicks and revenue.',        href: '/services/email-campaigns' },
      { icon: Zap,           title: 'Email Automations',  desc: 'Welcome, abandoned cart, post-purchase, win-back: set up once, earn revenue on autopilot.',         href: '/services/email-automations' },
    ],
  },
]

// The 10 services framed around the hero's radial diagram: 2 across the
// top, 3 down the right, 2 across the bottom, 3 down the left. Each side
// shares one fixed x (columns) or y (rows) coordinate so the boxes line up
// in a straight, evenly-spaced edge instead of zig-zagging.
const svphNodes = [
  { title: 'Shopify Theme Development',      icon: ShoppingBag,   href: '#shopify-engineering', x: 34, y: 11 },
  { title: 'Shopify Migration',              icon: RefreshCw,     href: '#shopify-engineering', x: 66, y: 11 },
  { title: 'Shopify Speed Optimization',      icon: Gauge,         href: '#shopify-engineering', x: 86, y: 30 },
  { title: 'Shopify App & Custom Features',   icon: Puzzle,        href: '#shopify-engineering', x: 86, y: 50 },
  { title: 'Klaviyo Account Setup & Audit',   icon: Settings2,     href: '#klaviyo-management',  x: 86, y: 70 },
  { title: 'Flow Setup',                      icon: Workflow,      href: '#klaviyo-management',  x: 66, y: 89 },
  { title: 'Sign-Up Forms',                   icon: ClipboardList, href: '#klaviyo-management',  x: 34, y: 89 },
  { title: 'SMS Campaigns',                   icon: Smartphone,    href: '#klaviyo-management',  x: 14, y: 70 },
  { title: 'Email Campaigns',                 icon: Send,          href: '#email-marketing',     x: 14, y: 50 },
  { title: 'Email Design & Development',      icon: Paintbrush,    href: '#email-marketing',     x: 14, y: 30 },
]

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '68px' }}>
        <style>{`
          /* Services hero — same composition as the homepage hero: headline
             + CTAs on the left, a visual on the right. Here the visual is a
             radial diagram of services orbiting a central "everything under
             one roof" hub instead of the storefront/email mockup. */
          .svph-hero {
            padding: 64px 0 76px;
            background:
              radial-gradient(ellipse at top left, rgba(30, 166, 114, 0.14) 0%, transparent 60%),
              radial-gradient(ellipse at bottom right, rgba(30, 166, 114, 0.14) 0%, transparent 60%),
              #ffffff;
            overflow: hidden; position: relative;
          }
          .svph-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: center; }
          .svph-left .section-tag::before { display: none; }
          .svph-left h1 { margin-bottom: 18px; }
          .svph-left .section-sub { margin-bottom: 32px; max-width: 480px; }
          .svph-btns { display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 28px; }
          .svph-proof { display: flex; align-items: center; gap: 6px; font-size: 13px; color: var(--ink3); }

          /* Radial diagram */
          .svph-visual { position: relative; width: 100%; max-width: 720px; aspect-ratio: 1 / 1; margin: 0 auto; }
          .svph-lines { position: absolute; inset: 0; width: 100%; height: 100%; }
          .svph-hub {
            position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%);
            width: 27%; aspect-ratio: 1 / 1; border-radius: 50%;
            background: linear-gradient(135deg, #1ea672, #17845b);
            color: #fff; display: flex; flex-direction: column; align-items: center; justify-content: center;
            text-align: center; gap: 4px; z-index: 2; padding: 8px;
            box-shadow: 0 20px 50px rgba(30,166,114,.32);
          }
          .svph-hub strong { font-size: 12px; font-weight: 800; letter-spacing: .03em; text-transform: uppercase; }
          .svph-hub p { font-size: 10px; opacity: .85; line-height: 1.35; max-width: 90px; }
          .svph-hub-tags { display: flex; gap: 5px; margin-top: 6px; }
          .svph-hub-tags span { background: rgba(255,255,255,.2); padding: 2px 8px; border-radius: 20px; font-size: 9px; font-weight: 700; }

          /* Nodes are real links now — hovering pops them forward so it
             reads as clickable, not just decorative */
          .svph-node {
            position: absolute; transform: translate(-50%,-50%) scale(1);
            width: 27%; min-width: 155px;
            background: #fff; border: 1px solid var(--border); border-radius: 12px;
            padding: 14px 10px; text-align: center; text-decoration: none;
            box-shadow: 0 8px 22px rgba(15,22,35,.06);
            z-index: 2; cursor: pointer;
            transition: transform .25s cubic-bezier(.34,1.56,.64,1), box-shadow .25s ease, border-color .25s ease;
          }
          .svph-node:hover {
            transform: translate(-50%,-50%) scale(1.1) rotate(-10deg);
            box-shadow: 0 16px 34px rgba(30,166,114,.22);
            border-color: var(--gm);
            z-index: 3;
          }
          .svph-node-ico {
            width: 30px; height: 30px; border-radius: 8px; background: var(--gl); color: var(--g);
            display: flex; align-items: center; justify-content: center; margin: 0 auto 6px;
            transition: background .25s ease, color .25s ease;
          }
          .svph-node:hover .svph-node-ico { background: var(--g); color: #fff; }
          .svph-node span { font-size: 11px; font-weight: 700; color: var(--ink); line-height: 1.12; display: block; }

          @media(max-width:1100px){
            .svph-grid { grid-template-columns: 1fr; }
            .svph-visual { display: none; }
          }

          .svp-category { padding: 72px 0; scroll-margin-top: 96px; border-bottom: 1px solid var(--border); }
          .svp-category:last-of-type { border-bottom: none; }

          .svp-cat-head { display: flex; align-items: center; gap: 18px; margin-bottom: 10px; }
          .svp-cat-icon {
            width: 56px; height: 56px; border-radius: 14px;
            background: var(--gl); color: var(--g);
            display: flex; align-items: center; justify-content: center;
            flex-shrink: 0;
          }
          .svp-cat-title { font-size: clamp(24px, 2.6vw, 32px); font-weight: 800; color: var(--ink); margin: 0; }
          .svp-cat-sub { color: var(--ink3); font-size: 15.5px; line-height: 1.75; max-width: 640px; margin: 0 0 36px; }

          .svp-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }

          .svp-card {
            background: #fff; border: 1px solid var(--border); border-radius: 14px;
            padding: 30px 26px; transition: box-shadow .22s, transform .22s;
          }
          .svp-card:hover { box-shadow: 0 10px 32px rgba(0,0,0,.07); transform: translateY(-3px); }
          .svp-ico {
            width: 44px; height: 44px; background: var(--gl); color: var(--g);
            border-radius: 10px; display: flex; align-items: center; justify-content: center;
            margin-bottom: 18px;
          }
          .svp-card h3 { font-size: 16px; margin-bottom: 8px; color: var(--ink); }
          .svp-card p { color: var(--ink3); font-size: 13.5px; line-height: 1.7; }

          .svp-bottom { text-align: center; padding: 64px 0 96px; }
          .svp-bottom p { color: var(--ink3); font-size: 16px; margin-bottom: 24px; }

          @media(max-width:1100px){ .svp-grid { grid-template-columns: repeat(2, 1fr); } }
          @media(max-width:640px){ .svp-grid { grid-template-columns: 1fr; } }
        `}</style>

        <section className="svph-hero">
          <div className="wrap svph-grid">
            <div className="svph-left">
              <div className="section-tag">Our Services</div>
              <h1 style={{ fontSize: 'clamp(36px,4.2vw,52px)' }}>Full-stack Shopify <br />&amp; email, <em style={{ color: 'var(--g)', fontStyle: 'normal' }}>under one roof.</em></h1>
              <p className="section-sub">Everything under one roof: Shopify engineering, Klaviyo management, and email marketing.</p>
              <div className="svph-btns">
                <Link href="/#contact" className="btn-primary">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                  Start a Project
                </Link>
                <Link href="#shopify-engineering" className="btn-ghost">See All Services →</Link>
              </div>
              <div className="svph-proof">
                <span style={{ color: '#f5a623', fontSize: '15px', letterSpacing: '1px' }}>⭐⭐⭐⭐⭐</span>
                <span>5.0 · 752 reviews on Upwork</span>
              </div>
            </div>

            <div className="svph-visual">
              <svg className="svph-lines" viewBox="0 0 100 100">
                {svphNodes.map((n) => (
                  <line key={n.title} x1="50" y1="50" x2={n.x} y2={n.y} style={{ stroke: '#d9e6e0' }} strokeWidth="0.7" />
                ))}
              </svg>

              <div className="svph-hub">
                <strong>Everything</strong>
                <p>Managed by PlusSquire</p>
                <div className="svph-hub-tags"><span>Shopify</span><span>Email</span></div>
              </div>

              {svphNodes.map((n) => (
                <Link
                  key={n.title}
                  href={n.href}
                  className="svph-node"
                  style={{ top: `${n.y}%`, left: `${n.x}%` }}
                >
                  <div className="svph-node-ico"><n.icon size={16} strokeWidth={1.75} /></div>
                  <span>{n.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {serviceCategories.map((cat) => (
          <section key={cat.id} id={cat.id} className="svp-category">
            <div className="wrap">
              <div className="svp-cat-head">
                <div className="svp-cat-icon"><cat.icon size={26} /></div>
                <h2 className="svp-cat-title">{cat.label}</h2>
              </div>
              <p className="svp-cat-sub">{cat.sub}</p>
              <div className="svp-grid">
                {cat.items.map((s) => (
                  <div key={s.href} className="svp-card">
                    <div className="svp-ico"><s.icon size={20} strokeWidth={1.75} /></div>
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        <div className="svp-bottom">
          <p>Not sure where to start? Let&apos;s talk about what your store and your list need.</p>
          <Link href="/#contact" className="btn-primary">Book a Free Call →</Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
