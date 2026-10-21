// Site-wide settings shared by layout, sitemap, robots and service pages.

export const SITE_URL = 'https://www.plussquire.com'
export const SITE_NAME = 'PlusSquire'

// TODO(owner): replace with your own Calendly (or Cal.com) scheduling link.
export const BOOKING_URL = 'https://calendly.com'
export const UPWORK_URL = 'https://www.upwork.com/freelancers/zahidulislam'
export const LINKEDIN_URL = 'https://www.linkedin.com/in/zahidul-islam-7876533b2'
export const WHATSAPP_URL = 'https://wa.me/8801919130859'

// Search engine indexing is enabled by default now that site content and SEO metadata are live.
// Set ALLOW_INDEXING=false in environment variables only if you want to block indexing on a staging preview.
export const ALLOW_INDEXING = process.env.ALLOW_INDEXING !== 'false'

// Sample audit report people can download from the Account Audit page.
export const SAMPLE_AUDIT_URL = ''

export type ServiceInfo = { slug: string; label: string; blurb: string }

// `label` must match the options in the homepage contact form.
export const SERVICES: ServiceInfo[] = [
  { slug: 'shopify-theme-development', label: 'Shopify Theme Development', blurb: 'Custom, fast Shopify themes built around your brand.' },
  { slug: 'shopify-migration', label: 'Shopify Migration', blurb: 'Move to Shopify with your data, SEO and sales intact.' },
  { slug: 'shopify-speed-optimization', label: 'Shopify Speed Optimization', blurb: 'Better Core Web Vitals and a faster checkout.' },
  { slug: 'shopify-custom-features', label: 'Shopify App & Custom Features', blurb: 'Custom sections, integrations and store functionality.' },
  { slug: 'klaviyo-account-setup', label: 'Klaviyo Account Setup', blurb: 'A clean Klaviyo account, set up or migrated the right way.' },
  { slug: 'flow-setup', label: 'Flow Setup & Optimize', blurb: 'Klaviyo flows built and continuously optimized to turn subscribers into repeat buyers.' },
  { slug: 'account-audit', label: 'Account Audit', blurb: 'A free review of your email program and a ranked fix list.' },
  { slug: 'sign-up-forms', label: 'Sign-Up/Pop-Up Forms', blurb: 'On-brand pop-up and sign-up forms that grow your list without annoying visitors.' },
  { slug: 'sms-campaigns', label: 'SMS Campaigns', blurb: 'SMS flows and campaigns that run alongside your email.' },
  { slug: 'reporting-improvement', label: 'Reporting & Improvement', blurb: 'Monthly reporting and testing that keeps results climbing.' },
  { slug: 'email-design', label: 'Email Design', blurb: 'On-brand, mobile-first email design built to convert.' },
  { slug: 'email-development', label: 'Email Development', blurb: 'Hand-coded HTML email that renders right in every inbox.' },
  { slug: 'email-campaigns', label: 'Email Campaigns', blurb: 'Planned, written, designed and sent for you.' },
  { slug: 'email-automations', label: 'Email Automations', blurb: 'Automations on Mailchimp, Campaign Monitor, HubSpot and more.' },
  { slug: 'email-deliverability', label: 'Email Deliverability', blurb: 'Keep your emails in the primary inbox and out of the spam folder.' },
]

export const serviceBySlug = (slug: string) => SERVICES.find((s) => s.slug === slug)

// Links to the homepage contact form with the service already selected.
export const contactHref = (slug: string) => `/?service=${slug}#contact`
