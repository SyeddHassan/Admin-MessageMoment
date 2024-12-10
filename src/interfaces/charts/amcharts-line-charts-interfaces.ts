export interface AmChartsLineChart01Props {
  chartId?: string;
  data: {
    date: string;
    high: number;
    low: number;
    highTime: string;
    lowTime: string;
  }[];
}

export interface AmChartsLineChart02Props {
  chartId: string;
  data: { date: string; value: number }[];
}

export interface AmChartsLineChart03Props {
  chartId: string;
  chart_config: {
    data_point: number;
    update_interval: number;
    min_value: number;
    max_value: number;
    color: number;
  };
  generateCPUData: (lastValue: number) => number;
}
