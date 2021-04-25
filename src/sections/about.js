import React from "react"
import Section from "../components/Section"
import Image from "../components/Image"
import styled from "styled-components"
import Title from "../styles/Title"

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 0;
  max-width: 80%;
  cursor: pointer;

  // nesting wrapper

  .gatsby-image-wrapper {
    width: 3rem;
    opacity: 0.7;
    transition: all 0.2s ease-in-out;

    &:hover {
      opacity: 1;
    }
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
    <p>Technologies I'm currently using or exploring:</p>
    <Container>
      <Image />
    </Container>
  </Section>
)

export default About
