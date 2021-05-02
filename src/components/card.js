import React from "react"
import { default as Link } from "./SocialLink"
import PortfolioImg from "./images/PortfolioImg"
import styled from "styled-components"

const CardContainer = styled.div`
  display: inline-flex;
  width: 100%;

  &:not(:last-of-type) {
    margin-bottom: 10rem;
  }
`

const CardItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 50%;
  height: 100%;
  min-height: 10rem;
  margin: 0.2rem;

  & > h1 {
    font-size: 20px;
  }

  & > p {
    font-size: 15px;
    min-height: 4rem;
    margin: 0 0.25rem 0 0.25rem;
    text-align: left;

    @media (max-width: 375px) {
      font-size: 18px;
    }
  }
`

const LinkWrapper = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
`

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0;
  cursor: pointer;
  width: 50%;
  background: transparent;
  border-color: transparent;
  border-radius: 1rem;
  box-shadow: rgb(0 0 0 / 16%) 0px 0px 2.5rem;
  transition: all 0.3s ease-out 0s;

  // nesting wrapper

  .gatsby-image-wrapper {
    width: 100%;
    opacity: 0.7;
    transition: all 0.2s ease-in-out;
    margin: 0;

    &:hover {
      opacity: 1;
    }
  }

  @media (max-width: 375px) {
    max-width: 30vh;
    flex-wrap: wrap;
    margin-top: 1rem;
  }
`

const Card = ({ title, description, repo, url, image }) => (
  <CardContainer>
    <CardItem>
      <h1>{title}</h1>
      <p>{description}</p>
      <LinkWrapper>
        <Link repo={repo} name={"Check repository"} />
        <Link url={url} name={"Visit website"} />
      </LinkWrapper>
    </CardItem>
    <ImgContainer>
      <PortfolioImg source="portfolioImages" image={image} />
    </ImgContainer>
  </CardContainer>
)

export default Card
