import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../../components/Navbar'
import { Footer } from '../../components/Sections'
import {
  CheckCircle2, Megaphone, Rocket, Zap, MessageSquare,
  SplitSquareHorizontal, Target, Star, UserPlus, RotateCcw,
  Clock, ShieldCheck, TrendingUp,
} from 'lucide-react'
import type { Metadata } from 'next'
import { RelatedServices, ServiceFAQ, ServiceJsonLd, ServicePromise } from '../../components/service/ServiceBlocks'
import { contactHref } from '../../lib/site'
import { serviceMetadata } from '../../lib/seo'

export const metadata: Metadata = serviceMetadata({
  slug: 'email-campaigns',
  title: "Email Campaign Management",
  description: "Email campaigns planned, written, designed, tested and sent for you, with smart segmentation, deliverability protection and reporting on every send.",
  image: '/images/services/email-campaigns/hero-campaign-results.jpg',
})

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
  { n: '02', title: 'Write, Design & Test', desc: 'Copy, subject lines and creative are drafted, then you get a preview and a test email to approve before anything is scheduled.' },
  { n: '03', title: 'Deploy & Report', desc: 'Segmented sends deploy on schedule, then get reported on so we can double down on what actually worked.' },
]

const whatYouGet = [
  { icon: Clock,                 label: 'A campaign calendar tied to your promos & launches' },
  { icon: SplitSquareHorizontal, label: 'Copy & subject lines tested before every send' },
  { icon: Target,                label: 'Segmented sends, never a one-size-fits-all blast' },
  { icon: TrendingUp,            label: 'Performance reporting after every campaign' },
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

          .ecp-hero-visual {
            position: relative; border-radius: 20px; overflow: hidden;
            box-shadow: 0 28px 70px rgba(15,22,35,.09);
            max-width: 650px; width: 100%; margin: 0 auto; background: var(--soft);
          }
          .ecp-hero-visual img { width: 100%; height: auto; display: block; }

          @media(max-width:1000px){
            .ecp-hero-grid { grid-template-columns: 1fr; }
            .ecp-hero-visual { max-width: 600px; }
          }

          /* What You Get — highlighted through the tinted background, a
             centered tag, and gradient icon "medallions"; deliberately NOT
             a bordered card/box. Items sit in one open row divided by thin
             rules, not stacked inside a container. */
          .ecp-whatget {
            padding: 64px 0 72px; position: relative; overflow: hidden;
            background:
              radial-gradient(ellipse at top right, rgba(30,166,114,0.14) 0%, transparent 55%),
              radial-gradient(ellipse at bottom left, rgba(30,166,114,0.10) 0%, transparent 55%),
              var(--soft);
            border-top: 1px solid var(--border); border-bottom: 1px solid var(--border);
          }
          .ecp-whatget-head { text-align: center; max-width: 720px; margin: 0 auto 48px; }
          .ecp-whatget-tag {
            display: inline-flex; align-items: center; gap: 8px; background: var(--gl); color: var(--gd);
            font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: .06em;
            padding: 6px 14px; border-radius: 100px; margin-bottom: 16px;
          }
          .ecp-whatget-head h2 { font-size: clamp(20px, 2.4vw, 32px); margin-bottom: 0; white-space: nowrap; }
          @media(max-width:560px){
            .ecp-whatget-head h2 { white-space: normal; font-size: clamp(20px, 5.5vw, 24px); }
          }

          .ecp-whatget-row {
            display: flex; align-items: flex-start; justify-content: center;
            max-width: 1000px; margin: 0 auto; flex-wrap: wrap;
          }
          .ecp-whatget-item {
            flex: 1 1 210px; display: flex; flex-direction: column; align-items: center;
            text-align: center; gap: 16px; padding: 0 26px; position: relative;
          }
          .ecp-whatget-item:not(:last-child)::after {
            content: ''; position: absolute; right: 0; top: 4px; bottom: 4px; width: 1px; background: var(--gm);
          }
          .ecp-whatget-ico {
            width: 54px; height: 54px; border-radius: 50%;
            background: linear-gradient(135deg, #1ea672, #17845b); color: #fff;
            display: flex; align-items: center; justify-content: center;
            box-shadow: 0 10px 24px rgba(30,166,114,.32);
          }
          .ecp-whatget-item p { font-size: 14.5px; font-weight: 600; color: var(--ink2); line-height: 1.5; max-width: 200px; }

          @media(max-width:820px){
            .ecp-whatget-row { flex-direction: column; align-items: center; gap: 32px; }
            .ecp-whatget-item { padding: 0; }
            .ecp-whatget-item:not(:last-child)::after { display: none; }
          }

          .ecp-feature { padding: 72px 0; }
          .ecp-feature-alt { background: var(--soft); }
          .ecp-feature-alt .ecp-diagram-img { background: #fff; }
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

          .ecp-diagram-img {
            border-radius: 16px; overflow: hidden; background: var(--soft);
            box-shadow: 0 20px 50px rgba(15,22,35,.08);
          }
          .ecp-diagram-img img { width: 100%; height: auto; display: block; }

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
            <div className="ecp-hero-left" data-reveal="up">
              <div className="section-tag">Email Campaigns</div>
              <h1 style={{ fontSize: 'clamp(32px,3.8vw,46px)' }}>Campaigns built<br /><em style={{ color: 'var(--g)', fontStyle: 'normal' }}>to drive real revenue.</em></h1>
              <p className="section-sub">Strategy, copy, design and deployment handled end to end, so every campaign is built to earn opens, clicks and sales, not just fill a calendar slot.</p>
              <div className="ecp-btns">
                <Link href={contactHref('email-campaigns')} className="btn-primary">
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

            <div className="ecp-hero-visual" data-reveal="right" style={{ transitionDelay: '150ms' }}>
              <Image
                src="/images/services/email-campaigns/hero-campaign-results.jpg"
                alt="VIP Black Friday email campaign dashboard showing a 51.2% unique open rate, $34,890 in placed orders and 42% attributed store revenue"
                width={1400}
                height={764}
              />
            </div>
          </div>
        </section>

        <section className="ecp-whatget">
          <div className="wrap">
            <div className="ecp-whatget-head" data-reveal="up">
              <div className="ecp-whatget-tag">What You Get</div>
              <h2>Everything included, <em style={{ color: 'var(--g)', fontStyle: 'normal' }}>nothing left to guess.</em></h2>
            </div>
            <div className="ecp-whatget-row">
              {whatYouGet.map((item, i) => (
                <div key={item.label} className="ecp-whatget-item" data-reveal="up" style={{ transitionDelay: `${i * 90}ms` }}>
                  <div className="ecp-whatget-ico"><item.icon size={22} strokeWidth={1.75} /></div>
                  <p>{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ServicePromise tag="Ways to Work With Us" title="Pick the cadence that fits your list." sub="Current rates are on our Pricing page." items={[{"title": "Starter", "desc": "4 campaigns a month, one a week. A steady rhythm for smaller lists."}, {"title": "Growth", "desc": "8 to 12 campaigns a month, two to three a week, for brands with a full promo calendar."}, {"title": "Full-funnel", "desc": "Strategy, copy, design, coding, scheduling and reporting, all handled for you."}]} />

        <section className="ecp-feature">
          <div className="wrap ecp-feature-grid">
            <div data-reveal="up">
              <div className="ecp-feature-tag">Strategy & Planning</div>
              <h2>A calendar built around your business, not a template.</h2>
              <p className="ecp-feature-sub">Promos, newsletters, product launches and flash sales all mapped ahead of time, so every campaign has a purpose and nothing collides with your other marketing.</p>
              <ul>
                <li><Megaphone size={17} /> Promo & sale campaigns planned around your calendar</li>
                <li><Rocket size={17} /> Product launches sequenced for maximum impact</li>
                <li><Zap size={17} /> Flash sales slotted in without cannibalizing other sends</li>
              </ul>
            </div>
            <div className="ecp-diagram-img" data-reveal="zoom" style={{ transitionDelay: '120ms' }}>
              <Image
                src="/images/services/email-campaigns/strategy-planning.jpg"
                alt="Marketing calendar with VIP early access drops, product launches, flash weekend sales and audience-specific sends scheduled at optimal send times"
                width={1400}
                height={781}
              />
            </div>
          </div>
        </section>

        <section className="ecp-feature ecp-feature-alt">
          <div className="wrap ecp-feature-grid">
            <div className="ecp-diagram-img" data-reveal="zoom">
              <Image
                src="/images/services/email-campaigns/copy-testing.jpg"
                alt="Generic newsletter subject line at a 14.2% open rate compared with an A/B-tested optimized subject line at 54.8%, a 40.6% lift"
                width={1400}
                height={781}
              />
            </div>
            <div data-reveal="up" style={{ transitionDelay: '120ms' }}>
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
            <div data-reveal="up">
              <div className="ecp-feature-tag">Segmentation</div>
              <h2>The right message, to the right list, every time.</h2>
              <p className="ecp-feature-sub">Batch-and-blast sends burn deliverability and annoy subscribers. We segment by behavior and value so VIPs, new buyers and lapsed subscribers each get what's relevant to them.</p>
              <ul>
                <li><Star size={17} /> VIP & repeat customers get offers worth their loyalty</li>
                <li><UserPlus size={17} /> First-time buyers nurtured toward a second purchase</li>
                <li><RotateCcw size={17} /> Win-back segments kept separate from your core list</li>
                <li><Target size={17} /> Engaged 30, 60 and 90-day segments so inactive subscribers never drag down deliverability</li>
              </ul>
            </div>
            <div className="ecp-diagram-img" data-reveal="zoom" style={{ transitionDelay: '120ms' }}>
              <Image
                src="/images/services/email-campaigns/segmentation.jpg"
                alt="Audience segments for VIP customers, first-time buyers, engaged 30-day clickers and lapsed win-back subscribers feeding a central campaign engine"
                width={1400}
                height={764}
              />
            </div>
          </div>
        </section>

        <section className="ecp-feature ecp-feature-alt">
          <div className="wrap ecp-feature-grid">
            <div className="ecp-diagram-img" data-reveal="zoom">
              <Image
                src="/images/services/email-campaigns/send-time-deliverability.jpg"
                alt="Campaign growth over eight weeks with a 48.6% open rate, 6.2% click-through rate, $1.84 revenue per recipient and 0.01% unsubscribe rate"
                width={1400}
                height={781}
              />
            </div>
            <div data-reveal="up" style={{ transitionDelay: '120ms' }}>
              <div className="ecp-feature-tag">Send-Time & Deliverability</div>
              <h2>Sent at the right moment, landing in the inbox.</h2>
              <p className="ecp-feature-sub">We optimize send times per segment and keep a close eye on deliverability, so campaigns land in the inbox instead of the promotions tab or, worse, spam.</p>
              <ul>
                <li><Clock size={17} /> Send times optimized per segment's engagement patterns</li>
                <li><ShieldCheck size={17} /> Ongoing deliverability & inbox placement monitoring</li>
                <li><ShieldCheck size={17} /> Google and Yahoo sender rules met: SPF, DKIM, DMARC, one-click unsubscribe and spam complaints kept under 0.1%</li>
                <li><TrendingUp size={17} /> Open, click & revenue trends tracked send over send</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="ecp-included">
          <div className="wrap">
            <div className="sh-row" style={{ textAlign: 'center', marginBottom: '40px' }} data-reveal="up">
              <h2>What&apos;s <em style={{ color: 'var(--g)', fontStyle: 'normal' }}>included.</em></h2>
              <p className="section-sub" style={{ margin: '0 auto' }}>Everything needed to turn a calendar slot into a campaign that performs.</p>
            </div>
            <div className="ecp-included-grid">
              {ecpIncluded.map((item, i) => (
                <div key={item} className="ecp-included-item" data-reveal="up" style={{ transitionDelay: `${i * 60}ms` }}>
                  <CheckCircle2 size={19} strokeWidth={2} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="ecp-steps">
          <div className="wrap">
            <div className="sh-row" style={{ textAlign: 'center', marginBottom: '48px' }} data-reveal="up">
              <h2>How it <em style={{ color: 'var(--g)', fontStyle: 'normal' }}>works.</em></h2>
              <p className="section-sub" style={{ margin: '0 auto' }}>Three steps, start to finish.</p>
            </div>
            <div className="ecp-steps-grid">
              {ecpSteps.map((s, i) => (
                <div key={s.n} className="ecp-step" data-reveal="up" style={{ transitionDelay: `${i * 100}ms` }}>
                  <div className="ecp-step-num">{s.n}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ServiceFAQ items={[{"q": "Do you write the copy and create the graphics?", "a": "Yes. Strategy, copywriting, design and building the email are all included. You just approve."}, {"q": "How many campaigns should we send each week?", "a": "Most stores do best with two to three a week, adjusted to your list size and engagement. We start where your list is today and build up."}, {"q": "How do you keep emails out of spam and the Promotions tab?", "a": "Authenticated sending (SPF, DKIM, DMARC), engaged-first segmentation, a balance of text and images, and regular list cleaning."}, {"q": "Can you work inside our existing platform?", "a": "Yes. We build, schedule and segment directly in Klaviyo, Mailchimp, HubSpot or whichever platform you use."}, {"q": "How do we approve campaigns before they go out?", "a": "Every campaign comes with a preview link and a test email to your inbox. Nothing is scheduled until you approve it."}, {"q": "Can we see results from other clients?", "a": "Yes, on request. We protect every client's privacy, so results and screenshots are only shared with the client's permission, with names and company details hidden. Ask on a call and we'll walk you through relevant examples."}]} />

        <RelatedServices slugs={["email-design", "email-development", "reporting-improvement"]} />

        <ServiceJsonLd slug="email-campaigns" name="Email Campaigns" description="Email campaigns planned, written, designed, tested and sent for you, with smart segmentation, deliverability protection and reporting on every send." />

        <div className="ecp-bottom" data-reveal="up">
          <p>Ready for campaigns that actually move revenue?</p>
          <Link href={contactHref('email-campaigns')} className="btn-primary">Book a Free Call →</Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
