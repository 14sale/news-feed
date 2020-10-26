import React from 'react'
import { Route } from 'react-router-dom'

import MainLayout from './components/Layouts/MainLayout'

import Home from './pages/Home'
import Categories from './pages/Categories'
import Category from './pages/Category'
import Search from './pages/Search'

import { CountryContextProvider } from './contexts/CountryContext'
import { TopNewsContextProvider } from './contexts/TopNewsContext'
import { NewsByCategoryContextProvider } from './contexts/NewsByCategoryContext'

function App() {
  return (
    <CountryContextProvider>
      <TopNewsContextProvider>
        <NewsByCategoryContextProvider>
          <MainLayout>
            <Route exact path="/" component={Home} />
            <Route exact path="/categories" component={Categories} />
            <Route path="/category" component={Category} />
            <Route exact path="/search" component={Search} />
          </MainLayout>
        </NewsByCategoryContextProvider>
      </TopNewsContextProvider>
    </CountryContextProvider>
  )
}

export default App
