import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import React from 'react'

import { useStyles } from './styles'

export const DayInfo = () => {
  const classes = useStyles()

  return (
        <Card className={classes.root}>
          {/* <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom>
              {store.name}
            </Typography>
            <Typography variant="h4" component="p">
              {store.dt}
              <br />
              {store.temp} (И) Ощущается как {store.main.feels_like}
              <br />
              {store.clouds.all} (И)
              <br />
              (И) {store.wind.speed} м/с {store.wind.deg}
            </Typography>
          </CardContent> */}
        </Card>)
}
