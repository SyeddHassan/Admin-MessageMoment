export interface AmChartsHeatmapProps {
  chartId?: string;
  data: {
    hour: string;
    weekday: string;
    value: number;
  }[];
}

export interface MapDataContextInterface {
  dataContext: {
    sessions: number;
    users: number;
  };
}
