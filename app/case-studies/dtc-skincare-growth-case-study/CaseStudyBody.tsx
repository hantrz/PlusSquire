'use client'

import { useEffect, useRef } from 'react'
import { caseStudyHtml } from './content'

const PLAN_TEXT = `PLUSSQUIRE 90-DAY RETENTION ACTION PLAN:
1. Primary Revenue Bottleneck: Uncaptured mobile traffic and lack of automated post-purchase replenishment
2. Attribution Benchmark: Strict 1-Day Interaction Window (excluding bot traffic & synthetic MPP opens)
3. High-Priority Flow Repairs: Quiz-segmented Welcome Series & Multi-Tier Abandoned Checkout with SMS
4. Shopify Optimization Target: Sub-2.0s mobile page speed and custom slide-cart tier unlock bar
5. SMS Channel Strategy: High-intent automated transactional recovery + VIP early drops
6. Channel Ownership: Single accountable partner (PlusSquire) managing design, dev & execution`

const COPY_ICON = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>'
const CHECK_ICON = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>'

export default function CaseStudyBody() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = ref.current
    if (!root) return
    const scores: (number | null)[] = [null, null, null, null, null, null]

    const updateSummary = () => {
      let total = 0
      let answered = 0
      scores.forEach((s) => { if (s !== null) { total += s; answered++ } })
      const totalEl = root.querySelector('#auditTotalScore')
      if (totalEl) totalEl.textContent = String(total)
      const readout = root.querySelector('#bandReadout')
      if (!readout) return
      if (answered === 0) {
        readout.innerHTML = '<h4>Start Scoring Above</h4><p>Select your status across all 6 diagnostic criteria to generate your tailored retention roadmap band.</p>'
      } else if (answered < 6) {
        readout.innerHTML = `<h4>${answered} of 6 Answered</h4><p>Please complete all questions to view your custom retention health diagnostic.</p>`
      } else if (total <= 4) {
        readout.innerHTML = `<h4 style="color:#ef4444">Band 1: High Structural Leakage (${total}/12)</h4><p>Your store has critical gaps in lifecycle flows and mobile capture. High ad traffic is likely bouncing without capturing customer value. Focus on core flows and theme speed first.</p>`
      } else if (total <= 8) {
        readout.innerHTML = `<h4 style="color:#f59e0b">Band 2: Inconsistent Execution (${total}/12)</h4><p>Foundations exist, but fragmented ownership and uncoordinated SMS are capping your margins. Tightening segmentation and launch cadence can rapidly unlock 20–30% revenue lift.</p>`
      } else {
        readout.innerHTML = `<h4 style="color:var(--g)">Band 3: Scale-Ready Architecture (${total}/12)</h4><p>Your core mechanics are operating well. You are ready for predictive replenishment modeling, tiered AOV bundles, and aggressive Q4 scale strategies.</p>`
      }
    }

    const setScore = (q: number, v: number) => {
      scores[q] = v
      const question = root.querySelector(`.audit-question[data-index="${q}"]`)
      question?.querySelectorAll<HTMLLabelElement>('.audit-option-label').forEach((label, idx) => {
        const on = idx === v
        label.classList.toggle('active', on)
        const radio = label.querySelector('input')
        if (radio && on) radio.checked = true
      })
      updateSummary()
    }

    const reset = () => {
      scores.fill(null)
      root.querySelectorAll('.audit-option-label').forEach((label) => {
        label.classList.remove('active')
        const radio = label.querySelector('input')
        if (radio) radio.checked = false
      })
      updateSummary()
    }

    const copy = (btn: HTMLElement) => {
      navigator.clipboard.writeText(PLAN_TEXT).then(
        () => {
          btn.innerHTML = `${CHECK_ICON} Copied to Clipboard!`
          setTimeout(() => { btn.innerHTML = `${COPY_ICON} Copy Action Plan` }, 2500)
        },
        () => {
          btn.innerHTML = `${COPY_ICON} Copy failed, select the text below`
          setTimeout(() => { btn.innerHTML = `${COPY_ICON} Copy Action Plan` }, 2500)
        },
      )
    }

    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const label = target.closest<HTMLElement>('[data-q]')
      if (label) { setScore(Number(label.dataset.q), Number(label.dataset.v)); return }
      const action = target.closest<HTMLElement>('[data-action]')
      if (action?.dataset.action === 'reset') reset()
      else if (action?.dataset.action === 'copy') copy(action)
    }

    root.addEventListener('click', onClick)
    return () => root.removeEventListener('click', onClick)
  }, [])

  return <div ref={ref} className="dtc-cs" dangerouslySetInnerHTML={{ __html: caseStudyHtml }} />
}
