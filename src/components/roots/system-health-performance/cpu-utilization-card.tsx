import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import GaugeChart from "@/components/partials/gauge-chart";

const CpuUtilizationCard = () => {
  return (
    <Card
      id="CpuUtilizationSection"
      className="w-full h-full !rounded-[0.5rem] !card-box-shadow col-span-1"
    >
      <CardHeader className="py-6 border-b border-border">
        {/* CARD HEADING */}
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px]">
          CPU Utilization (%)
        </CardTitle>
      </CardHeader>

      {/* CPU UTILIZATION GAUGE CHART */}
      <CardContent className="h-[400px]">
        <GaugeChart
          chartId="CpuUtilizationGaugeChart"
          value={75}
          axisRange0Color="#FF6F61"
          axisRange1Color="#dbdbdb"
        />
      </CardContent>
    </Card>
  );
};

export default CpuUtilizationCard;
