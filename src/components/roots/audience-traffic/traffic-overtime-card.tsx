import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TrafficOvertimeCard = () => {
  return (
    <Card
      id="TrafficOvertimeSection"
      className="w-full h-full !rounded-[0.5rem] !card-box-shadow lg:col-span-3 col-span-1"
    >
      <CardHeader className="py-6 border-b border-border">
        {/* CARD HEADING */}
        <CardTitle className="lg:text-[1rem] lg:leading-[18px] text-[14px] leading-[16px] font-inter text-heading-color font-medium">
          Traffic Over Time
        </CardTitle>
      </CardHeader>

      {/* TRAFFIC OVERTIME DOUGHNUT CHART */}
      <CardContent className="lg:pb-12 pb-[5rem] h-full flex-center mx-auto">
        
      </CardContent>
    </Card>
  );
};

export default TrafficOvertimeCard;
