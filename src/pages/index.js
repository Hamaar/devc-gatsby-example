import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Grid from "../components/grid"
import Author from "../components/author"
import Blog from "../components/blog"
import Project from "../components/project"

const IndexPage = () => (
  <Layout>
    {/* SEO Meta */}
    <SEO title="Home" />
    {/* Author Section */}
    <Author/>
    {/* Blog Section */}
    <Grid title="Latest from the blog">
      <Blog/>
    </Grid>
    {/* Project Section */}
    <Grid title="Popular projects">
      {
        [0,1,2].map(item => (
          <Project key={item}/>
        ))
      }
    </Grid>
    {/* Author Section */}
    <Author/>
  </Layout>
)

export default IndexPage
