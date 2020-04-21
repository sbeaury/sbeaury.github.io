import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import { Shake } from "reshake";

const GatsbyImage = styled(Img)`
  transform: translateY(
    ${props => `${[0, 1, 0, 1, 0, 1, 0][props.index] * -30}px`}
  );
  margin: 0.5rem;
  @media (max-width: 375px) {
    margin: 1rem;
  }
`;

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
  `);

  return data.techImages.edges.map((elt, index) => (
    <Shake
      h={1}
      v={0}
      r={0}
      dur={450}
      int={10}
      max={100}
      fixed={true}
      fixedStop={false}
      freez={true}
    >
      <GatsbyImage fluid={elt.node.childImageSharp.fluid} index={index} />
    </Shake>
  ));
};

export default Image;
