import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import Trips from '../components/Trips'
import Testimonials from "../components/Testimonials"
import Process from "../components/Process"
import Email from "../components/Email"

const AboutPage = () => (
  <Layout>
    <SEO title="About Alex Raymond Travels" />
    <Testimonials />
    <Process />
    <Email />
  </Layout>
)

export default AboutPage
