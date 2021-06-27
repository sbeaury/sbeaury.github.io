import styled from "styled-components"

const NavbarContainer = styled.div`
  display: inline-flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;

  @media (max-width: 601px) {
    display: none;
  }
`

export { NavbarContainer }
