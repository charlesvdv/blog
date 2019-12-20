import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'

const BackgroundImageIndex = ({ children, className }) => {
    const { bgImage } = useStaticQuery(graphql`
        query {
            bgImage: file(relativePath: { eq: "ozark-drones-jeV-LUEyJoE-unsplash.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 2048, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `)

    return (
        <BackgroundImage 
            fluid={bgImage.childImageSharp.fluid} 
            className={className}
        >
            { children }
        </BackgroundImage>
    )
}

export default BackgroundImageIndex