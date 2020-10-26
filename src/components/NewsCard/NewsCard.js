/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react'
import { Link } from 'react-router-dom'
import styles from './NewsCard.module.css'

const NewsCard = props => {
  const hideMe = event => {
    const el = event.target
    el.style.display = 'none'
  }

  const {
    article: { urlToImage },
    article: { title },
    article: { description },
    articlePreview,
  } = props

  return (
    <div className={styles.card}>
      <div className={styles.img} onClick={e => articlePreview(e, props.article)}>
        {
          urlToImage
            ? (<img src={urlToImage} alt={title} onError={hideMe} />)
            : ''
        }
      </div>
      <h3><Link to="/" onClick={e => props.articlePreview(e, props.article)}>{title}</Link></h3>
      <p>{description}</p>

      <Link to="/" className={styles.readMore} onClick={e => props.articlePreview(e, props.article)}>Read more</Link>
    </div>
  )
}

export default NewsCard
