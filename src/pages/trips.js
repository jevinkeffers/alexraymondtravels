import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Trips from '../components/Trips'

const TripsPage = () => (
    <Layout>
        <SEO title="Alex Raymond Travels" />
        <Trips heading="Alex's Favorite Destinations"/>
    </Layout>
)

export default TripsPage
