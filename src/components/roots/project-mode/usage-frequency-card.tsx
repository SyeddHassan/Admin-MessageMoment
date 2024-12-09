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
            { date: 1702406400000, value: 105 },
            { date: 1702492800000, value: 110 },
            { date: 1702579200000, value: 107 },
            { date: 1702665600000, value: 115 },
            { date: 1702752000000, value: 120 },
            { date: 1702838400000, value: 118 },
            { date: 1702924800000, value: 125 },
            { date: 1703011200000, value: 130 },
            { date: 1703097600000, value: 128 },
            { date: 1703184000000, value: 135 },
            { date: 1703270400000, value: 122 },
            { date: 1703356800000, value: 110 },
            { date: 1703443200000, value: 115 },
            { date: 1703529600000, value: 120 },
            { date: 1703616000000, value: 123 },
            { date: 1703702400000, value: 127 },
            { date: 1703788800000, value: 132 },
            { date: 1703875200000, value: 129 },
            { date: 1703961600000, value: 137 },
            { date: 1704048000000, value: 124 },
            { date: 1704134400000, value: 112 },
            { date: 1704220800000, value: 119 },
            { date: 1704307200000, value: 130 },
            { date: 1704393600000, value: 126 },
            { date: 1704480000000, value: 138 },
            { date: 1704566400000, value: 133 },
            { date: 1704652800000, value: 118 },
            { date: 1704739200000, value: 122 },
            { date: 1704825600000, value: 121 },
            { date: 1704912000000, value: 126 },
          ]}
        />
      </CardContent>
    </Card>
  );
};

export default UsageFrequencyCard;
