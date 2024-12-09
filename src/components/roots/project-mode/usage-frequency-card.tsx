"use client";

import React from "react";
import dynamic from "next/dynamic";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Loading from "@/components/partials/loader";
const AmChartsAreaChart03 = dynamic(
  () =>
    import("../../charts/amcharts-area-charts").then(
      (mod) => mod.AmChartsAreaChart03
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

const UsageFrequencyCard = () => {
  return (
    <Card
      id="UsageFrequencySection"
      className="!standard-card-styling lg:col-span-2 col-span-1"
    >
      <CardHeader className="py-6 border-b border-border">
        {/* CARD HEADING */}
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px]">
          Usage Frequency
        </CardTitle>
      </CardHeader>

      {/* USAGE FREQUENCY LINE CHART */}
      <CardContent className="py-12 h-[650px] max-md:px-2">
        <AmChartsAreaChart03
          chartId="TrafficOverTimeAreaChart"
          data={[
            { date: "2017-01-01", value: 100 },
            { date: "2017-01-02", value: 110 },
            { date: "2017-01-03", value: 120 },
            { date: "2017-01-04", value: 150 },
            { date: "2017-01-05", value: 140 },
            { date: "2017-01-06", value: 160 },
            { date: "2017-01-07", value: 170 },
            { date: "2017-01-08", value: 180 },
            { date: "2017-01-09", value: 190 },
            { date: "2017-01-10", value: 210 },
            { date: "2017-01-11", value: 200 },
            { date: "2017-01-12", value: 180 },
          ]}
        />
      </CardContent>
    </Card>
  );
};

export default UsageFrequencyCard;
