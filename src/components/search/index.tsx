import SearchBar from 'material-ui-search-bar'
import React, { useState } from 'react'

import { useStyles } from './styles'

export const Search = () => {
  const classes = useStyles()
  const [value, setValue] = useState('')

  return (
    <div className={classes.root}>
      <SearchBar
        value={value}
        onChange={setValue}
        // onRequestSearch={date => console.log('onRequestSearch:', date)}
        className={classes.search}
      />
    </div>
  )
}
