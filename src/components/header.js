import React from "react"
import { MenuContainer } from "../styles/container"
import Headroom from "react-headroom"
import styled from "styled-components"
import { MenuItem } from "./MenuItem"

const StyledHeadroom = styled(Headroom)`
  position: absolute;
  width: 100%;
  height: 20px;
  color: white;

  .headroom {
    &--unfixed {
      background: transparent;
    }

    &--pinned,
    &--scrolled {
      background: rgb(255, 255, 255);
      box-shadow: -1px 8px 15px -2px #777777;

      span {
        &:hover {
          background: linear-gradient(
            #00000000 70%,
            rgba(61, 192, 176, 0.5) 30%
          );
        }
      }
    }

    &--unpinned {
      box-shadow: none;
    }

    &--unfixed {
      span {
        &:hover {
          background: linear-gradient(#00000000 70%, rgba(151, 222, 214) 30%);
        }
      }
    }
  }
`

const Header = () => (
  <StyledHeadroom>
    <MenuContainer>
      <MenuItem section="articles">Articles</MenuItem>
      <MenuItem section="portfolio">Portfolio</MenuItem>
      <MenuItem section="about">About</MenuItem>
    </MenuContainer>
  </StyledHeadroom>
)

export default Header
