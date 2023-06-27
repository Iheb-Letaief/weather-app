import React, { useEffect, useRef } from 'react';
import Chart, { ChartConfiguration, ChartData, LineController, LinearScale, PointElement } from 'chart.js/auto';
import useWeatherAPI, { Weather } from '../hooks/useWeatherAPI';

interface ForecastChartProps {
  temperature: number[];
  hours: string[];
}

const ForecastChart: React.FC<ForecastChartProps> = ({ temperature, hours }) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');

      if (ctx) {
        const chartData: ChartData<'line'> = {
          labels: hours,
          datasets: [
            {
              label: 'Temperature',
              data: temperature,
              borderColor: 'blue',
              fill: false,
              borderCapStyle: 'round'
            },
          ],
        };

        const chartConfig: ChartConfiguration<'line'> = {
          type: 'line',
          data: chartData,
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },

        };

        Chart.register(LineController, LinearScale, PointElement);

        chartInstance.current = new Chart(ctx, chartConfig) as Chart;
      }
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
        chartInstance.current = null;
      }
    };
  }, [temperature, hours]);

  return <canvas ref={chartRef} />;
};

export default ForecastChart;
