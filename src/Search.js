import React, { useState } from "react";
import axios from "axios";
import WeatherData from "./WeatherData";
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
        <div className="row mt-3">
          <div className="col">
            <div>Monday</div>
            <img
              src="http://openweathermap.org/img/wn/02d@2x.png"
              alt="Weather Icon"
            ></img>
            <div>14 °C</div>
          </div>
          <div className="col">
            <div>Tuesday</div>
            <img
              src="http://openweathermap.org/img/wn/02d@2x.png"
              alt="Weather Icon"
            ></img>
            <div>18 °C</div>
          </div>
          <div className="col">
            <div>Wednesday</div>
            <img
              src="http://openweathermap.org/img/wn/02d@2x.png"
              alt="Weather Icon"
            ></img>
            <div>16 °C</div>
          </div>
          <div className="col">
            <div>Thursday</div>
            <img
              src="http://openweathermap.org/img/wn/02d@2x.png"
              alt="Weather Icon"
            ></img>
            <div>15 °C</div>
          </div>
          <div className="col">
            <div>Friday</div>
            <img
              src="http://openweathermap.org/img/wn/02d@2x.png"
              alt="Weather Icon"
            ></img>
            <div>14 °C</div>
          </div>
        </div>
        <hr />
      </div>
    );
  } else {
    search();

    return `Loading data for ${city}`;
  }
}
