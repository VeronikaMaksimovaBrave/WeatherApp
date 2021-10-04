// import axios from 'axios'
import React from 'react'

import { AllDays } from '../all-days'
import { Main } from '../main'
import { useStyles } from './styles'
// import { lang, url, apiKey } from './api/config'

export const Container = () => {
  const classes = useStyles()
  // const [date, setDate] = useState({})

  // const lat = 55.796289
  // const lon = 49.108795

  // const urlGetWeather = `api.openweathermap.org/data/2.5/forecast?id=524901&appid=26c8e89835bd408dc47e47bccebc56c5`

  // useEffect(() => {
  //   axios
  //     .get(urlGetWeather)
  //     .then(response => {
  //       console.log(response.data)
  //     })
  //     .catch(err => console.log(err))
  // }, [urlGetWeather])

  return (
    <div className={classes.container}>
      <Main />

      <AllDays />
    </div>
  )
}
