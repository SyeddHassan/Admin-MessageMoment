"use client";

import React, { useRef, useLayoutEffect } from "react";

import { AmChartsGaugeChart01Props } from "@/interfaces/charts/amcharts-gauge-charts-interfaces";

import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import * as am5radar from "@amcharts/amcharts5/radar";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

export const AmChartsGaugeChart01 = ({
  chartId,
  value,
  axisRange0Color,
  axisRange1Color,
}: AmChartsGaugeChart01Props) => {
  const chartRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!chartRef.current) return;

    const root = am5.Root.new(chartId);
    root.setThemes([am5themes_Animated.new(root)]);

    const chart = root.container.children.push(
      am5radar.RadarChart.new(root, {
        panX: false,
        panY: false,
        startAngle: 180,
        endAngle: 360,
      })
    );

    const axisRenderer = am5radar.AxisRendererCircular.new(root, {
      innerRadius: -40,
    });

    axisRenderer.grid.template.setAll({
      stroke: root.interfaceColors.get("background"),
      visible: true,
      strokeOpacity: 0.8,
    });

    const xAxis = chart.xAxes.push(
      am5xy.ValueAxis.new(root, {
        maxDeviation: 0,
        min: 0,
        max: 100,
        strictMinMax: true,
        renderer: axisRenderer,
      })
    );

    const axisDataItem = xAxis.makeDataItem({});

    const clockHand = am5radar.ClockHand.new(root, {
      pinRadius: 50,
      radius: am5.percent(100),
      innerRadius: 50,
      bottomWidth: 0,
      topWidth: 0,
    });

    clockHand.pin.setAll({
      fillOpacity: 0,
      strokeOpacity: 0.5,
      stroke: am5.color(0x000000),
      strokeWidth: 1,
      strokeDasharray: [2, 2],
    });

    clockHand.hand.setAll({
      fillOpacity: 0,
      strokeOpacity: 0.5,
      stroke: am5.color(0x000000),
      strokeWidth: 0.5,
    });

    const bullet = axisDataItem.set(
      "bullet",
      am5xy.AxisBullet.new(root, {
        sprite: clockHand,
      })
    );

    xAxis.createAxisRange(axisDataItem);

    const label = chart.radarContainer.children.push(
      am5.Label.new(root, {
        centerX: am5.percent(50),
        centerY: am5.percent(50),
        textAlign: "center",
        fontSize: "1.5em",
        fill: am5.color(0x000000),
        fontFamily: "JetBrains Mono",
      })
    );

    axisDataItem.set("value", value);

    bullet.get("sprite").on("rotation", () => {
      const value = axisDataItem.get("value") || 0;
      label.set("text", Math.round(value).toString() + "%");
    });

    const axisRange0 = xAxis.createAxisRange(
      xAxis.makeDataItem({
        above: true,
        value: 0,
        endValue: value,
      })
    );

    if (axisRange0) {
      const axisFill = axisRange0.get("axisFill");
      if (axisFill) {
        axisFill.setAll({
          visible: true,
          fill: am5.color(axisRange0Color),
        });
      }
      const label = axisRange0.get("label");
      if (label) {
        label.setAll({
          forceHidden: true,
        });
      }
    }

    const axisRange1 = xAxis.createAxisRange(
      xAxis.makeDataItem({
        above: true,
        value: value,
        endValue: 100,
      })
    );

    if (axisRange1) {
      const axisFill = axisRange1.get("axisFill");
      if (axisFill) {
        axisFill.setAll({
          visible: true,
          fill: am5.color(axisRange1Color),
        });
      }
      const label = axisRange1.get("label");
      if (label) {
        label.setAll({
          forceHidden: true,
        });
      }
    }

    axisDataItem.animate({
      key: "value",
      to: value,
      duration: 500,
      easing: am5.ease.out(am5.ease.cubic),
    });

    xAxis.get("renderer").labels.template.setAll({
      fill: am5.color(0x000000),
      fontFamily: "JetBrains Mono",
      fontSize: "0.9em",
    });

    chart.bulletsContainer.set("mask", undefined);

    return () => root.dispose();
  }, [chartId, value, axisRange0Color, axisRange1Color]);

  return <div id={chartId} ref={chartRef} className="w-full h-full" />;
};
