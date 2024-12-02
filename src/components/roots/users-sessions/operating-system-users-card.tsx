import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DoughnutChart02 } from "@/components/partials/doughnut-charts";

const OperatingSystemUsersCard = () => {
  return (
    <Card
      id="OperatingSystemSection"
      className="w-full h-full !rounded-[0.5rem] !card-box-shadow lg:col-span-1 md:col-span-2 col-span-1 lg:order-3 md:order-2 order-3"
    >
      <CardHeader className="py-6 border-b border-border">
        {/* CARD HEADING */}
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px]">
          Users by Operation System
        </CardTitle>
      </CardHeader>

      {/* OPERATING SYSTEM USERS DOUGHNUT CHART */}
      <CardContent className="pb-[3rem] lg:w-[85%] h-full flex-center mx-auto">
        <DoughnutChart02
          chartData={[
            { label: "Mac", percentage: 30, color: "#F06292" },
            { label: "Windows", percentage: 40, color: "#4DB6AC" },
            { label: "Linux", percentage: 22, color: "#CE93D8" },
            { label: "Other", percentage: 8, color: "#FFD54F" },
          ]}
        />
      </CardContent>
    </Card>
  );
};

export default OperatingSystemUsersCard;
