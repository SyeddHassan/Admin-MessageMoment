"use client";

import React, { useLayoutEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { useTheme } from "next-themes";

import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import * as am5exporting from "@amcharts/amcharts5/plugins/exporting";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import am5themes_Dark from "@amcharts/amcharts5/themes/Dark";

import { AmChartsHeatmapProps } from "@/interfaces/map-interfaces";

export const AmChartsHeatmap = ({
  chartId = uuidv4(),
  data,
}: AmChartsHeatmapProps) => {
  const { theme } = useTheme();

  const chartRef = useRef<am5.Root | null>(null);

  useLayoutEffect(() => {
    if (chartRef.current) {
      chartRef.current.dispose();
    }

    const root = am5.Root.new(chartId);
    chartRef.current = root;

    if (theme === "dark") {
      root.setThemes([am5themes_Dark.new(root)]);
    } else {
      root.setThemes([am5themes_Animated.new(root)]);
    }

    const chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: true,
        panY: false,
        wheelX: "panX",
        wheelY: "zoomX",
        pinchZoomX: true,
        layout: root.verticalLayout,
        paddingLeft: 0,
      })
    );

    const exporting = am5exporting.Exporting.new(root, {
      filePrefix: "chart",
      pngOptions: { quality: 0.8 },
      pdfOptions: { addURL: true },
      menu: am5exporting.ExportingMenu.new(root, {
        align: "right",
        valign: "top",
      }),
    });

    if (exporting) {
      exporting.get("menu")?.setAll({
        items: [
          {
            type: "format",
            label: "Save as PNG",
            format: "png",
          },
          {
            type: "format",
            label: "Save as PDF",
            format: "pdf",
          },
          {
            type: "format",
            label: "Export Data as CSV",
            format: "csv",
          },
        ],
      });
    }

    const yRenderer = am5xy.AxisRendererY.new(root, {
      visible: true,
      minGridDistance: 20,
      inversed: false,
      minorGridEnabled: true,
    });
    yRenderer.grid.template.set("visible", false);
    const yAxis = chart.yAxes.push(
      am5xy.CategoryAxis.new(root, {
        maxDeviation: 0,
        renderer: yRenderer,
        categoryField: "hour",
      })
    );

    const xRenderer = am5xy.AxisRendererX.new(root, {
      visible: true,
      minGridDistance: 30,
      opposite: true,
      minorGridEnabled: true,
    });
    xRenderer.grid.template.set("visible", false);
    const xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        renderer: xRenderer,
        categoryField: "weekday",
      })
    );

    xAxis.get("renderer").labels.template.setAll({
      fontSize: "14px",
      fontFamily: "Inter",
      fontWeight: "normal",
    });

    yAxis.get("renderer").labels.template.setAll({
      fontSize: "14px",
      fontFamily: "Inter",
      fontWeight: "normal",
    });

    const series = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        calculateAggregates: true,
        stroke: am5.color(0xffffff),
        clustered: false,
        xAxis: xAxis,
        yAxis: yAxis,
        categoryXField: "weekday",
        categoryYField: "hour",
        valueField: "value",
      })
    );

    series.columns.template.setAll({
      tooltipText: "{value}",
      strokeOpacity: 1,
      strokeWidth: 1,
      width: am5.percent(80),
      height: am5.percent(80),
    });

    series.columns.template.events.on("pointerover", function (event) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const di = event.target.dataItem as any;
      if (di) {
        heatLegend.showValue(di.get("value", 0));
      }
    });

    series.events.on("datavalidated", function () {
      heatLegend.set("startValue", series.getPrivate("valueHigh"));
      heatLegend.set("endValue", series.getPrivate("valueLow"));
    });

    series.set("heatRules", [
      {
        target: series.columns.template,
        min: am5.color(0xfffb77),
        max: am5.color(0xfe131a),
        dataField: "value",
        key: "fill",
      },
    ]);

    const heatLegend = chart.bottomAxesContainer.children.push(
      am5.HeatLegend.new(root, {
        orientation: "horizontal",
        endColor: am5.color(0xfffb77),
        startColor: am5.color(0xfe131a),
      })
    );

    const largeDataset = data;
    series.data.setAll(largeDataset);

    const weekdays: string[] = [];
    const hours: string[] = [];
    largeDataset.forEach((row) => {
      if (!weekdays.includes(row.weekday)) {
        weekdays.push(row.weekday);
      }
      if (!hours.includes(row.hour)) {
        hours.push(row.hour);
      }
    });

    xAxis.data.setAll(weekdays.map((item) => ({ weekday: item })));
    yAxis.data.setAll(hours.map((item) => ({ hour: item })));

    chart.appear(1000, 100);

    return () => {
      exporting.dispose();
      root.dispose();
    };
  }, [chartId, data, theme]);

  return <div id={chartId} className="w-full h-full" />;
};
