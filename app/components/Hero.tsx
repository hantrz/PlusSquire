'use client'

import Link from 'next/link'
import dynamic from 'next/dynamic'
import { Send } from 'lucide-react'

const ParticlesBackground = dynamic(() => import('./ParticlesBackground'), { ssr: false })

export default function Hero() {
  return (
    <>
      <style>{`
        .hero { padding-top: 68px; background: radial-gradient(ellipse at top left, rgba(30, 166, 114, 0.18) 0%, transparent 60%), radial-gradient(ellipse at bottom right, rgba(30, 166, 114, 0.18) 0%, transparent 60%), #ffffff; overflow: hidden; position: relative; z-index: 1; isolation: isolate; }
        .hero-main {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 48px; align-items: center;
          padding: 80px var(--px) 72px;
          max-width: var(--max); margin: 0 auto;
          position: relative; z-index: 1;
        }
        .hero-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          padding-left: 0;
          font-size: 14px; font-weight: 600; color: #1a2e25; letter-spacing: 0.02em;
          margin-bottom: 26px; width: fit-content;
        }
        h1 em { font-style: normal; color: var(--g); }
        .hero h1 { margin-bottom: 22px; font-size: 48px; font-weight: 800; color: #0b1c12; }
        .h1-punch { font-weight: 900; font-size: 52px; display: block; }
        .hero-desc { font-size: 17px; color: #4a5568; line-height: 1.8; max-width: 480px; margin-bottom: 38px; }
        .hero-btns { display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 44px; }
        .hero .btn-ghost { border: 2px solid rgba(30,166,114,0.35); color: #1a2e25; background: transparent; transition: border-color 0.25s ease; }
        .hero .btn-ghost:hover { border-color: rgba(30,166,114,1); color: #1a2e25; background: transparent; }
        .hero-social-proof { display: flex; align-items: center; gap: 14px; }
        .avatar-stack { display: flex; }
        .avatar-stack span {
          width: 34px; height: 34px; border-radius: 50%;
          border: 2.5px solid rgba(255,255,255,0.15); margin-left: -9px;
          display: flex; align-items: center; justify-content: center;
          font-size: 14px; background: var(--gl);
        }
        .avatar-stack span:first-child { margin-left: 0; }
        .proof-text { font-size: 13px; color: #4a5568; }
        .proof-text strong { color: #4a5568; font-weight: 600; display: block; }

        /* Pulsing green glow behind headline only */
        .h1-glow-wrap { position: relative; }
        .h1-glow-wrap::before {
          content: '';
          position: absolute;
          inset: -60px -40px;
          background: radial-gradient(ellipse at 45% 50%, rgba(30,166,114,0.25) 0%, transparent 65%);
          filter: blur(40px);
          z-index: -1;
          animation: headlineGlow 3s ease-in-out infinite;
          pointer-events: none;
        }
        @keyframes headlineGlow {
          0%, 100% { opacity: 0.5; }
          50%       { opacity: 1; }
        }

        /* Storefront + email mockup stack */
        .hero-right { position: relative; transform: scale(0.82); transform-origin: center top; z-index: 1; }
        .stack-visual { position: relative; }
        .store-card {
          position: relative; z-index: 1;
          background: #fff; border-radius: 18px;
          box-shadow: 0 28px 72px rgba(0,0,0,.11), 0 4px 12px rgba(0,0,0,.05);
          border: 1px solid rgba(255,255,255,0.08); overflow: hidden;
        }
        .store-nav { display: flex; align-items: center; justify-content: space-between; padding: 14px 20px 0; }
        .store-logo { display: flex; align-items: center; gap: 7px; font-size: 13px; font-weight: 800; color: var(--ink); }
        .store-logo-mark { width: 18px; height: 18px; border-radius: 5px; background: var(--g); }
        .store-nav-links { display: flex; gap: 14px; font-size: 11px; color: var(--ink4); font-weight: 600; }
        .store-banner {
          background: linear-gradient(135deg, #1ea672, #17845b);
          border-radius: 10px; padding: 38px; text-align: center; color: #fff; margin: 16px 20px 0;
        }
        .store-banner h3 { font-size: 16px; font-weight: 800; margin-bottom: 3px; color: #fff; letter-spacing: -.01em; }
        .store-banner p { font-size: 11px; opacity: .82; }
        .store-products { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; padding: 16px 20px 58px; }
        .store-prod { background: var(--soft); border-radius: 8px; padding: 10px 8px; text-align: center; }
        .store-thumb { height: 142px; border-radius: 6px; background: var(--gl); display: flex; align-items: center; justify-content: center; font-size: 32px; margin-bottom: 6px; }
        .store-prod strong { font-size: 11px; color: var(--ink); font-weight: 700; display: block; }
        .store-cart-badge {
          position: absolute; top: 14px; right: 20px; z-index: 2;
          background: var(--g); color: #fff; border-radius: 50%;
          width: 20px; height: 20px; display: flex; align-items: center; justify-content: center;
          font-size: 10px; font-weight: 800; box-shadow: 0 4px 10px rgba(30,166,114,.4);
        }
        .email-card {
          background: #fff; border-radius: 16px;
          box-shadow: 0 20px 50px rgba(0,0,0,.16), 0 4px 12px rgba(0,0,0,.06);
          border: 1px solid rgba(255,255,255,0.08); overflow: hidden;
        }
        .email-float {
          position: absolute; z-index: 2;
          width: 48%; right: -6%; bottom: 20px;
        }
        .ec-topbar {
          background: var(--soft); border-bottom: 1px solid var(--border);
          padding: 11px 15px; display: flex; align-items: center; gap: 7px;
        }
        .tc-r{width:10px;height:10px;border-radius:50%;background:#ff5f57}
        .tc-y{width:10px;height:10px;border-radius:50%;background:#febc2e}
        .tc-g{width:10px;height:10px;border-radius:50%;background:#28c840}
        .ec-urlbar { margin-left: 12px; flex:1; background: #eaecef; border-radius: 4px; height: 20px; max-width: 200px; }
        .ec-body { padding: 24px; }
        .ec-banner {
          background: linear-gradient(135deg, #1ea672, #17845b);
          border-radius: 10px; padding: 22px; text-align: center; color: #fff; margin-bottom: 18px;
        }
        .ec-banner h3 { font-size: 18px; font-weight: 800; margin-bottom: 4px; color: #fff; letter-spacing: -.01em; }
        .ec-banner p { font-size: 12px; opacity: .82; }
        .ec-products { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 16px; }
        .ec-prod { background: var(--soft); border-radius: 8px; padding: 14px 12px; text-align: center; }
        .ec-thumb { height: 108px; border-radius: 6px; background: var(--gl); display: flex; align-items: center; justify-content: center; font-size: 66px; margin-bottom: 8px; }
        .ec-prod p { font-size: 11px; color: var(--ink3); }
        .ec-prod strong { font-size: 13px; color: var(--ink); font-weight: 700; display: block; margin: 3px 0; }
        .ec-cta { background: var(--g); color: #fff; border-radius: 5px; padding: 7px; font-size: 12px; font-weight: 600; margin-top: 6px; }
        .ec-footer { border-top: 1px solid var(--border); padding-top: 12px; text-align: center; font-size: 11px; color: var(--ink4); line-height: 1.9; }
        .ec-footer a { color: var(--g); text-decoration: none; }
        .chip {
          position: absolute; background: #fff; z-index: 5;
          border: 1px solid rgba(255,255,255,0.15); border-radius: 12px;
          padding: 10px 14px; box-shadow: 0 8px 24px rgba(0,0,0,.09);
          display: flex; align-items: center; gap: 10px;
          font-size: 13px; font-weight: 500; white-space: nowrap;
        }
        .chip-top { top: -18px; right: -18px; }
        .chip-bot { bottom: -10px; left: -20px; }
        .chip-val { font-family: 'Inter', sans-serif; font-size: 20px; font-weight: 800; color: var(--g); line-height: 1; }
        .chip-lbl { font-size: 11px; color: var(--ink4); }
        .chip-ico { font-size: 22px; }

        /* Stats bar */
        .hero-stats-bar { background: transparent; position: relative; z-index: 1; padding-bottom: 48px; }
        .hero-stats-inner {
          max-width: var(--max); margin: 0 auto;
          padding: 0px var(--px) 24px var(--px);
          display: flex; gap: 24px;
        }
        .hs-item {
          flex: 1; text-align: center;
          background: rgba(255, 255, 255, 0.6);
          border: 1px solid rgba(30, 166, 114, 0.2);
          box-shadow: 0 4px 16px rgba(30, 166, 114, 0.08);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border-radius: 16px;
          position: relative;
          overflow: hidden;
          padding: 22px 20px 20px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hs-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 0%;
          height: 3px;
          background: #1ea672;
          transition: width 0.5s ease;
          z-index: 1;
        }
        .hs-item:hover::before {
          width: 100%;
        }
        .hs-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 28px rgba(30,166,114,0.15);
        }
        .hs-item::after {
          content: '';
          position: absolute;
          bottom: -20px;
          left: -25%;
          width: 150%;
          height: 65%;
          background: rgba(30, 166, 114, 0.13);
          border-radius: 45% 55% 0 0 / 40% 40% 0 0;
          transform: translateY(110%);
          transition: transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
          z-index: 0;
          pointer-events: none;
          animation: none;
        }
        .hs-item:hover::after {
          transform: translateY(0%);
          animation: waveMove 2.5s ease-in-out infinite;
        }
        @keyframes waveMove {
          0%   { border-radius: 45% 55% 0 0 / 40% 40% 0 0; }
          25%  { border-radius: 55% 45% 0 0 / 45% 35% 0 0; }
          50%  { border-radius: 40% 60% 0 0 / 35% 45% 0 0; }
          75%  { border-radius: 60% 40% 0 0 / 42% 38% 0 0; }
          100% { border-radius: 45% 55% 0 0 / 40% 40% 0 0; }
        }
        .hs-wave {
          position: absolute;
          bottom: -20px;
          left: -30%;
          width: 160%;
          height: 60%;
          background: rgba(30, 166, 114, 0.08);
          border-radius: 50% 50% 0 0 / 38% 42% 0 0;
          transform: translateY(110%);
          transition: transform 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.1s;
          z-index: 0;
          pointer-events: none;
          animation: none;
        }
        .hs-item:hover .hs-wave {
          transform: translateY(0%);
          animation: waveMoveB 2.5s ease-in-out 0.4s infinite;
        }
        @keyframes waveMoveB {
          0%   { border-radius: 50% 50% 0 0 / 38% 42% 0 0; }
          25%  { border-radius: 42% 58% 0 0 / 43% 37% 0 0; }
          50%  { border-radius: 58% 42% 0 0 / 36% 44% 0 0; }
          75%  { border-radius: 48% 52% 0 0 / 41% 39% 0 0; }
          100% { border-radius: 50% 50% 0 0 / 38% 42% 0 0; }
        }
        .hs-num { font-family: 'Inter', sans-serif; font-size: 36px; font-weight: 800; line-height: 1.2; padding-bottom: 4px; color: #1ea672; display: block; position: relative; z-index: 1; }
        .hs-lbl { font-size: 12.5px; color: #4a5568; margin-top: 6px; position: relative; z-index: 1; }

        @media(max-width:1100px){
          .hero-main { grid-template-columns: 1fr; }
          .hero-right { display: none; }
          .hero-stats-inner { flex-wrap: wrap; }
          .hs-item { flex: 1 1 calc(50% - 6px); }
        }
      `}</style>

      <div className="hero">
        <ParticlesBackground />

        <div className="hero-main">
          {/* Left */}
          <div>
            <div className="hero-eyebrow">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke="#1ea672" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Shopify Partner &middot; Klaviyo Certified
            </div>
            <div className="h1-glow-wrap">
              <h1>Your Shopify store and<br />email list are both sitting<br />on <em>untapped revenue.</em><br /><span className="h1-punch">We fix both.</span></h1>
            </div>
            <p className="hero-desc">
              Shopify development and email marketing under one roof: pixel-perfect builds, revenue-driving flows, and growth systems for eCommerce brands ready to scale.
            </p>
            <div className="hero-btns">
              <Link href="#contact" className="btn-primary">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
                Start a Project
              </Link>
              <Link href="#cases" className="btn-ghost">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
                See Results
              </Link>
            </div>
            <div className="hero-social-proof">
              <div className="proof-text">
                <span style={{color:'#f5a623', fontSize:'15px', letterSpacing:'1px'}}>⭐⭐⭐⭐⭐</span>
                <span style={{color:'#4a5568', fontSize:'13px', marginLeft:'6px'}}>5.0 · 752 reviews on Upwork</span>
              </div>
            </div>
          </div>

          {/* Right — Shopify storefront + email flow mockup */}
          <div className="hero-right">
            <div className="chip chip-top">
              <div>
                <div className="chip-val">150+</div>
                <div className="chip-lbl">Stores launched</div>
              </div>
              <div className="chip-ico">🛍️</div>
            </div>
            <div className="stack-visual">
              <div className="store-card">
                <div className="ec-topbar">
                  <span className="tc-r" /><span className="tc-y" /><span className="tc-g" />
                  <div className="ec-urlbar" />
                </div>
                <div className="store-cart-badge">2</div>
                <div className="store-nav">
                  <div className="store-logo"><span className="store-logo-mark" />Storefront</div>
                  <div className="store-nav-links"><span>Shop</span><span>New</span><span>Sale</span></div>
                </div>
                <div className="store-banner">
                  <h3>✨ New Collection</h3>
                  <p>Built &amp; launched in 4 weeks</p>
                </div>
                <div className="store-products">
                  <div className="store-prod">
                    <div className="store-thumb">👟</div>
                    <strong>$79</strong>
                  </div>
                  <div className="store-prod">
                    <div className="store-thumb">🎒</div>
                    <strong>$49</strong>
                  </div>
                  <div className="store-prod">
                    <div className="store-thumb">👕</div>
                    <strong>$35</strong>
                  </div>
                </div>
              </div>
              <div className="email-card email-float">
                <div className="ec-topbar">
                  <span className="tc-r" /><span className="tc-y" /><span className="tc-g" />
                </div>
                <div className="ec-body" style={{ padding: '16px' }}>
                  <div className="ec-banner" style={{ padding: '14px', marginBottom: '10px' }}>
                    <h3 style={{ fontSize: '14px' }}>🎉 Order Confirmed</h3>
                    <p>Post-purchase flow triggered</p>
                  </div>
                  <div className="ec-footer" style={{ fontSize: '10px' }}>
                    Sent automatically via Klaviyo
                  </div>
                </div>
              </div>
            </div>
            <div className="chip chip-bot">
              <div className="chip-ico" style={{ display: 'flex', color: 'var(--g)' }}><Send size={20} strokeWidth={2} /></div>
              <div>
                <div className="chip-val">1,000+</div>
                <div className="chip-lbl">Flows built</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="hero-stats-bar">
          <div className="hero-stats-inner">
            {[
              { num: '13+ years', lbl: 'Shopify and email experience' },
              { num: '40%',       lbl: 'Faster Shopify store load time' },
              { num: '10–40%',    lbl: 'Average revenue lift for our clients' },
              { num: '3+ years',  lbl: 'Average client partnership duration' },
            ].map((s) => (
              <div key={s.lbl} className="hs-item">
                <div className="hs-wave" />
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
