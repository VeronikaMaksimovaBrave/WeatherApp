import React from 'react'

import { SideBar } from '../side-bar'
import { Today } from '../today'
import { useStyles } from './styles'

export const Main = () => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <Today />

      <SideBar />
    </div>
  )
}
