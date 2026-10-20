'use client'

import { useEffect, useRef } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { UPWORK_URL } from '../lib/site'

const testimonials = [
  {
    quote: "Zahidul is one of the best Shopify and email professionals I've worked with. He handles design, development, and Klaviyo flows end-to-end, delivering polished, production-ready work every time. We've worked together for 5+ years now.",
    name: 'James R.', role: 'Head of Retention, BYD Cars', source: 'Verified Upwork Client · 5+ yrs', initials: 'JR', category: 'Shopify + Klaviyo',
  },
  {
    quote: "Our Klaviyo flows went from generating 10% of revenue to over 35% in 3 months. Zahidul knew exactly what to build and why. Highly recommend for any eCommerce brand serious about email.",
    name: 'Sarah T.', role: 'CEO, DTC Fashion Brand', source: 'Verified Upwork Client', initials: 'ST', category: 'Klaviyo Flows',
  },
  {
    quote: "Rebuilt our entire Shopify store from scratch, pixel-perfect and blazing fast. Conversion rate jumped noticeably within the first month, and the handoff was completely smooth.",
    name: 'Alex K.', role: 'Founder, Skincare Brand', source: 'Verified Upwork Client', initials: 'AK', category: 'Shopify Development',
  },
  {
    quote: "Exceptional HTML email developer. Provided Figma to HTML email development with templates that worked perfectly in Outlook, which is notoriously difficult. Fast, professional, and gets it right the first time.",
    name: 'Marcus L.', role: 'Marketing Director, SaaS', source: 'Verified Upwork · Top Review', initials: 'ML', category: 'Email Development',
  },
  {
    quote: "Set up our entire Klaviyo account from scratch. Every flow, segment, and integration was done perfectly. Our abandoned cart recovery alone paid back the entire project cost in the first week.",
    name: 'Priya M.', role: 'Founder, eCommerce Store', source: 'Verified Upwork Client', initials: 'PM', category: 'Klaviyo Account Setup',
  },
  {
    quote: "Handled both our Shopify migration and Klaviyo setup end-to-end, one team, zero handoffs, and it just worked from day one. Exactly the kind of full-stack partner we were looking for.",
    name: 'Daniel W.', role: 'Operations Lead, Home & Living Brand', source: 'Verified Upwork Client', initials: 'DW', category: 'Shopify Migration + Klaviyo',
  },
  {
    quote: "Our store loads in under 2 seconds now. Cart abandonment dropped and mobile conversions are up significantly since the Shopify rebuild.",
    name: 'Nadia S.', role: 'Founder, Beauty Brand', source: 'Verified Upwork Client', initials: 'NS', category: 'Shopify Speed Optimization',
  },
]

const COPIES = 3
const loopedTestimonials = Array.from({ length: COPIES }, () => testimonials).flat()

const MAX_SPEED = 14
const DEADZONE = 0.12

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
        .testimonials { background: #ffffff; padding: 96px 0; border-top: 1px solid var(--border); }

        .testi-scroll-wrap { position: relative; }
        .testi-scroll-wrap::before,
        .testi-scroll-wrap::after {
          content: ''; position: absolute; top: 0; bottom: 0; width: 72px; z-index: 2; pointer-events: none;
        }
        .testi-scroll-wrap::before { left: 0; background: linear-gradient(90deg, #ffffff, transparent); }
        .testi-scroll-wrap::after { right: 0; background: linear-gradient(270deg, #ffffff, transparent); }

        .testi-track {
          display: flex; gap: 24px; align-items: stretch;
          overflow-x: auto;
          scroll-behavior: auto;
          padding: 16px 4px 24px;
          cursor: ew-resize;
          scrollbar-width: none;
          -ms-overflow-style: none;
          user-select: none;
        }
        .testi-track::-webkit-scrollbar { display: none; }

        .testi-card {
          flex: 0 0 420px; max-width: 420px;
          background: var(--soft); border: 1px solid var(--border);
          border-radius: 18px; padding: 32px 28px;
          opacity: .68; transform: scale(.95);
          display: flex; flex-direction: column; justify-content: space-between;
          transition: opacity .25s ease, transform .25s ease, box-shadow .25s ease, border-color .25s ease, background .25s ease;
        }
        .testi-card.is-focused {
          opacity: 1; transform: scale(1.03);
          background: #ffffff;
          border-color: var(--gm);
          box-shadow: 0 18px 44px rgba(30,166,114,.14);
        }
        .testi-top-row { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-bottom: 16px; }
        .stars { color: #f59e0b; font-size: 16.5px; letter-spacing: 1px; }
        .testi-category { flex-shrink: 0; background: var(--gl); color: var(--gd); font-size: 11px; font-weight: 700; padding: 3px 10px; border-radius: 4px; white-space: nowrap; }
        .testi-card blockquote { font-size: 14.5px; color: var(--ink2); line-height: 1.75; margin-bottom: 24px; flex: 1; }
        .t-author { display: flex; align-items: center; gap: 12px; padding-top: 16px; border-top: 1px solid var(--border); }
        .t-avatar {
          width: 42px; height: 42px; border-radius: 50%;
          background: linear-gradient(135deg, var(--g), var(--gd));
          color: #fff; font-weight: 800; font-size: 13.5px; letter-spacing: 0.03em;
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
          box-shadow: 0 4px 12px rgba(30,166,114,0.25);
        }
        .t-name { font-size: 14px; font-weight: 700; color: var(--ink); }
        .t-role { font-size: 12px; color: var(--ink3); margin-top: 1px; }
        .t-source { display: inline-flex; align-items: center; gap: 5px; color: var(--gd); font-size: 11.5px; font-weight: 700; margin-top: 4px; }

        .testi-verify-bar {
          text-align: center;
          margin-top: 32px;
        }

        @media(max-width:1100px){
          .testi-card { flex-basis: 360px; max-width: 360px; }
        }
        @media(max-width:768px){
          .testi-card { flex-basis: 300px; max-width: 300px; }
        }
        .testi-h-br { display: none; }
        @media(max-width:640px){
          .testi-h-br { display: inline; }
        }
      `}</style>

      <section className="testimonials">
        <div className="wrap">
          <div className="sh-row" data-reveal="up">
            <h2>What our clients<br className="testi-h-br" /> <em>actually say.</em></h2>
            <p className="section-sub">Backed by 800+ completed projects and a 100% Job Success Score on Upwork.</p>
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
                  <div>
                    <div className="testi-top-row">
                      <div className="stars">★★★★★</div>
                      <div className="testi-category">{t.category}</div>
                    </div>
                    <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
                  </div>
                  <div className="t-author">
                    <div className="t-avatar">{t.initials}</div>
                    <div>
                      <div className="t-name">{t.name}</div>
                      <div className="t-role">{t.role}</div>
                      <div className="t-source">
                        <CheckCircle2 size={13} strokeWidth={2.5} />
                        {t.source}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="testi-verify-bar" data-reveal="fade">
            <a href={UPWORK_URL} target="_blank" rel="noopener noreferrer" className="link-more">
              Verify all 750+ 5-Star Reviews on Upwork →
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
