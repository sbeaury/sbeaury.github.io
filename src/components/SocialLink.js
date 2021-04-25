import React from "react"
import "react-tippy/dist/tippy.css"
import { Tooltip } from "react-tippy"
import styled from "styled-components"
import PropTypes from "prop-types"
import { FaGithub } from "react-icons/fa"
import { FiExternalLink } from "react-icons/fi"

const IconLink = styled.a`
  transition: color 0.5s;
  text-decoration: none;
  padding: 0.5rem;
  color:#111;

  &:hover{
    transform: scale(1.02);
    color: #3dc0b0;
  }
  }
`

const SocialLink = ({ name, url, repo }) => (
  <Tooltip title={name} position="bottom" trigger="mouseenter" arrow={false}>
    <IconLink
      href={repo || url}
      target="_blank"
      rel="noreferrer"
      aria-label={name}
    >
      {(repo && <FaGithub size={30} />) ||
        (url && <FiExternalLink size={30} />)}
    </IconLink>
  </Tooltip>
)

SocialLink.propTypes = {
  fontAwesomeIcon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  color: PropTypes.string,
}

export default SocialLink
