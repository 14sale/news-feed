import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import styles from './TopNewsByCategories.module.css'

import ContentWrapepr from '../Wrappers/ContentWrapper'
import NewsCard from '../NewsCard/NewsCard'
import Article from '../Article/Article'
import Loader from '../Loader/Loader'

import { CountryContext } from '../../contexts/CountryContext'
import { NewsByCategoryContext } from '../../contexts/NewsByCategoryContext'

import './Slider.css'

const TopNewsByCategories = () => {
  const { activeCountry, setSelectorDisabled } = useContext(CountryContext)
  const {
    newsByCategory,
    loading,
    articleForPreview,
    setArticleForPreview,
  } = useContext(NewsByCategoryContext)

  const articlePreviewHandler = (e, article) => {
    e.preventDefault()
    setSelectorDisabled(true)
    setArticleForPreview(article)
  }

  const backFromArticlePreview = () => {
    setSelectorDisabled(false)
    setArticleForPreview(null)
  }

  const sliderSettings = {
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    infinite: false,
  }

  const UnableToLoadMessage = () => (
    <p>The service is currently unable to load news, please try again later.</p>
  )

  const sliders = !loading && newsByCategory && newsByCategory.map((category, index) => {
    const newsCards = category && category.articles
      && category.articles.slice(0, 5).map((article, i) => (
        <NewsCard
          key={i}
          articlePreview={articlePreviewHandler}
          {...article}
        />
      ))

    return (
      <section className={styles.categoryNewsSection} key={index}>
        <h3>Top 5 <Link to={`/category/${category.code}`}>{category.name}</Link> news</h3>
        {!loading && !newsCards && <UnableToLoadMessage />}
        {!loading && newsCards && <Slider {...sliderSettings}> {newsCards} </Slider>}
      </section>
    )
  })

  useEffect(() => () => {
    articleForPreview && backFromArticlePreview()
  })

  return (
    <section>
      { articleForPreview
        && (
          <Article
            {...articleForPreview}
            backFromPreview={backFromArticlePreview}
            backFromPreviewText="Back to categories"
          />
        )}
      { !articleForPreview
        && (
          <ContentWrapepr>
            <section>
              <h1 className="page-title">{`Top 5 news by categories from ${activeCountry.shortName}`}</h1>
            </section>
            <section>
              {loading && <div className={styles.loaderWrapper}> <Loader /> </div>}
              {!loading && !sliders && <UnableToLoadMessage />}
              {!loading && sliders}
            </section>
          </ContentWrapepr>
        )}
    </section>
  )
}

export default TopNewsByCategories
