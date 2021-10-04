import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import { Footer } from 'src/components/footer'
import { Container } from 'src/components/weather/container'

import { useStyles } from './styles'

const Home: NextPage = () => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <Head>
        <title>Weather App</title>
        <meta name="description" content="Weather App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={classes.title}>Прогноз погоды</h1>

      <Container />

      <Footer />
    </div>
  )
}

export default Home
