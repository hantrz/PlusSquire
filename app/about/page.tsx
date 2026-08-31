import Navbar from '../components/Navbar'
import { About, StatsBar, Footer } from '../components/Sections'

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '68px' }}>
        <style>{`
          .abt-hero {
            padding: 64px 0 56px;
            background:
              radial-gradient(ellipse at top left, rgba(30, 166, 114, 0.14) 0%, transparent 60%),
              radial-gradient(ellipse at bottom right, rgba(30, 166, 114, 0.14) 0%, transparent 60%),
              #ffffff;
          }
        `}</style>
        <section className="abt-hero">
          <div className="wrap">
            <div className="sh-row" style={{ marginBottom: 0 }}>
              <div className="section-tag" style={{ justifyContent: 'center' }}>About Us</div>
              <h1 style={{ fontSize: 'clamp(36px,4.5vw,56px)' }}>The story <em style={{ color: 'var(--g)', fontStyle: 'normal' }}>behind PlusSquire.</em></h1>
              <p className="section-sub">The experience, the numbers, and the person behind every project.</p>
            </div>
          </div>
        </section>
        <About />
        <StatsBar />
      </main>
      <Footer />
    </>
  )
}
