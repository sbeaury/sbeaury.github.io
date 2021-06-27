import styled from "styled-components"

const Wrapper = styled.ul`
  position: relative;
  margin: 20px 20px 0 auto;
  padding: 0;
  width: 30px;
  height: 20px;
  cursor: pointer;
  z-index: 11;

  @media (min-width: 601px) {
    display: none;
  }
`

const Bar = styled.li`
  list-style: none;
  position: absolute;
  width: 100%;
  height: 5px;
  background-color: #080808;
  transition: transform 200ms cubic-bezier(0.23, 1, 0.32, 1);

  top: ${props => (props.top ? 0 : props.bottom ? "100%" : "50%")};

  ${({ show, top }) =>
    show &&
    top &&
    `
    transform: translateY(11px) rotate(45deg);
	  `}

  ${({ show, mid }) =>
    show &&
    mid &&
    `
    transform: scale(0);
	  `}


  ${({ show, bottom }) =>
    show &&
    bottom &&
    `
  
    transform: translateY(-10px) rotate(-45deg); 
    `}
`

const Overlay = styled.div`
  display: none;

  @media (min-width: 601px) {
    display: none;
  }

  ${({ show }) =>
    show &&
    `
    display: block;
    position:absolute;
    right: 0;
    top: 0;
    height: 100vh;
    width: 70%;
    z-index: 10;
    background-color: rgb(255, 255, 255);
	`}
`

export { Wrapper, Bar, Overlay }
