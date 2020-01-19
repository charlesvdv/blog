import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import BackgroundImageIndex from "../components/background-image-index"
import Analytics from "../components/analytics"

import "../styles/fonts.scss"
import "../styles/index.scss"

const IndexPage = () => (
    <div className="index-page-container">
      <Analytics />
      <SEO title="Home" />
        <BackgroundImageIndex className="background-image">
            <div className="content">
                <h1 className="title">Charles Vandevoorde</h1>
                <div className="description">software engineer from brussels, belgium</div>
                <nav>
                    <Link to="/about">about/</Link>
                    &nbsp;
                    <Link to="/blog">blog/</Link>
                </nav>
            </div>
        </BackgroundImageIndex>
    </div>
 )

export default IndexPage
