import React from "react"
import { default as Link } from "./SocialLink"
import styled from "styled-components"

const CardItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 12rem;
  min-height: 10rem;
  margin: 0.2rem;
  border-style:solid;
  border-color: #3dc0b0;
  border-radius: 2px;

  &:hover {
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12),
        0 2px 1px -2px rgba(0, 0, 0, 0.2);
    background: rgba(61, 192, 176, 0.3);
  }

  & > h1 {
   font-size:20px;
  }

  & > p {
   font-size: 15px;
   min-height: 4rem;
   margin: 0 0.25rem 0 0.25rem;

   @media (max-width: 375px) {
    font-size:18px;
   }
  }
}

`

const LinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const Card = ({ title, description, repo, url }) => (
  <CardItem>
    <h1>{title}</h1>
    <p>{description}</p>
    <LinkWrapper>
      <Link repo={repo} name={"Check repository"} />
      <Link url={url} name={"Visit website"} />
    </LinkWrapper>
  </CardItem>
)

export default Card
