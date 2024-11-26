"use client";

import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

import { BarGraph01Options } from "@/utils/bar-graph-options";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

export const BarGraph01 = ({
  chartData,
}: {
  chartData: { hour: string; value: number }[];
}) => {
  const labels = Array.from({ length: 24 }, (_, i) => {
    const hour = i === 0 ? 12 : i > 12 ? i - 12 : i;
    const suffix = i >= 12 ? "pm" : "am";
    return `${hour.toString().padStart(2, "0")}:00 ${suffix}`;
  });

  const data = {
    labels,
    datasets: [
      {
        data: chartData.map(({ value }) => value),
        backgroundColor: "#5470C6",
        borderColor: "#fff",
        borderWidth: 2,
      },
    ],
  };

  const options = BarGraph01Options;

  return (
    <div className="relative mx-auto md:aspect-square w-full md:h-[550px] h-[300px]">
      <Bar data={data} options={options} />
    </div>
  );
};
