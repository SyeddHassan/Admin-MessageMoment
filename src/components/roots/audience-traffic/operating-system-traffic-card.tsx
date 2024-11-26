import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DoughnutChart02 } from "@/components/partials/doughnut-charts";

const OperatingSystemTrafficCard = () => {
  return (
    <Card
      id="OperatingSystemTrafficSection"
      className="w-full h-full !rounded-[0.5rem] !card-box-shadow col-span-1"
    >
      <CardHeader className="py-6 border-b border-border">
        {/* CARD HEADING */}
        <CardTitle className="lg:text-[1rem] lg:leading-[18px] text-[14px] leading-[16px] font-inter text-heading-color font-medium">
          Operating System Traffic
        </CardTitle>
      </CardHeader>

      {/* OPERATING SYSTEM TRAFFIC DOUGHNUT CHART */}
      <CardContent className="lg:pb-16 pb-[5rem] h-full lg:w-full md:w-[60%] w-full flex-center mx-auto">
        <DoughnutChart02
          chartData={[
            { label: "Mac", percentage: 18, color: "#5470C6" },
            { label: "Windows", percentage: 42, color: "#91CC75" },
            { label: "Linux", percentage: 22, color: "#EE6666" },
            { label: "Other", percentage: 12, color: "#FAC858" },
          ]}
        />
      </CardContent>
    </Card>
  );
};

export default OperatingSystemTrafficCard;
