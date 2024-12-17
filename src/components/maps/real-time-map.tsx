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
        panX: "rotateX",
        panY: "translateY",
        projection: am5map.geoMercator(),
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

    const pointSeries = chart.series.push(
      am5map.ClusteredPointSeries.new(root, {
        calculateAggregates: true,
        cursorOverStyle: "pointer",
      })
    );

    pointSeries.set("clusteredBullet", function (root) {
      const container = am5.Container.new(root, {
        cursorOverStyle: "pointer",
      });

      const innerCircle = container.children.push(
        am5.Circle.new(root, {
          radius: 13,
          fill: am5.color(0x494af8),
          strokeOpacity: 0,
        })
      );

      const outerCircle = container.children.push(
        am5.Circle.new(root, {
          radius: 20,
          fill: am5.color("#000000"),
          stroke: am5.color("#ffffff"),
          strokeWidth: 3,
          tooltipText: `[bold]{countryName}\n\n[bold]Sessions: [normal]{aggregateSessions}\n[bold]Users: [normal]{aggregateUsers}`,
        })
      );

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const label = container.children.push(
        am5.Label.new(root, {
          centerX: am5.p50,
          centerY: am5.p50,
          fill: am5.color(0xffffff),
          populateText: true,
          fontSize: 12,
          fontFamily: "Jetbrains mono",
          text: "{valueSum}",
        })
      );

      // Hover effect for the outer circle
      outerCircle.states.create("hover", {
        scale: 1.1,
      });

      // Animations for the inner circle similar to the first code snippet
      innerCircle.animate({
        key: "scale",
        from: 0.5,
        to: 3,
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

      container.events.on("click", function (e) {
        const dataItem = e.target.dataItem;
        if (dataItem) {
          pointSeries.zoomToCluster(dataItem);
        }
      });

      return am5.Bullet.new(root, { sprite: container });
    });

    pointSeries.bullets.push(function () {
      const container = am5.Container.new(root, {});

      const innerCircle = container.children.push(
        am5.Circle.new(root, {
          radius: 13,
          fill: am5.color(0x494af8),
          strokeOpacity: 0,
        })
      );

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const outerCircle = container.children.push(
        am5.Circle.new(root, {
          radius: 34,
          fill: am5.color("#000000"),
          stroke: am5.color("#ffffff"),
          strokeWidth: 3,
          tooltipText: `[bold]{countryName}\n\n[bold]Sessions: [normal]{aggregateSessions}\n[bold]Users: [normal]{aggregateUsers}`,
        })
      );

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const label = container.children.push(
        am5.Label.new(root, {
          centerX: am5.p50,
          centerY: am5.p50,
          fill: am5.color(0xffffff),
          populateText: true,
          fontSize: 12,
          fontFamily: "Jetbrains mono",
          text:
            selectedTab === "sessions"
              ? "{aggregateSessions}"
              : "{aggregateUsers}",
        })
      );

      // Animations for the inner circle similar to the first code snippet
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

      return am5.Bullet.new(root, { sprite: container });
    });

    const mapData = data.flatMap((country) => [
      {
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
        value:
          selectedTab === "sessions"
            ? country.countryCities.reduce(
                (sum, city) => sum + city.citySessions,
                0
              )
            : country.countryCities.reduce(
                (sum, city) => sum + city.cityUsers,
                0
              ),
      },
      ...country.countryCities.map((city) => ({
        geometry: {
          type: "Point",
          coordinates: [city.cityLongitude, city.cityLatitude],
        },
        cityName: city.cityName,
        citySessions: city.citySessions,
        cityUsers: city.cityUsers,
        value: selectedTab === "sessions" ? city.citySessions : city.cityUsers,
      })),
    ]);

    pointSeries.data.setAll(mapData);

    chart.appear(1000, 100);

    return () => root.dispose();
  }, [selectedTab, data]);

  return <div className="h-full w-full" ref={chartRef} />;
};
