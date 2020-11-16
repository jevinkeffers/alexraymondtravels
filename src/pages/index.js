import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Hero from '../components/Hero'
import AboutAlex from '../components/AboutAlex'
import TravelAdvisorFront from '../components/TravelAdvisorFront'
import CaliforniaFront from '../components/CaliforniaFront'
import Trips from '../components/Trips'
import Testimonials from "../components/Testimonials"
import Process from "../components/Process"
import EmailForm from "../components/EmailForm"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <AboutAlex />
    <TravelAdvisorFront />
    <CaliforniaFront />
    <Trips heading="Exclusive Packages" />
    <Process />
    <Testimonials />
    <EmailForm />
  </Layout>
)

export default IndexPage 
