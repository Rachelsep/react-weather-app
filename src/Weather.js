import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="container">
      <div className="weather-wrapper">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100 "
              />
            </div>
          </div>
        </form>
        <h1>New York</h1>
        <ul>
          <li>Saturday 8:00 PM</li>
          <li>Sunny</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                alt="sunny"
                className="float-left"
              />
              <span className="current-temperature">72</span>
              <span className="units">°F</span>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation: 20%</li>
              <li>Wind: 2 mph</li>
              <li>Humidity: 88%</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
