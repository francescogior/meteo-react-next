export const getForecast = async (input) => {
  const rawData = await fetch(`https://query.yahooapis.com/v1/public/yql?u=c&q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="${input}")&format=json&env=store://datatables.org/alltableswithkeys`)
  const jsonData = await rawData.json()
  const content = jsonData.query ? (jsonData.query.results ? jsonData.query.results.channel : null ) : null
  return content ? {
    condition: content.item.condition,
    location: content.location,
    forecast: content.item.forecast.slice(1, 6)
  } : null
}
