import * as React from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import HeaderTop from "../components/HeaderTop"
import ServicesSection from "../components/Services"
import TechnologyStackSection from "../components/TechnologyStackSection"
import "../utils/styles.css"
// markup
const IndexPage = () => {
  return (
    <div className='container mx-auto'>
      <HeaderTop />
      <Header />
      <ServicesSection />
      <TechnologyStackSection />
      <Footer />
    </div>
  )
}

export default IndexPage
