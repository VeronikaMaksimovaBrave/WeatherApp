import React, { ReactElement, ReactNode, useContext, useMemo, useState } from 'react'
import noop from 'lodash/noop'
import { apiKey, url } from 'api/config'
import axios from 'axios'

import { IResponseDate } from './interfaces/global'

// export const initStore: IResponseDate = {
//   base: 'stations',
//   clouds: {
//     all: 20,
//   },
//   cod: 200,
//   coord: {
//     lat: 56.85,
//     lon: 53.2333,
//   },
//   dt: 1633330545,
//   id: 554840,
//   main: {
//     feels_like: 278.22,
//     humidity: 62,
//     pressure: 1039,
//     temp: 278.22,
//     temp_max: 278.22,
//     temp_min: 278.22,
//   },
//   name: 'Izhevsk',
//   sys: {
//     country: 'RU',
//     id: 2003018,
//     sunrise: 1633314985,
//     sunset: 1633355698,
//     type: 2,
//   },
//   timezone: 14400,
//   visibility: 10000,
//   weather: {
//     0: { description: 'few clouds', icon: '02d', id: 801, main: 'Clouds' },
//   },
//   wind: {
//     deg: 147,
//     gust: 2.68,
//     speed: 0.45,
//   },
// }

interface IWeatherContext {
  weather: IResponseDate | null
  searchValue: string
  setSearchValue: (value: string) => void
}

const initialValue: IWeatherContext = {
  weather: null,
  searchValue: 'kazan',
  setSearchValue: noop
}

const WeatherContext = React.createContext(initialValue)

interface Props {
  children: ReactNode
}

export const WeatherContextProvider = ({ children }: Props): ReactElement => {
  const [searchValue, setSearchValue] = useState('kazan')

  

  const weather = useMemo(async () => {
    const urlGetWeather = `${url}${searchValue}&appid=${apiKey}`

    const response = await axios.get(urlGetWeather)

    return response.data
  }, [searchValue])

  const value = useMemo(
    () => ({ searchValue, setSearchValue, weather }),
    [searchValue, weather],
  )

  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  )
}

export const useWeatherContext = (): IWeatherContext=> useContext(WeatherContext)
