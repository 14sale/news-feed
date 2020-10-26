import React, { useEffect } from 'react'
import styles from './Article.module.css'
import ContentWrapepr from '../Wrappers/ContentWrapper'
import { dateFormat } from '../../utils/HelperFunctions'

const Article = props => {
  const {
    article: { urlToImage },
    article: { title },
    article: { publishedAt },
    article: { published = dateFormat(publishedAt) },
    article: { author },
    article: { content },
    backFromPreview,
    backFromPreviewText,
  } = props

  useEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <ContentWrapepr>
      <button type="button" className={styles.backToList} onClick={backFromPreview}>
        <i className="arrow left" />
        {backFromPreviewText || 'Back'}
      </button>

      <h1 className="page-title">{title}</h1>

      <div className={styles.meta}>
        <p>Published: {published} by {author}</p>
      </div>

      <div className={styles.content}>
        <img src={urlToImage} alt={title} />
        <p>{content}</p>
      </div>

    </ContentWrapepr>
  )
}

export default Article
