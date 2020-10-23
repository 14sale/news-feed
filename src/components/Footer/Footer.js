import React from 'react'
import Styles from './Footer.module.css'
import ContentWrapper from '../Wrappers/ContentWrapper'

const Footer = (props) => {
  return (
    <React.Fragment>
      <section className={props.className}>
        <ContentWrapper>
          <div className={Styles.content}>
            {props.children}
          </div>
        </ContentWrapper>
      </section>
    </React.Fragment>
  )
}

export default Footer;
