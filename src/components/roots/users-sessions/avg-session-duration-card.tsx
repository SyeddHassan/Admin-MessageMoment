"use client";

import dynamic from "next/dynamic";
import React from "react";

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

const AvgSessionDurationCard = () => {
  return (
    <Card
      id="AverageSessionDurationSection"
      className="!standard-card-styling lg:col-span-2 col-span-1"
    >
      <CardHeader className="py-6 border-b border-border">
        {/* CARD HEADING */}
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px]">
          Average Session Duration
        </CardTitle>
      </CardHeader>

      {/* AVERAGE SESSION DURATION LINE CHART */}
      <CardContent className="pt-[2rem] h-[650px] max-md:px-2">
        <AmChartsLineChart01
          chartId="AverageSessionDurationLineChart"
          data={[
            {
              date: "02 Jan",
              high: 28,
              low: 12,
              highTime: "00:35",
              lowTime: "00:02",
            },
            {
              date: "03 Jan",
              high: 29,
              low: 11,
              highTime: "00:38",
              lowTime: "00:01",
            },
            {
              date: "04 Jan",
              high: 29,
              low: 11,
              highTime: "00:36",
              lowTime: "00:02",
            },
            {
              date: "05 Jan",
              high: 33,
              low: 14,
              highTime: "00:39",
              lowTime: "00:03",
            },
            {
              date: "06 Jan",
              high: 33,
              low: 14,
              highTime: "00:37",
              lowTime: "00:02",
            },
            {
              date: "07 Jan",
              high: 36,
              low: 18,
              highTime: "00:42",
              lowTime: "00:04",
            },
            {
              date: "08 Jan",
              high: 35,
              low: 18,
              highTime: "00:41",
              lowTime: "00:03",
            },
            {
              date: "09 Jan",
              high: 33,
              low: 17,
              highTime: "00:38",
              lowTime: "00:02",
            },
            {
              date: "10 Jan",
              high: 32,
              low: 17,
              highTime: "00:40",
              lowTime: "00:02",
            },
            {
              date: "11 Jan",
              high: 32,
              low: 13,
              highTime: "00:37",
              lowTime: "00:02",
            },
            {
              date: "12 Jan",
              high: 32,
              low: 13,
              highTime: "00:39",
              lowTime: "00:02",
            },
            {
              date: "13 Jan",
              high: 33,
              low: 13,
              highTime: "00:40",
              lowTime: "00:02",
            },
          ]}
        />
      </CardContent>
    </Card>
  );
};

export default AvgSessionDurationCard;
