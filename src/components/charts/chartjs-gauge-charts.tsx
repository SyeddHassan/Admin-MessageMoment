"use client";

import React from "react";
import { useTheme } from "next-themes";

import {
  ChartJsGaugeChartProps,
  ChartJsGaugeChartContextType,
} from "@/interfaces/charts/chartjs-gauge-charts-interfaces";

import { ChartJsGaugeChartConfigrations } from "@/configurations/chartjs-gauge-chart-configuration";

import { Doughnut } from "react-chartjs-2";
import {
  ArcElement,
  Tooltip,
  Legend,
  DoughnutController,
  Chart as ChartJS,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  DoughnutController,
  ChartDataLabels
);

export const ChartJsGaugeChart = ({ percentage }: ChartJsGaugeChartProps) => {
  const { theme } = useTheme();
  const isDarkTheme = theme === "dark";
  const data = {
    labels: [],
    datasets: [
      {
        data: [percentage, 100 - percentage],
        backgroundColor: (context: ChartJsGaugeChartContextType) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          if (!chartArea) {
            return context.dataIndex === 0
              ? "#aade9e"
              : `${isDarkTheme ? "#121212" : "#f2f2f2"}`;
          }

          const gradient = ctx.createLinearGradient(
            chartArea.left,
            0,
            chartArea.right,
            0
          );
          gradient.addColorStop(0, "#aade9e");
          gradient.addColorStop(1, "#43aedc");

          return context.dataIndex === 0
            ? gradient
            : `${isDarkTheme ? "#121212" : "#f2f2f2"}`;
        },
      },
    ],
  };

  const options = ChartJsGaugeChartConfigrations();

  return (
    <div className="relative mx-auto aspect-square">
      <Doughnut data={data} options={options} />

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2">
        <span className="text-[62px] font-bold text-heading-color">
          {percentage}%
        </span>
      </div>
    </div>
  );
};
