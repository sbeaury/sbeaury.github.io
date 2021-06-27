import React, { useContext } from "react"
import PropTypes from "prop-types"
import { ScrollingProvider } from "react-scroll-section"
import { createGlobalStyle } from "styled-components"
import Header from "../theme/Header"
import Footer from "../theme/Footer"
import ThemeContext from "../theme/Context/ThemeContext"

const GlobalStyle = createGlobalStyle`

  *,
  *::after,
  *::before { 
    box-sizing: inherit;
    }


  body {
    box-sizing: border-box; 
    margin: 0;
    font-display: swap;
    font-display: fallback;
    overflow-x: hidden;
    font-family: Roboto, sans-serif;
    color: #111;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    background-color: #fafafa;



    ${({ darkMode }) =>
      darkMode &&
      `
      color: #fff;
      background-color: #181717;
	  `}

    }

    a {
      color:#111;
    }
    
    @media (min-width: 768px) {
      html {
        font-size: 16px;
        overflow-x: hidden;
      }
    }

    @media (min-width: 992px) {
      html {
        font-size: 18px;
        overflow-x: hidden;
      }
    }

    @media (min-width: 1200px) {
      html {
        font-size: 20px;
      }
    }
  
`

const Layout = ({ children }) => {
  const {
    theme: { darkMode },
  } = useContext(ThemeContext)

  return (
    <>
      <GlobalStyle darkMode={darkMode} />
      <ScrollingProvider>
        <Header />
        <main>{children}</main>
        <Footer />
      </ScrollingProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
