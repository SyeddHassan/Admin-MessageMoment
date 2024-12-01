"use client";

import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CpuUsageCard = () => {
  return (
    <Card
      id="CpuUsageSection"
      className="w-full h-full !rounded-[0.5rem] !card-box-shadow col-span-1"
    >
      <CardHeader className="py-6 border-b border-border">
        {/* CARD HEADING */}
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px]">
          CPU Usage (%)
        </CardTitle>
      </CardHeader>

      {/* CPU USAGE LINE CHART */}
      <CardContent className="lg:pb-12 pb-[5rem] h-full flex-center mx-auto"></CardContent>
    </Card>
  );
};

export default CpuUsageCard;
