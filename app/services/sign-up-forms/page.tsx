import Link from 'next/link'
import Navbar from '../../components/Navbar'
import { Footer } from '../../components/Sections'
import {
  CheckCircle2, Paintbrush, Smartphone, Sparkles, Megaphone,
  ListChecks, Layers, Maximize2, MousePointerClick, Clock, Users,
  Target, TrendingUp, Percent, LineChart, ArrowRight,
} from 'lucide-react'

const formTypeItems = [
  { icon: Megaphone,   label: 'Pop-Up' },
  { icon: ListChecks,  label: 'Embedded' },
  { icon: Layers,      label: 'Flyout' },
  { icon: Maximize2,   label: 'Full-Screen' },
]

const triggerHubNodes = [
  { icon: MousePointerClick, label: 'Exit Intent',   x: 50, y: 8 },
  { icon: Clock,             label: 'Time on Page',  x: 89, y: 35 },
  { icon: LineChart,         label: 'Scroll Depth',  x: 74, y: 88 },
  { icon: Users,             label: 'New Visitor',   x: 26, y: 88 },
  { icon: Target,            label: 'Returning',     x: 11, y: 35 },
]

const included = [
  'Pop-up & embedded form design',
  'Exit-intent, timed & scroll-depth triggers',
  'Mobile-optimized responsive forms',
  'Zero-party data quiz flows',
  'Klaviyo integration & list tagging',
  'A/B testing program',
  'Monthly signup rate reporting',
  'Ongoing creative refreshes',
]

const steps = [
  { n: '01', title: 'Design & Strategy', desc: 'We design on-brand forms and map out which triggers and placements fit your traffic best.' },
  { n: '02', title: 'Build & Integrate', desc: 'Forms are built, connected to your platform, and tagged so every new subscriber lands in the right flow.' },
  { n: '03', title: 'Test & Optimize', desc: 'We run ongoing A/B tests on copy, offers, and triggers to keep your signup rate climbing.' },
]

export default function SignUpFormsPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '68px' }}>
        <style>{`
          .suf-hero {
            padding: 64px 0 76px;
            background:
              radial-gradient(ellipse at top left, rgba(30, 166, 114, 0.14) 0%, transparent 60%),
              radial-gradient(ellipse at bottom right, rgba(30, 166, 114, 0.14) 0%, transparent 60%),
              #ffffff;
            overflow: hidden; position: relative;
          }
          .suf-hero-grid { display: grid; grid-template-columns: minmax(0,1fr) minmax(0,1fr); gap: 48px; align-items: center; }
          .suf-hero-left .section-tag::before { display: none; }
          .suf-hero-left h1 { margin-bottom: 18px; }
          .suf-hero-left .section-sub { margin-bottom: 32px; max-width: 480px; }
          .suf-btns { display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 28px; }
          .suf-proof { display: flex; align-items: center; gap: 6px; font-size: 13px; color: var(--ink3); }

          .suf-hero-card {
            background: #fff; border: 1px solid var(--border); border-radius: 20px;
            padding: 40px 38px; box-shadow: 0 28px 70px rgba(15,22,35,.09);
            max-width: 480px; width: 100%; margin: 0 auto;
          }
          .suf-hero-card-title { font-size: 14px; font-weight: 800; text-transform: uppercase; letter-spacing: .04em; color: var(--g); margin-bottom: 22px; }
          .suf-hero-card ul { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 20px; }
          .suf-hero-card li { display: flex; align-items: flex-start; gap: 12px; font-size: 15.5px; color: var(--ink2); line-height: 1.5; }
          .suf-hero-card li svg { color: var(--g); flex-shrink: 0; margin-top: 2px; }

          @media(max-width:1000px){
            .suf-hero-grid { grid-template-columns: 1fr; }
            .suf-hero-card { max-width: 520px; }
          }

          .suf-feature { padding: 72px 0; }
          .suf-feature-alt { background: var(--soft); }
          .suf-feature-alt .suf-foundation-viz,
          .suf-feature-alt .suf-migrate-box,
          .suf-feature-alt .suf-cost-viz .suf-cost-card { background: #fff; }
          .suf-feature-grid { display: grid; grid-template-columns: minmax(0,1fr) minmax(0,1fr); gap: 56px; align-items: center; }
          .suf-feature-tag { font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: .05em; color: var(--g); margin-bottom: 12px; }
          .suf-feature h2 { font-size: clamp(24px, 2.4vw, 30px); color: var(--ink); margin-bottom: 14px; }
          .suf-feature-sub { color: var(--ink3); font-size: 15.5px; line-height: 1.75; margin-bottom: 22px; max-width: 460px; }
          .suf-feature ul { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 14px; }
          .suf-feature li { display: flex; align-items: flex-start; gap: 10px; font-size: 14.5px; color: var(--ink2); line-height: 1.55; max-width: 440px; }
          .suf-feature li svg { color: var(--g); flex-shrink: 0; margin-top: 2px; }

          @media(max-width:900px){
            .suf-feature-grid { grid-template-columns: 1fr; }
          }

          .suf-foundation-viz {
            background: var(--soft); border-radius: 16px; padding: 24px;
            display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 14px;
          }
          .suf-foundation-card {
            background: #fff; border: 1px solid var(--border); border-radius: 12px;
            padding: 22px 14px; text-align: center;
          }
          .suf-foundation-ico {
            width: 40px; height: 40px; border-radius: 10px; background: var(--gl); color: var(--g);
            display: flex; align-items: center; justify-content: center; margin: 0 auto 10px;
          }
          .suf-foundation-card span { font-size: 12.5px; font-weight: 700; color: var(--ink2); line-height: 1.3; }

          .suf-hub-viz { position: relative; width: 100%; max-width: 340px; aspect-ratio: 1/1; margin: 0 auto; }
          .suf-hub-lines { position: absolute; inset: 0; width: 100%; height: 100%; }
          .suf-hub-center {
            position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%);
            width: 34%; aspect-ratio: 1/1; border-radius: 50%;
            background: linear-gradient(135deg, #1ea672, #17845b); color: #fff;
            display: flex; align-items: center; justify-content: center;
            font-size: 12.5px; font-weight: 800; letter-spacing: .02em; text-align: center;
            box-shadow: 0 16px 40px rgba(30,166,114,.3); z-index: 2; padding: 6px;
          }
          .suf-hub-node {
            position: absolute; transform: translate(-50%,-50%);
            width: 30%; display: flex; flex-direction: column; align-items: center; gap: 6px; z-index: 2;
          }
          .suf-hub-node-ico {
            width: 38px; height: 38px; border-radius: 10px; background: #fff; border: 1px solid var(--border);
            color: var(--g); display: flex; align-items: center; justify-content: center;
            box-shadow: 0 6px 16px rgba(15,22,35,.06);
          }
          .suf-hub-node span { font-size: 10.5px; font-weight: 700; color: var(--ink3); }

          .suf-migrate-viz {
            background: var(--soft); border-radius: 16px; padding: 32px 24px;
            display: flex; align-items: center; justify-content: center; gap: 14px;
          }
          .suf-migrate-box {
            flex: 1; background: #fff; border: 1px solid var(--border); border-radius: 12px;
            padding: 22px 16px; text-align: center;
          }
          .suf-migrate-box span { display: block; font-size: 12px; font-weight: 700; color: var(--ink4); text-transform: uppercase; letter-spacing: .03em; margin-bottom: 10px; }
          .suf-migrate-box strong { font-size: 15px; color: var(--ink); }
          .suf-migrate-arrow { color: var(--g); flex-shrink: 0; }

          .suf-cost-viz { display: flex; align-items: center; gap: 14px; }
          .suf-cost-card {
            flex: 1; background: #fff; border: 1px solid var(--border); border-radius: 14px;
            padding: 22px 18px; text-align: center;
          }
          .suf-cost-card.after { border-color: var(--gm); background: var(--gl); }
          .suf-cost-card span { display: block; font-size: 11.5px; font-weight: 700; color: var(--ink4); text-transform: uppercase; letter-spacing: .03em; margin-bottom: 10px; }
          .suf-cost-num { font-size: 26px; font-weight: 800; color: var(--ink); margin-bottom: 4px; }
          .suf-cost-card.after .suf-cost-num { color: var(--gd); }
          .suf-cost-sub { font-size: 12.5px; color: var(--ink4); }
          .suf-cost-arrow { color: var(--g); flex-shrink: 0; }

          .suf-included { background: var(--soft); padding: 72px 0; }
          .suf-included-grid { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 18px 40px; max-width: 880px; margin: 0 auto; }
          .suf-included-item { display: flex; align-items: flex-start; gap: 12px; font-size: 15px; color: var(--ink2); font-weight: 600; }
          .suf-included-item svg { color: var(--g); flex-shrink: 0; margin-top: 2px; }
          @media(max-width:640px){ .suf-included-grid { grid-template-columns: 1fr; } }

          .suf-steps { padding: 72px 0 88px; }
          .suf-steps-grid { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 32px; }
          .suf-step { min-width: 0; }
          .suf-step-num {
            width: 44px; height: 44px; border-radius: 50%;
            background: var(--gl); color: var(--gd); font-weight: 800; font-size: 15px;
            display: flex; align-items: center; justify-content: center; margin-bottom: 18px;
          }
          .suf-step h3 { font-size: 17px; color: var(--ink); margin-bottom: 8px; }
          .suf-step p { font-size: 14px; color: var(--ink3); line-height: 1.7; }
          @media(max-width:900px){ .suf-steps-grid { grid-template-columns: 1fr; } }

          .suf-bottom { text-align: center; padding: 64px 0 96px; }
          .suf-bottom p { color: var(--ink3); font-size: 16px; margin-bottom: 24px; }
        `}</style>

        <section className="suf-hero">
          <div className="wrap suf-hero-grid">
            <div className="suf-hero-left">
              <div className="section-tag">Sign-Up Forms & Pop-Ups</div>
              <h1 style={{ fontSize: 'clamp(32px,3.8vw,46px)' }}>Turn more visitors into subscribers,<br /><em style={{ color: 'var(--g)', fontStyle: 'normal' }}>without hurting the experience.</em></h1>
              <p className="section-sub">High-converting pop-ups and embedded forms, designed on-brand and integrated directly with your platform.</p>
              <div className="suf-btns">
                <Link href="/#contact" className="btn-primary">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                  Book a Free Call
                </Link>
                <Link href="/#cases" className="btn-ghost">See Case Studies →</Link>
              </div>
              <div className="suf-proof">
                <span style={{ color: '#f5a623', fontSize: '15px', letterSpacing: '1px' }}>⭐⭐⭐⭐⭐</span>
                <span>5.0 · 752 reviews on Upwork</span>
              </div>
            </div>

            <div className="suf-hero-card">
              <div className="suf-hero-card-title">What you get</div>
              <ul>
                <li><CheckCircle2 size={21} strokeWidth={2} /> On-brand pop-ups & embedded forms designed and built</li>
                <li><CheckCircle2 size={21} strokeWidth={2} /> Smart triggers tuned to visitor behavior</li>
                <li><CheckCircle2 size={21} strokeWidth={2} /> Zero-party data capture for better segmentation</li>
                <li><CheckCircle2 size={21} strokeWidth={2} /> Ongoing A/B testing to keep conversion climbing</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="suf-feature">
          <div className="wrap suf-feature-grid">
            <div>
              <div className="suf-feature-tag">On-Brand Form Design</div>
              <h2>Forms that feel like part of your site, not a distraction.</h2>
              <p className="suf-feature-sub">Every form is designed to match your brand and convert without feeling pushy or out of place.</p>
              <ul>
                <li><Paintbrush size={17} /> Designed to match your site&apos;s look and feel</li>
                <li><Smartphone size={17} /> Fully responsive across mobile & desktop</li>
                <li><Sparkles size={17} /> Copy written to convert without feeling pushy</li>
              </ul>
            </div>
            <div className="suf-foundation-viz">
              {formTypeItems.map((item) => (
                <div key={item.label} className="suf-foundation-card">
                  <div className="suf-foundation-ico"><item.icon size={20} /></div>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="suf-feature suf-feature-alt">
          <div className="wrap suf-feature-grid">
            <div className="suf-hub-viz" style={{ order: 1 }}>
              <svg className="suf-hub-lines" viewBox="0 0 100 100" preserveAspectRatio="none">
                {triggerHubNodes.map((n) => (
                  <line key={n.label} x1="50" y1="50" x2={n.x} y2={n.y} stroke="var(--border)" strokeWidth="1" />
                ))}
              </svg>
              <div className="suf-hub-center">Triggers</div>
              {triggerHubNodes.map((n) => (
                <div key={n.label} className="suf-hub-node" style={{ left: `${n.x}%`, top: `${n.y}%` }}>
                  <div className="suf-hub-node-ico"><n.icon size={18} /></div>
                  <span>{n.label}</span>
                </div>
              ))}
            </div>
            <div style={{ order: 2 }}>
              <div className="suf-feature-tag">Trigger Strategy</div>
              <h2>Show the right form at the right moment.</h2>
              <p className="suf-feature-sub">Exit intent, timed delays, and scroll depth are all tuned per page so forms appear when visitors are most likely to convert.</p>
              <ul>
                <li><MousePointerClick size={17} /> Exit-intent capture before visitors leave</li>
                <li><Clock size={17} /> Time-on-page triggers tuned per page</li>
                <li><LineChart size={17} /> Scroll-depth triggers for engaged readers</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="suf-feature">
          <div className="wrap suf-feature-grid">
            <div>
              <div className="suf-feature-tag">Zero-Party Data Capture</div>
              <h2>Learn what your subscribers actually want.</h2>
              <p className="suf-feature-sub">Quiz-style questions double as segmentation, so new subscribers get relevant content from their very first email.</p>
              <ul>
                <li><ListChecks size={17} /> Quiz-style questions that double as segmentation</li>
                <li><Users size={17} /> Preferences captured at the point of signup</li>
                <li><Target size={17} /> Better-targeted flows from day one</li>
              </ul>
            </div>
            <div className="suf-migrate-viz">
              <div className="suf-migrate-box">
                <span>Step 1</span>
                <strong>Quiz Answered</strong>
              </div>
              <ArrowRight className="suf-migrate-arrow" size={20} />
              <div className="suf-migrate-box">
                <span>Step 2</span>
                <strong>Segment Assigned</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="suf-feature suf-feature-alt">
          <div className="wrap suf-feature-grid">
            <div className="suf-cost-viz" style={{ order: 1 }}>
              <div className="suf-cost-card">
                <span>Before</span>
                <div className="suf-cost-num">1.8%</div>
                <div className="suf-cost-sub">signup rate</div>
              </div>
              <ArrowRight className="suf-cost-arrow" size={22} />
              <div className="suf-cost-card after">
                <span>After</span>
                <div className="suf-cost-num">4.6%</div>
                <div className="suf-cost-sub">signup rate</div>
              </div>
            </div>
            <div style={{ order: 2 }}>
              <div className="suf-feature-tag">A/B Testing & Optimization</div>
              <h2>Signup rate that keeps climbing, not stalling.</h2>
              <p className="suf-feature-sub">Every form variant is tested against the next, so conversion rate improves month over month instead of flatlining.</p>
              <ul>
                <li><Percent size={17} /> Every form variant tested against the next</li>
                <li><TrendingUp size={17} /> Conversion rate tracked and improved monthly</li>
                <li><LineChart size={17} /> Clear reporting on signup performance</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="suf-included">
          <div className="wrap">
            <div className="sh-row" style={{ textAlign: 'center', marginBottom: '40px' }}>
              <h2>What&apos;s <em style={{ color: 'var(--g)', fontStyle: 'normal' }}>included.</em></h2>
              <p className="section-sub" style={{ margin: '0 auto' }}>Everything needed to turn traffic into subscribers.</p>
            </div>
            <div className="suf-included-grid">
              {included.map((item) => (
                <div key={item} className="suf-included-item">
                  <CheckCircle2 size={19} strokeWidth={2} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="suf-steps">
          <div className="wrap">
            <div className="sh-row" style={{ textAlign: 'center', marginBottom: '48px' }}>
              <h2>How it <em style={{ color: 'var(--g)', fontStyle: 'normal' }}>works.</em></h2>
              <p className="section-sub" style={{ margin: '0 auto' }}>Three steps, start to finish.</p>
            </div>
            <div className="suf-steps-grid">
              {steps.map((s) => (
                <div key={s.n} className="suf-step">
                  <div className="suf-step-num">{s.n}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="suf-bottom">
          <p>Ready to convert more of your traffic into subscribers?</p>
          <Link href="/#contact" className="btn-primary">Book a Free Call →</Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
