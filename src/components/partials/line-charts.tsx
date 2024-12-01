import React, { useLayoutEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

import {
  LineChart01Props,
  LineChart02Props,
  LineChart03Props,
  LineChart04Props,
} from "@/interfaces/partials-components-interfaces";

import { LineChart03Options } from "@/utils/line-chart-options";

import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Title,
  Tooltip,
  Legend
);

export const LineChart01 = ({ chartId = uuidv4(), data }: LineChart01Props) => {
  const chartRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!chartRef.current) return;

    const root = am5.Root.new(chartId);

    root.setThemes([am5themes_Animated.new(root)]);

    const chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: true,
        panY: true,
        wheelX: "panX",
        wheelY: "zoomX",
        pinchZoomX: true,
      })
    );

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
      fontFamily: "JetBrains Mono",
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
      fillOpacity: 0.2,
      visible: true,
    });

    chart.set(
      "scrollbarX",
      am5.Scrollbar.new(root, { orientation: "horizontal" })
    );

    series.data.setAll(
      data.map((item) => ({ ...item, date: new Date(item.date).getTime() }))
    );

    series.appear(1000);
    chart.appear(1000, 100);

    return () => root.dispose();
  }, [chartId, data]);

  return <div id={chartId} ref={chartRef} className="w-full h-full" />;
};

export const LineChart02 = ({ chartId = uuidv4(), data }: LineChart02Props) => {
  const chartRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!chartRef.current) return;

    const root = am5.Root.new(chartId);

    root.setThemes([am5themes_Animated.new(root)]);

    const chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: true,
        panY: true,
        wheelX: "panX",
        wheelY: "zoomX",
        pinchZoomX: true,
      })
    );

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
      fontFamily: "JetBrains Mono",
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

    return () => root.dispose();
  }, [chartId, data]);

  return <div id={chartId} ref={chartRef} className="w-full h-full" />;
};

export const LineChart03 = ({ chartData }: LineChart03Props) => {
  const createChartData = (data: number[], color: string) => ({
    labels: new Array(data.length).fill(""),
    datasets: [
      {
        data,
        fill: true,
        borderColor: color,
        backgroundColor: `${color}15`,
        borderWidth: 2,
      },
    ],
  });

  const options = LineChart03Options();

  return (
    <div className="h-full w-full flex justify-center flex-col gap-12">
      {chartData.map((data, index) => (
        <div key={index} className="w-full flex flex-col gap-6">
          <div className="w-full h-full flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: data.color }}
              />
              <h1 className="font-inter text-heading-color text-[14px]">
                {data.name}
              </h1>
            </div>

            <p className="font-bold text-[14px]">{data.value}</p>
          </div>

          <div className="relative h-12 w-full">
            <Line
              data={createChartData(data.data, data.color)}
              options={options}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export const LineChart04 = ({ chartId = uuidv4(), data }: LineChart04Props) => {
  const chartRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!chartRef.current) return;

    const root = am5.Root.new(chartId);
    root.setThemes([am5themes_Animated.new(root)]);

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

    const xAxis = chart.xAxes.push(
      am5xy.DateAxis.new(root, {
        baseInterval: { timeUnit: "minute", count: 15 },
        renderer: am5xy.AxisRendererX.new(root, { minorGridEnabled: true }),
        tooltip: am5.Tooltip.new(root, {
          labelText: "{valueX.formatDate('yyyy-MM-dd HH:mm')}",
        }),
        dateFormats: {
          minute: "yyyy-MM-dd HH:mm",
          hour: "yyyy-MM-dd HH:mm",
          day: "yyyy-MM-dd",
        },
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
      fontFamily: "JetBrains Mono",
      fontWeight: "normal",
    });

    const series1 = chart.series.push(
      am5xy.LineSeries.new(root, {
        name: "Response Time (ms)",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value1",
        valueXField: "date",
        tooltip: am5.Tooltip.new(root, {
          labelText: "{valueX}: {valueY}\nPrevious Date: {previousDate}",
        }),
      })
    );

    series1.strokes.template.setAll({
      strokeWidth: 2,
      stroke: am5.color(0xffa500),
    });

    series1.get("tooltip")?.get("background")?.set("fillOpacity", 0.5);

    const series2 = chart.series.push(
      am5xy.LineSeries.new(root, {
        name: "Content Length (kb)",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value2",
        valueXField: "date",
      })
    );

    series2.strokes.template.setAll({
      strokeWidth: 2,
      stroke: am5.color(0x008000),
    });

    series1.data.setAll(
      data.map((item) => ({
        date: new Date(item.date).getTime(),
        value1: item.value1,
      }))
    );
    series2.data.setAll(
      data.map((item) => ({
        date: new Date(item.date).getTime(),
        value2: item.value2,
      }))
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

    legend.data.setAll(chart.series.values);

    series1.appear(1000);
    series2.appear(1000);
    chart.appear(1000, 100);

    return () => root.dispose();
  }, [chartId, data]);

  return <div id={chartId} ref={chartRef} className="w-full h-full" />;
};
