import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Clients from './components/Clients'
import NotJustEmail from './components/NotJustEmail'
import Why from './components/Why'
import Services from './components/Services'
import CaseStudies from './components/CaseStudies'
import WhySquire from './components/WhySquire'
import Testimonials from './components/Testimonials'
import { ProcessSection, Portfolio, About, HomeFaq, CtaBand, Contact, Footer } from './components/Sections'

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
        <ProcessSection />
        <CaseStudies />
        <Portfolio />
        <About />
        <WhySquire />
        <Testimonials />
        <HomeFaq />
        <CtaBand />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
