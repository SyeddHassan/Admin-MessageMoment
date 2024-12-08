"use client";

import React, { useMemo } from "react";

import {
  ChartJsDoughnutChart01Props,
  ChartJsDoughnutChart02Props,
} from "@/interfaces/charts/chartjs-doughnut-charts-interfaces";

import {
  ChartJsDoughnutChart01Cofigurations,
  ChartJsDoughnutChart02Options,
} from "@/configurations/chartjs-doughnut-charts-configuration";

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

export const ChartJsDoughnutChart01 = ({
  backgroundColor,
  label,
  labelColor,
  percentage,
}: ChartJsDoughnutChart01Props) => {
  const chartData = useMemo(
    () => ({
      labels: [label],
      datasets: [
        {
          data: [percentage, 100 - percentage],
          backgroundColor: backgroundColor,
          borderWidth: 0,
        },
      ],
    }),
    [percentage, label, backgroundColor]
  );

  const options = ChartJsDoughnutChart01Cofigurations();

  return (
    <div className="relative mx-auto aspect-square">
      <Doughnut data={chartData} options={options} />

      <div className="absolute inset-0 flex flex-col gap-2 items-center justify-center">
        <span
          className={`${labelColor} lg:text-[16px] text-[14px] lg:leading-[18.9px] leading-[16.9px] font-bold font-inter`}
        >
          {label}
        </span>
        <span className="text-[46px] font-bold text-heading-color">
          {percentage}%
        </span>
      </div>
    </div>
  );
};

export const ChartJsDoughnutChart02 = ({
  chartData,
}: ChartJsDoughnutChart02Props) => {
  const data = {
    labels: chartData.map((data) => data.label),
    datasets: [
      {
        data: chartData.map((data) => data.percentage),
        backgroundColor: chartData.map((data) => data.color),
      },
    ],
  };

  const options = ChartJsDoughnutChart02Options();

  return (
    <div className="relative mx-auto aspect-square lg:w-[350px] w-[300px]">
      <Doughnut data={data} options={options} />
    </div>
  );
};
