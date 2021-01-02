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
import CrossPlatformDevelopersSection from "../components/sections/cross-platform-developers"
import ApplicationArchitecture from "../components/cards/app-development"
import Devops from "../components/cards/devops"
import QualityAssurance from "../components/cards/quality-assurance"
// markup
const IndexPage = () => {
  return (
    <>
      <SEO/>
      <div className='pt-15 text-gray-800 bg-white relative'>
        <div className="flex flex-wrap justify-center">
          <HeaderTop />

          <div className="flex flex-wrap justify-center w-auto max-w-5xl w-full mx-auto py-12">
            <TailwindService />
            <Microservices />
            <CrossPlatformDevelopersSection />
            <BestTeamSection />
          </div>

          <TaglineSection />

          <div className="flex flex-wrap max-w-5xl w-full mx-auto">
              <div className="py-8 px-4 lg:px-0 w-full  font-bold">
                <p className="text-md text-indigo-600">HOW WE CAN HELP</p>
                <p className="text-6xl">Make technology a competitive advantage in your business.</p>
              </div>
              <QualityAssurance />
              <ApplicationArchitecture />
              <Devops/>

            </div>

        </div>
      </div>
    </>
    
  )
}

export default IndexPage
