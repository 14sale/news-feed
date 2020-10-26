import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom'
import styles from './TopNewsByCategories.module.css'

import ContentWrapepr from '../Wrappers/ContentWrapper'
import NewsCard from '../NewsCard/NewsCard'
import Article from '../Article/Article'
import Loader from '../Loader/Loader'

import { CountryContext } from '../../contexts/CountryContext'
import { NewsByCategoryContext } from '../../contexts/NewsByCategoryContext'

import Slider from 'react-slick';
import './Slider.css';

const TopNewsByCategories = () => {
  const { activeCountry, setSelectorDisabled } = useContext(CountryContext)
  const { newsByCategory, loading, articleForPreview, setArticleForPreview } = useContext(NewsByCategoryContext)

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

  const sliders = !loading && newsByCategory && newsByCategory.map((category, index) => {
    const newsCards = category && category.articles && category.articles.slice(0, 5).map((article, i) => {
      return <NewsCard key={i} article={article} articlePreview={articlePreviewHandler} />
    });

    return (
      <section className={styles.categoryNewsSection} key={index}>
        <h3>Top 5 <Link to={`/category/${category.code}`}>{category.name}</Link> news</h3>
        {!loading && !newsCards && <p>The service is currently unable to load {category.code} news, please try again later.</p>}
        {!loading && newsCards && <Slider {...sliderSettings}> {newsCards} </Slider>}
      </section>
    )

  })

  useEffect(() => {
    return () => {
      articleForPreview && backFromArticlePreview()
    };
  })

  return (
    <section>
      {
        articleForPreview
        && <Article
          article={articleForPreview}
          backFromPreview={backFromArticlePreview}
          backFromPreviewText="Back to categories"
        />
      }
      {
        !articleForPreview
        && <ContentWrapepr>
          <section>
            <h1 className="page-title">{`Top 5 news by categories from ${activeCountry.shortName}`}</h1>
          </section>
          <section>
            {loading && <div className={styles.loaderWrapper}> <Loader /> </div>}
            {!loading && sliders}
          </section>
        </ ContentWrapepr>
      }
    </section>
  )
}

export default TopNewsByCategories;