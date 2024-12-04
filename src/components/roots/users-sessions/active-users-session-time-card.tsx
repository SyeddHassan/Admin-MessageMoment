import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EChartsBarChart01 } from "@/components/charts/echarts-bar-charts";

const ActiveUsersSessionTimeCard = () => {
  return (
    <Card
      id="ActiveUsersSessionTimeSection"
      className="!standard-card-styling lg:col-span-2 col-span-1"
    >
      <CardHeader className="py-6 border-b border-border">
        {/* CARD HEADING */}
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px]">
          Session time by Active Users
        </CardTitle>
      </CardHeader>

      {/* ACTIVE USERS AND SESSIONS BAR CHART */}
      <CardContent className="h-[650px] pt-4 pb-12">
        <EChartsBarChart01 chartData={[10, 52, 200, 334, 390, 330, 220]} />
      </CardContent>
    </Card>
  );
};

export default ActiveUsersSessionTimeCard;
