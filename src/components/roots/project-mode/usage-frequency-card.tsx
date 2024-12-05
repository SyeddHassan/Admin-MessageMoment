"use client";

import React from "react";
import dynamic from "next/dynamic";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Loading from "@/components/partials/loader";
const AmChartsLineChart01 = dynamic(
  () =>
    import("../../charts/amcharts-line-charts").then(
      (mod) => mod.AmChartsLineChart01
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
      <CardContent className="py-8 h-[550px] max-md:px-2">
        <AmChartsLineChart01
          chartId="UsageFrequencyChart"
          data={[
            { date: "2023-11-01", value: 100 },
            { date: "2023-11-02", value: 105 },
            { date: "2023-11-03", value: 110 },
            { date: "2023-11-04", value: 120 },
            { date: "2023-11-05", value: 115 },
            { date: "2023-11-06", value: 130 },
            { date: "2023-11-07", value: 150 },
            { date: "2023-11-08", value: 140 },
            { date: "2023-11-09", value: 160 },
            { date: "2023-11-10", value: 170 },
            { date: "2023-11-11", value: 180 },
            { date: "2023-11-12", value: 200 },
            { date: "2023-11-13", value: 195 },
            { date: "2023-11-14", value: 210 },
            { date: "2023-11-15", value: 215 },
            { date: "2023-11-16", value: 220 },
            { date: "2023-11-17", value: 240 },
            { date: "2023-11-18", value: 230 },
            { date: "2023-11-19", value: 250 },
            { date: "2023-11-20", value: 260 },
            { date: "2023-11-21", value: 275 },
            { date: "2023-11-22", value: 280 },
            { date: "2023-11-23", value: 290 },
            { date: "2023-11-24", value: 300 },
            { date: "2023-11-25", value: 310 },
            { date: "2023-11-26", value: 320 },
            { date: "2023-11-27", value: 330 },
            { date: "2023-11-28", value: 340 },
            { date: "2023-11-29", value: 350 },
            { date: "2023-11-30", value: 360 },
          ]}
        />
      </CardContent>
    </Card>
  );
};

export default UsageFrequencyCard;
