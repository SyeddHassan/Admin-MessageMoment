import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ReChartsAreaChart01 } from "@/components/charts/recharts-area-charts";

const PeakUsageTimesCard = () => {
  return (
    <Card
      id="PeakUasgeTimesSection"
      className="!standard-card-styling lg:col-span-2 col-span-1"
    >
      <CardHeader className="py-6 border-b border-border">
        {/* CARD HEADING */}
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px]">
          Peak Usage Times
        </CardTitle>
      </CardHeader>

      {/* PEAK USAGE TIMES AREA CHART */}
      <CardContent className="h-[700px] flex flex-col justify-center">
        <ReChartsAreaChart01
          chartData={[
            { date: "12 June 2024", standard: 4, secure: 8.5, wallet: 8 },
            { date: "13 June 2024", standard: 3.5, secure: 6, wallet: 9 },
            { date: "14 June 2024", standard: 4, secure: 7, wallet: 7 },
            { date: "15 June 2024", standard: 2, secure: 9, wallet: 12 },
            { date: "16 June 2024", standard: 4, secure: 4, wallet: 5 },
            { date: "17 June 2024", standard: 1.5, secure: 2.5, wallet: 8 },
          ]}
        />
      </CardContent>
    </Card>
  );
};

export default PeakUsageTimesCard;
