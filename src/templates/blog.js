import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Navbar from "../components/Navbar"
export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <>
      <SEO title={frontmatter.title} />
      <div className="max-w-5xl mx-auto">
        <Navbar />
        <div className="blog-post-container py-12">
          <div className="blog-post">
            <h1 className="text-4xl font-bold">{frontmatter.title}</h1>
            <h2 className="text-2xl">{frontmatter.date}</h2>
            <div
              className="blog-post-content py-8"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </div>
      </div>
    </>
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`