import React, { useState, useEffect } from "react";
import axios from "axios";
import ForecastData from "./ForecastData";
import "./ForecastSearch.css";

export default function ForecastSearch(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coords]);

  function search() {
    const apiKey = "047115c33e71aaba35be74cb69e006be";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coords.lat}&lon=${props.coords.lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleResponse(response) {
    setForecastData(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="ForecastSearch row mt-3">
        {forecastData.map(function (dailyForecast, index) {
          if (index <= 5) {
            return (
              <div className="col" key={index}>
                <ForecastData data={dailyForecast} />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    search();
    return `Loading forecast for ${props.city}`;
  }
}
