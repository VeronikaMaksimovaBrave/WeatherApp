import React from 'react'
import { WeatherContextProvider } from 'src/context'

import { AllDays } from '../all-days'
import { Main } from '../main'
import { useStyles } from './styles'

export const Container = () => {
  const classes = useStyles()

  return (
    <WeatherContextProvider>
        <div className={classes.container}>
          <Main />
          <AllDays />
        </div>
    </WeatherContextProvider>
  )
}
