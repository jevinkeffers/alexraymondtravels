import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import AboutAlex from "../components/AboutAlex"
import TravelAdvisor from "../components/TravelAdvisor"
// import Email from "../components/Email"
import EmailForm from "../components/EmailForm"

const AboutPage = () => (
<Layout>
    <SEO title="About Alex Raymond Travels" />
    <TravelAdvisor />
    <EmailForm />
</Layout>
)

export default AboutPage
