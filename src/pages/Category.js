import React, { useContext, useEffect, useState } from 'react'

import ContentWrapepr from '../components/Wrappers/ContentWrapper'
import ArticlesList from '../components/ArticlesList/ArticlesList'
import Loader from '../components/Loader/Loader'
import Article from '../components/Article/Article'

import { CountryContext } from '../contexts/CountryContext'
import { NewsByCategoryContext } from '../contexts/NewsByCategoryContext'

const Category = ({ location }) => {
  const requestedCategory = location.pathname.split('/').pop()
  const { activeCountry, setSelectorDisabled } = useContext(CountryContext)

  const {
    newsByCategory,
    loading,
    articleForPreview,
    setArticleForPreview,
  } = useContext(NewsByCategoryContext)

  const [news, setNews] = useState(null)

  const articlePreviewHandler = (e, article) => {
    e.preventDefault()
    setSelectorDisabled(true)
    setArticleForPreview(article)
  }

  const backFromArticlePreview = () => {
    setSelectorDisabled(false)
    setArticleForPreview(null)
  }

  const resolveData = () => {
    for (let i = 0; i < newsByCategory.length; i += 1) {
      if (newsByCategory[i].code === requestedCategory) {
        setNews(newsByCategory[i])
        break
      }
    }
  }

  const NotFoundTemplate = () => (
    <>
      <h1 className="page-title">Page not found</h1>
      <p>If you entered a web address please check it was correct.</p>
    </>
  )

  useEffect(() => {
    resolveData()
    window.scrollTo(0, 0)

    return () => {
      articleForPreview && backFromArticlePreview()
    }
  })

  return (
    <>
      { articleForPreview
        && (
          <Article
            {...articleForPreview}
            backFromPreview={backFromArticlePreview}
            backFromPreviewText={`Back to ${news.code} news`}
          />
        )}

      <ContentWrapepr>
        {loading && <Loader />}
        {!loading && !news && <NotFoundTemplate />}
        {!loading
          && !articleForPreview
          && news
          && (
            <>
              <h1 className="page-title">{`Top ${news.code} news from ${activeCountry.name}`}</h1>
              <ArticlesList
                articles={news.articles}
                articlePreviewHandler={articlePreviewHandler}
                backFromArticlePreview={backFromArticlePreview}
              />
            </>
          )}
      </ContentWrapepr>
    </>
  )
}

export default Category
