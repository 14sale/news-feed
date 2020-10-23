import React, { useState, useEffect, useContext } from 'react'
import { CountryContext } from './CountryContext'
import { apiKey, apiHost } from '../utils/NewsApiOrg'

const NewsByCategoryContext = React.createContext()
const NewsByCategoryContextProvider = props => {
  const { activeCountry } = useContext(CountryContext)
  const [categories, setCategories] = useState([
    {
      name: 'Business',
      code: 'business'
    }, {
      name: 'Entertainment',
      code: 'entertainment'
    }, {
      name: 'General',
      code: 'general'
    }, {
      name: 'Health',
      code: 'health'
    }, {
      name: 'Science',
      code: 'science'
    }, {
      name: 'Sports',
      code: 'sports'
    }, {
      name: 'Technology',
      code: 'technology'
    },
  ])
  const [loading, setLoading] = useState(true)
  const [newsByCategory, setNewsByCategory] = useState([])
  const [articleForPreview, setArticleForPreview] = useState(null)

  useEffect(() => {
    setLoading(true)
    const fetchNews = async () => {
      return Promise.all(categories.map(async category => {
        return new Promise(resolve => {
          const url = `${apiHost}top-headlines?country=${activeCountry.code}&category=${category.code}&apiKey=${apiKey}&pageSize=9`
          fetch(url)
            .then(newsRaw => newsRaw.json())
            .then(news => resolve({ ...category, 'articles': news.articles }))
            .catch(error => {
              console.log(error);
            });
        })
      }))
    }

    const dataFromLocalStorage = JSON.parse(localStorage.getItem(`newsByCategory-${activeCountry.code}`))
    if (dataFromLocalStorage) {
      setNewsByCategory(dataFromLocalStorage)
      setLoading(false)
    } else {
      fetchNews().then(news => {
        setNewsByCategory(news)
        localStorage.setItem(`newsByCategory-${activeCountry.code}`, JSON.stringify(news));
        setLoading(false)
      })
    }

  }, [activeCountry, categories])

  return (
    <NewsByCategoryContext.Provider value={{
      loading,
      newsByCategory,
      setNewsByCategory,
      articleForPreview,
      setArticleForPreview,
      categories,
      setCategories
    }}>
      {props.children}
    </NewsByCategoryContext.Provider>
  )
}

export { NewsByCategoryContextProvider, NewsByCategoryContext }