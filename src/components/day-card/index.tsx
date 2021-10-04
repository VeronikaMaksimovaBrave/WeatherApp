import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import { Day } from 'src/interfaces/global'

import { useStyles } from './styles'

interface Props {
  day: Day
}

export const DayCard = (props: Props) => {
  const classes = useStyles()
  const { day } = props

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom>
          {day.title}
        </Typography>
        <Typography variant="body2" component="p">
          {day.date}
          <br />
          Иконка...
          <br />
          {day.temp}
          <br />
          {day.situation}
        </Typography>
      </CardContent>
    </Card>
  )
}
