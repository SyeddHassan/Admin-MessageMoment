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

export interface AmChartsBarChart04Props {
  chartId?: string;
  data: {
    category: string;
    value: number;
  }[];
}

export interface AmChartsBarChart05ChartDataProps {
  category: string;
  sources: number;
  chatCreations: number;
}

export interface AmChartsBarChart05Props {
  chartId?: string;
  data: AmChartsBarChart05ChartDataProps[];
}
