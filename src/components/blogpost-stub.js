import React from "react"
import { Link } from "gatsby"
import { formatDate } from "../utils/date"

import "../styles/blogpost-stub.scss"

const BlogpostStub = ({ node }) => {
    const frontmatter = node.frontmatter
    const postLink = node.fields.slug
    return (
        <div className="blogpost-stub-container">
            <Link to={postLink}>
                <h2 className="title">{frontmatter.title}</h2>
                <div className="metadata">
                    <span>{formatDate(frontmatter.date)}</span>
                </div>
                <div className="description">{frontmatter.description}</div>
            </Link>
        </div>
    )
}

export default BlogpostStub