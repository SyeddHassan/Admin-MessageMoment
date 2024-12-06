import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartJsLineChart01 } from "../../charts/chartjs-line-charts";

const ActiveRegionSessionsCard = () => {
  return (
    <Card
      id="ActiveRegionSessionsSection"
      className="!standard-card-styling col-span-1"
    >
      <CardHeader className="py-6 border-b border-border">
        {/* CARD HEADING */}
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px]">
          Most Active Regions (Sessions)
        </CardTitle>
      </CardHeader>

      {/* ACTIVE REGION SESSIONS LINE CHART */}
      <CardContent className="pb-[5rem] h-full flex-center mx-auto">
        <ChartJsLineChart01
          chartData={[
            {
              name: "Europe",
              value: "14:00",
              color: "#434edd",
              data: [40, 50, 45, 55, 45, 50, 40, 55, 45],
            },
            {
              name: "America",
              value: "09:40",
              color: "#2b7d6b",
              data: [40, 50, 45, 55, 45, 50, 40, 55, 45],
            },
            {
              name: "Asia",
              value: "14:30",
              color: "#FF9800",
              data: [40, 50, 45, 55, 45, 50, 40, 55, 45],
            },
            {
              name: "Oceania",
              value: "14:30",
              color: "#cb3d40",
              data: [40, 50, 45, 55, 45, 50, 40, 55, 45],
            },
          ]}
        />
      </CardContent>
    </Card>
  );
};

export default ActiveRegionSessionsCard;
