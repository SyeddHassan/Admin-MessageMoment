"use client";

import React, { useRef, useEffect } from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import type { ChartData } from "chart.js";
import zoomPlugin from "chartjs-plugin-zoom";

import { ChartJsAreaChart01Props } from "@/interfaces/charts/chartjs-area-charts-interfaces";

import { ChartJsAreaChart01Options } from "@/configurations/chartjs-area-charts-configuration";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  zoomPlugin
);

const ChartJsAreaChart01 = ({ data }: ChartJsAreaChart01Props) => {
  const chartRef = useRef<ChartJS<"line"> | null>(null);

  const labels = data.map((item) => item.date);
  const values = data.map((item) => item.value);

  useEffect(() => {
    const chart = chartRef.current;
    if (chart) {
      const gradient = chart.ctx.createLinearGradient(0, 0, 0, chart.height);
      gradient.addColorStop(0, "rgba(0, 123, 255, 0.4)");
      gradient.addColorStop(1, "rgba(0, 123, 255, 0)");
      chart.data.datasets[0].backgroundColor = gradient;
      chart.update();
    }
  }, [chartRef, data]);

  const chartData: ChartData<"line"> = {
    labels,
    datasets: [
      {
        label: "Values",
        data: values,
        borderColor: "#007bff",
        borderWidth: 2,
        pointRadius: 3,
        fill: true,
      },
    ],
  };

  const options = ChartJsAreaChart01Options;

  return (
    <div style={{ height: "400px", width: "100%" }}>
      <Line ref={chartRef} data={chartData} options={options} />
    </div>
  );
};

export default ChartJsAreaChart01;
