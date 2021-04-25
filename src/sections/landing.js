import React from "react"
import styled from "styled-components"
import { FaLinkedin, FaGithub, FaDev } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import "react-tippy/dist/tippy.css"
import { Tooltip } from "react-tippy"
import Section from "../components/Section"
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

const Link = styled.a`
  display: inline-flex;
  align-items: flex-end;
  justify-content: center;
  color: #f0fff0;
  font-size: 2em;
  min-width: 50px;
  padding: 0 0.2rem 0 0.2rem;
  margin: 0.5rem;
  && :hover {
    cursor: pointer;
    transform: scale(1.02);
    color: #3dc0b0;
  }
`

const Landing = () => (
  <Section id="home">
    <BackgroundImg />
    <Main>
      <Intro>Hi, I'm Sébastien</Intro>
      <Tagline>Full Stack Web Developer</Tagline>
      <Link
        target="_blank"
        href="https://www.linkedin.com/in/sbeaury"
        rel="noreferrer"
      >
        <FaLinkedin />
      </Link>
      <Link target="_blank" href="https://github.com/sbeaury" rel="noreferrer">
        <FaGithub />
      </Link>
      <Link target="_blank" href="https://dev.to/sbeaury" rel="noreferrer">
        <FaDev />
      </Link>
      <Link target="_blank" href="mailto:sbeaury@gmail.com">
        <MdEmail />
      </Link>
    </Main>
  </Section>
)

export default Landing
