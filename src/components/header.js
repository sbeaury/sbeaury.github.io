import React from "react";
import Headroom from "react-headroom";
import styled from "styled-components";
import { MenuItem } from "./menu-item";

const HeaderContainer = styled(Headroom)`
  position: absolute;
  width: 100%;
`;

const MenuContainer = styled.div`
  margin-right: 2rem;
`;

const Link = styled.a`
  text-decoration: none;
  text-transform: capitalize;
  display: inline;
  float: right;
  margin: 1rem 1rem 1rem 1rem;
  cursor: pointer;

  &:hover {
    background: linear-gradient(#00000000 70%, rgba(61, 192, 176, 0.5) 30%);
  }
`;

const Header = () => (
  <HeaderContainer>
    <MenuContainer>
      <Link href="https://sbeaury.github.io/resume" target="_blank">
        Resume
      </Link>
      <MenuItem section="blog">Blog</MenuItem>
      <MenuItem section="portfolio">Portfolio</MenuItem>
      <MenuItem section="about">About</MenuItem>
    </MenuContainer>
  </HeaderContainer>
);

export default Header;
