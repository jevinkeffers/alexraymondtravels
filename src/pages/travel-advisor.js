import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import TravelAdvisor from "../components/TravelAdvisor"
import EmailForm from "../components/EmailForm"

const AboutPage = () => (
<Layout>
    <SEO title="About Alex Raymond Travels" />
    <TravelAdvisor />
    <EmailForm />
</Layout>
)

export default AboutPage
