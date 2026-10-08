import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle2, ShieldCheck, Lock, ArrowRight, Download } from 'lucide-react'
import { SERVICES, SITE_NAME, SITE_URL } from '../../lib/site'

/*
  Shared building blocks for the /services/* pages.
  Each block carries its own small <style> tag (same pattern as the pages) and
  uses the global color tokens (--g, --gd, --gl, --ink*, --soft, --border).
*/

const IS_DEV = process.env.NODE_ENV !== 'production'

/* ─────────────── Image slot ───────────────
   Shows the image when `src` is set. With no `src`, a dashed placeholder is
   shown on localhost only, so the owner can see where an image is missing;
   in production the slot renders nothing. */
export function ImageSlot({
  src, alt, label, width = 1400, height = 764,
}: { src?: string; alt: string; label: string; width?: number; height?: number }) {
  if (src) {
    return (
      <div className="svb-img">
        <Image src={src} alt={alt} width={width} height={height} />
        <style>{`.svb-img{border-radius:16px;overflow:hidden;background:var(--soft);box-shadow:0 20px 50px rgba(15,22,35,.08)}.svb-img img{width:100%;height:auto;display:block}`}</style>
      </div>
    )
  }
  if (!IS_DEV) return null
  return (
    <div className="svb-slot" style={{ aspectRatio: `${width} / ${height}` }}>
      <span>Image needed: {label}</span>
      <style>{`.svb-slot{border:2px dashed var(--gm);border-radius:16px;background:var(--gl);display:flex;align-items:center;justify-content:center;text-align:center;padding:20px;color:var(--gd);font-size:13px;font-weight:700}`}</style>
    </div>
  )
}

/* ─────────────── Gallery ───────────────
   Hidden entirely in production until at least one image is provided. */
export function ServiceGallery({
  tag, title, sub, items,
}: {
  tag: string
  title: string
  sub?: string
  items: { src?: string; alt: string; label: string; width?: number; height?: number }[]
}) {
  if (!IS_DEV && !items.some((i) => i.src)) return null
  return (
    <section className="svb-gallery">
      <style>{`
        .svb-gallery { padding: 72px 0; }
        .svb-gallery-head { text-align: center; max-width: 720px; margin: 0 auto 40px; }
        .svb-tag { font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: .05em; color: var(--g); margin-bottom: 12px; }
        .svb-gallery-head h2 { font-size: clamp(24px, 2.4vw, 30px); color: var(--ink); margin-bottom: 10px; }
        .svb-gallery-head p { color: var(--ink3); font-size: 15.5px; line-height: 1.7; }
        .svb-gallery-grid { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 24px; }
        @media(max-width:760px){ .svb-gallery-grid { grid-template-columns: 1fr; } }
      `}</style>
      <div className="wrap">
        <div className="svb-gallery-head" data-reveal="up">
          <div className="svb-tag">{tag}</div>
          <h2>{title}</h2>
          {sub && <p>{sub}</p>}
        </div>
        <div className="svb-gallery-grid">
          {items.map((it, i) => (
            <div key={it.label} data-reveal="up" style={{ transitionDelay: `${i * 80}ms` }}>
              <ImageSlot {...it} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────── Chips ─────────────── */
export function ServiceChips({ label, items }: { label?: string; items: string[] }) {
  return (
    <div className="svb-chips">
      <style>{`
        .svb-chips { margin-top: 22px; max-width: 460px; }
        .svb-chips-label { font-size: 11.5px; font-weight: 800; text-transform: uppercase; letter-spacing: .05em; color: var(--ink4); margin-bottom: 10px; }
        .svb-chips-row { display: flex; flex-wrap: wrap; gap: 8px; }
        .svb-chip { background: #fff; border: 1px solid var(--border); color: var(--ink2); font-size: 12.5px; font-weight: 600; padding: 6px 12px; border-radius: 100px; }
      `}</style>
      {label && <div className="svb-chips-label">{label}</div>}
      <div className="svb-chips-row">
        {items.map((c) => <span key={c} className="svb-chip">{c}</span>)}
      </div>
    </div>
  )
}

/* ─────────────── Promise band ───────────────
   3 or 4 short reassurance cards (safety, guarantees, compliance, models). */
export function ServicePromise({
  tag, title, sub, items, tinted = false,
}: {
  tag: string
  title: string
  sub?: string
  items: { title: string; desc: string }[]
  tinted?: boolean
}) {
  return (
    <section className={`svb-promise${tinted ? ' svb-promise-tint' : ''}`}>
      <style>{`
        .svb-promise { padding: 72px 0; }
        .svb-promise-tint { background: var(--soft); }
        .svb-promise-head { text-align: center; max-width: 720px; margin: 0 auto 40px; }
        .svb-promise-head h2 { font-size: clamp(24px, 2.4vw, 30px); color: var(--ink); margin-bottom: 10px; }
        .svb-promise-head p { color: var(--ink3); font-size: 15.5px; line-height: 1.7; }
        .svb-promise-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 18px; max-width: 1040px; margin: 0 auto; }
        .svb-promise-card { background: #fff; border: 1px solid var(--border); border-radius: 16px; padding: 26px 22px; }
        .svb-promise-tint .svb-promise-card { background: #fff; }
        .svb-promise-ico { width: 40px; height: 40px; border-radius: 10px; background: var(--gl); color: var(--g); display: flex; align-items: center; justify-content: center; margin-bottom: 14px; }
        .svb-promise-card h3 { font-size: 16px; color: var(--ink); margin-bottom: 8px; }
        .svb-promise-card p { font-size: 14px; color: var(--ink3); line-height: 1.65; }
      `}</style>
      <div className="wrap">
        <div className="svb-promise-head" data-reveal="up">
          <div className="svb-tag" style={{ fontSize: 12, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '.05em', color: 'var(--g)', marginBottom: 12 }}>{tag}</div>
          <h2>{title}</h2>
          {sub && <p>{sub}</p>}
        </div>
        <div className="svb-promise-grid">
          {items.map((it, i) => (
            <div key={it.title} className="svb-promise-card" data-reveal="up" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="svb-promise-ico"><ShieldCheck size={20} /></div>
              <h3>{it.title}</h3>
              <p>{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────── Use-case grid ─────────────── */
export function ServiceUseCases({
  tag, title, sub, items,
}: { tag: string; title: string; sub?: string; items: { title: string; desc: string }[] }) {
  return (
    <section className="svb-uc">
      <style>{`
        .svb-uc { padding: 72px 0; }
        .svb-uc-head { text-align: center; max-width: 720px; margin: 0 auto 40px; }
        .svb-uc-head h2 { font-size: clamp(24px, 2.4vw, 30px); color: var(--ink); margin-bottom: 10px; }
        .svb-uc-head p { color: var(--ink3); font-size: 15.5px; line-height: 1.7; }
        .svb-uc-grid { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 18px; max-width: 960px; margin: 0 auto; }
        .svb-uc-card { border: 1px solid var(--border); border-left: 3px solid var(--g); border-radius: 14px; padding: 24px 22px; background: #fff; }
        .svb-uc-card h3 { font-size: 16.5px; color: var(--ink); margin-bottom: 8px; }
        .svb-uc-card p { font-size: 14px; color: var(--ink3); line-height: 1.65; }
        @media(max-width:700px){ .svb-uc-grid { grid-template-columns: 1fr; } }
      `}</style>
      <div className="wrap">
        <div className="svb-uc-head" data-reveal="up">
          <div style={{ fontSize: 12, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '.05em', color: 'var(--g)', marginBottom: 12 }}>{tag}</div>
          <h2>{title}</h2>
          {sub && <p>{sub}</p>}
        </div>
        <div className="svb-uc-grid">
          {items.map((it, i) => (
            <div key={it.title} className="svb-uc-card" data-reveal="up" style={{ transitionDelay: `${i * 70}ms` }}>
              <h3>{it.title}</h3>
              <p>{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────── Proof (review + case study) ─────────────── */
export const PRIVACY_NOTE =
  'We protect every client’s privacy. Results and reviews appear here only with the client’s permission, with names and company details hidden.'

export function ServiceProof({
  quote, caseStudy,
}: {
  quote?: { text: string; name: string; role: string }
  caseStudy?: { tag: string; title: string; desc: string; stats: { val: string; lbl: string }[] }
}) {
  return (
    <section className="svb-proof">
      <style>{`
        .svb-proof { padding: 72px 0; }
        .svb-proof-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 22px; max-width: 1040px; margin: 0 auto; }
        .svb-quote { background: var(--soft); border-radius: 18px; padding: 34px 32px; display: flex; flex-direction: column; justify-content: space-between; }
        .svb-stars { color: #f5a623; font-size: 15px; letter-spacing: 1px; margin-bottom: 14px; }
        .svb-quote blockquote { font-size: 16px; color: var(--ink2); line-height: 1.75; font-style: italic; margin: 0 0 20px; }
        .svb-quote-name { font-size: 14px; font-weight: 700; color: var(--ink); }
        .svb-quote-role { font-size: 12.5px; color: var(--ink4); margin-top: 2px; }
        .svb-case { border: 1px solid var(--border); border-radius: 18px; padding: 32px; background: #fff; }
        .svb-case-tag { display: inline-block; background: var(--gl); color: var(--gd); font-size: 11px; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; padding: 4px 11px; border-radius: 4px; margin-bottom: 14px; }
        .svb-case h3 { font-size: 18px; color: var(--ink); margin-bottom: 10px; line-height: 1.35; }
        .svb-case p { font-size: 14px; color: var(--ink3); line-height: 1.7; margin-bottom: 20px; }
        .svb-case-stats { display: flex; gap: 22px; flex-wrap: wrap; }
        .svb-case-val { font-size: 24px; font-weight: 800; color: var(--g); }
        .svb-case-lbl { font-size: 12px; color: var(--ink4); font-weight: 600; }
        .svb-privacy { display: flex; align-items: flex-start; justify-content: center; gap: 8px; max-width: 720px; margin: 22px auto 0; font-size: 12.5px; color: var(--ink4); text-align: center; line-height: 1.6; }
        .svb-privacy svg { flex-shrink: 0; margin-top: 2px; }
      `}</style>
      <div className="wrap">
        <div className="svb-proof-grid">
          {quote && (
            <div className="svb-quote" data-reveal="up">
              <div>
                <div className="svb-stars">★★★★★</div>
                <blockquote>&ldquo;{quote.text}&rdquo;</blockquote>
              </div>
              <div>
                <div className="svb-quote-name">{quote.name}</div>
                <div className="svb-quote-role">{quote.role} · Verified Upwork review</div>
              </div>
            </div>
          )}
          {caseStudy && (
            <div className="svb-case" data-reveal="up" style={{ transitionDelay: '100ms' }}>
              <div className="svb-case-tag">{caseStudy.tag}</div>
              <h3>{caseStudy.title}</h3>
              <p>{caseStudy.desc}</p>
              <div className="svb-case-stats">
                {caseStudy.stats.map((s) => (
                  <div key={s.lbl}><div className="svb-case-val">{s.val}</div><div className="svb-case-lbl">{s.lbl}</div></div>
                ))}
              </div>
            </div>
          )}
        </div>
        <p className="svb-privacy"><Lock size={13} /> {PRIVACY_NOTE}</p>
      </div>
    </section>
  )
}

/* ─────────────── Offer band (lead magnet) ─────────────── */
export function ServiceOffer({
  tag, title, desc, bullets, ctaLabel, href, secondary,
}: {
  tag: string
  title: string
  desc: string
  bullets?: string[]
  ctaLabel: string
  href: string
  secondary?: { label: string; href: string }
}) {
  const showSecondary = secondary && (secondary.href || IS_DEV)
  return (
    <section className="svb-offer">
      <style>{`
        .svb-offer { padding: 24px 0 72px; }
        .svb-offer-box {
          max-width: 1000px; margin: 0 auto; border-radius: 22px; padding: 44px 40px;
          background: radial-gradient(ellipse at top right, rgba(30,166,114,0.18) 0%, transparent 60%), linear-gradient(135deg, #0f1f18, #133326);
          color: #fff; display: grid; grid-template-columns: minmax(0,1.3fr) minmax(0,1fr); gap: 32px; align-items: center;
        }
        .svb-offer-tag { display: inline-block; background: rgba(30,166,114,.2); color: #7fe0b5; font-size: 11.5px; font-weight: 800; text-transform: uppercase; letter-spacing: .06em; padding: 5px 12px; border-radius: 100px; margin-bottom: 14px; }
        .svb-offer-box h2 { color: #fff; font-size: clamp(22px, 2.3vw, 28px); margin-bottom: 12px; }
        .svb-offer-box p { color: rgba(255,255,255,.75); font-size: 15px; line-height: 1.7; }
        .svb-offer-list { list-style: none; padding: 0; margin: 0 0 22px; display: flex; flex-direction: column; gap: 10px; }
        .svb-offer-list li { display: flex; gap: 9px; font-size: 14px; color: rgba(255,255,255,.88); line-height: 1.5; }
        .svb-offer-list svg { color: #4fd39c; flex-shrink: 0; margin-top: 2px; }
        .svb-offer-btns { display: flex; flex-direction: column; gap: 10px; }
        .svb-offer-sec { display: inline-flex; align-items: center; justify-content: center; gap: 8px; color: #fff; border: 1px solid rgba(255,255,255,.3); padding: 12px 18px; border-radius: 9px; font-size: 14px; font-weight: 600; text-decoration: none; }
        .svb-offer-sec:hover { background: rgba(255,255,255,.08); }
        .svb-offer-sec.is-missing { border-style: dashed; opacity: .7; }
        @media(max-width:820px){ .svb-offer-box { grid-template-columns: 1fr; padding: 34px 26px; } }
      `}</style>
      <div className="wrap">
        <div className="svb-offer-box" data-reveal="up">
          <div>
            <div className="svb-offer-tag">{tag}</div>
            <h2>{title}</h2>
            <p>{desc}</p>
          </div>
          <div>
            {bullets && (
              <ul className="svb-offer-list">
                {bullets.map((b) => <li key={b}><CheckCircle2 size={16} /> {b}</li>)}
              </ul>
            )}
            <div className="svb-offer-btns">
              <Link href={href} className="btn-primary" style={{ justifyContent: 'center' }}>{ctaLabel} <ArrowRight size={16} /></Link>
              {showSecondary && secondary && (
                secondary.href
                  ? <a href={secondary.href} className="svb-offer-sec" download><Download size={15} /> {secondary.label}</a>
                  : <span className="svb-offer-sec is-missing">File needed: {secondary.label}</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─────────────── FAQ (+ FAQPage structured data) ─────────────── */
export function ServiceFAQ({ items }: { items: { q: string; a: string }[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((i) => ({ '@type': 'Question', name: i.q, acceptedAnswer: { '@type': 'Answer', text: i.a } })),
  }
  return (
    <section className="svb-faq">
      <style>{`
        .svb-faq { padding: 72px 0; background: var(--soft); }
        .svb-faq-head { text-align: center; margin-bottom: 36px; }
        .svb-faq-list { max-width: 820px; margin: 0 auto; display: flex; flex-direction: column; gap: 12px; }
        .svb-faq-item { background: #fff; border: 1px solid var(--border); border-radius: 14px; }
        .svb-faq-item summary { list-style: none; cursor: pointer; padding: 20px 56px 20px 22px; font-size: 15.5px; font-weight: 700; color: var(--ink); position: relative; line-height: 1.45; }
        .svb-faq-item summary::-webkit-details-marker { display: none; }
        .svb-faq-item summary::after { content: '+'; position: absolute; right: 22px; top: 50%; transform: translateY(-50%); width: 26px; height: 26px; border-radius: 50%; background: var(--gl); color: var(--gd); font-size: 18px; font-weight: 700; display: flex; align-items: center; justify-content: center; transition: transform .2s; }
        .svb-faq-item[open] summary::after { content: '−'; }
        .svb-faq-item p { padding: 0 22px 20px; font-size: 14.5px; color: var(--ink3); line-height: 1.75; margin: 0; }
      `}</style>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="wrap">
        <div className="sh-row svb-faq-head" data-reveal="up">
          <h2>Questions, <em style={{ color: 'var(--g)', fontStyle: 'normal' }}>answered.</em></h2>
        </div>
        <div className="svb-faq-list">
          {items.map((i) => (
            <details key={i.q} className="svb-faq-item" data-reveal="up">
              <summary>{i.q}</summary>
              <p>{i.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────── Related services ─────────────── */
export function RelatedServices({ slugs, title = 'Often paired with' }: { slugs: string[]; title?: string }) {
  const items = slugs.map((s) => SERVICES.find((x) => x.slug === s)).filter(Boolean) as typeof SERVICES
  return (
    <section className="svb-related">
      <style>{`
        .svb-related { padding: 72px 0 16px; }
        .svb-related h2 { text-align: center; font-size: clamp(22px, 2.2vw, 28px); margin-bottom: 32px; }
        .svb-related-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; max-width: 1000px; margin: 0 auto; }
        .svb-related-card { display: block; border: 1px solid var(--border); border-radius: 14px; padding: 22px; text-decoration: none; transition: border-color .2s, box-shadow .2s, transform .2s; background: #fff; }
        .svb-related-card:hover { border-color: var(--gm); box-shadow: 0 12px 30px rgba(15,22,35,.07); transform: translateY(-2px); }
        .svb-related-card strong { display: flex; align-items: center; justify-content: space-between; gap: 8px; font-size: 15.5px; color: var(--ink); margin-bottom: 6px; }
        .svb-related-card strong svg { color: var(--g); flex-shrink: 0; }
        .svb-related-card span { font-size: 13.5px; color: var(--ink3); line-height: 1.6; }
      `}</style>
      <div className="wrap">
        <h2 data-reveal="up">{title}</h2>
        <div className="svb-related-grid">
          {items.map((s, i) => (
            <Link key={s.slug} href={`/services/${s.slug}`} className="svb-related-card" data-reveal="up" style={{ transitionDelay: `${i * 80}ms` }}>
              <strong>{s.label} <ArrowRight size={16} /></strong>
              <span>{s.blurb}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────── Service structured data ─────────────── */
export function ServiceJsonLd({ slug, name, description }: { slug: string; name: string; description: string }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: `${SITE_URL}/services/${slug}`,
    areaServed: 'Worldwide',
    provider: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}
