import React from 'react'
import NewsCard from '../NewsCard/NewsCard'
import styles from './ArticlesList.module.css'

const UnableToLoadMessage = () => (
  <p>The service is currently unable to load news, please try again later.</p>
)

const ArticlesList = ({ articles, articlePreviewHandler }) => {
  const newsCards = articles && articles.map((article, i) => (
    <NewsCard
      key={i}
      articlePreview={articlePreviewHandler}
      {...article}
    />
  ))

  return (
    <section className={newsCards ? styles.wrapper : ''}>
      {newsCards || <UnableToLoadMessage />}
    </section>
  )
}

export default ArticlesList
