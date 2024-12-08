import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CpuUtilizationCard = () => {
  return (
    <Card
      id="CpuUtilizationSection"
      className="!standard-card-styling col-span-1"
    >
      <CardHeader className="py-6 border-b border-border">
        {/* CARD HEADING */}
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px]">
          CPU Utilization (%)
        </CardTitle>
      </CardHeader>

      {/* CPU UTILIZATION GAUGE CHART */}
      <CardContent className="h-[500px]"></CardContent>
    </Card>
  );
};

export default CpuUtilizationCard;
