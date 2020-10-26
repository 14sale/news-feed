import React from 'react'
import Styles from './MainLayout.module.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const MainLayout = ({ children }) => (
  <>
    <div className={Styles.mainLayout}>
      <div className={Styles.mainWrapper}>
        <section className={Styles.contentLayout}>
          <Header />
          {children}
        </section>
        <Footer />
      </div>
    </div>
  </>
)

export default MainLayout
