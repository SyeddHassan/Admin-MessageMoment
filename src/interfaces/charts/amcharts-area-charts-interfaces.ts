export interface AmChartsAreaChart01Props {
  chartId?: string;
  data: {
    date: string;
    standard: number;
    secure: number;
    wallet: number;
  }[];
}

export interface AmChartsAreaChart02Props {
  chartId?: string;
  data: {
    date: string;
    value: number;
  }[];
}
