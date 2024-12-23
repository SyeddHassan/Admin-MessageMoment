import {
  ChartJsBarChart04Props,
  ChartJsBarChart05Props,
} from "@/interfaces/charts/chartjs-bar-chart-interfaces";
import { ChartData } from "chart.js";
import { Bar } from "react-chartjs-2";
import {
  chartJsBarChart04Options,
  chartJsBarChart05Options,
} from "../configrations/chartjs-bar-chart-configrations";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export const ChartJsBarChart04 = ({ data }: ChartJsBarChart04Props) => {
  const chartData: ChartData<"bar", number[], string> = {
    labels: data.labels,
    datasets: [
      {
        label: "Active Users",
        data: data.values,
        backgroundColor: "#2D88E5",
        borderWidth: 0,
        borderColor: "#2D88E5",
        borderRadius: 4,
      },
    ],
  };

  const options = chartJsBarChart04Options();
  return <Bar data={chartData} options={options} />;
};

export const ChartJsBarChart05 = ({
  data,
}: {
  data: Array<{ category: string; sources: number; chatCreations: number }>;
}) => {
  const chartData = {
    labels: data.map((item) => item.category), // Map categories
    datasets: [
      {
        label: "Sources",
        data: data.map((item) => item.sources), // Map sources values
        backgroundColor: "#2D88E5",
        borderRadius: 3,
        barThickness: 45,
        barPercentage: 0.5,
        categoryPercentage: 0.9,
      },
      {
        label: "Chat Creations",
        data: data.map((item) => item.chatCreations), // Map chatCreations values
        backgroundColor: "#AB40E8",
        borderRadius: 3,
        barThickness: 45,
        barPercentage: 0.5,
        categoryPercentage: 0.9,
      },
    ],
  };

  const options = chartJsBarChart05Options();
  return <Bar data={chartData} options={options} />;
};
