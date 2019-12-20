import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "../styles/fonts.scss"
import "../styles/layout.scss"

const Layout = ({ children, className }) => {
    const data = useStaticQuery(graphql`
    query SiteTitleQuery {
        site {
            siteMetadata {
                title
            }
        }
    }
    `)
    
    return (
        <>
            <Header siteTitle={data.site.siteMetadata.title} />
            <main className={className}>
                {children}
            </main>
        </>
    )
}
    
    export default Layout
    