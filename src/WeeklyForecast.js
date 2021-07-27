import React, { useState } from "react";
import DailyWeather from "./DailyWeather";
import "./WeeklyForecast.css";
import axios from "axios";

export default function WeeklyForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecast(response) {
    setForecast(response.data.daily[0]);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="row">
        <div className="col">
          <DailyWeather data={forecast} />
        </div>
      </div>
    );
  } else {
    const apiKey = "750434103a834cc2e7cdf102e6bafd91";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleForecast);

    return null;
  }
}
