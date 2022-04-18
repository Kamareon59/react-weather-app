import React, { useState } from "react";
import axios from "axios";
import DateFormatter from "./DateFormatter";
import UnitConverter from "./UnitConverter";
import "./Weather.css";

export default function Weather(props) {
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
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      temperature: Math.round(response.data.main.temp),
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

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (ready) {
    return (
      <div className="Weather">
        <div className="row">
          <div className="col">
            <h1 className="text-capitalize">{city}</h1>
            <div className="text-muted">
              <DateFormatter timestamp={weather.dateTime} />
            </div>
            <br />
            <div className="row">
              <div className="col">
                <img src={weather.icon} alt={weather.description}></img>
              </div>
              <div className="col">
                <div>
                  <UnitConverter celsius={weather.temperature} />
                </div>
                <div className="text-muted text-capitalize">
                  {weather.description}
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-9 p-0">
                  <input
                    type="search"
                    placeholder="Enter a city"
                    className="form-control"
                    autoFocus="on"
                    onChange={updateCity}
                  />
                </div>
                <div className="col-3 p-0">
                  <input
                    type="submit"
                    value="Search"
                    className="btn btn-primary"
                  />
                </div>
              </div>
            </form>
            <div className="mt-5">Humidity: {weather.humidity}%</div>
            <div>Wind: {weather.wind} m/s</div>
          </div>
        </div>
        <hr />
        <div className="row">
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
