"use client";

import React, { useEffect } from "react";
import * as echarts from "echarts";

import { EChartsBarChart01Options } from "@/configurations/echarts-bar-charts-configurations";

import { EChartsBarChart01Props } from "@/interfaces/charts/echarts-bar-charts-interfaces";

export const EChartsBarChart01 = ({ chartData }: EChartsBarChart01Props) => {
  useEffect(() => {
    const chartDom = document.getElementById("chart")!;
    const myChart = echarts.init(chartDom);

    const chartOption = EChartsBarChart01Options(chartData);
    myChart.setOption(chartOption);

    const observer = new ResizeObserver(() => {
      myChart.resize();
    });

    observer.observe(chartDom);

    return () => {
      myChart.dispose();
      observer.disconnect();
    };
  }, [chartData]);

  return (
    <div
      id="chart"
      className="h-full w-full" 
      style={{ maxHeight: "100%", overflow: "hidden" }}
    />
  );
};
