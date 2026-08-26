import Link from 'next/link'
import { ShoppingBag, RefreshCw, Gauge, Puzzle, Paintbrush, FileCode, Send, Zap, ClipboardList, Smartphone, Settings2, SearchCheck } from 'lucide-react'

const services = [
  { icon: ShoppingBag,   title: 'Shopify Theme Development', desc: 'Custom, fast, conversion-focused themes built to your brand — not a generic template.', href: '/services/shopify-theme-development' },
  { icon: RefreshCw,     title: 'Shopify Migration',   desc: 'Moving from WooCommerce, BigCommerce, or another platform — clean, no data loss, no downtime.', href: '/services/shopify-migration' },
  { icon: Gauge,         title: 'Shopify Speed Optimization', desc: 'Faster load times, better Core Web Vitals, fewer abandoned carts.',                    href: '/services/shopify-speed-optimization' },
  { icon: Puzzle,        title: 'Shopify App & Custom Features', desc: "Custom sections, app integrations, and store functionality your theme doesn't come with.", href: '/services/shopify-custom-features' },
  { icon: Paintbrush,    title: 'Email Design',       desc: 'Pixel-perfect, on-brand designs that stop the scroll. From first impression to repeat purchase.',   href: '/services/email-design' },
  { icon: FileCode,      title: 'Email Development',  desc: 'Clean HTML/CSS that renders perfectly in Gmail, Outlook, Apple Mail, and beyond.',                   href: '/services/email-development' },
  { icon: Send,          title: 'Email Campaigns',    desc: 'Strategy, copy, design, and deployment for campaigns that drive opens, clicks and revenue.',        href: '/services/email-campaigns' },
  { icon: Zap,           title: 'Email Automations',  desc: 'Welcome, abandoned cart, post-purchase, win-back — set up once, earn revenue on autopilot.',         href: '/services/email-automations' },
  { icon: ClipboardList, title: 'Sign-Up Forms',      desc: 'High-converting pop-ups and embedded forms integrated with your platform.',                           href: '/services/sign-up-forms' },
  { icon: Smartphone,    title: 'SMS Campaigns',      desc: 'SMS flows that drive urgency and recover lost revenue alongside your email program.',                 href: '/services/sms-campaigns' },
  { icon: Settings2,     title: 'Klaviyo Set-Up',     desc: 'Full platform onboarding — list migration, integrations, DNS, and flow architecture.',                href: '/services/klaviyo-setup' },
  { icon: SearchCheck,   title: 'Account Audit',      desc: 'Comprehensive review of your email program with a prioritised action plan.',                          href: '/services/account-audit' },
]

export default function Services() {
  return (
    <>
      <style>{`
        .services { background: var(--soft); padding: 96px 0; }

        /* Grid: separate cards with visible gaps */
        .svc-grid {
          display: grid; grid-template-columns: repeat(4,1fr);
          gap: 20px;
        }

        /* Cards */
        .svc-card {
          position: relative; overflow: hidden;
          background: #fff; padding: 34px 28px;
          border: 1px solid var(--border); border-radius: 14px;
          cursor: pointer; transition: all 0.3s ease;
          text-decoration: none; display: block;
        }
        /* Animated green top border bar */
        .svc-card::before {
          content: ''; position: absolute; top: 0; left: 0;
          height: 3px; width: 0%; background: var(--g);
          transition: width 0.4s ease-in-out;
        }
        .svc-card:hover::before { width: 100%; }
        .svc-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 30px rgba(30, 166, 114, 0.2);
          background: #f8fefb;
        }

        .svc-ico {
          width: 44px; height: 44px; background: var(--gl);
          border-radius: 10px; display: flex; align-items: center;
          justify-content: center; font-size: 19px; margin-bottom: 18px; color: var(--g);
        }
        .svc-card h3 { font-size: 15.5px; margin-bottom: 8px; color: var(--ink); }
        .svc-card p { color: var(--ink3); font-size: 13px; line-height: 1.7; }
        .svc-arr { margin-top: 18px; color: var(--g); font-size: 16px; display: inline-block; transition: transform .18s; }
        .svc-card:hover .svc-arr { transform: translateX(5px); }

        /* Bottom CTA */
        .svc-cta { text-align: center; margin-top: 40px; }

        @media(max-width:1100px){ .svc-grid { grid-template-columns: repeat(2,1fr); } }
        @media(max-width:480px){ .svc-grid { grid-template-columns: 1fr; } }
      `}</style>

      <section className="services" id="services">
        <div className="wrap">
          <div className="sh-row">
            <h2>Full-stack Shopify <br />&amp; email, <em>under one roof.</em></h2>
            <p className="section-sub">From Shopify builds to email flows — every layer, fully covered.</p>
          </div>
          <div className="svc-grid">
            {services.map((s) => (
              <Link key={s.href} href={s.href} className="svc-card">
                <div className="svc-ico"><s.icon size={20} strokeWidth={1.75} /></div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <div className="svc-arr">→</div>
              </Link>
            ))}
          </div>
          <div className="svc-cta">
            <Link href="/services" className="link-more">All Services →</Link>
          </div>
        </div>
      </section>
    </>
  )
}
