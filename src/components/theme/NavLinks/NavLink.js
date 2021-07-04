import PropTypes from "prop-types"
import React from "react"
import { SectionLink } from "react-scroll-section"
import { NavItem } from "../styles"

const NavLink = ({ section, children, darkMode }) => (
  <SectionLink section={section}>
    {link => (
      <NavItem
        onClick={link.onClick}
        selected={link.isSelected}
        darkMode={darkMode}
      >
        {children}
      </NavItem>
    )}
  </SectionLink>
)

NavLink.propTypes = {
  section: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default NavLink
