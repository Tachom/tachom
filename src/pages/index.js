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

          <div className="flex flex-wrap max-w-5xl w-full mx-auto py-8">
              <div className="py-12 px-4 lg:px-0 w-full  font-bold">
                <p className="text-md text-indigo-600">HOW WE CAN HELP</p>
                <p className="text-4xl text-black md:text-6xl">Make technology a competitive advantage in your business.</p>
              </div>
              <QualityAssurance />
              <ApplicationArchitecture />
              <Devops/>
          </div>

          <div className="py-12 p-4 lg:p-8 h-screen flex flex-wrap bg-milk w-full mt-12">
            <BestTeamSection />
          </div>

          <div className="py-12 md:p-4 lg:p-8 h-screen flex flex-wrap  w-full mb-12">
            <TaglineSection />
          </div>


          

          <div className="py-12 p-4 lg:p-8 h-screen flex flex-wrap bg-manilla w-full mt-12">
            <div className="w-full h-full rounded-xl bg-white shadow p-8 lg:p-12 flex max-w-5xl flex mx-auto">
              <div className="m-auto flex-wrap flex text-center justify-center md:w-3/4">
                  <p className="text-3xl font-bold">
                    Bring any project to life. Seriously.
                  </p>
                  <p className="py-8 text-center md:text-lg">
                    iPad and Mac have versatile built-in apps like Pages to transform assignments, GarageBand to 
                    make homework sing, and iMovie to put on a show. And the Swift Playgrounds app helps students 
                    learn the fundamentals of how to code.
                  </p>
              </div>
            </div>
          </div>

          <div className="py-12 bg-manilla w-full">
            <div className="flex flex-wrap justify-center w-auto max-w-5xl w-full mx-auto">
              <TailwindService />
              <Microservices />
            </div>
          </div>

        </div>
      </div>
    </>
    
  )
}

export default IndexPage
