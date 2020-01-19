import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Helmet from "react-helmet"

const Analytics = () => {
    const data = useStaticQuery(graphql`
        {
            allFile(filter: {relativePath: {eq: "scripts/analytics.js"}}) {
                edges {
                    node {
                        publicURL
                    }
                }
            }
        }
    `)

    return (
        <Helmet>
            <script type='text/javascript' src={ data.allFile.edges[0].node.publicURL }></script>
        </Helmet>
    )
}

export default Analytics