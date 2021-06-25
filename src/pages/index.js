import React from "react"
import Layout from "../components/common/Layout"
import SEO from "../components/common/Seo"
import Intro from "../components/landing/Intro/Intro"
import About from "../components/landing/About/About"
import Portfolio from "../components/landing/Projects/Portfolio"
import Blog from "../components/landing/Blog/Blog"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Intro />
    <About />
    <Portfolio />
    <Blog />
  </Layout>
)

export default IndexPage
