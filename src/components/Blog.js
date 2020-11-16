// import React from "react"
// import { useStaticQuery, graphql, Link } from "gatsby"
// import Img from "gatsby-image"
// import SEO from "../components/seo"

// const Blog = () => {
//     const data = useStaticQuery(
//     graphql`
//         query {
//             allContentfulBlog(sort: {fields: createdAt, order: DESC}) {
//                 edges {
//                     node {
//                         subhead
//                         headline
//                         id
//                         slug
//                         updatedAt(formatString: "")
//                         featuredImage {
//                             fluid {
//                                 src
//                             }
//                         }
//                     }
//                 }
//             }
//         }            
//     `
//     )

//     return (
//         <>
//             <SEO title="Blog" />
//             <p>
//             <Link to="/">Go back to the homepage</Link>
//             </p>
//             <ul className="posts">
//                 {data.allContentfulBlog.edges.map(edge => {
//                     return (
//                     <li className="post" key={edge.node.id}>
//                         <h2>
//                             <Link to={`/blog/${edge.node.slug}/`}>{edge.node.headline}</Link>
//                         </h2>
//                         {/* <div className="meta">
//                         <span>Posted on {edge.node.date}</span>
//                         </div> */}
//                         {edge.node.featuredImage && (
//                         <Img
//                             className="featured"
//                             fluid={edge.node.featuredImage.fluid}
//                             alt={edge.node.title}
//                         />
//                         )}
//                         <p className="subhead">
//                             {edge.node.subhead}
//                         </p>
//                         <div className="button">
//                         <Link to={`/blog/${edge.node.slug}/`}>Read More</Link>
//                         </div>
//                     </li>
//                     )
//                 })}
//             </ul>
//         </>
//     )
// }

// export default Blog
