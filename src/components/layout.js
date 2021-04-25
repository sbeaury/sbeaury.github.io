import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import { ScrollingProvider } from "react-scroll-section"
import GlobalStyle from "../styles/global"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <ScrollingProvider>
        <Header />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0 1.0875rem 1.45rem`,
          }}
        >
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </ScrollingProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
