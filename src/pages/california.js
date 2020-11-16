import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import California from "../components/California"
import EmailForm from "../components/EmailForm"

const CaliforniaPage= () => (
<Layout>
    <SEO title="About Alex Raymond Travels" />
    <California />
    <EmailForm />
</Layout>
)

export default CaliforniaPage
