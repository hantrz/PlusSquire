const testimonials = [
  {
    quote: "Our Klaviyo flows went from generating 10% of revenue to over 35% in 3 months. Zahidul knew exactly what to build and why. Highly recommend for any eCommerce brand serious about email.",
    name: 'Sarah T.', role: 'CEO, DTC Fashion Brand', source: '⭐ Upwork', avatar: '👩',
  },
  {
    quote: "Exceptional HTML email developer. Provided Figma to HTML email development with templates that worked perfectly in Outlook, which is notoriously difficult. Fast, professional, and gets it right the first time. Will definitely hire again.",
    name: 'Marcus L.', role: 'Marketing Director, SaaS', source: '⭐ Upwork · Top Review', avatar: '🧔',
  },
  {
    quote: "Set up our entire Klaviyo account from scratch. Every flow, segment, and integration was done perfectly. Our abandoned cart recovery alone paid back the entire project cost in the first week.",
    name: 'Priya M.', role: 'Founder, eCommerce Store', source: '⭐ Upwork', avatar: '👩‍💼',
  },
]

export default function Testimonials() {
  return (
    <>
      <style>{`
        .testimonials { background: #f0fdf4; padding: 96px 0; }
        .testi-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; }
        .testi-feat {
          grid-column: span 3; background: #fff;
          border: 1px solid var(--border); border-radius: 18px;
          display: grid; grid-template-columns: 1fr auto;
          gap: 32px; align-items: center; padding: 40px 44px;
        }
        .testi-feat blockquote { font-size: 20px; color: var(--ink2); font-style: italic; line-height: 1.6; margin-bottom: 24px; }
        .testi-feat .t-name { color: var(--ink); }
        .testi-feat .t-role { color: var(--ink3); }
        .testi-feat .t-source { background: rgba(30,166,114,.12); color: var(--g); }
        .big-quote { font-family: 'Inter', sans-serif; font-size: 96px; font-weight: 800; color: rgba(30,166,114,.15); line-height: 1; user-select: none; flex-shrink: 0; }
        .testi-card {
          background: #fff; border: 1px solid var(--border);
          border-radius: 18px; padding: 32px 28px;
        }
        .stars { color: #f59e0b; font-size: 14px; letter-spacing: 1px; margin-bottom: 16px; }
        .testi-card blockquote { font-size: 14.5px; color: var(--ink2); line-height: 1.75; font-style: italic; margin-bottom: 24px; }
        .t-author { display: flex; align-items: center; gap: 12px; }
        .t-avatar { width: 40px; height: 40px; border-radius: 50%; background: var(--gl); display: flex; align-items: center; justify-content: center; font-size: 18px; flex-shrink: 0; }
        .t-name { font-size: 14px; font-weight: 700; color: var(--ink); }
        .t-role { font-size: 12px; color: var(--ink4); margin-top: 1px; }
        .t-source { display: inline-flex; align-items: center; gap: 5px; background: var(--gl); color: var(--gd); font-size: 11px; font-weight: 700; padding: 3px 10px; border-radius: 4px; margin-top: 4px; }

        @media(max-width:768px){
          .testi-grid { grid-template-columns: 1fr; }
          .testi-feat { grid-column: span 1; grid-template-columns: 1fr; }
          .big-quote { display: none; }
        }
      `}</style>

      <section className="testimonials">
        <div className="wrap">
          <div className="sh-row">
            <h2>What our clients <em style={{ color: 'var(--g)', fontStyle: 'normal' }}>actually say.</em></h2>
            <p className="section-sub">Brands trust us with their most important channel. Here&apos;s what they say.</p>
          </div>
          <div className="testi-grid">
            {/* Featured */}
            <div className="testi-feat testi-card">
              <div>
                <div className="stars">★★★★★</div>
                <blockquote>&ldquo;Zahidul is one of the best email professionals I&apos;ve worked with. He handles both design and development end-to-end, delivering polished, production-ready emails every time. Turnaround was fast, communication was excellent, and the quality spoke for itself. We&apos;ve worked together for 5+ years now.&rdquo;</blockquote>
                <div className="t-author">
                  <div className="t-avatar">🧑‍💼</div>
                  <div>
                    <div className="t-name">James R.</div>
                    <div className="t-role">Head of Retention, BYD Cars</div>
                    <div className="t-source">⭐ Upwork · 5+ years</div>
                  </div>
                </div>
              </div>
              <div className="big-quote">&ldquo;</div>
            </div>

            {/* Cards */}
            {testimonials.map((t) => (
              <div key={t.name} className="testi-card">
                <div className="stars">★★★★★</div>
                <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
                <div className="t-author">
                  <div className="t-avatar">{t.avatar}</div>
                  <div>
                    <div className="t-name">{t.name}</div>
                    <div className="t-role">{t.role}</div>
                    <div className="t-source">{t.source}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
