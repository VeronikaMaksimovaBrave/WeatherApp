import React from 'react'
import { DayCard } from 'src/components/day-card'
import { Day } from 'src/interfaces/global'

import { useStyles } from './styles'

export const AllDays = () => {
  const classes = useStyles()

  const days: Day[] = [
    {
      title: 'Понедельник',
      date: '04.10.2021',
      temp: '+9/+1',
      situation: 'Солнце',
    },
    {
      title: 'Вторник',
      date: '05.10.2021',
      temp: '+9/+1',
      situation: 'Дождь',
    },
    {
      title: 'Среда',
      date: '06.10.2021',
      temp: '+9/+1',
      situation: 'Дождь',
    },
    {
      title: 'Четверг',
      date: '07.10.2021',
      temp: '+9/+1',
      situation: 'Дождь',
    },
    {
      title: 'Пятница',
      date: '08.10.2021',
      temp: '+9/+1',
      situation: 'Дождь',
    },
    {
      title: 'Суббота',
      date: '09.10.2021',
      temp: '+9/+1',
      situation: 'Дождь',
    },
    {
      title: 'Воскресенье',
      date: '10.10.2021',
      temp: '+9/+1',
      situation: 'Дождь',
    },
  ]

  return (
    <div className={classes.container}>
      {days.map((day: Day, index: number) => {
        return <DayCard key={index} day={day} />
      })}
    </div>
  )
}
