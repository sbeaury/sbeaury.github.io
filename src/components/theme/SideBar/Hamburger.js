import React, { useEffect, useState, useContext } from "react"
import { Wrapper, Bar } from "./styles"
import ThemeContext from "../Context/ThemeContext"

const Hamburger = ({ onClick }) => {
  const {
    theme: { darkMode },
  } = useContext(ThemeContext)

  const [showSidebar, setShowsidebar] = useState(false)

  const toggleSidebar = () => {
    setShowsidebar(prevState => !prevState)
  }

  useEffect(() => {
    onClick(showSidebar)
  }, [onClick, showSidebar])

  return (
    <Wrapper onClick={toggleSidebar}>
      <Bar top show={showSidebar} darkMode={darkMode} />
      <Bar mid show={showSidebar} darkMode={darkMode} />
      <Bar bottom show={showSidebar} darkMode={darkMode} />
    </Wrapper>
  )
}

export default Hamburger
