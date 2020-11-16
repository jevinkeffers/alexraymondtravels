import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Trips from '../components/Trips'
import EmailForm from "../components/EmailForm"

const TripsPage = () => (
    <Layout>
        <SEO title="Alex Raymond Travels" />
        <Trips heading="Alex's Favorite Destinations"/>
        <EmailForm 
            css={`
            margin-top: 1rem;
            `}/>
    </Layout>
)

export default TripsPage
