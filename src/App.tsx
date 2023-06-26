import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import WeatherCard from "./components/WeatherCard";
import WeatherDashboard from "./components/WeatherDashboard";
import { useEffect, useState } from "react";

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update the current time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="weather-dashboard">
      <Sidebar />
      <WeatherDashboard />
      <WeatherCard
        cityName={"Sousse"}
        country={"Tunisia"}
        time={currentTime.toString()}
        weatherInfo={"Sunny"}
        temperature={30}
        chanceOfRain={80}
        sunriseTime={"5:00"}
        sunsetTime={"20:00"}
      />
    </div>
  );
}

export default App;
