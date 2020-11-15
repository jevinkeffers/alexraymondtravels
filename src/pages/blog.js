import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import Trips from '../components/Trips'
import Testimonials from "../components/Testimonials"
import Process from "../components/Process"
import Email from "../components/Email"

const BlogPage = () => (
<Layout>
    <SEO title="Alex Raymond Travels Blog" />
    <Testimonials />
    <Process />
    <Email />
</Layout>
)

export default BlogPage
