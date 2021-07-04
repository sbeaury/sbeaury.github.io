import React from "react"
import { ToggleWrapper, Toggle } from "./styles"

const ThemeToggle = ({ onClick, darkMode }) => {
  return (
    <ToggleWrapper onClick={onClick}>
      <Toggle darkMode={darkMode} />
    </ToggleWrapper>
  )
}

export default ThemeToggle
