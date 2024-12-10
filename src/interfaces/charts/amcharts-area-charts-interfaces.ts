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
  data: { date: string; value: number }[];
}

export interface AmChartsAreaChart03Props {
  chartId?: string;
  data: { date: number; value: number }[];
}

export interface AmChartsAreaChart04Props {
  chartId?: string;
  data: {
    timestamp: Date;
    responseTime: number;
    contentLength: number;
  }[];
}

export interface AmChartsAreaChart05Props {
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
