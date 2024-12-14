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
  AmChartsBarChart04Props,
  AmChartsBarChart05ChartDataProps,
  AmChartsBarChart05Props,
  AmChartsBarChart06Props,
  AmChartsBarChart07Props,
  AmChartsBarChart08Props,
  AmChartsBarChart09Props,
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

    const yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {
          strokeOpacity: 1,
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
      strokeOpacity: 0.2,
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

    const cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
    cursor.lineY.set("visible", false);

    const xRenderer = am5xy.AxisRendererX.new(root, {
      minGridDistance: 30,
      minorGridEnabled: true,
      strokeOpacity: 1,
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
      strokeOpacity: 1,
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

    yAxis.get("renderer").grid.template.setAll({
      strokeOpacity: 0.2,
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
        categoryField: "month",
        renderer: am5xy.AxisRendererX.new(root, {
          cellStartLocation: 0.1,
          cellEndLocation: 0.9,
          strokeOpacity: 1,
        }),
      })
    );

    const yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {
          strokeOpacity: 1,
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
      strokeOpacity: 0.2,
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

export const AmChartsBarChart04 = ({
  chartId = uuidv4(),
  data,
}: AmChartsBarChart04Props) => {
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

    const yAxis = chart.yAxes.push(
      am5xy.CategoryAxis.new(root, {
        categoryField: "category",
        renderer: am5xy.AxisRendererY.new(root, {
          minGridDistance: 30,
          strokeOpacity: 1,
          strokeWidth: 1,
        }),
        tooltip: am5.Tooltip.new(root, {}),
      })
    );
    yAxis.get("renderer").grid.template.setAll({ visible: false });

    yAxis.data.setAll(data);

    const xAxis = chart.xAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererX.new(root, {
          strokeOpacity: 1,
          strokeWidth: 1,
        }),
      })
    );
    xAxis.get("renderer").grid.template.setAll({ visible: false });

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
        name: "Values",
        xAxis: xAxis,
        yAxis: yAxis,
        valueXField: "value",
        categoryYField: "category",
        tooltip: am5.Tooltip.new(root, {
          pointerOrientation: "horizontal",
          labelText: "{valueX}",
        }),
      })
    );

    series.columns.template.setAll({
      cornerRadiusTR: 4,
      cornerRadiusBR: 4,
      strokeOpacity: 0,
      fillOpacity: 1,
      fill: am5.color("#2E90FA"),
    });

    series.bullets.push(() =>
      am5.Bullet.new(root, {
        locationX: 1,
        locationY: 0.5,
        sprite: am5.Label.new(root, {
          centerY: am5.p50,
          text: "{valueX}",
          populateText: true,
          fontSize: 14,
          fontFamily: "Inter",
          paddingLeft: 10,
        }),
      })
    );

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

export const AmChartsBarChart05 = ({
  chartId = uuidv4(),
  data,
}: AmChartsBarChart05Props) => {
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

    const yAxis = chart.yAxes.push(
      am5xy.CategoryAxis.new(root, {
        categoryField: "category",
        renderer: am5xy.AxisRendererY.new(root, {
          inversed: true,
          cellStartLocation: 0.1,
          cellEndLocation: 0.9,
          minGridDistance: 30,
          strokeOpacity: 1,
        }),
      })
    );

    yAxis.get("renderer").grid.template.setAll({
      strokeWidth: 0,
      strokeOpacity: 0,
    });

    yAxis.data.setAll(data);

    const xAxis = chart.xAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererX.new(root, {
          strokeOpacity: 1,
          minGridDistance: 50,
        }),
        min: 0,
      })
    );

    xAxis.get("renderer").grid.template.setAll({
      strokeWidth: 0,
      strokeOpacity: 0,
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

    function createSeries(
      field: keyof AmChartsBarChart05ChartDataProps,
      name: string,
      color: string
    ) {
      const series = chart.series.push(
        am5xy.ColumnSeries.new(root, {
          name: name,
          xAxis: xAxis,
          yAxis: yAxis,
          valueXField: field,
          categoryYField: "category",
          sequencedInterpolation: true,
          tooltip: am5.Tooltip.new(root, {
            pointerOrientation: "horizontal",
            labelText: "{name}[/]\n{categoryY}: {valueX}",
            background: am5.RoundedRectangle.new(root, {
              fill: am5.color(0x000000),
              fillOpacity: 0.8,
            }),
          }),
        })
      );

      series.columns.template.setAll({
        height: am5.p100,
        fill: am5.color(color),
        strokeOpacity: 0,
        cornerRadiusTR: 5,
        cornerRadiusBR: 5,
        shadowBlur: 5,
        shadowOffsetX: 2,
        shadowOffsetY: 2,
        shadowOpacity: 0.2,
      });

      series.bullets.push(() =>
        am5.Bullet.new(root, {
          locationX: 1,
          locationY: 0.5,
          sprite: am5.Label.new(root, {
            centerY: am5.p50,
            text: "{valueX}",
            populateText: true,
            fontSize: 14,
            fontFamily: "Inter",
          }),
        })
      );

      series.data.setAll(data);
      series.appear(1000);
    }

    createSeries("sources", "Sources", "#2D88E5");
    createSeries("chatCreations", "Chat Creations", "#AB40E8");

    const legend = chart.children.push(
      am5.Legend.new(root, {
        centerX: am5.p50,
        x: am5.p50,
        marginTop: 15,
        marginBottom: 15,
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
        behavior: "zoomY",
      })
    );

    chart.appear(1000, 100);

    return () => {
      exporting.dispose();
      root.dispose();
    };
  }, [chartId, data, theme]);

  return <div id={chartId} className="w-full h-full" />;
};

export const AmChartsBarChart06 = ({
  chartId = uuidv4(),
  data,
}: AmChartsBarChart06Props) => {
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
      am5xy.CategoryAxis.new(root, {
        categoryField: "hour",
        renderer: am5xy.AxisRendererX.new(root, {
          minGridDistance: 30,
        }),
        tooltip: am5.Tooltip.new(root, {}),
      })
    );
    xAxis.get("renderer").grid.template.setAll({ visible: false });

    xAxis.data.setAll(data);

    const yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {}),
        min: 0,
        max: 10,
        strictMinMax: true,
        numberFormat: "#",
        extraMin: 0,
        extraMax: 0,
      })
    );

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (yAxis as any).set("step", 1);

    yAxis.get("renderer").labels.template.setAll({
      text: "{valueY.formatNumber('#')}",
      forceHidden: false,
    });

    yAxis.get("renderer").grid.template.setAll({
      forceHidden: false,
    });

    yAxis.get("renderer").set("minGridDistance", 30);

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
        categoryXField: "hour",
        tooltip: am5.Tooltip.new(root, {
          labelText: "{valueY} sessions",
        }),
        fill: am5.color("#2D88E5"),
      })
    );

    series.columns.template.setAll({
      cornerRadiusTL: 8,
      cornerRadiusTR: 8,
      strokeOpacity: 0,
      fillOpacity: 0.9,
      shadowColor: am5.color("#000"),
      shadowBlur: 10,
      shadowOffsetX: 2,
      shadowOffsetY: 2,
      shadowOpacity: 0.2,
    });

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

export const AmChartsBarChart07 = ({
  chartId = uuidv4(),
  data,
}: AmChartsBarChart07Props) => {
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

    const yAxis = chart.yAxes.push(
      am5xy.CategoryAxis.new(root, {
        categoryField: "name",
        renderer: am5xy.AxisRendererY.new(root, {
          inversed: true,
          cellStartLocation: 0.1,
          cellEndLocation: 0.9,
        }),
      })
    );

    yAxis.get("renderer").grid.template.setAll({
      strokeWidth: 0,
      strokeOpacity: 0,
    });

    const xAxis = chart.xAxes.push(
      am5xy.ValueAxis.new(root, {
        min: 0,
        renderer: am5xy.AxisRendererX.new(root, {}),
      })
    );

    xAxis.get("renderer").grid.template.setAll({
      strokeWidth: 0,
      strokeOpacity: 0,
    });

    xAxis.get("renderer").labels.template.setAll({
      forceHidden: true,
    });

    yAxis.get("renderer").labels.template.setAll({
      fontSize: "14px",
      fontFamily: "Inter",
      fontWeight: "normal",
    });

    const series = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        xAxis: xAxis,
        yAxis: yAxis,
        valueXField: "value",
        categoryYField: "name",
        tooltip: am5.Tooltip.new(root, {
          pointerOrientation: "horizontal",
          labelText: "{categoryY}: {valueX}",
        }),
      })
    );

    series.columns.template.setAll({
      fill: am5.color("#2D88E5"),
    });

    series.data.setAll(data);
    yAxis.data.setAll(data);

    series.bullets.push(() => {
      return am5.Bullet.new(root, {
        sprite: am5.Label.new(root, {
          text: "{valueX}",
          centerX: am5.p50,
          centerY: am5.p50,
          populateText: true,
          dy: 3,
        }),
      });
    });

    return () => {
      exporting.dispose();
      root.dispose();
    };
  }, [chartId, data, theme]);

  return <div id={chartId} className="w-full h-full" />;
};

export const AmChartsBarChart08 = ({
  chartId = uuidv4(),
  data,
}: AmChartsBarChart08Props) => {
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
        wheelY: "zoomY",
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
      am5xy.CategoryAxis.new(root, {
        categoryField: "name",
        renderer: am5xy.AxisRendererX.new(root, {
          cellStartLocation: 0.1,
          cellEndLocation: 0.9,
        }),
      })
    );

    xAxis.get("renderer").grid.template.setAll({
      strokeWidth: 0,
      strokeOpacity: 0,
    });

    const yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        min: 0,
        renderer: am5xy.AxisRendererY.new(root, {}),
      })
    );

    yAxis.get("renderer").grid.template.setAll({
      strokeWidth: 0,
      strokeOpacity: 0,
    });

    yAxis.get("renderer").labels.template.setAll({
      forceHidden: true,
    });

    xAxis.get("renderer").labels.template.setAll({
      fontSize: "14px",
      fontFamily: "Inter",
      fontWeight: "normal",
    });

    const series = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value",
        categoryXField: "name",
        tooltip: am5.Tooltip.new(root, {
          pointerOrientation: "vertical",
          labelText: "{categoryX}: {valueY}",
        }),
      })
    );

    series.columns.template.setAll({
      fill: am5.color("#2D88E5"),
    });

    series.data.setAll(data);
    xAxis.data.setAll(data);

    series.bullets.push(() => {
      return am5.Bullet.new(root, {
        sprite: am5.Label.new(root, {
          text: "{valueY}",
          centerX: am5.p50,
          centerY: am5.p50,
          populateText: true,
          dx: 3,
        }),
      });
    });

    return () => {
      exporting.dispose();
      root.dispose();
    };
  }, [chartId, data, theme]);

  return <div id={chartId} className="w-full h-full" />;
};

export const AmChartsBarChart09 = ({
  chartId = uuidv4(),
  data,
}: AmChartsBarChart09Props) => {
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
        categoryField: "month",
        renderer: am5xy.AxisRendererX.new(root, {
          cellStartLocation: 0.1,
          cellEndLocation: 0.9,
          strokeOpacity: 1,
        }),
      })
    );

    const yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {
          strokeOpacity: 1,
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
      strokeOpacity: 0.2,
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

    makeSeries("Impressions", "impressions", am5.color(0x0c62ec));
    makeSeries("Conversions", "conversions", am5.color(0xab40e8));

    chart.appear(1000, 100);

    return () => {
      exporting.dispose();
      root.dispose();
    };
  }, [chartId, data, theme]);

  return <div id={chartId} className="w-full h-full" />;
};
