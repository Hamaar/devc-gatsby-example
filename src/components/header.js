import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.style.css"

const Header = ({ siteTitle }) => (
  <header className="header">
    <div className="headerInner">
      <Link to="/" className="headerLink">{siteTitle}</Link>
      <div>
        {
          ['/', '/blog', '/projects', '/about'].map(route => {
            const name = route === '/' ? '/home' : route
            return <Link to={route} key={route} className="headerLink">{name.replace('/', '')}</Link>
          })
        }
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
