import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Navbar from '../../components/Navbar'
import { Footer } from '../../components/Sections'
import { INSIGHTS, getInsightBySlug } from '../../lib/insights'
import { contactHref, SITE_NAME, SITE_URL } from '../../lib/site'
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Calendar,
  CheckCircle2,
  Sparkles,
  BookOpen,
} from 'lucide-react'

export function generateStaticParams() {
  return INSIGHTS.map((item) => ({ slug: item.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const article = getInsightBySlug(slug)
  if (!article) return { title: 'Insight Not Found' }

  const url = `${SITE_URL}/insights/${article.slug}`
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/insights/${article.slug}` },
    openGraph: {
      title: `${article.title} | ${SITE_NAME}`,
      description: article.excerpt,
      url,
      type: 'article',
      images: [{ url: article.heroImage, width: 1400, height: 764, alt: article.heroAlt }],
    },
  }
}

export default async function InsightDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = getInsightBySlug(slug)
  if (!article) notFound()

  const related = INSIGHTS.filter(
    (item) => item.slug !== article.slug && item.category === article.category
  )
    .concat(INSIGHTS.filter((item) => item.slug !== article.slug && item.category !== article.category))
    .slice(0, 3)

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '68px' }}>
        <style>{`
          .ina-hero {
            padding: 56px 0 48px;
            background:
              radial-gradient(ellipse at top left, rgba(30, 166, 114, 0.14) 0%, transparent 60%),
              radial-gradient(ellipse at bottom right, rgba(30, 166, 114, 0.12) 0%, transparent 60%),
              #ffffff;
            border-bottom: 1px solid var(--border);
          }
          .ina-back {
            display: inline-flex;
            align-items: center;
            gap: 7px;
            font-size: 13.5px;
            font-weight: 700;
            color: var(--g);
            text-decoration: none;
            margin-bottom: 22px;
            transition: gap 0.18s ease;
          }
          .ina-back:hover {
            gap: 11px;
          }
          .ina-meta {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: 14px;
            margin-bottom: 18px;
          }
          .ina-cat {
            background: var(--gl);
            color: var(--gd);
            font-size: 11.5px;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 0.06em;
            padding: 5px 12px;
            border-radius: 6px;
          }
          .ina-meta-item {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            font-size: 13.5px;
            color: var(--ink3);
            font-weight: 500;
          }
          .ina-hero h1 {
            font-size: clamp(28px, 3.8vw, 46px);
            font-weight: 800;
            line-height: 1.16;
            color: var(--ink);
            max-width: 920px;
            margin: 0 0 18px;
            letter-spacing: -0.02em;
          }
          .ina-excerpt {
            font-size: 17.5px;
            line-height: 1.7;
            color: var(--ink3);
            max-width: 820px;
            margin: 0 0 36px;
          }
          .ina-hero-img {
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 28px 70px rgba(15, 22, 35, 0.1);
            border: 1px solid var(--border);
            background: var(--soft);
          }
          .ina-hero-img img {
            width: 100%;
            height: auto;
            display: block;
          }

          /* ── Article Body Layout ── */
          .ina-body-sec {
            padding: 72px 0 96px;
            background: #ffffff;
          }
          .ina-layout {
            display: grid;
            grid-template-columns: 290px minmax(0, 1fr);
            gap: 64px;
            align-items: start;
          }

          /* ── Left Sticky Sidebar (TOC + Author + Service Card) ── */
          .ina-sidebar {
            position: sticky;
            top: 96px;
            display: flex;
            flex-direction: column;
            gap: 24px;
          }
          .ina-toc-box {
            background: var(--soft);
            border: 1px solid var(--border);
            border-radius: 16px;
            padding: 22px 20px;
          }
          .ina-toc-title {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 12px;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 0.07em;
            color: var(--ink);
            margin-bottom: 14px;
          }
          .ina-toc-list {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            flex-direction: column;
            gap: 10px;
          }
          .ina-toc-list a {
            display: block;
            font-size: 13.5px;
            font-weight: 600;
            line-height: 1.45;
            color: var(--ink3);
            text-decoration: none;
            padding-left: 10px;
            border-left: 2px solid var(--border);
            transition: color 0.15s ease, border-color 0.15s ease;
          }
          .ina-toc-list a:hover {
            color: var(--g);
            border-left-color: var(--g);
          }

          .ina-author-card {
            background: #ffffff;
            border: 1px solid var(--border);
            border-radius: 16px;
            padding: 22px 20px;
          }
          .ina-author-top {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 12px;
          }
          .ina-author-avatar {
            width: 48px;
            height: 48px;
            border-radius: 50%;
            overflow: hidden;
            border: 2px solid var(--g);
            flex-shrink: 0;
            background: #f0faf5;
          }
          .ina-author-avatar img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center top;
          }
          .ina-author-name {
            font-size: 15px;
            font-weight: 800;
            color: var(--ink);
            line-height: 1.25;
          }
          .ina-author-role {
            font-size: 12px;
            font-weight: 600;
            color: var(--g);
            margin-top: 2px;
          }
          .ina-author-bio {
            font-size: 13px;
            color: var(--ink3);
            line-height: 1.6;
            margin: 0;
          }

          .ina-side-cta {
            background: linear-gradient(145deg, #0f1623 0%, #162436 100%);
            border-radius: 16px;
            padding: 24px 20px;
            color: #ffffff;
          }
          .ina-side-cta-tag {
            font-size: 11px;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 0.07em;
            color: #34d399;
            margin-bottom: 8px;
          }
          .ina-side-cta h4 {
            font-size: 16.5px;
            font-weight: 800;
            color: #ffffff;
            line-height: 1.35;
            margin: 0 0 10px;
          }
          .ina-side-cta p {
            font-size: 13px;
            color: rgba(255, 255, 255, 0.72);
            line-height: 1.6;
            margin: 0 0 16px;
          }
          .ina-side-cta-btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 6px;
            width: 100%;
            padding: 11px 16px;
            border-radius: 9px;
            background: var(--g);
            color: #ffffff;
            font-size: 13.5px;
            font-weight: 700;
            text-decoration: none;
            transition: background 0.18s ease;
          }
          .ina-side-cta-btn:hover {
            background: var(--gd);
          }

          /* ── Right Main Article Content ── */
          .ina-content {
            max-width: 780px;
          }
          .ina-takeaways {
            background: #f2fbf7;
            border: 1px solid #cceadd;
            border-left: 4px solid var(--g);
            border-radius: 14px;
            padding: 26px 28px;
            margin-bottom: 44px;
          }
          .ina-takeaways-head {
            font-size: 14px;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 0.06em;
            color: var(--gd);
            margin-bottom: 14px;
            display: flex;
            align-items: center;
            gap: 8px;
          }
          .ina-takeaways ul {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            flex-direction: column;
            gap: 11px;
          }
          .ina-takeaways li {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            font-size: 15px;
            font-weight: 600;
            color: var(--ink);
            line-height: 1.55;
          }
          .ina-takeaways li svg {
            color: var(--g);
            flex-shrink: 0;
            margin-top: 2px;
          }

          .ina-section {
            margin-bottom: 48px;
            scroll-margin-top: 104px;
          }
          .ina-section h2 {
            font-size: clamp(22px, 2.5vw, 28px);
            font-weight: 800;
            color: var(--ink);
            line-height: 1.3;
            margin: 0 0 16px;
            letter-spacing: -0.015em;
          }
          .ina-section p {
            font-size: 16.5px;
            line-height: 1.82;
            color: var(--ink2);
            margin: 0 0 18px;
          }
          .ina-bullets {
            list-style: none;
            padding: 20px 24px;
            margin: 20px 0;
            background: var(--soft);
            border: 1px solid var(--border);
            border-radius: 12px;
            display: flex;
            flex-direction: column;
            gap: 12px;
          }
          .ina-bullets li {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            font-size: 15.5px;
            font-weight: 600;
            color: var(--ink);
            line-height: 1.55;
          }
          .ina-bullets li svg {
            color: var(--g);
            flex-shrink: 0;
            margin-top: 3px;
          }

          .ina-protip {
            margin-top: 22px;
            padding: 20px 22px;
            border-radius: 12px;
            background: #fffbeb;
            border: 1px solid #fde68a;
            display: flex;
            align-items: flex-start;
            gap: 12px;
          }
          .ina-protip-ico {
            color: #d97706;
            flex-shrink: 0;
            margin-top: 2px;
          }
          .ina-protip-text {
            font-size: 14.5px;
            line-height: 1.65;
            color: #78350f;
            margin: 0;
          }
          .ina-protip-text strong {
            font-weight: 800;
            color: #92400e;
          }

          .ina-inline-figure {
            margin: 40px 0 48px;
            border-radius: 16px;
            overflow: hidden;
            border: 1px solid var(--border);
            background: var(--soft);
            box-shadow: 0 18px 44px rgba(15, 22, 35, 0.08);
          }
          .ina-inline-figure img {
            width: 100%;
            height: auto;
            display: block;
          }
          .ina-inline-caption {
            padding: 12px 18px;
            font-size: 13px;
            color: var(--ink3);
            background: var(--soft);
            border-top: 1px solid var(--border);
            text-align: center;
          }

          .ina-bottom-cta {
            margin-top: 56px;
            padding: 38px 34px;
            border-radius: 18px;
            background:
              radial-gradient(ellipse at top right, rgba(30, 166, 114, 0.16) 0%, transparent 60%),
              var(--soft);
            border: 1px solid var(--border);
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 24px;
          }
          .ina-bottom-cta h3 {
            font-size: 22px;
            font-weight: 800;
            color: var(--ink);
            margin: 0 0 8px;
          }
          .ina-bottom-cta p {
            font-size: 15px;
            color: var(--ink3);
            line-height: 1.65;
            max-width: 480px;
            margin: 0;
          }
          .ina-bottom-btns {
            display: flex;
            gap: 12px;
            flex-wrap: wrap;
          }

          /* ── Related Playbooks Section ── */
          .ina-related {
            padding: 76px 0 96px;
            background: var(--soft);
            border-top: 1px solid var(--border);
          }
          .ina-related-head {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 16px;
            margin-bottom: 36px;
          }
          .ina-related-head h2 {
            font-size: clamp(24px, 2.8vw, 32px);
            font-weight: 800;
            color: var(--ink);
            margin: 0;
          }
          .ina-rel-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
          }
          .ina-rel-card {
            background: #ffffff;
            border: 1px solid var(--border);
            border-radius: 18px;
            overflow: hidden;
            text-decoration: none;
            display: flex;
            flex-direction: column;
            transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease;
          }
          .ina-rel-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 16px 36px rgba(15, 22, 35, 0.08);
            border-color: var(--gm);
          }
          .ina-rel-thumb {
            position: relative;
            aspect-ratio: 1400 / 764;
            overflow: hidden;
            background: var(--soft);
            border-bottom: 1px solid var(--border);
          }
          .ina-rel-thumb img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.35s ease;
          }
          .ina-rel-card:hover .ina-rel-thumb img {
            transform: scale(1.04);
          }
          .ina-rel-body {
            padding: 24px 22px;
            display: flex;
            flex-direction: column;
            flex: 1;
          }
          .ina-rel-meta {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 8px;
            margin-bottom: 12px;
          }
          .ina-rel-cat {
            background: var(--gl);
            color: var(--gd);
            font-size: 11px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            padding: 3px 9px;
            border-radius: 4px;
          }
          .ina-rel-time {
            font-size: 12px;
            color: var(--ink4);
          }
          .ina-rel-card h3 {
            font-size: 16.5px;
            font-weight: 800;
            color: var(--ink);
            line-height: 1.4;
            margin: 0 0 10px;
          }
          .ina-rel-card p {
            font-size: 13.5px;
            color: var(--ink3);
            line-height: 1.65;
            margin: 0 0 18px;
            flex: 1;
          }
          .ina-rel-more {
            font-size: 13px;
            font-weight: 700;
            color: var(--g);
            display: inline-flex;
            align-items: center;
            gap: 5px;
          }

          @media (max-width: 980px) {
            .ina-layout {
              grid-template-columns: 1fr;
              gap: 40px;
            }
            .ina-sidebar {
              position: static;
              order: 2;
            }
            .ina-content {
              order: 1;
              max-width: 100%;
            }
            .ina-rel-grid {
              grid-template-columns: 1fr;
            }
          }
        `}</style>

        {/* ── Hero Section ── */}
        <section className="ina-hero">
          <div className="wrap">
            <Link href="/insights" className="ina-back">
              <ArrowLeft size={16} /> Back to All Playbooks &amp; Insights
            </Link>

            <div className="ina-meta">
              <span className="ina-cat">{article.category}</span>
              <span className="ina-meta-item">
                <Calendar size={14} /> {article.date}
              </span>
              <span className="ina-meta-item">
                <Clock size={14} /> {article.readTime}
              </span>
            </div>

            <h1>{article.title}</h1>
            <p className="ina-excerpt">{article.excerpt}</p>

            <div className="ina-hero-img">
              <Image
                src={article.heroImage}
                alt={article.heroAlt}
                width={1400}
                height={764}
                priority
              />
            </div>
          </div>
        </section>

        {/* ── 2-Column Article Body ── */}
        <section className="ina-body-sec">
          <div className="wrap ina-layout">
            {/* Left Sticky Sidebar */}
            <aside className="ina-sidebar">
              <div className="ina-toc-box">
                <div className="ina-toc-title">
                  <BookOpen size={15} color="var(--g)" /> On This Page
                </div>
                <ul className="ina-toc-list">
                  {article.sections.map((sec) => (
                    <li key={sec.id}>
                      <a href={`#${sec.id}`}>{sec.heading}</a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="ina-author-card">
                <div className="ina-author-top">
                  <div className="ina-author-avatar">
                    <Image
                      src="/images/zahidul.png"
                      alt="Zahidul Islam"
                      width={96}
                      height={96}
                    />
                  </div>
                  <div>
                    <div className="ina-author-name">Zahidul Islam</div>
                    <div className="ina-author-role">Founder · 13+ Yrs Experience</div>
                  </div>
                </div>
                <p className="ina-author-bio">
                  Top Rated Plus Klaviyo, HTML Email &amp; Shopify Specialist on Upwork with 800+ projects delivered and 752+ 5.0-star client reviews.
                </p>
              </div>

              <div className="ina-side-cta">
                <div className="ina-side-cta-tag">Done-For-You Execution</div>
                <h4>Need help with {article.relatedServiceLabel}?</h4>
                <p>
                  Let our team audit and implement this exact framework inside your store.
                </p>
                <Link
                  href={`/services/${article.relatedServiceSlug}`}
                  className="ina-side-cta-btn"
                >
                  Explore Service <ArrowRight size={15} />
                </Link>
              </div>
            </aside>

            {/* Right Main Reading Content */}
            <article className="ina-content">
              <div className="ina-takeaways">
                <div className="ina-takeaways-head">
                  <CheckCircle2 size={17} /> Key Takeaways
                </div>
                <ul>
                  {article.keyTakeaways.map((item) => (
                    <li key={item}>
                      <CheckCircle2 size={17} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {article.sections.map((sec, idx) => (
                <div key={sec.id}>
                  <section id={sec.id} className="ina-section">
                    <h2>{sec.heading}</h2>
                    {sec.paragraphs.map((p, pIdx) => (
                      <p key={pIdx}>{p}</p>
                    ))}
                    {sec.bullets && (
                      <ul className="ina-bullets">
                        {sec.bullets.map((b) => (
                          <li key={b}>
                            <CheckCircle2 size={17} />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {sec.proTip && (
                      <div className="ina-protip">
                        <Sparkles size={19} className="ina-protip-ico" />
                        <p className="ina-protip-text">
                          <strong>Zahidul&apos;s Pro Tip:</strong> {sec.proTip}
                        </p>
                      </div>
                    )}
                  </section>

                  {idx === 1 && (
                    <figure className="ina-inline-figure">
                      <Image
                        src={article.secondaryImage}
                        alt={article.secondaryAlt}
                        width={1400}
                        height={764}
                      />
                      <figcaption className="ina-inline-caption">
                        {article.secondaryAlt}
                      </figcaption>
                    </figure>
                  )}
                </div>
              ))}

              <div className="ina-bottom-cta">
                <div>
                  <h3>Want our team to implement this for your brand?</h3>
                  <p>
                    Book a free discovery call or claim a complimentary Klaviyo &amp; Shopify audit to see how much revenue your store is leaving on the table.
                  </p>
                </div>
                <div className="ina-bottom-btns">
                  <Link
                    href={contactHref(article.relatedServiceSlug)}
                    className="btn-primary"
                  >
                    Book a Free Discovery Call →
                  </Link>
                  <Link
                    href={`/services/${article.relatedServiceSlug}`}
                    className="btn-ghost"
                  >
                    View {article.relatedServiceLabel}
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* ── Related Playbooks ── */}
        <section className="ina-related">
          <div className="wrap">
            <div className="ina-related-head">
              <h2>More playbooks &amp; guides</h2>
              <Link href="/insights" className="btn-ghost">
                View All 12 Guides →
              </Link>
            </div>

            <div className="ina-rel-grid">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/insights/${item.slug}`}
                  className="ina-rel-card"
                >
                  <div className="ina-rel-thumb">
                    <Image
                      src={item.heroImage}
                      alt={item.heroAlt}
                      width={700}
                      height={382}
                    />
                  </div>
                  <div className="ina-rel-body">
                    <div className="ina-rel-meta">
                      <span className="ina-rel-cat">{item.category}</span>
                      <span className="ina-rel-time">{item.readTime}</span>
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.excerpt}</p>
                    <span className="ina-rel-more">Read Playbook →</span>
                  </div>
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
