"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

import { LineChart01Props } from "@/interfaces/partials-components-interfaces";

import { LineChart01Options } from "@/utils/line-chart-options";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Title,
  Tooltip,
  Legend
);

export const LineChart01 = ({ chartData }: LineChart01Props) => {
  const createChartData = (data: number[], color: string) => ({
    labels: new Array(data.length).fill(""),
    datasets: [
      {
        data,
        fill: true,
        borderColor: color,
        backgroundColor: `${color}15`,
        borderWidth: 2,
      },
    ],
  });

  return (
    <div className="h-full w-full flex justify-center flex-col gap-12">
      {chartData.map((data, index) => (
        <div key={index} className="w-full flex flex-col gap-6">
          <div className="w-full h-full flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: data.color }}
              />
              <h1 className="font-medium font-inter text-heading-color">
                {data.name}
              </h1>
            </div>

            <p className="font-bold">{data.value}</p>
          </div>

          <div className="relative h-12 w-full">
            <Line
              data={createChartData(data.data, data.color)}
              options={LineChart01Options}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
