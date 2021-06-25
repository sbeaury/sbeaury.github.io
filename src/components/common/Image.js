import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const Image = () => {
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
    }
  `)

  return data.techImages.edges.map((elt, index) => (
    <Img fluid={elt.node.childImageSharp.fluid} index={index} />
  ))
}

export default Image
