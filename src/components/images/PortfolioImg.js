import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const GatsbyImage = styled(Img)`
  margin: 0.5rem;
  @media (max-width: 375px) {
    margin: 1rem;
  }
`

const PortfolioImg = ({ image }) => {
  const data = useStaticQuery(graphql`
    query {
      portfolioImages: allFile(
        filter: { relativeDirectory: { eq: "portfolio" } }
      ) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const projectImg = data.portfolioImages.edges.filter(edge =>
    edge.node.childImageSharp.fluid.src.includes(image)
  )[0].node.childImageSharp.fluid

  data.portfolioImages.edges.forEach((edge, index) => {
    console.log(edge.node.childImageSharp.fluid.src.includes(image))
  })

  return <GatsbyImage fluid={projectImg} />
}

export default PortfolioImg
