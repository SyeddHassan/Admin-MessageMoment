import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartJsLineChart01 } from "@/components/charts/chartjs-line-charts";

const PeakTimesCard = () => {
  return (
    <Card id="PeakTimesSection" className="standard-card-styling col-span-1">
      <CardHeader className="py-6 border-b border-border">
        {/* CARD HEADING */}
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px]">
          Peak Times
        </CardTitle>
      </CardHeader>

      {/* PEAK TIMES LINE CHART */}
      <CardContent className="pb-[5rem] h-full flex-center mx-auto">
        <ChartJsLineChart01
          chartData={[
            {
              name: "Standard",
              value: "14:00",
              color: "#FFC107",
              data: [40, 50, 45, 55, 45, 50, 40, 55, 45],
            },
            {
              name: "Secure",
              value: "09:40",
              color: "#9C27B0",
              data: [40, 50, 45, 55, 45, 50, 40, 55, 45],
            },
            {
              name: "Wallet",
              value: "14:30",
              color: "#00BCD4",
              data: [40, 50, 45, 55, 45, 50, 40, 55, 45],
            },
          ]}
        />
      </CardContent>
    </Card>
  );
};

export default PeakTimesCard;
