import React from "react"
import { Wrapper } from "./styles"

const Footer = () => {
  return (
    <Wrapper>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </Wrapper>
  )
}

export default Footer
