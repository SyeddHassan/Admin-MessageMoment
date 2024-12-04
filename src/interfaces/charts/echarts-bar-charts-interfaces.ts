import {
  BarSeriesOption,
  DataZoomComponentOption,
  GridComponentOption,
  TooltipComponentOption,
} from "echarts";

export interface EChartsBarChart01Props {
  chartData: number[];
}

export type EChartsBarChart01OptionsProps =
  | number
  | echarts.ComposeOption<
      | TooltipComponentOption
      | GridComponentOption
      | DataZoomComponentOption
      | BarSeriesOption
    >;
