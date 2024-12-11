"use client";

import React from "react";
import dynamic from "next/dynamic";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Loading from "@/components/partials/loader";
const AmChartsLineChart04 = dynamic(
  () =>
    import("../../charts/amcharts-line-charts").then(
      (mod) => mod.AmChartsLineChart04
    ),
  {
    ssr: false,
    loading: () => (
      <Loading
        Icon={LoaderCircle}
        iconClassName="w-[50px] h-[50px] text-secondary-theme animate-spin"
        containerClassName="w-full h-full"
      />
    ),
  }
);

import { LoaderCircle } from "lucide-react";

const ServerActivityCard = () => {
  return (
    <Card id="ServerActivitySection" className="!standard-card-styling">
      <CardHeader className="py-6 border-b border-border">
        {/* CARD HEADING */}
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px]">
          Server Activity
        </CardTitle>
      </CardHeader>

      {/* SERVER ACTIVITY LINE CHART */}
      <CardContent className="h-[700px] py-8 pb-12">
        <AmChartsLineChart04
          chartId="ServerActivityAreaChart"
          data={[
            {
              timestamp: new Date("2023-11-29T11:15:00"),
              responseTime: 1100,
              contentLength: 45,
            },
            {
              timestamp: new Date("2023-11-29T11:30:00"),
              responseTime: 750,
              contentLength: 42,
            },
            {
              timestamp: new Date("2023-11-29T11:45:00"),
              responseTime: 1300,
              contentLength: 44,
            },
            {
              timestamp: new Date("2023-11-29T12:00:00"),
              responseTime: 800,
              contentLength: 43,
            },
            {
              timestamp: new Date("2023-11-29T12:15:00"),
              responseTime: 2100,
              contentLength: 45,
            },
            {
              timestamp: new Date("2023-11-29T12:30:00"),
              responseTime: 2200,
              contentLength: 42,
            },
            {
              timestamp: new Date("2023-11-29T12:45:00"),
              responseTime: 1700,
              contentLength: 44,
            },
            {
              timestamp: new Date("2023-11-29T13:00:00"),
              responseTime: 700,
              contentLength: 43,
            },
            {
              timestamp: new Date("2023-11-29T13:15:00"),
              responseTime: 800,
              contentLength: 45,
            },
            {
              timestamp: new Date("2023-11-29T13:30:00"),
              responseTime: 1100,
              contentLength: 44,
            },
            {
              timestamp: new Date("2023-11-29T13:45:00"),
              responseTime: 900,
              contentLength: 43,
            },
            {
              timestamp: new Date("2023-11-29T14:00:00"),
              responseTime: 750,
              contentLength: 45,
            },
            {
              timestamp: new Date("2023-11-29T14:15:00"),
              responseTime: 800,
              contentLength: 44,
            },
            {
              timestamp: new Date("2023-11-29T14:30:00"),
              responseTime: 1200,
              contentLength: 43,
            },
            {
              timestamp: new Date("2023-11-29T14:45:00"),
              responseTime: 950,
              contentLength: 45,
            },
            {
              timestamp: new Date("2023-11-29T15:00:00"),
              responseTime: 850,
              contentLength: 44,
            },
            {
              timestamp: new Date("2023-11-29T15:15:00"),
              responseTime: 1000,
              contentLength: 43,
            },
            {
              timestamp: new Date("2023-11-29T15:21:00"),
              responseTime: 780,
              contentLength: 45,
            },
          ]}
        />
      </CardContent>
    </Card>
  );
};

export default ServerActivityCard;
