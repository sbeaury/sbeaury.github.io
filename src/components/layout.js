import React from "react"
import PropTypes from "prop-types"
import Header from "./Header"
import Footer from "./Footer"
import { ScrollingProvider } from "react-scroll-section"
import GlobalStyle from "../styles/global"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <ScrollingProvider>
        <Header />
        <div>
          <main>{children}</main>
          <Footer />
        </div>
      </ScrollingProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
