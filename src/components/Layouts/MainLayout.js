import React from 'react'
import Styles from './MainLayout.module.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const MainLayout = props => {
  return (
    <React.Fragment>
      <div className={Styles.mainLayout}>
        <div className={Styles.mainWrapper}>
          <section className={Styles.contentLayout}>
            <Header />
            {props.children}
          </section>

          <Footer className={Styles.footer}>NewsFeed.com</Footer>
        </div>
      </div>
    </React.Fragment>
  )
}

export default MainLayout;
