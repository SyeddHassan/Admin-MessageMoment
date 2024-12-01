import React, { useLayoutEffect, useRef } from "react";

import { PieChartProps } from "@/interfaces/partials-components-interfaces";

import * as am5 from "@amcharts/amcharts5";
import * as am5percent from "@amcharts/amcharts5/percent";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

const PieChart = ({ chartId, data }: PieChartProps) => {
  const chartRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!chartRef.current) return;

    const root = am5.Root.new(chartId);

    root.setThemes([am5themes_Animated.new(root)]);

    const chart = root.container.children.push(
      am5percent.PieChart.new(root, {
        endAngle: 270,
      })
    );

    const series = chart.series.push(
      am5percent.PieSeries.new(root, {
        valueField: "value",
        categoryField: "category",
        endAngle: 270,
      })
    );

    series.states.create("hidden", {
      endAngle: -90,
    });

    series.data.setAll(
      data.map((item) => ({
        ...item,
        color: item.color ? am5.color(item.color) : undefined,
      }))
    );

    series.slices.template.setAll({
      fillOpacity: 0.9,
      strokeWidth: 1,
      strokeOpacity: 0.5,
    });

    chart.appear(1000, 100);

    return () => root.dispose();
  }, [chartId, data]);

  return <div id={chartId} ref={chartRef} className="w-full h-full" />;
};

export default PieChart;
