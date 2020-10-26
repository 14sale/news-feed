import React, { useContext, useEffect } from 'react'
import styles from './TopNews.module.css'

import ContentWrapepr from '../Wrappers/ContentWrapper'
import NewsCard from '../NewsCard/NewsCard'
import Article from '../Article/Article'
import Loader from '../Loader/Loader'

import { CountryContext } from '../../contexts/CountryContext'
import { TopNewsContext } from '../../contexts/TopNewsContext'

function TopNews() {
  const { activeCountry, setSelectorDisabled } = useContext(CountryContext)
  const {
    loading,
    topNews,
    articleForPreview,
    setArticleForPreview,
  } = useContext(TopNewsContext)

  const articlePreviewHandler = (e, article) => {
    e.preventDefault()
    setSelectorDisabled(true)
    setArticleForPreview(article)
  }

  const backFromArticlePreview = () => {
    setSelectorDisabled(false)
    setArticleForPreview(null)
  }

  const newsCards = topNews && topNews.map((article, index) => {
    let toReturn = ''

    if (
      article.title
      && article.urlToImage
      && article.description
    ) {
      toReturn = (
        <NewsCard
          key={index}
          articlePreview={articlePreviewHandler}
          {...article}
        />
      )
    }

    return toReturn
  })

  useEffect(() => () => {
    articleForPreview && backFromArticlePreview()
  })

  return (
    <section>
      {
        articleForPreview
        && (
        <Article
          {...articleForPreview}
          backFromPreview={backFromArticlePreview}
          backFromPreviewText="Back to top news"
        />
        )
      }

      {
        !articleForPreview
        && (
        <ContentWrapepr>
          <h1 className="page-title">Top news from {activeCountry.name}</h1>

          {
            !loading
            && !newsCards
            && <p>The service is currently unable to load news, please try again later.</p>
          }

          {
            loading
            && <div className={styles.loaderWrapper}> <Loader /> </div>
          }

          <div className={styles.wrapper}>
            {!loading && newsCards}
          </div>

        </ContentWrapepr>
        )
      }
    </section>
  )
}

export default TopNews
