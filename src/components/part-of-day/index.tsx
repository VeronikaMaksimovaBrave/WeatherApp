import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import { Day } from 'src/interfaces/global'

import { useStyles } from './styles'

interface Props {
  dayPart: Day
}

export const PartOfDay = (props: Props) => {
  const classes = useStyles()
  const { dayPart } = props

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom>
          {dayPart.title}
        </Typography>
        <Typography variant="body2" component="p">
          {dayPart.temp} (И)
          <br />
          {dayPart.wind} м.с (И)
        </Typography>
      </CardContent>
    </Card>
  )
}
