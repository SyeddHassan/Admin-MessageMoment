"use client";

import React, { useEffect } from "react";
import * as echarts from "echarts";

import { EChartsLineChart01Props } from "@/interfaces/charts/echarts-line-charts-interfaces";

import { EChartsLineChart01Options } from "@/configurations/echarts-line-charts-configurations";

export const EChartsLineChart01 = ({
  chartId,
  chartData,
}: EChartsLineChart01Props) => {
  useEffect(() => {
    const chartDom = document.getElementById(chartId)!;
    const myChart = echarts.init(chartDom);

    const chartOption = EChartsLineChart01Options(chartData);
    myChart.setOption(chartOption);

    const observer = new ResizeObserver(() => {
      myChart.resize();
    });

    observer.observe(chartDom);

    return () => {
      myChart.dispose();
      observer.disconnect();
    };
  }, [chartId, chartData]);

  return <div id={chartId} className="h-full w-full" />;
};
