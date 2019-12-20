const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require("path")

exports.onCreateNode = ({ node, getNode, actions }) => {
    if (node.internal.type === 'MarkdownRemark') {
        createMarkdownNode(node, getNode, actions)
    }
}

exports.createPages = async ({ graphql, actions }) => {
    await createBlogPages(graphql, actions)
}

function createMarkdownNode(node, getNode, actions) {
    const slug = createFilePath({ node, getNode, basePath: 'src/blog' })
    actions.createNodeField({
        node,
        name: 'slug',
        value: `blog${slug}`,
    })
}

async function createBlogPages(graphql, actions) {
    const result = await graphql(`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        actions.createPage({
            path: node.fields.slug,
            component: path.resolve('./src/templates/blogpost.js'),
            context: {
                slug: node.fields.slug,
            }
        })        
    })
}