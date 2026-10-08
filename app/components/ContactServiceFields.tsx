'use client'

import { useEffect, useState } from 'react'
import { SERVICES } from '../lib/site'

// Service-specific hints for the message box, shown when a visitor arrives
// from a service page link like /?service=shopify-migration#contact
const HINTS: Record<string, string> = {
  'account-audit': 'Your store URL, your rough monthly Klaviyo revenue, and anything you want us to look at first...',
  'shopify-migration': 'Your current platform, store URL, roughly how many products and orders, and the apps you rely on...',
  'shopify-speed-optimization': 'Your store URL and the pages that feel slowest...',
  'shopify-custom-features': 'Describe the feature you want to build and where it should appear in your store...',
  'flow-setup': 'Your store URL and which Klaviyo flows you have running today, if any...',
  'email-automations': 'Which email platform you use and which automations you have running today...',
}
const DEFAULT_HINT = 'Tell us about your project, current setup, and goals...'

export default function ContactServiceFields() {
  const [service, setService] = useState('')
  const [slug, setSlug] = useState('')

  useEffect(() => {
    const fromUrl = new URLSearchParams(window.location.search).get('service') || ''
    const match = SERVICES.find((s) => s.slug === fromUrl)
    if (match) {
      setService(match.label)
      setSlug(match.slug)
    }
  }, [])

  return (
    <>
      <div className="fg">
        <label>Service Needed</label>
        <select
          value={service}
          onChange={(e) => {
            setService(e.target.value)
            setSlug(SERVICES.find((s) => s.label === e.target.value)?.slug || '')
          }}
        >
          <option value="">Select a service...</option>
          {SERVICES.map((s) => (
            <option key={s.slug} value={s.label}>{s.label}</option>
          ))}
        </select>
      </div>
      <div className="fg"><label>Message</label><textarea placeholder={HINTS[slug] || DEFAULT_HINT} /></div>
    </>
  )
}
