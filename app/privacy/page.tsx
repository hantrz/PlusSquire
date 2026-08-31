import Navbar from '../components/Navbar'
import { Footer } from '../components/Sections'

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '68px' }}>
        <style>{`
          .legal-hero {
            padding: 64px 0 56px;
            background:
              radial-gradient(ellipse at top left, rgba(30, 166, 114, 0.14) 0%, transparent 60%),
              radial-gradient(ellipse at bottom right, rgba(30, 166, 114, 0.14) 0%, transparent 60%),
              #ffffff;
          }
          .legal { background: #fff; padding: 56px 0 96px; }
          .legal-head { text-align: center; }
          .legal-tag {
            display: inline-flex; align-items: center; gap: 8px; color: var(--g);
            font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em;
            margin-bottom: 14px;
          }
          .legal-tag::before { content: ''; width: 18px; height: 2px; background: var(--g); }
          .legal-updated { color: var(--ink4); font-size: 14px; margin-top: 10px; }
          .legal-body { max-width: 760px; margin: 0 auto; }
          .legal-body h2 { font-size: 22px; margin-top: 40px; margin-bottom: 14px; }
          .legal-body h2:first-of-type { margin-top: 0; }
          .legal-body p { color: var(--ink2); font-size: 15px; line-height: 1.85; margin-bottom: 16px; }
          .legal-body ul { margin: 0 0 16px 20px; color: var(--ink2); font-size: 15px; line-height: 1.85; }
          .legal-body li { margin-bottom: 8px; }
          .legal-body a { color: var(--g); text-decoration: underline; }
        `}</style>

        <section className="legal-hero">
          <div className="wrap">
            <div className="legal-head">
              <div className="legal-tag">Legal</div>
              <h1 style={{ fontSize: 'clamp(32px,4vw,48px)' }}>Privacy Policy</h1>
              <p className="legal-updated">Last updated: August 2026</p>
            </div>
          </div>
        </section>

        <section className="legal">
          <div className="wrap">
            <div className="legal-body">
              <h2>1. Introduction</h2>
              <p>PlusSquire (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) provides Shopify development and email/SMS marketing services for eCommerce brands. This Privacy Policy explains what information we collect through plussquire.com, how we use it, and the choices you have.</p>

              <h2>2. Information We Collect</h2>
              <ul>
                <li>Contact details you submit through our contact form or booking page (name, email, phone, company, project details).</li>
                <li>Information you provide when scheduling a call via Calendly.</li>
                <li>Messages you send us via WhatsApp or email.</li>
                <li>Basic usage data collected automatically (pages visited, browser type, approximate location) through analytics tools.</li>
              </ul>

              <h2>3. How We Use Your Information</h2>
              <ul>
                <li>To respond to inquiries and prepare project proposals.</li>
                <li>To deliver the Shopify and email marketing services you engage us for.</li>
                <li>To send project updates and, where you&apos;ve opted in, occasional marketing emails.</li>
                <li>To improve our website and services.</li>
              </ul>

              <h2>4. Cookies &amp; Analytics</h2>
              <p>plussquire.com may use cookies and similar technologies (for example, analytics tools) to understand how visitors use the site. You can disable cookies in your browser settings; some site features may not work as intended if you do.</p>

              <h2>5. Third-Party Services</h2>
              <p>We may share information with trusted third-party tools we use to run our business, such as Calendly (call scheduling), WhatsApp (direct messaging), Klaviyo (email/SMS delivery, for clients who use our email marketing services), and standard web hosting and analytics providers. We do not sell your personal information to third parties.</p>

              <h2>6. Data Security</h2>
              <p>We take reasonable technical and organizational measures to protect the information you share with us. No method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>

              <h2>7. Your Rights</h2>
              <p>Depending on where you&apos;re located, you may have the right to access, correct, or request deletion of your personal information. To make a request, contact us at <a href="mailto:hello@plussquire.com">hello@plussquire.com</a>.</p>

              <h2>8. Children&apos;s Privacy</h2>
              <p>Our services are intended for businesses, not individual consumers, and are not directed at children under 16. We do not knowingly collect personal information from children.</p>

              <h2>9. Changes to This Policy</h2>
              <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated &quot;Last updated&quot; date.</p>

              <h2>10. Contact Us</h2>
              <p>Questions about this Privacy Policy? Email us at <a href="mailto:hello@plussquire.com">hello@plussquire.com</a>.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
