import React from "react";

import { ReChartsLineChart01Props } from "@/interfaces/charts/recharts-line-charts-interfaces";

import {
  CartesianGrid,
  Line as ReChartsLine,
  LineChart,
  ResponsiveContainer,
  Tooltip as ReChartsToolTip,
  XAxis,
  YAxis,
} from "recharts";

import {
  ReChartsLineChart01CustomDot,
  ReChartsLineChart01CustomTooltip,
} from "@/configurations/recharts-line-charts-configurations";

export const ReChartsLineChart01 = ({
  chartData,
}: ReChartsLineChart01Props) => {
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
        <ReChartsToolTip content={<ReChartsLineChart01CustomTooltip />} />
        <ReChartsLine
          type="monotone"
          dataKey="high"
          stroke="#88BAE7"
          strokeWidth={2}
          dot={<ReChartsLineChart01CustomDot index={0} dataKey={""} />}
        />
        <ReChartsLine
          type="monotone"
          dataKey="low"
          stroke="hsl(220, 9%, 46%)"
          strokeWidth={2}
          dot={<ReChartsLineChart01CustomDot index={0} dataKey={""} />}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};
