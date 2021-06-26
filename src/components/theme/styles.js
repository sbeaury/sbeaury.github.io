import styled from "styled-components"

const FooterContainer = styled.div`
  padding: 28rem 0 4rem 0;

  @media (max-width: 1960px) {
    padding: 14rem 0 4rem;
  }
`

const HeaderContainer = styled.nav`
  position: absolute;
  width: 100%;
`

const NavContainer = styled.div`
  margin-right: 2rem;

  @media (max-width: 601px) {
    display: none;
  }
`

const NavItem = styled.span`
  text-decoration: none;
  text-transform: capitalize;
  display: inline;
  float: right;
  margin: 1rem 1rem 1rem 1rem;
  cursor: pointer;

  &:hover {
    background: linear-gradient(#00000000 70%, rgba(61, 192, 176, 0.5) 30%);
  }
`

export { FooterContainer, HeaderContainer, NavContainer, NavItem }
