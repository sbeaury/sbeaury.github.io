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

const Header = () => (
  <HeaderContainer>
    <MenuContainer>
      <MenuItem section="portfolio">Portfolio</MenuItem>
      <MenuItem section="about">About</MenuItem>
    </MenuContainer>
  </HeaderContainer>
);

export default Header;
