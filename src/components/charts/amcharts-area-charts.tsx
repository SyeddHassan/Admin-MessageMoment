"use client";

import React, { useLayoutEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { useTheme } from "next-themes";

import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import * as d3 from "d3-shape";
import * as am5exporting from "@amcharts/amcharts5/plugins/exporting";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import am5themes_Dark from "@amcharts/amcharts5/themes/Dark";

import {
  AmChartsAreaChart01Props,
  AmChartsAreaChart02Props,
  AmChartsAreaChart03Props,
  AmChartsAreaChart04Props,
  AmChartsAreaChart05Props,
} from "@/interfaces/charts/amcharts-area-charts-interfaces";

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

export const AmChartsAreaChart02 = ({
  chartId = uuidv4(),
  data,
}: AmChartsAreaChart02Props) => {
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
      am5xy.DateAxis.new(root, {
        maxDeviation: 0.1,
        baseInterval: { timeUnit: "day", count: 1 },
        renderer: am5xy.AxisRendererX.new(root, {}),
      })
    );

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

    xAxis.get("renderer").grid.template.setAll({
      strokeOpacity: 0,
    });

    const series = chart.series.push(
      am5xy.LineSeries.new(root, {
        name: "Traffic",
        xAxis,
        yAxis,
        valueYField: "value",
        valueXField: "date",
        tooltip: am5.Tooltip.new(root, {
          labelText: "{valueY}",
        }),
        curveFactory: d3.curveMonotoneX,
      })
    );

    series.strokes.template.setAll({
      strokeWidth: 3,
    });

    series.fills.template.setAll({
      fillOpacity: 0.5,
      visible: true,
    });

    series.data.setAll(
      data.map((item) => ({ ...item, date: new Date(item.date).getTime() }))
    );

    chart.set("cursor", am5xy.XYCursor.new(root, {}));

    return () => {
      exporting.dispose();
      root.dispose();
    };
  }, [chartId, data, theme]);

  return <div id={chartId} className="w-full h-full" />;
};

export const AmChartsAreaChart03 = ({
  chartId = uuidv4(),
  data,
}: AmChartsAreaChart03Props) => {
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

    const cursor = chart.set(
      "cursor",
      am5xy.XYCursor.new(root, {
        behavior: "none",
      })
    );
    cursor.lineY.set("visible", false);

    const xAxis = chart.xAxes.push(
      am5xy.DateAxis.new(root, {
        maxDeviation: 0.2,
        baseInterval: {
          timeUnit: "day",
          count: 1,
        },
        renderer: am5xy.AxisRendererX.new(root, {
          minorGridEnabled: true,
        }),
        tooltip: am5.Tooltip.new(root, {}),
      })
    );

    const yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {
          pan: "zoom",
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

    const series = chart.series.push(
      am5xy.LineSeries.new(root, {
        name: "Series",
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
      strokeWidth: 2,
    });

    series.fills.template.setAll({
      fillOpacity: 0.2,
      visible: true,
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

export const AmChartsAreaCharts04 = ({
  chartId = uuidv4(),
  data,
}: AmChartsAreaChart04Props) => {
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

    const colorPalette = am5.ColorSet.new(root, {
      colors: [am5.color(0xff6b3d), am5.color(0x84b761), am5.color(0x4a90e2)],
    });
    chart.set("colors", colorPalette);

    const cursor = chart.set(
      "cursor",
      am5xy.XYCursor.new(root, {
        behavior: "zoomX",
      })
    );

    cursor.lineY.setAll({
      stroke: am5.color(0x888888),
      strokeDasharray: [3, 3],
      strokeOpacity: 0.5,
    });
    cursor.lineX.setAll({
      stroke: am5.color(0x888888),
      strokeDasharray: [3, 3],
      strokeOpacity: 0.5,
    });

    // Create axes with improved styling
    const xAxis = chart.xAxes.push(
      am5xy.DateAxis.new(root, {
        maxDeviation: 0.3,
        baseInterval: { timeUnit: "minute", count: 1 },
        renderer: am5xy.AxisRendererX.new(root, {
          minorGridEnabled: true,
          strokeOpacity: 0.1,
        }),
        tooltip: am5.Tooltip.new(root, {
          themeTags: ["axis"],
          animationDuration: 200,
        }),
      })
    );
    xAxis.get("renderer").grid.template.setAll({ visible: false });

    const yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        maxDeviation: 0.3,
        renderer: am5xy.AxisRendererY.new(root, {
          strokeOpacity: 0.1,
          inversed: false,
        }),
        tooltip: am5.Tooltip.new(root, {
          themeTags: ["axis"],
          animationDuration: 200,
        }),
      })
    );
    yAxis.get("renderer").grid.template.setAll({ visible: false });

    const yAxis2 = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {
          opposite: true,
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

    const processedData = data.map((item) => ({
      ...item,
      timestamp: item.timestamp.getTime(),
    }));

    const responseSeries = chart.series.push(
      am5xy.LineSeries.new(root, {
        name: "Response Time (ms)",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "responseTime",
        valueXField: "timestamp",
        tooltip: am5.Tooltip.new(root, {
          labelText: "{valueY} ms",
          themeTags: ["series"],
        }),
      })
    );

    responseSeries.strokes.template.setAll({
      strokeWidth: 3,
      strokeGradient: am5.LinearGradient.new(root, {
        stops: [{ color: am5.color(0xff6b3d) }, { color: am5.color(0xffa07a) }],
      }),
    });

    responseSeries.fills.template.setAll({
      visible: true,
      fillGradient: am5.LinearGradient.new(root, {
        stops: [
          { color: am5.color(0xff6b3d), opacity: 0.2 },
          { color: am5.color(0xffa07a), opacity: 0.1 },
        ],
      }),
    });

    const contentSeries = chart.series.push(
      am5xy.LineSeries.new(root, {
        name: "Content Length (kb)",
        xAxis: xAxis,
        yAxis: yAxis2,
        valueYField: "contentLength",
        valueXField: "timestamp",
        tooltip: am5.Tooltip.new(root, {
          labelText: "{valueY} kb",
          themeTags: ["series"],
        }),
      })
    );

    contentSeries.strokes.template.setAll({
      strokeWidth: 3,
      strokeDasharray: [4, 2],
      strokeGradient: am5.LinearGradient.new(root, {
        stops: [{ color: am5.color(0x84b761) }, { color: am5.color(0xa5d6a7) }],
      }),
    });

    contentSeries.fills.template.setAll({
      visible: true,
      fillGradient: am5.LinearGradient.new(root, {
        stops: [
          { color: am5.color(0x84b761), opacity: 0.2 },
          { color: am5.color(0xa5d6a7), opacity: 0.1 },
        ],
      }),
    });

    root.dateFormatter.setAll({
      dateFormat: "yyyy-MM-dd HH:mm",
      dateFields: ["valueX"],
    });

    responseSeries.data.setAll(processedData);
    contentSeries.data.setAll(processedData);

    const legend = chart.children.push(
      am5.Legend.new(root, {
        centerX: am5.p50,
        x: am5.p50,
        layout: root.horizontalLayout,
        paddingTop: 20,
        paddingBottom: 20,
      })
    );
    legend.data.setAll(chart.series.values);
    legend.labels.template.setAll({
      fontSize: 14,
      fill: am5.color(0x333333),
    });
    legend.markers.template.setAll({
      width: 20,
      height: 20,
    });

    responseSeries.appear(1500, 100);
    contentSeries.appear(1500, 100);
    chart.appear(1500, 100);

    return () => {
      exporting.dispose();
      root.dispose();
    };
  }, [chartId, data, theme]);

  return <div id={chartId} className="w-full h-full" />;
};

export const AmChartsAreaCharts05 = ({
  chartId = uuidv4(),
  data,
}: AmChartsAreaChart05Props) => {
  const { theme } = useTheme();
  const chartRef = useRef<am5.Root | null>(null);

  const chartConfig = [
    { name: "ASPState", color: "#2A2A2A" },
    { name: "DBADMIN", color: "#4A4A4A" },
    { name: "master", color: "#89CFF0" },
    { name: "msdb", color: "#0096FF", opposite: true },
    { name: "tempdb", color: "#333333", opposite: true },
  ];

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
        focusable: true,
        panX: true,
        panY: true,
        wheelX: "panX",
        wheelY: "zoomX",
        pinchZoomX: true,
        layout: root.verticalLayout,
        paddingLeft: 0,
        dy: 10,
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
      am5xy.DateAxis.new(root, {
        maxDeviation: 0.1,
        groupData: false,
        baseInterval: { timeUnit: "minute", count: 15 },
        renderer: am5xy.AxisRendererX.new(root, {
          minGridDistance: 80,
          minorGridEnabled: true,
        }),
        tooltip: am5.Tooltip.new(root, {}),
      })
    );

    chartConfig.forEach((metric) => {
      const yRenderer = am5xy.AxisRendererY.new(root, {
        opposite: metric.opposite,
      });

      const yAxis = chart.yAxes.push(
        am5xy.ValueAxis.new(root, {
          maxDeviation: 1,
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

      if (chart.yAxes.indexOf(yAxis) > 0) {
        yAxis.set(
          "syncWithAxis",
          chart.yAxes.getIndex(0) as am5xy.ValueAxis<am5xy.AxisRenderer>
        );
      }

      const series = chart.series.push(
        am5xy.LineSeries.new(root, {
          name: metric.name,
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: metric.name,
          valueXField: "timestamp",
          fill: am5.color(metric.color),
          stroke: am5.color(metric.color),
          tooltip: am5.Tooltip.new(root, {
            pointerOrientation: "horizontal",
            labelText: `${metric.name}: {valueY}`,
          }),
        })
      );

      series.strokes.template.setAll({
        strokeWidth: 2,
      });

      series.fills.template.setAll({
        fillOpacity: 0.1,
        visible: true,
      });

      yRenderer.grid.template.setAll({
        strokeOpacity: 0.05,
      });

      yRenderer.labels.template.setAll({
        fill: series.get("fill"),
        fontSize: 14,
      });
    });

    const legend = chart.children.push(
      am5.Legend.new(root, {
        centerX: am5.p50,
        x: am5.p50,
        centerY: am5.p0,
        y: am5.p0,
        marginTop: 10,
        marginBottom: 10,
        layout: root.horizontalLayout,
        useDefaultMarker: true,
        dy: -30,
        dx: 40,
      })
    );

    legend.data.setAll(chart.series.values);

    chart.set(
      "cursor",
      am5xy.XYCursor.new(root, {
        behavior: "none",
        xAxis: xAxis,
      })
    );

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
