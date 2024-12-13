"use client";

import React, { useLayoutEffect, useRef } from "react";

import { RealTimeMapProps } from "@/interfaces/pages/dashboard-page-components-interface";
import { MapDataContextInterface } from "@/interfaces/map-interfaces";

import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

export const RealTimeMap = ({ selectedTab, data }: RealTimeMapProps) => {
  const chartRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const getCircleSize = (value: number) => {
      const minSize = 10;
      const maxSize = 40;
      const minValue = Math.min(
        ...data.map((d) => Math.min(d.session, d.users))
      );
      const maxValue = Math.max(
        ...data.map((d) => Math.max(d.session, d.users))
      );

      const scale =
        (Math.log(value) - Math.log(minValue)) /
        (Math.log(maxValue) - Math.log(minValue));
      return minSize + scale * (maxSize - minSize);
    };

    if (!chartRef.current) return;

    const root = am5.Root.new(chartRef.current);
    root.setThemes([am5themes_Animated.new(root)]);

    const chart = root.container.children.push(
      am5map.MapChart.new(root, {
        projection: am5map.geoMercator(),
      })
    );

    const polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_worldLow,
        exclude: ["AQ"],
      })
    );

    polygonSeries.mapPolygons.template.setAll({
      tooltipText: "{name}",
      toggleKey: "active",
      interactive: true,
      fill: am5.color(0xe3e6e8),
    });

    polygonSeries.mapPolygons.template.states.create("hover", {
      fill: am5.color(0xd4d5ff),
    });

    polygonSeries.mapPolygons.template.states.create("active", {
      fill: am5.color(0x494af8),
    });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const previousPolygon: am5map.MapPolygon | null = null;

    const pointSeries = chart.series.push(am5map.MapPointSeries.new(root, {}));

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    pointSeries.bullets.push((root, series, dataItem) => {
      const typedDataItem = dataItem as MapDataContextInterface;
      const container = am5.Container.new(root, {});
      const value =
        selectedTab === "sessions"
          ? typedDataItem.dataContext.sessions
          : typedDataItem.dataContext.users;
      const circleSize = getCircleSize(value);

      const circle = container.children.push(
        am5.Circle.new(root, {
          radius: circleSize * 0.35,
          fill: am5.color(0x494af8),
          strokeOpacity: 0,
        })
      );

      const outerCircle = container.children.push(
        am5.Circle.new(root, {
          radius: circleSize + 3,
          fill: am5.color("#000000"),
          stroke: am5.color("#ffffff"),
          strokeWidth: 3,
          tooltipText:
            "[bold]{name}\n[bold]Sessions: [normal]{sessions}\n[bold]Users: [normal]{users}",
          interactive: true,
          cursorOverStyle: "pointer",
        })
      );

      outerCircle.states.create("hover", {
        scale: 1.1,
      });

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const label = container.children.push(
        am5.Label.new(root, {
          text: selectedTab === "sessions" ? "{sessions}" : "{users}",
          fill: am5.color(0xffffff),
          fontSize: 12,
          fontFamily: "Jetbrains mono",
          populateText: true,
          centerX: am5.p50,
          centerY: am5.p50,
          textAlign: "center",
        })
      );

      circle.animate({
        key: "scale",
        from: 0.5,
        to: 5,
        duration: 900,
        easing: am5.ease.out(am5.ease.cubic),
        loops: Infinity,
      });

      circle.animate({
        key: "opacity",
        from: 0.5,
        to: 0.1,
        duration: 900,
        easing: am5.ease.out(am5.ease.cubic),
        loops: Infinity,
      });

      return am5.Bullet.new(root, {
        sprite: container,
      });
    });

    const getCountryData = () => {
      return data.map((item) => ({
        geometry: {
          type: "Point",
          coordinates: [item.longitude, item.latitude],
        },
        name: item.countryName,
        sessions: item.session,
        users: item.users,
      }));
    };

    pointSeries.data.setAll(getCountryData());

    chart.appear(1000, 100);

    return () => {
      root.dispose();
    };
  }, [data, selectedTab]);

  return <div ref={chartRef} className="h-full w-full" />;
};
