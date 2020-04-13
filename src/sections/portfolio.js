import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Section from "../components/section";
import Title from "../components/title";
import Card from "../components/card";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content:center;
  width:80%
  justify-content: center;
`;

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
  `);

  return (
    <Section.Container id="portfolio">
      <Title>Portfolio</Title>
      <CardContainer>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Card
            key={node.id}
            title={node.frontmatter.title}
            description={node.frontmatter.description}
            repo={node.frontmatter.repo}
            url={node.frontmatter.url}
          />
        ))}
      </CardContainer>
    </Section.Container>
  );
};

export default Portfolio;
