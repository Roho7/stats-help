"use client";
import { useState } from "react";

export default function Promises() {
  const [weather, setWeather] = useState<string | null>(null);
  const [weatherIcon, setWeatherIcon] = useState<string | null>(null);
  function getWeather(): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Snowy");
      }, 2000);
    });
  }

  function getWeatherIcon(weather: string): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        switch (weather) {
          case "Sunny":
            resolve("☀️");
            break;
          case "Rainy":
            resolve("🌧");
            break;
          case "Cloudy":
            resolve("☁️");
            break;
          case "Snowy":
            resolve("❄️");
            break;
          default:
            resolve("🌤");
        }
      }, 2000);
    });
  }

  getWeather()
    .then((data) => {
      setWeather(data);
      return data;
    })
    .then(getWeatherIcon)
    .then(setWeatherIcon);

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          {weather}
          {weatherIcon}
        </h1>
      </header>
      <main></main>
    </div>
  );
}
