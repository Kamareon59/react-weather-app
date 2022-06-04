import React, { useState } from "react";
import axios from "axios";
import WeatherData from "./WeatherData";
import Forecast from "./Forecast";
import "./Search.css";

export default function Search(props) {
  const [ready, setReady] = useState(false);
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState(props.defaultCity);

  function search() {
    const apiKey = "047115c33e71aaba35be74cb69e006be";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleResponse(response) {
    setWeather({
      dateTime: new Date(response.data.dt * 1000),
      city: response.data.name,
      coords: response.data.coord,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
    });
    setReady(true);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function changeCity(event) {
    setCity(event.target.value);
  }

  if (ready) {
    return (
      <div className="Search">
        <form onSubmit={handleSubmit}>
          <div className="row mb-3">
            <div className="col-9">
              <input
                type="search"
                placeholder="🔎 Enter a city"
                className="form-control"
                autoFocus="on"
                onChange={changeCity}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <WeatherData data={weather} />
        <Forecast coords={weather.coords} />
        <hr />
      </div>
    );
  } else {
    search();

    return `Loading data for ${city}`;
  }
}
