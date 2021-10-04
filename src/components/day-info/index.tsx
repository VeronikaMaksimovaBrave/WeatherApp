import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import { Day } from 'src/interfaces/global'

import { useStyles } from './styles'

interface Info {
  place: string
  todayWeather: Day
}

export const DayInfo = () => {
  const classes = useStyles()

  const info: Info = {
    place: 'Казань',
    todayWeather: {
      title: 'Понедельник',
      date: '04.10.2021',
      temp: '+9',
      tempFact: '+5',
      situation: 'Солнце',
      wind: '2.8',
      windDir: 'Ю-З',
    },
  }

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom>
          {info.place}
        </Typography>
        <Typography variant="h4" component="p">
          {info.todayWeather.date}
          <br />
          {info.todayWeather.temp} (И) Ощущается как{' '}
          {info.todayWeather.tempFact}
          <br />
          {info.todayWeather.situation} (И)
          <br />
          (И) {info.todayWeather.wind} м/с {info.todayWeather.windDir}
        </Typography>
      </CardContent>
    </Card>
  )
}
