import React from "react";

export default function ForecastData(props) {
  function maxTemp() {
    let maxTemp = Math.round(props.data.temp.max);
    return maxTemp;
  }

  function minTemp() {
    let minTemp = Math.round(props.data.temp.min);
    return minTemp;
  }

  function day() {
    const weekdays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let dateTime = new Date(props.data.dt * 1000);
    let weekday = weekdays[dateTime.getDay()];

    return weekday;
  }

  return (
    <div className="ForecastData">
      <div className="forecast-day">{day()}</div>
      <img
        src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
        alt="Weather Icon"
        className="forecast-icon"
      ></img>
      <div>
        <span className="forecast-max">{maxTemp()}°</span>
        <span className="forecast-min">{minTemp()}°</span>
      </div>
    </div>
  );
}
