"use client";

import React from "react";
import dynamic from "next/dynamic";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Loading from "@/components/partials/loader";
const AmChartsGaugeChart01 = dynamic(
  () =>
    import("../../charts/amcharts-gauge-charts").then(
      (mod) => mod.AmChartsGaugeChart01
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

const CpuUtilizationCard = () => {
  return (
    <Card
      id="CpuUtilizationSection"
      className="!standard-card-styling col-span-1"
    >
      <CardHeader className="py-6 border-b border-border">
        {/* CARD HEADING */}
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px]">
          CPU Utilization (%)
        </CardTitle>
      </CardHeader>

      {/* CPU UTILIZATION GAUGE CHART */}
      <CardContent className="h-[400px]">
        <AmChartsGaugeChart01
          chartId="CpuUtilizationGaugeChart"
          value={75}
          axisRange0Color="#FF6F61"
          axisRange1Color="#dbdbdb"
        />
      </CardContent>
    </Card>
  );
};

export default CpuUtilizationCard;
