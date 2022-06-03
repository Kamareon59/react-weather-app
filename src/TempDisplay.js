import React, { useState } from "react";

export default function TempDisplay(props) {
  const [unit, setUnit] = useState("celsius");

  function showCelsius(event) {
    event.preventDefault();

    setUnit("celsius");
  }

  function showFahrenheit(event) {
    event.preventDefault();

    setUnit("fahrenheit");
  }

  function converter() {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return fahrenheit;
  }

  if (unit === "celsius") {
    return (
      <div className="TempDisplay">
        <span className="main-temp">{Math.round(props.celsius)}</span>
        <span className="unit">
          °C |{" "}
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="UnitConverter">
        <span className="main-temp">{Math.round(converter())}</span>
        <span className="unit">
          <a href="/" onClick={showCelsius}>
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}
