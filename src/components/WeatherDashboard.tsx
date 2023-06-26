import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBell, faWind, faCloudRain, faSun, faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import ForecastChart from "./ForecastChart";
import useWeatherAPI from "../hooks/useWeatherAPI";



const DateComponent = () => {
  const currentDate = new Date().toLocaleDateString();

  return <p>{currentDate}</p>;
};

const SearchBar = () => {
  const handleSearch = () => {
    // Handle search logic
  };

  return (
    <div>
      <input type="text" placeholder="Search for location here" />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

const NotificationButton = () => {
  const handleNotificationClick = () => {
    alert("This is a weather app")
  };

  return (
    <button onClick={handleNotificationClick}>
      <FontAwesomeIcon icon={faBell} />
    </button>
  );
};

const ProfileButton = () => {
  const handleProfileClick = () => {
    // Handle profile logic
  };

  return (
    <button onClick={handleProfileClick}>
      <FontAwesomeIcon icon={faUser} />
    </button>
  );
};



const WeatherDashboard = () => {
  const weatherData = useWeatherAPI();


  if(!weatherData){
    return <div>Loading...</div>
  }


  return (
    <div className="weather">
      <div className="dashboard-header">
        <div className="date-section">
          <DateComponent />
        </div>
        <div className="search-bar">
          <SearchBar />
        </div>
        <div className="notification-button">
          <NotificationButton />
        </div>
        <div className="profile-button">
          <ProfileButton />
        </div>
      </div>

      <div className="today-overview">
        <h2>Today's Overview</h2>
        <div className="row">
          <div className="mini-card">
            <FontAwesomeIcon className="mini-card-icon" icon={faWind}  />
            <div className="mini-card-info">
              <p>Wind speed</p>
              <h2>{weatherData.windSpeed} km/h</h2>
            </div>
            
          </div>
          <div className="mini-card">
            <FontAwesomeIcon className="mini-card-icon" icon={faCloudRain} />
            <div className="mini-card-info">
              <p>Rain chance</p>
              <h2>{weatherData.chanceOfRain[0]}%</h2>
            </div>
            
          </div>
        </div>

        <div className="row">
          <div className="mini-card">
            <FontAwesomeIcon className="mini-card-icon" icon={faBarsStaggered} />
            <div className="mini-card-info">
              <p>Pressure</p>
              <h2>{weatherData.pressure} hpa</h2>
            </div>
            
          </div>
          <div className="mini-card">
           <FontAwesomeIcon className="mini-card-icon" icon={faSun} />
           <div className="mini-card-info">
              <p>UV index</p>
              <h2>{weatherData.uvIndex}</h2>
           </div>
            
          </div>
        </div>
      </div>

      <div className="weekly-temperature">
        <h2>Average Weekly Temperature</h2>
        <ForecastChart />
      </div>
    </div>
  );
};

export default WeatherDashboard;
