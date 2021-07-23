import React from "react";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";
import TemperatureConversion from "./TemperatureConversion";

export default function WeatherInfo(props) {
  return (
    <div>
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormatDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <WeatherIcon code={props.data.icon} />
            <span className="current-temperature">
              {props.data.temperature}
            </span>
            <TemperatureConversion />
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Wind: {props.data.wind} mph</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Precipitation: 20%</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
