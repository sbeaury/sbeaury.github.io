import styled from "styled-components"
import Image from "../../common/Image"

const ImgContainer = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  max-width: 70%;
  margin-top: 2rem;

  @media (max-width: 601px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 1rem;
  }

  // nesting wrapper
  .gatsby-image-wrapper {
    width: 70px;
    margin: 0 5px;

    @media (max-width: 601px) {
      width: 50px;
      margin 5px 0;
    }
  }
`

export { Image, ImgContainer }
