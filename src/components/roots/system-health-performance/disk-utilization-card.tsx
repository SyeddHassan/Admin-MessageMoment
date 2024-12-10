import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartJsGaugeChart } from "@/components/charts/chartjs-gauge-charts";

const DiskUtilizationCard = () => {
  return (
    <Card
      id="DiskUtilizationSection"
      className="!standard-card-styling col-span-1"
    >
      <CardHeader className="py-6 border-b border-border">
        {/* CARD HEADING */}
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px]">
          Disk Utilization (%)
        </CardTitle>
      </CardHeader>

      {/* DISK UTILIZATION GAUGE CHART */}
      <CardContent className="md:h-[500px] h-full max-md:pb-[5rem] flex-center mx-auto">
        <ChartJsGaugeChart percentage={80} />
      </CardContent>
    </Card>
  );
};

export default DiskUtilizationCard;
