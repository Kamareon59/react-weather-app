import React from "react";
import DateFormatter from "./DateFormatter";
import UnitConverter from "./UnitConverter";
import "./WeatherData.css";

export default function WeatherData(props) {
  return (
    <div className="WeatherData">
      <div className="row m-1">
        <div className="col text-start">
          <h1 className="text-capitalize">{props.data.city}</h1>
          <div className="text-muted">
            <DateFormatter timestamp={props.data.dateTime} />
          </div>
          <div className="mt-3">Humidity: {props.data.humidity}%</div>
          <div>Wind: {props.data.wind} m/s</div>
        </div>
        <br />
        <div className="col text-center my-auto">
          <div className="row align-items-center">
            <div className="col-5">
              <img src={props.data.icon} alt={props.data.description}></img>
              <div className="text-muted text-capitalize">
                {props.data.description}
              </div>
            </div>
            <div className="col-7">
              <div>
                <UnitConverter celsius={props.data.temperature} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
