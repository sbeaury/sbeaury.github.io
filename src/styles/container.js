import styled from "styled-components"
import Headroom from "react-headroom"

const HeaderContainer = styled(Headroom)`
  position: absolute;
  width: 100%;
`

const MenuContainer = styled.div`
  margin-right: 2rem;
`

const SectionContainer = styled.div`
  min-height: 100vh;
  min-width: 320px;
  max-width: 1366px;
  display: flex;
  flex: 0 1 auto;
  flex-direction: column;
  justify-content: center;
  padding: 5em 1em;
  scroll-behavior: smooth;
`

export { HeaderContainer, MenuContainer, SectionContainer }
