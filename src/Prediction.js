import React from "react";

import "./Prediction.css";

export default function Prediction() {
  return (
    <div className="clearfix weather-temperature">
      <img
        id="icon"
        alt=""
        src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
        className="float-left"
      />

      <div className="float-left">
        <strong id="temperature">12</strong>
        <span className="units">
          <a href="a" id="celsius-link" className="active">
            °C
          </a>
          I{" "}
          <a href="a" id="fahrenheit-link">
            °F
          </a>
        </span>
      </div>
    </div>
  );
}
