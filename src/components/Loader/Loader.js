import React from 'react'
import styles from './Loader.module.css'

function Loader() {
  return (
    <div className="loader-wrapper">
      <div className={`loader ${styles.loader}`}>
        <div />
        <div />
      </div>
    </div>
  )
}

export default Loader
