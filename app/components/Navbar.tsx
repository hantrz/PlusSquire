'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const services = [
  { icon: '⬡', label: 'Shopify Theme Development', href: '/services/shopify-theme-development' },
  { icon: '⇄', label: 'Shopify Migration', href: '/services/shopify-migration' },
  { icon: '⚡', label: 'Shopify Speed Optimization', href: '/services/shopify-speed-optimization' },
  { icon: '◫', label: 'Shopify App & Custom Features', href: '/services/shopify-custom-features' },
  { icon: '✦', label: 'Email Design', href: '/services/email-design' },
  { icon: '⌥', label: 'Email Development', href: '/services/email-development' },
  { icon: '◈', label: 'Email Campaigns', href: '/services/email-campaigns' },
  { icon: '⟳', label: 'Email Automations', href: '/services/email-automations' },
  { icon: '⊕', label: 'Sign-Up Forms', href: '/services/sign-up-forms' },
  { icon: '◎', label: 'SMS Campaigns', href: '/services/sms-campaigns' },
  { icon: '⚙', label: 'Klaviyo Set-Up', href: '/services/klaviyo-setup' },
  { icon: '⊘', label: 'Account Audit', href: '/services/account-audit' },
]

const resources = [
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Insights', href: '/insights' },
  { label: 'Portfolio', href: '/portfolio' },
]

const about = [
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '#contact' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <style>{`
        nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 9999;
          background: rgba(30, 166, 114, 0.15);
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          border-bottom: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.4);
          overflow: visible;
          transition: background 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }
        nav.scrolled {
          background: #B5EAD5;
          backdrop-filter: none;
          -webkit-backdrop-filter: none;
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
        }
        nav.scrolled::before { display: none; }
        nav.scrolled::after { display: none; }
        nav.scrolled .nav-links > li > a { color: #1a2e25; }
        /* Top-edge glass shine */
        nav::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0;
          height: 50%;
          background: linear-gradient(
            to bottom,
            rgba(255,255,255,0.18) 0%,
            rgba(255,255,255,0)    100%
          );
          pointer-events: none; z-index: 1;
        }
        nav::after {
          content: '';
          position: absolute; bottom: 0; left: 0; right: 0;
          height: 1px;
          background: rgba(255,255,255,0.3);
          pointer-events: none; z-index: 1;
        }
        .logo {
          display: flex; align-items: center; gap: 7px;
          text-decoration: none; justify-self: start;
          font-family: 'Inter', sans-serif;
          font-weight: 800; font-size: 21px; color: var(--gd);
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
          display: flex; align-items: center; gap: 4px;
          padding: 8px 13px;
          color: #1a1a1a; font-size: 15px; font-weight: 500;
          text-decoration: none;
          white-space: nowrap;
          position: relative;
        }
        .nav-links > li > a:hover {
          background: none;
          color: inherit;
        }
        .nav-links > li > a::before {
          content: '';
          position: absolute;
          width: 0;
          height: 3px;
          background-color: var(--gd);
          bottom: -14px;
          left: 0;
          transition: width 0.4s;
        }
        .nav-links > li > a:hover::before,
        .nav-links > li:hover > a::before {
          width: 100%;
        }
        .nav-links > li > a svg { opacity: .5; transition: transform .2s, opacity .2s; }
        .nav-links > li:hover > a svg { transform: rotate(180deg); opacity: 0.8; }
        .dropdown {
          position: absolute; top: calc(100% + 18px); left: 50%;
          transform: translateX(-50%) translateY(-4px);
          background: rgba(240, 255, 248, 0.92);
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.4);
          border-radius: 14px; padding: 10px 10px 14px 10px; min-width: 160px; width: fit-content;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.4);
          opacity: 0; visibility: hidden; pointer-events: none;
          z-index: 99999;
          transition: opacity .2s ease .15s, visibility .2s ease .15s, transform .2s ease .15s;
        }
        .nav-links > li:hover .dropdown {
          opacity: 1; visibility: visible;
          transform: translateX(-50%) translateY(0); pointer-events: all;
          transition: opacity .15s ease 0s, visibility .15s ease 0s, transform .15s ease 0s;
        }
        .dropdown::before {
          content: ''; position: absolute; top: -5px; left: 50%;
          transform: translateX(-50%) rotate(45deg);
          width: 10px; height: 10px;
          background: rgba(255,255,255,0.4);
          border-left: 1px solid rgba(255,255,255,0.3);
          border-top: 1px solid rgba(255,255,255,0.3);
        }
        .dropdown a {
          display: flex; align-items: center;
          padding: 10px 14px; border-radius: 8px;
          color: #1a1a1a; font-size: 15.5px; font-weight: 500;
          text-decoration: none; transition: background .12s, color .12s;
        }
        .dropdown a:hover {
          background: rgba(255,255,255,0.25);
          color: var(--gd);
        }
        .nav-right {
          display: flex; align-items: center; gap: 8px;
          justify-content: flex-end; justify-self: end; white-space: nowrap;
        }
        .btn-nav-outline {
          padding: 7px 13px; border-radius: 7px;
          border: 1.5px solid rgba(255,255,255,0.4); color: #1a1a1a;
          font-size: 15px; font-weight: 500; text-decoration: none;
          background: rgba(255,255,255,0.15);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          transition: border-color .15s, background .15s;
          white-space: nowrap;
        }
        .btn-nav-outline:hover {
          border-color: rgba(255,255,255,0.7);
          background: rgba(255,255,255,0.25);
        }
        .btn-nav-fill {
          padding: 7px 15px; border-radius: 7px;
          background: var(--g); color: #fff;
          font-size: 15px; font-weight: 700; text-decoration: none;
          transition: background .15s;
          white-space: nowrap;
          box-shadow: 0 2px 8px rgba(30,166,114,0.3);
        }
        .btn-nav-fill:hover { background: var(--gd); }
        .hamburger {
          display: none; background: none; border: none;
          cursor: pointer; padding: 8px; color: #1a1a1a;
        }
        .mobile-menu {
          display: none; position: fixed; top: 68px; left: 0; right: 0;
          background: #fff; border-bottom: 1px solid var(--border);
          padding: 16px var(--px); z-index: 9998;
          flex-direction: column; gap: 4px;
        }
        .mobile-menu.open { display: flex; }
        .mobile-menu a {
          padding: 10px 14px; border-radius: 8px;
          color: var(--ink2); font-size: 16px; font-weight: 500;
          text-decoration: none;
        }
        .mobile-menu a:hover { background: var(--soft); }
        @media(max-width:768px){
          .nav-wrap { grid-template-columns: 1fr auto; }
          .nav-links,.btn-nav-outline { display: none; }
          .hamburger { display: block; }
        }
      `}</style>

      <nav className={scrolled ? 'scrolled' : ''}>
        <div className="nav-wrap" style={{display:'flex', alignItems:'center', justifyContent:'space-between', position:'relative', maxWidth:'var(--max)', margin:'0 auto', padding:'0 var(--px)', height:'68px', zIndex:2}}>
          {/* Logo — no icon */}
          <Link href="/" className="logo" style={{flex:'0 0 auto'}}>
            <Image src="/plussquire-logo.png" alt="PlusSquire" width={150} height={29} priority />
          </Link>

          {/* Center links */}
          <ul className="nav-links" style={{display:'flex', alignItems:'center', gap:'2px', listStyle:'none', whiteSpace:'nowrap', flex:'1', justifyContent:'center', margin:'0 auto'}}>
            <li><a href="/">Features</a></li>
            <li>
              <a href="#services">
                Services
                <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <polyline points="4 6 8 10 12 6" />
                </svg>
              </a>
              <div className="dropdown">
                {services.map((s) => (
                  <Link key={s.href} href={s.href}>
                    {s.label}
                  </Link>
                ))}
              </div>
            </li>
            <li>
              <a href="#">
                Resources
                <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <polyline points="4 6 8 10 12 6" />
                </svg>
              </a>
              <div className="dropdown">
                {resources.map((r) => (
                  <Link key={r.href} href={r.href}>
                    {r.label}
                  </Link>
                ))}
              </div>
            </li>
            <li>
              <a href="#">
                About
                <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <polyline points="4 6 8 10 12 6" />
                </svg>
              </a>
              <div className="dropdown">
                {about.map((item) => (
                  <Link key={item.href} href={item.href}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </li>
            <li><Link href="/pricing">Pricing</Link></li>
          </ul>

          {/* Right CTA */}
          <div className="nav-right" style={{display:'flex', alignItems:'center', gap:'8px', justifyContent:'flex-end', flex:'0 0 auto'}}>
            <Link href="/portfolio" className="btn-nav-outline">View Work</Link>
            <Link href="#contact" className="btn-nav-fill">Get in Touch</Link>
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
        <Link href="/" onClick={() => setMobileOpen(false)}>Features</Link>
        {services.map((s) => (
          <Link key={s.href} href={s.href} onClick={() => setMobileOpen(false)}>
            {s.label}
          </Link>
        ))}
        {resources.map((r) => (
          <Link key={r.href} href={r.href} onClick={() => setMobileOpen(false)}>
            {r.label}
          </Link>
        ))}
        {about.map((item) => (
          <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)}>
            {item.label}
          </Link>
        ))}
        <Link href="/pricing" onClick={() => setMobileOpen(false)}>Pricing</Link>
      </div>
    </>
  )
}
