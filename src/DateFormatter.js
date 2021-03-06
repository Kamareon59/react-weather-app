import React from "react";

export default function DateFormatter(props) {
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const weekday = weekdays[props.timestamp.getDay()];

  const hours =
    (props.timestamp.getHours() < 10 ? "0" : "") + props.timestamp.getHours();
  const minutes =
    (props.timestamp.getMinutes() < 10 ? "0" : "") +
    props.timestamp.getMinutes();

  return (
    <div>
      Measured on {weekday} at {hours}:{minutes}
    </div>
  );
}
