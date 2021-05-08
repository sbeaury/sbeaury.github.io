import React from "react"
import styled from "styled-components"
import ProjectLinks from "./ProjectLinks"
import { FaChevronUp } from "react-icons/fa"
import { SectionLink } from "react-scroll-section"

const Arrow = styled(FaChevronUp)`
  margin-bottom: 1rem;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    transform: translateY(-30%);
  }
`

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
    <SectionLink section="landing">
      {link => <Arrow onClick={link.onClick} selected={link.isSelected} />}
    </SectionLink>
    <ProjectLinks />
    <div>
      © {new Date().getFullYear()}, Built with&nbsp;
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </div>
  </StyledFooter>
)

export default Footer
