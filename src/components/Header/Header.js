import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import styles from './Header.module.css'
import ContentWrapepr from '../Wrappers/ContentWrapper'
import Logo from '../../assets/NewsFeed.com.svg'
import { CountryContext } from '../../contexts/CountryContext'

const Header = () => {
  const {
    countries,
    activeCountry,
    setActiveCountry,
    selectorDisabled,
  } = useContext(CountryContext)

  const changeCountryHandler = (e, country) => {
    e.preventDefault()
    setActiveCountry(country)
  }

  const [showMenu, setShowMenu] = useState(false)
  const hamburgerHandler = e => {
    e.preventDefault()
    setShowMenu(!showMenu)
  }

  const showMenuClass = showMenu ? styles.showMenu : styles.hideMenu
  const selectorTitle = selectorDisabled ? 'Country select is disabled on article view' : 'Select country'

  const countriesList = countries.map((country, index) => {
    const activeClass = activeCountry.code === country.code ? styles.countryItemActive : ''
    const disabledClass = selectorDisabled ? styles.disabled : ''

    return (
      <a
        key={index}
        onClick={e => changeCountryHandler(e, country)}
        className={`${styles.menuItem} ${styles.countryItem} ${activeClass} ${disabledClass}`}
        href="/"
      >{country.shortName}
      </a>
    )
  })

  return (
    <section>
      <ContentWrapepr>
        <div className={styles.header}>
          <div className={styles.logo}>
            <Link to="/">
              <img src={Logo} alt="NewsFeed.com" />
            </Link>
          </div>

          <nav className={`${styles.menu} ${showMenuClass}`}>

            <a onClick={e => hamburgerHandler(e)} href="/" className={styles.hamburger}>
              <span />
              <span />
              <span />
            </a>

            <NavLink className={styles.menuItem} activeClassName={styles.active} exact to="/">Top News</NavLink>
            <NavLink className={styles.menuItem} activeClassName={styles.active} to="/categories">Categories</NavLink>
            <NavLink className={styles.menuItem} activeClassName={styles.active} to="/search">Search</NavLink>

            <div className={styles.menuCoutrySwitcher} title={selectorTitle}>
              {countriesList}
            </div>
          </nav>

        </div>
      </ContentWrapepr>
    </section>
  )
}

export default Header
