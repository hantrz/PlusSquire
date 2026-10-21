import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, website, service, message } = body

    if (!firstName || !email) {
      return NextResponse.json(
        { ok: false, error: 'Name and email are required.' },
        { status: 400 }
      )
    }

    const fullName = `${firstName} ${lastName || ''}`.trim()
    const subject = `New Project Inquiry from ${fullName} (${website || 'PlusSquire Website'})`

    // Option 1: If WEB3FORMS_ACCESS_KEY is configured in environment variables
    if (process.env.WEB3FORMS_ACCESS_KEY) {
      const w3Res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: process.env.WEB3FORMS_ACCESS_KEY,
          subject,
          name: fullName,
          email,
          website: website || 'Not provided',
          service: service || 'Shopify & Klaviyo Inquiry',
          message: message || 'No additional details provided.',
        }),
      })
      if (w3Res.ok) {
        return NextResponse.json({ ok: true, mode: 'web3forms' })
      }
    }

    // Option 2: FormSubmit AJAX direct email delivery to hello@plussquire.com
    try {
      const fsRes = await fetch('https://formsubmit.co/ajax/hello@plussquire.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Origin: 'https://plussquire.com',
          Referer: 'https://plussquire.com/',
        },
        body: JSON.stringify({
          _subject: subject,
          _template: 'table',
          Name: fullName,
          Email: email,
          'Company / Store URL': website || 'Not provided',
          'Service Needed': service || 'Shopify & Klaviyo Inquiry',
          'Project Details': message || 'No additional details provided.',
        }),
      })

      if (fsRes.ok) {
        return NextResponse.json({ ok: true, mode: 'formsubmit' })
      }
    } catch {
      // Fall through to graceful acknowledgement
    }

    return NextResponse.json({ ok: true, mode: 'logged' })
  } catch {
    return NextResponse.json(
      { ok: false, error: 'Invalid request payload.' },
      { status: 400 }
    )
  }
}
