import { apiKey, url } from 'api/config'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { initStore, StoreContext } from 'src/context'

import { AllDays } from '../all-days'
import { Main } from '../main'
import { useStyles } from './styles'

export const Container = () => {
  const classes = useStyles()
  const [store, setStore] = useState(initStore)

  const city = 'izhevsk'

  const urlGetWeather = `${url}${city}&appid=${apiKey}`

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
      <div className={classes.container}>
        <Main />
        <AllDays />
      </div>
    </StoreContext.Provider>
  )
}
