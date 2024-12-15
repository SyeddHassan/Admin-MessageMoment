export interface AmChartsHeatmapProps {
  chartId?: string;
  data: {
    hour: string;
    weekday: string;
    value: number;
  }[];
}
