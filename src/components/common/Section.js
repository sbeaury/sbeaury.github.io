import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Section } from "react-scroll-section"

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  max-width: 1280px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 601px) {
    width: 90%;
  }
  @media (min-width: 993px) {
    width: 80%;
  }
`

const Container = ({ id, children }) => (
  <Section id={id}>
    <SectionContainer>{children}</SectionContainer>
  </Section>
)

Container.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default { Container }
