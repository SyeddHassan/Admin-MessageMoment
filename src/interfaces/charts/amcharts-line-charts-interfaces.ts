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
  chartId?: string;
  data: {
    date: string;
    standard: number;
    secure: number;
    wallet: number;
  }[];
}

export interface AmChartsLineChart03Props {
  chartId: string;
  data: { date: string; value: number }[];
}