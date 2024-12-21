"use client";

import React, { useEffect, useLayoutEffect, useRef } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
import { RealTimeMapProps } from "@/interfaces/pages/dashboard-page-components-interface";

type ProcessedCountryData = {
  geometry: {
    type: "Point";
    coordinates: [number, number];
  };
  countryName: string;
  countryId: string;
  countryTotalSessions: number;
  countryTotalUsers: number;
  value: number;
  cities: ProcessedCityData[];
};

type ProcessedCityData = {
  geometry: {
    type: "Point";
    coordinates: [number, number];
  };
  cityName: string;
  citySessions: number;
  cityUsers: number;
  value: number;
  countryId: string;
};

export const TestRealTimeMap = ({
  selectedTab,
  data,
  selectedCountry,
}: RealTimeMapProps) => {
  const chartRef = useRef<HTMLDivElement | null>(null);
  const chartInstance = useRef<am5map.MapChart | null>(null);

  useLayoutEffect(() => {
    if (!chartRef.current) return;

    const root = am5.Root.new(chartRef.current);
    root.setThemes([am5themes_Animated.new(root)]);

    const chart = root.container.children.push(
      am5map.MapChart.new(root, {
        panX: "rotateX",
        panY: "translateY",
        projection: am5map.geoMercator(),
        zoomStep: 2,
        wheelY: "zoom",
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
      am5map.MapPointSeries.new(root, {
        calculateAggregates: true,
        polygonIdField: "countryId",
      })
    );

    const processedData = data.map((country): ProcessedCountryData => {
      const countryTotalSessions = country.countryCities.reduce(
        (sum, city) => sum + city.citySessions,
        0
      );
      const countryTotalUsers = country.countryCities.reduce(
        (sum, city) => sum + city.cityUsers,
        0
      );

      return {
        geometry: {
          type: "Point",
          coordinates: [country.longitude, country.latitude],
        },
        countryName: country.countryName,
        countryId: country.countryId,
        countryTotalSessions,
        countryTotalUsers,
        value:
          selectedTab === "sessions" ? countryTotalSessions : countryTotalUsers,
        cities: country.countryCities.map(
          (city): ProcessedCityData => ({
            geometry: {
              type: "Point",
              coordinates: [city.cityLongitude, city.cityLatitude],
            },
            cityName: city.cityName,
            citySessions: city.citySessions,
            cityUsers: city.cityUsers,
            value:
              selectedTab === "sessions" ? city.citySessions : city.cityUsers,
            countryId: city.countryId,
          })
        ),
      };
    });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const bulletTemplate = am5.Template.new({});
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    pointSeries.bullets.push((root, series, dataItem) => {
      const container = am5.Container.new(root, {});
      const data = dataItem.dataContext as
        | ProcessedCountryData
        | ProcessedCityData;

      const circle = container.children.push(
        am5.Circle.new(root, {
          radius: 6,
          fill: am5.color(0x494af8),
          strokeOpacity: 0,
        })
      );
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const outerCircle = container.children.push(
        am5.Circle.new(root, {
          radius: 30,
          fill: am5.color("#000000"),
          stroke: am5.color("#ffffff"),
          strokeWidth: 3,
          tooltipText:
            "cityName" in data
              ? "[bold]{cityName}\n\n[bold]Sessions: [normal]{citySessions}\n[bold]Users: [normal]{cityUsers}"
              : "[bold]{countryName}\n\n[bold]Sessions: [normal]{countryTotalSessions}\n[bold]Users: [normal]{countryTotalUsers}",
          interactive: true,
          cursorOverStyle: "pointer",
        })
      );
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const label = container.children.push(
        am5.Label.new(root, {
          text: "{value}",
          fill: am5.color(0xffffff),
          fontSize: 11,
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
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      container.events.on("click", (e) => {
        if (!("cityName" in data)) {
          const clickedCountry = processedData.find(
            (c) => c.countryId === data.countryId
          );

          if (clickedCountry) {
            pointSeries.data.clear();
            clickedCountry.cities.forEach((city) => {
              pointSeries.data.push(city);
            });

            chart.zoomToGeoPoint(
              {
                longitude: clickedCountry.geometry.coordinates[0],
                latitude: clickedCountry.geometry.coordinates[1],
              },
              3
            );
          }
        }
      });

      return am5.Bullet.new(root, {
        sprite: container,
      });
    });

    pointSeries.data.setAll(processedData);

    chart.events.on("wheel", () => {
      const zoomLevel = chart.get("zoomLevel") ?? 1;
      if (zoomLevel > 2) {
        const cityData: ProcessedCityData[] = [];
        processedData.forEach((country) => {
          cityData.push(...country.cities);
        });
        pointSeries.data.setAll(cityData);
      } else {
        pointSeries.data.setAll(processedData);
      }
    });

    // Home button functionality
    zoomControl.homeButton.events.on("click", () => {
      chart.goHome();
      pointSeries.data.setAll(processedData);
    });

    chartInstance.current = chart;

    return () => {
      root.dispose();
    };
  }, [data, selectedTab]);

  useEffect(() => {
    if (selectedCountry && chartInstance.current) {
      const { longitude, latitude } = selectedCountry;
      chartInstance.current.zoomToGeoPoint({ longitude, latitude }, 12);
    }
  }, [selectedCountry]);

  return <div ref={chartRef} style={{ width: "100%", height: "100%" }} />;
};
