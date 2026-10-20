import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../../components/Navbar'
import { Footer } from '../../components/Sections'
import {
  CheckCircle2, ShieldCheck, MailCheck, Users,
  TrendingUp, Activity, Lock, AlertTriangle, RefreshCw,
  Filter, BarChart3, Globe,
} from 'lucide-react'
import type { Metadata } from 'next'
import {
  RelatedServices,
  ServiceFAQ,
  ServiceJsonLd,
  ServiceOffer,
  ServicePromise,
  ServiceProof,
} from '../../components/service/ServiceBlocks'
import { contactHref } from '../../lib/site'
import { serviceMetadata } from '../../lib/seo'

export const metadata: Metadata = serviceMetadata({
  slug: 'email-deliverability',
  title: 'Email Deliverability Services for eCommerce & Klaviyo',
  description:
    'Land in the primary inbox, not the spam folder. Complete SPF, DKIM & DMARC authentication, branded sending domains, IP/domain warm-up, blacklist remediation, and ongoing inbox placement monitoring.',
  image: '/images/services/email-deliverability/hero-email-deliverability.jpg',
})

const included = [
  'Full sender reputation & blacklist diagnostic',
  'Branded sending domain setup in Klaviyo',
  'SPF, DKIM, DMARC & BIMI DNS authentication',
  'Google & Yahoo bulk sender compliance (One-Click Unsubscribe)',
  'Custom 4–6 week domain & IP warming schedule',
  'Spam trap, hard bounce & bot-signup removal',
  'Engaged segment architecture & sunset flow setup',
  'Google Postmaster Tools & Microsoft SNDS monitoring',
]

const steps = [
  {
    n: '01',
    title: 'Deliverability & DNS Audit',
    desc: 'We inspect your sending domain, DNS records (SPF, DKIM, DMARC), Google Postmaster data, blacklist status, and Klaviyo engagement tiers to pinpoint why emails are hitting spam or Promotions.',
  },
  {
    n: '02',
    title: 'Authentication & Repair Plan',
    desc: 'We configure your branded sending domain, fix DNS alignment, build strict engaged segments, suppress dead profiles, and deploy a structured warm-up schedule.',
  },
  {
    n: '03',
    title: 'Inbox Recovery & Monitoring',
    desc: 'We monitor bounce rates, spam complaint thresholds (<0.1%), and inbox placement across Gmail, Yahoo, Apple Mail, and Outlook until your open rates and revenue rebound.',
  },
]

const whatYouGet = [
  { icon: ShieldCheck, label: 'Complete SPF, DKIM & DMARC authentication' },
  { icon: TrendingUp,  label: 'Guided domain & IP warm-up to rebuild reputation' },
  { icon: Filter,      label: 'List hygiene, spam-trap removal & sunset flows' },
  { icon: Activity,    label: 'Ongoing Google Postmaster & inbox monitoring' },
]

export default function EmailDeliverabilityPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '68px' }}>
        <style>{`
          .edl-hero {
            padding: 64px 0 76px;
            background:
              radial-gradient(ellipse at top left, rgba(30, 166, 114, 0.14) 0%, transparent 60%),
              radial-gradient(ellipse at bottom right, rgba(30, 166, 114, 0.14) 0%, transparent 60%),
              #ffffff;
            overflow: hidden; position: relative;
          }
          .edl-hero-grid { display: grid; grid-template-columns: minmax(0,1fr) minmax(0,1fr); gap: 48px; align-items: center; }
          .edl-hero-left .section-tag::before { display: none; }
          .edl-hero-left h1 { margin-bottom: 18px; }
          .edl-hero-left .section-sub { margin-bottom: 32px; max-width: 500px; }
          .edl-btns { display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 28px; }
          .edl-proof { display: flex; align-items: center; gap: 6px; font-size: 13px; color: var(--ink3); }

          .edl-hero-visual {
            position: relative; border-radius: 20px; overflow: hidden;
            box-shadow: 0 28px 70px rgba(15,22,35,.09);
            max-width: 650px; width: 100%; margin: 0 auto; background: var(--soft);
          }
          .edl-hero-visual img { width: 100%; height: auto; display: block; }

          @media(max-width:1000px){
            .edl-hero-grid { grid-template-columns: 1fr; }
            .edl-hero-visual { max-width: 600px; }
          }

          .edl-whatget {
            padding: 64px 0 72px; position: relative; overflow: hidden;
            background:
              radial-gradient(ellipse at top right, rgba(30,166,114,0.14) 0%, transparent 55%),
              radial-gradient(ellipse at bottom left, rgba(30,166,114,0.10) 0%, transparent 55%),
              var(--soft);
            border-top: 1px solid var(--border); border-bottom: 1px solid var(--border);
          }
          .edl-whatget-head { text-align: center; max-width: 720px; margin: 0 auto 48px; }
          .edl-whatget-tag {
            display: inline-flex; align-items: center; gap: 8px; background: var(--gl); color: var(--gd);
            font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: .06em;
            padding: 6px 14px; border-radius: 100px; margin-bottom: 16px;
          }
          .edl-whatget-head h2 { font-size: clamp(20px, 2.4vw, 32px); margin-bottom: 0; white-space: nowrap; }
          @media(max-width:560px){
            .edl-whatget-head h2 { white-space: normal; font-size: clamp(20px, 5.5vw, 24px); }
          }

          .edl-whatget-row {
            display: flex; align-items: flex-start; justify-content: center;
            max-width: 1000px; margin: 0 auto; flex-wrap: wrap;
          }
          .edl-whatget-item {
            flex: 1 1 210px; display: flex; flex-direction: column; align-items: center;
            text-align: center; gap: 16px; padding: 0 26px; position: relative;
          }
          .edl-whatget-item:not(:last-child)::after {
            content: ''; position: absolute; right: 0; top: 4px; bottom: 4px; width: 1px; background: var(--gm);
          }
          .edl-whatget-ico {
            width: 54px; height: 54px; border-radius: 50%;
            background: linear-gradient(135deg, #1ea672, #17845b); color: #fff;
            display: flex; align-items: center; justify-content: center;
            box-shadow: 0 10px 24px rgba(30,166,114,.32);
          }
          .edl-whatget-item p { font-size: 14.5px; font-weight: 600; color: var(--ink2); line-height: 1.5; max-width: 200px; }

          @media(max-width:820px){
            .edl-whatget-row { flex-direction: column; align-items: center; gap: 32px; }
            .edl-whatget-item { padding: 0; }
            .edl-whatget-item:not(:last-child)::after { display: none; }
          }

          .edl-feature { padding: 72px 0; }
          .edl-feature-alt { background: var(--soft); }
          .edl-feature-alt .edl-diagram-img { background: #fff; }
          .edl-feature-grid { display: grid; grid-template-columns: minmax(0,1fr) minmax(0,1fr); gap: 56px; align-items: center; }
          .edl-feature-tag { font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: .05em; color: var(--g); margin-bottom: 12px; }
          .edl-feature h2 { font-size: clamp(24px, 2.4vw, 30px); color: var(--ink); margin-bottom: 14px; }
          .edl-feature-sub { color: var(--ink3); font-size: 15.5px; line-height: 1.75; margin-bottom: 22px; max-width: 460px; }
          .edl-feature ul { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 14px; }
          .edl-feature li { display: flex; align-items: flex-start; gap: 10px; font-size: 14.5px; color: var(--ink2); line-height: 1.55; max-width: 440px; }
          .edl-feature li svg { color: var(--g); flex-shrink: 0; margin-top: 2px; }

          @media(max-width:900px){
            .edl-feature-grid { grid-template-columns: 1fr; }
          }

          .edl-diagram-img {
            border-radius: 16px; overflow: hidden; background: var(--soft);
            box-shadow: 0 20px 50px rgba(15,22,35,.08);
          }
          .edl-diagram-img img { width: 100%; height: auto; display: block; }

          .edl-included { background: var(--soft); padding: 72px 0; }
          .edl-included-grid { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 18px 40px; max-width: 880px; margin: 0 auto; }
          .edl-included-item { display: flex; align-items: flex-start; gap: 12px; font-size: 15px; color: var(--ink2); font-weight: 600; }
          .edl-included-item svg { color: var(--g); flex-shrink: 0; margin-top: 2px; }
          @media(max-width:640px){ .edl-included-grid { grid-template-columns: 1fr; } }

          .edl-steps { padding: 72px 0 88px; }
          .edl-steps-grid { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 32px; }
          .edl-step { min-width: 0; }
          .edl-step-num {
            width: 44px; height: 44px; border-radius: 50%;
            background: var(--gl); color: var(--gd); font-weight: 800; font-size: 15px;
            display: flex; align-items: center; justify-content: center; margin-bottom: 18px;
          }
          .edl-step h3 { font-size: 17px; color: var(--ink); margin-bottom: 8px; }
          .edl-step p { font-size: 14px; color: var(--ink3); line-height: 1.7; }
          @media(max-width:900px){ .edl-steps-grid { grid-template-columns: 1fr; } }

          .edl-bottom { text-align: center; padding: 64px 0 96px; }
          .edl-bottom p { color: var(--ink3); font-size: 16px; margin-bottom: 24px; }
        `}</style>

        <section className="edl-hero">
          <div className="wrap edl-hero-grid">
            <div className="edl-hero-left" data-reveal="up">
              <div className="section-tag">Email Deliverability Services</div>
              <h1 style={{ fontSize: 'clamp(32px,3.8vw,46px)' }}>
                Land in the primary inbox,<br />
                <em style={{ color: 'var(--g)', fontStyle: 'normal' }}>never the spam folder.</em>
              </h1>
              <p className="section-sub">
                Even the best email copy and design generate $0 if your subscribers never see them. We fix sender reputation, authenticate your domain, clean your list, and recover primary inbox placement across Gmail, Yahoo, Outlook, and Apple Mail.
              </p>
              <div className="edl-btns">
                <Link href={contactHref('email-deliverability')} className="btn-primary">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                  Get a Free Deliverability Audit
                </Link>
                <Link href="/#cases" className="btn-ghost">See Case Studies →</Link>
              </div>
              <div className="edl-proof">
                <span style={{ color: '#f5a623', fontSize: '15px', letterSpacing: '1px' }}>⭐⭐⭐⭐⭐</span>
                <span>5.0 · 752 reviews on Upwork</span>
              </div>
            </div>

            <div className="edl-hero-visual" data-reveal="right" style={{ transitionDelay: '150ms' }}>
              <Image
                src="/images/services/email-deliverability/hero-email-deliverability.jpg"
                alt="Email deliverability dashboard showing 99.4% primary inbox placement, 98/100 sender score, and 0.02% compliant spam rate"
                width={1400}
                height={764}
                priority
              />
            </div>
          </div>
        </section>

        <section className="edl-whatget">
          <div className="wrap">
            <div className="edl-whatget-head" data-reveal="up">
              <div className="edl-whatget-tag">What You Get</div>
              <h2>Complete inbox protection, <em style={{ color: 'var(--g)', fontStyle: 'normal' }}>built for revenue.</em></h2>
            </div>
            <div className="edl-whatget-row">
              {whatYouGet.map((item, i) => (
                <div key={item.label} className="edl-whatget-item" data-reveal="up" style={{ transitionDelay: `${i * 90}ms` }}>
                  <div className="edl-whatget-ico"><item.icon size={22} strokeWidth={1.75} /></div>
                  <p>{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="edl-feature">
          <div className="wrap edl-feature-grid">
            <div data-reveal="up">
              <div className="edl-feature-tag">DNS Authentication & Sender Compliance</div>
              <h2>Full compliance with Google, Yahoo & Apple Mail standards.</h2>
              <p className="edl-feature-sub">
                Mailbox providers now enforce strict authentication rules for bulk senders. We configure your branded sending domain and align every DNS record so inbox filters trust your emails immediately.
              </p>
              <ul>
                <li><ShieldCheck size={17} /> SPF, DKIM (2048-bit) & DMARC policy alignment</li>
                <li><Globe size={17} /> Branded sending domain configuration in Klaviyo</li>
                <li><Lock size={17} /> One-click list-unsubscribe headers & BIMI readiness</li>
              </ul>
            </div>
            <div className="edl-diagram-img" data-reveal="zoom" style={{ transitionDelay: '120ms' }}>
              <Image
                src="/images/services/email-deliverability/dns-authentication-compliance.jpg"
                alt="Technical DNS authentication matrix showing SPF, DKIM 2048-bit, DMARC pass status, branded sending domain verification, and one-click unsubscribe compliance"
                width={1400}
                height={764}
              />
            </div>
          </div>
        </section>

        <section className="edl-feature edl-feature-alt">
          <div className="wrap edl-feature-grid">
            <div className="edl-diagram-img" data-reveal="zoom" style={{ order: 1 }}>
              <Image
                src="/images/services/email-deliverability/domain-warmup-recovery.jpg"
                alt="30-day guided domain and IP warm-up curve showing open rate recovery from 18% to 48.4% and clean blacklist status"
                width={1400}
                height={764}
              />
            </div>
            <div data-reveal="up" style={{ order: 2, transitionDelay: '120ms' }}>
              <div className="edl-feature-tag">Domain Warm-Up & Reputation Recovery</div>
              <h2>Rebuild damaged sender reputation without pausing revenue.</h2>
              <p className="edl-feature-sub">
                Whether you are migrating to Klaviyo, launching a new sending domain, or recovering from a sudden drop in open rates, we run a controlled warm-up that signals high engagement to ISP algorithms.
              </p>
              <ul>
                <li><TrendingUp size={17} /> 30-day graduated sending schedule starting with top clickers</li>
                <li><AlertTriangle size={17} /> Blacklist removal & spam complaint remediation (&lt;0.1%)</li>
                <li><RefreshCw size={17} /> Automated flow prioritization during domain warm-up</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="edl-feature">
          <div className="wrap edl-feature-grid">
            <div data-reveal="up">
              <div className="edl-feature-tag">List Hygiene & Sunset Architecture</div>
              <h2>Stop paying to email dead profiles and spam traps.</h2>
              <p className="edl-feature-sub">
                Repeatedly mailing unengaged subscribers tells Gmail and Outlook your emails are unwanted. We clean your list, build dynamic engagement tiers, and automate sunsetting so your sender score stays high.
              </p>
              <ul>
                <li><Users size={17} /> 30 / 60 / 90-day engaged segment architecture</li>
                <li><Filter size={17} /> Automated Sunset Flows to suppress unengaged profiles</li>
                <li><MailCheck size={17} /> Bot-signup, role account, and hard-bounce suppression</li>
              </ul>
            </div>
            <div className="edl-diagram-img" data-reveal="zoom" style={{ transitionDelay: '120ms' }}>
              <Image
                src="/images/services/email-deliverability/list-hygiene-sunset.jpg"
                alt="List hygiene filtration funnel separating 30, 60, and 90-day engaged segments from spam traps, hard bounces, and automated sunset flows"
                width={1400}
                height={764}
              />
            </div>
          </div>
        </section>

        <section className="edl-feature edl-feature-alt">
          <div className="wrap edl-feature-grid">
            <div className="edl-diagram-img" data-reveal="zoom" style={{ order: 1 }}>
              <Image
                src="/images/services/email-deliverability/postmaster-inbox-monitoring.jpg"
                alt="Ongoing Postmaster and inbox monitoring radar console showing high Google Postmaster reputation, 100% healthy Microsoft SNDS, and BFCM readiness"
                width={1400}
                height={764}
              />
            </div>
            <div data-reveal="up" style={{ order: 2, transitionDelay: '120ms' }}>
              <div className="edl-feature-tag">Ongoing Postmaster & Inbox Monitoring</div>
              <h2>Catch deliverability dips before Peak Season or BFCM.</h2>
              <p className="edl-feature-sub">
                Deliverability isn&apos;t a one-time checkbox. We monitor your domain health across Google Postmaster Tools, Microsoft SNDS, and seed-list tests so your biggest campaigns never get throttled.
              </p>
              <ul>
                <li><BarChart3 size={17} /> Real-time Google Postmaster & domain reputation tracking</li>
                <li><Activity size={17} /> HTML code weight, dark-mode & spam-trigger checks</li>
                <li><ShieldCheck size={17} /> Pre-BFCM & high-volume campaign readiness checks</li>
              </ul>
            </div>
          </div>
        </section>

        <ServicePromise
          tag="When You Need Us"
          title="Signs your store has a deliverability problem"
          sub="If any of these sound familiar, your email revenue is being throttled at the inbox level."
          tinted
          items={[
            {
              title: 'Open Rates Dropped Below 30%',
              desc: 'A sudden or gradual drop in open and click rates usually means Gmail or Yahoo has started routing your campaigns to Spam or Promotions.',
            },
            {
              title: 'High Bounce or Spam Rates',
              desc: 'Google and Yahoo require spam complaint rates below 0.10% (and never above 0.30%). Crossing that threshold triggers domain-wide blocking.',
            },
            {
              title: 'Recent ESP Migration or New Domain',
              desc: 'Moving to Klaviyo or changing domains without a structured 4-week warm-up schedule causes immediate ISP throttling.',
            },
            {
              title: 'Preparing for BFCM / Major Launches',
              desc: 'Doubling or tripling send volume during Q4 without pre-cleaning your list and verifying DMARC can get your domain blacklisted mid-sale.',
            },
          ]}
        />

        <ServiceProof
          quote={{
            text: 'Our open rates had tanked to 18% after a bot attack and unauthenticated DNS records. Zahidul cleaned our segments, set up our branded sending domain with DMARC, and ran a 4-week warm-up. Open rates are now consistently above 48%.',
            name: 'Verified Ecommerce Founder',
            role: 'DTC Brand · Klaviyo Deliverability Recovery',
          }}
          caseStudy={{
            tag: 'Deliverability Recovery',
            title: 'From spam folder throttling to 48%+ open rates in 30 days',
            desc: 'Replaced shared domain sending with a fully authenticated branded domain, removed 14,000+ unengaged/bot profiles, and rebuilt engagement segments.',
            stats: [
              { val: '48.4%', lbl: 'Avg. Open Rate' },
              { val: '0.03%', lbl: 'Spam Complaint Rate' },
              { val: '+64%', lbl: 'Campaign Revenue Lift' },
            ],
          }}
        />

        <ServiceOffer
          tag="Free Deliverability Check"
          title="Not sure if your emails are landing in spam?"
          desc="Request a free deliverability diagnostic. We will check your DNS records (SPF, DKIM, DMARC), blacklist status, and Klaviyo engagement health, and show you exactly how to fix it."
          bullets={[
            'Complete DNS & branded sending domain verification',
            'Sender reputation, bounce & spam threshold check',
            'Step-by-step inbox recovery roadmap',
          ]}
          ctaLabel="Get Your Free Deliverability Check"
          href={contactHref('email-deliverability')}
        />

        <section className="edl-included">
          <div className="wrap">
            <div className="sh-row" style={{ textAlign: 'center', marginBottom: '40px' }} data-reveal="up">
              <h2>What&apos;s <em style={{ color: 'var(--g)', fontStyle: 'normal' }}>included.</em></h2>
              <p className="section-sub" style={{ margin: '0 auto' }}>
                Everything required to authenticate your domain, repair sender reputation, and keep your emails in the primary inbox.
              </p>
            </div>
            <div className="edl-included-grid">
              {included.map((item, i) => (
                <div key={item} className="edl-included-item" data-reveal="up" style={{ transitionDelay: `${i * 60}ms` }}>
                  <CheckCircle2 size={19} strokeWidth={2} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="edl-steps">
          <div className="wrap">
            <div className="sh-row" style={{ textAlign: 'center', marginBottom: '48px' }} data-reveal="up">
              <h2>How it <em style={{ color: 'var(--g)', fontStyle: 'normal' }}>works.</em></h2>
              <p className="section-sub" style={{ margin: '0 auto' }}>Three clear phases from diagnostic to full inbox recovery.</p>
            </div>
            <div className="edl-steps-grid">
              {steps.map((s, i) => (
                <div key={s.n} className="edl-step" data-reveal="up" style={{ transitionDelay: `${i * 100}ms` }}>
                  <div className="edl-step-num">{s.n}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ServiceFAQ
          items={[
            {
              q: 'How long does it take to fix email deliverability?',
              a: 'Technical fixes (SPF, DKIM, DMARC, branded sending domain, and list cleaning) are completed within 3–5 business days. Rebuilding domain reputation with Gmail and Yahoo typically takes 2 to 4 weeks of guided sending to engaged segments.',
            },
            {
              q: 'What are the Google and Yahoo bulk sender requirements?',
              a: 'Any brand sending 5,000+ emails per day must authenticate with SPF, DKIM, and DMARC using a custom sending domain, support one-click list-unsubscribe headers, and keep spam complaint rates strictly below 0.10% (and never above 0.30%). We handle all of this end to end.',
            },
            {
              q: 'Will cleaning our list reduce our email revenue?',
              a: 'No—it increases revenue. Unengaged subscribers rarely buy, but mailing them damages your sender reputation and pushes emails for your actual buyers into spam. Suppressing dead profiles lowers your monthly Klaviyo bill and lifts inbox placement for paying customers.',
            },
            {
              q: 'Do we have to stop sending emails during the warm-up?',
              a: 'No. Your high-performing automated flows (Welcome, Abandoned Cart, Checkout, Post-Purchase) stay active, and campaigns continue going to your most engaged 30–60 day segments while we gradually expand reach.',
            },
            {
              q: 'What access do you need to set this up?',
              a: 'We need Manager/Admin access in Klaviyo (or your ESP), DNS access (or we can send exact copy-paste DNS records to your IT/Shopify admin), and access to Google Postmaster Tools.',
            },
            {
              q: 'Is this a one-time fix or ongoing monitoring?',
              a: 'We offer both: a one-time Deliverability Fix & Warm-Up package to resolve immediate issues, or ongoing monthly monitoring as part of our retention and reporting retainers.',
            },
          ]}
        />

        <RelatedServices slugs={['account-audit', 'klaviyo-account-setup', 'reporting-improvement']} />

        <ServiceJsonLd
          slug="email-deliverability"
          name="Email Deliverability Services"
          description="Complete email deliverability audit, SPF/DKIM/DMARC authentication, domain warm-up, list hygiene, and ongoing inbox placement monitoring for eCommerce brands."
        />

        <div className="edl-bottom" data-reveal="up">
          <p>Ready to get your emails out of spam and back into the primary inbox?</p>
          <Link href={contactHref('email-deliverability')} className="btn-primary">Book a Free Deliverability Call →</Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
