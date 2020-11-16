import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Trips from '../components/Trips'

const TripsPage = () => (
    <Layout>
        <SEO title="Alex Raymond Travels" />
        <Trips heading="Alex's Favorite Destinations"/>
    </Layout>
)

export default TripsPage
