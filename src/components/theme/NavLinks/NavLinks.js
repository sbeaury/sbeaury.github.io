import React, { useContext } from "react"
import NavLink from "./NavLink"
import ThemeToggle from "../ThemeToggle/ThemeToggle"
import { NavLinksContainer } from "../styles"
import ThemeContext from "../Context/ThemeContext"

const ITEMS = ["About", "Portfolio", "Blog"]

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
      {ITEMS.map(item => (
        <NavLink key={item} section={item.toLowerCase()} darkMode={darkMode}>
          {item}
        </NavLink>
      ))}
      <ThemeToggle onClick={e => switchMode(e, darkMode)} darkMode={darkMode} />
    </NavLinksContainer>
  )
}

export default NavLinks
