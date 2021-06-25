import React from "react"
import { default as Link } from "./SocialLink"
import { CardItem, Content, LinkWrapper } from "./styles"

const Card = ({ title, description, repo, url }) => (
  <CardItem>
    <Content>
      <h4>{title}</h4>
      <p>{description}</p>
    </Content>
    <LinkWrapper>
      <Link repo={repo} name={"Check repository"} />
      <Link url={url} name={"Visit website"} />
    </LinkWrapper>
  </CardItem>
)

export default Card
