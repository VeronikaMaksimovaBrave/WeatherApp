import { city } from 'api/citiesList.json'
import SearchBar from 'material-ui-search-bar'
import React, { useContext, useState } from 'react'
import { CityContext } from 'src/context'

import { useStyles } from './styles'

export const Search = () => {
  const classes = useStyles()
  const [value, setValue] = useState('')

  const findCity = date => {
    const code = city.find(i => i.name == date)?.city_id

    return code
  }

  return (
    <div className={classes.root}>
      <SearchBar
        value={value}
        onChange={setValue}
        onRequestSearch={req => findCity(req)}
        className={classes.search}
      />
    </div>
  )
}
