import Link from 'next/link'
import Navbar from '../../components/Navbar'
import { Footer } from '../../components/Sections'
import {
  CheckCircle2, Megaphone, Mail, Rocket, Zap, MessageSquare,
  SplitSquareHorizontal, Target, Star, UserPlus, Heart, RotateCcw,
  Clock, ShieldCheck, TrendingUp,
} from 'lucide-react'

const ecpHubNodes = [
  { icon: Megaphone, label: 'Promo',          x: 50, y: 8 },
  { icon: Mail,       label: 'Newsletter',    x: 89, y: 35 },
  { icon: Rocket,     label: 'Product Launch', x: 74, y: 88 },
  { icon: Zap,        label: 'Flash Sale',    x: 26, y: 88 },
  { icon: Target,     label: 'Win-Back',      x: 11, y: 35 },
]

const ecpFoundationItems = [
  { icon: Star,      label: 'VIP Customers' },
  { icon: UserPlus,  label: 'First-Time Buyers' },
  { icon: Heart,     label: 'Engaged Subscribers' },
  { icon: RotateCcw, label: 'Win-Back List' },
]

const ecpIncluded = [
  "Campaign calendar planning aligned to your promos & launches",
  'On-brand copywriting for every campaign',
  'Subject line & preview text A/B testing',
  'Segmented send strategy, never a batch-and-blast list',
  'Send-time optimization tailored per segment',
  'Deliverability monitoring & inbox placement checks',
  'Full design & deployment on your email platform',
  'Post-send performance reporting on every campaign',
]

const ecpSteps = [
  { n: '01', title: 'Plan the Calendar', desc: 'We map campaigns to your promo calendar, product launches and seasonal moments so nothing gets sent without a purpose.' },
  { n: '02', title: 'Write, Design & Test', desc: 'Copy, subject lines and creative are drafted and A/B tested before anything goes out to your list.' },
  { n: '03', title: 'Deploy & Report', desc: 'Segmented sends deploy on schedule, then get reported on so we can double down on what actually worked.' },
]

export default function EmailCampaignsPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '68px' }}>
        <style>{`
          .ecp-hero {
            padding: 64px 0 76px;
            background:
              radial-gradient(ellipse at top left, rgba(30, 166, 114, 0.14) 0%, transparent 60%),
              radial-gradient(ellipse at bottom right, rgba(30, 166, 114, 0.14) 0%, transparent 60%),
              #ffffff;
            overflow: hidden; position: relative;
          }
          .ecp-hero-grid { display: grid; grid-template-columns: minmax(0,1fr) minmax(0,1fr); gap: 48px; align-items: center; }
          .ecp-hero-left .section-tag::before { display: none; }
          .ecp-hero-left h1 { margin-bottom: 18px; }
          .ecp-hero-left .section-sub { margin-bottom: 32px; max-width: 480px; }
          .ecp-btns { display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 28px; }
          .ecp-proof { display: flex; align-items: center; gap: 6px; font-size: 13px; color: var(--ink3); }

          .ecp-hero-card {
            background: #fff; border: 1px solid var(--border); border-radius: 20px;
            padding: 40px 38px; box-shadow: 0 28px 70px rgba(15,22,35,.09);
            max-width: 480px; width: 100%; margin: 0 auto;
          }
          .ecp-hero-card-title { font-size: 14px; font-weight: 800; text-transform: uppercase; letter-spacing: .04em; color: var(--g); margin-bottom: 22px; }
          .ecp-hero-card ul { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 20px; }
          .ecp-hero-card li { display: flex; align-items: flex-start; gap: 12px; font-size: 15.5px; color: var(--ink2); line-height: 1.5; }
          .ecp-hero-card li svg { color: var(--g); flex-shrink: 0; margin-top: 2px; }

          @media(max-width:1000px){
            .ecp-hero-grid { grid-template-columns: 1fr; }
            .ecp-hero-card { max-width: 520px; }
          }

          .ecp-feature { padding: 72px 0; }
          .ecp-feature-alt { background: var(--soft); }
          .ecp-feature-alt .ecp-migrate-viz,
          .ecp-feature-alt .ecp-chart-viz,
          .ecp-feature-alt .ecp-foundation-viz { background: #fff; }
          .ecp-feature-grid { display: grid; grid-template-columns: minmax(0,1fr) minmax(0,1fr); gap: 56px; align-items: center; }
          .ecp-feature-tag { font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: .05em; color: var(--g); margin-bottom: 12px; }
          .ecp-feature h2 { font-size: clamp(24px, 2.4vw, 30px); color: var(--ink); margin-bottom: 14px; }
          .ecp-feature-sub { color: var(--ink3); font-size: 15.5px; line-height: 1.75; margin-bottom: 22px; max-width: 460px; }
          .ecp-feature ul { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 14px; }
          .ecp-feature li { display: flex; align-items: flex-start; gap: 10px; font-size: 14.5px; color: var(--ink2); line-height: 1.55; max-width: 440px; }
          .ecp-feature li svg { color: var(--g); flex-shrink: 0; margin-top: 2px; }

          @media(max-width:900px){
            .ecp-feature-grid { grid-template-columns: 1fr; }
          }

          .ecp-hub-viz { position: relative; width: 100%; max-width: 340px; aspect-ratio: 1/1; margin: 0 auto; }
          .ecp-hub-lines { position: absolute; inset: 0; width: 100%; height: 100%; }
          .ecp-hub-center {
            position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%);
            width: 34%; aspect-ratio: 1/1; border-radius: 50%;
            background: linear-gradient(135deg, #1ea672, #17845b); color: #fff;
            display: flex; align-items: center; justify-content: center;
            font-size: 12.5px; font-weight: 800; letter-spacing: .02em; text-align: center;
            box-shadow: 0 16px 40px rgba(30,166,114,.3); z-index: 2; padding: 6px;
          }
          .ecp-hub-node {
            position: absolute; transform: translate(-50%,-50%);
            width: 30%; display: flex; flex-direction: column; align-items: center; gap: 6px; z-index: 2;
          }
          .ecp-hub-node-ico {
            width: 38px; height: 38px; border-radius: 10px; background: #fff; border: 1px solid var(--border);
            color: var(--g); display: flex; align-items: center; justify-content: center;
            box-shadow: 0 6px 16px rgba(15,22,35,.06);
          }
          .ecp-hub-node span { font-size: 10.5px; font-weight: 700; color: var(--ink3); }

          .ecp-migrate-viz {
            background: var(--soft); border-radius: 16px; padding: 32px 24px;
            display: flex; align-items: center; justify-content: center; gap: 14px;
          }
          .ecp-migrate-box {
            flex: 1; background: #fff; border: 1px solid var(--border); border-radius: 12px;
            padding: 22px 16px; text-align: center;
          }
          .ecp-migrate-box span { display: block; font-size: 12px; font-weight: 700; color: var(--ink4); text-transform: uppercase; letter-spacing: .03em; margin-bottom: 10px; }
          .ecp-migrate-box strong { font-size: 15px; color: var(--ink); }
          .ecp-migrate-arrow { color: var(--g); flex-shrink: 0; }

          .ecp-foundation-viz {
            background: var(--soft); border-radius: 16px; padding: 24px;
            display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 14px;
          }
          .ecp-foundation-card {
            background: #fff; border: 1px solid var(--border); border-radius: 12px;
            padding: 22px 14px; text-align: center;
          }
          .ecp-foundation-ico {
            width: 40px; height: 40px; border-radius: 10px; background: var(--gl); color: var(--g);
            display: flex; align-items: center; justify-content: center; margin: 0 auto 10px;
          }
          .ecp-foundation-card span { font-size: 12.5px; font-weight: 700; color: var(--ink2); line-height: 1.3; }

          .ecp-chart-viz { background: var(--soft); border-radius: 16px; padding: 32px 24px 20px; }
          .ecp-chart-bars { display: flex; align-items: flex-end; gap: 10px; height: 140px; margin-bottom: 12px; }
          .ecp-chart-bar { flex: 1; background: linear-gradient(180deg, #1ea672, #17845b); border-radius: 6px 6px 0 0; }
          .ecp-chart-labels { display: flex; gap: 10px; }
          .ecp-chart-labels span { flex: 1; text-align: center; font-size: 10.5px; color: var(--ink4); font-weight: 600; }
          .ecp-chart-tag {
            display: inline-flex; align-items: center; gap: 6px; margin-top: 14px;
            background: var(--gl); color: var(--gd); font-size: 12px; font-weight: 700;
            padding: 5px 12px; border-radius: 20px;
          }

          .ecp-included { background: var(--soft); padding: 72px 0; }
          .ecp-included-grid { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 18px 40px; max-width: 880px; margin: 0 auto; }
          .ecp-included-item { display: flex; align-items: flex-start; gap: 12px; font-size: 15px; color: var(--ink2); font-weight: 600; }
          .ecp-included-item svg { color: var(--g); flex-shrink: 0; margin-top: 2px; }
          @media(max-width:640px){ .ecp-included-grid { grid-template-columns: 1fr; } }

          .ecp-steps { padding: 72px 0 88px; }
          .ecp-steps-grid { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 32px; }
          .ecp-step { min-width: 0; }
          .ecp-step-num {
            width: 44px; height: 44px; border-radius: 50%;
            background: var(--gl); color: var(--gd); font-weight: 800; font-size: 15px;
            display: flex; align-items: center; justify-content: center; margin-bottom: 18px;
          }
          .ecp-step h3 { font-size: 17px; color: var(--ink); margin-bottom: 8px; }
          .ecp-step p { font-size: 14px; color: var(--ink3); line-height: 1.7; }
          @media(max-width:900px){ .ecp-steps-grid { grid-template-columns: 1fr; } }

          .ecp-bottom { text-align: center; padding: 64px 0 96px; }
          .ecp-bottom p { color: var(--ink3); font-size: 16px; margin-bottom: 24px; }
        `}</style>

        <section className="ecp-hero">
          <div className="wrap ecp-hero-grid">
            <div className="ecp-hero-left">
              <div className="section-tag">Email Campaigns</div>
              <h1 style={{ fontSize: 'clamp(32px,3.8vw,46px)' }}>Campaigns built<br /><em style={{ color: 'var(--g)', fontStyle: 'normal' }}>to drive real revenue.</em></h1>
              <p className="section-sub">Strategy, copy, design and deployment handled end to end, so every campaign is built to earn opens, clicks and sales, not just fill a calendar slot.</p>
              <div className="ecp-btns">
                <Link href="/#contact" className="btn-primary">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                  Book a Free Call
                </Link>
                <Link href="/#cases" className="btn-ghost">See Case Studies →</Link>
              </div>
              <div className="ecp-proof">
                <span style={{ color: '#f5a623', fontSize: '15px', letterSpacing: '1px' }}>⭐⭐⭐⭐⭐</span>
                <span>5.0 · 752 reviews on Upwork</span>
              </div>
            </div>

            <div className="ecp-hero-card">
              <div className="ecp-hero-card-title">What you get</div>
              <ul>
                <li><CheckCircle2 size={21} strokeWidth={2} /> A campaign calendar tied to your promos & launches</li>
                <li><CheckCircle2 size={21} strokeWidth={2} /> Copy & subject lines tested before every send</li>
                <li><CheckCircle2 size={21} strokeWidth={2} /> Segmented sends, never a one-size-fits-all blast</li>
                <li><CheckCircle2 size={21} strokeWidth={2} /> Performance reporting after every campaign</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="ecp-feature">
          <div className="wrap ecp-feature-grid">
            <div>
              <div className="ecp-feature-tag">Strategy & Planning</div>
              <h2>A calendar built around your business, not a template.</h2>
              <p className="ecp-feature-sub">Promos, newsletters, product launches and flash sales all mapped ahead of time, so every campaign has a purpose and nothing collides with your other marketing.</p>
              <ul>
                <li><Megaphone size={17} /> Promo & sale campaigns planned around your calendar</li>
                <li><Rocket size={17} /> Product launches sequenced for maximum impact</li>
                <li><Zap size={17} /> Flash sales slotted in without cannibalizing other sends</li>
              </ul>
            </div>
            <div className="ecp-hub-viz">
              <svg className="ecp-hub-lines" viewBox="0 0 100 100">
                {ecpHubNodes.map((node) => (
                  <line key={node.label} x1="50" y1="50" x2={node.x} y2={node.y} stroke="var(--border)" strokeWidth="1" />
                ))}
              </svg>
              <div className="ecp-hub-center">Campaign<br />Calendar</div>
              {ecpHubNodes.map((node) => (
                <div key={node.label} className="ecp-hub-node" style={{ left: `${node.x}%`, top: `${node.y}%` }}>
                  <div className="ecp-hub-node-ico"><node.icon size={17} /></div>
                  <span>{node.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="ecp-feature ecp-feature-alt">
          <div className="wrap ecp-feature-grid">
            <div className="ecp-migrate-viz">
              <div className="ecp-migrate-box">
                <span>Before</span>
                <strong>Generic Subject Line</strong>
              </div>
              <div className="ecp-migrate-arrow">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
              </div>
              <div className="ecp-migrate-box">
                <span>After</span>
                <strong>Tested & Optimized</strong>
              </div>
            </div>
            <div>
              <div className="ecp-feature-tag">Copy & Testing</div>
              <h2>Copy and subject lines that earn the open.</h2>
              <p className="ecp-feature-sub">We write copy in your brand voice, then A/B test subject lines and preview text so every send keeps improving instead of guessing.</p>
              <ul>
                <li><MessageSquare size={17} /> On-brand copy written for each campaign's goal</li>
                <li><SplitSquareHorizontal size={17} /> Subject line & preview text A/B testing on every send</li>
                <li><Target size={17} /> Winning variants rolled out to the full list automatically</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="ecp-feature">
          <div className="wrap ecp-feature-grid">
            <div>
              <div className="ecp-feature-tag">Segmentation</div>
              <h2>The right message, to the right list, every time.</h2>
              <p className="ecp-feature-sub">Batch-and-blast sends burn deliverability and annoy subscribers. We segment by behavior and value so VIPs, new buyers and lapsed subscribers each get what's relevant to them.</p>
              <ul>
                <li><Star size={17} /> VIP & repeat customers get offers worth their loyalty</li>
                <li><UserPlus size={17} /> First-time buyers nurtured toward a second purchase</li>
                <li><RotateCcw size={17} /> Win-back segments kept separate from your core list</li>
              </ul>
            </div>
            <div className="ecp-foundation-viz">
              {ecpFoundationItems.map((item) => (
                <div key={item.label} className="ecp-foundation-card">
                  <div className="ecp-foundation-ico"><item.icon size={20} /></div>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="ecp-feature ecp-feature-alt">
          <div className="wrap ecp-feature-grid">
            <div className="ecp-chart-viz">
              <div className="ecp-chart-bars">
                <div className="ecp-chart-bar" style={{ height: '44%' }} />
                <div className="ecp-chart-bar" style={{ height: '58%' }} />
                <div className="ecp-chart-bar" style={{ height: '74%' }} />
                <div className="ecp-chart-bar" style={{ height: '100%' }} />
              </div>
              <div className="ecp-chart-labels">
                <span>Wk 1</span>
                <span>Wk 2</span>
                <span>Wk 3</span>
                <span>Wk 4</span>
              </div>
              <div className="ecp-chart-tag"><TrendingUp size={13} /> +42% avg open rate</div>
            </div>
            <div>
              <div className="ecp-feature-tag">Send-Time & Deliverability</div>
              <h2>Sent at the right moment, landing in the inbox.</h2>
              <p className="ecp-feature-sub">We optimize send times per segment and keep a close eye on deliverability, so campaigns land in the inbox instead of the promotions tab or, worse, spam.</p>
              <ul>
                <li><Clock size={17} /> Send times optimized per segment's engagement patterns</li>
                <li><ShieldCheck size={17} /> Ongoing deliverability & inbox placement monitoring</li>
                <li><TrendingUp size={17} /> Open, click & revenue trends tracked send over send</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="ecp-included">
          <div className="wrap">
            <div className="sh-row" style={{ textAlign: 'center', marginBottom: '40px' }}>
              <h2>What&apos;s <em style={{ color: 'var(--g)', fontStyle: 'normal' }}>included.</em></h2>
              <p className="section-sub" style={{ margin: '0 auto' }}>Everything needed to turn a calendar slot into a campaign that performs.</p>
            </div>
            <div className="ecp-included-grid">
              {ecpIncluded.map((item) => (
                <div key={item} className="ecp-included-item">
                  <CheckCircle2 size={19} strokeWidth={2} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="ecp-steps">
          <div className="wrap">
            <div className="sh-row" style={{ textAlign: 'center', marginBottom: '48px' }}>
              <h2>How it <em style={{ color: 'var(--g)', fontStyle: 'normal' }}>works.</em></h2>
              <p className="section-sub" style={{ margin: '0 auto' }}>Three steps, start to finish.</p>
            </div>
            <div className="ecp-steps-grid">
              {ecpSteps.map((s) => (
                <div key={s.n} className="ecp-step">
                  <div className="ecp-step-num">{s.n}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="ecp-bottom">
          <p>Ready for campaigns that actually move revenue?</p>
          <Link href="/#contact" className="btn-primary">Book a Free Call →</Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
