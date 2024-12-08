"use client";

import React from "react";
// import dynamic from "next/dynamic";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import Loading from "@/components/partials/loader";
// const AmChartsAreaChart02 = dynamic(
//   () =>
//     import("../../charts/amcharts-area-charts").then(
//       (mod) => mod.AmChartsAreaChart02
//     ),
//   {
//     ssr: false,
//     loading: () => (
//       <Loading
//         Icon={LoaderCircle}
//         iconClassName="w-[50px] h-[50px] text-secondary-theme animate-spin"
//         containerClassName="w-full h-full"
//       />
//     ),
//   }
// );

// import { LoaderCircle } from "lucide-react";

const TrafficOverTimeCard = () => {
  return (
    <Card
      id="TrafficOverTimeSection"
      className="!standard-card-styling lg:col-span-2 col-span-1"
    >
      <CardHeader className="py-6 border-b border-border">
        {/* CARD HEADING */}
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px]">
          Traffic Over Time
        </CardTitle>
      </CardHeader>

      {/* TRAFFIC OVERTIME AREA CHART */}
      <CardContent className="py-12 h-[650px] max-md:px-2">
        {/* <AmChartsAreaChart02
          data={[
            { date: "2024-12-01", value: 10 },
            { date: "2024-12-02", value: 15 },
            { date: "2024-12-03", value: 18 },
            { date: "2024-12-04", value: 20 },
            { date: "2024-12-05", value: 67 },
            { date: "2024-12-06", value: 65 },
            { date: "2024-12-07", value: 54 },
            { date: "2024-12-08", value: 43 },
            { date: "2024-12-09", value: 12 },
          ]}
        /> */}
      </CardContent>
    </Card>
  );
};

export default TrafficOverTimeCard;
