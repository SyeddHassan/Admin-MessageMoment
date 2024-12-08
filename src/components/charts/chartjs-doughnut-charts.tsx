"use client";

import React, { useMemo } from "react";
import { useTheme } from "next-themes";

import {
  ChartJsDoughnutChart01Props,
  ChartJsDoughnutChart02Props,
  ChartJsDoughnutChart03ChartContextType,
} from "@/interfaces/charts/chartjs-doughnut-charts-interfaces";

import {
  ChartJsDoughnutChart01Cofigurations,
  ChartJsDoughnutChart02Cofigurations,
  ChartJsDoughnutChart03Configurations,
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

  const options = ChartJsDoughnutChart02Cofigurations();

  return (
    <div className="relative mx-auto aspect-square lg:w-[350px] w-[300px]">
      <Doughnut data={data} options={options} />
    </div>
  );
};

export const ChartJsDoughnutChart03 = ({
  percentage,
}: {
  percentage: number;
}) => {
  const { theme } = useTheme();
  const isDarkTheme = theme === "dark";

  const data = {
    labels: [],
    datasets: [
      {
        data: [percentage, 100 - percentage],
        backgroundColor: (context: ChartJsDoughnutChart03ChartContextType) => {
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

  const options = ChartJsDoughnutChart03Configurations();

  return (
    <div className="relative mx-auto aspect-square">
      <Doughnut data={data} options={options} />

      <div className="absolute inset-0 flex flex-col gap-2 items-center justify-center">
        <span className="text-paragraph-color lg:text-[16px] text-[14px] lg:leading-[18.9px] leading-[16.9px] font-bold font-inter">
          Percent
        </span>
        <span className="text-[46px] font-bold text-heading-color">
          {percentage}%
        </span>
      </div>
    </div>
  );
};
