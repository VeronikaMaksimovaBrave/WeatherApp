import React, { useEffect, useState } from 'react'

import styles from '../../styles/Weather.main.module.css'
import { WeatherSideBar } from './weatherSideBar'
import { WeatherToday } from './weatherToday'

export const WeatherMain = () => {
  return (
    <div className={styles.container}>
      <WeatherToday />

      <WeatherSideBar />
    </div>
  )
}
