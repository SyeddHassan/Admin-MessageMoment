import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DoughnutChart01 } from "@/components/partials/doughnut-charts";

const FileMomentServerCapacityCard = () => {
  return (
    <Card
      id="FileMomentServerCapacitySection"
      className="w-full h-full !rounded-[0.5rem] !card-box-shadow col-span-1"
    >
      <CardHeader className="py-6 border-b border-border">
        {/* CARD HEADING */}
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px]">
          Server Capacity (FileMoment)
        </CardTitle>
      </CardHeader>

      {/* FILEMOMENT SERVER CAPACITY DOUGHNUT CHART */}
      <CardContent className="py-[5rem] h-full flex-center mx-auto">
        <DoughnutChart01
          label="Server Space (Capacity)"
          percentage={54}
          backgroundColor={["#FC8452", "#f2f2f2"]}
        />
      </CardContent>
    </Card>
  );
};

export default FileMomentServerCapacityCard;
