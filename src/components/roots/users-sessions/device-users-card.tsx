import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DoughnutChart02 } from "@/components/partials/doughnut-charts";

const DeviceUsersCard = () => {
  return (
    <Card
      id="DeviceUsersSection"
      className="w-full h-full !rounded-[0.5rem] !card-box-shadow lg:col-span-1 md:col-span-2 col-span-1"
    >
      <CardHeader className="py-6 border-b border-border">
        {/* CARD HEADING */}
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px]">
          Users by Device
        </CardTitle>
      </CardHeader>

      {/* DEVICE USERS DOUGHNUT CHART */}
      <CardContent className="lg:pb-[3rem] pb-[5rem] lg:w-[85%] h-full flex-center mx-auto">
        <DoughnutChart02
          chartData={[
            { label: "Desktop", percentage: 15, color: "#FF8A65" }, 
            { label: "Mobile", percentage: 25, color: "#64B5F6" },
            { label: "Other", percentage: 60, color: "#81C784" },
          ]}
        />
      </CardContent>
    </Card>
  );
};

export default DeviceUsersCard;
