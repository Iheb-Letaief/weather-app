import React from "react";
import { formatDate } from "../utils/formatDate";
import useWeatherAPI from "../hooks/useWeatherAPI";


interface WeatherCardProps {
  cityName: string;
  country: string;
  time: string;
  weatherInfo: String;
  temperature: number;
  chanceOfRain: number;
  sunriseTime: string;
  sunsetTime: string;
}

const WeatherCard: React.FC<WeatherCardProps> = ({
  cityName,
  country,
  time,
  weatherInfo,
  temperature,
  chanceOfRain,
  sunriseTime,
  sunsetTime,
}) => {
  const formattedTime = formatDate(new Date(time), "MMM dd, yyyy h:mm:ss a");

  return (
    <div className="weather-card">
      <div className="location-time-section">
        <h2>{cityName}</h2>
        <span>{country}</span>
        <p>{formattedTime}</p>
      </div>
      <div className="weather-info-section">
        <h3>Weather Info</h3>
        <h1>{temperature}° C</h1>
        <p>{weatherInfo}</p>
      </div>
      <div className="chance-of-rain-section">
        <h3>Chance of Rain</h3>
        <div className="loading-bar-container">
          <div className="time">12:00</div>
          <div className="loading-bar">
            <div className="progress" style={{ width: `${chanceOfRain}%` }}></div>
          </div>
          <div className="percentage">{chanceOfRain}%</div>
        </div>

        <div className="loading-bar-container">
          <div className="time">13:00</div>
          <div className="loading-bar">
            <div className="progress" style={{ width: `${chanceOfRain}%` }}></div>
          </div>
          <div className="percentage">{chanceOfRain}%</div>
        </div>

        <div className="loading-bar-container">
          <div className="time">14:00</div>
          <div className="loading-bar">
            <div className="progress" style={{ width: `${chanceOfRain}%` }}></div>
          </div>
          <div className="percentage">{chanceOfRain}%</div>
        </div>

        <div className="loading-bar-container">
          <div className="time">15:00</div>
          <div className="loading-bar">
            <div className="progress" style={{ width: `${chanceOfRain}%` }}></div>
          </div>
          <div className="percentage">{chanceOfRain}%</div>
        </div>

        
      </div>

      <div className="sunrise-sunset-section">
        <div className="time-container">
          <h3>Sunrise</h3>
          <p>{sunriseTime} AM</p>
        </div>
        <div className="time-container">
          <h3>Sunset</h3>
          <p>{sunsetTime} PM</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
