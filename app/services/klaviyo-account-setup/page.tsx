import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../../components/Navbar'
import { Footer } from '../../components/Sections'
import {
  CheckCircle2, RefreshCw, TrendingUp, DollarSign,
  ShoppingBag, Star, Repeat, MessageSquare, Megaphone,
  Settings2, ShieldCheck, Paintbrush, ListChecks,
} from 'lucide-react'

const foundationItems = [
  { icon: Settings2,   label: 'Account Structure' },
  { icon: ShieldCheck, label: 'Domain Authentication' },
  { icon: Paintbrush,  label: 'Branding & Templates' },
  { icon: ListChecks,  label: 'Lists & Properties' },
]

const integrationNodes = [
  { icon: ShoppingBag,    label: 'Shopify',       x: 50, y: 8 },
  { icon: Star,           label: 'Reviews',       x: 89, y: 35 },
  { icon: Repeat,         label: 'Subscriptions', x: 74, y: 88 },
  { icon: MessageSquare,  label: 'Support',       x: 26, y: 88 },
  { icon: Megaphone,      label: 'Ads',           x: 11, y: 35 },
]

const included = [
  'Full account setup or platform migration',
  'List import, cleaning & deduplication',
  'Shopify + app integrations connected',
  'Core flows: welcome, abandoned cart, post-purchase',
  'Deliverability & sending domain setup',
  'List segmentation strategy',
  'On-brand email templates',
  'Handover walkthrough & training',
]

const steps = [
  { n: '01', title: 'Audit & Plan', desc: 'We review your current setup (or your old platform, if you’re migrating) and map out exactly what needs to move, connect, and get cleaned up.' },
  { n: '02', title: 'Build & Connect', desc: 'List migrated or imported, integrations wired in, and your core flows built, all inside a clean, organized account.' },
  { n: '03', title: 'Launch & Train', desc: 'Sending volume ramped up on a schedule, and a full walkthrough so your team knows exactly where everything lives.' },
]

const whatYouGet = [
  { icon: RefreshCw,   label: 'Clean migration or setup, zero data loss' },
  { icon: Settings2,   label: 'Every integration connected and firing correctly' },
  { icon: ShieldCheck, label: 'Deliverability protected from the first send' },
  { icon: ListChecks,  label: 'Full handover, so your team owns the account' },
]

export default function KlaviyoAccountSetupPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '68px' }}>
        <style>{`
          .ksp-hero {
            padding: 64px 0 76px;
            background:
              radial-gradient(ellipse at top left, rgba(30, 166, 114, 0.14) 0%, transparent 60%),
              radial-gradient(ellipse at bottom right, rgba(30, 166, 114, 0.14) 0%, transparent 60%),
              #ffffff;
            overflow: hidden; position: relative;
          }
          .ksp-hero-grid { display: grid; grid-template-columns: minmax(0,1fr) minmax(0,1fr); gap: 48px; align-items: center; }
          .ksp-hero-left .section-tag::before { display: none; }
          .ksp-hero-left h1 { margin-bottom: 18px; }
          .ksp-hero-left .section-sub { margin-bottom: 32px; max-width: 480px; }
          .ksp-btns { display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 28px; }
          .ksp-proof { display: flex; align-items: center; gap: 6px; font-size: 13px; color: var(--ink3); }

          .ksp-hero-visual {
            position: relative; border-radius: 20px; overflow: hidden;
            box-shadow: 0 28px 70px rgba(15,22,35,.09);
            max-width: 480px; width: 100%; margin: 0 auto; background: var(--soft);
          }
          .ksp-hero-visual img { width: 100%; height: auto; display: block; }

          @media(max-width:1000px){
            .ksp-hero-grid { grid-template-columns: 1fr; }
            .ksp-hero-visual { max-width: 520px; }
          }

          /* What You Get — highlighted through the tinted background, a
             centered tag, and gradient icon "medallions"; deliberately NOT
             a bordered card/box, so it reads differently from every other
             panel on the page. Items sit in one open row divided by thin
             rules, not stacked inside a container. */
          .ksp-whatget {
            padding: 64px 0 72px; position: relative; overflow: hidden;
            background:
              radial-gradient(ellipse at top right, rgba(30,166,114,0.14) 0%, transparent 55%),
              radial-gradient(ellipse at bottom left, rgba(30,166,114,0.10) 0%, transparent 55%),
              var(--soft);
            border-top: 1px solid var(--border); border-bottom: 1px solid var(--border);
          }
          .ksp-whatget-head { text-align: center; max-width: 720px; margin: 0 auto 48px; }
          .ksp-whatget-tag {
            display: inline-flex; align-items: center; gap: 8px; background: var(--gl); color: var(--gd);
            font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: .06em;
            padding: 6px 14px; border-radius: 100px; margin-bottom: 16px;
          }
          .ksp-whatget-head h2 { font-size: clamp(20px, 2.4vw, 32px); margin-bottom: 0; white-space: nowrap; }
          @media(max-width:560px){
            .ksp-whatget-head h2 { white-space: normal; font-size: clamp(20px, 5.5vw, 24px); }
          }

          .ksp-whatget-row {
            display: flex; align-items: flex-start; justify-content: center;
            max-width: 1000px; margin: 0 auto; flex-wrap: wrap;
          }
          .ksp-whatget-item {
            flex: 1 1 210px; display: flex; flex-direction: column; align-items: center;
            text-align: center; gap: 16px; padding: 0 26px; position: relative;
          }
          .ksp-whatget-item:not(:last-child)::after {
            content: ''; position: absolute; right: 0; top: 4px; bottom: 4px; width: 1px; background: var(--gm);
          }
          .ksp-whatget-ico {
            width: 54px; height: 54px; border-radius: 50%;
            background: linear-gradient(135deg, #1ea672, #17845b); color: #fff;
            display: flex; align-items: center; justify-content: center;
            box-shadow: 0 10px 24px rgba(30,166,114,.32);
          }
          .ksp-whatget-item p { font-size: 14.5px; font-weight: 600; color: var(--ink2); line-height: 1.5; max-width: 200px; }

          @media(max-width:820px){
            .ksp-whatget-row { flex-direction: column; align-items: center; gap: 32px; }
            .ksp-whatget-item { padding: 0; }
            .ksp-whatget-item:not(:last-child)::after { display: none; }
          }

          /* Feature sections: text one side, visual the other, alternating.
             Sections are told apart with a subtle background tint instead
             of borders — cleaner, and it reads better as one continuous
             page instead of a stack of boxed-off blocks. */
          .ksp-feature { padding: 72px 0; }
          .ksp-feature-alt { background: var(--soft); }
          /* Panels that normally sit on soft background flip to white when
             their section is the alternate (soft) one, so they still read
             as a distinct panel instead of blending into the section bg */
          .ksp-feature-alt .ksp-pipeline-viz,
          .ksp-feature-alt .ksp-line-viz,
          .ksp-feature-alt .ksp-layers-viz { background: #fff; }
          .ksp-feature-grid { display: grid; grid-template-columns: minmax(0,1fr) minmax(0,1fr); gap: 56px; align-items: center; }
          .ksp-feature-tag { font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: .05em; color: var(--g); margin-bottom: 12px; }
          .ksp-feature h2 { font-size: clamp(24px, 2.4vw, 30px); color: var(--ink); margin-bottom: 14px; }
          .ksp-feature-sub { color: var(--ink3); font-size: 15.5px; line-height: 1.75; margin-bottom: 22px; max-width: 460px; }
          .ksp-feature ul { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 14px; }
          .ksp-feature li { display: flex; align-items: flex-start; gap: 10px; font-size: 14.5px; color: var(--ink2); line-height: 1.55; max-width: 440px; }
          .ksp-feature li svg { color: var(--g); flex-shrink: 0; margin-top: 2px; }

          @media(max-width:900px){
            .ksp-feature-grid { grid-template-columns: 1fr; }
          }

          /* New account foundation — layered "build it up" stack instead of
             a plain grid, each layer narrower than the one below it */
          .ksp-layers-viz {
            background: var(--soft); border-radius: 16px; padding: 28px 24px;
            display: flex; flex-direction: column-reverse; gap: 12px; align-items: center;
          }
          .ksp-layer {
            width: 100%; background: #fff; border: 1px solid var(--border); border-radius: 12px;
            padding: 16px 20px; display: flex; align-items: center; gap: 14px;
            transition: transform .25s ease, box-shadow .25s ease;
          }
          .ksp-layer:hover { transform: translateX(4px); box-shadow: 0 8px 20px rgba(15,22,35,.06); }
          .ksp-layer:nth-child(1) { max-width: 340px; }
          .ksp-layer:nth-child(2) { max-width: 296px; }
          .ksp-layer:nth-child(3) { max-width: 252px; }
          .ksp-layer:nth-child(4) { max-width: 208px; border-color: var(--gm); background: var(--gl); }
          .ksp-layer-ico {
            width: 38px; height: 38px; border-radius: 10px; background: var(--gl); color: var(--g);
            display: flex; align-items: center; justify-content: center; flex-shrink: 0;
          }
          .ksp-layer:nth-child(4) .ksp-layer-ico { background: #fff; }
          .ksp-layer span { font-size: 13px; font-weight: 700; color: var(--ink2); }

          /* Migration diagram — a filter/pipeline visual: contacts flow in,
             the funnel filters dead weight out, a clean set lands in Klaviyo */
          .ksp-pipeline-viz {
            background: var(--soft); border-radius: 16px; padding: 32px 20px;
            display: flex; align-items: center; justify-content: center; gap: 8px;
          }
          .ksp-pipe-end {
            flex-shrink: 0; min-width: 92px; background: #fff; border: 1px solid var(--border);
            border-radius: 12px; padding: 18px 14px; text-align: center;
          }
          .ksp-pipe-end.to { border-color: var(--gm); background: var(--gl); }
          .ksp-pipe-end span { display: block; font-size: 11px; font-weight: 700; color: var(--ink4); text-transform: uppercase; letter-spacing: .03em; margin-bottom: 8px; }
          .ksp-pipe-end strong { font-size: 13.5px; color: var(--ink); }
          .ksp-pipe-track { flex: 1; min-width: 32px; display: flex; align-items: center; justify-content: center; gap: 6px; }
          .ksp-pipe-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--g); flex-shrink: 0; }
          .ksp-pipe-dot.faded { background: var(--border); }
          .ksp-funnel { flex-shrink: 0; color: var(--g); }
          @media(max-width:480px){ .ksp-pipe-end { min-width: 76px; padding: 14px 8px; } }

          /* Integrations — radial hub-spoke: everything feeding into one
             central Klaviyo hub */
          .ksp-hub-viz { position: relative; width: 100%; max-width: 340px; aspect-ratio: 1/1; margin: 0 auto; }
          .ksp-hub-lines { position: absolute; inset: 0; width: 100%; height: 100%; }
          .ksp-hub-center {
            position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%);
            width: 34%; aspect-ratio: 1/1; border-radius: 50%;
            background: linear-gradient(135deg, #1ea672, #17845b); color: #fff;
            display: flex; align-items: center; justify-content: center;
            font-size: 12.5px; font-weight: 800; letter-spacing: .02em; text-align: center;
            box-shadow: 0 16px 40px rgba(30,166,114,.3); z-index: 2; padding: 6px;
          }
          .ksp-hub-node {
            position: absolute; transform: translate(-50%,-50%);
            width: 30%; display: flex; flex-direction: column; align-items: center; gap: 6px; z-index: 2;
          }
          .ksp-hub-node-ico {
            width: 76px; height: 76px; border-radius: 18px; background: #fff; border: 1px solid var(--border);
            color: var(--g); display: flex; align-items: center; justify-content: center;
            box-shadow: 0 6px 16px rgba(15,22,35,.06);
          }
          .ksp-hub-node span { font-size: 10.5px; font-weight: 700; color: var(--ink3); }

          /* Warm-up — an ascending line chart instead of bars */
          .ksp-line-viz { background: var(--soft); border-radius: 16px; padding: 24px 20px 20px; }
          .ksp-line-viz svg { display: block; width: 100%; height: auto; margin-bottom: 10px; }
          .ksp-chart-labels { display: flex; gap: 10px; }
          .ksp-chart-labels span { flex: 1; text-align: center; font-size: 10.5px; color: var(--ink4); font-weight: 600; }
          .ksp-chart-tag {
            display: inline-flex; align-items: center; gap: 6px; margin-top: 14px;
            background: var(--gl); color: var(--gd); font-size: 12px; font-weight: 700;
            padding: 5px 12px; border-radius: 20px;
          }

          /* Cost minimization — horizontal comparison bars instead of two
             stacked cards, so the "less is more" shrink actually reads */
          .ksp-barcomp-viz {
            background: #fff; border: 1px solid var(--border); border-radius: 16px;
            padding: 28px 26px; display: flex; flex-direction: column; gap: 24px;
          }
          .ksp-barcomp-row { display: flex; flex-direction: column; gap: 9px; }
          .ksp-barcomp-label { display: flex; justify-content: space-between; align-items: baseline; gap: 10px; }
          .ksp-barcomp-label span { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: .04em; color: var(--ink4); }
          .ksp-barcomp-label strong { font-size: 15px; color: var(--ink); }
          .ksp-barcomp-track { height: 11px; border-radius: 6px; background: var(--soft); overflow: hidden; }
          .ksp-barcomp-fill { height: 100%; border-radius: 6px; }
          .ksp-barcomp-fill.before { background: var(--ink4); }
          .ksp-barcomp-fill.after { background: linear-gradient(90deg, #1ea672, #17845b); }
          .ksp-barcomp-cost { font-size: 12.5px; color: var(--ink4); text-align: right; }

          /* Included */
          .ksp-included { background: var(--soft); padding: 72px 0; }
          .ksp-included-grid { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 18px 40px; max-width: 880px; margin: 0 auto; }
          .ksp-included-item { display: flex; align-items: flex-start; gap: 12px; font-size: 15px; color: var(--ink2); font-weight: 600; }
          .ksp-included-item svg { color: var(--g); flex-shrink: 0; margin-top: 2px; }
          @media(max-width:640px){ .ksp-included-grid { grid-template-columns: 1fr; } }

          /* How it works */
          .ksp-steps { padding: 72px 0 88px; }
          .ksp-steps-grid { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 32px; }
          .ksp-step { min-width: 0; }
          .ksp-step-num {
            width: 44px; height: 44px; border-radius: 50%;
            background: var(--gl); color: var(--gd); font-weight: 800; font-size: 15px;
            display: flex; align-items: center; justify-content: center; margin-bottom: 18px;
          }
          .ksp-step h3 { font-size: 17px; color: var(--ink); margin-bottom: 8px; }
          .ksp-step p { font-size: 14px; color: var(--ink3); line-height: 1.7; }
          @media(max-width:900px){ .ksp-steps-grid { grid-template-columns: 1fr; } }

          .ksp-bottom { text-align: center; padding: 64px 0 96px; }
          .ksp-bottom p { color: var(--ink3); font-size: 16px; margin-bottom: 24px; }
        `}</style>

        <section className="ksp-hero">
          <div className="wrap ksp-hero-grid">
            <div className="ksp-hero-left" data-reveal="up">
              <div className="section-tag">Klaviyo Account Setup</div>
              <h1 style={{ fontSize: 'clamp(32px,3.8vw,46px)' }}>Set up right from day one,<br /><em style={{ color: 'var(--g)', fontStyle: 'normal' }}>or migrated over without losing a thing.</em></h1>
              <p className="section-sub">Starting fresh on Klaviyo or moving from another platform, we handle the entire account: clean data, proper integrations, and flows built to convert from week one.</p>
              <div className="ksp-btns">
                <Link href="/#contact" className="btn-primary">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                  Book a Free Call
                </Link>
                <Link href="/#cases" className="btn-ghost">See Case Studies →</Link>
              </div>
              <div className="ksp-proof">
                <span style={{ color: '#f5a623', fontSize: '15px', letterSpacing: '1px' }}>⭐⭐⭐⭐⭐</span>
                <span>5.0 · 752 reviews on Upwork</span>
              </div>
            </div>

            <div className="ksp-hero-visual" data-reveal="right" style={{ transitionDelay: '150ms' }}>
              {/* Replace with a relevant photo/screenshot: drop the file at
                  public/images/services/klaviyo-account-setup.jpg (or update
                  the src below to whatever path/filename you use). */}
              <Image
                src="/images/services/klaviyo-account-setup.jpg"
                alt="Klaviyo account setup"
                width={480}
                height={400}
              />
            </div>
          </div>
        </section>

        <section className="ksp-whatget">
          <div className="wrap">
            <div className="ksp-whatget-head" data-reveal="up">
              <div className="ksp-whatget-tag">What You Get</div>
              <h2>Everything included, <em style={{ color: 'var(--g)', fontStyle: 'normal' }}>nothing left to guess.</em></h2>
            </div>
            <div className="ksp-whatget-row">
              {whatYouGet.map((item, i) => (
                <div key={item.label} className="ksp-whatget-item" data-reveal="up" style={{ transitionDelay: `${i * 90}ms` }}>
                  <div className="ksp-whatget-ico"><item.icon size={22} strokeWidth={1.75} /></div>
                  <p>{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="ksp-feature">
          <div className="wrap ksp-feature-grid">
            <div data-reveal="up">
              <div className="ksp-feature-tag">New Account Setup</div>
              <h2>Starting from zero?<br />We build the foundation right.</h2>
              <p className="ksp-feature-sub">No history to untangle, but plenty to get right from the start: proper list structure, a verified sending domain, and an account built to scale instead of getting rebuilt in six months.</p>
              <ul>
                <li><Settings2 size={17} /> Account structure, lists, and custom properties set up the right way from day one</li>
                <li><Settings2 size={17} /> Sending domain fully authenticated (SPF, DKIM, DMARC) so your first email lands in the inbox</li>
                <li><Settings2 size={17} /> Branded templates and sign-up forms ready before your first campaign goes out</li>
              </ul>
            </div>
            <div className="ksp-layers-viz" data-reveal="zoom" style={{ transitionDelay: '120ms' }}>
              {foundationItems.map((f) => (
                <div key={f.label} className="ksp-layer">
                  <div className="ksp-layer-ico"><f.icon size={17} strokeWidth={1.75} /></div>
                  <span>{f.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="ksp-feature ksp-feature-alt">
          <div className="wrap ksp-feature-grid">
            <div className="ksp-pipeline-viz" data-reveal="zoom">
              <div className="ksp-pipe-end"><span>From</span><strong>Old Platform</strong></div>
              <div className="ksp-pipe-track">
                <div className="ksp-pipe-dot" /><div className="ksp-pipe-dot faded" /><div className="ksp-pipe-dot" /><div className="ksp-pipe-dot faded" /><div className="ksp-pipe-dot" />
              </div>
              <svg className="ksp-funnel" width="20" height="24" viewBox="0 0 20 24" fill="none">
                <path d="M0 0H20L13 12V22L7 24V12L0 0Z" fill="currentColor" opacity="0.15" />
                <path d="M0 0H20L13 12V22L7 24V12L0 0Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
              </svg>
              <div className="ksp-pipe-track">
                <div className="ksp-pipe-dot" /><div className="ksp-pipe-dot" /><div className="ksp-pipe-dot" />
              </div>
              <div className="ksp-pipe-end to"><span>To</span><strong>Klaviyo</strong></div>
            </div>
            <div data-reveal="up" style={{ transitionDelay: '120ms' }}>
              <div className="ksp-feature-tag">List Migration</div>
              <h2>Moving platforms?<br />Nothing gets lost on the way.</h2>
              <p className="ksp-feature-sub">If you're coming from Mailchimp, Omnisend, or anywhere else, your list, history, and segments move over clean, not just copy-pasted.</p>
              <ul>
                <li><RefreshCw size={17} /> Inactive and unengaged contacts filtered out before they hit your new list</li>
                <li><RefreshCw size={17} /> Tags, segments, and purchase history mapped over correctly</li>
                <li><RefreshCw size={17} /> Full historical data preserved so your flows keep the context they need</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="ksp-feature">
          <div className="wrap ksp-feature-grid">
            <div data-reveal="up">
              <div className="ksp-feature-tag">Integrations</div>
              <h2>Every tool you already use,<br />connected properly.</h2>
              <p className="ksp-feature-sub">Klaviyo is only as good as the data flowing into it. We connect your full stack so nothing is guessed at.</p>
              <ul>
                <li><CheckCircle2 size={17} /> Shopify, reviews, subscriptions, and support tools synced in</li>
                <li><CheckCircle2 size={17} /> Events fire at the right time so flows react to real behavior</li>
                <li><CheckCircle2 size={17} /> Richer segmentation from day one, because the data is actually there</li>
              </ul>
            </div>
            <div className="ksp-hub-viz" data-reveal="zoom" style={{ transitionDelay: '120ms' }}>
              <svg className="ksp-hub-lines" viewBox="0 0 100 100" preserveAspectRatio="none">
                {integrationNodes.map((n) => (
                  <line key={n.label} x1="50" y1="50" x2={n.x} y2={n.y} stroke="var(--border)" strokeWidth="1" />
                ))}
              </svg>
              <div className="ksp-hub-center">Klaviyo</div>
              {integrationNodes.map((n) => (
                <div key={n.label} className="ksp-hub-node" style={{ left: `${n.x}%`, top: `${n.y}%` }}>
                  <div className="ksp-hub-node-ico"><n.icon size={36} /></div>
                  <span>{n.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="ksp-feature ksp-feature-alt">
          <div className="wrap ksp-feature-grid">
            <div className="ksp-line-viz" data-reveal="zoom">
              <svg viewBox="0 0 240 100" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="kspLineFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#1ea672" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#1ea672" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M10 82 L52 68 L94 52 L136 36 L178 18 L230 4 L230 100 L10 100 Z" fill="url(#kspLineFill)" />
                <polyline points="10,82 52,68 94,52 136,36 178,18 230,4" fill="none" stroke="#1ea672" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                {[[10, 82], [52, 68], [94, 52], [136, 36], [178, 18], [230, 4]].map(([x, y], i) => (
                  <circle key={i} cx={x} cy={y} r="4" fill="#fff" stroke="#1ea672" strokeWidth="2.5" />
                ))}
              </svg>
              <div className="ksp-chart-labels">
                <span>Wk 1</span><span>Wk 2</span><span>Wk 3</span><span>Wk 4</span><span>Wk 5</span><span>Wk 6</span>
              </div>
              <div className="ksp-chart-tag"><TrendingUp size={14} /> Deliverability Protected</div>
            </div>
            <div data-reveal="up" style={{ transitionDelay: '120ms' }}>
              <div className="ksp-feature-tag">Account Warm-Up</div>
              <h2>Deliverability protected<br />from the very first send.</h2>
              <p className="ksp-feature-sub">A new account (or a big list import) can tank your inbox placement if you send too much, too soon. We ramp it up on a schedule instead.</p>
              <ul>
                <li><TrendingUp size={17} /> Sending volume increased gradually, not all at once</li>
                <li><TrendingUp size={17} /> Domain and sender reputation protected during ramp-up</li>
                <li><TrendingUp size={17} /> A strong inbox placement foundation before your first big campaign</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="ksp-feature">
          <div className="wrap ksp-feature-grid">
            <div data-reveal="up">
              <div className="ksp-feature-tag">Cost Minimization</div>
              <h2>A cleaner list costs less,<br />and performs better.</h2>
              <p className="ksp-feature-sub">Klaviyo bills by profile count. Cleaning out dead weight before migration often pays for the whole project.</p>
              <ul>
                <li><DollarSign size={17} /> Unengaged and duplicate profiles removed before they cost you monthly</li>
                <li><DollarSign size={17} /> Smaller, cleaner list with better open and click rates across the board</li>
                <li><DollarSign size={17} /> Typical savings land in the thousands per year, not just a one-time cleanup</li>
              </ul>
            </div>
            <div className="ksp-barcomp-viz" data-reveal="zoom" style={{ transitionDelay: '120ms' }}>
              <div className="ksp-barcomp-row">
                <div className="ksp-barcomp-label"><span>Before</span><strong>85,000 profiles</strong></div>
                <div className="ksp-barcomp-track"><div className="ksp-barcomp-fill before" style={{ width: '100%' }} /></div>
                <div className="ksp-barcomp-cost">$720/mo</div>
              </div>
              <div className="ksp-barcomp-row">
                <div className="ksp-barcomp-label"><span>After</span><strong>52,000 profiles</strong></div>
                <div className="ksp-barcomp-track"><div className="ksp-barcomp-fill after" style={{ width: '61%' }} /></div>
                <div className="ksp-barcomp-cost">$395/mo</div>
              </div>
            </div>
          </div>
        </section>

        <section className="ksp-included">
          <div className="wrap">
            <div className="sh-row" style={{ textAlign: 'center', marginBottom: '40px' }} data-reveal="up">
              <h2>What&apos;s <em style={{ color: 'var(--g)', fontStyle: 'normal' }}>included.</em></h2>
              <p className="section-sub" style={{ margin: '0 auto' }}>Everything needed to get your account fully live and producing revenue.</p>
            </div>
            <div className="ksp-included-grid">
              {included.map((item, i) => (
                <div key={item} className="ksp-included-item" data-reveal="up" style={{ transitionDelay: `${i * 60}ms` }}>
                  <CheckCircle2 size={19} strokeWidth={2} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="ksp-steps">
          <div className="wrap">
            <div className="sh-row" style={{ textAlign: 'center', marginBottom: '48px' }} data-reveal="up">
              <h2>How it <em style={{ color: 'var(--g)', fontStyle: 'normal' }}>works.</em></h2>
              <p className="section-sub" style={{ margin: '0 auto' }}>Three steps, start to finish.</p>
            </div>
            <div className="ksp-steps-grid">
              {steps.map((s, i) => (
                <div key={s.n} className="ksp-step" data-reveal="up" style={{ transitionDelay: `${i * 100}ms` }}>
                  <div className="ksp-step-num">{s.n}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="ksp-bottom" data-reveal="up">
          <p>Ready to get your Klaviyo account set up right?</p>
          <Link href="/#contact" className="btn-primary">Book a Free Call →</Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
