import React, { useState } from "react";
import "./Weather.css";

export default function TemperatureConversion(props) {
  let [unit, setUnit] = useState("fahrenheit");

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  if (unit === "fahrenheit") {
    return (
      <span className="WeatherTemperature">
        <span className="current-temperature">{props.fahrenheit}</span>
        <span className="units">
          °F |{" "}
          <a href="/" onClick={convertToCelsius} className="celsius">
            °C
          </a>
        </span>
      </span>
    );
  } else if (unit === "celsius") {
    let celsius = ((props.fahrenheit - 32) * 5) / 9;
    return (
      <span className="WeatherTemperature">
        <span className="current-temperature">{Math.round(celsius)}</span>
        <span className="units">
          <a href="/" onClick={convertToFahrenheit} className="fahrenheit">
            °F
          </a>{" "}
          | °C
        </span>
      </span>
    );
  }
}
