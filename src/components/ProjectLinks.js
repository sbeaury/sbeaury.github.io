import React from "react"
import styled from "styled-components"
import { FaLinkedin, FaGithub, FaDev } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

const Link = styled.a`
  display: inline-flex;
  align-items: flex-end;
  justify-content: center;
  color: #f0fff0;
  font-size: 2em;
  min-width: 50px;
  padding: 0 0.2rem 0 0.2rem;
  margin: 0.5rem;

  &:hover {
    cursor: pointer;
    transform: scale(1.02);
    color: rgba(151, 222, 214);
  }
`

const ProjectLinks = () => {
  return (
    <div>
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
    </div>
  )
}

export default ProjectLinks
