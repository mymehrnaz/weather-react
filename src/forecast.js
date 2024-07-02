import React from "react";
import "./App.css";

export default function weatherForecast(props) {
  function formatDate(prop) {
    let minutes = props.date.getMinutes();
    let hours = props.date.getHours();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = days[props.date.getDay()];

    if (minutes < 10) {
      minutes = `0${minutes}`;
    }

    return `${day} ${hours}:${minutes}`;
  }
}