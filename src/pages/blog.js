import React from 'react'

import BlogRoll from '../components/BlogRoll'
import Navbar from '../components/Navbar'
import SEO from '../components/seo'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <>
        <div className="w-full max-w-5xl mx-auto">
            <SEO title={"Blog"} />
            <Navbar/>
            <BlogRoll />
        </div>
      </>
    )
  }
}