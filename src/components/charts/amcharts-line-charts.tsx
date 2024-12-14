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
  AmChartsLineChart01Props,
  AmChartsLineChart02Props,
  AmChartsLineChart03Props,
  AmChartsLineChart04Props,
  AmChartsLineChart05Props,
} from "@/interfaces/charts/amcharts-line-charts-interfaces";

export const AmChartsLineChart01 = ({
  chartId = uuidv4(),
  data,
}: AmChartsLineChart01Props) => {
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
        dy: 15,
      })
    );

    const exporting = am5exporting.Exporting.new(root, {
      filePrefix: chartId,
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
          strokeOpacity: 1,
        }),
        tooltip: am5.Tooltip.new(root, {}),
      })
    );

    xAxis.data.setAll(data);

    const maxYValue = Math.max(
      ...data.map((item) => Math.max(item.high, item.low))
    );
    const yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        min: 0,
        max: maxYValue + 10,
        strictMinMax: true,
        renderer: am5xy.AxisRendererY.new(root, {
          strokeOpacity: 1,
        }),
      })
    );

    xAxis.get("renderer").grid.template.set("visible", false);

    yAxis.get("renderer").grid.template.setAll({
      strokeOpacity: 0.2,
    });

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

    const highSeries = chart.series.push(
      am5xy.LineSeries.new(root, {
        name: "High",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "high",
        categoryXField: "date",
        tooltip: am5.Tooltip.new(root, {
          pointerOrientation: "horizontal",
          labelText: "[bold]{date}[/]\n\nHigh {high} ({highTime})",
        }),
      })
    );

    highSeries.strokes.template.setAll({
      strokeWidth: 2,
      stroke: am5.color(0x2196f3),
    });

    highSeries.bullets.push(() => {
      const circle = am5.Circle.new(root, {
        radius: 4,
        fill: am5.color(0x2196f3),
        stroke: am5.color(0xffffff),
        strokeWidth: 2,
      });

      return am5.Bullet.new(root, {
        sprite: circle,
      });
    });

    const lowSeries = chart.series.push(
      am5xy.LineSeries.new(root, {
        name: "Low",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "low",
        categoryXField: "date",
        tooltip: am5.Tooltip.new(root, {
          pointerOrientation: "horizontal",
          labelText: "[bold]{date}[/]\n\nLow {low} ({lowTime})",
        }),
      })
    );

    lowSeries.strokes.template.setAll({
      strokeWidth: 2,
      stroke: am5.color(0x757575),
    });

    lowSeries.bullets.push(() => {
      const circle = am5.Circle.new(root, {
        radius: 4,
        fill: am5.color(0x757575),
        stroke: am5.color(0xffffff),
        strokeWidth: 2,
      });

      return am5.Bullet.new(root, {
        sprite: circle,
      });
    });

    const legend = chart.children.unshift(
      am5.Legend.new(root, {
        centerX: am5.percent(50),
        x: am5.percent(50),
        layout: root.horizontalLayout,
        dy: -25,
      })
    );

    legend.labels.template.setAll({
      fontSize: 14,
      fontFamily: "Inter",
    });

    legend.data.setAll(chart.series.values);

    chart.set(
      "cursor",
      am5xy.XYCursor.new(root, {
        behavior: "none",
        xAxis: xAxis,
        yAxis: yAxis,
      })
    );

    highSeries.data.setAll(data);
    lowSeries.data.setAll(data);

    chart.appear(1000, 100);

    return () => {
      exporting.dispose();
      root.dispose();
    };
  }, [chartId, data, theme]);

  return <div id={chartId} className="w-full h-full" />;
};

export const AmChartsLineChart02 = ({
  chartId = uuidv4(),
  data,
}: AmChartsLineChart02Props) => {
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
      filePrefix: chartId,
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
      am5xy.DateAxis.new(root, {
        baseInterval: { timeUnit: "day", count: 1 },
        renderer: am5xy.AxisRendererX.new(root, { minorGridEnabled: true }),
      })
    );

    xAxis.get("renderer").labels.template.setAll({
      fontSize: "14px",
      fontFamily: "Inter",
      fontWeight: "normal",
    });

    const yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {}),
      })
    );

    yAxis.get("renderer").labels.template.setAll({
      fontSize: "14px",
      fontFamily: "Inter",
      fontWeight: "normal",
    });

    const series = chart.series.push(
      am5xy.LineSeries.new(root, {
        name: "Usage Frequency",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value",
        valueXField: "date",
        tooltip: am5.Tooltip.new(root, {
          labelText: "{valueY}",
        }),
      })
    );

    series.strokes.template.setAll({
      stroke: am5.color(0x00008b),
      strokeWidth: 3,
    });

    series.fills.template.setAll({
      fillOpacity: 0,
      visible: true,
    });

    series.data.setAll(
      data.map((item) => ({ ...item, date: new Date(item.date).getTime() }))
    );

    series.appear(1000);
    chart.appear(1000, 100);

    return () => {
      exporting.dispose();
      root.dispose();
    };
  }, [chartId, data, theme]);

  return <div id={chartId} className="w-full h-full" />;
};

export const AmChartsLineChart03 = ({
  chartId = uuidv4(),
  data,
}: AmChartsLineChart03Props) => {
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
      filePrefix: chartId,
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
      am5xy.DateAxis.new(root, {
        baseInterval: { timeUnit: "minute", count: 1 },
        renderer: am5xy.AxisRendererX.new(root, {
          minGridDistance: 50,
          strokeOpacity: 0.1,
        }),
        tooltip: am5.Tooltip.new(root, {}),
      })
    );

    const yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        min: 0,
        max: 40,
        strictMinMax: true,
        renderer: am5xy.AxisRendererY.new(root, {
          strokeOpacity: 0.1,
        }),
      })
    );

    const series = chart.series.push(
      am5xy.LineSeries.new(root, {
        name: "CPU Usage (Average)",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "usage",
        valueXField: "timestamp",
        tooltip: am5.Tooltip.new(root, {
          labelText: "{valueY}%",
        }),
      })
    );

    series.strokes.template.setAll({
      stroke: am5.color(0x2196f3),
      strokeWidth: 2,
    });

    chart.plotContainer.children.push(
      am5xy.Grid.new(root, {
        strokeOpacity: 0.2,
        strokeDasharray: [2, 2],
      })
    );

    chart.set(
      "cursor",
      am5xy.XYCursor.new(root, {
        behavior: "none",
        xAxis: xAxis,
        yAxis: yAxis,
      })
    );

    series.data.setAll(
      data.map((item) => ({
        timestamp: new Date(item.timestamp).getTime(),
        usage: item.usage,
      }))
    );

    series.appear(1000);
    chart.appear(1000, 100);

    return () => {
      exporting.dispose();
      root.dispose();
    };
  }, [chartId, data, theme]);

  return <div id={chartId} className="w-full h-full" />;
};

export const AmChartsLineChart04 = ({
  chartId = uuidv4(),
  data,
}: AmChartsLineChart04Props) => {
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
        layout: root.verticalLayout,
        dy: -10,
      })
    );

    const exporting = am5exporting.Exporting.new(root, {
      filePrefix: chartId,
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
      am5xy.DateAxis.new(root, {
        baseInterval: { timeUnit: "minute", count: 1 },
        renderer: am5xy.AxisRendererX.new(root, {}),
        tooltip: am5.Tooltip.new(root, {}),
      })
    );

    xAxis.get("renderer").grid.template.setAll({
      strokeWidth: 0,
      strokeOpacity: 0,
    });

    const yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {}),
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

    const processedData = data.map((item) => ({
      ...item,
      timestamp: item.timestamp.getTime(),
    }));

    const createSeries = (
      name: string,
      valueYField: string,
      color: string,
      tooltipLabel: string
    ) => {
      const series = chart.series.push(
        am5xy.LineSeries.new(root, {
          name,
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField,
          valueXField: "timestamp",
          tooltip: am5.Tooltip.new(root, {
            labelText: tooltipLabel,
          }),
        })
      );

      // Apply color settings
      series.strokes.template.setAll({
        stroke: am5.color(color),
        strokeWidth: 2,
      });

      // Load data
      series.data.setAll(processedData);

      return series;
    };

    createSeries("Response Time", "responseTime", "#F26626", "{valueY} ms");

    createSeries("Content Length", "contentLength", "#989B2C", "{valueY} kb");

    const legend = chart.children.push(
      am5.Legend.new(root, {
        position: "absolute",
        marginTop: 20,
        marginBottom: 20,
        useDefaultMarker: true,
        centerX: am5.p50,
        x: am5.p50,
        y: am5.p100,
      })
    );

    legend.data.setAll(chart.series.values);

    chart.set(
      "cursor",
      am5xy.XYCursor.new(root, {
        behavior: "none",
        xAxis: xAxis,
        yAxis: yAxis,
      })
    );

    root.dateFormatter.setAll({
      dateFormat: "MMM dd, hh mm a",
      dateFields: ["timestamp"],
    });

    chart.series.each((series) => series.appear(1000));
    chart.appear(1000, 100);

    return () => {
      exporting.dispose();
      root.dispose();
    };
  }, [chartId, data, theme]);

  return <div id={chartId} className="w-full h-full" />;
};

export const AmChartsLineChart05 = ({
  chartId = uuidv4(),
  data,
}: AmChartsLineChart05Props) => {
  const { theme } = useTheme();
  const chartRef = useRef<am5.Root | null>(null);

  useLayoutEffect(() => {
    if (chartRef.current) {
      chartRef.current.dispose();
    }

    const root = am5.Root.new(chartId);
    chartRef.current = root;

    root.setThemes([
      theme === "dark"
        ? am5themes_Dark.new(root)
        : am5themes_Animated.new(root),
    ]);

    const chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: true,
        panY: true,
        wheelX: "panX",
        wheelY: "zoomX",
        pinchZoomX: true,
        paddingLeft: 0,
        paddingRight: 0,
      })
    );

    const exporting = am5exporting.Exporting.new(root, {
      filePrefix: chartId,
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

    const legendContainer = chart.children.push(
      am5.Container.new(root, {
        width: am5.p100,
        height: am5.percent(20),
        layout: root.horizontalLayout,
        centerX: am5.p50,
        x: am5.p50,
        y: 0,
      })
    );

    const legend = legendContainer.children.push(
      am5.Legend.new(root, {
        centerX: am5.p50,
        x: am5.p50,
        layout: root.horizontalLayout,
        useDefaultMarker: true,
      })
    );

    legend.markers.template.setAll({
      width: 10,
      height: 10,
    });

    const cursor = chart.set(
      "cursor",
      am5xy.XYCursor.new(root, {
        behavior: "none",
      })
    );
    cursor.lineY.set("visible", false);

    const xAxis = chart.xAxes.push(
      am5xy.DateAxis.new(root, {
        baseInterval: { timeUnit: "minute", count: 15 },
        renderer: am5xy.AxisRendererX.new(root, {
          minGridDistance: 50,
          pan: "zoom",
        }),
        tooltip: am5.Tooltip.new(root, {}),
      })
    );

    xAxis.get("renderer").labels.template.setAll({
      fontSize: 12,
      fontWeight: "400",
    });

    const yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {
          pan: "zoom",
        }),
      })
    );

    yAxis.get("renderer").labels.template.setAll({
      fontSize: 12,
      fontWeight: "400",
    });

    const chartConfig = [
      { name: "ASPState", color: "#FF6B6B" },
      { name: "DBADMIN", color: "#4ECDC4" },
      { name: "master", color: "#45B7D1" },
      { name: "msdb", color: "#F7B731" },
      { name: "tempdb", color: "#5D5D5D" },
    ];

    chartConfig.forEach((metric) => {
      const series = chart.series.push(
        am5xy.LineSeries.new(root, {
          name: metric.name,
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: metric.name,
          valueXField: "timestamp",
          tooltip: am5.Tooltip.new(root, {
            labelText: `{name}: {valueY}`,
            getFillFromSprite: true,
          }),
          stroke: am5.color(metric.color),
          fill: am5.color(metric.color),
        })
      );

      series.strokes.template.setAll({
        strokeWidth: 2,
      });

      series.bullets.push(function () {
        const bullet = am5.Bullet.new(root, {
          sprite: am5.Circle.new(root, {
            radius: 3,
            fill: am5.color(metric.color),
            stroke: root.interfaceColors.get("background"),
            strokeWidth: 1,
          }),
        });

        bullet.states.create("hover", {});

        return bullet;
      });
    });

    legend.data.setAll(chart.series.values);

    const formattedData = data.map((item) => ({
      ...item,
      timestamp: item.timestamp.getTime(),
    }));

    chart.series.values.forEach((series) => {
      series.data.setAll(formattedData);
    });

    chart.appear(1000, 100);

    return () => {
      exporting.dispose();
      root.dispose();
    };
  }, [chartId, data, theme]);

  return <div id={chartId} className="w-full h-full" />;
};
