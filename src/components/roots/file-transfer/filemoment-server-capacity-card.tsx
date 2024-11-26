import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DoughnutChart01 } from "@/components/partials/doughnut-charts";

const FileMomentServerCapacityCard = () => {
  return (
    <Card
      id="ServerCapacitySection"
      className="w-full h-full !rounded-[0.5rem] !card-box-shadow"
    >
      <CardHeader className="py-6 border-b border-border">
        {/* CARD HEADING */}
        <CardTitle className="lg:text-[1rem] lg:leading-[18px] text-[14px] leading-[16px] font-inter text-heading-color font-medium">
          Server Capacity (FileMoment)
        </CardTitle>
      </CardHeader>

      {/* FileMoment SERVER CAPACITY DOUGHNUT CHART */}
      <CardContent className="pb-12 h-full flex-center mx-auto">
        <DoughnutChart01
          label="Server Space (Capacity)"
          percentage={30}
          backgroundColor={["#FC8452", "#f2f2f2"]}
        />
      </CardContent>
    </Card>
  );
};

export default FileMomentServerCapacityCard;
