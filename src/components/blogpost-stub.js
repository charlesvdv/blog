import React from 'react'
import { Link } from 'gatsby'
import { formatDate, formatMinutes } from '../utils/datetime'

const BlogpostStub = ({ node }) => {
  const frontmatter = node.frontmatter
  const postLink = node.fields.slug
  const description =
    'description' in frontmatter ? frontmatter.description : node.excerpt
  return (
    <div className='my-4'>
      <Link href={postLink} partiallyActive={true} className=''>
        <h2 className='text-2xl md:text-3xl font-semibold opacity-90 text-gray-900'>
          {frontmatter.title}
        </h2>
        <div className='text-gray-500 opacity-80 italic space-x-4 text-sm md:text-base'>
          <span>{formatDate(frontmatter.date)}</span>
          <span>{`${formatMinutes(node.timeToRead)} read`}</span>
        </div>
        <div className='my-2 text-gray-600'>{description}</div>
      </Link>
    </div>
  )
}

export default BlogpostStub
