import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Grid from "../components/grid"
import Project from "../components/project"

const ProjectPage = ({ data }) => {
  const { allMarkdownRemark } = data
  const { edges } = allMarkdownRemark

  return (
  <Layout>
    <SEO title="Project" />
    <h1>Page Project</h1>
      {/* project Section */}
      <Grid title="Latest from the project" link={false}>
        {
          edges.map(({ node: { frontmatter: { title, date, type, description } } }, index) => {
            if (type === 'project') {
              return (<Project key={index} title={title} description={description}/>)
            }
          })
        }
      </Grid>
  </Layout>
  )
}

export default ProjectPage

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
