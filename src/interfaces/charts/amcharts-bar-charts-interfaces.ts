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
