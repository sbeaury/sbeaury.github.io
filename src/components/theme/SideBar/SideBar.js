import React from "react"
import NavLinks from "../NavLinks/NavLinks"
import { Overlay } from "./styles"

const SideBar = ({ show }) => {
  return (
    <>
      <Overlay show={show}>
        <NavLinks />
      </Overlay>
    </>
  )
}

export default SideBar
