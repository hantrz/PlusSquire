'use client'

import { useEffect, useRef } from 'react'

const testimonials = [
  {
    quote: "Zahidul is one of the best Shopify and email professionals I've worked with. He handles design, development, and Klaviyo flows end-to-end, delivering polished, production-ready work every time. We've worked together for 5+ years now.",
    name: 'James R.', role: 'Head of Retention, BYD Cars', source: '⭐ Upwork · 5+ years', avatar: '🧑‍💼', category: 'Shopify + Klaviyo',
  },
  {
    quote: "Our Klaviyo flows went from generating 10% of revenue to over 35% in 3 months. Zahidul knew exactly what to build and why. Highly recommend for any eCommerce brand serious about email.",
    name: 'Sarah T.', role: 'CEO, DTC Fashion Brand', source: '⭐ Upwork', avatar: '👩', category: 'Klaviyo Flows',
  },
  {
    quote: "Rebuilt our entire Shopify store from scratch, pixel-perfect and blazing fast. Conversion rate jumped noticeably within the first month, and the handoff was completely smooth.",
    name: 'Alex K.', role: 'Founder, Skincare Brand', source: '⭐ Upwork', avatar: '🧑', category: 'Shopify Development',
  },
  {
    quote: "Exceptional HTML email developer. Provided Figma to HTML email development with templates that worked perfectly in Outlook, which is notoriously difficult. Fast, professional, and gets it right the first time.",
    name: 'Marcus L.', role: 'Marketing Director, SaaS', source: '⭐ Upwork · Top Review', avatar: '🧔', category: 'Email Development',
  },
  {
    quote: "Set up our entire Klaviyo account from scratch. Every flow, segment, and integration was done perfectly. Our abandoned cart recovery alone paid back the entire project cost in the first week.",
    name: 'Priya M.', role: 'Founder, eCommerce Store', source: '⭐ Upwork', avatar: '👩‍💼', category: 'Klaviyo Setup',
  },
  {
    quote: "Handled both our Shopify migration and Klaviyo setup end-to-end, one team, zero handoffs, and it just worked from day one. Exactly the kind of full-stack partner we were looking for.",
    name: 'Daniel W.', role: 'Operations Lead, Home & Living Brand', source: '⭐ Upwork', avatar: '🧑‍🦱', category: 'Shopify Migration + Klaviyo',
  },
  {
    quote: "Our store loads in under 2 seconds now. Cart abandonment dropped and mobile conversions are up significantly since the Shopify rebuild.",
    name: 'Nadia S.', role: 'Founder, Beauty Brand', source: '⭐ Upwork', avatar: '👩‍🦰', category: 'Shopify Speed Optimization',
  },
]

// Render 3 copies back to back so the track can loop seamlessly.
const COPIES = 3
const loopedTestimonials = Array.from({ length: COPIES }, () => testimonials).flat()

const MAX_SPEED = 14   // px per animation frame at the far edge
const DEADZONE = 0.12  // fraction of track width (from center) with no scroll

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null)
  const speedRef = useRef(0)
  const rafRef = useRef<number | null>(null)
  const setWidthRef = useRef(0)
  const focusedElRef = useRef<HTMLDivElement | null>(null)

  const measure = () => {
    const track = trackRef.current
    if (!track) return
    setWidthRef.current = track.scrollWidth / COPIES
  }

  // Start centered in the middle copy, so there's room to scroll both ways.
  useEffect(() => {
    measure()
    const track = trackRef.current
    if (track && setWidthRef.current) {
      track.scrollLeft = setWidthRef.current
    }
    updateFocus()
    const onResize = () => {
      const prevSetWidth = setWidthRef.current
      const track = trackRef.current
      if (!track || !prevSetWidth) return
      const progress = track.scrollLeft / prevSetWidth
      measure()
      track.scrollLeft = progress * setWidthRef.current
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const updateFocus = () => {
    const track = trackRef.current
    if (!track) return
    const center = track.scrollLeft + track.clientWidth / 2
    let closest: HTMLDivElement | null = null
    let closestDist = Infinity
    for (const child of Array.from(track.children)) {
      const el = child as HTMLDivElement
      const elCenter = el.offsetLeft + el.offsetWidth / 2
      const dist = Math.abs(elCenter - center)
      if (dist < closestDist) {
        closestDist = dist
        closest = el
      }
    }
    if (closest !== focusedElRef.current) {
      focusedElRef.current?.classList.remove('is-focused')
      closest?.classList.add('is-focused')
      focusedElRef.current = closest
    }
  }

  const startLoop = () => {
    if (rafRef.current !== null) return
    const step = () => {
      const track = trackRef.current
      const setWidth = setWidthRef.current
      if (track && speedRef.current !== 0) {
        track.scrollLeft += speedRef.current
        if (setWidth) {
          // Wrap seamlessly once we drift a full copy away from the middle set.
          if (track.scrollLeft < setWidth * 0.5) {
            track.scrollLeft += setWidth
          } else if (track.scrollLeft > setWidth * 1.5) {
            track.scrollLeft -= setWidth
          }
        }
        updateFocus()
      }
      rafRef.current = requestAnimationFrame(step)
    }
    rafRef.current = requestAnimationFrame(step)
  }

  const stopLoop = () => {
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = null
    }
    speedRef.current = 0
  }

  const onMouseMove = (e: React.MouseEvent) => {
    const track = trackRef.current
    if (!track) return
    const rect = track.getBoundingClientRect()
    const relX = (e.clientX - rect.left) / rect.width
    const offset = relX - 0.5
    const abs = Math.abs(offset)
    if (abs < DEADZONE) {
      speedRef.current = 0
      return
    }
    const normalized = (abs - DEADZONE) / (0.5 - DEADZONE)
    speedRef.current = Math.sign(offset) * normalized * MAX_SPEED
  }

  useEffect(() => stopLoop, [])

  return (
    <>
      <style>{`
        .testimonials { background: #f0fdf4; padding: 96px 0; }

        .testi-scroll-wrap { position: relative; }
        .testi-scroll-wrap::before,
        .testi-scroll-wrap::after {
          content: ''; position: absolute; top: 0; bottom: 0; width: 64px; z-index: 2; pointer-events: none;
        }
        .testi-scroll-wrap::before { left: 0; background: linear-gradient(90deg, #f0fdf4, transparent); }
        .testi-scroll-wrap::after { right: 0; background: linear-gradient(270deg, #f0fdf4, transparent); }

        .testi-track {
          display: flex; gap: 24px; align-items: center;
          overflow-x: auto;
          scroll-behavior: auto;
          padding: 12px 4px 20px;
          cursor: ew-resize;
          scrollbar-width: none;
          -ms-overflow-style: none;
          user-select: none;
        }
        .testi-track::-webkit-scrollbar { display: none; }

        .testi-card {
          flex: 0 0 420px; max-width: 420px;
          background: #fff; border: 1px solid var(--border);
          border-radius: 18px; padding: 32px 28px;
          opacity: .6; transform: scale(.94);
          transition: opacity .25s ease, transform .25s ease, box-shadow .25s ease, border-color .25s ease;
        }
        .testi-card.is-focused {
          opacity: 1; transform: scale(1.04);
          border-color: var(--gm);
          box-shadow: 0 16px 44px rgba(30,166,114,.16);
        }
        .testi-top-row { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-bottom: 16px; }
        .stars { color: #f59e0b; font-size: 17.5px; letter-spacing: 1px; }
        .testi-category { flex-shrink: 0; background: var(--gl); color: var(--gd); font-size: 11px; font-weight: 700; padding: 3px 10px; border-radius: 4px; white-space: nowrap; }
        .testi-card blockquote { font-size: 14.5px; color: var(--ink2); line-height: 1.75; font-style: italic; margin-bottom: 24px; }
        .t-author { display: flex; align-items: center; gap: 12px; }
        .t-avatar { width: 40px; height: 40px; border-radius: 50%; background: var(--gl); display: flex; align-items: center; justify-content: center; font-size: 18px; flex-shrink: 0; }
        .t-name { font-size: 14px; font-weight: 700; color: var(--ink); }
        .t-role { font-size: 12px; color: var(--ink4); margin-top: 1px; }
        .t-source { display: inline-flex; align-items: center; gap: 5px; background: var(--gl); color: var(--gd); font-size: 11px; font-weight: 700; padding: 3px 10px; border-radius: 4px; margin-top: 4px; }

        @media(max-width:1100px){
          .testi-card { flex-basis: 360px; max-width: 360px; }
        }
        @media(max-width:768px){
          .testi-card { flex-basis: 280px; max-width: 280px; }
        }
      `}</style>

      <section className="testimonials">
        <div className="wrap">
          <div className="sh-row">
            <h2>What our clients <em style={{ color: 'var(--g)', fontStyle: 'normal' }}>actually say.</em></h2>
            <p className="section-sub">Brands trust us with their store and their inbox. Here&apos;s what they say.</p>
          </div>

          <div className="testi-scroll-wrap">
            <div
              ref={trackRef}
              className="testi-track"
              onMouseEnter={startLoop}
              onMouseMove={onMouseMove}
              onMouseLeave={stopLoop}
            >
              {loopedTestimonials.map((t, i) => (
                <div key={`${t.name}-${i}`} className="testi-card">
                  <div className="testi-top-row">
                    <div className="stars">★★★★★</div>
                    <div className="testi-category">{t.category}</div>
                  </div>
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
        </div>
      </section>
    </>
  )
}
