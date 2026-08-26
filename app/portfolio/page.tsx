import Navbar from '../components/Navbar'
import { Portfolio, Footer } from '../components/Sections'

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '68px' }}>
        <Portfolio />
      </main>
      <Footer />
    </>
  )
}
