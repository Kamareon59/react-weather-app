import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="row">
        <div className="col">
          <h1>Amsterdam, NL</h1>
          <div className="text-muted">Saturday 18:35</div>
          <br />
          <div className="row">
            <div className="col">
              <img
                src="http://openweathermap.org/img/wn/10d@2x.png"
                alt="Weather Icon"
              ></img>
            </div>
            <div className="col">
              <div>
                <span className="main-temp">16</span>
                <span className="unit">°C</span>
              </div>
              <div className="text-muted">Light rain</div>
            </div>
          </div>
        </div>
        <div className="col">
          <form>
            <div className="row">
              <div className="col-9 p-0">
                <input
                  type="search"
                  placeholder="Enter a city"
                  className="form-control"
                  autoFocus="on"
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
          <div className="mt-5">Humidity: 42%</div>
          <div>Wind: 5 m/s</div>
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
}
