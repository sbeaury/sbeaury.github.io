import { createGlobalStyle } from "styled-components"

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
  
`

export default GlobalStyle
