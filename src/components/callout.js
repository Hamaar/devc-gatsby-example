import React from "react"
import "./callout.style.css"

const Callout = ({ title, description }) => (
  <section className="callout">
    <div className="callout-title">{title}</div>
    <div className="callout-description">{description}</div>
  </section>
)

export default Callout