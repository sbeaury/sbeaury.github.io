import React from "react";
import Section from "../components/section";
import Image from "../components/image";
import styled from "styled-components";
import Title from "../components/title";

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
  max-width: 50vh;

  //nesting wrapper
  .gatsby-image-wrapper {
    width: 50px;
  }

  @media (max-width: 375px) {
    max-width: 30vh;
    flex-wrap: wrap;
    margin-top: 1rem;
  }
`;

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
    <Container>
      <Image />
    </Container>
  </Section.Container>
);

export default About;
