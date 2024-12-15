"use client";

import React, { useLayoutEffect, useRef } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

import { RealTimeMapProps } from "@/interfaces/pages/dashboard-page-components-interface";

export const RealTimeMap = ({ selectedTab, data }: RealTimeMapProps) => {
  const chartRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const root = am5.Root.new(chartRef.current!);
    root.setThemes([am5themes_Animated.new(root)]);

    const chart = root.container.children.push(
      am5map.MapChart.new(root, {
        projection: am5map.geoMercator(),
        cursorOverStyle: "pointer",
        wheelable: true,
        panX: "translateX",
        panY: "translateY",
      })
    );

    const zoomControl = chart.set(
      "zoomControl",
      am5map.ZoomControl.new(root, {})
    );
    zoomControl.homeButton.set("visible", true);

    const polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_worldLow,
        exclude: ["AQ"],
      })
    );

    polygonSeries.mapPolygons.template.setAll({
      tooltipText: "{name}",
      fill: am5.color(0xe3e6e8),
    });

    polygonSeries.mapPolygons.template.states.create("hover", {
      fill: am5.color(0xd4d5ff),
    });

    const pointSeries = chart.series.push(am5map.MapPointSeries.new(root, {}));

    pointSeries.bullets.push((root, series, dataItem) => {
      const countryData = dataItem.dataContext as {
        countryName: string;
        aggregateSessions: number;
        aggregateUsers: number;
        countryCities: {
          cityName: string;
          citySessions: number;
          cityUsers: number;
          cityLongitude: number;
          cityLatitude: number;
        }[];
      };

      const container = am5.Container.new(root, {});

      const value =
        selectedTab === "sessions"
          ? countryData.aggregateSessions
          : countryData.aggregateUsers;

      const innerCircle = container.children.push(
        am5.Circle.new(root, {
          radius: 13,
          fill: am5.color(0x494af8),
          strokeOpacity: 0,
        })
      );

      const outerCircle = container.children.push(
        am5.Circle.new(root, {
          radius: 40,
          fill: am5.color("#000000"),
          stroke: am5.color("#ffffff"),
          strokeWidth: 3,
          tooltipText: `[bold]{countryName}\n\n[bold]Sessions: [normal]{aggregateSessions}\n[bold]Users: [normal]{aggregateUsers}`,
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
          text:
            selectedTab === "sessions"
              ? "{aggregateSessions}"
              : "{aggregateUsers}",
          fill: am5.color(0xffffff),
          fontSize: 12,
          fontFamily: "Jetbrains mono",
          populateText: true,
          centerX: am5.p50,
          centerY: am5.p50,
          textAlign: "center",
        })
      );

      innerCircle.animate({
        key: "scale",
        from: 0.5,
        to: 5,
        duration: 900,
        easing: am5.ease.out(am5.ease.cubic),
        loops: Infinity,
      });

      innerCircle.animate({
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
      data.map((country) => ({
        geometry: {
          type: "Point",
          coordinates: [country.longitude, country.latitude],
        },
        countryName: country.countryName,
        aggregateSessions: country.countryCities.reduce(
          (sum, city) => sum + city.citySessions,
          0
        ),
        aggregateUsers: country.countryCities.reduce(
          (sum, city) => sum + city.cityUsers,
          0
        ),
        countryCities: country.countryCities,
      }))
    );

    return () => root.dispose();
  }, [selectedTab, data]);

  return <div className="h-full w-full" ref={chartRef} />;
};
