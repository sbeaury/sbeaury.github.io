import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Landing from "../sections/landing";
import About from "../sections/about";
import Portfolio from "../sections/portfolio";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Landing />
    <About />
    <Portfolio />
  </Layout>
);

export default IndexPage;
