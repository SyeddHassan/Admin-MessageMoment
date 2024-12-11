"use client";

import React from "react";
import dynamic from "next/dynamic";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Loading from "@/components/partials/loader";
const AmChartsLineChart03 = dynamic(
  () =>
    import("../../charts/amcharts-line-charts").then(
      (mod) => mod.AmChartsLineChart03
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

const CpuUsageCard = () => {
  return (
    <Card id="CpuUsageSection" className="!standard-card-styling col-span-1">
      <CardHeader className="py-6 border-b border-border">
        {/* CARD HEADING */}
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px]">
          CPU Usage (%)
        </CardTitle>
      </CardHeader>

      {/* CPU USAGE LINE CHART */}
      <CardContent className="py-8 h-[600px] max-md:px-2">
        <AmChartsLineChart03
          chartId="CpuUsageLineChart"
          data={[
            { timestamp: "2009-03-30 18:45", usage: 10 },
            { timestamp: "2009-03-30 18:50", usage: 6 },
            { timestamp: "2009-03-30 18:55", usage: 18 },
            { timestamp: "2009-03-30 19:00", usage: 8 },
            { timestamp: "2009-03-30 19:05", usage: 32 },
            { timestamp: "2009-03-30 19:10", usage: 9 },
            { timestamp: "2009-03-30 19:15", usage: 31 },
            { timestamp: "2009-03-30 19:20", usage: 8 },
            { timestamp: "2009-03-30 19:25", usage: 15 },
            { timestamp: "2009-03-30 19:30", usage: 11 },
            { timestamp: "2009-03-30 19:35", usage: 39 },
            { timestamp: "2009-03-30 19:40", usage: 25 },
          ]}
        />
      </CardContent>
    </Card>
  );
};

export default CpuUsageCard;
