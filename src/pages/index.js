import * as React from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import HeaderTop from "../components/HeaderTop"
import SEO from "../components/seo"
import ServicesSection from "../components/Services"
import TechnologyStackSection from "../components/TechnologyStackSection"
import "../utils/styles.css"
// markup
const IndexPage = () => {
  return (
    <>
      <SEO/>
      <div className='container pt-15 mx-auto max-w-5xl text-gray-900'>
        <HeaderTop />
        <Header />
        <ServicesSection />
        <TechnologyStackSection />
      </div>
      <Footer />
    </>
    
  )
}

export default IndexPage
