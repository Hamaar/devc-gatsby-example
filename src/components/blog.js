import React from "react"

import "./blog.style.css"

const Blog = ({ date, title }) => (
  <section className="blog">
    <div className="blog-image">
      <img src="https://via.placeholder.com/300x200/"/>
    </div>
    <div className="blog-content">
      <div className="blog-date">
        {date}
      </div>
      <div className="blog-title">
        {title}
      </div>
    </div>
  </section>
)

export default Blog