import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeeklyForecast.css";
import axios from "axios";

export default function WeeklyForecast(props) {
  const [weeklyData, setWeeklyData] = useState({ ready: false });

  function handleForecast(response) {
    setWeeklyData({
      ready: true,
      day: response.data.current.clouds,
      latitude: response.lat,
      longitude: response.lon,
      min_temp: response.data.daily[0].temp.min,
      max_temp: response.data.daily[0].temp.max,
      icon: response.data.daily[0].weather.icon,
    });
  }

  const apiKey = "750434103a834cc2e7cdf102e6bafd91";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(handleForecast);

  if (weeklyData.ready) {
    return (
      <div className="row">
        <div className="col">
          <div className="day">Sun</div>
          <div>
            <WeatherIcon code={props.icon} size="50" />
          </div>
          <div className="temperature-range">
            <span className="max-temp"> 76° </span>
            <span className="min-temp"> 60°</span>
          </div>
        </div>
      </div>
    );
  }
}
