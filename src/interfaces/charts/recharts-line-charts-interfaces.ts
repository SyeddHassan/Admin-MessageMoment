import { DotProps } from "recharts";

export interface ReChartsLineChart01Props {
  chartData: {
    date: string;
    high: number;
    low: number;
  }[];
}

export type ReChartsLineChart01CustomizationProps = DotProps & {
  index: number;
  value?: number;
  dataKey: string;
};
