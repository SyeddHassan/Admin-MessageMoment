"use client";

import React from "react";
import dynamic from "next/dynamic";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Loading from "@/components/partials/loader";
const AmChartsBarChart07 = dynamic(
  () =>
    import("../../charts/amcharts-bar-charts").then(
      (mod) => mod.AmChartsBarChart07
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

import { DeviceTrafficTable } from "@/components/tables/device-traffic-table";

import { LoaderCircle } from "lucide-react";

const DeviceTrafficCard = () => {
  return (
    <Card
      id="DeviceTrafficSection"
      className="!standard-card-styling lg:col-span-2 col-span-1"
    >
      <CardHeader className="py-6 border-b border-border">
        {/* CARD HEADING */}
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px]">
          Traffic by Device
        </CardTitle>
      </CardHeader>

      {/* TRAFFIC BY DEVICE BAR CHART */}
      <CardContent className="h-[700px] flex flex-col gap-4"> 
        <div className="h-[400px]">
          <AmChartsBarChart07
            chartId="DeviceTrafficBarChart"
            data={[
              { name: "Mobile", value: 27 },
              { name: "Desktop", value: 15 },
              { name: "Other", value: 4 },
            ]}
          />
        </div>

        <div className="h-[300px]">
          <DeviceTrafficTable
            data={[
              {
                deviceType: "Summary",
                pageViews: 573,
                siteSessions: 129,
                uniqueVisitors: 38,
                isTotal: true,
              },
              {
                deviceType: "Desktop",
                pageViews: 334,
                siteSessions: 66,
                uniqueVisitors: 11,
              },
              {
                deviceType: "Mobile",
                pageViews: 239,
                siteSessions: 63,
                uniqueVisitors: 27,
              },
              {
                deviceType: "Other",
                pageViews: 12,
                siteSessions: 4,
                uniqueVisitors: 2,
              },
            ]}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default DeviceTrafficCard;
