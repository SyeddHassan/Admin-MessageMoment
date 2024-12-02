import React from "react";

import {
  LineChart01Props,
  LineChart02Props,
} from "@/interfaces/partials-components-interfaces";

import {
  LineChart01Options,
  LineChart02CustomDot,
  LineChart02CustomTooltip,
} from "@/options/line-chart-options";

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
import {
  CartesianGrid,
  Line as ReChartsLine,
  LineChart,
  ResponsiveContainer,
  Tooltip as ReChartsToolTip,
  XAxis,
  YAxis,
} from "recharts";
import { Line } from "react-chartjs-2";

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

  const options = LineChart01Options();

  return (
    <div className="h-full w-full flex justify-center flex-col gap-12">
      {chartData.map((data, index) => (
        <div key={index} className="w-full flex flex-col gap-6">
          <div className="w-full h-full flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: data.color }}
              />
              <h1 className="font-inter text-heading-color text-[14px]">
                {data.name}
              </h1>
            </div>

            <p className="font-bold text-[14px]">{data.value}</p>
          </div>

          <div className="relative h-12 w-full">
            <Line
              data={createChartData(data.data, data.color)}
              options={options}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export const LineChart02 = ({ chartData }: LineChart02Props) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={chartData}
        margin={{ top: 30, right: 20, left: 20, bottom: 10 }}
      >
        <CartesianGrid
          strokeDasharray="3 3"
          vertical={false}
          stroke="hsl(220, 9%, 90%)"
        />
        <XAxis
          dataKey="date"
          axisLine={false}
          tickLine={false}
          tick={{
            fill: "#000000",
            fontSize: 12,
            fontFamily: "Inter",
          }}
          dy={10}
        />
        <YAxis
          domain={[0, 40]}
          ticks={[5, 10, 15, 20, 25, 30, 35, 40]}
          axisLine={false}
          tickLine={false}
          tick={{ fill: "#000000", fontSize: 12 }}
          dx={-10}
        />
        <ReChartsToolTip content={<LineChart02CustomTooltip />} />
        <ReChartsLine
          type="monotone"
          dataKey="high"
          stroke="#88BAE7"
          strokeWidth={2}
          dot={<LineChart02CustomDot index={0} dataKey={""} />}
        />
        <ReChartsLine
          type="monotone"
          dataKey="low"
          stroke="hsl(220, 9%, 46%)"
          strokeWidth={2}
          dot={<LineChart02CustomDot index={0} dataKey={""} />}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};


