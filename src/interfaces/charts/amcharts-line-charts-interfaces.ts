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
  data: {
    timestamp: string;
    usage: number;
  }[];
}

export interface AmChartsLineChart04Props {
  chartId?: string;
  data: {
    timestamp: Date;
    responseTime: number;
    contentLength: number;
  }[];
}

export interface AmChartsLineChart05Props {
  chartId?: string;
  data: {
    timestamp: Date;
    ASPState: number;
    DBADMIN: number;
    master: number;
    msdb: number;
    tempdb: number;
  }[];
}
