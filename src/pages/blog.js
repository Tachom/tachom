import React from 'react'

import BlogRoll from '../components/BlogRoll'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import SEO from '../components/seo'
import "../utils/styles.css"

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <>
        <div className="w-full max-w-5xl mx-auto md:mb-12">
            <SEO title={"Blog"} />
            <Navbar/>
            <BlogRoll />

        </div>
        <Footer/>

      </>
    )
  }
}