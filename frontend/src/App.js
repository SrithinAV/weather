import React, { useState } from 'react'

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

 const searchLocation = (event) => {
    if (event.key === 'Enter') {
      fetch('weather_view/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ location }),
      })
      .then(response => response.json())
      .then(data => {
        setData(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }
  }

  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyDown={searchLocation}
          placeholder='Enter Location'
          type="text" />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
          {data.main ? <h1>{(data.main.temp - 273.15).toFixed(2)}°C</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

        { data.name !== undefined &&
          <div className="bottom">
            <div className="feels">
            {data.main ? <p className='bold'>{(data.main.feels_like - 273.15).toFixed(2)}°C</p> : null}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}
              <p>Wind Speed</p>
            </div>
          </div>
        }
      </div>
    </div>
  );
}

export default App;