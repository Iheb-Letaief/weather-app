import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import WeatherCard from "./components/WeatherCard";
import WeatherDashboard from "./components/WeatherDashboard";
import { useEffect, useState } from "react";
import useWeatherAPI from "./hooks/useWeatherAPI";
import { WeatherProvider } from "./context/WeatherContext";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient(); // Create a new instance of QueryClient

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const weatherData = useWeatherAPI();

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
    <QueryClientProvider client={queryClient}>
      <div className="weather-dashboard">
        <Sidebar />
        <WeatherProvider>
          <WeatherDashboard />
          <WeatherCard
            cityName={"Sousse"}
            country={"Tunisia"}
            time={currentTime.toString()}
            weatherInfo={weatherData.weatherInfo}
            temperature={weatherData.temperature}
            chanceOfRain={weatherData.chanceOfRain}
            sunriseTime={"5:00"}
            sunsetTime={"20:00"}
          />
        </WeatherProvider>
      </div>
    </QueryClientProvider>
  );
}

export default App;
