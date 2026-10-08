import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../../components/Navbar'
import { Footer } from '../../components/Sections'
import {
  CheckCircle2, RefreshCw, ShoppingBag, Users, PackageCheck,
  Star, Link2, Search, ShieldCheck, Layout, ArrowRightLeft, Wrench,
} from 'lucide-react'
import type { Metadata } from 'next'
import { RelatedServices, ServiceChips, ServiceFAQ, ServiceJsonLd, ServiceOffer, ServicePromise, ServiceProof } from '../../components/service/ServiceBlocks'
import { contactHref } from '../../lib/site'
import { serviceMetadata } from '../../lib/seo'

export const metadata: Metadata = serviceMetadata({
  slug: 'shopify-migration',
  title: "Shopify Migration Services",
  description: "Migrate to Shopify from WooCommerce, Magento, BigCommerce and more with zero data loss, zero SEO drop and zero downtime: full data migration, 301 redirects and a planned cutover.",
  image: '/images/services/shopify-migration/hero-cutover.jpg',
})

const included = [
  'Full product, variant & collection migration',
  'Customer account & order history migration',
  '301 redirect mapping for SEO continuity',
  'Theme build matching or upgrading your current design',
  'App & integration reconnection',
  'Staging preview before go-live',
  'Zero-downtime cutover plan',
  '30 days of post-launch support',
]

const steps = [
  { n: '01', title: 'Audit & Map', desc: 'We review your current store and map every product, page, and URL that needs to move, before touching anything live.' },
  { n: '02', title: 'Migrate & Build', desc: 'Data is migrated into Shopify and the theme is built or upgraded, with integrations reconnected on a staging environment. A typical migration takes 4 to 6 weeks.' },
  { n: '03', title: 'Launch & Support', desc: 'A scheduled cutover, redirect verification, and hands-on support through your first weeks live.' },
]

const whatYouGet = [
  { icon: ArrowRightLeft, label: 'Every product, customer & order migrated accurately' },
  { icon: Search,         label: 'SEO rankings protected with proper redirects' },
  { icon: RefreshCw,      label: 'Zero downtime during cutover' },
  { icon: ShieldCheck,    label: 'Full post-launch support included' },
]

export default function ShopifyMigrationPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '68px' }}>
        <style>{`
          .smg-hero {
            padding: 64px 0 76px;
            background:
              radial-gradient(ellipse at top left, rgba(30, 166, 114, 0.14) 0%, transparent 60%),
              radial-gradient(ellipse at bottom right, rgba(30, 166, 114, 0.14) 0%, transparent 60%),
              #ffffff;
            overflow: hidden; position: relative;
          }
          .smg-hero-grid { display: grid; grid-template-columns: minmax(0,1fr) minmax(0,1fr); gap: 48px; align-items: center; }
          .smg-hero-left .section-tag::before { display: none; }
          .smg-hero-left h1 { margin-bottom: 18px; }
          .smg-hero-left .section-sub { margin-bottom: 32px; max-width: 480px; }
          .smg-btns { display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 28px; }
          .smg-proof { display: flex; align-items: center; gap: 6px; font-size: 13px; color: var(--ink3); }

          .smg-hero-visual {
            position: relative; border-radius: 20px; overflow: hidden;
            box-shadow: 0 28px 70px rgba(15,22,35,.09);
            max-width: 650px; width: 100%; margin: 0 auto; background: var(--soft);
          }
          .smg-hero-visual img { width: 100%; height: auto; display: block; }

          @media(max-width:1000px){
            .smg-hero-grid { grid-template-columns: 1fr; }
            .smg-hero-visual { max-width: 600px; }
          }

          /* What You Get — highlighted through the tinted background, a
             centered tag, and gradient icon "medallions"; deliberately NOT
             a bordered card/box. Items sit in one open row divided by thin
             rules, not stacked inside a container. */
          .smg-whatget {
            padding: 64px 0 72px; position: relative; overflow: hidden;
            background:
              radial-gradient(ellipse at top right, rgba(30,166,114,0.14) 0%, transparent 55%),
              radial-gradient(ellipse at bottom left, rgba(30,166,114,0.10) 0%, transparent 55%),
              var(--soft);
            border-top: 1px solid var(--border); border-bottom: 1px solid var(--border);
          }
          .smg-whatget-head { text-align: center; max-width: 720px; margin: 0 auto 48px; }
          .smg-whatget-tag {
            display: inline-flex; align-items: center; gap: 8px; background: var(--gl); color: var(--gd);
            font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: .06em;
            padding: 6px 14px; border-radius: 100px; margin-bottom: 16px;
          }
          .smg-whatget-head h2 { font-size: clamp(20px, 2.4vw, 32px); margin-bottom: 0; white-space: nowrap; }
          @media(max-width:560px){
            .smg-whatget-head h2 { white-space: normal; font-size: clamp(20px, 5.5vw, 24px); }
          }

          .smg-whatget-row {
            display: flex; align-items: flex-start; justify-content: center;
            max-width: 1000px; margin: 0 auto; flex-wrap: wrap;
          }
          .smg-whatget-item {
            flex: 1 1 210px; display: flex; flex-direction: column; align-items: center;
            text-align: center; gap: 16px; padding: 0 26px; position: relative;
          }
          .smg-whatget-item:not(:last-child)::after {
            content: ''; position: absolute; right: 0; top: 4px; bottom: 4px; width: 1px; background: var(--gm);
          }
          .smg-whatget-ico {
            width: 54px; height: 54px; border-radius: 50%;
            background: linear-gradient(135deg, #1ea672, #17845b); color: #fff;
            display: flex; align-items: center; justify-content: center;
            box-shadow: 0 10px 24px rgba(30,166,114,.32);
          }
          .smg-whatget-item p { font-size: 14.5px; font-weight: 600; color: var(--ink2); line-height: 1.5; max-width: 200px; }

          @media(max-width:820px){
            .smg-whatget-row { flex-direction: column; align-items: center; gap: 32px; }
            .smg-whatget-item { padding: 0; }
            .smg-whatget-item:not(:last-child)::after { display: none; }
          }

          .smg-feature { padding: 72px 0; }
          .smg-feature-alt { background: var(--soft); }
          .smg-feature-alt .smg-diagram-img { background: #fff; }
          .smg-feature-grid { display: grid; grid-template-columns: minmax(0,1fr) minmax(0,1fr); gap: 56px; align-items: center; }
          .smg-feature-tag { font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: .05em; color: var(--g); margin-bottom: 12px; }
          .smg-feature h2 { font-size: clamp(24px, 2.4vw, 30px); color: var(--ink); margin-bottom: 14px; }
          .smg-feature-sub { color: var(--ink3); font-size: 15.5px; line-height: 1.75; margin-bottom: 22px; max-width: 460px; }
          .smg-feature ul { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 14px; }
          .smg-feature li { display: flex; align-items: flex-start; gap: 10px; font-size: 14.5px; color: var(--ink2); line-height: 1.55; max-width: 440px; }
          .smg-feature li svg { color: var(--g); flex-shrink: 0; margin-top: 2px; }

          @media(max-width:900px){
            .smg-feature-grid { grid-template-columns: 1fr; }
          }

          .smg-diagram-img {
            border-radius: 16px; overflow: hidden; background: var(--soft);
            box-shadow: 0 20px 50px rgba(15,22,35,.08);
          }
          .smg-diagram-img img { width: 100%; height: auto; display: block; }

          .smg-included { background: var(--soft); padding: 72px 0; }
          .smg-included-grid { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 18px 40px; max-width: 880px; margin: 0 auto; }
          .smg-included-item { display: flex; align-items: flex-start; gap: 12px; font-size: 15px; color: var(--ink2); font-weight: 600; }
          .smg-included-item svg { color: var(--g); flex-shrink: 0; margin-top: 2px; }
          @media(max-width:640px){ .smg-included-grid { grid-template-columns: 1fr; } }

          .smg-steps { padding: 72px 0 88px; }
          .smg-steps-grid { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 32px; }
          .smg-step { min-width: 0; }
          .smg-step-num {
            width: 44px; height: 44px; border-radius: 50%;
            background: var(--gl); color: var(--gd); font-weight: 800; font-size: 15px;
            display: flex; align-items: center; justify-content: center; margin-bottom: 18px;
          }
          .smg-step h3 { font-size: 17px; color: var(--ink); margin-bottom: 8px; }
          .smg-step p { font-size: 14px; color: var(--ink3); line-height: 1.7; }
          @media(max-width:900px){ .smg-steps-grid { grid-template-columns: 1fr; } }

          .smg-bottom { text-align: center; padding: 64px 0 96px; }
          .smg-bottom p { color: var(--ink3); font-size: 16px; margin-bottom: 24px; }
        `}</style>

        <section className="smg-hero">
          <div className="wrap smg-hero-grid">
            <div className="smg-hero-left" data-reveal="up">
              <div className="section-tag">Shopify Migration</div>
              <h1 style={{ fontSize: 'clamp(32px,3.8vw,46px)' }}>Move to Shopify<br /><em style={{ color: 'var(--g)', fontStyle: 'normal' }}>without losing a single order.</em></h1>
              <p className="section-sub">Migrating from WooCommerce, BigCommerce, or another platform: clean data, no downtime, and a design that&apos;s ready to sell from launch day.</p>
              <div className="smg-btns">
                <Link href={contactHref('shopify-migration')} className="btn-primary">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                  Book a Free Call
                </Link>
                <Link href="/#cases" className="btn-ghost">See Case Studies →</Link>
              </div>
              <div className="smg-proof">
                <span style={{ color: '#f5a623', fontSize: '15px', letterSpacing: '1px' }}>⭐⭐⭐⭐⭐</span>
                <span>5.0 · 752 reviews on Upwork</span>
              </div>
            </div>

            <div className="smg-hero-visual" data-reveal="right" style={{ transitionDelay: '150ms' }}>
              <Image
                src="/images/services/shopify-migration/hero-cutover.jpg"
                alt="Legacy platform migrating to Shopify Plus with zero orders lost and 100% customer data synced"
                width={1400}
                height={781}
              />
            </div>
          </div>
        </section>

        <section className="smg-whatget">
          <div className="wrap">
            <div className="smg-whatget-head" data-reveal="up">
              <div className="smg-whatget-tag">What You Get</div>
              <h2>Everything included, <em style={{ color: 'var(--g)', fontStyle: 'normal' }}>nothing left to guess.</em></h2>
            </div>
            <div className="smg-whatget-row">
              {whatYouGet.map((item, i) => (
                <div key={item.label} className="smg-whatget-item" data-reveal="up" style={{ transitionDelay: `${i * 90}ms` }}>
                  <div className="smg-whatget-ico"><item.icon size={22} strokeWidth={1.75} /></div>
                  <p>{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ServiceProof quote={{"text": "Handled both our Shopify migration and Klaviyo setup end-to-end, one team, zero handoffs, and it just worked from day one. Exactly the kind of full-stack partner we were looking for.", "name": "Daniel W.", "role": "Operations Lead, Home & Living Brand"}} caseStudy={{"tag": "eCommerce · Shopify", "title": "Full Shopify rebuild lifted conversion 24% for a skincare brand", "desc": "Migrated from a legacy platform to a custom Shopify theme built for speed and mobile conversion, with a streamlined checkout and Core Web Vitals tuned from the ground up.", "stats": [{"val": "+24%", "lbl": "Conversion Rate"}, {"val": "1.8s", "lbl": "Load Time"}, {"val": "−31%", "lbl": "Cart Abandonment"}]}} />

        <ServicePromise tag="Zero-Risk Migration" title="The three things you can't afford to lose, protected." tinted items={[{"title": "Zero data loss", "desc": "Products, variants, customers, order history and reviews are moved and checked against your old store before launch."}, {"title": "Zero SEO drop", "desc": "Every old URL is mapped to its new home with 301 redirects, and meta titles and descriptions carry over."}, {"title": "Zero downtime", "desc": "Your old store keeps selling while we build on Shopify, then we switch over during your quietest hours."}]} />

        <section className="smg-feature">
          <div className="wrap smg-feature-grid">
            <div data-reveal="up">
              <div className="smg-feature-tag">Zero-Downtime Cutover</div>
              <h2>Launch day, without the disruption.</h2>
              <p className="smg-feature-sub">We plan the cutover so your store keeps taking orders right up until the new site goes live.</p>
              <ul>
                <li><RefreshCw size={17} /> Cutover scheduled around your traffic patterns</li>
                <li><ShieldCheck size={17} /> Old store stays live until Shopify is ready</li>
                <li><Link2 size={17} /> DNS & domain switch handled for you</li>
              </ul>
            </div>
            <div className="smg-diagram-img" data-reveal="zoom" style={{ transitionDelay: '120ms' }}>
              <Image
                src="/images/services/shopify-migration/zero-downtime-cutover.jpg"
                alt="Legacy platform to Shopify Plus cutover with 100% uptime guaranteed and live customer sessions transferred"
                width={1400}
                height={781}
              />
            </div>
          </div>
        </section>

        <section className="smg-feature smg-feature-alt">
          <div className="wrap smg-feature-grid">
            <div className="smg-diagram-img" data-reveal="zoom">
              <Image
                src="/images/services/shopify-migration/data-migration-hub.jpg"
                alt="Product catalog, customer accounts, and historical orders migrating into Shopify with zero data loss"
                width={1400}
                height={764}
              />
            </div>
            <div data-reveal="up" style={{ transitionDelay: '120ms' }}>
              <div className="smg-feature-tag">Full Data Migration</div>
              <h2>Every product, order, and customer, moved accurately.</h2>
              <p className="smg-feature-sub">We migrate your full catalog and historical data, not just whatever fits easily.</p>
              <ul>
                <li><PackageCheck size={17} /> Products, variants & collections</li>
                <li><Users size={17} /> Customer accounts & order history</li>
                <li><Star size={17} /> Reviews & metafields where supported</li>
              </ul>
              <ServiceChips label="Migrating from" items={["WooCommerce", "Magento / Adobe Commerce", "BigCommerce", "Wix", "Squarespace", "Custom platforms"]} />
            </div>
          </div>
        </section>

        <section className="smg-feature">
          <div className="wrap smg-feature-grid">
            <div data-reveal="up">
              <div className="smg-feature-tag">Design Parity Or Upgrade</div>
              <h2>Keep what works, or use the move to upgrade.</h2>
              <p className="smg-feature-sub">We can rebuild your current design on Shopify, or use the migration as a chance to modernize it.</p>
              <ul>
                <li><Layout size={17} /> Match your existing look & feel, or redesign</li>
                <li><ShoppingBag size={17} /> Improved navigation & mobile experience</li>
                <li><Wrench size={17} /> Built on a theme structure that&apos;s easy to grow</li>
              </ul>
            </div>
            <div className="smg-diagram-img" data-reveal="zoom" style={{ transitionDelay: '120ms' }}>
              <Image
                src="/images/services/shopify-migration/design-upgrade.jpg"
                alt="Before and after theme upgrade to Shopify 2.0 with fast filtering navigation and a dynamic product page"
                width={1400}
                height={781}
              />
            </div>
          </div>
        </section>

        <section className="smg-feature smg-feature-alt">
          <div className="wrap smg-feature-grid">
            <div className="smg-diagram-img" data-reveal="zoom">
              <Image
                src="/images/services/shopify-migration/post-launch-support.jpg"
                alt="SEO rankings protected with 301 redirects active, organic traffic growth, and day 1 to day 30 post-launch QA support"
                width={1400}
                height={781}
              />
            </div>
            <div data-reveal="up" style={{ transitionDelay: '120ms' }}>
              <div className="smg-feature-tag">Post-Launch Support</div>
              <h2>We stay through launch week and beyond.</h2>
              <p className="smg-feature-sub">Migrations can surface small issues after go-live, and we&apos;re on call to fix them fast.</p>
              <ul>
                <li><ShieldCheck size={17} /> Priority support for the first 30 days</li>
                <li><Search size={17} /> SEO redirect monitoring</li>
                <li><Wrench size={17} /> Bug fixes & adjustments as they come up</li>
              </ul>
            </div>
          </div>
        </section>

        <ServiceOffer tag="Free Scope Estimate" title="Get a migration plan and quote for your store" desc="Tell us where you are today and we will send back a migration checklist, timeline and price." bullets={["Your current platform and store URL", "Roughly how many products and orders", "The apps and integrations you rely on"]} ctaLabel="Get My Scope Estimate" href={contactHref('shopify-migration')} />

        <section className="smg-included">
          <div className="wrap">
            <div className="sh-row" style={{ textAlign: 'center', marginBottom: '40px' }} data-reveal="up">
              <h2>What&apos;s <em style={{ color: 'var(--g)', fontStyle: 'normal' }}>included.</em></h2>
              <p className="section-sub" style={{ margin: '0 auto' }}>Everything needed for a clean, complete move to Shopify.</p>
            </div>
            <div className="smg-included-grid">
              {included.map((item, i) => (
                <div key={item} className="smg-included-item" data-reveal="up" style={{ transitionDelay: `${i * 60}ms` }}>
                  <CheckCircle2 size={19} strokeWidth={2} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="smg-steps">
          <div className="wrap">
            <div className="sh-row" style={{ textAlign: 'center', marginBottom: '48px' }} data-reveal="up">
              <h2>How it <em style={{ color: 'var(--g)', fontStyle: 'normal' }}>works.</em></h2>
              <p className="section-sub" style={{ margin: '0 auto' }}>Three steps, start to finish.</p>
            </div>
            <div className="smg-steps-grid">
              {steps.map((s, i) => (
                <div key={s.n} className="smg-step" data-reveal="up" style={{ transitionDelay: `${i * 100}ms` }}>
                  <div className="smg-step-num">{s.n}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ServiceFAQ items={[{"q": "Will customer passwords migrate to Shopify?", "a": "No platform can move passwords, because they're encrypted. Customer accounts move over, and customers get an email to activate their account and set a new password."}, {"q": "Will our Google rankings drop after migrating?", "a": "Not when it's done properly. Every old URL is 301-redirected to its new page, and meta data is carried over, so search engines follow the move."}, {"q": "What happens to historical orders and customer data?", "a": "Order history and customer records are migrated and checked against your old store, so your team and your email flows keep the full history."}, {"q": "How long does a migration take?", "a": "A typical migration takes 4 to 6 weeks, depending on the platform, how much data you have and whether the design is changing."}, {"q": "Can you redesign the store while migrating?", "a": "Yes. We can match your current design or upgrade it during the move, whichever you prefer."}]} />

        <RelatedServices slugs={["shopify-theme-development", "klaviyo-account-setup", "shopify-speed-optimization"]} />

        <ServiceJsonLd slug="shopify-migration" name="Shopify Migration" description="Migrate to Shopify from WooCommerce, Magento, BigCommerce and more with zero data loss, zero SEO drop and zero downtime: full data migration, 301 redirects and a planned cutover." />

        <div className="smg-bottom" data-reveal="up">
          <p>Ready to move to Shopify without the risk?</p>
          <Link href={contactHref('shopify-migration')} className="btn-primary">Book a Free Call →</Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
