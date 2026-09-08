'use client'

import { useEffect } from 'react'

/**
 * Mounted once in the root layout. Watches every element carrying a
 * `data-reveal="up|down|left|right|zoom|fade"` attribute and adds
 * `.reveal-in` the first time it scrolls into view (see the
 * `[data-reveal]` rules in globals.css for the actual animation).
 *
 * Uses a MutationObserver so elements that appear later (tab switches,
 * accordions, client-side renders) still get picked up.
 */
export default function ScrollReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-in')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
    )

    const scan = () => {
      document.querySelectorAll('[data-reveal]:not(.reveal-in)').forEach((el) => io.observe(el))
    }

    scan()

    const mo = new MutationObserver(() => scan())
    mo.observe(document.body, { childList: true, subtree: true })

    return () => {
      io.disconnect()
      mo.disconnect()
    }
  }, [])

  return null
}
