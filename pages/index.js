import { useContext } from 'react'
import Head from 'next/head'
import Layout, { siteTitle } from '../components/Layout/Layout'
import About from '../components/About/About'
import Projects from '../components/Projects/Projects'
// import Blog from '../components/Blog'
import Hero from '../components/Hero/Hero'
import { PortfolioProvider } from '../context'
import * as data from '../data'

export default function Home() {
  return (
    <PortfolioProvider value={{ ...data }}>
      <Layout>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <Hero />
        <About />
        <Projects />
        {/* <Blog /> */}
      </Layout>
    </PortfolioProvider>
  )
}
