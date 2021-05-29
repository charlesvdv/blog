import React from 'react'

import BlogpostStub from './blogpost-stub'

const BlogpostList = ({ edges, className }) => (
  <div className='flex flex-col my-4'>
    {edges.map(({ node }) => (
      <BlogpostStub node={node} key={node.id} />
    ))}
  </div>
)

export default BlogpostList
