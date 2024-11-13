import React, { useEffect } from "react";
import { createChart } from "lightweight-charts";

const ChartComponent = () => {
  useEffect(() => {
    const chart = createChart(document.getElementById("chart-container"), {
      width: 800,
      height: 500,
    });

    const candlestickSeries = chart.addCandlestickSeries();
    // Fetch and update data periodically (via WebSocket or API)
    const fetchData = async () => {
      const response = await fetch("/api/market-data");
      const data = await response.json();
      candlestickSeries.setData(data);
    };
    setInterval(fetchData, 5000); // Fetch data every 5 seconds

    return () => {
      chart.remove();
    };
  }, []);

  return <div id="chart-container"></div>;
};

export default ChartComponent;
