"use client";

import React from "react";
import dynamic from "next/dynamic";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Loading from "@/components/partials/loader";
const AmChartsLineChart02 = dynamic(
  () =>
    import("../../charts/amcharts-line-charts").then(
      (mod) => mod.AmChartsLineChart02
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

const PeakUsageTimesCard = () => {
  return (
    <Card
      id="PeakUasgeTimesSection"
      className="!standard-card-styling lg:col-span-2 col-span-1"
    >
      <CardHeader className="py-6 border-b border-border">
        {/* CARD HEADING */}
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px]">
          Peak Usage Times
        </CardTitle>
      </CardHeader>

      {/* PEAK USAGE TIMES AREA CHART */}
      <CardContent className="h-[500px] flex flex-col justify-center py-12">
        <AmChartsLineChart02
          chartId="PeakUasgeTimesLineChart"
          data={[
            { date: "2024-01-01", standard: 10, secure: 16, wallet: 13 },
            { date: "2024-01-02", standard: 10.5, secure: 16.2, wallet: 13.5 },
            { date: "2024-01-03", standard: 10.2, secure: 16.5, wallet: 14 },
            { date: "2024-01-04", standard: 9.8, secure: 16.8, wallet: 14.2 },
            { date: "2024-01-05", standard: 11, secure: 16.7, wallet: 14.5 },
            { date: "2024-01-06", standard: 11.2, secure: 16.4, wallet: 15 },
            { date: "2024-01-07", standard: 11.5, secure: 16.2, wallet: 15.2 },
            { date: "2024-01-08", standard: 12, secure: 16, wallet: 15.5 },
            { date: "2024-01-09", standard: 12.5, secure: 15.8, wallet: 15.8 },
            { date: "2024-01-10", standard: 13, secure: 15.9, wallet: 16 },
            { date: "2024-01-11", standard: 11.5, secure: 16.2, wallet: 16.2 },
            { date: "2024-01-12", standard: 11.2, secure: 16.5, wallet: 16.5 },
            { date: "2024-01-13", standard: 11, secure: 17, wallet: 16.8 },
            { date: "2024-01-14", standard: 11.3, secure: 17.5, wallet: 17 },
            { date: "2024-01-15", standard: 11.5, secure: 18, wallet: 17.2 },
          ]}
        />
      </CardContent>
    </Card>
  );
};

export default PeakUsageTimesCard;
