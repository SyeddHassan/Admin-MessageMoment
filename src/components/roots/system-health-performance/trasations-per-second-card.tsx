"use client";

import React from "react";
import dynamic from "next/dynamic";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import Loading from "@/components/partials/loader";
const AmChartsAreaCharts05 = dynamic(
  () =>
    import("../../charts/amcharts-area-charts").then(
      (mod) => mod.AmChartsAreaCharts05
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

const TrasationsPerSecondCard = () => {
  return (
    <Card
      id="TrasationsPerSecondSection"
      className="!standard-card-styling col-span-1"
    >
      <CardHeader className="py-6 border-b border-border">
        {/* CARD HEADING */}
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px]">
          Transactions per Second
        </CardTitle>
      </CardHeader>

      {/* TRANSACTIONS PER SECOND AREA CHART */}
      <CardContent className="pt-12 h-[500px] max-md:px-2">
        <AmChartsAreaCharts05
          chartId="TrasationsPerSecondAreaChart"
          data={[
            {
              timestamp: new Date("2024-12-09T00:00:00"),
              ASPState: 35,
              DBADMIN: 120,
              master: 180,
              msdb: 250,
              tempdb: 50,
            },
            {
              timestamp: new Date("2024-12-09T00:15:00"),
              ASPState: 40,
              DBADMIN: 105,
              master: 190,
              msdb: 260,
              tempdb: 60,
            },
            {
              timestamp: new Date("2024-12-09T00:30:00"),
              ASPState: 25,
              DBADMIN: 95,
              master: 170,
              msdb: 240,
              tempdb: 45,
            },
            {
              timestamp: new Date("2024-12-09T00:45:00"),
              ASPState: 30,
              DBADMIN: 110,
              master: 185,
              msdb: 255,
              tempdb: 55,
            },
            {
              timestamp: new Date("2024-12-09T01:00:00"),
              ASPState: 45,
              DBADMIN: 100,
              master: 175,
              msdb: 235,
              tempdb: 40,
            },
            {
              timestamp: new Date("2024-12-09T01:15:00"),
              ASPState: 50,
              DBADMIN: 130,
              master: 195,
              msdb: 265,
              tempdb: 65,
            },
            {
              timestamp: new Date("2024-12-09T01:30:00"),
              ASPState: 37,
              DBADMIN: 115,
              master: 185,
              msdb: 240,
              tempdb: 52,
            },
            {
              timestamp: new Date("2024-12-09T01:45:00"),
              ASPState: 42,
              DBADMIN: 125,
              master: 190,
              msdb: 250,
              tempdb: 48,
            },
            {
              timestamp: new Date("2024-12-09T02:00:00"),
              ASPState: 32,
              DBADMIN: 105,
              master: 170,
              msdb: 230,
              tempdb: 46,
            },
            {
              timestamp: new Date("2024-12-09T02:15:00"),
              ASPState: 28,
              DBADMIN: 95,
              master: 165,
              msdb: 220,
              tempdb: 50,
            },
          ]}
        />
      </CardContent>
    </Card>
  );
};

export default TrasationsPerSecondCard;
