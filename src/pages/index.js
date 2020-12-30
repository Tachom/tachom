import * as React from "react"
import HeaderTop from "../components/HeaderTop"
import SEO from "../components/Services"
import "../utils/styles.css"

const IndexPage = () => {
  return (
    <>
      <SEO/>
      <div className='container pt-15 mx-auto max-w-5xl text-gray-900'>
        <HeaderTop />
      </div>
    </>
    
  )
}

export default IndexPage
