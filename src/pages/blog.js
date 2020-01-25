import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Grid from "../components/grid"
import Blog from "../components/blog"

const BlogPage = ({ data }) => {
  const { allMarkdownRemark } = data
  const { edges } = allMarkdownRemark

  return (
    <Layout>
      <SEO title="Blog" />
      <h1>Page Blog</h1>
      {/* Blog Section */}
      <Grid title="Latest from the blog" link={false}>
        {
          edges.map(({ node: { frontmatter: { title, date, type, description } } }, index) => {
            if (type === 'blog') {
              return (<Blog key={index} date={date} title={title}/>)
            }
          })
        }
      </Grid>
    </Layout>
  )
}

export default BlogPage

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
            type
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
