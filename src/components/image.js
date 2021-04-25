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

const Image = ({ source, project }) => {
  const data = useStaticQuery(graphql`
    query {
      techImages: allFile(filter: { relativeDirectory: { eq: "tech" } }) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }

      portfolioImages: allFile(
        filter: { relativeDirectory: { eq: "portfolio" } }
      ) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  return data[source].edges.map((elt, index) => {
    if (elt.node.childImageSharp) {
      return (
        <GatsbyImage fluid={elt.node.childImageSharp.fluid} index={index} />
      )
    }
  })
}

export default Image
