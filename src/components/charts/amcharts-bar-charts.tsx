"use client";

import React, { useLayoutEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { useTheme } from "next-themes";

import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import * as am5exporting from "@amcharts/amcharts5/plugins/exporting";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import am5themes_Dark from "@amcharts/amcharts5/themes/Dark";

import {
  AmChartsBarChart01Props,
  AmChartsBarChart02Props,
  AmChartsBarChart03Props,
} from "@/interfaces/charts/amcharts-bar-charts-interfaces";

export const AmChartsBarChart01 = ({
  chartId = uuidv4(),
  data,
}: AmChartsBarChart01Props) => {
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

    const xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        categoryField: "date",
        renderer: am5xy.AxisRendererX.new(root, {
          minGridDistance: 30,
          cellStartLocation: 0.1,
          cellEndLocation: 0.9,
          strokeOpacity: 0.1,
        }),
        tooltip: am5.Tooltip.new(root, {}),
      })
    );

    const yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {
          strokeOpacity: 0.1,
        }),
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

    xAxis.get("renderer").grid.template.set("visible", false);

    yAxis.get("renderer").grid.template.setAll({
      strokeOpacity: 0.1,
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
      exporting.dispose();
      root.dispose();
    };
  }, [chartId, data, theme]);

  return <div id={chartId} className="w-full h-full" />;
};

export const AmChartsBarChart02 = ({
  chartId = uuidv4(),
  data,
}: AmChartsBarChart02Props) => {
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
        paddingLeft: 10,
        paddingRight: 1,
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

    const cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
    cursor.lineY.set("visible", false);

    const xRenderer = am5xy.AxisRendererX.new(root, {
      minGridDistance: 30,
      minorGridEnabled: true,
    });

    xRenderer.labels.template.setAll({
      rotation: -90,
      centerY: am5.p50,
      centerX: am5.p100,
      paddingRight: 15,
    });

    xRenderer.grid.template.setAll({
      visible: false,
    });

    const xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        maxDeviation: 0.3,
        categoryField: "time",
        renderer: xRenderer,
        tooltip: am5.Tooltip.new(root, {}),
      })
    );

    const yRenderer = am5xy.AxisRendererY.new(root, {
      strokeOpacity: 0.1,
      inversed: false,
    });

    const yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        maxDeviation: 0.3,
        renderer: yRenderer,
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
        name: "Sessions",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "sessions",
        sequencedInterpolation: true,
        categoryXField: "time",
        tooltip: am5.Tooltip.new(root, {
          labelText: "{valueY}",
        }),
      })
    );

    series.columns.template.setAll({
      cornerRadiusTL: 5,
      cornerRadiusTR: 5,
      strokeOpacity: 0,
      fill: am5.color("#2075C5"),
      stroke: am5.color("#2075C5"),
    });

    series.bullets.push(() =>
      am5.Bullet.new(root, {
        locationY: 1,
        sprite: am5.Label.new(root, {
          text: "{valueY}",
          centerY: am5.p0,
          centerX: am5.p50,
          dy: -28,
          populateText: true,
          fontSize: "14px",
          fontFamily: "Inter",
          fontWeight: "normal",
        }),
      })
    );

    xAxis.data.setAll(data);
    series.data.setAll(data);

    series.appear(1000);
    chart.appear(1000, 100);

    return () => {
      exporting.dispose();
      root.dispose();
    };
  }, [chartId, data, theme]);

  return <div id={chartId} className="w-full h-full" />;
};

export const AmChartsBarChart03 = ({
  chartId = uuidv4(),
  data,
}: AmChartsBarChart03Props) => {
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
      })
    );

    const legend = chart.children.unshift(
      am5.Legend.new(root, {
        centerX: am5.p50,
        x: am5.p50,
        layout: root.horizontalLayout,
        paddingBottom: 20,
      })
    );

    legend.labels.template.setAll({
      fontSize: "14px",
      fontFamily: "Inter",
      fontWeight: "normal",
    });

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

    const xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        categoryField: "month",
        renderer: am5xy.AxisRendererX.new(root, {
          cellStartLocation: 0.1,
          cellEndLocation: 0.9,
        }),
      })
    );

    const yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {
          strokeOpacity: 0.1,
        }),
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

    xAxis.data.setAll(data);

    const makeSeries = (name: string, fieldName: string, color: am5.Color) => {
      const series = chart.series.push(
        am5xy.ColumnSeries.new(root, {
          name: name,
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: fieldName,
          categoryXField: "month",
          tooltip: am5.Tooltip.new(root, {
            labelText: "{name}, {categoryX}: {valueY}",
          }),
        })
      );

      series.columns.template.setAll({
        fill: color,
        strokeOpacity: 0,
        width: am5.percent(80),
      });

      series.data.setAll(data);

      series.bullets.push(() =>
        am5.Bullet.new(root, {
          locationY: 0,
          sprite: am5.Label.new(root, {
            text: "{valueY}",
            fill: root.interfaceColors.get("alternativeText"),
            centerY: 0,
            centerX: am5.p50,
          }),
        })
      );

      legend.data.push(series);
    };

    makeSeries("Sessions", "sessions", am5.color(0x34a853));
    makeSeries("Project Mode Activation", "activations", am5.color(0xfbbc05));

    chart.appear(1000, 100);
    return () => {
      exporting.dispose();
      root.dispose();
    };
  }, [chartId, data, theme]);

  return <div id={chartId} className="w-full h-full" />;
};
