import React, { useState } from "react";
import "./Weather.css";

export default function TemperatureConversion(props) {
  let [newCelsius, setCelsius] = useState(props.fahrenheit);
  //when celsius is clicked -->convert values to celsius --> output celsius values
  //when fahrenheit is clicked --> convert values to fahreneight --> output fahrenheit values
  //fahrenheight is clicked -->celsius is grey & fahrenheight is black

  function convertCelsius(event) {
    event.preventDefault();
    let celsius = (props.fahrenheit * 5) / 9 + 32;
    console.log(celsius);
    console.log(newCelsius);
    setCelsius(celsius);
  }

  return (
    <span className="WeatherTemperature">
      <span className="current-temperature">{props.fahrenheit}</span>
      <span className="units">
        <a href="/" className="fahrenheit">
          °F
        </a>{" "}
        | °C
      </span>
    </span>
  );
}
