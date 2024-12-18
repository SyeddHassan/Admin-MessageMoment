"use client";

import React, { useLayoutEffect, useRef } from "react";

import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";

import { RealTimeMapProps } from "@/interfaces/pages/dashboard-page-components-interface";

export const RealTimeMap = ({
  selectedTab,
  data,
  selectedCountry,
  setSelectedCountry,
}: RealTimeMapProps) => {
  const chartRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!chartRef.current) return;

    const root = am5.Root.new(chartRef.current);
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
      toggleKey: "active",
      interactive: true,
      fill: am5.color(0xe3e6e8),
    });

    polygonSeries.mapPolygons.template.states.create("hover", {
      fill: am5.color(0x494af8),
    });

    const pointSeries = chart.series.push(
      am5map.ClusteredPointSeries.new(root, {})
    );

    pointSeries.set("clusteredBullet", function (root) {
      const container = am5.Container.new(root, {
        cursorOverStyle: "pointer",
      });

      container.children.push(
        am5.Circle.new(root, {
          radius: 8,
          tooltipY: 0,
          fill: am5.color(0xff8c00),
        })
      );

      container.children.push(
        am5.Circle.new(root, {
          radius: 12,
          fillOpacity: 0.3,
          tooltipY: 0,
          fill: am5.color(0xff8c00),
        })
      );

      container.children.push(
        am5.Circle.new(root, {
          radius: 16,
          fillOpacity: 0.3,
          tooltipY: 0,
          fill: am5.color(0xff8c00),
        })
      );

      const label = container.children.push(
        am5.Label.new(root, {
          centerX: am5.p50,
          centerY: am5.p50,
          fill: am5.color(0xffffff),
          populateText: true,
          fontSize: "8",
          text: "{value}",
        })
      );

      container.events.on("click", function (e) {
        const dataItem = e.target.dataItem;
        if (dataItem) {
          pointSeries.zoomToCluster(dataItem);
        } else {
          console.warn("No dataItem found on click event.");
        }
      });

      return am5.Bullet.new(root, {
        sprite: container,
      });
    });

    pointSeries.bullets.push(function () {
      const circle = am5.Circle.new(root, {
        radius: 12,
        tooltipY: 0,
        fill: am5.color("#000000"),
        stroke: am5.color("#ffffff"),
        strokeWidth: 3,
        tooltipText:
          "[bold]{title}\n\n[bold]Sessions: [normal]{sessions}\n[bold]Users: [normal]{users}",
      });



      return am5.Bullet.new(root, {
        sprite: circle,
      });
    });

    data.forEach((country) => {
      country.countryCities.forEach((city) => {
        pointSeries.data.push({
          geometry: {
            type: "Point",
            coordinates: [city.cityLongitude, city.cityLatitude],
          },
          title: city.cityName,
          value: city.citySessions,
        });
      });
    });

    chart.appear(1000, 100);

    return () => {
      root.dispose();
    };
  }, [data]);

  return <div ref={chartRef} className="h-full w-full" />;
};
