"use client";

import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  ArcElement,
  Tooltip,
  Legend,
  DoughnutController,
  Chart as ChartJS,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

import { PieChartOptions } from "@/utils/pie-chart-options";

import { PieChartProps } from "@/interfaces/partials-components-interfaces";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  DoughnutController,
  ChartDataLabels
);

export const PieChart = ({ data }: PieChartProps) => {
  const chartData = {
    labels: data.map((item) => item.label),
    datasets: [
      {
        data: data.map((item) => item.value),
        backgroundColor: data.map((item) => item.color),
        borderColor: "#fff",
        borderWidth: 0,
      },
    ],
  };

  const options = PieChartOptions();

  return (
    <div className="relative mx-auto aspect-square w-full">
      <Doughnut data={chartData} options={options} />
    </div>
  );
};
