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
      <CardContent className="lg:h-[500px] w-full lg:w-[80%] max-lg:py-12 flex-center mx-auto">
        <ChartJsLineChart01
          chartData={[
            {
              name: "Standard",
              value: "14:00",
              color: "#434edd",
              data: [40, 50, 45, 55, 45, 50, 40, 55, 45],
            },
            {
              name: "Secure",
              value: "09:40",
              color: "#2b7d6b",
              data: [40, 50, 45, 55, 45, 50, 40, 55, 45],
            },
            {
              name: "Wallet",
              value: "14:30",
              color: "#FF9800",
              data: [40, 50, 45, 55, 45, 50, 40, 55, 45],
            },
          ]}
        />
      </CardContent>
    </Card>
  );
};

export default PeakTimesCard;
