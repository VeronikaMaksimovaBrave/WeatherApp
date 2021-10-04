import React from 'react'
import { CityImages } from 'src/components/city-images'
import { Search } from 'src/components/search'

import { useStyles } from './styles'

export const SideBar = () => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <Search />
      <CityImages />
    </div>
  )
}
