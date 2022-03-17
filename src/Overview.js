import React from "react";

import "./Overview.css";

export default function Overview() {
  return (
    <div className="overview">
      <h1 id="city">New York</h1>
      <ul>
        <li>
          Last updated: <span id="date">21:30</span>
        </li>
        <li id="description">Clear</li>
      </ul>
    </div>
  );
}
