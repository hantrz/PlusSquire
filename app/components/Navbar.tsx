'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

import { Send, Zap, Wrench, Handshake } from 'lucide-react'

function ShopifyIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M15.337 23.979l7.216-1.561s-2.604-17.613-2.625-17.73c-.018-.116-.114-.192-.211-.192s-1.929-.136-1.929-.136-1.275-1.274-1.439-1.411c-.045-.037-.075-.057-.121-.074l-.914 21.104h.023zM11.71 11.305s-.81-.424-1.774-.424c-1.447 0-1.504.906-1.504 1.141 0 1.232 3.24 1.715 3.24 4.629 0 2.295-1.44 3.76-3.406 3.76-2.354 0-3.54-1.465-3.54-1.465l.646-2.086s1.245 1.066 2.28 1.066c.675 0 .975-.545.975-.932 0-1.619-2.654-1.694-2.654-4.359-.034-2.237 1.571-4.416 4.827-4.416 1.257 0 1.875.361 1.875.361l-.945 2.715-.02.01zM11.17.83c.136 0 .271.038.405.135-.984.465-2.064 1.639-2.508 3.992-.656.213-1.293.405-1.889.578C7.697 3.75 8.951.84 11.17.84V.83zm1.235 2.949v.135c-.754.232-1.583.484-2.394.736.466-1.777 1.333-2.645 2.085-2.971.193.501.309 1.176.309 2.1zm.539-2.234c.694.074 1.141.867 1.429 1.755-.349.114-.735.231-1.158.366v-.252c0-.752-.096-1.371-.271-1.871v.002zm2.992 1.289c-.02 0-.06.021-.078.021s-.289.075-.714.21c-.423-1.233-1.176-2.37-2.508-2.37h-.115C12.135.209 11.669 0 11.265 0 8.159 0 6.675 3.877 6.21 5.846c-1.194.365-2.063.636-2.16.674-.675.213-.694.232-.772.87-.075.462-1.83 14.063-1.83 14.063L15.009 24l.927-21.166z" />
    </svg>
  )
}

function KlaviyoIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size * (45.4 / 68)} viewBox="0 0 68 45.4" fill="currentColor" aria-hidden="true">
      <path d="M68,45.4 L0,45.4 L0,0 L68,0 L53.6,22.7 L68,45.4 Z" />
    </svg>
  )
}

type MegaMenuItem = {
  icon: React.ReactNode
  label: string
  sub?: string
  href: string
}

type MegaColumn = {
  heading: string
  icon: React.ComponentType<{ size?: number }>
  items: MegaMenuItem[]
}

const megaMenuColumns: MegaColumn[] = [
  {
    heading: 'KLAVIYO MANAGEMENT',
    icon: KlaviyoIcon,
    items: [
      {
        icon: '⚙',
        label: 'Klaviyo Account Setup',
        sub: 'Full onboarding, integrations & list migration',
        href: '/services/klaviyo-account-setup',
      },
      {
        icon: '⟲',
        label: 'Flow Setup & Optimize',
        sub: 'Welcome, cart, browse & post-purchase flows',
        href: '/services/flow-setup',
      },
      {
        icon: '⊘',
        label: 'Account Audit',
        sub: '30+ point Klaviyo & retention audit',
        href: '/services/account-audit',
      },
      {
        icon: '⊕',
        label: 'Sign-Up/Pop-Up Forms',
        sub: 'High-converting pop-ups & data capture forms',
        href: '/services/sign-up-forms',
      },
      {
        icon: '◎',
        label: 'SMS Campaigns',
        sub: 'VIP SMS alerts & integrated automated flows',
        href: '/services/sms-campaigns',
      },
    ],
  },
  {
    heading: 'EMAIL MARKETING',
    icon: Send,
    items: [
      {
        icon: '✦',
        label: 'Email Design',
        sub: 'Mobile-first, on-brand Figma email layouts',
        href: '/services/email-design',
      },
      {
        icon: '⌥',
        label: 'Email Development',
        sub: 'Hand-coded HTML tested in 50+ email clients',
        href: '/services/email-development',
      },
      {
        icon: '✓',
        label: 'Email Deliverability',
        sub: 'SPF/DKIM/DMARC & primary inbox placement',
        href: '/services/email-deliverability',
      },
      {
        icon: '◈',
        label: 'Email Campaigns',
        sub: 'Full campaign strategy, copy, build & send',
        href: '/services/email-campaigns',
      },
      {
        icon: '⟳',
        label: 'Email Automations',
        sub: 'Lifecycle sequences on any ESP or platform',
        href: '/services/email-automations',
      },
    ],
  },
  {
    heading: 'SHOPIFY ENGINEERING',
    icon: ShopifyIcon,
    items: [
      {
        icon: '⬡',
        label: 'Shopify Theme Development',
        sub: 'Custom OS 2.0 storefronts built to convert',
        href: '/services/shopify-theme-development',
      },
      {
        icon: '⇄',
        label: 'Shopify Migration',
        sub: 'Zero-downtime platform move with SEO intact',
        href: '/services/shopify-migration',
      },
      {
        icon: <Zap size={13} strokeWidth={2.5} />,
        label: 'Shopify Speed Optimization',
        sub: 'Core Web Vitals & sub-2s load time fixes',
        href: '/services/shopify-speed-optimization',
      },
      {
        icon: '◫',
        label: 'Shopify App & Custom Features',
        sub: 'Bespoke sections, drawers & native liquid code',
        href: '/services/shopify-custom-features',
      },
      {
        icon: <Wrench size={13} strokeWidth={2.4} />,
        label: 'Store Maintenance & Support',
        sub: 'Ongoing bug fixes, section updates & sprints',
        href: '/services/shopify-maintenance-support',
      },
    ],
  },
]

const about = [
  { label: 'About Us', href: '/about' },
  { label: 'Contact Us', href: '/#contact' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms & Conditions', href: '/terms' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <style>{`
        nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 9999;
          background: rgba(255, 255, 255, 0.78);
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          border-bottom: 1px solid rgba(15, 22, 35, 0.06);
          overflow: visible;
          transition: background 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }
        nav.scrolled {
          background: rgba(255, 255, 255, 0.94);
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          border-bottom: 1px solid rgba(15, 22, 35, 0.08);
          box-shadow: 0 8px 30px rgba(15, 22, 35, 0.06);
        }
        .logo {
          display: flex; align-items: center; gap: 7px;
          text-decoration: none; justify-self: start;
          font-family: 'Inter', sans-serif;
          font-weight: 800; font-size: 21px; color: var(--gd);
        }
        .nav-links {
          display: flex; align-items: center; gap: 4px;
          list-style: none; white-space: nowrap;
          flex: 1; justify-content: center; margin: 0 auto;
        }
        .nav-links > li {
          position: relative;
        }
        .nav-links > li::after {
          content: '';
          position: absolute;
          bottom: -18px; left: 0; right: 0;
          height: 18px;
        }
        .nav-links > li > a {
          display: flex; align-items: center; gap: 5px;
          padding: 8px 13px;
          color: var(--ink); font-size: 14.5px; font-weight: 600;
          text-decoration: none;
          white-space: nowrap;
          position: relative;
          transition: color .18s ease;
        }
        .nav-links > li > a:hover,
        .nav-links > li:hover > a {
          color: var(--gd);
        }
        .nav-links > li > a::before {
          content: '';
          position: absolute;
          width: 0;
          height: 2.5px;
          border-radius: 2px;
          background-color: var(--g);
          bottom: -12px;
          left: 13px;
          transition: width 0.3s ease;
        }
        .nav-links > li > a:hover::before,
        .nav-links > li:hover > a::before {
          width: calc(100% - 26px);
        }
        .nav-links > li > a svg { opacity: .55; transition: transform .2s, opacity .2s; }
        .nav-links > li:hover > a svg { transform: rotate(180deg); opacity: 1; color: var(--g); }
        .dropdown {
          position: absolute; top: calc(100% + 16px); left: 50%;
          transform: translateX(-50%) translateY(-4px);
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid var(--border);
          border-radius: 14px; padding: 8px; min-width: 175px; width: fit-content;
          box-shadow: 0 16px 40px rgba(15, 22, 35, 0.12);
          opacity: 0; visibility: hidden; pointer-events: none;
          z-index: 99999;
          transition: opacity .18s ease, visibility .18s ease, transform .18s ease;
        }
        .nav-links > li:hover .dropdown {
          opacity: 1; visibility: visible;
          transform: translateX(-50%) translateY(0); pointer-events: all;
        }
        .dropdown a {
          display: flex; align-items: center;
          padding: 10px 14px; border-radius: 9px;
          color: var(--ink); font-size: 14.5px; font-weight: 500;
          text-decoration: none; transition: background .14s, color .14s;
        }
        .dropdown a:hover {
          background: var(--gl);
          color: var(--gd);
        }

        /* ══════════════ MAILSTORA-STYLE 3-COLUMN SERVICES MEGA MENU ══════════════ */
        .nav-mega-li {
          position: static !important;
        }
        .services-mega {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%) translateY(-6px);
          width: min(940px, calc(100vw - 40px));
          background: #ffffff;
          border: 1px solid rgba(15, 22, 35, 0.08);
          border-radius: 22px;
          padding: 0;
          box-shadow: 0 28px 70px rgba(15, 22, 35, 0.14), 0 4px 16px rgba(15, 22, 35, 0.04);
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          z-index: 99999;
          transition: opacity .18s ease, visibility .18s ease, transform .18s cubic-bezier(.22,1,.36,1);
        }
        /* Seamless invisible hover bridge between navbar item and mega menu */
        .services-mega::before {
          content: '';
          position: absolute;
          top: -24px;
          left: 0;
          right: 0;
          height: 28px;
        }
        .nav-mega-li:hover .services-mega,
        .services-mega:hover {
          opacity: 1;
          visibility: visible;
          transform: translateX(-50%) translateY(0);
          pointer-events: all;
        }
        /* Full-width top header section with top-to-bottom gradient */
        .mega-top-bar {
          background: linear-gradient(180deg, rgba(30, 166, 114, 0.09) 0%, rgba(30, 166, 114, 0.015) 100%);
          border-top-left-radius: 21px;
          border-top-right-radius: 21px;
          padding: 18px 34px 14px;
        }
        .mega-top-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          align-items: center;
        }
        .mega-col-title {
          display: flex;
          align-items: center;
          gap: 8px;
          height: 24px;
          font-size: 11.5px;
          font-weight: 800;
          letter-spacing: 0.09em;
          text-transform: uppercase;
          color: var(--g);
          margin: 0;
        }
        .mega-col-title svg {
          color: var(--g);
          opacity: 0.95;
        }
        .mega-body {
          padding: 14px 34px 20px;
        }
        .mega-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          align-items: stretch;
        }
        .mega-col {
          display: flex;
          flex-direction: column;
        }
        .mega-list {
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .mega-link {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          height: 66px;
          box-sizing: border-box;
          padding: 9px 10px;
          margin: 0 -8px;
          border-radius: 10px;
          text-decoration: none;
          white-space: normal;
          position: relative;
          background: transparent;
          border-bottom: 1px solid rgba(15, 22, 35, 0.05);
          transition: background .18s ease, transform .15s ease, border-color .18s ease;
        }
        .mega-link:last-child {
          border-bottom: none;
        }
        .mega-link:hover {
          background: linear-gradient(90deg, rgba(30, 166, 114, 0.12) 0%, rgba(30, 166, 114, 0.02) 100%);
          border-bottom-color: transparent;
          transform: translateX(3px);
        }
        .mega-link-ico {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 26px;
          height: 26px;
          border-radius: 7px;
          background: rgba(30, 166, 114, 0.08);
          color: var(--g);
          font-size: 13px;
          font-weight: 700;
          flex-shrink: 0;
          margin-top: 1px;
          transition: transform .22s cubic-bezier(.34,1.56,.64,1), background .18s ease, color .18s ease, box-shadow .18s ease;
        }
        .mega-link:hover .mega-link-ico {
          transform: scale(1.22) rotate(-5deg);
          background: var(--g);
          color: #ffffff;
          box-shadow: 0 4px 10px rgba(30, 166, 114, 0.35);
        }
        .mega-link-content {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .mega-link-title {
          font-size: 14px;
          font-weight: 700;
          color: var(--ink);
          line-height: 1.3;
          transition: color .15s ease;
        }
        .mega-link:hover .mega-link-title {
          color: var(--gd);
        }
        .mega-link-sub {
          font-size: 12px;
          font-weight: 500;
          color: var(--ink3);
          line-height: 1.35;
        }

        /* Full-width bottom footer bar across all columns */
        .mega-bottom-bar {
          margin-top: 24px;
          padding-top: 16px;
          border-top: 1px solid rgba(15, 22, 35, 0.08);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
        }
        .mega-bottom-link-wl {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--ink);
          font-size: 13.5px;
          font-weight: 700;
          text-decoration: none;
          padding: 6px 12px;
          border-radius: 8px;
          background: rgba(15, 22, 35, 0.04);
          transition: background .15s ease, color .15s ease;
        }
        .mega-bottom-link-wl:hover {
          background: var(--gl);
          color: var(--gd);
        }
        .mega-wl-ico {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: var(--g);
          transition: color .15s ease, transform .2s ease;
        }
        .mega-bottom-link-wl:hover .mega-wl-ico {
          color: var(--gd);
          transform: scale(1.1);
        }
        .mega-bottom-link-all {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: var(--g);
          font-size: 17.5px;
          font-weight: 700;
          text-decoration: none;
          transition: color .15s ease, transform .15s ease;
        }
        .mega-bottom-link-all:hover {
          color: var(--gd);
          transform: translateX(4px);
        }

        .nav-right {
          display: flex; align-items: center; gap: 10px;
          justify-content: flex-end; justify-self: end; white-space: nowrap;
        }
        .btn-nav-outline {
          padding: 8px 15px; border-radius: 8px;
          border: 1.5px solid var(--border); color: var(--ink);
          font-size: 14px; font-weight: 600; text-decoration: none;
          background: #fff;
          transition: border-color .15s, color .15s, background .15s;
          white-space: nowrap;
        }
        .btn-nav-outline:hover {
          border-color: var(--g);
          color: var(--gd);
          background: var(--gl);
        }
        .btn-nav-fill {
          padding: 8.5px 17px; border-radius: 8px;
          background: linear-gradient(135deg, #1ea672 0%, #158058 100%); color: #fff;
          font-size: 14px; font-weight: 700; text-decoration: none;
          transition: transform .15s, box-shadow .15s;
          white-space: nowrap;
          box-shadow: 0 3px 12px rgba(30,166,114,0.28);
        }
        .btn-nav-fill:hover { transform: translateY(-1px); box-shadow: 0 6px 18px rgba(30,166,114,0.36); }
        .hamburger {
          display: none; background: none; border: none;
          cursor: pointer; padding: 8px; color: var(--ink);
        }
        .mobile-menu {
          display: none; position: fixed; top: 68px; left: 0; right: 0; bottom: 0;
          background: #fff; border-bottom: 1px solid var(--border);
          padding: 16px var(--px) 32px; z-index: 9998;
          flex-direction: column; gap: 4px;
          overflow-y: auto;
        }
        .mobile-menu.open { display: flex; }
        .mobile-menu a {
          display: block;
          padding: 10px 14px; border-radius: 8px;
          color: var(--ink2); font-size: 16px; font-weight: 600;
          text-decoration: none;
        }
        .mobile-menu a:hover { background: var(--gl); color: var(--gd); }
        @media(max-width:980px){
          .nav-links,.btn-nav-outline { display: none; }
          .hamburger { display: block; }
        }
      `}</style>

      <nav className={scrolled ? 'scrolled' : ''}>
        <div className="nav-wrap" style={{display:'flex', alignItems:'center', justifyContent:'space-between', position:'relative', maxWidth:'var(--max)', margin:'0 auto', padding:'0 var(--px)', height:'68px', zIndex:2}}>
          <Link href="/" className="logo" style={{flex:'0 0 auto'}}>
            <Image src="/plussquire-logo-light.svg" alt="PlusSquire" width={164} height={28} unoptimized priority />
          </Link>

          <ul className="nav-links">
            <li className="nav-mega-li">
              <Link href="/services">
                Services
                <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <polyline points="4 6 8 10 12 6" />
                </svg>
              </Link>

              {/* 3-Column Services Mega Menu with top gradient header & bottom divider bar */}
              <div className="services-mega">
                {/* Full-width top header section with top-to-bottom subtle gradient */}
                <div className="mega-top-bar">
                  <div className="mega-top-grid">
                    {megaMenuColumns.map((col) => (
                      <div key={col.heading} className="mega-col-title">
                        <col.icon size={15} />
                        <span>{col.heading}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mega-body">
                  <div className="mega-grid">
                    {megaMenuColumns.map((col) => (
                      <div key={col.heading} className="mega-col">
                        <div className="mega-list">
                          {col.items.map((item) => (
                            <Link key={item.href + item.label} href={item.href} className="mega-link">
                              <span className="mega-link-ico">{item.icon}</span>
                              <div className="mega-link-content">
                                <span className="mega-link-title">{item.label}</span>
                                {item.sub && <span className="mega-link-sub">{item.sub}</span>}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Full-width bottom bar with divider */}
                  <div className="mega-bottom-bar">
                    <Link href="/pricing" className="mega-bottom-link-wl">
                      <span className="mega-wl-ico"><Handshake size={16} strokeWidth={2.2} /></span>
                      <span>White-Label for Agencies</span>
                      <span style={{ fontSize: '11px', color: 'var(--ink4)', fontWeight: 500 }}>(Silent agency overflow support)</span>
                    </Link>
                    <Link href="/services" className="mega-bottom-link-all">
                      <span>View all services →</span>
                    </Link>
                  </div>
                </div>
              </div>
            </li>
            <li><Link href="/case-studies">Case Studies</Link></li>
            <li><Link href="/portfolio">Portfolio</Link></li>
            <li><Link href="/pricing">Pricing</Link></li>
            <li>
              <Link href="/about">
                Company
                <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <polyline points="4 6 8 10 12 6" />
                </svg>
              </Link>
              <div className="dropdown">
                {about.map((item) => (
                  <Link key={item.href} href={item.href}>
                    {item.label}
                  </Link>
                ))}
                <Link href="/insights">Insights &amp; Guides</Link>
              </div>
            </li>
            <li><Link href="/faq">FAQ</Link></li>
          </ul>

          <div className="nav-right" style={{display:'flex', alignItems:'center', gap:'8px', justifyContent:'flex-end', flex:'0 0 auto'}}>
            <Link href="/services/account-audit" className="btn-nav-outline">Free Klaviyo Audit</Link>
            <Link href="/#contact" className="btn-nav-fill">Book a Call →</Link>
            <button className="hamburger" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {mobileOpen
                  ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
                  : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>
                }
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
        <Link href="/services" onClick={() => setMobileOpen(false)}>Services</Link>
        <Link href="/case-studies" onClick={() => setMobileOpen(false)}>Case Studies</Link>
        <Link href="/portfolio" onClick={() => setMobileOpen(false)}>Portfolio</Link>
        <Link href="/pricing" onClick={() => setMobileOpen(false)}>Pricing</Link>
        <Link href="/about" onClick={() => setMobileOpen(false)}>About Us</Link>
        <Link href="/insights" onClick={() => setMobileOpen(false)}>Insights</Link>
        <Link href="/faq" onClick={() => setMobileOpen(false)}>FAQ</Link>
        <Link href="/services/account-audit" onClick={() => setMobileOpen(false)} style={{ color: 'var(--gd)', fontWeight: 700 }}>Free Klaviyo Audit →</Link>
        <Link href="/#contact" onClick={() => setMobileOpen(false)} style={{ background: 'var(--g)', color: '#fff', textAlign: 'center', marginTop: '8px' }}>Book a Call →</Link>
      </div>
    </>
  )
}
