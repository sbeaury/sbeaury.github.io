import React from "react"
import styled from "styled-components"
import "react-tippy/dist/tippy.css"
import Section from "../components/Section"
import ProjectLinks from "../components/ProjectLinks"
import background from "../images/background.jpg"

const BackgroundImg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100vw;
  z-index: -1;
  opacity: 0.8;
`

const Main = styled.main`
  min-height: calc(100vh - 21 px);
  width: 100%;
  justify-content: center;
  padding: 0 30px;
  text-align: center;
  color: #f0fff0;
`

const Intro = styled.div`
  font-size: 72px;
  font-weight: 600;
  @media (max-width: 375px) {
    font-size: 50px;
  }
`

const Tagline = styled.div`
  font-size: 1.5rem;
  margin-top: 1.5rem;
  margin-bottom: 2.5rem;
  font-weight: 100;
`

const Landing = () => (
  <Section id="landing">
    <BackgroundImg />
    <Main>
      <Intro>Hi, I'm Sébastien</Intro>
      <Tagline>Full Stack Web Developer</Tagline>
      <ProjectLinks />
    </Main>
  </Section>
)

export default Landing
