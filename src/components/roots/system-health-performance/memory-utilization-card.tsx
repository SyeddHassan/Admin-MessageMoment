import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MemoryUtilizationCard = () => {
  return (
    <Card
      id="MemoryUtilizationSection"
      className="!standard-card-styling col-span-1"
    >
      <CardHeader className="py-6 border-b border-border">
        {/* CARD HEADING */}
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px]">
          Memory Utilization (%)
        </CardTitle>
      </CardHeader>

      {/* MEMORY UTILIZATION GAUGE CHART */}
      <CardContent className="h-[500px]"></CardContent>
    </Card>
  );
};

export default MemoryUtilizationCard;
