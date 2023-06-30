import React, { createContext, ReactNode, useState } from "react";
import { useQuery, QueryClient, QueryClientProvider } from 'react-query';

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
  const queryClient = new QueryClient(); 

  const { data } = useQuery('weatherData', () => JSON.parse(localStorage.getItem('weatherData') || 'null'));

  const [weatherData, setWeatherData] = useState<WeatherData | null>(data);

  if (data && !weatherData) {
    setWeatherData(data);
  }

  return (
    <QueryClientProvider client={queryClient}>
      <WeatherContext.Provider value={{ weatherData }}>
        {children}
      </WeatherContext.Provider>
    </QueryClientProvider>
  );
};

export default WeatherContext;
