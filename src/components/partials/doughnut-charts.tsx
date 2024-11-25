"use client";

import React, { useMemo } from "react";
import { Doughnut } from "react-chartjs-2";
import {
  ArcElement,
  Tooltip,
  Legend,
  DoughnutController,
  Chart as ChartJS,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

import {
  DoughnutChart01Props,
  DoughnutChart02Props,
} from "@/interfaces/partials-components-interfaces";
import { DoughnutChartOptions } from "@/utils/doughnut-chart-options";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  DoughnutController,
  ChartDataLabels
);

export const DoughnutChart01 = ({
  percentage,
  label,
}: DoughnutChart01Props) => {
  const chartData = useMemo(
    () => ({
      labels: [label],
      datasets: [
        {
          data: [percentage, 100 - percentage],
          backgroundColor: ["#F04C3D", "#f2f2f2"],
          hoverBackgroundColor: ["#F04C3D", "#e0e0e0"],
          borderWidth: 0,
        },
      ],
    }),
    [percentage, label]
  );

  const chartOptions = useMemo(
    () => ({
      cutout: "85%",
      plugins: {
        tooltip: {
          enabled: false,
        },
        legend: {
          display: false,
        },
        datalabels: {
          display: false,
        },
      },
    }),
    []
  );

  return (
    <div className="relative mx-auto aspect-square">
      <Doughnut data={chartData} options={chartOptions} />

      <div className="absolute inset-0 flex flex-col gap-2 items-center justify-center">
        <span className="text-heading-color lg:text-[16px] text-[14px] lg:leading-[18.9px] leading-[16.9px] font-semibold font-inter">
          {label}
        </span>
        <span className="text-[46px] font-bold">{percentage}%</span>
      </div>
    </div>
  );
};

export const DoughnutChart02 = ({ chartData }: DoughnutChart02Props) => {
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

  const options = DoughnutChartOptions();

  return (
    <div className="relative mx-auto aspect-square w-full">
      <Doughnut data={data} options={options} />
    </div>
  );
};
