import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import Trips from '../components/Trips'
import Testimonials from "../components/Testimonials"
import Process from "../components/Process"
import Email from "../components/Email"

const ContactPage = () => (
    <Layout>
        <SEO title="Contact Alex Raymond Travels" />
        <Testimonials />
        <Process />
        <Email />
    </Layout>
)

export default ContactPage