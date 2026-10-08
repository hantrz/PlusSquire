import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../../components/Navbar'
import { Footer } from '../../components/Sections'
import {
  CheckCircle2, Workflow, Target, ListChecks, Sparkles, Percent,
  TrendingUp, ShoppingCart, Eye, DollarSign, Repeat, RefreshCw,
} from 'lucide-react'
import type { Metadata } from 'next'
import { RelatedServices, ServiceFAQ, ServiceJsonLd, ServiceOffer, ServiceProof, ServiceUseCases } from '../../components/service/ServiceBlocks'
import { contactHref } from '../../lib/site'
import { serviceMetadata } from '../../lib/seo'

export const metadata: Metadata = serviceMetadata({
  slug: 'flow-setup',
  title: "Klaviyo Flow Setup",
  description: "Custom Klaviyo flows built for you: welcome series, browse and cart abandonment, post-purchase and win-back, with conditional logic, on-brand design and full testing before launch.",
  image: '/images/services/flow-setup/hero-flows-autopilot.jpg',
})

const included = [
  'Full flow strategy & customer journey map',
  'Welcome series (3-5 emails)',
  'Abandoned cart flow (multi-step)',
  'Browse abandonment flow',
  'Post-purchase flow with review requests',
  'Win-back flow for lapsed customers',
  'On-brand templates for every flow',
  'Flow performance report after 30 days',
]

const steps = [
  { n: '01', title: 'Map & Strategize', desc: 'We map your customer\'s full journey and rank which flows will move revenue fastest for your store.' },
  { n: '02', title: 'Build & Design', desc: 'Every flow is written, designed on-brand, and wired into your triggers, timing, and segments. A full build of 6 to 8 flows usually takes 7 to 14 business days.' },
  { n: '03', title: 'Launch & Optimize', desc: 'Flows go live, and we track performance to refine subject lines, timing, and offers over time.' },
]

const whatYouGet = [
  { icon: Workflow,     label: 'Full flow strategy mapped to your customer journey' },
  { icon: ShoppingCart, label: 'Welcome, cart, post-purchase & win-back flows built and live' },
  { icon: DollarSign,   label: 'On-brand templates tuned for opens, clicks & revenue' },
  { icon: TrendingUp,   label: 'Ongoing performance tracking so flows keep improving' },
]

export default function FlowSetupPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '68px' }}>
        <style>{`
          .flw-hero {
            padding: 64px 0 76px;
            background:
              radial-gradient(ellipse at top left, rgba(30, 166, 114, 0.14) 0%, transparent 60%),
              radial-gradient(ellipse at bottom right, rgba(30, 166, 114, 0.14) 0%, transparent 60%),
              #ffffff;
            overflow: hidden; position: relative;
          }
          .flw-hero-grid { display: grid; grid-template-columns: minmax(0,1fr) minmax(0,1fr); gap: 48px; align-items: center; }
          .flw-hero-left .section-tag::before { display: none; }
          .flw-hero-left h1 { margin-bottom: 18px; }
          .flw-hero-left .section-sub { margin-bottom: 32px; max-width: 480px; }
          .flw-btns { display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 28px; }
          .flw-proof { display: flex; align-items: center; gap: 6px; font-size: 13px; color: var(--ink3); }

          .flw-hero-visual {
            position: relative; border-radius: 20px; overflow: hidden;
            box-shadow: 0 28px 70px rgba(15,22,35,.09);
            max-width: 650px; width: 100%; margin: 0 auto; background: var(--soft);
          }
          .flw-hero-visual img { width: 100%; height: auto; display: block; }

          @media(max-width:1000px){
            .flw-hero-grid { grid-template-columns: 1fr; }
            .flw-hero-visual { max-width: 600px; }
          }

          /* What You Get — highlighted through the tinted background, a
             centered tag, and gradient icon "medallions"; deliberately NOT
             a bordered card/box. Items sit in one open row divided by thin
             rules, not stacked inside a container. */
          .flw-whatget {
            padding: 64px 0 72px; position: relative; overflow: hidden;
            background:
              radial-gradient(ellipse at top right, rgba(30,166,114,0.14) 0%, transparent 55%),
              radial-gradient(ellipse at bottom left, rgba(30,166,114,0.10) 0%, transparent 55%),
              var(--soft);
            border-top: 1px solid var(--border); border-bottom: 1px solid var(--border);
          }
          .flw-whatget-head { text-align: center; max-width: 720px; margin: 0 auto 48px; }
          .flw-whatget-tag {
            display: inline-flex; align-items: center; gap: 8px; background: var(--gl); color: var(--gd);
            font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: .06em;
            padding: 6px 14px; border-radius: 100px; margin-bottom: 16px;
          }
          .flw-whatget-head h2 { font-size: clamp(20px, 2.4vw, 32px); margin-bottom: 0; white-space: nowrap; }
          @media(max-width:560px){
            .flw-whatget-head h2 { white-space: normal; font-size: clamp(20px, 5.5vw, 24px); }
          }

          .flw-whatget-row {
            display: flex; align-items: flex-start; justify-content: center;
            max-width: 1000px; margin: 0 auto; flex-wrap: wrap;
          }
          .flw-whatget-item {
            flex: 1 1 210px; display: flex; flex-direction: column; align-items: center;
            text-align: center; gap: 16px; padding: 0 26px; position: relative;
          }
          .flw-whatget-item:not(:last-child)::after {
            content: ''; position: absolute; right: 0; top: 4px; bottom: 4px; width: 1px; background: var(--gm);
          }
          .flw-whatget-ico {
            width: 54px; height: 54px; border-radius: 50%;
            background: linear-gradient(135deg, #1ea672, #17845b); color: #fff;
            display: flex; align-items: center; justify-content: center;
            box-shadow: 0 10px 24px rgba(30,166,114,.32);
          }
          .flw-whatget-item p { font-size: 14.5px; font-weight: 600; color: var(--ink2); line-height: 1.5; max-width: 200px; }

          @media(max-width:820px){
            .flw-whatget-row { flex-direction: column; align-items: center; gap: 32px; }
            .flw-whatget-item { padding: 0; }
            .flw-whatget-item:not(:last-child)::after { display: none; }
          }

          .flw-feature { padding: 72px 0; }
          .flw-feature-alt { background: var(--soft); }
          .flw-feature-alt .flw-diagram-img { background: #fff; }
          .flw-feature-grid { display: grid; grid-template-columns: minmax(0,1fr) minmax(0,1fr); gap: 56px; align-items: center; }
          .flw-feature-tag { font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: .05em; color: var(--g); margin-bottom: 12px; }
          .flw-feature h2 { font-size: clamp(24px, 2.4vw, 30px); color: var(--ink); margin-bottom: 14px; }
          .flw-feature-sub { color: var(--ink3); font-size: 15.5px; line-height: 1.75; margin-bottom: 22px; max-width: 460px; }
          .flw-feature ul { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 14px; }
          .flw-feature li { display: flex; align-items: flex-start; gap: 10px; font-size: 14.5px; color: var(--ink2); line-height: 1.55; max-width: 440px; }
          .flw-feature li svg { color: var(--g); flex-shrink: 0; margin-top: 2px; }

          @media(max-width:900px){
            .flw-feature-grid { grid-template-columns: 1fr; }
          }

          .flw-diagram-img {
            border-radius: 16px; overflow: hidden; background: var(--soft);
            box-shadow: 0 20px 50px rgba(15,22,35,.08);
          }
          .flw-diagram-img img { width: 100%; height: auto; display: block; }

          .flw-included { background: var(--soft); padding: 72px 0; }
          .flw-included-grid { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 18px 40px; max-width: 880px; margin: 0 auto; }
          .flw-included-item { display: flex; align-items: flex-start; gap: 12px; font-size: 15px; color: var(--ink2); font-weight: 600; }
          .flw-included-item svg { color: var(--g); flex-shrink: 0; margin-top: 2px; }
          @media(max-width:640px){ .flw-included-grid { grid-template-columns: 1fr; } }

          .flw-steps { padding: 72px 0 88px; }
          .flw-steps-grid { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 32px; }
          .flw-step { min-width: 0; }
          .flw-step-num {
            width: 44px; height: 44px; border-radius: 50%;
            background: var(--gl); color: var(--gd); font-weight: 800; font-size: 15px;
            display: flex; align-items: center; justify-content: center; margin-bottom: 18px;
          }
          .flw-step h3 { font-size: 17px; color: var(--ink); margin-bottom: 8px; }
          .flw-step p { font-size: 14px; color: var(--ink3); line-height: 1.7; }
          @media(max-width:900px){ .flw-steps-grid { grid-template-columns: 1fr; } }

          .flw-bottom { text-align: center; padding: 64px 0 96px; }
          .flw-bottom p { color: var(--ink3); font-size: 16px; margin-bottom: 24px; }
        `}</style>

        <section className="flw-hero">
          <div className="wrap flw-hero-grid">
            <div className="flw-hero-left" data-reveal="up">
              <div className="section-tag">Klaviyo Flow Builds</div>
              <h1 style={{ fontSize: 'clamp(32px,3.8vw,46px)' }}>Automated flows that sell,<br /><em style={{ color: 'var(--g)', fontStyle: 'normal' }}>while you sleep.</em></h1>
              <p className="section-sub">Custom Klaviyo flow builds, welcome series, abandoned cart, post-purchase, and win-back sequences engineered to convert on autopilot.</p>
              <p style={{ fontSize: '14px', color: 'var(--ink3)', margin: '-18px 0 28px' }}>Using Mailchimp, Campaign Monitor or another platform? See <Link href="/services/email-automations" style={{ color: 'var(--g)', fontWeight: 700 }}>Email Automations →</Link></p>
              <div className="flw-btns">
                <Link href={contactHref('flow-setup')} className="btn-primary">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                  Book a Free Call
                </Link>
                <Link href="/#cases" className="btn-ghost">See Case Studies →</Link>
              </div>
              <div className="flw-proof">
                <span style={{ color: '#f5a623', fontSize: '15px', letterSpacing: '1px' }}>⭐⭐⭐⭐⭐</span>
                <span>5.0 · 752 reviews on Upwork</span>
              </div>
            </div>

            <div className="flw-hero-visual" data-reveal="right" style={{ transitionDelay: '150ms' }}>
              <Image
                src="/images/services/flow-setup/hero-flows-autopilot.jpg"
                alt="Klaviyo flow builder with time delay, smart split and dynamic email nodes, showing $38,450 in flow revenue and 100% autopilot"
                width={1400}
                height={764}
              />
            </div>
          </div>
        </section>

        <section className="flw-whatget">
          <div className="wrap">
            <div className="flw-whatget-head" data-reveal="up">
              <div className="flw-whatget-tag">What You Get</div>
              <h2>Everything included, <em style={{ color: 'var(--g)', fontStyle: 'normal' }}>nothing left to guess.</em></h2>
            </div>
            <div className="flw-whatget-row">
              {whatYouGet.map((item, i) => (
                <div key={item.label} className="flw-whatget-item" data-reveal="up" style={{ transitionDelay: `${i * 90}ms` }}>
                  <div className="flw-whatget-ico"><item.icon size={22} strokeWidth={1.75} /></div>
                  <p>{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ServiceProof quote={{"text": "Our Klaviyo flows went from generating 10% of revenue to over 35% in 3 months. Zahidul knew exactly what to build and why. Highly recommend for any eCommerce brand serious about email.", "name": "Sarah T.", "role": "CEO, DTC Fashion Brand"}} caseStudy={{"tag": "eCommerce · Klaviyo", "title": "42% email revenue lift for a DTC fashion brand", "desc": "Rebuilt their entire Klaviyo automation stack: welcome series, abandoned cart, and post-purchase flows, turning automations into their #1 revenue channel.", "stats": [{"val": "+42%", "lbl": "Email Revenue"}, {"val": "3.8×", "lbl": "Flow ROI"}, {"val": "58%", "lbl": "Open Rate"}]}} />

        <section className="flw-feature">
          <div className="wrap flw-feature-grid">
            <div data-reveal="up">
              <div className="flw-feature-tag">Strategy & Mapping</div>
              <h2>Every flow mapped to a moment that matters.</h2>
              <p className="flw-feature-sub">We start by mapping your full customer lifecycle, so every flow fires at the right time with the right message.</p>
              <ul>
                <li><Workflow size={17} /> Full customer journey mapped end to end</li>
                <li><Target size={17} /> Trigger logic tailored to your store&apos;s behavior</li>
                <li><ListChecks size={17} /> Flow priority ranked by revenue potential</li>
              </ul>
            </div>
            <div className="flw-diagram-img" data-reveal="zoom" style={{ transitionDelay: '120ms' }}>
              <Image
                src="/images/services/flow-setup/strategy-mapping.jpg"
                alt="Customer lifecycle matrix mapping welcome series, browse abandonment, cart recovery and post-purchase VIP retention flows to behavioral triggers"
                width={1400}
                height={764}
              />
            </div>
          </div>
        </section>

        <section className="flw-feature flw-feature-alt">
          <div className="wrap flw-feature-grid">
            <div className="flw-diagram-img" data-reveal="zoom" style={{ order: 1 }}>
              <Image
                src="/images/services/flow-setup/welcome-series.jpg"
                alt="Three-step welcome flow from instant discount delivery to brand story to best-seller social proof, a 44% signup-to-first-purchase conversion lift"
                width={1400}
                height={764}
              />
            </div>
            <div data-reveal="up" style={{ order: 2, transitionDelay: '120ms' }}>
              <div className="flw-feature-tag">Welcome Series</div>
              <h2>First impressions that turn into first orders.</h2>
              <p className="flw-feature-sub">A multi-touch welcome series that builds trust fast and nudges new subscribers toward their first purchase.</p>
              <ul>
                <li><Sparkles size={17} /> Multi-email series introducing your brand</li>
                <li><Percent size={17} /> Incentive-based conversion touchpoints</li>
                <li><TrendingUp size={17} /> Send timing optimized for maximum engagement</li>
                <li><Target size={17} /> Smart Sending and frequency rules so no one gets too many emails at once</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="flw-feature">
          <div className="wrap flw-feature-grid">
            <div data-reveal="up">
              <div className="flw-feature-tag">Abandoned Cart & Browse</div>
              <h2>Recover carts and browsers before they forget you.</h2>
              <p className="flw-feature-sub">Multi-step abandoned cart and browse abandonment flows that bring shoppers back before they buy elsewhere.</p>
              <ul>
                <li><ShoppingCart size={17} /> Cart recovery sequence with smart timing</li>
                <li><Eye size={17} /> Browse abandonment for non-cart visitors</li>
                <li><DollarSign size={17} /> Incentive escalation to close the sale</li>
                <li><DollarSign size={17} /> Conditional splits by cart value, first-time vs repeat buyer, and product category</li>
              </ul>
            </div>
            <div className="flw-diagram-img" data-reveal="zoom" style={{ transitionDelay: '120ms' }}>
              <Image
                src="/images/services/flow-setup/abandoned-cart-browse.jpg"
                alt="Browse abandonment and cart reminder flows with one-click checkout lifting the recovery rate from 8% to 26%"
                width={1400}
                height={764}
              />
            </div>
          </div>
        </section>

        <section className="flw-feature flw-feature-alt">
          <div className="wrap flw-feature-grid">
            <div className="flw-diagram-img" data-reveal="zoom" style={{ order: 1 }}>
              <Image
                src="/images/services/flow-setup/post-purchase-win-back.jpg"
                alt="One-time buyer turned loyal repeat customer through replenishment triggers, cross-sell recommendations and VIP loyalty tiers, lifetime value $240 plus"
                width={1400}
                height={764}
              />
            </div>
            <div data-reveal="up" style={{ order: 2, transitionDelay: '120ms' }}>
              <div className="flw-feature-tag">Post-Purchase & Win-Back</div>
              <h2>Turn one-time buyers into repeat customers.</h2>
              <p className="flw-feature-sub">Post-purchase nurture and win-back sequences that increase repeat purchase rate and rescue lapsing customers.</p>
              <ul>
                <li><Repeat size={17} /> Post-purchase upsell & review requests</li>
                <li><RefreshCw size={17} /> Win-back sequences for lapsed customers</li>
                <li><TrendingUp size={17} /> Customer lifetime value tracked and optimized</li>
              </ul>
            </div>
          </div>
        </section>

        <ServiceUseCases tag="Flows We Build" title="Foundation flows first, then the revenue add-ons." sub="Every build starts with the flows that earn the most, then adds the ones that fit your store." items={[{"title": "Foundation flows (every build)", "desc": "Welcome series, browse abandonment, abandoned cart, abandoned checkout and post-purchase, each with buyer and non-buyer paths."}, {"title": "Revenue add-ons", "desc": "Win-back, replenishment reminders, VIP and loyalty, cross-sell and sunset flows, added where they fit your products and margins."}]} />

        <ServiceOffer tag="Already On Klaviyo?" title="Find out which flows are leaking revenue" desc="Our free account audit checks every live flow for missing triggers, broken filters and timing issues." ctaLabel="Get a Free Audit" href={"/services/account-audit"} />

        <section className="flw-included">
          <div className="wrap">
            <div className="sh-row" style={{ textAlign: 'center', marginBottom: '40px' }} data-reveal="up">
              <h2>What&apos;s <em style={{ color: 'var(--g)', fontStyle: 'normal' }}>included.</em></h2>
              <p className="section-sub" style={{ margin: '0 auto' }}>Everything needed to get your flows fully live and producing revenue.</p>
            </div>
            <div className="flw-included-grid">
              {included.map((item, i) => (
                <div key={item} className="flw-included-item" data-reveal="up" style={{ transitionDelay: `${i * 60}ms` }}>
                  <CheckCircle2 size={19} strokeWidth={2} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="flw-steps">
          <div className="wrap">
            <div className="sh-row" style={{ textAlign: 'center', marginBottom: '48px' }} data-reveal="up">
              <h2>How it <em style={{ color: 'var(--g)', fontStyle: 'normal' }}>works.</em></h2>
              <p className="section-sub" style={{ margin: '0 auto' }}>Three steps, start to finish.</p>
            </div>
            <div className="flw-steps-grid">
              {steps.map((s, i) => (
                <div key={s.n} className="flw-step" data-reveal="up" style={{ transitionDelay: `${i * 100}ms` }}>
                  <div className="flw-step-num">{s.n}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ServiceFAQ items={[{"q": "Is copywriting and design included?", "a": "Yes. Every email in every flow is written, designed on-brand and built in Klaviyo, along with the triggers, filters and splits."}, {"q": "How do you test flows before they go live?", "a": "We trigger each flow with test profiles and real events from your store, check every split and filter, and review every email on desktop and mobile before switching it on."}, {"q": "We already have some flows running. What happens to them?", "a": "We review them first. Strong flows are kept and improved; weak ones are rebuilt or replaced, without leaving gaps while we work."}, {"q": "How long does a full build take?", "a": "A full build of 6 to 8 flows usually takes 7 to 14 business days, depending on how many emails each flow needs."}]} />

        <RelatedServices slugs={["account-audit", "sign-up-forms", "sms-campaigns"]} />

        <ServiceJsonLd slug="flow-setup" name="Klaviyo Flow Setup" description="Custom Klaviyo flows built for you: welcome series, browse and cart abandonment, post-purchase and win-back, with conditional logic, on-brand design and full testing before launch." />

        <div className="flw-bottom" data-reveal="up">
          <p>Ready to put your revenue flows on autopilot?</p>
          <Link href={contactHref('flow-setup')} className="btn-primary">Book a Free Call →</Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
