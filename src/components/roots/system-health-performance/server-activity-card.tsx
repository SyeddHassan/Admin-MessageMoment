"use client";

import React from "react";

import { ServerActivityData } from "@/constants/system-health-performance-data";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart04 } from "@/components/partials/line-charts";

const ServerActivityCard = () => {
  return (
    <Card
      id="ServerActivitySection"
      className="w-full !rounded-[0.5rem] !card-box-shadow"
    >
      <CardHeader className="py-6 border-b border-border">
        {/* CARD HEADING */}
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px]">
          Server Activity
        </CardTitle>
      </CardHeader>

      {/* SERVER ACTIVITY LINE CHART */}
      <CardContent className="h-[700px] py-8 pb-12">
        <LineChart04
          chartId="ServerActivityLineChart"
          data={ServerActivityData}
        />
      </CardContent>
    </Card>
  );
};

export default ServerActivityCard;
