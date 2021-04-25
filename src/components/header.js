import React from "react"
import { MenuContainer } from "../styles/container"
import Headroom from "react-headroom"
import styled from "styled-components"
import { MenuItem } from "./MenuItem"

const StyledHeadroom = styled(Headroom)`
  position: absolute;
  width: 100%;
  height: 20px;

  .headroom--unfixed {
    background: transparent;
  }

  .headroom--pinned,
  .headroom--scrolled {
    background: rgb(255, 255, 255);
    box-shadow: -1px 8px 15px -2px #777777;
  }
`

const Header = () => (
  <StyledHeadroom
  // style={{
  //   position: "absolute",
  //   width: "100%",
  //   background: "rgb(255, 255, 255)",
  //   boxShadow: "1px 1px 1px rgba(0,0,0,0.25)",
  // }}
  >
    <MenuContainer>
      <MenuItem section="blog">Blog</MenuItem>
      <MenuItem section="portfolio">Portfolio</MenuItem>
      <MenuItem section="about">About</MenuItem>
    </MenuContainer>
  </StyledHeadroom>
)

export default Header
