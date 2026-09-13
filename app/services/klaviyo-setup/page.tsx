import { permanentRedirect } from 'next/navigation'

// This service moved to /services/klaviyo-account-setup (matches its actual
// name, "Klaviyo Account Setup"). Kept as a redirect so old links/bookmarks
// to /services/klaviyo-setup still land on the right page.
export default function KlaviyoSetupPage() {
  permanentRedirect('/services/klaviyo-account-setup')
}
