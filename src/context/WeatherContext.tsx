import React, { createContext, ReactNode, useEffect, useState } from "react";

interface WeatherData {
  weatherInfo: string;
  temperature: number;
  chanceOfRain: number;
}

interface WeatherContextType {
  weatherData: WeatherData | null;
}

const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

interface WeatherProviderProps {
  children: ReactNode;
}

export const WeatherProvider: React.FC<WeatherProviderProps> = ({ children }) => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  useEffect(() => {
    const cachedWeatherData = localStorage.getItem("weatherData");
    if (cachedWeatherData) {
      setWeatherData(JSON.parse(cachedWeatherData));
    }
  }, []);

  useEffect(() => {
    if (weatherData) {
      localStorage.setItem("weatherData", JSON.stringify(weatherData));
    }
  }, [weatherData]);

  return (
    <WeatherContext.Provider value={{ weatherData }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContext;
