import React, { useState, useEffect, useContext } from 'react'
import { CountryContext } from '../contexts/CountryContext'
import { apiKey, apiHost } from '../utils/NewsApiOrg'

const TopNewsContext = React.createContext()

const TopNewsContextProvider = props => {
  const { activeCountry } = useContext(CountryContext)

  const [loading, setLoading] = useState(true)
  const [topNews, setTopNews] = useState([])
  const [articleForPreview, setArticleForPreview] = useState(null)

  useEffect(() => {

    const fetchNews = async () => {
      return new Promise(resolve => {
        const url = `${apiHost}top-headlines?country=${activeCountry.code}&apiKey=${apiKey}&pageSize=9`
        fetch(url)
          .then(newsRaw => newsRaw.json())
          .then(news => resolve(news.articles))
          .catch(error => {
            console.log(error);
          });
      })
    }

    const dataFromLocalStorage = JSON.parse(localStorage.getItem(`topNews-${activeCountry.code}`))
    if (dataFromLocalStorage) {
      setTopNews(dataFromLocalStorage)
      setLoading(false)
    } else {
      fetchNews().then(news => {
        setTopNews(news)
        localStorage.setItem(`topNews-${activeCountry.code}`, JSON.stringify(news));
        setLoading(false)
      })
    }
  }, [activeCountry])

  return (
    <TopNewsContext.Provider value={{
      loading,
      topNews,
      setTopNews,
      articleForPreview,
      setArticleForPreview
    }}>
      {props.children}
    </TopNewsContext.Provider>
  )
}

export { TopNewsContextProvider, TopNewsContext }