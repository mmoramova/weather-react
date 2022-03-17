import React from "react";

import Bootstrap from "bootstrap";
import Form from "./Form";
import Overview from "./Overview";
import Prediction from "./Prediction";
import OtherData from "./OtherData";
import WeatherForecast from "./WeatherForecast";
import Footer from "./Footer";

import "./Weather.css";

export default function weather() {
  return (
    <div className="weather-app-wrapper">
      <div className="weather">
        <Form />
        <Overview />
        <div className="row">
          <div className="col-6">
            <Prediction />
          </div>
          <div className="col-6">
            <OtherData />
          </div>
        </div>
        <WeatherForecast />
      </div>
      <Footer />
    </div>
  );
}
