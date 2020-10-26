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
    urlToImage,
    title,
    description,
  } = props

  const { articlePreview, ...rest } = props

  return (
    <div className={styles.card}>
      <div className={styles.img} onClick={e => articlePreview(e, rest)}>
        {
          urlToImage
            ? (<img src={urlToImage} alt={title} onError={hideMe} />)
            : ''
        }
      </div>
      <h3><Link to="/" onClick={e => props.articlePreview(e, rest)}>{title}</Link></h3>
      <p>{description}</p>

      <Link to="/" className={styles.readMore} onClick={e => props.articlePreview(e, rest)}>Read more</Link>
    </div>
  )
}

export default NewsCard
