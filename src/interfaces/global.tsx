export interface Day {
  title: string
  date?: string
  temp: string
  tempFact?: string
  situation: string
  wind?: string
  windDir?: string
}

export interface IWeather {
  description: string
  icon: string
  id: number
  main: string
}

interface IWeatherRecord {
  [key: number]: IWeather
}

export interface IResponseDate {
  base: string
  clouds: {
    all: number
  }
  cod: number
  coord: {
    lat: number
    lon: number
  }
  dt: number
  id: number
  main: {
    feels_like: number
    humidity: number
    pressure: number
    temp: number
    temp_max: number
    temp_min: number
  }
  name: string
  sys: {
    country: string
    id: number
    sunrise: number
    sunset: number
    type: number
  }
  timezone: number
  visibility: number
  weather: IWeatherRecord
  wind: {
    deg: number
    gust: number
    speed: number
  }
}
