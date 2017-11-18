import { FtoC } from '../utils';

export default ({
  date,
  location,
  region,
  country,
  meteoCode,
  meteoDescription,
  temperature,
  forecast
}) => (
  <div className='MeteoCard'>

    <style jsx>{`

      .MeteoCard {
        margin: 0 auto;
        max-width: 768px;
        padding: 30px;
        color: white;
        letter-spacing: 1.5px;;
      }

      .date, .forecast-date {
        font-size: 16px;
        opacity: .8;
      }

      .location {
        font-size: 28px;
        margin: 15px 0;
      }

      .meteoDescription {
        font-size: 20px;
        margin: 10px 0;
      }

      .meteoIcon {
        font-size: 112px;
        flex: 1;
        margin: 40px 0;
        text-align: center;
      }

      .temperature {
        font-size: 96px;
        flex: 1;
        text-align: center;
      }

      .row {
        display: flex;
        align-items: center;
        max-width: 400px;
        margin: 0 auto;
      }

      .forecast {
        display: flex;
      }

      .forecast-day {
        flex: 1;
        text-align: center;
      }

      .forecast-meteoIcon {
        font-size: 36px;
        margin: 15px 0;
      }

      .forecast-temperature .max {
        font-size: 32px;
        margin-bottom: 10px;
      }

      .forecast-temperature .min {
        font-size: 22px;
        opacity: .8;
      }

    `}</style>

    <div className='date'>
      {date}
    </div>

    <div className='location'>
      {location}, {region} ({country})
    </div>

    <div className='meteoDescription'>
      {meteoDescription}
    </div>

    <div className='row'>

      <div className='meteoIcon'>
        <i className={`wi wi-yahoo-${meteoCode}`} />
      </div>

      <div className='temperature'>
        {FtoC(temperature)}˚
      </div>
    
    </div>

    <div className='forecast'>
      {forecast.map((f, i) => (
        <div className='forecast-day'key={i}>

          <div className='forecast-date'>
            {f.date}
          </div>

          <div className='forecast-meteoIcon'>
            <i className={`wi wi-yahoo-${f.meteoCode}`} />
          </div>

          <div className='forecast-temperature'>
            <div className='max'>{FtoC(f.high)}˚</div>
            <div className='min'>{FtoC(f.low)}˚</div>
          </div>

        </div>
      ))}
    </div>

  </div>
)