"use client";

import React from "react";
import dynamic from "next/dynamic";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Loading from "@/components/partials/loader";
const AmChartsAreaChart02 = dynamic(
  () =>
    import("../../charts/amcharts-area-charts").then(
      (mod) => mod.AmChartsAreaChart02
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

const TrafficOverTimeCard = () => {
  return (
    <Card
      id="TrafficOverTimeSection"
      className="!standard-card-styling lg:col-span-2 col-span-1"
    >
      <CardHeader className="py-6 border-b border-border">
        {/* CARD HEADING */}
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px]">
          Traffic Over Time
        </CardTitle>
      </CardHeader>

      {/* TRAFFIC OVERTIME AREA CHART */}
      <CardContent className="py-12 h-[650px] max-md:px-2">
        <AmChartsAreaChart02
          chartId="TrafficOverTimeAreaChart"
          data={[
            { date: "2024-02-01", value: 22 },
            { date: "2024-02-02", value: 64 },
            { date: "2024-02-03", value: 93 },
            { date: "2024-02-04", value: 56 },
            { date: "2024-02-05", value: 65 },
            { date: "2024-02-06", value: 8 },
            { date: "2024-02-07", value: 27 },
            { date: "2024-02-08", value: 84 },
            { date: "2024-02-09", value: 56 },
            { date: "2024-02-10", value: 18 },
          ]}
        />
      </CardContent>
    </Card>
  );
};

export default TrafficOverTimeCard;
