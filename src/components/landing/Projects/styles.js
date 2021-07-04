import styled from "styled-components"

const Grid = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 8fr;
  gap: 1.2rem 1.2rem;
  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 80%;
  justify-content: center;
`

const CardItem = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.11);
  border-radius: 4px;
  font-size: 14px;
  padding: 1rem;
  background-color: ${({ darkMode }) => (darkMode ? "#fff" : "transparent")};

  @media (max-width: 601px) {
    font-size: 16px;
  }
`

const Content = styled.div`
  padding: 1rem 0;
  min-height: 160px;
  color: ${({ darkMode }) => (darkMode ? "#fff" : "#111")};
`

const LinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export { Grid, CardContainer, CardItem, Content, LinkWrapper }
