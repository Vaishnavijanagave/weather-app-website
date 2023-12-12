import React, { useState,useEffect } from 'react'
import axios from 'axios'
// import cloud from './assets/cloud.jpg'
import sungf from './assets/sungf.gif'
import downfall from './assets/doenfallgf.gif'
import leaf from './assets/leafgf.gif'
import note from './assets/notegf.gif'
import wind from './assets/wind.png'
import feels from './assets/feels.png'
import hot from'./assets/hot.png'
import season from './assets/season.png'
import humidity from './assets/humidity.png'
// import sear from './assets/search.png'
// import sear from './assets/finalsearch.png'
import sear from './assets/greysear.png'
import moment from 'moment';
// import CityFetcher from './CityFetcher';


// neww
function App () {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastedData, setForecastedData] = useState(null);
  // 
  const [currentCity, setCurrentCity] = useState('');
  // const handleCityFetched = (city) => {
  //   // setCurrentCity(city);
  //   setCurrentCity(city)
  // };
  // 
  const apiKey = 'fd7ce14b9e59af91e1b47fd1f929a6df';
  // let city = {forecastedData} 
  const city = "mumbai";


 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          // `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`
        );
        // setWeatherData(response.data);
        setForecastedData(response.data);

      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchData();
  }, [city, apiKey]);
// 

// import { isDisabled } from '@testing-library/user-event/dist/utils'

// function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`

const his_api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        // currentCity=response.data
        console.log(response.data)
      })
      
      setLocation('')
      // currentCity(searchLocation)
    }
  }

  const forecastData = (event) => {
    if (event.key === 'Enter') {
      axios.get(his_api).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      
      setLocation('')
    }
  }

//   const removetxt=()=>{
//     <p  value="false" className='txt'>Enter city here</p>
// if(txt.value==="false"){
//   isDisabled;
// }
//   }
 
  

  return (
    <div className="app" >
      <div className="search">
        <input id='input'
          value={location}
          onChange={event => setLocation(event.target.value) && forecastData(event.target.value) }
          
          onKeyPress={searchLocation}
          
          placeholder='Enter Location'
          type="text"
          
          />
          <img src={sear} alt="search" id='search' />
      </div>
      {/* <p value="true" className='txt'>Enter city here</p> */}
      {/*  */}
      {/* <div className="btn">
<button onClick={setLocation} >search</button>
      </div> */}
      {/*  */}
      <div className="container">
        <div className="top">
          <div className="location">
            <p><h1>{data.name}</h1></p>
            {/* my points */}
            {/* <p>humidity:{data.main.humidity}</p>
            <p>Temperature:{data.main.temp}</p>
            <p>{data.main.description}</p> */}


{/*  */}
          </div>
          <div className="temp">
          
            {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
          
            <img src={sungf} alt="sun" id='sung' />
          </div>
          <div className="description">
           
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

        {data.name !== undefined &&
          <div className="bottom">
            <div className="feels">
              {/* <img src={cloud} alt="" /> */}
              <img src={feels} alt="f" id="feels" />
              {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°F</p> : null}
              <p>Feels Like</p>
            </div>
            <div className="humidity all">
              <img src={humidity} alt="h" id='sungf' />
              {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind all">
              <img src={wind} alt=""  id="wind"/>
              {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}
              <p>Wind Speed</p>
            </div>
            <div className="feels all">
             <img src={hot} alt="hot" id='hot' />
              {data.main ? <p className='bold'>{data.main.temp_max.toFixed()}°F</p> : null}
              <p>Max Temp</p>
            </div>

            <div className="des all">
<img src={season} alt="season"  id='season'/>
              {data.main ? <p className='bold'>{data.weather[0].description}</p> : null}
              <p></p>
            </div>

            {/* {data.name===undefined &&
        <div className="p">
          <p>error</p>
        </div>
        } */}

        {/* another one api */}


          </div>
          
        }
       <div className="forecast">
        
        {data.dt_txt}
       

        {forecastedData  && (
        <div className='data'>
          <p>Call hourly forecast data</p>
          {/* {forecastedData.city.name}  */}
          {/* currentCity = {data.name} */}
          {/* <h2>{forecastedData.city.name} 5-Day Forecast</h2> */}
          <h2>{data.name} 5-Day Forecast</h2>

          <div className='fore' id='fo'>
            {forecastedData.list.map((forecast) => (
              <div key={forecast.dt}>
                <p>{moment.unix(forecast.dt).format('MMMM Do, h:mm a')}</p>
                <p>Temperature: {forecast.main.temp} °C</p>
                <p>Weather: {forecast.weather[0].description}</p>
              </div>
            ))}
            </div>

          
        </div>
      )}
        {/* {data.main.temp} */}
       </div>



      </div>
    </div>
  );
}

export default App;
