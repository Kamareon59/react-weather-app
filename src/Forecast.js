import React from "react";
import axios from "axios";
import "./Forecast.css";

export default function Forecast(props) {
  function handleResponse(response) {}

  const apiKey = "047115c33e71aaba35be74cb69e006be";
  let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${props.coords.lat}&lon=${props.coords.lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="Forecast row mt-3">
      <div className="col">
        <div className="forecast-day">Monday</div>
        <img
          src="http://openweathermap.org/img/wn/02d@2x.png"
          alt="Weather Icon"
          className="forecast-icon"
        ></img>
        <div>
          <span className="forecast-max">14</span>
          <span className="forecast-min">9</span>
        </div>
      </div>
    </div>
  );
}
