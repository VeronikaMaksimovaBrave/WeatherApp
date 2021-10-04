export const apiKey = '26c8e89835bd408dc47e47bccebc56c5'
export const getUrl = (value: string) =>
  `http://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${apiKey}`
