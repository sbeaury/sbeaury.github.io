import React from "react"
import { FooterContainer } from "./styles"

const Footer = () => {
  return (
    <FooterContainer>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </FooterContainer>
  )
}

export default Footer
