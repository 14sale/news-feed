import React from 'react'
import Styles from './ContentWrapper.module.css'

function ContentWrapper(props) {
  return (
    <div className={Styles.wrapper}>
      {props.children}
    </div>
  )
}

export default ContentWrapper
