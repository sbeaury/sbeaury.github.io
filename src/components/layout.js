import React from "react";
import PropTypes from "prop-types";
import Header from "./header";
import { ScrollingProvider } from "react-scroll-section";
import styled, { createGlobalStyle } from "styled-components";

// const Triangle = styled.div`
//   ::after {
//     content: " ";
//     border-top: 100vh solid #008ce6;
//     border-right: 100vw solid transparent;
//     width: 0;
//     position: absolute;
//     z-index: -1;
//   }
// `;

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
    padding: 0 0 0 10px;
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
  
`;

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      {/* <Triangle /> */}
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
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
