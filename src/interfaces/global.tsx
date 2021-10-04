export interface Day {
  title: string
  date?: string
  temp: string
  tempFact?: string
  situation: string
  wind?: string
  windDir?: string
}

export interface Date {
  cityName: string
  lat: number
  lon: number
  main: {
    temp: number
    emp_min: number
    temp_max: number
    feels_like: number
    pressure: number
    humidity: number
  }
  wind: {
    speed: number
    deg: number
  }
  rain: {
    '3h': number
  }
  clouds: {
    all: number
  }
  weather: [
    {
      id: number
      main: string
      description: string
      icon: string
    },
  ]
  dt: number
  dt_iso: string
  timezone: number
}
