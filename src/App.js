import React from "react";
import WeatherSearch from "./WeatherSearch";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <WeatherSearch defaultCity="Amsterdam" />
        <footer>
          <div className="contact">
            This project was{" "}
            <a
              href="https://github.com/Kamareon59/react-weather-app"
              rel="noreferrer"
              target="_blank"
            >
              coded
            </a>{" "}
            by{" "}
            <a
              href="https://marit-versteeg-portfolio.netlify.app/"
              rel="noreferrer"
              target="_blank"
            >
              Marit Versteeg
            </a>{" "}
            and hosted via{" "}
            <a href="https://www.netlify.com" rel="noreferrer" target="_blank">
              Netlify
            </a>
          </div>
          <div className="copyright mt-1">
            Icons by{" "}
            <a
              href="https://www.flaticon.com/authors/good-ware"
              title="Good Ware"
              rel="noreferrer"
              target="_blank"
            >
              Good Ware
            </a>{" "}
            and{" "}
            <a
              href="https://www.flaticon.com/authors/zlatko-najdenovski"
              title="Zlatko Najdenovski"
              rel="noreferrer"
              target="_blank"
            >
              Zlatko Najdenovski
            </a>{" "}
            from{" "}
            <a
              href="https://www.flaticon.com/"
              title="Flaticon"
              rel="noreferrer"
              target="_blank"
            >
              Flaticon
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
