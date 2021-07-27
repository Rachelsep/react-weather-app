import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function DailyWeather(props) {
  function maxTemp() {
    let maxTemp = Math.round(props.data.temp.max);
    return `${maxTemp}°`;
  }

  function minTemp() {
    let minTemp = Math.round(props.data.temp.min);
    return `${minTemp}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let dateDay = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[dateDay];
  }

  return (
    <div>
      <div className="day">{day()}</div>
      <div>
        <WeatherIcon code={props.data.weather[0].icon} size={36} />
      </div>
      <div className="temperature-range">
        <span className="max-temp"> {maxTemp()} </span>
        <span className="min-temp"> {minTemp()}</span>
      </div>
    </div>
  );
}
