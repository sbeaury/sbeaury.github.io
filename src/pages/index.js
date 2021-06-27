import React, { useState } from "react"
import Layout from "../components/common/Layout"
import SEO from "../components/common/Seo"
import Intro from "../components/landing/Intro/Intro"
import About from "../components/landing/About/About"
import Portfolio from "../components/landing/Projects/Portfolio"
import Blog from "../components/landing/Blog/Blog"
import { ThemeContextProvider } from "../components/theme/Context/ThemeContext"

const IndexPage = () => {
  const [theme, setTheme] = useState({ darkMode: false })

  return (
    <ThemeContextProvider
      value={{
        theme,
        toggleDarkMode: darkMode => {
          setTheme({ darkMode })
        },
      }}
    >
      <Layout>
        <SEO title="Home" />
        <Intro />
        <About />
        <Portfolio />
        <Blog />
      </Layout>
    </ThemeContextProvider>
  )
}

export default IndexPage
