"use client";

import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
      <CardContent className="py-8 h-[500px] max-md:px-2"></CardContent>
    </Card>
  );
};

export default CpuUsageCard;
