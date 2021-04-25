import React from "react"
import PropTypes from "prop-types"
import { Section as ScrollSection } from "react-scroll-section"
import { SectionContainer } from "../styles/container"

const Section = ({ id, children }) => (
  <ScrollSection id={id}>
    <SectionContainer>{children}</SectionContainer>
  </ScrollSection>
)

Section.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Section
