import React from "react"
import NavLink from "../NavLink.js/NavLink"
import { NavContainer } from "../styles"

const NavBar = () => {
  return (
    <NavContainer>
      <NavLink section="blog">Blog</NavLink>
      <NavLink section="portfolio">Portfolio</NavLink>
      <NavLink section="about">About</NavLink>
    </NavContainer>
  )
}

export default NavBar
