"use client";

import React, { useLayoutEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { useTheme } from "next-themes";

import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import * as am5exporting from "@amcharts/amcharts5/plugins/exporting";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import am5themes_Dark from "@amcharts/amcharts5/themes/Dark";

import { AmChartsAreaChart01Props } from "@/interfaces/charts/amcharts-area-charts-interfaces";

export const AmChartsAreaChart01 = ({
  chartId = uuidv4(),
  data,
}: AmChartsAreaChart01Props) => {
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
        panY: true,
        wheelX: "panX",
        wheelY: "zoomX",
        pinchZoomX: true,
        pinchZoomY: true,
        layout: root.verticalLayout,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20,
        paddingBottom: 60,
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

    const colors = {
      standard: am5.color("#3B82F6"),
      secure: am5.color("#10B981"),
      wallet: am5.color("#F59E0B"),
    };

    const xAxis = chart.xAxes.push(
      am5xy.DateAxis.new(root, {
        baseInterval: { timeUnit: "day", count: 1 },
        renderer: am5xy.AxisRendererX.new(root, {
          minGridDistance: 50,
          cellStartLocation: 0.1,
          cellEndLocation: 0.9,
        }),
        tooltip: am5.Tooltip.new(root, {}),
      })
    );

    const yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {
          opposite: false,
        }),
        min: 8,
        max: 22,
        strictMinMax: true,
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

    const createSeries = (name: string, field: string, color: am5.Color) => {
      const series = chart.series.push(
        am5xy.LineSeries.new(root, {
          name: name,
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: field,
          valueXField: "date",
          tooltip: am5.Tooltip.new(root, {
            pointerOrientation: "horizontal",
            labelText: `{name}[/]\n{valueX.formatDate()}: {valueY}:00[/]`,
          }),
        })
      );

      series.strokes.template.setAll({
        strokeWidth: 3,
        stroke: color,
      });

      series.fills.template.setAll({
        fillOpacity: 0.1,
        visible: true,
        fill: color,
      });

      return series;
    };

    createSeries("Standard", "standard", colors.standard);
    createSeries("Secure", "secure", colors.secure);
    createSeries("Wallet", "wallet", colors.wallet);

    const formattedData = data.map((item) => ({
      ...item,
      date: new Date(item.date).getTime(),
    }));

    chart.series.each((series) => series.data.setAll(formattedData));

    const cursor = chart.set(
      "cursor",
      am5xy.XYCursor.new(root, {
        behavior: "zoomX",
        xAxis: xAxis,
      })
    );
    cursor.lineY.set("visible", false);

    const legend = chart.children.push(
      am5.Legend.new(root, {
        centerX: am5.p50,
        x: am5.p50,
        marginTop: 15,
        marginBottom: 25,
        layout: root.horizontalLayout,
        dy: -30,
        position: "absolute",
      })
    );

    legend.labels.template.setAll({
      fontSize: 14,
      fontFamily: "Inter",
    });

    legend.data.setAll(chart.series.values);

    chart.appear(1000, 100);

    return () => {
      exporting.dispose();
      root.dispose();
    };
  }, [chartId, data, theme]);

  return <div id={chartId} className="w-full h-full" />;
};
