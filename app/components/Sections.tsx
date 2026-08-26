import Link from 'next/link'
import Image from 'next/image'

/* ══════════════ INSIGHTS ══════════════ */

function FlowThumb() {
  return (
    <div className="ins-thumb ins-thumb-green">
      <div className="flow-wrap">
        <div className="flow-node"><div className="flow-node-bar" /></div>
        <div className="flow-connector"><div className="flow-line" /><div className="flow-arrowhead" /></div>
        <div className="flow-node"><div className="flow-node-bar" /></div>
        <div className="flow-connector"><div className="flow-line" /><div className="flow-arrowhead" /></div>
        <div className="flow-node"><div className="flow-node-bar" /></div>
      </div>
    </div>
  )
}

function ChartThumb() {
  const bars: [string, string][] = [
    ['55%', 'rgba(30,166,114,.3)'],
    ['80%', 'rgba(30,166,114,.5)'],
    ['45%', 'rgba(30,166,114,.25)'],
    ['70%', 'rgba(30,166,114,.4)'],
  ]
  return (
    <div className="ins-thumb ins-thumb-green">
      <div className="chart-wrap">
        {bars.map(([h, bg], i) => (
          <div key={i} className="chart-bar" style={{ height: h, background: bg }} />
        ))}
      </div>
    </div>
  )
}

function CodeThumb() {
  const lines: [string][] = [['75%'], ['55%'], ['90%'], ['60%'], ['40%']]
  return (
    <div className="ins-thumb ins-thumb-green">
      <div className="code-wrap">
        {lines.map(([w], i) => (
          <div key={i} className="code-line">
            <div className="code-dot" />
            <div className="code-bar" style={{ width: w }} />
          </div>
        ))}
      </div>
    </div>
  )
}

const articles = [
  { cat: 'Klaviyo', date: 'April 2026', title: 'The 5 Klaviyo Flows Every eCommerce Store Needs in 2026', body: "If you're not running these five automation flows, you're leaving serious money on the table.", Thumb: FlowThumb },
  { cat: 'Deliverability', date: 'March 2026', title: 'Why Your Email Open Rates Dropped: And How to Fix It', body: "MPP changed everything. Here's how to interpret your metrics accurately post-2026.", Thumb: ChartThumb },
  { cat: 'Development', date: 'February 2026', title: 'HTML Email vs Drag-and-Drop: Which Converts Better?', body: 'We ran the same campaign in custom HTML and a builder. The results might surprise you.', Thumb: CodeThumb },
]

export function Insights() {
  return (
    <>
      <style>{`
        .insights { background: #fff; padding: 96px 0; }
        .ins-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; }
        .ins-card { border: 1px solid var(--border); border-radius: 18px; overflow: hidden; cursor: pointer; transition: box-shadow .2s, transform .2s; text-decoration: none; display: block; position: relative; z-index: 1; }
        .ins-card:hover { box-shadow: 0 10px 30px rgba(0,0,0,.07); transform: translateY(-2px); }
        .ins-thumb { height: 180px; display: flex; align-items: center; justify-content: center; }
        .ins-thumb-green { background: linear-gradient(135deg,#e8f5f0,#d0ede3); width: 100%; }
        .ins-body { padding: 26px 24px; }
        .ins-meta { display: flex; align-items: center; gap: 10px; margin-bottom: 14px; }
        .ins-cat { background: var(--gl); color: var(--gd); font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: .06em; padding: 3px 10px; border-radius: 4px; }
        .ins-date { font-size: 12px; color: var(--ink4); }
        .ins-card h3 { font-size: 16px; line-height: 1.35; margin-bottom: 10px; color: var(--ink); }
        .ins-card p { font-size: 13.5px; color: var(--ink3); line-height: 1.7; }
        .ins-read { margin-top: 18px; color: var(--g); font-size: 13px; font-weight: 600; display: flex; align-items: center; gap: 5px; transition: gap .18s; }
        .ins-card:hover .ins-read { gap: 9px; }
        .ins-cta { text-align: center; margin-top: 48px; }

        /* Flow thumb */
        .flow-wrap { display: flex; align-items: center; gap: 8px; }
        .flow-node { width: 52px; height: 32px; border-radius: 8px; background: rgba(30,166,114,.2); border: 1.5px solid rgba(30,166,114,.4); display: flex; align-items: center; justify-content: center; }
        .flow-node-bar { width: 28px; height: 6px; border-radius: 3px; background: rgba(30,166,114,.5); }
        .flow-connector { display: flex; align-items: center; }
        .flow-line { width: 14px; height: 1.5px; background: rgba(30,166,114,.45); }
        .flow-arrowhead { width: 0; height: 0; border-top: 4px solid transparent; border-bottom: 4px solid transparent; border-left: 5px solid rgba(30,166,114,.45); }

        /* Chart thumb */
        .chart-wrap { display: flex; align-items: flex-end; gap: 10px; height: 80px; }
        .chart-bar { width: 24px; border-radius: 4px 4px 0 0; }

        /* Code thumb */
        .code-wrap { display: flex; flex-direction: column; gap: 10px; width: 140px; }
        .code-line { display: flex; align-items: center; gap: 8px; }
        .code-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--g); flex-shrink: 0; }
        .code-bar { height: 5px; border-radius: 3px; background: rgba(30,166,114,.3); }

        @media(max-width:768px){ .ins-grid { grid-template-columns: 1fr; } }
      `}</style>
      <section className="insights" id="insights">
        <div className="wrap">
          <div className="sh-row">
            <h2>Email marketing <em>know-how.</em></h2>
            <p className="section-sub">Practical guides and strategy for email marketers who want to grow faster.</p>
          </div>
          <div className="ins-grid">
            {articles.map((a) => (
              <Link key={a.title} href="/insights" className="ins-card">
                <a.Thumb />
                <div className="ins-body">
                  <div className="ins-meta">
                    <span className="ins-cat">{a.cat}</span>
                    <span className="ins-date">{a.date}</span>
                  </div>
                  <h3>{a.title}</h3>
                  <p>{a.body}</p>
                  <div className="ins-read">Read Article →</div>
                </div>
              </Link>
            ))}
          </div>
          <div className="ins-cta">
            <Link href="/insights" className="link-more">All Articles →</Link>
          </div>
        </div>
      </section>
    </>
  )
}

/* ══════════════ ABOUT ══════════════ */
const checks = [
  'Klaviyo Partner & Certified Expert',
  'Pixel-perfect cross-client HTML development',
  'Figma / PSD / XD to HTML conversion',
  'Full ESP account setup & migration',
  'eCommerce automation strategy & execution',
]

export function About() {
  return (
    <>
      <style>{`
        .about { background: var(--dark); padding: 96px 0; }
        .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
        .about-vis { border-radius: 18px; overflow: hidden; background: var(--dark2); border: 1px solid rgba(255,255,255,.06); }
        .av-main { padding: 48px; display: flex; align-items: center; justify-content: center; font-size: 88px; background: linear-gradient(135deg,rgba(30,166,114,.1),transparent); min-height: 320px; }
        .av-row { display: grid; grid-template-columns: 1fr 1fr; border-top: 1px solid rgba(255,255,255,.06); }
        .av-stat { padding: 22px 24px; text-align: center; }
        .av-stat:first-child { border-right: 1px solid rgba(255,255,255,.06); }
        .av-num { font-family: 'Inter', sans-serif; font-size: 28px; font-weight: 800; color: var(--g); }
        .av-lbl { font-size: 11.5px; color: rgba(255,255,255,.35); margin-top: 3px; }
        .about h2 { color: #fff; text-align: left; }
        .about p { color: rgba(255,255,255,.55); font-size: 15px; line-height: 1.85; margin-bottom: 16px; }
        .about-checks { list-style: none; margin: 28px 0 36px; }
        .about-checks li { display: flex; align-items: center; gap: 12px; padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,.06); color: rgba(255,255,255,.7); font-size: 14.5px; }
        .chk { width: 22px; height: 22px; border-radius: 50%; background: var(--g); color: #fff; display: flex; align-items: center; justify-content: center; font-size: 11px; flex-shrink: 0; }
        @media(max-width:768px){ .about-grid { grid-template-columns: 1fr; } }
      `}</style>
      <section className="about" id="about">
        <div className="wrap">
          <div className="about-grid">
            <div className="about-vis">
              <div className="av-main">📨</div>
              <div className="av-row">
                <div className="av-stat"><div className="av-num">807+</div><div className="av-lbl">Upwork Projects</div></div>
                <div className="av-stat"><div className="av-num">13+ yrs</div><div className="av-lbl">Experience</div></div>
              </div>
            </div>
            <div>
              <h2>Built by a Shopify &amp; email obsessive.</h2>
              <p>PlusSquire is a boutique Shopify development and email marketing agency run by Zahidul Islam, a specialist with 13+ years of hands-on eCommerce development, HTML email, and marketing automation experience.</p>
              <p>With 7,000+ templates built and 807+ projects delivered on Upwork as a Top Rated Plus freelancer with 100% JSS, we bring deep technical expertise and a performance-first mindset to every project.</p>
              <ul className="about-checks">
                {checks.map((c) => (
                  <li key={c}><span className="chk">✓</span>{c}</li>
                ))}
              </ul>
              <Link href="#contact" className="btn-primary">Work With Us →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

/* ══════════════ PORTFOLIO ══════════════ */
const portfolio = [
  { emoji: '🛍️', title: 'Welcome Series',        sub: 'Klaviyo · eCommerce', cls: 'pi1' },
  { emoji: '🛒', title: 'Abandoned Cart Flow',    sub: 'Klaviyo · Fashion',   cls: 'pi2' },
  { emoji: '🎯', title: 'Promotional Campaign',   sub: 'Mailchimp · Retail',  cls: 'pi3' },
  { emoji: '📦', title: 'Post-Purchase Sequence', sub: 'HubSpot · DTC',       cls: 'pi4' },
  { emoji: '📰', title: 'Newsletter Template',    sub: 'Marketo · B2B SaaS', cls: 'pi2' },
  { emoji: '💌', title: 'Win-Back Campaign',      sub: 'Klaviyo · Beauty',    cls: 'pi1' },
  { emoji: '📋', title: 'Transactional Email',    sub: 'SendGrid · SaaS',     cls: 'pi4' },
  { emoji: '📱', title: 'SMS + Email Flow',       sub: 'Klaviyo · Shopify',   cls: 'pi3' },
]

export function Portfolio() {
  return (
    <>
      <style>{`
        .portfolio { background: var(--soft); padding: 96px 0; }
        .port-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 14px; }
        .port-item { border-radius: 12px; overflow: hidden; aspect-ratio: .76; position: relative; z-index: 1; border: 1px solid var(--border); cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 44px; transition: transform .25s; }
        .port-item:hover { transform: scale(.97); }
        .pi1{background:linear-gradient(135deg,#eaf7f1,#b8e8d0)}
        .pi2{background:linear-gradient(135deg,#eff6ff,#bfdbfe)}
        .pi3{background:linear-gradient(135deg,#fef9ee,#fde68a80)}
        .pi4{background:linear-gradient(135deg,#fdf4ff,#e9d5ff80)}
        .port-overlay { position: absolute; inset: 0; background: rgba(11,15,24,.84); display: flex; flex-direction: column; align-items: center; justify-content: center; color: #fff; padding: 20px; text-align: center; opacity: 0; transition: opacity .22s; }
        .port-item:hover .port-overlay { opacity: 1; }
        .port-overlay h4 { font-size: 14.5px; font-weight: 700; margin-bottom: 5px; color: #fff; }
        .port-overlay p { font-size: 12px; color: rgba(255,255,255,.6); }
        .port-btn { margin-top: 12px; background: var(--g); color: #fff; font-size: 12px; font-weight: 600; padding: 6px 16px; border-radius: 20px; }
        @media(max-width:1100px){ .port-grid { grid-template-columns: repeat(2,1fr); } }
      `}</style>
      <section className="portfolio" id="portfolio">
        <div className="wrap">
          <div className="sh-row">
            <h2>Some of our <em>recent work.</em></h2>
            <p className="section-sub">Responsive, beautiful email templates — battle-tested across all major clients.</p>
            <Link href="/portfolio" className="link-more">Full Portfolio →</Link>
          </div>
          <div className="port-grid">
            {portfolio.map((p) => (
              <div key={p.title} className={`port-item ${p.cls}`}>
                {p.emoji}
                <div className="port-overlay">
                  <h4>{p.title}</h4>
                  <p>{p.sub}</p>
                  <div className="port-btn">View →</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

/* ══════════════ STATS BAR ══════════════ */
export function StatsBar() {
  return (
    <>
      <style>{`
        .hero-stats-bar { background: var(--dark); }
        .hero-stats-inner {
          max-width: var(--max); margin: 0 auto;
          padding: 30px var(--px);
          display: flex;
        }
        .hs-item {
          flex: 1; text-align: center; padding: 0 24px;
          border-right: 1px solid rgba(255,255,255,.07);
        }
        .hs-item:last-child { border-right: none; }
        .hs-num { font-family: 'Inter', sans-serif; font-size: 36px; font-weight: 800; color: #fff; line-height: 1; }
        .hs-num span { color: var(--g); }
        .hs-lbl { font-size: 12.5px; color: rgba(255,255,255,.4); margin-top: 5px; }
        @media(max-width:1100px){
          .hero-stats-inner { flex-wrap: wrap; }
          .hs-item { border-right: none; padding: 12px 0; }
        }
      `}</style>
      <div className="hero-stats-bar">
        <div className="hero-stats-inner">
          {[
            { num: '7,000', sup: '+',     lbl: 'Email Templates Built' },
            { num: '800',   sup: '+',     lbl: 'Projects Delivered' },
            { num: '13',    sup: '+ yrs', lbl: 'Industry Experience' },
            { num: '100',   sup: '%',     lbl: 'Job Success Score' },
            { num: 'Top',   sup: ' ⭐',   lbl: 'Rated Plus · Upwork' },
          ].map((s) => (
            <div key={s.lbl} className="hs-item">
              <div className="hs-num">{s.num}<span>{s.sup}</span></div>
              <div className="hs-lbl">{s.lbl}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

/* ══════════════ CTA BAND ══════════════ */
export function CtaBand() {
  return (
    <>
      <style>{`
        .cta-band { background: linear-gradient(135deg, #0f7a52 0%, #1ea672 40%, #25c98a 100%); padding: 80px 0; }
        .cta-inner { display: flex; align-items: center; justify-content: space-between; gap: 40px; flex-wrap: wrap; }
        .cta-band h2 { color: #fff; margin: 0; }
        .cta-band h2 em { font-style: normal; color: rgba(255,255,255,.65); }
        .btn-cta-white { background: transparent; color: #fff; border: 2px solid rgba(255,255,255,0.7); padding: 14px 32px; border-radius: 9px; font-size: 15px; font-weight: 700; text-decoration: none; flex-shrink: 0; white-space: nowrap; transition: border-color .18s, background .18s, transform .18s; position: relative; z-index: 1; }
        .btn-cta-white:hover { transform: translateY(-2px); border-color: #fff; background: rgba(255,255,255,0.12); }
        @media(max-width:768px){ .cta-band { padding: 60px 0; } }
      `}</style>
      <div className="cta-band">
        <div className="wrap">
          <div className="cta-inner">
            <h2>Ready to turn your email list<br />into your <em>best sales channel?</em></h2>
            <Link href="#contact" className="btn-cta-white">Let&apos;s Talk →</Link>
          </div>
        </div>
      </div>
    </>
  )
}

/* ══════════════ CONTACT ══════════════ */
export function Contact() {
  return (
    <>
      <style>{`
        .contact { background: #fff; padding: 96px 0; }
        .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: stretch; }
        .contact-left h2 { text-align: left; }
        .contact-left p { color: var(--ink3); font-size: 15.5px; line-height: 1.8; margin-bottom: 36px; }
        .cinfo { display: flex; align-items: center; gap: 14px; margin-bottom: 14px; color: var(--ink2); font-size: 14.5px; }
        .cinfo-ico { width: 36px; height: 36px; border-radius: 9px; background: var(--gl); color: var(--g); display: flex; align-items: center; justify-content: center; font-size: 15px; flex-shrink: 0; }
        .cal-block { margin-top: 36px; background: var(--soft); border: 1px solid var(--border); border-radius: 14px; padding: 28px; }
        .cal-block h4 { font-size: 16px; margin-bottom: 8px; color: var(--ink); }
        .cal-block p { font-size: 14px; color: var(--ink3); margin-bottom: 18px; }
        .btn-cal { display: inline-flex; align-items: center; gap: 8px; background: var(--ink); color: #fff; padding: 12px 22px; border-radius: 8px; font-size: 14px; font-weight: 600; text-decoration: none; transition: background .18s; }
        .btn-cal:hover { background: var(--ink2); }
        .contact-form { background: var(--soft); border: 1px solid var(--border); border-radius: 20px; padding: 40px; height: 100%; box-sizing: border-box; }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
        .fg { display: flex; flex-direction: column; gap: 7px; margin-bottom: 14px; }
        label { font-size: 11.5px; font-weight: 700; letter-spacing: .07em; text-transform: uppercase; color: var(--ink3); }
        input,textarea,select { background: #fff; border: 1.5px solid var(--border); color: var(--ink); padding: 12px 15px; border-radius: 8px; font-size: 14.5px; font-family: inherit; outline: none; transition: border-color .18s, box-shadow .18s; width: 100%; -webkit-appearance: none; }
        input:focus,textarea:focus,select:focus { border-color: var(--g); box-shadow: 0 0 0 3px rgba(30,166,114,.1); }
        textarea { min-height: 120px; resize: vertical; }
        .form-submit { width: 100%; background: var(--g); color: #fff; border: none; cursor: pointer; padding: 14px; border-radius: 9px; font-size: 15px; font-weight: 700; font-family: inherit; transition: background .18s, transform .18s; margin-top: 4px; position: relative; z-index: 1; }
        .form-submit:hover { background: var(--gd); transform: translateY(-1px); }
        @media(max-width:768px){ .contact-grid { grid-template-columns: 1fr; } .form-row { grid-template-columns: 1fr; } }
      `}</style>
      <section className="contact" id="contact">
        <div className="wrap">
          <div className="contact-grid">
            <div className="contact-left">
              <h2>Let&apos;s build something<br /><em>great together.</em></h2>
              <p>Whether you need a single template or a full email program overhaul, we&apos;d love to hear about your project. We typically respond within 24 hours.</p>
              <div className="cinfo">
                <div className="cinfo-ico"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 7L2 7"/></svg></div>
                hello@plussquire.com
              </div>
              <div className="cinfo">
                <div className="cinfo-ico"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div>
                Responds within 24 hours
              </div>
              <div className="cinfo">
                <div className="cinfo-ico"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg></div>
                Working with clients globally
              </div>
              <div className="cinfo">
                <div className="cinfo-ico"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></div>
                Top Rated Plus · 100% Job Success
              </div>
              <div className="cal-block">
                <h4>📅 Prefer to talk first?</h4>
                <p>Book a free 30-minute discovery call, no commitment, just a quick chat to see if we&apos;re a good fit.</p>
                <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="btn-cal">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                  Book a Free Discovery Call
                </a>
              </div>
            </div>
            <div className="contact-form">
              <div className="form-row">
                <div className="fg"><label>First Name</label><input type="text" placeholder="John" /></div>
                <div className="fg"><label>Last Name</label><input type="text" placeholder="Smith" /></div>
              </div>
              <div className="fg"><label>Email Address</label><input type="email" placeholder="john@company.com" /></div>
              <div className="fg"><label>Company / Website</label><input type="text" placeholder="mystore.com" /></div>
              <div className="fg">
                <label>Service Needed</label>
                <select>
                  <option value="">Select a service...</option>
                  {['Shopify Theme Development','Shopify Migration','Shopify Speed Optimization','Shopify App & Custom Features','Email Design','Email Development','Email Campaigns','Email Automations','Sign-Up Forms','SMS Campaigns','Klaviyo Account Set-Up','Account Audit'].map(s => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div className="fg"><label>Message</label><textarea placeholder="Tell us about your project, current ESP, and goals..." /></div>
              <button className="form-submit">Send Message →</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

/* ══════════════ FOOTER ══════════════ */
export function Footer() {
  return (
    <>
      <style>{`
        footer { background: var(--dark); padding: 72px 0 36px; }
        .footer-inner { max-width: var(--max); margin: 0 auto; padding: 0 var(--px); }
        .footer-top { display: grid; grid-template-columns: 2.2fr 1fr 1fr 1fr; gap: 60px; padding-bottom: 56px; border-bottom: 1px solid rgba(255,255,255,.07); }
        .footer-logo { display: flex; align-items: center; gap: 8px; text-decoration: none; margin-bottom: 16px; font-family: 'Inter', sans-serif; font-weight: 800; font-size: 20px; color: #fff; }
        .logo-mark-sm { width: 28px; height: 28px; border-radius: 7px; background: var(--g); display: flex; align-items: center; justify-content: center; font-size: 14px; }
        .footer-desc { color: rgba(255,255,255,.38); font-size: 14px; line-height: 1.8; max-width: 280px; margin-bottom: 24px; }
        .social-links { display: flex; gap: 10px; }
        .social-btn { width: 36px; height: 36px; border-radius: 8px; border: 1px solid rgba(255,255,255,.1); display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 700; text-decoration: none; color: rgba(255,255,255,.5); transition: border-color .15s, color .15s; }
        .social-btn:hover { border-color: var(--g); color: var(--g); }
        .fcol h4 { font-size: 11px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; color: rgba(255,255,255,.3); margin-bottom: 20px; }
        .fcol ul { list-style: none; }
        .fcol ul li { margin-bottom: 11px; }
        .fcol ul li a { color: rgba(255,255,255,.5); font-size: 14px; text-decoration: none; transition: color .15s; }
        .fcol ul li a:hover { color: #fff; }
        .footer-bottom { padding-top: 30px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px; color: rgba(255,255,255,.25); font-size: 13px; }
        .footer-bottom a { color: rgba(255,255,255,.4); text-decoration: none; transition: color .15s; }
        .footer-bottom a:hover { color: #fff; }
        @media(max-width:1100px){ .footer-top { grid-template-columns: 1fr 1fr; } }
        @media(max-width:480px){ .footer-top { grid-template-columns: 1fr; gap: 32px; } }
      `}</style>
      <footer>
        <div className="footer-inner">
          <div className="footer-top">
            <div>
              <Link href="/" className="footer-logo">
                <Image src="/plussquire-logo.png" alt="PlusSquire" width={120} height={24} style={{ filter: 'brightness(0) invert(1)' }} priority />
              </Link>
              <p className="footer-desc">Shopify development and email marketing for eCommerce brands that take revenue seriously. Top Rated Plus on Upwork. 13+ years. 800+ projects delivered.</p>
              <div className="social-links">
                <a href="#" className="social-btn">in</a>
                <a href="#" className="social-btn">𝕏</a>
                <a href="#" className="social-btn">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
                </a>
                <a href="#" className="social-btn">Up</a>
              </div>
            </div>
            <div className="fcol">
              <h4>Services</h4>
              <ul>
                {['Shopify Development','Shopify Migration','Email Design','Email Automations','Klaviyo Set-Up'].map(s => (
                  <li key={s}><Link href="/services">{s}</Link></li>
                ))}
              </ul>
            </div>
            <div className="fcol">
              <h4>Company</h4>
              <ul>
                {[['About Us','/about'],['Case Studies','/case-studies'],['Pricing','/pricing'],['Portfolio','/portfolio'],['Insights','/insights']].map(([l,h]) => (
                  <li key={l}><Link href={h}>{l}</Link></li>
                ))}
              </ul>
            </div>
            <div className="fcol">
              <h4>Connect</h4>
              <ul>
                <li><a href="#">LinkedIn</a></li>
                <li><a href="#">Upwork Profile</a></li>
                <li><a href="#">Twitter / X</a></li>
                <li><a href="mailto:hello@plussquire.com">hello@plussquire.com</a></li>
                <li><a href="https://calendly.com" target="_blank" rel="noopener noreferrer">Book a Call</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 PlusSquire. All rights reserved.</span>
            <span><Link href="/privacy">Privacy Policy</Link> · <Link href="/terms">Terms &amp; Conditions</Link></span>
          </div>
        </div>
      </footer>
    </>
  )
}
