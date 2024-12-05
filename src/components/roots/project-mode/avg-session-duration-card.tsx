import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EChartsLineChart01 } from "@/components/charts/echarts-line-charts";

const AvgSessionDurationCard = () => {
  return (
    <Card
      id="AvgSessionDurationSection"
      className="!standard-card-styling lg:col-span-2 md:col-span-4 col-span-1"
    >
      <CardHeader className="py-6 border-b border-border">
        {/* CARD HEADING */}
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px]">
          Average Session Duration
        </CardTitle>
      </CardHeader>

      {/* AVERAGE SESSION DURATION LINE CHART */}
      <CardContent className="py-8 h-[550px] max-md:px-2">
        <EChartsLineChart01
          chartId="AvgSessionDurationChart"
          chartData={[
            { date: "2024-01-01", value: 150 },
            { date: "2024-02-01", value: 60 },
            { date: "2024-03-01", value: 30 },
            { date: "2024-04-01", value: 25 },
            { date: "2024-05-01", value: 35 },
            { date: "2024-06-01", value: 20 },
          ]}
        />
      </CardContent>
    </Card>
  );
};

export default AvgSessionDurationCard;
