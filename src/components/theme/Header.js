import React from "react"
import Nav from "./Nav/Nav"
import SideBar from "./SideBar/SideBar"
import { HeaderContainer } from "./styles"

const Header = () => (
  <HeaderContainer>
    <Nav />
    <SideBar />
  </HeaderContainer>
)

export default Header
