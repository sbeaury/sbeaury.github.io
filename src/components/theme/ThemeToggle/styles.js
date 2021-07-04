import styled from "styled-components"

const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  cursor: pointer;
`

const Toggle = styled.div`
  display: inline-block;
  width: 14px;
  height: 14px;
  border-radius: 100%;
  transform: rotate(-75deg);
  box-shadow: 5px 3.75px 0 0 #d9fbff inset;

  ${({ darkMode }) =>
    darkMode &&
    `
    transform: rotate(0deg);
    box-shadow: 6px 6px 0 10px #f2c94c inset, 0 -10px 0 -5.4px #f2c94c,
    7px -7px 0 -6px #f2c94c, 10px 0 0 -5.4px #f2c94c, 7px 7px 0 -6px #f2c94c,
    0 10px 0 -5.4px #f2c94c, -7px 7px 0 -6px #f2c94c, -10px 0 0 -5.4px #f2c94c,
    -7px -7px 0 -6px #f2c94c;
    transition: box-shadow 400ms cubic-bezier(0.23, 1, 0.32, 1);
	  `}
`

export { ToggleWrapper, Toggle }
