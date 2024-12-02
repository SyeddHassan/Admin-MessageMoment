"use client";

import React from "react";

import { PieChart01Props } from "@/interfaces/partials-components-interfaces";

import { PieChart01Options } from "@/options/pie-chart-options";

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

export const PieChart01 = ({ chartData }: PieChart01Props) => {
  const data = {
    labels: chartData.map((data) => data.label),
    datasets: [
      {
        data: chartData.map((data) => data.percentage),
        backgroundColor: chartData.map((data) => data.color),
        borderColor: "#fff",
        borderWidth: 0,
      },
    ],
  };

  const options = PieChart01Options();

  return (
    <div className="relative mx-auto aspect-square w-full">
      <Doughnut data={data} options={options} />
    </div>
  );
};
