import React from "react"

import "./blog.style.css"

const Blog = ({ name }) => (
  <section className="blog">
    <div className="blog-image">
      <img src="https://via.placeholder.com/300x200/"/>
    </div>
    <div className="blog-content">
      <div className="blog-date">
        Title Here
      </div>
      <div className="blog-title">
        Description Here
      </div>
    </div>
  </section>
)

export default Blog