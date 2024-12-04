import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartJsDoughnutChart02 } from "@/components/charts/chartjs-doughnut-charts";

const OperatingSystemUsersCard = () => {
  return (
    <Card
      id="OperatingSystemSection"
      className="!standard-card-styling lg:col-span-1 md:col-span-2 col-span-1 lg:order-3 md:order-2 order-3"
    >
      <CardHeader className="py-6 border-b border-border">
        {/* CARD HEADING */}
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px]">
          Users by Operation System
        </CardTitle>
      </CardHeader>

      {/* OPERATING SYSTEM USERS DOUGHNUT CHART */}
      <CardContent className="py-4 mx-auto lg:h-[500px] lg:flex-center max-lg:py-12">
        <ChartJsDoughnutChart02
          chartData={[
            { label: "Mac", percentage: 30, color: "#F06292" },
            { label: "Windows", percentage: 40, color: "#4DB6AC" },
            { label: "Linux", percentage: 22, color: "#CE93D8" },
          ]}
        />
      </CardContent>
    </Card>
  );
};

export default OperatingSystemUsersCard;
