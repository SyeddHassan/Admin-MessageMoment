import { ScriptableContext, ChartArea } from "chart.js";

export interface ChartJsDoughnutChart01Props {
  backgroundColor: [string, string];
  label: string;
  labelColor: string;
  percentage: number;
}

export interface ChartJsDoughnutChart02Props {
  chartData: { label: string; percentage: number; color: string }[];
}

export type ChartJsDoughnutChart03ChartContextType =
  ScriptableContext<"doughnut"> & {
    chart: {
      ctx: CanvasRenderingContext2D;
      chartArea?: ChartArea;
    };
  };
