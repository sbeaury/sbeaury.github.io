import styled from "styled-components"

const Wrapper = styled.ul`
  position: absolute;
  right: 2rem;
  top: 2rem;
  height: 50px;
  width: 50px;
`

const Bar = styled.li`
  list-style: none;
  position: absolute;
  width: 100%;
  height: 10px;
  background-color: #080808;
  margin-bottom: 2px;
`

export { Wrapper, Bar }
