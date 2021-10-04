import React from 'react'

import { useStyles } from './styles'

export const CityImages = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <img
        className={classes.img}
        src="https://static.tildacdn.com/tild3432-3430-4433-a131-353236313964/excurs_57193_205905_.jpg"
      />
    </div>
  )
}
