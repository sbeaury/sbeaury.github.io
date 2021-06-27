import React, { useEffect, useState } from "react"
import { Wrapper, Bar } from "./styles"

const Hamburger = ({ onClick }) => {
  const [showSidebar, setShowsidebar] = useState(false)

  const toggleSidebar = () => {
    setShowsidebar(prevState => !prevState)
  }

  useEffect(() => {
    onClick(showSidebar)
  }, [onClick, showSidebar])

  return (
    <Wrapper onClick={toggleSidebar}>
      <Bar top show={showSidebar} />
      <Bar mid show={showSidebar} />
      <Bar bottom show={showSidebar} />
    </Wrapper>
  )
}

export default Hamburger
