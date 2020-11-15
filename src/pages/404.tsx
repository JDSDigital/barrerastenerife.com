import { PageProps } from "gatsby"
import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

const NotFoundPage: React.FC<PageProps> = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage