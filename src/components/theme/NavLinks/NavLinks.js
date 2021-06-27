import React, { useContext } from "react"
import NavLink from "./NavLink"
import ThemeToggle from "./ThemeToggle"
import { NavLinksContainer } from "../styles"
import ThemeContext from "../Context/ThemeContext"

const NavLinks = () => {
  const {
    toggleDarkMode,
    theme: { darkMode },
  } = useContext(ThemeContext)

  const switchMode = (e, darkMode) => {
    toggleDarkMode(!darkMode)
  }

  return (
    <NavLinksContainer>
      <NavLink section="blog">Blog</NavLink>
      <NavLink section="portfolio">Portfolio</NavLink>
      <NavLink section="about">About</NavLink>
      <ThemeToggle onClick={e => switchMode(e, darkMode)} darkMode={darkMode} />
    </NavLinksContainer>
  )
}

export default NavLinks
