import { useEffect, useState } from 'react';
import getWeatherDescription from '../utils/weatherDescription';
import forecast from './forecast.json'


export interface Weather {
  time: string;
  weatherInfo: String;
  temperature: number;
  chanceOfRain: number;
  windSpeed: number;
  pressure: number;
  uvIndex: number;
  chartTemp: number[];
  chartTime: string[];
}

const url =
  'https://api.open-meteo.com/v1/forecast?latitude=35.83&longitude=10.64&hourly=temperature_2m,precipitation_probability,surface_pressure,windspeed_180m,uv_index,weathercode';


  

function useWeatherAPI() {
  const [data, setData] = useState<Weather>({} as Weather);

  const fetchData = async () => {
      try {
        const apiResponse = await fetch(url);
        const json = await apiResponse.json();
        //const json = forecast
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
        //const next5HoursChanceOfRain = precipitation_probability.slice(currentIndex, currentIndex + 5);
        const next10HoursTemperature = temperature_2m.slice(currentIndex, currentIndex + 10);
        const next10Hours = time.slice(currentIndex, currentIndex + 10);
        


        setData({
          time: time[currentIndex],
          weatherInfo: getWeatherDescription(weathercode[currentIndex]),
          temperature: temperature_2m[currentIndex],
          //chanceOfRain: next5HoursChanceOfRain,
          chanceOfRain: precipitation_probability[currentIndex],
          windSpeed: windspeed_180m[currentIndex],
          pressure: surface_pressure[currentIndex],
          uvIndex: uv_index[currentIndex],
          chartTemp: next10HoursTemperature,
          chartTime: next10Hours
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
