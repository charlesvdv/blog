import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "../styles/header.scss"

const Header = ({ siteTitle }) => (
    <div className="header-container">
        <Link to="/" className="home-link">{siteTitle}</Link>
        <Link to="/about" className="other-link">about/</Link>
        &nbsp;
        <Link to="/blog" className="other-link">blog/</Link>
    </div>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
