import { ChartOptions } from "chart.js";
import { TooltipProps } from "recharts";

import { LineChart02CustomizationProps } from "@/interfaces/options-interfaces";

export const LineChart01Options = (): ChartOptions<"line"> => {
  return {
    responsive: true,
    maintainAspectRatio: false,

    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },

    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        display: false,
      },
    },

    elements: {
      point: {
        radius: 0,
      },
      line: {
        tension: 0.3,
      },
    },
  };
};

export const LineChart02CustomTooltip = ({
  active,
  payload,
  label,
}: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg shadow-lg">
        <div className="rounded-t-lg bg-blue-500 p-2">
          <p className="text-sm font-medium text-white">{label}</p>
        </div>
        <div className="bg-white p-2">
          {payload.map((entry, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 text-sm text-gray-800"
            >
              <div
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: entry.color }}
              ></div>
              <p className="flex-1">{entry.name}</p>
              <p>{`00:${entry.value?.toString().padStart(2, "0")}`}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return null;
};

export const LineChart02CustomDot = ({
  cx,
  cy,
  index,
  value,
  dataKey,
}: LineChart02CustomizationProps) => {
  if (cx !== undefined && cy !== undefined && index % 3 === 0) {
    const boxColor = dataKey === "high" ? "#88BAE7" : "hsl(220, 9%, 46%)";

    return (
      <g>
        <rect
          x={cx - 10}
          y={cy - 10}
          width={20}
          height={20}
          rx={5}
          ry={5}
          fill={boxColor}
        />
        <text
          x={cx}
          y={cy}
          textAnchor="middle"
          dominantBaseline="middle"
          fill="white"
          fontSize={10}
        >
          {value}
        </text>
      </g>
    );
  }
  return null;
};
