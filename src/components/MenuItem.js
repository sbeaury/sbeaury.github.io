import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { SectionLink } from "react-scroll-section"

const NavItem = styled.span`
  text-decoration: none;
  text-transform: capitalize;
  display: inline;
  float: right;
  margin: 1rem 1rem 1rem 1rem;
  cursor: pointer;
`

const MenuItem = ({ section, children }) => (
  <SectionLink section={section}>
    {link => (
      <NavItem onClick={link.onClick} selected={link.isSelected}>
        {children}
      </NavItem>
    )}
  </SectionLink>
)

MenuItem.propTypes = {
  section: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export { MenuItem }

export default styled
