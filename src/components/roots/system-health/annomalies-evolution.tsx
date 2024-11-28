"use client";
import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart02 } from "@/components/partials/line-charts";
import { anomalyData } from "@/constants/system-health-page-data";

const AnnomaliesEvaluationChart = () => {
  return (
    <>
      <Card
        id="TrafficOvertimeSection"
        className="w-full !rounded-[0.5rem] !card-box-shadow col-span-1 md:col-span-2 lg:col-span-6"
      >
        <CardHeader className="py-6 border-b border-border">
          {/* CARD HEADING */}
          <CardTitle className="lg:text-[1rem] lg:leading-[18px] text-[14px] leading-[16px] font-inter text-heading-color font-medium">
            Annomalies Evolution
          </CardTitle>
        </CardHeader>

        <CardContent className="mt-10">
          <LineChart02 data={anomalyData} />
        </CardContent>
      </Card>
    </>
  );
};

export default AnnomaliesEvaluationChart;
