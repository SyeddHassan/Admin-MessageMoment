"use client";

import { useEffect, useRef } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { GaugeChartOptions } from "@/utils/gauge-chart-options";
import { GaugeChartProps } from "@/interfaces/partials-components-interfaces";

// Register Chart.js components and plugins
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

// Function to create a gradient
function createGradient(startColor: string, endColor: string) {
  if (typeof window === "undefined") return startColor;
  const ctx = document.createElement("canvas").getContext("2d");
  if (!ctx) return startColor;

  const gradient = ctx.createLinearGradient(0, 0, 200, 0);
  gradient.addColorStop(0, startColor);
  gradient.addColorStop(1, endColor);
  return gradient;
}

const GaugeChart = ({
  data,
  value,
  title,
  isHalfGauge = false,
  startColor = "#4ade80",
  endColor = "#0ea5e9",
  backgroundColor = "#e5e7eb",
  barWidth = 20,
}: GaugeChartProps) => {
  const chartRef = useRef<ChartJS<"doughnut", number[], string> | null>(null);

  // Re-render chart on prop updates
  useEffect(() => {
    chartRef.current?.update();
  }, [
    value,
    data,
    isHalfGauge,
    startColor,
    endColor,
    backgroundColor,
    barWidth,
  ]);

  const circumference = isHalfGauge ? 180 : 360;
  const rotation = isHalfGauge ? -90 : 0;

  // Modify the dataset to apply the gradient and other options
  const processedData = {
    ...data,
    datasets: data.datasets.map((dataset) => {
      // Ensure backgroundColor is defined
      if (!dataset.backgroundColor) {
        return dataset; // If backgroundColor is undefined, return dataset as-is
      }

      // Explicitly type `color` and `index` in the `map` function
      return {
        ...dataset,
        backgroundColor: (dataset.backgroundColor as string[]).map(
          (color: string, index: number) =>
            index === 0 ? createGradient(startColor, endColor) : color
        ),
        circumference,
        rotation,
      };
    }),
  };

  const options = GaugeChartOptions(barWidth, isHalfGauge);

  return (
    <div className="flex justify-center w-full">
      <div className="relative">
        <Doughnut data={processedData} options={options} ref={chartRef} />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-sm text-gray-500 mt-1">{title}</span>
          <span
            className="text-3xl font-bold text-gray-800 mt-5"
            aria-live="polite"
            aria-atomic="true"
          >
            {value}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default GaugeChart;
