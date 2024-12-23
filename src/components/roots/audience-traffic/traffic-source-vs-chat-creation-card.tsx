"use client";

import React from "react";
import dynamic from "next/dynamic";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Loading from "@/components/partials/loader";
const AmChartsBarChart05 = dynamic(
  () =>
    import("../../charts/amcharts-bar-charts").then(
      (mod) => mod.AmChartsBarChart05
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
import { ChartJsBarChart05 } from "@/components/charts/chartjs-bar-charts";

const TrafficSourceVsChatCreationCard = () => {
  return (
    <Card
      id="TrafficSourceVsChatCreationSection"
      className="!standard-card-styling col-span-1"
    >
      <CardHeader className="py-6 border-b border-border">
        {/* CARD HEADING */}
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px]">
          Traffic Sources vs Chat Creation
        </CardTitle>
      </CardHeader>

      {/* TRAFFIC SOURCE VS CHAT CREATION BAR CHART */}
      <CardContent className="py-4 h-[500px] max-md:px-2">
        <ChartJsBarChart05
          data={[
            { category: "Direct", sources: 5, chatCreations: 15 },
            { category: "Twitter", sources: 6, chatCreations: 8 },
            { category: "Google.com", sources: 4, chatCreations: 2 },
          ]}
        />
      </CardContent>
    </Card>
  );
};

export default TrafficSourceVsChatCreationCard;
