import React from 'react'

import BaseLayout from '../components/base-layout'
import SEO from '../components/seo'
import BlogpostList from '../components/blogpost-list'
import { graphql } from 'gatsby'

const BlogPage = ({ data }) => (
  <BaseLayout>
    <SEO title='Blog' />
    <p className='italic text-lg text-gray-900'>
      A collection of personal thoughts, experiments and notes.
    </p>
    <BlogpostList edges={data.allMarkdownRemark.edges} />
  </BaseLayout>
)

export default BlogPage

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { draft: { ne: true } } }
    ) {
      edges {
        node {
          id
          excerpt
          timeToRead
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
