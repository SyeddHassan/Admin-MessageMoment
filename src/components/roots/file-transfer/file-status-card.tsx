import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DoughnutChart02 } from "@/components/partials/doughnut-charts";
const FileStatusCard = () => {
  return (
    <Card
      id="FileStatusSection"
      className="w-full h-full !rounded-[0.5rem] !card-box-shadow lg:col-span-1 md:col-span-2 col-span-1 lg:order-2 md:order-1 order-2"
    >
      <CardHeader className="py-6 border-b border-border">
        {/* CARD HEADING */}
        <CardTitle className="lg:text-[1rem] lg:leading-[18px] text-[14px] leading-[16px] font-inter text-heading-color font-medium">
          File Status
        </CardTitle>
      </CardHeader>

      {/* FILE STATUS DOUGHNUT CHART */}
      <CardContent className="lg:pb-12 pb-[5rem] h-full flex-center mx-auto">
        <DoughnutChart02
          chartData={[
            { label: "Successful", percentage: 30, color: "#5ebce1" },
            { label: "Failed", percentage: 70, color: "#3a56af" },
          ]}
        />
      </CardContent>
    </Card>
  );
};

export default FileStatusCard;
