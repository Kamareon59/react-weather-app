import React from "react";
import WeatherSearch from "./WeatherSearch";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <WeatherSearch defaultCity="Amsterdam" />
        <footer>
          This project was{" "}
          <a
            href="https://github.com/Kamareon59/react-weather-app"
            rel="noreferrer"
          >
            coded
          </a>{" "}
          by{" "}
          <a
            href="https://marit-versteeg-portfolio.netlify.app/"
            rel="noreferrer"
          >
            Marit Versteeg
          </a>{" "}
          and hosted via{" "}
          <a href="https://www.netlify.com" rel="noreferrer">
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
