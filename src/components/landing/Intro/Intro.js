import React, { useContext } from "react"
import { FaLinkedin, FaGithub, FaDev } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import "react-tippy/dist/tippy.css"
import { Tooltip } from "react-tippy"
import Section from "../../common/Section"
import { Heading, Tagline, CnTower, LinkContainer, Link } from "./styles"
import ThemeContext from "../../theme/Context/ThemeContext"

const Intro = () => {
  const {
    theme: { darkMode },
  } = useContext(ThemeContext)

  return (
    <Section.Container id="home">
      <Heading>Hi, I'm Sébastien!</Heading>
      <Tagline darkMode={darkMode}>
        Full Stack Developer from
        <Tooltip
          title="Toronto"
          position="bottom"
          trigger="mouseenter"
          arrow={false}
        >
          <CnTower
            src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMS4xLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDE5LjkzMiAxOS45MzIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDE5LjkzMiAxOS45MzI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPgo8Zz4KCTxwYXRoIGQ9Ik0xMS45NjUsMTIuMDM2bC0wLjE5Mi0wLjU1M2gwLjA4MXYtMC42MDloLTAuODM2VjEwLjMzaC0wLjM5NFY5LjUxN2gtMC4yNDZ2LTIuMzRoMC4wNzEgICBjMC4xNzUsMCwwLjMxOS0wLjE0NywwLjMxOS0wLjMyNFY2LjcxMWMwLTAuMTc2LTAuMTQ2LTAuMzItMC4zMTktMC4zMmgtMC4xMzNWNC4wODhoLTAuMTA0VjIuNjgxaC0wLjEwMlYxLjM0N2gtMC4wNDJWMEg5Ljg2MSAgIHYxLjM0OEg5LjgxOXYxLjMzNEg5LjcxN3YxLjQwNkg5LjYxM3YyLjMwM0g5LjQ3N2MtMC4xNzYsMC0wLjMyLDAuMTQ2LTAuMzIsMC4zMnYwLjE0M2MwLDAuMTc3LDAuMTQ2LDAuMzI0LDAuMzIsMC4zMjRoMC4wNzF2Mi4zNCAgIEg5LjMwMnYwLjgxMkg4LjkzdjAuNTQ0SDguMTg2djAuNjA5aDAuMDUzbC0wLjEyNiwwLjU1M0g3LjUxNnYxLjIwNWgwLjAyOGwwLjIyOCwwLjQwNmgwLjA2N2MtMC4xMjEsMC4wODgtMC4xOTcsMC4yMy0wLjE5NywwLjM5MSAgIHYwLjA5YzAsMC4yNjgsMC4yMTQsMC40ODIsMC40NzEsMC40ODJoMC45MjFjLTAuMDA0LDEuNzI1LTAuMDUxLDEuNDI2LTAuMjI5LDUuMzIyaDIuMzIzYy0wLjE3OS0zLjg5Ni0wLjIyNy0zLjU5OC0wLjIzMS01LjMyMiAgIGgwLjk5NGMwLjI2LDAsMC40NzItMC4yMTUsMC40NzItMC40ODJ2LTAuMDljMC0wLjE2LTAuMDc5LTAuMzA1LTAuMTk5LTAuMzkzbDAuMjI0LTAuNDA0aDAuMDI5di0xLjIwNUgxMS45NjV6IE05LjEwOSwxMC41NzcgICBoMS43MTJ2MC4yNzNIOS4xMDlWMTAuNTc3eiBNMTEuNzY3LDEyLjAxNWgtMy40NlYxMS42NGgzLjQ2VjEyLjAxNXoiIGZpbGw9IiMwMDAwMDAiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K"
            alt=""
            darkMode={darkMode}
          />
        </Tooltip>
      </Tagline>

      <LinkContainer darkMode={darkMode}>
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/sbeaury"
          rel="noreferrer"
        >
          <FaLinkedin />
        </Link>
        <Link
          target="_blank"
          href="https://github.com/sbeaury"
          rel="noreferrer"
        >
          <FaGithub />
        </Link>
        <Link target="_blank" href="https://dev.to/sbeaury" rel="noreferrer">
          <FaDev />
        </Link>
        <Link target="_blank" href="mailto:sbeaury@gmail.com">
          <MdEmail />
        </Link>
      </LinkContainer>
    </Section.Container>
  )
}

export default Intro
