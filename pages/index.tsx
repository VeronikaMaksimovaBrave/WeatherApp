import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import {WeatherContainer} from './Weather/weatherContainer'


const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Weather App</title>
        <meta name="description" content="Weather App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.title}>
        Weather App
      </h1>

      <WeatherContainer />

      <footer className={styles.footer}>
        <a
          href="https://vk.com/nikaclemente"
          target="_blank"
          rel="noopener noreferrer"
        >
           Created by Nika Clemente 2021
        </a>
      </footer>
    </div>
  )
}

export default Home
