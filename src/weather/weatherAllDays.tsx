import React, { useEffect, useState } from 'react'

import styles from '../../styles/Weather.allDays.module.css'

export const WeatherAllDays = () => {
  return (
    <div className={styles.container}>
      <p>Погода на 7 дней</p>
    </div>
  )
}
