import React, { useState } from "react";

export default function UnitConverter(props) {
  const [unit, setUnit] = useState("celsius");
  const [temp, setTemp] = useState(props.celsius);

  function converter(event) {
    event.preventDefault();

    if (unit === "celsius") {
      setTemp((temp * 9) / 5 + 32);
      setUnit("fahrenheit");
    } else {
      setTemp(((temp - 32) * 5) / 9);
      setUnit("celsius");
    }
  }

  if (unit === "celsius") {
    return (
      <div>
        <span className="main-temp">{Math.round(temp)}</span>
        <span className="unit">
          °C |{" "}
          <a href="/" onClick={converter}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div>
        <span className="main-temp">{Math.round(temp)}</span>
        <span className="unit">
          <a href="/" onClick={converter}>
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}