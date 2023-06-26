import { useEffect, useState } from 'react';
import getWeatherDescription from '../utils/weatherDescription';

interface Weather {
  time: number;
  weatherInfo: String;
  temperature: number;
  chanceOfRain: number[];
  windSpeed: number;
  pressure: number;
  uvIndex: number;
}

const url =
  'https://api.open-meteo.com/v1/forecast?latitude=35.83&longitude=10.64&hourly=temperature_2m,precipitation_probability,surface_pressure,windspeed_180m,uv_index,weathercode';

function useWeatherAPI() {
  const [data, setData] = useState<Weather>({} as Weather);

  const fetchData = async () => {
      try {
        const apiResponse = await fetch(url);
        const json = await apiResponse.json();
        console.log(json)

        const currentDate = new Date();
        const currentHour = currentDate.getHours();
        
        const {
          time,
          weathercode,
          temperature_2m,
          precipitation_probability,
          windspeed_180m,
          surface_pressure,
          uv_index
        } = json.hourly;

        const currentIndex = currentHour < time.length ? currentHour : time.length - 1;
        const next5HoursChanceOfRain = precipitation_probability.slice(currentIndex, currentIndex + 5);


        console.log(currentIndex)


        setData({
          time: time[currentIndex],
          weatherInfo: getWeatherDescription(weathercode[currentIndex]),
          temperature: temperature_2m[currentIndex],
          chanceOfRain: next5HoursChanceOfRain,
          windSpeed: windspeed_180m[currentIndex],
          pressure: surface_pressure[currentIndex],
          uvIndex: uv_index[currentIndex]
        });
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };
  
  useEffect(() => {
    fetchData();
  }, []);
  
  console.log(data);

  return data;
}

export default useWeatherAPI;
