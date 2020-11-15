import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from '../components/Hero'
import Trips from '../components/Trips'
import Testimonials from "../components/Testimonials"
import Process from "../components/Process"
import Email from "../components/Email"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Trips heading="Favorite Destinations" />
    <Testimonials />
    <Process />
    <Email />
  </Layout>
)

export default IndexPage 
