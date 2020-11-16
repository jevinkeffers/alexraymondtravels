import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutAlex from "../components/AboutAlex"
import Process from "../components/Process"
import Email from "../components/Email"

const AboutPage = () => (
  <Layout>
    <SEO title="About Alex Raymond Travels" />
    <AboutAlex />
    <Process />
    <Email />
  </Layout>
)

export default AboutPage
