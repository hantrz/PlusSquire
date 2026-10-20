'use client'

import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { Send, ArrowUpRight } from 'lucide-react'
import { UPWORK_URL } from '../lib/site'

const ParticlesBackground = dynamic(() => import('./ParticlesBackground'), { ssr: false })

export default function Hero() {
  return (
    <>
      <style>{`
        .hero {
          padding-top: 68px;
          background:
            radial-gradient(ellipse at 12% 10%, rgba(30, 166, 114, 0.14) 0%, transparent 55%),
            radial-gradient(ellipse at 88% 85%, rgba(30, 166, 114, 0.14) 0%, transparent 55%),
            #ffffff;
          overflow: hidden;
          position: relative;
          z-index: 1;
          isolation: isolate;
        }
        .hero-main {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 56px;
          align-items: center;
          padding: 72px var(--px) 64px;
          max-width: var(--max);
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        .hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding-left: 0;
          font-size: 14px;
          font-weight: 600;
          color: #1a2e25;
          letter-spacing: 0.02em;
          margin-bottom: 24px;
          width: fit-content;
        }
        h1 em { font-style: normal; color: var(--g); }
        .hero h1 {
          margin-bottom: 20px;
          font-size: clamp(38px, 4.4vw, 56px);
          font-weight: 800;
          color: var(--ink);
          line-height: 1.08;
        }
        .h1-punch {
          font-weight: 900;
          display: block;
          margin-top: 4px;
        }
        .hero-desc {
          font-size: 17px;
          color: var(--ink3);
          line-height: 1.75;
          max-width: 520px;
          margin-bottom: 32px;
        }
        .hero-btns {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-bottom: 34px;
        }
        .hero-trust-card {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          padding: 12px 18px 12px 12px;
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid var(--border);
          border-radius: 14px;
          box-shadow: 0 8px 24px rgba(15, 22, 35, 0.05);
          text-decoration: none;
          transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .hero-trust-card:hover {
          transform: translateY(-2px);
          border-color: var(--gm);
          box-shadow: 0 12px 30px rgba(30, 166, 114, 0.14);
        }
        .ht-avatar-wrap {
          position: relative;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          overflow: hidden;
          border: 2px solid var(--g);
          background: var(--gl);
          flex-shrink: 0;
        }
        .ht-stars {
          color: #f59e0b;
          font-size: 13px;
          letter-spacing: 1px;
          font-weight: 800;
        }
        .ht-meta {
          font-size: 13px;
          color: var(--ink);
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .ht-sub {
          font-size: 12px;
          color: var(--ink3);
          margin-top: 1px;
        }

        /* Pulsing green glow behind headline only */
        .h1-glow-wrap { position: relative; }
        .h1-glow-wrap::before {
          content: '';
          position: absolute;
          inset: -50px -30px;
          background: radial-gradient(ellipse at 45% 50%, rgba(30,166,114,0.18) 0%, transparent 65%);
          filter: blur(40px);
          z-index: -1;
          pointer-events: none;
        }

        /* Right — Realistic Storefront + Klaviyo Dashboard Stack */
        .hero-right { position: relative; z-index: 1; }
        .stack-visual { position: relative; padding: 14px; }
        .store-card {
          position: relative;
          z-index: 1;
          background: #0f1623;
          border-radius: 20px;
          box-shadow: 0 28px 72px rgba(15, 22, 35, 0.22), 0 4px 16px rgba(15, 22, 35, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.12);
          overflow: hidden;
        }
        .ec-topbar {
          background: #182234;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          padding: 11px 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
        }
        .ec-dots { display: flex; align-items: center; gap: 6px; }
        .tc-r{width:10px;height:10px;border-radius:50%;background:#ff5f57}
        .tc-y{width:10px;height:10px;border-radius:50%;background:#febc2e}
        .tc-g{width:10px;height:10px;border-radius:50%;background:#28c840}
        .ec-url-pill {
          background: rgba(255, 255, 255, 0.07);
          color: rgba(255, 255, 255, 0.65);
          font-size: 11px;
          font-weight: 600;
          padding: 4px 14px;
          border-radius: 100px;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .ec-status-tag {
          background: rgba(30, 166, 114, 0.2);
          color: #34d399;
          font-size: 10.5px;
          font-weight: 700;
          padding: 3px 10px;
          border-radius: 100px;
          border: 1px solid rgba(52, 211, 153, 0.3);
        }
        .store-img-wrap {
          position: relative;
          width: 100%;
          height: 250px;
          overflow: hidden;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        .store-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
        }
        .store-kpi-strip {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          background: #111927;
          padding: 16px 20px;
          gap: 12px;
        }
        .sk-box {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 10px;
          padding: 10px 12px;
        }
        .sk-lbl { font-size: 10.5px; color: rgba(255,255,255,0.5); text-transform: uppercase; letter-spacing: 0.05em; font-weight: 600; }
        .sk-val { font-family: 'Inter', sans-serif; font-size: 18px; font-weight: 800; color: #fff; margin-top: 2px; display: flex; align-items: center; gap: 6px; }
        .sk-delta { font-size: 11px; color: #34d399; font-weight: 700; background: rgba(52,211,153,0.14); padding: 1px 6px; border-radius: 4px; }

        /* Floating Klaviyo Flow Card */
        .email-float {
          position: absolute;
          z-index: 3;
          width: 54%;
          right: -14px;
          bottom: -18px;
          background: #ffffff;
          border-radius: 16px;
          box-shadow: 0 24px 54px rgba(15, 22, 35, 0.22);
          border: 1px solid var(--border);
          overflow: hidden;
        }
        .ef-head {
          padding: 10px 14px;
          background: var(--soft);
          border-bottom: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 11px;
          font-weight: 700;
          color: var(--ink);
        }
        .ef-live {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          color: var(--gd);
          background: var(--gl);
          padding: 2px 8px;
          border-radius: 100px;
          font-size: 10px;
        }
        .ef-img {
          width: 100%;
          height: 118px;
          object-fit: cover;
          display: block;
        }
        .ef-foot {
          padding: 10px 14px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #fff;
          border-top: 1px solid var(--border);
        }
        .ef-foot-stat { font-size: 11px; color: var(--ink3); font-weight: 600; }
        .ef-foot-stat strong { color: var(--g); font-size: 13px; font-weight: 800; margin-right: 4px; }

        .chip {
          position: absolute;
          background: #fff;
          z-index: 5;
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 11px 16px;
          box-shadow: 0 14px 32px rgba(15, 22, 35, 0.12);
          display: flex;
          align-items: center;
          gap: 11px;
          font-size: 13px;
          font-weight: 600;
          white-space: nowrap;
        }
        .chip-top { top: -8px; left: -12px; }
        .chip-val { font-family: 'Inter', sans-serif; font-size: 19px; font-weight: 800; color: var(--g); line-height: 1; }
        .chip-lbl { font-size: 11px; color: var(--ink3); margin-top: 2px; }
        .chip-ico {
          width: 36px; height: 36px; border-radius: 10px;
          background: var(--gl); color: var(--g);
          display: flex; align-items: center; justify-content: center;
        }

        /* Stats bar */
        .hero-stats-bar { background: transparent; position: relative; z-index: 1; padding-bottom: 52px; }
        .hero-stats-inner {
          max-width: var(--max); margin: 0 auto;
          padding: 8px var(--px) 24px var(--px);
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        .hs-item {
          text-align: center;
          background: rgba(255, 255, 255, 0.85);
          border: 1px solid rgba(30, 166, 114, 0.22);
          box-shadow: 0 6px 20px rgba(15, 22, 35, 0.04);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border-radius: 16px;
          position: relative;
          overflow: hidden;
          padding: 24px 20px 22px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hs-item::before {
          content: '';
          position: absolute;
          top: 0; left: 0; width: 0%; height: 3px;
          background: var(--g);
          transition: width 0.45s ease;
          z-index: 1;
        }
        .hs-item:hover::before { width: 100%; }
        .hs-item:hover {
          transform: translateY(-4px);
          box-shadow: 0 14px 32px rgba(30,166,114,0.14);
        }
        .hs-num { font-family: 'Inter', sans-serif; font-size: 34px; font-weight: 800; line-height: 1.15; color: var(--g); display: block; position: relative; z-index: 1; }
        .hs-lbl { font-size: 13px; font-weight: 600; color: var(--ink2); margin-top: 6px; position: relative; z-index: 1; }

        @media(max-width:1100px){
          .hero-main { grid-template-columns: 1fr; }
          .hero-right { max-width: 640px; margin: 0 auto; width: 100%; }
          .hero-stats-inner { grid-template-columns: repeat(2, 1fr); }
        }
        @media(max-width:640px){
          .hero h1 { font-size: 34px; }
          .h1-punch { font-size: 36px; display: inline; }
          .hero-br { display: none; }
          .hero-stats-inner { grid-template-columns: 1fr 1fr; gap: 12px; }
          .email-float { position: relative; width: 100%; right: 0; bottom: 0; margin-top: 12px; }
        }
      `}</style>

      <div className="hero">
        <ParticlesBackground />

        <div className="hero-main">
          {/* Left */}
          <div>
            <div className="hero-eyebrow" data-reveal="fade">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke="#1ea672" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Shopify Partner &middot; Klaviyo Certified &middot; Top Rated Plus
            </div>

            <div className="h1-glow-wrap" data-reveal="up" style={{ transitionDelay: '90ms' }}>
              <h1>
                Your Shopify store and <br className="hero-br" />
                email list are sitting on <br className="hero-br" />
                <em>untapped revenue.</em>
                <span className="h1-punch">We engineer both.</span>
              </h1>
            </div>

            <p className="hero-desc" data-reveal="up" style={{ transitionDelay: '180ms' }}>
              High-converting Shopify themes, bulletproof HTML email development, and revenue-driving Klaviyo lifecycle flows—built under one roof with 13+ years of proven execution.
            </p>

            <div className="hero-btns" data-reveal="up" style={{ transitionDelay: '270ms' }}>
              <Link href="#contact" className="btn-primary">
                Start a Project →
              </Link>
              <Link href="/services/account-audit" className="btn-ghost">
                Get a Free Klaviyo Audit
              </Link>
            </div>

            <div data-reveal="fade" style={{ transitionDelay: '360ms' }}>
              <a
                href={UPWORK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-trust-card"
              >
                <div className="ht-avatar-wrap">
                  <Image
                    src="/images/zahidul.png"
                    alt="Zahidul Islam — Founder of PlusSquire"
                    width={44}
                    height={44}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 15%' }}
                  />
                </div>
                <div>
                  <div className="ht-meta">
                    <span className="ht-stars">★★★★★ 5.0</span>
                    <span>&middot; 800+ Projects Delivered</span>
                    <ArrowUpRight size={14} color="var(--g)" />
                  </div>
                  <div className="ht-sub">
                    Led by Zahidul Islam &middot; Verified Top 3% on Upwork (100% JSS)
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Right — Real Shopify Storefront + Klaviyo Dashboard Visual */}
          <div data-reveal="right" style={{ transitionDelay: '150ms' }}>
            <div className="hero-right">
              <div className="chip chip-top">
                <div className="chip-ico">
                  <Send size={18} strokeWidth={2.2} />
                </div>
                <div>
                  <div className="chip-val">7,000+</div>
                  <div className="chip-lbl">HTML Emails &amp; Flows Shipped</div>
                </div>
              </div>

              <div className="stack-visual">
                <div className="store-card">
                  <div className="ec-topbar">
                    <div className="ec-dots">
                      <span className="tc-r" /><span className="tc-y" /><span className="tc-g" />
                    </div>
                    <div className="ec-url-pill">
                      🔒 shopify-plus-storefront.com
                    </div>
                    <div className="ec-status-tag">99 Speed &middot; OS 2.0</div>
                  </div>

                  <div className="store-img-wrap">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/services/shopify-theme-development/hero-overview.jpg"
                      alt="Custom Shopify Theme & Conversion Architecture"
                    />
                  </div>

                  <div className="store-kpi-strip">
                    <div className="sk-box">
                      <div className="sk-lbl">Email Revenue</div>
                      <div className="sk-val">38.4% <span className="sk-delta">+42%</span></div>
                    </div>
                    <div className="sk-box">
                      <div className="sk-lbl">Store Load Speed</div>
                      <div className="sk-val">1.4s <span className="sk-delta">Fast</span></div>
                    </div>
                    <div className="sk-box">
                      <div className="sk-lbl">Flow ROI</div>
                      <div className="sk-val">14.2× <span className="sk-delta">Live</span></div>
                    </div>
                  </div>
                </div>

                {/* Floating Klaviyo Automation Preview */}
                <div className="email-float">
                  <div className="ef-head">
                    <span>⚡ Klaviyo Retention Engine</span>
                    <span className="ef-live"><span className="live-dot">●</span> Active</span>
                  </div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="ef-img"
                    src="/images/services/flow-setup/hero-flows-autopilot.jpg"
                    alt="Klaviyo Automated Flows Revenue Dashboard"
                  />
                  <div className="ef-foot">
                    <div className="ef-foot-stat"><strong>+$84.3K</strong> 7-Day Flow &amp; Campaign Lift</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="hero-stats-bar">
          <div className="hero-stats-inner">
            {[
              { num: '13+ Years', lbl: 'Klaviyo, Email & eCommerce Experience' },
              { num: '800+',      lbl: 'Shopify & Email Projects Delivered' },
              { num: '7,000+',    lbl: 'Bulletproof HTML Emails Coded' },
              { num: '100% JSS',  lbl: 'Top Rated Plus on Upwork' },
            ].map((s, i) => (
              <div key={s.lbl} className="hs-item" data-reveal="up" style={{ transitionDelay: `${i * 90}ms` }}>
                <div className="hs-num">{s.num}</div>
                <div className="hs-lbl">{s.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
