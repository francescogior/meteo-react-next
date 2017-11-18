import Head from 'next/head'
import { getForecast } from '../api'
import SearchInput from '../components/SearchInput'
import MeteoCard from '../components/MeteoCard'

const initialState = {
  inputValue: '',
  result: null
}

const updateInput = (newValue) => () => ({ inputValue: newValue })
const updateResult = (newResult) => () => ({ result: newResult })

const MeteoAppUI = ({ inputValue, result, onInputChange }) => (
  <div>

    <Head>
      <link rel='stylesheet' href='/static/icons/wi-icons.min.css' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <title>METEO</title>
    </Head>

    <style jsx global>{`

      html, body {
        overflow: hidden;
      }

      body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
        background: linear-gradient(to right, #36d1dc, #5b86e5);
        box-sizing: border-box;
      }

      .no-result {
        margin: 30px 0;
        text-align: center;
        color: rgba(255, 255, 255, .7);
      }

    `}</style>

    <SearchInput
      placeholder='Search a place'
      value={inputValue}
      onChange={onInputChange}
    />

    {!result && !!inputValue && (
      <div className='no-result'>
        No Result found, try type something else
      </div>
    )}

    {!!result && (
      <MeteoCard
        location={result.location.city}
        region={result.location.region}
        country={result.location.country}
        meteoDescription={result.condition.text}
        meteoCode={result.condition.code}
        date={result.condition.date}
        temperature={result.condition.temp}
        forecast={result.forecast.map(f => ({
          meteoDescription: f.text,
          meteoCode: f.code,
          date: f.day,
          high: f.high,
          low: f.low
        }))}
      />
    )}
  </div>
)

export default class MeteoApp extends React.Component {

  state = initialState

  onInputChange = async (newInputValue) => {
    this.setState(updateInput(newInputValue))
    const result = await getForecast(newInputValue)
    this.setState(updateResult(result))
  }

  updaters = {
    onInputChange: this.onInputChange
  }

  render() {
    return <MeteoAppUI {...this.state} {...this.updaters} />
  }
}
