import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutAlex from "../components/AboutAlex"
import Process from "../components/Process"
// import Email from "../components/Email"
import EmailForm from "../components/EmailForm"

const AboutPage = () => (
  <Layout>
    <SEO title="About Alex Raymond Travels" />
    <AboutAlex />
    <Process />
    <EmailForm />
  </Layout>
)

export default AboutPage
