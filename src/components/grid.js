import React from "react"
import { ArrowRight } from "react-feather"
import "./grid.style.css"

const Grid = ({ title, link, children }) => (
  <section className="grid">
    <div className="grid-heading">
      <div className="grid-heading__title">
        {title}
      </div>
      <div className="grid-heading__link">
        {
          (
            link ? <ArrowRight /> : ''
          )
        }
      </div>
    </div>
    <div className="grid-list">
      {children}
    </div>
  </section>
)

export default Grid