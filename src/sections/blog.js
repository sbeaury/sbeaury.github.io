import React, { useState, useEffect } from "react";
import axios from "axios";
import Section from "../components/section";
import Title from "../components/title";
import styled from "styled-components";
import Moment from "react-moment";

const Article = styled.div`
  margin-left: auto;
  margin-right: auto;
  text-align: left;
  max-width: 70vh;
`;

const ArticleLink = styled.a`
  text-decoration: none;
`;

const Blog = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get("https://dev.to/api/articles?username=sbeaury")
      .then((results) => {
        setArticles(results.data.reverse());
      });
  }, []);

  return (
    <Section.Container id="blog">
      <Title>Blog</Title>
      {articles.map((article) => (
        <Article key={article.id}>
          <ArticleLink href={article.url} target="_blank" rel="noopener">
            <h3>{article.title}</h3>
          </ArticleLink>
          <small>
            <Moment format="MMMM, DD YYYY">{article.created_at}</Moment>
          </small>
          <p>{article.description}</p>
        </Article>
      ))}
    </Section.Container>
  );
};

export default Blog;
