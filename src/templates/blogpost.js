import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"
import { formatDate } from "../utils/date"

import "../styles/blogpost.scss"

const BlogpostTemplate = ({ data }) => {
    const post = data.markdownRemark
    return (
        <Layout className="blogpost-container">
            <SEO title={post.frontmatter.title} />
            <div className="header">
                <h1>{post.frontmatter.title}</h1>
                <div className="metadata">
                    <span>{formatDate(post.frontmatter.date)}</span>
                </div>
            </div>
            <div className="content" dangerouslySetInnerHTML={{ __html: post.html }}>
            </div>
        </Layout>
    )
}

export default BlogpostTemplate

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                date
            }
        }
    }
`