import * as React from "react"
import HeaderTop from "../components/HeaderTop"
import SEO from "../components/seo"
import "../components/css/styles.css"

import "../utils/styles.css"
import TaglineSection from "../components/sections/TaglineSection"
import TailwindService from "../components/cards/tailwind-service"
import BestTeamSection from "../components/cards/best-team"
import Microservices from "../components/cards/microservices"
import PhlebeiaCard from "../components/case-study-products-cards/PhlebeiaCard"
// markup
const IndexPage = () => {
  return (
    <>
      <SEO/>
      <div className='pt-15 text-gray-800 bg-white'>
        <div className="flex flex-wrap justify-center">
          <HeaderTop />
          <div className="flex flex-wrap justify-center w-auto max-w-5xl w-auto">
            <TaglineSection />
            <TailwindService />
            <Microservices />
            <BestTeamSection />
            <div className="w-full flex flex-wrap">
              <PhlebeiaCard />

            </div>
          </div>
        </div>
      </div>
    </>
    
  )
}

export default IndexPage
