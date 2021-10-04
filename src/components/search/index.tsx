import { city } from 'api/citiesList.json'
import SearchBar from 'material-ui-search-bar'
import React from 'react'
import { useWeatherContext } from 'src/context'

import { useStyles } from './styles'

export const Search = () => {
  const classes = useStyles()
  const {searchValue, setSearchValue} = useWeatherContext()

  const findCity = date => {
    const code = city.find(i => i.name == date)?.city_id

    console.log(code)
  }

  return (
    <div className={classes.root}>
      <SearchBar
        value={searchValue}
        onChange={setSearchValue}
        // onRequestSearch={findCity}
        className={classes.search}
      />
    </div>
  )
}
