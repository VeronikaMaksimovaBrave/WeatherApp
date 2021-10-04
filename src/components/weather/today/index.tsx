import React from 'react'
import { DayInfo } from 'src/components/day-info'
import { PartOfDay } from 'src/components/part-of-day'
import { Day } from 'src/interfaces/global'

import { useStyles } from './styles'

export const Today = () => {
  const classes = useStyles()

  const dayParts: Day[] = [
    {
      title: 'Утро',
      temp: '+9..+10',
      situation: 'Солнце',
      wind: '2.8',
    },
    {
      title: 'День',
      temp: '+11..+13',
      situation: 'Солнце',
      wind: '2.8',
    },
    {
      title: 'Вечер',
      temp: '+9..+10',
      situation: 'Солнце',
      wind: '2.8',
    },
    {
      title: 'Ночь',
      temp: '0/+2',
      situation: 'Солнце',
      wind: '2.8',
    },
  ]

  return (
    <div className={classes.container}>
      <div className={classes.dayInfo}>
        <DayInfo />
      </div>

      <div className={classes.dayParts}>
        {dayParts.map((dayPart, index) => (
          <PartOfDay dayPart={dayPart} key={index} />
        ))}
      </div>
    </div>
  )
}
