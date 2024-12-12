"use client";

import React from "react";
import dynamic from "next/dynamic";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Loading from "@/components/partials/loader";
const AmChartsBarChart08 = dynamic(
  () =>
    import("../../charts/amcharts-bar-charts").then(
      (mod) => mod.AmChartsBarChart08
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

const RegionAdCampaignsCard = () => {
  return (
    <Card
      id="RegionAdCampaignsSection"
      className="!standard-card-styling lg:col-span-1 md:col-span-4 col-span-1"
    >
      <CardHeader className="py-6 border-b border-border">
        {/* CARD HEADING */}
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px]">
          Ads Campaign by Region
        </CardTitle>
      </CardHeader>

      {/* REGION AD CAMPAIGNS BAR CHART */}
      <CardContent className="h-[500px] py-12">
        <AmChartsBarChart08
          chartId="RegionAdCampaignsBarChart"
          data={[
            { name: "Worldwide", value: 387 },
            { name: "Africa", value: 258 },
            { name: "Australia", value: 214 },
            { name: "Europe", value: 155 },
          ]}
        />
      </CardContent>
    </Card>
  );
};

export default RegionAdCampaignsCard;
