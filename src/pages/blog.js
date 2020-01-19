import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogpostList from "../components/blogpost-list"
import { graphql } from "gatsby"

import "../styles/blog.scss"

const BlogPage = ({ data }) => (
    <Layout className="blog-page-container">
        <SEO title="Blog" />
        <p className="blog-description">
            A collection of personal thoughts, experiments and notes.
        </p>
        <BlogpostList edges={data.allMarkdownRemark.edges} />
    </Layout>
)
 
export default BlogPage

export const query = graphql`
    query {
        allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, filter: {frontmatter: {draft: {ne: true}}}) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        date
                        description
                    }
                    fields {
                        slug
                    }
                }
            }
        }
    }
`