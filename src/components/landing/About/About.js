import React from "react"
import Section from "../../common/Section"
import Title from "../../common/Title"
import { Image, ImgContainer } from "./styles"

const About = () => (
  <Section.Container id="about">
    <Title>About</Title>
    <p>
      I write{" "}
      <code style={{ background: "rgba(61, 192, 176, 0.5)" }}>Javascript</code>{" "}
      code.
    </p>
    <p>
      Technologies I'm currently using <code>||</code> exploring:
    </p>
    <ImgContainer>
      <Image />
    </ImgContainer>
  </Section.Container>
)

export default About
