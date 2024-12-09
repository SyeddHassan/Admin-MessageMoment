"use client";

import React from "react";
import dynamic from "next/dynamic";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Loading from "@/components/partials/loader";
const AmChartsBarChart02 = dynamic(
  () =>
    import("../../charts/amcharts-bar-charts").then(
      (mod) => mod.AmChartsBarChart02
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

const ActiveUsersSessionTimeCard = () => {
  return (
    <Card
      id="ActiveUsersSessionTimeSection"
      className="!standard-card-styling lg:col-span-2 col-span-1"
    >
      <CardHeader className="py-6 border-b border-border">
        {/* CARD HEADING */}
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px]">
          Session time by Active Users
        </CardTitle>
      </CardHeader>

      {/* ACTIVE USERS AND SESSIONS BAR CHART */}
      <CardContent className="pt-[5rem] h-[650px] max-md:px-2">
        <AmChartsBarChart02
          chartId="ActiveUsersSessionTimeBarChart"
          data={[
            { time: "1m 0s - 6m 0s", sessions: 951 },
            { time: "6m 0s - 11m 0s", sessions: 383 },
            { time: "11m 0s - 16m 0s", sessions: 258 },
            { time: "16m 0s - 21m 0s", sessions: 214 },
            { time: "21m 0s - 26m 0s", sessions: 200 },
            { time: "26m 0s - 30m 0s", sessions: 250 },
          ]}
        />
      </CardContent>
    </Card>
  );
};

export default ActiveUsersSessionTimeCard;
