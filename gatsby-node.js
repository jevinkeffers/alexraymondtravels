// const path = require("path")

// exports.createPages = async ({ graphql, actions }) => {
//     const { createPage } = actions
//     const response = await graphql(`
//         allContentfulBlog {
//             nodes {
//                 slug
//                 }
//             }
//         }
//     `)
//     response.data.allContentfulBlog.edges.forEach(edge => {
//         createPage({
//             path: `/blog/${edge.node.slug}`,
//             component: path.resolve("./src/templates/blog-post.js"),
//             context: {
//                 slug: edge.node.slug,
//             },
//         })
//     })
// }