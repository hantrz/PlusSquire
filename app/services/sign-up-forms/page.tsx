import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../../components/Navbar'
import { Footer } from '../../components/Sections'
import {
  CheckCircle2, Paintbrush, Smartphone, Sparkles,
  ListChecks, MousePointerClick, Clock, Users,
  Target, TrendingUp, Percent, LineChart,
} from 'lucide-react'

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

const whatYouGet = [
  { icon: Paintbrush,          label: 'On-brand pop-ups & embedded forms designed and built' },
  { icon: MousePointerClick,   label: 'Smart triggers tuned to visitor behavior' },
  { icon: Target,              label: 'Zero-party data capture for better segmentation' },
  { icon: Percent,             label: 'Ongoing A/B testing to keep conversion climbing' },
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

          .suf-hero-visual {
            position: relative; border-radius: 20px; overflow: hidden;
            box-shadow: 0 28px 70px rgba(15,22,35,.09);
            max-width: 650px; width: 100%; margin: 0 auto; background: var(--soft);
          }
          .suf-hero-visual img { width: 100%; height: auto; display: block; }

          @media(max-width:1000px){
            .suf-hero-grid { grid-template-columns: 1fr; }
            .suf-hero-visual { max-width: 600px; }
          }

          /* What You Get — highlighted through the tinted background, a
             centered tag, and gradient icon "medallions"; deliberately NOT
             a bordered card/box. Items sit in one open row divided by thin
             rules, not stacked inside a container. */
          .suf-whatget {
            padding: 64px 0 72px; position: relative; overflow: hidden;
            background:
              radial-gradient(ellipse at top right, rgba(30,166,114,0.14) 0%, transparent 55%),
              radial-gradient(ellipse at bottom left, rgba(30,166,114,0.10) 0%, transparent 55%),
              var(--soft);
            border-top: 1px solid var(--border); border-bottom: 1px solid var(--border);
          }
          .suf-whatget-head { text-align: center; max-width: 720px; margin: 0 auto 48px; }
          .suf-whatget-tag {
            display: inline-flex; align-items: center; gap: 8px; background: var(--gl); color: var(--gd);
            font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: .06em;
            padding: 6px 14px; border-radius: 100px; margin-bottom: 16px;
          }
          .suf-whatget-head h2 { font-size: clamp(20px, 2.4vw, 32px); margin-bottom: 0; white-space: nowrap; }
          @media(max-width:560px){
            .suf-whatget-head h2 { white-space: normal; font-size: clamp(20px, 5.5vw, 24px); }
          }

          .suf-whatget-row {
            display: flex; align-items: flex-start; justify-content: center;
            max-width: 1000px; margin: 0 auto; flex-wrap: wrap;
          }
          .suf-whatget-item {
            flex: 1 1 210px; display: flex; flex-direction: column; align-items: center;
            text-align: center; gap: 16px; padding: 0 26px; position: relative;
          }
          .suf-whatget-item:not(:last-child)::after {
            content: ''; position: absolute; right: 0; top: 4px; bottom: 4px; width: 1px; background: var(--gm);
          }
          .suf-whatget-ico {
            width: 54px; height: 54px; border-radius: 50%;
            background: linear-gradient(135deg, #1ea672, #17845b); color: #fff;
            display: flex; align-items: center; justify-content: center;
            box-shadow: 0 10px 24px rgba(30,166,114,.32);
          }
          .suf-whatget-item p { font-size: 14.5px; font-weight: 600; color: var(--ink2); line-height: 1.5; max-width: 200px; }

          @media(max-width:820px){
            .suf-whatget-row { flex-direction: column; align-items: center; gap: 32px; }
            .suf-whatget-item { padding: 0; }
            .suf-whatget-item:not(:last-child)::after { display: none; }
          }

          .suf-feature { padding: 72px 0; }
          .suf-feature-alt { background: var(--soft); }
          .suf-feature-alt .suf-diagram-img { background: #fff; }
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

          .suf-diagram-img {
            border-radius: 16px; overflow: hidden; background: var(--soft);
            box-shadow: 0 20px 50px rgba(15,22,35,.08);
          }
          .suf-diagram-img img { width: 100%; height: auto; display: block; }

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
            <div className="suf-hero-left" data-reveal="up">
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

            <div className="suf-hero-visual" data-reveal="right" style={{ transitionDelay: '150ms' }}>
              <Image
                src="/images/services/sign-up-forms/hero-popup-signups.jpg"
                alt="Sign-up pop-up on desktop and mobile offering 15% off a first order, with exit-triggered capture and +28% subscriber growth"
                width={1400}
                height={781}
                priority
              />
            </div>
          </div>
        </section>

        <section className="suf-whatget">
          <div className="wrap">
            <div className="suf-whatget-head" data-reveal="up">
              <div className="suf-whatget-tag">What You Get</div>
              <h2>Everything included, <em style={{ color: 'var(--g)', fontStyle: 'normal' }}>nothing left to guess.</em></h2>
            </div>
            <div className="suf-whatget-row">
              {whatYouGet.map((item, i) => (
                <div key={item.label} className="suf-whatget-item" data-reveal="up" style={{ transitionDelay: `${i * 90}ms` }}>
                  <div className="suf-whatget-ico"><item.icon size={22} strokeWidth={1.75} /></div>
                  <p>{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="suf-feature">
          <div className="wrap suf-feature-grid">
            <div data-reveal="up">
              <div className="suf-feature-tag">On-Brand Form Design</div>
              <h2>Forms that feel like part of your site, not a distraction.</h2>
              <p className="suf-feature-sub">Every form is designed to match your brand and convert without feeling pushy or out of place.</p>
              <ul>
                <li><Paintbrush size={17} /> Designed to match your site&apos;s look and feel</li>
                <li><Smartphone size={17} /> Fully responsive across mobile & desktop</li>
                <li><Sparkles size={17} /> Copy written to convert without feeling pushy</li>
              </ul>
            </div>
            <div className="suf-diagram-img" data-reveal="zoom" style={{ transitionDelay: '120ms' }}>
              <Image
                src="/images/services/sign-up-forms/on-brand-form-design.jpg"
                alt="On-brand sign-up form designs including a center pop-up modal, slide-in corner drawer, embedded inline form, and sticky teaser capsule"
                width={1400}
                height={764}
              />
            </div>
          </div>
        </section>

        <section className="suf-feature suf-feature-alt">
          <div className="wrap suf-feature-grid">
            <div className="suf-diagram-img" data-reveal="zoom" style={{ order: 1 }}>
              <Image
                src="/images/services/sign-up-forms/trigger-strategy.jpg"
                alt="Smart form triggers showing scroll depth, time on page, and exit-intent pop-up with a discount offer"
                width={1400}
                height={764}
              />
            </div>
            <div data-reveal="up" style={{ order: 2, transitionDelay: '120ms' }}>
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
            <div data-reveal="up">
              <div className="suf-feature-tag">Zero-Party Data Capture</div>
              <h2>Learn what your subscribers actually want.</h2>
              <p className="suf-feature-sub">Quiz-style questions double as segmentation, so new subscribers get relevant content from their very first email.</p>
              <ul>
                <li><ListChecks size={17} /> Quiz-style questions that double as segmentation</li>
                <li><Users size={17} /> Preferences captured at the point of signup</li>
                <li><Target size={17} /> Better-targeted flows from day one</li>
              </ul>
            </div>
            <div className="suf-diagram-img" data-reveal="zoom" style={{ transitionDelay: '120ms' }}>
              <Image
                src="/images/services/sign-up-forms/zero-party-data-capture.jpg"
                alt="Two-step zero-party data capture: a preference question followed by email capture, routing subscribers into men's and women's style segments"
                width={1400}
                height={764}
              />
            </div>
          </div>
        </section>

        <section className="suf-feature suf-feature-alt">
          <div className="wrap suf-feature-grid">
            <div className="suf-diagram-img" data-reveal="zoom" style={{ order: 1 }}>
              <Image
                src="/images/services/sign-up-forms/ab-testing-optimization.jpg"
                alt="A/B split test comparing a static headline at 1.8% conversion with a personalized offer at 4.6%, lifting signup rate from 1.8% to 4.6%"
                width={1400}
                height={764}
              />
            </div>
            <div data-reveal="up" style={{ order: 2, transitionDelay: '120ms' }}>
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
            <div className="sh-row" style={{ textAlign: 'center', marginBottom: '40px' }} data-reveal="up">
              <h2>What&apos;s <em style={{ color: 'var(--g)', fontStyle: 'normal' }}>included.</em></h2>
              <p className="section-sub" style={{ margin: '0 auto' }}>Everything needed to turn traffic into subscribers.</p>
            </div>
            <div className="suf-included-grid">
              {included.map((item, i) => (
                <div key={item} className="suf-included-item" data-reveal="up" style={{ transitionDelay: `${i * 60}ms` }}>
                  <CheckCircle2 size={19} strokeWidth={2} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="suf-steps">
          <div className="wrap">
            <div className="sh-row" style={{ textAlign: 'center', marginBottom: '48px' }} data-reveal="up">
              <h2>How it <em style={{ color: 'var(--g)', fontStyle: 'normal' }}>works.</em></h2>
              <p className="section-sub" style={{ margin: '0 auto' }}>Three steps, start to finish.</p>
            </div>
            <div className="suf-steps-grid">
              {steps.map((s, i) => (
                <div key={s.n} className="suf-step" data-reveal="up" style={{ transitionDelay: `${i * 100}ms` }}>
                  <div className="suf-step-num">{s.n}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="suf-bottom" data-reveal="up">
          <p>Ready to convert more of your traffic into subscribers?</p>
          <Link href="/#contact" className="btn-primary">Book a Free Call →</Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
