import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../../components/Navbar'
import { Footer } from '../../components/Sections'
import {
  CheckCircle2, RefreshCw, TrendingUp, DollarSign,
  Settings2, ShieldCheck, ListChecks,
} from 'lucide-react'

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
            max-width: 650px; width: 100%; margin: 0 auto; background: var(--soft);
          }
          .ksp-hero-visual img { width: 100%; height: auto; display: block; }

          @media(max-width:1000px){
            .ksp-hero-grid { grid-template-columns: 1fr; }
            .ksp-hero-visual { max-width: 600px; }
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
          /* Diagram photo panels flip to white when their section is the
             alternate (soft) one, so they still read as a distinct panel
             instead of blending into the section bg */
          .ksp-feature-alt .ksp-diagram-img { background: #fff; }
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

          /* Diagram photos — the feature-section visuals are now real
             infographic images rather than hand-built CSS/SVG diagrams.
             One shared frame keeps them consistent: rounded corners, a
             soft shadow, and a tinted loading background. */
          .ksp-diagram-img {
            border-radius: 16px; overflow: hidden; background: var(--soft);
            box-shadow: 0 20px 50px rgba(15,22,35,.08);
          }
          .ksp-diagram-img img { width: 100%; height: auto; display: block; }

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
              <Image
                src="/images/services/klaviyo-account-setup/hero-dashboard.jpg"
                alt="Klaviyo account dashboard: verified sending domain, Shopify synced, 99.4% deliverability"
                width={1400}
                height={764}
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
            <div className="ksp-diagram-img" data-reveal="zoom" style={{ transitionDelay: '120ms' }}>
              <Image
                src="/images/services/klaviyo-account-setup/foundation-setup.jpg"
                alt="Unified technical setup: account structure, domain authentication, branding & templates, lists & properties"
                width={1400}
                height={764}
              />
            </div>
          </div>
        </section>

        <section className="ksp-feature ksp-feature-alt">
          <div className="wrap ksp-feature-grid">
            <div className="ksp-diagram-img" data-reveal="zoom">
              <Image
                src="/images/services/klaviyo-account-setup/list-migration.jpg"
                alt="List migration from Mailchimp, Omnisend, and ActiveCampaign into Klaviyo with zero data loss"
                width={1400}
                height={764}
              />
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
            <div className="ksp-diagram-img" data-reveal="zoom" style={{ transitionDelay: '120ms' }}>
              <Image
                src="/images/services/klaviyo-account-setup/integrations-hub.jpg"
                alt="Klaviyo connected to Shopify, ads, reviews, subscriptions, and support tools"
                width={1400}
                height={781}
              />
            </div>
          </div>
        </section>

        <section className="ksp-feature ksp-feature-alt">
          <div className="wrap ksp-feature-grid">
            <div className="ksp-diagram-img" data-reveal="zoom">
              <Image
                src="/images/services/klaviyo-account-setup/deliverability-rampup.jpg"
                alt="Six-week email sending ramp-up timeline ending in a protected safe send zone"
                width={1400}
                height={764}
              />
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
            <div className="ksp-diagram-img" data-reveal="zoom" style={{ transitionDelay: '120ms' }}>
              <Image
                src="/images/services/klaviyo-account-setup/cost-minimization.jpg"
                alt="Cost minimization: cutting unengaged profiles from 85,000 to 52,000 saves $3,900 annually"
                width={1400}
                height={764}
              />
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
