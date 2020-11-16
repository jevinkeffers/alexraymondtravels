import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Blog from "../components/Blog"
import Email from "../components/Email"

const BlogPage = () => (
    <Layout>
        <SEO title="Alex Raymond Travels Blog" />
        <Blog />
        <Email />
    </Layout>
)

export default BlogPage
