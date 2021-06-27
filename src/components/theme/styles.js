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
  height: 40px;
`

const NavContainer = styled.div`
  margin-right: 2rem;
  height: 100%;

  @media (max-width: 601px) {
    margin: 0;
`

const NavLinksContainer = styled.div`
  margin-right: 2rem;
  height: 100%;

  @media (max-width: 601px) {
    display: flex;
    flex-direction: column-reverse;
    justify-content: flex-end;
    align-items: center;
    z-index: 11;
    height: 100%;
    width: 50%;
    margin: 5rem auto 0 auto;
    font-size: 18px;
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

export {
  FooterContainer,
  HeaderContainer,
  NavContainer,
  NavLinksContainer,
  NavItem,
}
