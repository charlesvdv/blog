import React from 'react'
import { graphql } from 'gatsby'

import SEO from '../components/seo'
import BaseLayout from '../components/base-layout'
import { formatDate, formatMinutes } from '../utils/datetime'

const BlogpostTemplate = ({ data }) => {
  const post = data.markdownRemark
  const description =
    'description' in post.frontmatter
      ? post.frontmatter.description
      : post.excerpt
  return (
    <BaseLayout>
      <SEO title={post.frontmatter.title} description={description} />
      <div>
        <h1 className='my-2 text-2xl sm:text-3xl md:text-4xl font-semibold opacity-90 text-gray-900'>
          {post.frontmatter.title}
        </h1>
        <div className='italic text-gray-500 opacity-80 space-x-4 text-sm md:text-base'>
          <span>{formatDate(post.frontmatter.date)}</span>
          <span>{`${formatMinutes(post.timeToRead)} read`}</span>
        </div>
      </div>
      <div
        className='my-8 prose max-w-none'
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </BaseLayout>
  )
}

export default BlogpostTemplate

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        date
        description
      }
    }
  }
`
