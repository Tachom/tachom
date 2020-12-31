import * as React from "react"
import HeaderTop from "../components/HeaderTop"
import SEO from "../components/seo"
import "../components/css/styles.css"

import "../utils/styles.css"
// markup
const IndexPage = () => {
  return (
    <>
      <SEO/>
      <div className=' pt-15 text-gray-300 bg-black'>
        <div className="container mx-auto max-w-5xl">
          <HeaderTop />
        </div>
      </div>
    </>
    
  )
}

export default IndexPage
