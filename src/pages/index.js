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
    <>
      <HeaderTop />
      <Header />
      <ServicesSection />
      <TechnologyStackSection />
      <Footer />
    </>
  )
}

export default IndexPage
