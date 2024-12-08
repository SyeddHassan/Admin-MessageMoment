export interface AmChartsBarChart01Props {
  chartId?: string;
  selectedTab?: string;
  data: {
    date: string;
    users: number;
    sessions: number;
    projectMode: number;
  }[];
}

export interface AmChartsBarChart02Props {
  chartId?: string;
  data: {
    time: string;
    sessions: number;
  }[];
}

export interface AmChartsBarChart03Props {
  chartId?: string;
  data: { month: string; sessions: number; activations: number }[];
}
