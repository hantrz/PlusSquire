import Navbar from '../components/Navbar'
import { About, StatsBar, Footer } from '../components/Sections'

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '68px' }}>
        <About />
        <StatsBar />
      </main>
      <Footer />
    </>
  )
}
