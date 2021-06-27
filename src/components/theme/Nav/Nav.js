import React, { useState } from "react"
import NavBar from "../NavBar/NavBar"
import Hamburger from "../SideBar/Hamburger"
import SideBar from "../SideBar/SideBar"
import { NavContainer } from "../styles"

const Nav = () => {
  const [showSidebar, setShowsidebar] = useState(false)
  const handleClick = show => {
    setShowsidebar(show)
  }
  return (
    <NavContainer>
      <NavBar />
      <Hamburger onClick={handleClick} />
      <SideBar show={showSidebar} />
    </NavContainer>
  )
}

export default Nav
