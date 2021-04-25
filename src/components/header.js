import React from "react"
import { HeaderContainer, MenuContainer } from "../styles/container"
import { MenuItem } from "./MenuItem"

const Header = () => (
  <HeaderContainer>
    <MenuContainer>
      <MenuItem section="blog">Blog</MenuItem>
      <MenuItem section="portfolio">Portfolio</MenuItem>
      <MenuItem section="about">About</MenuItem>
    </MenuContainer>
  </HeaderContainer>
)

export default Header
