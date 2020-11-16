import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import AboutAlex from "../components/AboutAlex"
import Process from "../components/Process"
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
