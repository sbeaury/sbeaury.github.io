import React from "react"
import NavLink from "./NavLink"
import { NavLinksContainer } from "../styles"

const NavLinks = () => {
  return (
    <NavLinksContainer>
      <NavLink section="blog">Blog</NavLink>
      <NavLink section="portfolio">Portfolio</NavLink>
      <NavLink section="about">About</NavLink>
    </NavLinksContainer>
  )
}

export default NavLinks
