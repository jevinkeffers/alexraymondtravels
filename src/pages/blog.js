import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import TravelAdvisorFront from "../components/TravelAdvisorFront"
import CaliforniaFront from "../components/CaliforniaFront"
import EmailForm from "../components/EmailForm"

const BlogPage = () => (
    <Layout>
        <SEO title="Alex Raymond Travels: Blog" />
        <TravelAdvisorFront />
        <CaliforniaFront />
        <EmailForm />
    </Layout>
)

export default BlogPage
