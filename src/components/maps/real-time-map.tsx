"use client";

import React, { useLayoutEffect, useRef, useState } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

import { RealTimeMapProps } from "@/interfaces/pages/dashboard-page-components-interface";

interface DataContext {
  countryName: string;
  geometry: {
    type: "Point";
    coordinates: [number, number];
  };
  value?: number;
}

export const RealTimeMap = ({ selectedTab, data }: RealTimeMapProps) => {
  const chartRef = useRef<HTMLDivElement | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  useLayoutEffect(() => {
    const root = am5.Root.new(chartRef.current!);
    root.setThemes([am5themes_Animated.new(root)]);

    // Create Map Chart
    const chart = root.container.children.push(
      am5map.MapChart.new(root, {
        panX: "rotateX",
        panY: "translateY",
        projection: am5map.geoMercator(),
        maxZoomLevel: 32,
        minZoomLevel: 1,
      })
    );

    // Zoom control
    const zoomControl = chart.set(
      "zoomControl",
      am5map.ZoomControl.new(root, {})
    );
    zoomControl.homeButton.set("visible", true);

    // MapPolygonSeries: World map
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

    // MapPointSeries: Country markers
    const pointSeries = chart.series.push(
      am5map.ClusteredPointSeries.new(root, {
        calculateAggregates: true,
        cursorOverStyle: "pointer",
      })
    );
// eslint-disable-next-line @typescript-eslint/no-unused-vars
    pointSeries.bullets.push((root, series, dataItem) => {
      const container = am5.Container.new(root, {});

      const circle = container.children.push(
        am5.Circle.new(root, {
          radius: 30,
          fill: am5.color("#000000"),
          stroke: am5.color("#ffffff"),
          strokeWidth: 3,
          tooltipText: "[bold]{countryName}",
          cursorOverStyle: "pointer",
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
          text: "{value}",
        })
      );

      const innerCircle = container.children.push(
        am5.Circle.new(root, {
          radius: 15,
          fill: am5.color(0x494af8),
          strokeOpacity: 0,
        })
      );

      innerCircle.animate({
        key: "scale",
        from: 0.5,
        to: 4,
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

      circle.events.on("click", (ev) => {
        const countryData = ev.target.dataItem?.dataContext as DataContext;
        if (countryData?.countryName) {
          const [longitude, latitude] = countryData.geometry.coordinates;

          setSelectedCountry(countryData.countryName);
          updateCityMarkers(countryData.countryName);

          chart.zoomToGeoPoint({ longitude, latitude }, 3, true);
          pointSeries.hide();
          citySeries.show();
        }
      });

      return am5.Bullet.new(root, {
        sprite: container,
      });
    });

    const citySeries = chart.series.push(
      am5map.MapPointSeries.new(root, {
        calculateAggregates: true,
      })
    );

    citySeries.bullets.push((root) => {
      const container = am5.Container.new(root, {});

      container.children.push(
        am5.Circle.new(root, {
          radius: 15,
          fill: am5.color("#000000"),
          stroke: am5.color("#ffffff"),
          strokeWidth: 2,
          tooltipText:
            "[bold]{cityName}\n[bold]Sessions: [normal]{citySessions}\n[bold]Users: [normal]{cityUsers}",
        })
      );

      container.children.push(
        am5.Label.new(root, {
          centerX: am5.p50,
          centerY: am5.p50,
          fill: am5.color(0xffffff),
          populateText: true,
          fontSize: 10,
          text: "{value}",
        })
      );

      return am5.Bullet.new(root, {
        sprite: container,
      });
    });

    const updateCityMarkers = (countryName: string | null) => {
      const cityData =
        countryName &&
        data
          .find((country) => country.countryName === countryName)
          ?.countryCities.map((city) => ({
            geometry: {
              type: "Point",
              coordinates: [city.cityLongitude, city.cityLatitude],
            },
            cityName: city.cityName,
            citySessions: city.citySessions,
            cityUsers: city.cityUsers,
            value:
              selectedTab === "sessions" ? city.citySessions : city.cityUsers,
          }));

      citySeries.data.setAll(cityData || []);
    };

    const countryData = data.map((country) => ({
      geometry: {
        type: "Point",
        coordinates: [country.longitude, country.latitude],
      },
      countryName: country.countryName,
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
    }));

    pointSeries.data.setAll(countryData);
    updateCityMarkers(null);

    chart.events.on("wheel", () => {
      const zoomLevel = chart.get("zoomLevel") ?? 0;
      if (zoomLevel >= 5) {
        pointSeries.hide();
        citySeries.show();
      } else {
        pointSeries.show();
        citySeries.hide();
      }
    });

    chart.appear(1000, 100);

    return () => {
      root.dispose();
      setSelectedCountry(null);
    };
  }, [selectedTab, data]);

  return <div className="h-full w-full" ref={chartRef} />;
};
