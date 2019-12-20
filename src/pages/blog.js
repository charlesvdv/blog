import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogpostList from "../components/blogpost-list"
import { graphql } from "gatsby"

const BlogPage = ({ data }) => (
    <Layout className="blog-page-container">
        <SEO title="Blog" />
        <BlogpostList edges={data.allMarkdownRemark.edges} />
    </Layout>
)
 
export default BlogPage

export const query = graphql`
    query {
        allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
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