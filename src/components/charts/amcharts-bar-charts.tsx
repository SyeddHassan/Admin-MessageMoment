import React, { useLayoutEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

import { AmChartsBarChart01Props } from "@/interfaces/charts/amcharts-bar-charts-interfaces";

export const AmChartsBarChart01 = ({
  chartId = uuidv4(),
  data,
}: AmChartsBarChart01Props) => {
  const chartRef = useRef<am5.Root | null>(null);

  useLayoutEffect(() => {
    const root = am5.Root.new(chartId);
    chartRef.current = root;

    root.setThemes([am5themes_Animated.new(root)]);

    const chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: true,
        panY: true,
        wheelX: "panX",
        wheelY: "zoomX",
        layout: root.verticalLayout,
      })
    );

    const xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        categoryField: "date",
        renderer: am5xy.AxisRendererX.new(root, {
          minGridDistance: 30,
          cellStartLocation: 0.1,
          cellEndLocation: 0.9,
        }),
        tooltip: am5.Tooltip.new(root, {}),
      })
    );

    xAxis.get("renderer").labels.template.setAll({
      fontSize: "14px",
      fontFamily: "Inter",
      fontWeight: "normal",
    });

    const yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {
          strokeOpacity: 0.1,
        }),
      })
    );

    yAxis.get("renderer").labels.template.setAll({
      fontSize: "14px",
      fontFamily: "JetBrains Mono",
      fontWeight: "normal",
    });

    xAxis.get("renderer").grid.template.set("visible", false);

    yAxis.get("renderer").grid.template.setAll({
      strokeDasharray: [2, 2],
      stroke: am5.color(0x000000),
      strokeOpacity: 0.15,
    });

    const usersSeries = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        name: "Users",
        xAxis,
        yAxis,
        valueYField: "users",
        categoryXField: "date",
        tooltip: am5.Tooltip.new(root, {
          labelText: "{name}: {valueY}",
          pointerOrientation: "horizontal",
          dx: 5,
        }),
        clustered: true,
      })
    );

    const sessionsSeries = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        name: "Sessions",
        xAxis,
        yAxis,
        valueYField: "sessions",
        categoryXField: "date",
        tooltip: am5.Tooltip.new(root, {
          labelText: "{name}: {valueY}",
          pointerOrientation: "horizontal",
          dx: 5,
        }),
        clustered: true,
      })
    );

    const projectModeSeries = chart.series.push(
      am5xy.LineSeries.new(root, {
        name: "Project Mode",
        xAxis,
        yAxis,
        valueYField: "projectMode",
        categoryXField: "date",
        tooltip: am5.Tooltip.new(root, {
          labelText: "{name}: {valueY}",
          pointerOrientation: "horizontal",
          dx: 5,
        }),
      })
    );

    projectModeSeries.bullets.push(function () {
      return am5.Bullet.new(root, {
        sprite: am5.Circle.new(root, {
          radius: 4,
          fill: am5.color(0xef4444),
          stroke: am5.color(0xffffff),
          strokeWidth: 2,
        }),
      });
    });

    projectModeSeries.setAll({
      stroke: am5.color(0xef4444),
    });

    usersSeries.setAll({
      fill: am5.color(0x3b82f6),
      stroke: am5.color(0x3b82f6),
    });

    sessionsSeries.setAll({
      fill: am5.color(0x8b5cf6),
      stroke: am5.color(0x8b5cf6),
    });

    usersSeries.columns.template.states.create("hover", {
      fillOpacity: 0.8,
      scale: 1.02,
    });

    sessionsSeries.columns.template.states.create("hover", {
      fillOpacity: 0.8,
      scale: 1.02,
    });

    chart.set(
      "cursor",
      am5xy.XYCursor.new(root, {
        behavior: "none",
        xAxis: xAxis,
        yAxis: yAxis,
      })
    );

    chart.set(
      "scrollbarX",
      am5.Scrollbar.new(root, {
        orientation: "horizontal",
        opacity: 0.6,
      })
    );

    const legend = chart.children.push(
      am5.Legend.new(root, {
        centerX: am5.p50,
        x: am5.p50,
        y: 0,
        layout: root.horizontalLayout,
        marginBottom: 20,
        paddingTop: 15,
      })
    );

    legend.data.setAll(chart.series.values);
    chart.set("paddingTop", 50);

    legend.labels.template.setAll({
      fontSize: "14px",
      fontFamily: "Inter",
      fontWeight: "normal",
    });

    legend.markers.template.setAll({
      width: 18,
      height: 18,
    });

    legend.data.setAll(chart.series.values);

    xAxis.data.setAll(data);
    usersSeries.data.setAll(data);
    sessionsSeries.data.setAll(data);
    projectModeSeries.data.setAll(data);

    chart.appear(1000, 100);

    return () => {
      root.dispose();
    };
  }, [chartId, data]);

  return <div id={chartId} className="w-full h-full" />;
};
