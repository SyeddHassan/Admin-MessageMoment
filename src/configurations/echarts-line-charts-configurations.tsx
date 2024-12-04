import * as echarts from "echarts/core";
import { GridComponent } from "echarts/components";
import { LineChart } from "echarts/charts";
import { UniversalTransition } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";

import { EChartsLineChart01OptionsProps } from "@/interfaces/charts/echarts-line-charts-interfaces";

echarts.use([GridComponent, LineChart, CanvasRenderer, UniversalTransition]);

export const EChartsLineChart01Options = (
  data: EChartsLineChart01OptionsProps[]
) => {
  const dates = data.map((point) => point.date);
  const values = data.map((point) => point.value);

  return {
    tooltip: {
      trigger: "axis",
    },
    grid: {
      left: "10%",
      right: "10%",
      bottom: "10%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      data: dates,
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
        fontFamily: "JetBrains mono",
        color: "#000",
      },
    },
    series: [
      {
        data: values,
        type: "line",
        smooth: true,
        lineStyle: {
          width: 2,
        },
        itemStyle: {
          color: "#5470C6",
        },
      },
    ],
    dataZoom: [
      {
        type: "inside",
        start: 0,
        end: 100,
      },
    ],
  };
};
