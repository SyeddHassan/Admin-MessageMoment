"use client";

import React, { useEffect, useRef } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodataWorldLow from "@amcharts/amcharts5-geodata/worldLow";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

// Define prop types
type MapComponentProps = {
  selectedTab: "sessions" | "users";
  selectedCountry?: string;
  data: {
    sessions: Record<string, number>;
    users: Record<
      string,
      Record<string, { location: [number, number]; users: number }>
    >;
    coordinates: Record<string, [number, number]>;
  };
};

const MapComponent: React.FC<MapComponentProps> = ({
  selectedTab,
  selectedCountry,
  data,
}) => {
  const chartRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    // Initialize root and themes
    const root = am5.Root.new(chartRef.current);

    root.setThemes([am5themes_Animated.new(root)]);

    const chart = root.container.children.push(
      am5map.MapChart.new(root, {
        panX: "none",
        panY: "none",
        projection: am5map.geoMercator(),
      })
    );

    // Add polygon series
    const polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodataWorldLow,
      })
    );

    polygonSeries.mapPolygons.template.setAll({
      fill: am5.color("#e6e6e6"),
      stroke: am5.color("#ffffff"),
    });

    // Add point series
    const pointSeries = chart.series.push(am5map.MapPointSeries.new(root, {}));

    if (selectedTab === "sessions") {
      // Plot country-level session markers
      Object.entries(data.sessions).forEach(([countryCode, sessionCount]) => {
        const countryCoordinates = data.coordinates[countryCode];
        if (!countryCoordinates) {
          console.warn(`Coordinates missing for country: ${countryCode}`);
          return;
        }

        pointSeries.bullets.push(() =>
          am5.Bullet.new(root, {
            sprite: am5.Circle.new(root, {
              radius: Math.max(Math.log(sessionCount + 1) * 3, 5),
              tooltipText: `${countryCode}: ${sessionCount} sessions`,
              fill: am5.color("#007bff"),
            }),
          })
        );

        pointSeries.data.push({
          geometry: {
            type: "Point",
            coordinates: countryCoordinates,
          },
        });
      });
    } else if (selectedTab === "users" && selectedCountry) {
      // Plot city-level user markers
      const countryUsers = data.users[selectedCountry];
      const countryCoordinates = data.coordinates[selectedCountry];

      if (!countryCoordinates || !countryUsers) {
        console.error(`Missing data for country: ${selectedCountry}`);
        return;
      }

      chart.zoomToGeoPoint(
        {
          latitude: countryCoordinates[0],
          longitude: countryCoordinates[1],
        },
        2 // Zoom level
      );

      Object.entries(countryUsers).forEach(([city, cityData]) => {
        const { location: cityCoordinates, users: userCount } = cityData;

        pointSeries.bullets.push(() =>
          am5.Bullet.new(root, {
            sprite: am5.Circle.new(root, {
              radius: Math.max(Math.log(userCount + 1) * 2, 5),
              tooltipText: `${city}: ${userCount} users`,
              fill: am5.color("#28a745"),
            }),
          })
        );

        pointSeries.data.push({
          geometry: {
            type: "Point",
            coordinates: cityCoordinates,
          },
        });
      });
    }

    return () => {
      root.dispose();
    };
  }, [selectedTab, selectedCountry, data]);

  return <div ref={chartRef} style={{ width: "100%", height: "500px" }}></div>;
};

export default MapComponent;
