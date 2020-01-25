import React from "react"
import "./project.style.css"

const Profile = ({ title, description }) => (
  <section className="project">
    <div className="project-title">
      {title}
    </div>
    <div className="project-description">
      {description}
    </div>
  </section>
)

export default Profile