import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EChartsLineChart01 } from "@/components/charts/echarts-line-charts";

const UsersAvgInactivityCard = () => {
  return (
    <Card
      id="UsersAvgInactivitySection"
      className="!standard-card-styling col-span-1"
    >
      <CardHeader className="py-6 border-b border-border">
        {/* CARD HEADING */}
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px]">
          Avg. Inactivity by User
        </CardTitle>
      </CardHeader>

      {/* AVERAGE INACTIVITY BY USERS LINE CHART */}
      <CardContent className="py-4 h-[500px] max-md:px-2">
        <EChartsLineChart01
          chartId="UsersAvgInactivityLineChart"
          chartData={[
            { date: "2023-12-01", value: 150 },
            { date: "2023-12-02", value: 230 },
            { date: "2023-12-03", value: 224 },
            { date: "2023-12-04", value: 218 },
            { date: "2023-12-05", value: 135 },
            { date: "2023-12-06", value: 147 },
            { date: "2023-12-07", value: 260 },
          ]}
        />
      </CardContent>
    </Card>
  );
};

export default UsersAvgInactivityCard;
