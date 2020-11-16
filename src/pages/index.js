import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Hero from '../components/Hero'
import AboutAlex from '../components/AboutAlex'
import TravelAdvisorFront from '../components/TravelAdvisorFront'
import Trips from '../components/Trips'
import Testimonials from "../components/Testimonials"
import Process from "../components/Process"
import EmailForm from "../components/EmailForm"
// import Email from "../components/Email"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <AboutAlex />
    <TravelAdvisorFront />
    <Trips heading="Exclusive Packages" />
    <Process />
    <Testimonials />
    <EmailForm />
    {/* <Email /> */}
  </Layout>
)

export default IndexPage 
