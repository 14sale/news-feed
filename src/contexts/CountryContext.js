import React, { createContext, useState } from 'react'

const CountryContext = createContext()

const CountryContextProvider = props => {
  const [countries, setCountries] = useState([
    {
      name: 'United States',
      shortName: 'US',
      code: 'us'
    },
    {
      name: 'Great Britain',
      shortName: 'GB',
      code: 'gb'
    }
  ])

  const [activeCountry, setActiveCountry] = useState(countries[0])
  const [selectorDisabled, setSelectorDisabled] = useState(false)

  return (
    <CountryContext.Provider
      value={{
        countries,
        setCountries,
        activeCountry,
        setActiveCountry,
        selectorDisabled,
        setSelectorDisabled
      }}
    >
      {props.children}
    </CountryContext.Provider>
  )
}

export { CountryContextProvider, CountryContext }