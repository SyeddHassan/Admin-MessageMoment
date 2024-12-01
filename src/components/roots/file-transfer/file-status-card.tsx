import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DoughnutChart02 } from "@/components/partials/doughnut-charts";

const FileStatusCard = () => {
  return (
    <Card
      id="FileStatusSection"
      className="w-full h-full !rounded-[0.5rem] !card-box-shadow col-span-1"
    >
      <CardHeader className="py-6 border-b border-border">
        {/* CARD HEADING */}
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px]">
          Files Status
        </CardTitle>
      </CardHeader>

      {/* FILE STATUS DOUGHNUT CHART */}
      <CardContent className="pb-[5rem] h-full flex-center mx-auto">
        <DoughnutChart02
          chartData={[
            { label: "Successful", percentage: 30, color: "#8FD19E" }, 
            { label: "Failed", percentage: 20, color: "#F28B82" },
          ]}
        />
      </CardContent>
    </Card>
  );
};

export default FileStatusCard;
