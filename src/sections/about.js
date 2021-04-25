import React from "react"
import Section from "../components/Section"
import Image from "../components/Image"
import styled from "styled-components"
import Title from "../styles/Title"

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
  max-width: 50vh;

  //nesting wrapper
  .gatsby-image-wrapper {
    width: 70px;
  }

  @media (max-width: 375px) {
    max-width: 30vh;
    flex-wrap: wrap;
    margin-top: 1rem;
  }
`

const About = () => (
  <Section id="about">
    <Title>About</Title>
    <p>
      I write{" "}
      <code style={{ background: "rgba(61, 192, 176, 0.5)" }}>Javascript</code>{" "}
      code.
    </p>
    <p>
      Technologies I'm currently using <code>||</code> exploring:
    </p>
    <Container>
      <Image />
    </Container>
  </Section>
)

export default About
