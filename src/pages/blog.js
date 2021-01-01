import React from 'react'

import BlogRoll from '../components/BlogRoll'
import Navbar from '../components/Navbar'
import SEO from '../components/seo'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <>
        <div className="container mx-auto w-max-5xl">
            <SEO title={"Blog"} />
            <Navbar/>
            <React.Fragment>
                <h1>Latest Posts</h1>
                <section>
                <div className="content">
                    <BlogRoll />
                </div>
                </section>
            </React.Fragment>
        </div>
      </>
    )
  }
}