import React, { useContext } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Section from "../../../components/common/Section"
import Title from "../../../components/common/Title"
import Card from "./Card"
import { Grid } from "./styles"
import ThemeContext from "../../theme/Context/ThemeContext"

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
            }
            excerpt
          }
        }
      }
    }
  `)

  const {
    theme: { darkMode },
  } = useContext(ThemeContext)

  return (
    <Section.Container id="portfolio">
      <Title>Portfolio</Title>
      <Grid>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Card
            key={node.id}
            title={node.frontmatter.title}
            description={node.frontmatter.description}
            repo={node.frontmatter.repo}
            url={node.frontmatter.url}
            darkMode={darkMode}
          />
        ))}
      </Grid>
    </Section.Container>
  )
}

export default Portfolio
