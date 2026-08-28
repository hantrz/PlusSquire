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

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '68px' }}>
        <style>{`
          .svp-hero { background: var(--soft); padding: 72px 0 56px; text-align: center; }
          .svp-hero .section-sub { margin: 0 auto; }

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

        <section className="svp-hero">
          <div className="wrap">
            <div className="section-tag" style={{ justifyContent: 'center' }}>Services</div>
            <h1 style={{ fontSize: 'clamp(36px,4.5vw,56px)' }}>Full-stack Shopify <em style={{ color: 'var(--g)', fontStyle: 'normal' }}>&amp; email.</em></h1>
            <p className="section-sub">Everything under one roof: Shopify engineering, Klaviyo management, and email marketing.</p>
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
