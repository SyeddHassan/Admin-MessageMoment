import * as am5 from "@amcharts/amcharts5";
import { IMapPointSeriesDataItem } from "@amcharts/amcharts5/map";

export interface AmChartsHeatmapProps {
  chartId?: string;
  data: {
    hour: string;
    weekday: string;
    value: number;
  }[];
}

export interface MapDataContextInterface
  extends am5.DataItem<IMapPointSeriesDataItem> {
  dataContext: {
    sessions: number;
    users: number;
  };
}
