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

const UsersAvgInactivityCard = () => {
  return (
    <Card
      id="UsersAvgInactivitySection"
      className="!standard-card-styling col-span-1"
    >
      <CardHeader className="py-6 border-b border-border">
        {/* CARD HEADING */}
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px]">
          Avg. Inactivity by User
        </CardTitle>
      </CardHeader>

      {/* AVERAGE INACTIVITY BY USERS LINE CHART */}
      <CardContent className="py-4 h-[500px] max-md:px-2">
        <AmChartsLineChart02
          chartId="UsersAvgInactivityLineChart"
          data={[
            { date: "2023-12-01", value: 150 },
            { date: "2023-12-02", value: 230 },
            { date: "2023-12-03", value: 224 },
            { date: "2023-12-04", value: 218 },
            { date: "2023-12-05", value: 135 },
            { date: "2023-12-06", value: 147 },
            { date: "2023-12-07", value: 260 },
          ]}
        />
      </CardContent>
    </Card>
  );
};

export default UsersAvgInactivityCard;
