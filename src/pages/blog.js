import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TravelAdvisorFront from "../components/TravelAdvisorFront"
import EmailForm from "../components/EmailForm"

const BlogPage = () => (
    <Layout>
        <SEO title="Alex Raymond Travels: Blog" />
        <TravelAdvisorFront />
        <EmailForm />
    </Layout>
)

export default BlogPage
