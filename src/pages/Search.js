import React, { useContext, useState } from 'react';
import ContentWrapepr from '../components/Wrappers/ContentWrapper'
import ArticlesList from '../components/ArticlesList/ArticlesList'
import Loader from '../components/Loader/Loader'
import Article from '../components/Article/Article'

import { CountryContext } from '../contexts/CountryContext'
import { TopNewsContext } from '../contexts/TopNewsContext'

const Search = () => {
  const { activeCountry, setSelectorDisabled } = useContext(CountryContext)
  const { topNews } = useContext(TopNewsContext)
  const [searchResults, setSearchResults] = useState([])
  const [articleForPreview, setArticleForPreview] = useState(null)
  const [loading, setLoading] = useState(false)

  const searchHandler = (e) => {
    setLoading(true)

    const value = e.target.value
    let results = [];

    if (value.length > 3) {
      topNews.map((item, i) => {
        if (item.description && item.description.indexOf(value) !== -1) {
          results.push(item)
        }
        return item
      })
    }

    console.log(results)
    setSearchResults(results)

    setTimeout(() => {
      setLoading(false)
    }, 300);

  }

  const articlePreviewHandler = (e, article) => {
    e.preventDefault()
    setSelectorDisabled(true)
    setArticleForPreview(article)
  }

  const backFromArticlePreview = () => {
    setSelectorDisabled(false)
    setArticleForPreview(null)
  }

  const NotFoundTemplate = () => {
    return (
      <>
        <h1 className="page-title">Page not found</h1>
        <p>If you entered a web address please check it was correct.</p>
      </>
    )
  }

  return (
    <>
      {
        articleForPreview
        && <Article
          article={articleForPreview}
          backFromPreview={backFromArticlePreview}
          backFromPreviewText={`Back to search`}
        />
      }

      <ContentWrapepr>
        {
          !articleForPreview ?
            <div className="mb-5">
              <h1 className="page-title text-center">{`Search top news from ${activeCountry.name}`}</h1>
              <input id="searchInput" className="d-block m-auto searchInput" type="text" onChange={searchHandler} />
            </div>
            : ''
        }

        {loading && <Loader />}
        {!loading && !searchResults && <NotFoundTemplate />}
        {
          !loading
          && !articleForPreview
          && searchResults
          && <>
            <ArticlesList
              articles={searchResults}
              articlePreviewHandler={articlePreviewHandler}
              backFromArticlePreview={backFromArticlePreview} />
          </>
        }
      </ContentWrapepr>
    </>
  )
}

export default Search;