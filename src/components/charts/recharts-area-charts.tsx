import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

import { ReChartsAreaChart01Props } from "@/interfaces/charts/recharts-area-charts-interfaces";

export const ReChartsAreaChart01 = ({
  chartData,
}: ReChartsAreaChart01Props) => {
  return (
    <div style={{ overflowX: "auto", width: "100%" }}>
      <div style={{ minWidth: "600px", height: "600px" }}>
        <ResponsiveContainer>
          <AreaChart
            data={chartData}
            margin={{ top: 50, right: 20, left: 10, bottom: 10 }}
          >
            {/* Grid */}
            <CartesianGrid strokeDasharray="3 3" vertical={false} />

            {/* X-Axis */}
            <XAxis
              dataKey="date"
              axisLine={false}
              tickLine={false}
              tick={{
                fontSize: 12,
                fill: "#000000",
                fontFamily: "Inter",
              }}
              padding={{ left: 20, right: 20 }}
            />

            {/* Y-Axis */}
            <YAxis
              domain={[0, 24]}
              tickCount={13}
              axisLine={false}
              tickLine={false}
              tick={{
                fontSize: 12,
                fill: "#000000",
                fontFamily: "Jetbrains mono",
              }}
              unit=":00"
            />

            {/* Tooltip */}
            <Tooltip
              formatter={(value: number) => `${Math.floor(value)}:00`}
              labelFormatter={(label: string) => `Date: ${label}`}
            />

            {/* Legend */}
            <Legend
              verticalAlign="top"
              align="center"
              height={30}
              wrapperStyle={{
                fontSize: 12,
                fontFamily: "Inter",
                marginBottom: 10,
              }}
            />

            {/* Areas */}
            <Area
              type="monotone"
              dataKey="standard"
              name="Standard"
              stroke="#4338CA"
              strokeWidth={3}
              fill="rgba(108, 93, 211, 0.3)"
            />
            <Area
              type="monotone"
              dataKey="secure"
              name="Secure"
              stroke="#C53030"
              strokeWidth={3}
              fill="rgba(255, 92, 141, 0.3)"
            />
            <Area
              type="monotone"
              dataKey="wallet"
              name="Wallet"
              stroke="#0F766E"
              strokeWidth={3}
              fill="rgba(52, 211, 153, 0.3)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
