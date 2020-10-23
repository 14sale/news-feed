import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import styles from "./ArticlesList.module.css";

const ArticlesList = props => {
  const { articles, articlePreviewHandler } = props;
  const newsCards = articles.map((article, i) => {
    return (
      <NewsCard
        key={i}
        article={article}
        articlePreview={articlePreviewHandler}
      />
    );
  });

  return <div className={styles.wrapper}>{newsCards}</div>;
};

export default ArticlesList;
