import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EChartsLineChart01 } from "@/components/charts/echarts-line-charts";

const UsersAvgMessagesCard = () => {
  return (
    <Card
      id="UsersAvgMessagesSection"
      className="!standard-card-styling col-span-1"
    >
      <CardHeader className="py-6 border-b border-border">
        {/* CARD HEADING */}
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px]">
          Avg. Messages by User
        </CardTitle>
      </CardHeader>

      {/* AVERAGE MESSAGES BY USERS LINE CHART */}
      <CardContent className="py-4 h-[500px] max-md:px-2">
        <EChartsLineChart01
          chartId="UsersAvgMessagesLineChart"
          chartData={[
            { date: "2023-12-01", value: 250 },
            { date: "2023-12-02", value: 430 },
            { date: "2023-12-03", value: 214 },
            { date: "2023-12-04", value: 21 },
            { date: "2023-12-05", value: 195 },
            { date: "2023-12-06", value: 147 },
            { date: "2023-12-07", value: 20 },
          ]}
        />
      </CardContent>
    </Card>
  );
};

export default UsersAvgMessagesCard;
