import React from "react";

import "./OtherData.css";

export default function OtherData() {
  return (
    <ul>
      <li>
        Humidity: <span id="humidity">30</span>%
      </li>
      <li>
        Wind: <span id="wind">9</span>km/h
      </li>
    </ul>
  );
}
