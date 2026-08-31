import Navbar from '../components/Navbar'
import { Footer } from '../components/Sections'

export default function TermsPage() {
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
              <h1 style={{ fontSize: 'clamp(32px,4vw,48px)' }}>Terms &amp; Conditions</h1>
              <p className="legal-updated">Last updated: August 2026</p>
            </div>
          </div>
        </section>

        <section className="legal">
          <div className="wrap">
            <div className="legal-body">
              <h2>1. Agreement to Terms</h2>
              <p>By engaging PlusSquire (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) for Shopify development, email marketing, or related services, or by using plussquire.com, you agree to these Terms &amp; Conditions. If you do not agree, please do not use our services or this website.</p>

              <h2>2. Our Services</h2>
              <p>We provide Shopify theme development, migrations, speed optimization, and custom features, along with Klaviyo account setup, flow development, email/SMS campaign management, and related digital marketing services, as described on this website or in a project proposal.</p>

              <h2>3. Project Scope &amp; Proposals</h2>
              <p>Each engagement begins with a scope of work, timeline, and price agreed upon before work starts. Any additional work outside the agreed scope will be quoted separately and requires your approval before we proceed.</p>

              <h2>4. Payments &amp; Invoicing</h2>
              <p>Unless otherwise agreed in writing, one-time projects require a deposit before work begins, with the remaining balance due at delivery (larger projects may include a milestone payment). Retainers are billed monthly in advance. Late payments may result in a pause of ongoing work.</p>

              <h2>5. Client Responsibilities</h2>
              <p>To keep your project on schedule, you agree to provide timely access to necessary accounts (such as Shopify and Klaviyo), brand assets, content, and feedback. Delays in providing these may extend the project timeline accordingly.</p>

              <h2>6. Intellectual Property</h2>
              <p>Upon full payment, you own the final deliverables created specifically for your project (for example, your custom theme code or email templates). We retain the right to reuse general methods, non-client-specific code snippets, and know-how developed during the engagement, and we may reference completed projects in our portfolio and case studies unless you request otherwise in writing.</p>

              <h2>7. Revisions</h2>
              <p>Each project includes a reasonable number of revision rounds, as outlined in your proposal. Requests beyond the agreed revisions may be billed separately.</p>

              <h2>8. Confidentiality</h2>
              <p>We treat information you share with us about your business as confidential and will not disclose it to third parties, except as needed to deliver the services (for example, to integrated tools) or as required by law.</p>

              <h2>9. Limitation of Liability</h2>
              <p>We aim to deliver high-quality work, but we cannot guarantee specific business outcomes (such as a particular revenue increase or conversion rate) as these depend on many factors outside our control. To the maximum extent permitted by law, our liability for any claim related to our services is limited to the amount you paid us for the relevant project.</p>

              <h2>10. Termination</h2>
              <p>Either party may terminate an ongoing engagement with written notice, as specified in your proposal or retainer agreement. You will be billed for work completed up to the termination date.</p>

              <h2>11. Governing Law</h2>
              <p>These Terms are governed by the laws applicable to our place of business, without regard to conflict-of-law principles, unless otherwise agreed in a signed contract.</p>

              <h2>12. Changes to These Terms</h2>
              <p>We may update these Terms from time to time. Continued use of our services after changes are posted constitutes acceptance of the updated Terms.</p>

              <h2>13. Contact Us</h2>
              <p>Questions about these Terms? Email us at <a href="mailto:hello@plussquire.com">hello@plussquire.com</a>.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
