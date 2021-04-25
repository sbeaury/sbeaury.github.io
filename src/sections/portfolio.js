import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Section from "../components/Section"
import Title from "../styles/Title"
import Card from "../components/Card"
import styled from "styled-components"

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 80%;
  justify-content: center;
`

const Portfolio = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              title
              description
              url
              repo
              project
            }
            excerpt
          }
        }
      }
    }
  `)

  return (
    <Section id="portfolio">
      <Title>Portfolio</Title>
      <CardContainer>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Card
            key={node.id}
            title={node.frontmatter.title}
            description={node.frontmatter.description}
            repo={node.frontmatter.repo}
            url={node.frontmatter.url}
            tag={node.frontmatter.tag}
          />
        ))}
      </CardContainer>
    </Section>
  )
}

export default Portfolio
