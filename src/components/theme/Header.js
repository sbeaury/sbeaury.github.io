import React from "react"
import NavBar from "./NavBar/NavBar"
import SideBar from "./SideBar/SideBar"
import { HeaderContainer } from "./styles"

const Header = () => (
  <HeaderContainer>
    <NavBar />
    <SideBar />
  </HeaderContainer>
)

export default Header
