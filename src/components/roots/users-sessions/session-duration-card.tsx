import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ReChartsLineChart01 } from "@/components/charts/recharts-line-charts";

const SessionDurationCard = () => {
  return (
    <Card
      id="SessionDurationSection"
      className="!standard-card-styling lg:col-span-2 col-span-1"
    >
      <CardHeader className="py-6 border-b border-border">
        {/* CARD HEADING */}
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px]">
          Session Duration
        </CardTitle>
      </CardHeader>

      {/* SESSION DURATION LINE CHART */}
      <CardContent className="h-[90%] flex flex-col justify-center">
        <div className="h-[400px] flex relative">
          <div className="absolute top-1/2 left-[-3rem] transform -rotate-90 -translate-y-1/2">
            <span className="tracking-tight text-[14px] leading-[14px] font-inter text-heading-color font-medium">
              Duration (minutes)
            </span>
          </div>

          <div className="flex-grow min-w-0">
            <ReChartsLineChart01
              chartData={[
                { date: "02 Jan", high: 29, low: 12 },
                { date: "03 Jan", high: 29, low: 11 },
                { date: "04 Jan", high: 30, low: 11 },
                { date: "05 Jan", high: 33, low: 14 },
                { date: "06 Jan", high: 33, low: 14 },
                { date: "07 Jan", high: 35, low: 18 },
                { date: "08 Jan", high: 34, low: 17 },
                { date: "09 Jan", high: 32, low: 17 },
                { date: "10 Jan", high: 32, low: 15 },
                { date: "11 Jan", high: 32, low: 14 },
                { date: "12 Jan", high: 32, low: 13 },
                { date: "13 Jan", high: 33, low: 13 },
              ]}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SessionDurationCard;
