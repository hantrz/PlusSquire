import Navbar from './components/Navbar'
import Hero from './components/Hero'
import NotJustEmail from './components/NotJustEmail'
import Clients from './components/Clients'
import Why from './components/Why'
import Services from './components/Services'
import CaseStudies from './components/CaseStudies'
import WhySquire from './components/WhyMailrun'
import Testimonials from './components/Testimonials'
import { CtaBand, Contact, Footer } from './components/Sections'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Clients />
        <NotJustEmail />
        <Why />
        <Services />
        <CaseStudies />
        <WhySquire />
        <Testimonials />
        <CtaBand />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
