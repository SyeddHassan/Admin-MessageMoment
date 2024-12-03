"use client";

import React, { useMemo } from "react";

import { ChartJsDoughnutChart01Props } from "@/interfaces/charts/chartjs-doughnut-charts-interfaces";

import { ChartJsDoughnutChart01Options } from "@/configurations/chartjs-doughnut-charts-configuration";

import { Doughnut } from "react-chartjs-2";
import {
  ArcElement,
  Tooltip,
  Legend,
  DoughnutController,
  Chart as ChartJS,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, DoughnutController);

export const ChartJsDoughnutChart01 = ({
  percentage,
  label,
  backgroundColor,
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

  const options = ChartJsDoughnutChart01Options();

  return (
    <div className="relative mx-auto aspect-square">
      <Doughnut data={chartData} options={options} />

      <div className="absolute inset-0 flex flex-col gap-2 items-center justify-center">
        <span className="text-heading-color lg:text-[16px] text-[14px] lg:leading-[18.9px] leading-[16.9px] font-semibold font-inter">
          {label}
        </span>
        <span className="text-[46px] font-bold">{percentage}%</span>
      </div>
    </div>
  );
};
