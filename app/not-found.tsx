import Link from 'next/link'
import Navbar from './components/Navbar'
import { Footer } from './components/Sections'
import { ArrowLeft, Compass, BookOpen, Layers, Sparkles } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404 — Page Not Found',
  description: 'The page you are looking for could not be found. Explore PlusSquire’s Shopify, Klaviyo, and Email Marketing services.',
}

const quickLinks = [
  {
    icon: Layers,
    title: 'Explore All 15 Services',
    desc: 'Custom Shopify themes, migrations, speed optimization, Klaviyo flows & deliverability.',
    href: '/services',
  },
  {
    icon: Sparkles,
    title: 'Client Case Studies',
    desc: 'See real revenue numbers from our DTC skincare, luxury spirits, and apparel builds.',
    href: '/case-studies',
  },
  {
    icon: BookOpen,
    title: 'eCommerce Playbooks & Insights',
    desc: '12 technical guides on Klaviyo flows, DMARC deliverability, HTML emails & Core Web Vitals.',
    href: '/insights',
  },
  {
    icon: Compass,
    title: 'Frequently Asked Questions',
    desc: 'Answers on pricing, timelines, onboarding, and how we work with brands & agencies.',
    href: '/faq',
  },
]

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '68px' }}>
        <style>{`
          .nf-sec {
            padding: 88px 0 110px;
            background:
              radial-gradient(ellipse at top left, rgba(30, 166, 114, 0.14) 0%, transparent 58%),
              radial-gradient(ellipse at bottom right, rgba(30, 166, 114, 0.12) 0%, transparent 58%),
              #ffffff;
            min-height: calc(100vh - 260px);
            display: flex;
            align-items: center;
          }
          .nf-head {
            text-align: center;
            max-width: 640px;
            margin: 0 auto 56px;
          }
          .nf-code {
            font-size: clamp(64px, 9vw, 108px);
            font-weight: 900;
            line-height: 1;
            letter-spacing: -0.04em;
            background: linear-gradient(135deg, #1ea672 0%, #0f1623 85%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 14px;
          }
          .nf-head h1 {
            font-size: clamp(28px, 3.6vw, 42px);
            font-weight: 800;
            color: var(--ink);
            margin: 0 0 14px;
            line-height: 1.2;
          }
          .nf-head p {
            font-size: 16.5px;
            color: var(--ink3);
            line-height: 1.7;
            margin: 0 0 30px;
          }
          .nf-btns {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            gap: 12px;
          }

          .nf-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
            max-width: 1080px;
            margin: 0 auto;
          }
          .nf-card {
            background: #ffffff;
            border: 1px solid var(--border);
            border-left: 3px solid var(--g);
            border-radius: 16px;
            padding: 24px 22px;
            text-decoration: none;
            display: flex;
            flex-direction: column;
            transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease;
          }
          .nf-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 14px 34px rgba(15, 22, 35, 0.08);
            border-color: var(--gm);
            border-left-color: var(--g);
          }
          .nf-ico {
            width: 42px;
            height: 42px;
            border-radius: 10px;
            background: var(--gl);
            color: var(--g);
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 16px;
          }
          .nf-card h3 {
            font-size: 16px;
            font-weight: 800;
            color: var(--ink);
            margin: 0 0 8px;
          }
          .nf-card p {
            font-size: 13.5px;
            color: var(--ink3);
            line-height: 1.65;
            margin: 0 0 16px;
            flex: 1;
          }
          .nf-more {
            font-size: 13px;
            font-weight: 700;
            color: var(--g);
          }

          @media (max-width: 980px) {
            .nf-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          @media (max-width: 580px) {
            .nf-grid {
              grid-template-columns: 1fr;
            }
          }
        `}</style>

        <section className="nf-sec">
          <div className="wrap">
            <div className="nf-head">
              <div className="nf-code">404</div>
              <h1>We couldn&apos;t find that page.</h1>
              <p>
                The link may have moved or the URL might be mistyped. Here are the fastest ways to get back to what you were looking for:
              </p>
              <div className="nf-btns">
                <Link href="/" className="btn-primary">
                  <ArrowLeft size={16} /> Back to Homepage
                </Link>
                <Link href="/#contact" className="btn-ghost">
                  Book a Free Discovery Call →
                </Link>
              </div>
            </div>

            <div className="nf-grid">
              {quickLinks.map((item) => (
                <Link key={item.href} href={item.href} className="nf-card">
                  <div className="nf-ico">
                    <item.icon size={20} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <span className="nf-more">Explore →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
