import React from "react";
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  LineSeries,
  MarkSeries,
  LineMarkSeries,
} from "react-vis";

const ForecastChart = () => {
  const data = [
    { x: 1, y: 25 },
    { x: 2, y: 30 },
    { x: 3, y: 28 },
    { x: 4, y: 32 },
    { x: 5, y: 29 },
    { x: 6, y: 31 },
    { x: 7, y: 27 },
  ];

  return (
    <div className="forecast-chart">
      <div className="chart-container">
        <XYPlot width={630} height={250}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis title="Day" />
          <YAxis title="Temperature" />
          <LineMarkSeries
            data={data}
            lineStyle={{ stroke: "black" }}
            markStyle={{ stroke: "black", fill: "white" }}
            color="blue"
            />
        </XYPlot>
      </div>
    </div>
  );
};

export default ForecastChart;
