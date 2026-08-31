import Navbar from '../components/Navbar'
import { Portfolio, Footer } from '../components/Sections'

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '68px' }}>
        <style>{`
          .port-hero {
            padding: 64px 0 56px;
            background:
              radial-gradient(ellipse at top left, rgba(30, 166, 114, 0.14) 0%, transparent 60%),
              radial-gradient(ellipse at bottom right, rgba(30, 166, 114, 0.14) 0%, transparent 60%),
              #ffffff;
          }
        `}</style>
        <section className="port-hero">
          <div className="wrap">
            <div className="sh-row" style={{ marginBottom: 0 }}>
              <div className="section-tag" style={{ justifyContent: 'center' }}>Portfolio</div>
              <h1 style={{ fontSize: 'clamp(36px,4.5vw,56px)' }}>Work we&apos;re <em style={{ color: 'var(--g)', fontStyle: 'normal' }}>proud to show.</em></h1>
              <p className="section-sub">A look at the Shopify builds and email programs we&apos;ve shipped for real brands.</p>
            </div>
          </div>
        </section>
        <Portfolio />
      </main>
      <Footer />
    </>
  )
}
