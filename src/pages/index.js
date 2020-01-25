import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Grid from "../components/grid"
import Callout from "../components/callout"
import Blog from "../components/blog"
import Project from "../components/project"

const IndexPage = ({ data }) => {
  const { allMarkdownRemark } = data
  const { edges } = allMarkdownRemark

  return (
    <Layout>
      {/* SEO Meta */}
      <SEO title="Home" />
      {/* Blog Section */}
      <Grid title="Latest from the blog">
        {
          edges.map(item => (
            <Blog key={item}/>
          ))
        }
      </Grid>
      {/* Project Section */}
      <Grid title="Popular projects">
        {
          edges.map(item => (
            <Project key={item}/>
          ))
        }
      </Grid>
      {/* Callout Section */}
      <Callout
        title="Some title here"
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque, officia illo! Maiores eveniet obcaecati iste, nihil placeat iusto itaque cum consequuntur voluptatum harum tempore ab, eius enim quasi est ratione?"
      />
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`