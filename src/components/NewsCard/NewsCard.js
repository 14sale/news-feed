import React from 'react'
import { Link } from 'react-router-dom'
import styles from './NewsCard.module.css'

const NewsCard = props => {

  const hideMe = event => {
    event.target.style.display = 'none';
  }

  const { urlToImage, title, description } = props.article;

  return (
    <div className={styles.card}>
      <div className={styles.img} onClick={(e) => props.articlePreview(e, props.article)}>
        {urlToImage && <img src={urlToImage} alt={title} onError={hideMe} />}
      </div>
      <h3><Link to='/' onClick={(e) => props.articlePreview(e, props.article)}>{title}</Link></h3>
      <p>{description}</p>

      <Link to="/" className={styles.readMore} onClick={(e) => props.articlePreview(e, props.article)}>Read more</Link>
    </div>
  )
}

export default NewsCard
