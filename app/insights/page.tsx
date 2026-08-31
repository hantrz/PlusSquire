import Navbar from '../components/Navbar'
import { Insights, Footer } from '../components/Sections'

export default function InsightsPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '68px' }}>
        <style>{`
          .ins-hero {
            padding: 64px 0 56px;
            background:
              radial-gradient(ellipse at top left, rgba(30, 166, 114, 0.14) 0%, transparent 60%),
              radial-gradient(ellipse at bottom right, rgba(30, 166, 114, 0.14) 0%, transparent 60%),
              #ffffff;
          }
        `}</style>
        <section className="ins-hero">
          <div className="wrap">
            <div className="sh-row" style={{ marginBottom: 0 }}>
              <div className="section-tag" style={{ justifyContent: 'center' }}>Insights</div>
              <h1 style={{ fontSize: 'clamp(36px,4.5vw,56px)' }}>Ideas and playbooks <em style={{ color: 'var(--g)', fontStyle: 'normal' }}>for smarter growth.</em></h1>
              <p className="section-sub">Practical guides on Shopify, Klaviyo, and email marketing, written from what actually moves revenue for eCommerce brands.</p>
            </div>
          </div>
        </section>
        <Insights />
      </main>
      <Footer />
    </>
  )
}
