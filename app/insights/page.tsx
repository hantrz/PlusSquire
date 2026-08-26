import Navbar from '../components/Navbar'
import { Insights, Footer } from '../components/Sections'

export default function InsightsPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '68px' }}>
        <Insights />
      </main>
      <Footer />
    </>
  )
}
