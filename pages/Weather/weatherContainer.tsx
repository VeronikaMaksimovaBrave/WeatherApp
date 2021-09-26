// import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styles from '../../styles/Weather.container.module.css'
import { WeatherMain } from './weatherMain'
import { WeatherAllDays } from './weatherAllDays'
// import { lang, url, apiKey } from './api/config'


export const WeatherContainer = () => {
  // const [date, setDate] = useState({})

  // const lat = 55.796289
  // const lon = 49.108795

  // const urlGetWeather = `${url}?lat=${lat}&lon=${lon}&lang=${lang}`


  // useEffect(() => {
  //   axios.get(urlGetWeather,{
  //     headers: {
  //       'X-Yandex-API-Key': apiKey,
  //     },
  //   })
  //     .then(response => {
  //       console.log(response.data)
  //     })
  //     .catch(err => console.log(err))
  // }, [urlGetWeather])


  return (
    <div className={styles.container}>
      <WeatherMain />
      
      <WeatherAllDays />                                                                                                                                                                                                                                                                                                                                  
    </div>
  )
}