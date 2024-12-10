"use client";

import React from "react";
import dynamic from "next/dynamic";

import {
  chart_config,
  generateCPUData,
} from "@/constants/system-health-performance-page-components-data";

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
      <CardContent className="py-8 h-[500px] max-md:px-2">
        <AmChartsLineChart03
          chartId="CpuUsageLineChart"
          chart_config={chart_config}
          generateCPUData={generateCPUData}
        />
      </CardContent>
    </Card>
  );
};

export default CpuUsageCard;
