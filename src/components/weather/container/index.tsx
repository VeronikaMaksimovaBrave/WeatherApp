import { apiKey, url } from 'api/config'
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { CityContext, initStore, StoreContext } from 'src/context'

import { AllDays } from '../all-days'
import { Main } from '../main'
import { useStyles } from './styles'

export const Container = () => {
  const classes = useStyles()
  const [store, setStore] = useState(initStore)
  const [context, setContext] = useContext(CityContext)

  const urlGetWeather = `${url}${context}&appid=${apiKey}`

  useEffect(() => {
    axios
      .get(urlGetWeather)
      .then(response => {
        setStore(response.data)
      })
      .catch(err => console.log(err))
  }, [urlGetWeather])

  return (
    <StoreContext.Provider value={{ store }}>
      <CityContext.Provider value={[city, setCity]}>
        <div className={classes.container}>
          <Main />
          <AllDays />
        </div>
      </CityContext.Provider>
    </StoreContext.Provider>
  )
}
