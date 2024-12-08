import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartJsDoughnutChart02 } from "@/components/charts/chartjs-doughnut-charts";

const OperatingSystemTrafficCard = () => {
  return (
    <Card
      id="OperatingSystemTrafficSection"
      className="!standard-card-styling col-span-1"
    >
      <CardHeader className="py-6 border-b border-border">
        {/* CARD HEADING */}
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px]">
          Traffice by Operation System
        </CardTitle>
      </CardHeader>

      {/* TRAFFIC BY OPERATING SYSTEM DOUGHNUT CHART */}
      <CardContent className="py-4 mx-auto lg:h-[700px] lg:flex-center max-lg:py-12">
        <ChartJsDoughnutChart02
          chartData={[
            { label: "Mac", percentage: 30, color: "#5ebce1" },
            { label: "Windows", percentage: 30, color: "#3a56af" },
            { label: "Linux", percentage: 40, color: "#ab40e8" },
          ]}
        />
      </CardContent>
    </Card>
  );
};

export default OperatingSystemTrafficCard;
