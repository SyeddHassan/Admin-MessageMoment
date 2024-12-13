"use client";

import React, { useLayoutEffect, useRef } from "react";

import { RealTimeSessionsMapProps } from "@/interfaces/pages/dashboard-page-components-interface";

import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

export const RealTimeSessionsMap = ({ data }: RealTimeSessionsMapProps) => {
  const chartRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
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

    polygonSeries.mapPolygons.template.setAll({
      fill: am5.color("#e6e6e6"),
      stroke: am5.color("#ffffff"),
    });

    let previousPolygon: am5map.MapPolygon | null = null;

    polygonSeries.mapPolygons.template.on(
      "active",
      function (active, target: am5map.MapPolygon | undefined) {
        if (!target) return;

        if (previousPolygon && previousPolygon !== target) {
          previousPolygon.set("active", false);
        }

        const dataItem =
          target.dataItem as am5.DataItem<am5map.IMapPolygonSeriesDataItem> | null;

        if (target.get("active") && dataItem) {
          polygonSeries.zoomToDataItem(dataItem);
        } else {
          chart.goHome();
        }

        previousPolygon = target;
      }
    );

    const pointSeries = chart.series.push(am5map.MapPointSeries.new(root, {}));

    pointSeries.bullets.push(() => {
      const container = am5.Container.new(root, {});

      const circle = container.children.push(
        am5.Circle.new(root, {
          radius: 7,
          fill: am5.color(0x494af8),
          strokeOpacity: 0,
        })
      );

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const outerCircle = container.children.push(
        am5.Circle.new(root, {
          radius: 20,
          fill: am5.color("#000000"),
          stroke: am5.color("#ffffff"),
          strokeWidth: 3,
          tooltipText:
            "[bold]{name}\n[bold]Sessions: [normal]{sessions}\n[bold]Users: [normal]{users}",
        })
      );

      const label = container.children.push(
        am5.Label.new(root, {
          text: "{sessions}",
          fill: am5.color(0xffffff),
          fontSize: 8,
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

    pointSeries.data.setAll(
      data.map((item) => ({
        geometry: {
          type: "Point",
          coordinates: [item.longitude, item.latitude],
        },
        name: item.countryName,
        sessions: item.session,
        users: item.users,
      }))
    );

    chart.appear(1000, 100);

    return () => {
      root.dispose();
    };
  }, [data]);

  return <div ref={chartRef} className="h-full w-full" />;
};
