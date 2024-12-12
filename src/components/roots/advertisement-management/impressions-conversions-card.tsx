"use client";

import React from "react";
import dynamic from "next/dynamic";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Loading from "@/components/partials/loader";
const AmChartsBarChart09 = dynamic(
  () =>
    import("../../charts/amcharts-bar-charts").then(
      (mod) => mod.AmChartsBarChart09
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

const ImpressionsConversionsCard = () => {
  return (
    <Card
      id="ImpressionsConversionsSection"
      className="!standard-card-styling lg:col-span-2 col-span-1"
    >
      <CardHeader className="py-6 border-b border-border">
        {/* CARD HEADING */}
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px]">
          Impressions/Conversions
        </CardTitle>
      </CardHeader>

      {/* IMPRESSION CONVERSION BAR CHART */}
      <CardContent className="py-8 h-[650px] max-md:px-2">
        <AmChartsBarChart09
          chartId="ProjectModeActivations"
          data={[
            { month: "Feb", impressions: 90, conversions: 40 },
            { month: "Mar", impressions: 80, conversions: 30 },
            { month: "Apr", impressions: 100, conversions: 50 },
            { month: "May", impressions: 90, conversions: 40 },
            { month: "Jun", impressions: 85, conversions: 45 },
            { month: "Jul", impressions: 95, conversions: 50 },
            { month: "Aug", impressions: 100, conversions: 55 },
            { month: "Sep", impressions: 110, conversions: 60 },
            { month: "Oct", impressions: 95, conversions: 50 },
          ]}
        />
      </CardContent>
    </Card>
  );
};

export default ImpressionsConversionsCard;
