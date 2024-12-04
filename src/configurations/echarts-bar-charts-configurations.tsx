import * as echarts from "echarts/core";
import {
  TooltipComponent,
  GridComponent,
  DataZoomComponent,
} from "echarts/components";
import { BarChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";

echarts.use([
  TooltipComponent,
  GridComponent,
  DataZoomComponent,
  BarChart,
  CanvasRenderer,
]);

import { EChartsBarChart01OptionsProps } from "@/interfaces/charts/echarts-bar-charts-interfaces";

export const EChartsBarChart01Options = (
  data: EChartsBarChart01OptionsProps[]
) => {
  const timeRanges = Array.from({ length: 6 }, (_, i) => {
    const start = i * 10;
    const end = start + 10;
    return `${start}m 0s - ${end}m 0s`;
  });

  return {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "10%",
      containLabel: true,
    },
    dataZoom: [
      {
        type: "inside",
        start: 0,
        end: 100,
        zoomOnMouseWheel: true,
        moveOnMouseMove: true,
        moveOnMouseWheel: true,
      },
    ],
    xAxis: {
      type: "category",
      data: timeRanges,
      axisTick: {
        alignWithLabel: true,
      },
      axisLabel: {
        fontSize: 12,
        fontFamily: "Inter",
        color: "#000",
      },
    },
    yAxis: {
      type: "value",
      axisLabel: {
        fontSize: 12,
        fontFamily: "Jetbrains mono",
        color: "#000",
      },
    },
    series: [
      {
        name: "Active Users",
        type: "bar",
        barWidth: "60%",
        data: data,
        itemStyle: {
          color: "#16A34A",
        },
        label: {
          show: true,
          position: "top",
          fontSize: 12,
          fontFamily: "Jetbrains mono",
        },
      },
    ],
  };
};
