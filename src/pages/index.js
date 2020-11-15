import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from '../components/Hero'
import AboutAlex from '../components/AboutAlex'
import Trips from '../components/Trips'
import Testimonials from "../components/Testimonials"
import Process from "../components/Process"
import Email from "../components/Email"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <AboutAlex />
    <Trips heading="Favorite Destinations" />
    <Process />
    <Testimonials />
    <Email />
  </Layout>
)

export default IndexPage 
