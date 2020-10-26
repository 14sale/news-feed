import React from 'react'
import Styles from './Footer.module.css'
import ContentWrapper from '../Wrappers/ContentWrapper'

const Footer = () => (
  <footer className="main-footer">
    <ContentWrapper>
      <div className={Styles.content}>
        <p>NewsFeed.com</p>
      </div>
    </ContentWrapper>
  </footer>
)

export default Footer
