import React from "react"

import BlogpostStub from "./blogpost-stub"

const BlogpostList = ({ edges, className }) => (
    <div className="blogpost-list-container">
        {edges.map(({ node }) => ( 
            <BlogpostStub node={node} key={node.id} />
        ))}
    </div>
)

export default BlogpostList