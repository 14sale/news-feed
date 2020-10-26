import React from 'react'
import Styles from './ContentWrapper.module.css'

function ContentWrapper({children}) {
  return (
    <div className={Styles.wrapper}>
      {children}
    </div>
  )
}

export default ContentWrapper
