"use client";

import React, { useEffect, useRef } from "react";

import { RealTimeMapProps } from "@/interfaces/partials-components-interfaces";

import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";

const RealTimeMap = ({ data }: RealTimeMapProps) => {
  const chartRef = useRef<am5.Root | null>(null);

  useEffect(() => {
    const root = am5.Root.new("chartdiv");
    chartRef.current = root;

    root.setThemes([am5themes_Animated.new(root)]);

    const chart = root.container.children.push(
      am5map.MapChart.new(root, {
        panX: "rotateX",
        projection: am5map.geoMercator(),
        layout: root.verticalLayout,
      })
    );

    const worldSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_worldLow,
        exclude: ["AQ"],
      })
    );

    worldSeries.mapPolygons.template.setAll({
      tooltipText: "{name}",
      interactive: true,
      fill: am5.color(0xe3e6e8),
      templateField: "polygonSettings",
    });

    worldSeries.mapPolygons.template.states.create("hover", {
      fill: am5.color(0x0044cc), // Blue hover effect
    });

    const pointSeries = chart.series.push(am5map.MapPointSeries.new(root, {}));

    pointSeries.bullets.push((root, series, dataItem) => {
      const container = am5.Container.new(root, {});

      container.children.push(
        am5.Circle.new(root, {
          radius: 20, // Increased size
          fill: am5.color(0x0044cc), // Blue color
          stroke: am5.color(0xffffff),
          strokeWidth: 3, // Slightly thicker stroke
          tooltipText: "{countryName}: {session} sessions",
          cursorOverStyle: "pointer",
        })
      );

      const animatedCircle = container.children.push(
        am5.Circle.new(root, {
          radius: 20,
          fill: am5.color(0x0044cc),
        })
      );

      animatedCircle.animate({
        key: "radius",
        to: 30, // Larger size for animation
        duration: 1500, // Smoother animation
        easing: am5.ease.out(am5.ease.cubic),
        loops: Infinity,
      });

      animatedCircle.animate({
        key: "opacity",
        to: 0,
        from: 0.5, // Brighter initial opacity
        duration: 1500,
        easing: am5.ease.out(am5.ease.cubic),
        loops: Infinity,
      });

      const session = (dataItem.dataContext as { session: number }).session;

      container.children.push(
        am5.Label.new(root, {
          text: session.toString(),
          fontSize: 14,
          centerX: am5.p50,
          centerY: am5.p50,
          fill: am5.color(0xffffff),
        })
      );

      return am5.Bullet.new(root, { sprite: container });
    });

    const mapData = data.map((item) => ({
      ...item,
      geometry: { type: "Point", coordinates: [item.longitude, item.latitude] },
    }));

    pointSeries.data.setAll(mapData);

    chart.appear(3000, 500); // Smooth and extended appear animation

    return () => {
      root.dispose();
    };
  }, [data]);

  return <div id="chartdiv" className="h-full w-full" />;
};

export default RealTimeMap;
