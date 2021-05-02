import React from "react"
import styled from "styled-components"
import ProjectLinks from "./ProjectLinks"
import { BsChevronUp } from "react-icons/bs"

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 10rem;
  width: 100%;
  background: #243b55;
  color: white;

  * {
    color: white;
  }
`

const Footer = () => (
  <StyledFooter>
    <BsChevronUp />
    <ProjectLinks />
    <div>
      © {new Date().getFullYear()}, Built with&nbsp;
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </div>
  </StyledFooter>
)

export default Footer
