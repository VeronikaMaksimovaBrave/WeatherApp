import React, { useEffect, useState } from 'react'
import styles from '../../styles/Weather.main.module.css'
import { WeatherToday } from './weatherToday'
import { WeatherSideBar } from './weatherSideBar'


export const WeatherMain = () => {


  return (
    <div className={styles.container}>
      <WeatherToday />

      <WeatherSideBar />                                                                                                                                                                                                                                                                                                                               
    </div>
  )
}
