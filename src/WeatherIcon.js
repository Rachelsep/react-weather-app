import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  return (
    <ReactAnimatedWeather
      icon={props.code}
      color={defaults.color}
      size={defaults.size}
      animate={true}
    />
  );
}
