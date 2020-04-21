import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Landing from "../sections/landing";
import About from "../sections/about";
import Portfolio from "../sections/portfolio";
import Blog from "../sections/blog";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Landing />
    <About />
    <Portfolio />
    <Blog />
  </Layout>
);

export default IndexPage;
