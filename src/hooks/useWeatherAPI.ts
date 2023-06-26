import { useEffect, useState } from 'react';

interface Weather {
  weatherInfo: string;
  temperature: number;
  chanceOfRain: number;
  windSpeed: number;
  pressure: number;
  uvIndex: number;
}

const url =
  'https://api.open-meteo.com/v1/forecast?latitude=35.83&longitude=10.64&hourly=temperature_2m,precipitation_probability,surface_pressure,windspeed_180m,uv_index';

function useWeatherAPI() {
  const [data, setData] = useState<Weather>({} as Weather);

  const fetchData = async () => {
      try {
        const apiResponse = await fetch(url);
        const json = await apiResponse.json();
        console.log(json)

        
        const {
          weather,
          temperature_2m,
          precipitation_probability,
          windspeed_180m,
          surface_pressure,
          uv_index
        } = json;

        setData({
          weatherInfo: weather,
          temperature: temperature_2m,
          chanceOfRain: precipitation_probability,
          windSpeed: windspeed_180m,
          pressure: surface_pressure,
          uvIndex: uv_index
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
