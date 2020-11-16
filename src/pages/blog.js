import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TravelAdvisorFront from "../components/TravelAdvisorFront"
import CaliforniaFront from "../components/CaliforniaFront"
import EmailForm from "../components/EmailForm"
import CaliforniaPage from "./california"

const BlogPage = () => (
    <Layout>
        <SEO title="Alex Raymond Travels: Blog" />
        <TravelAdvisorFront />
        <CaliforniaFront />
        <EmailForm />
    </Layout>
)

export default BlogPage
