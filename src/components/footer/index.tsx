import React from 'react'

import { useStyles } from './styles'

export const Footer = () => {
  const classes = useStyles()

  return (
    <footer className={classes.root}>
      <a
        href="https://vk.com/nikaclemente"
        target="_blank"
        rel="noopener noreferrer">
        Created by Nika Clemente 2021
      </a>
    </footer>
  )
}
