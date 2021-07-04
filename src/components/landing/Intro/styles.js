import styled from "styled-components"

const Heading = styled.div`
  font-family: "Catamaran", sans-serif;
  font-size: 72px;
  font-weight: 800;
  @media (max-width: 601px) {
    font-size: 50px;
  }
`

const Tagline = styled.div`
  font-size: 1.5rem;
  margin-top: 1.5rem;
  margin-bottom: 2.5rem;
  font-weight: 100;
  color: ${({ darkMode }) => (darkMode ? "#fff" : "rgba(0, 0, 0, 0.6)")};
`

const CnTower = styled.img`
  width: 10%;
  // filter: invert(0.5);
  @media (max-width: 601px) {
    width: 15%;
  }
  filter: ${({ darkMode }) => (darkMode ? "invert(1)" : "invert(0.5)")};
`

const LinkContainer = styled.div`
  display: inline-flex;
  color: ${({ darkMode }) => (darkMode ? "#fff" : "#111")};
`

const Link = styled.a`
  display: inline-block;
  font-size: 2em;
  padding: 0 0.2rem 0 0.2rem;
  margin: 0.5rem;
  && :hover {
    cursor: pointer;
    transform: scale(1.02);
    color: #3dc0b0;
  }

  }
`

export { Heading, Tagline, CnTower, LinkContainer, Link }
