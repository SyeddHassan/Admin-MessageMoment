import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DoughnutChart02 } from "@/components/partials/doughnut-charts";

const SessionTypeCard = () => {
  return (
    <Card
      id="SessionTypeSection"
      className="w-full h-full !rounded-[0.5rem] !card-box-shadow col-span-1"
    >
      <CardHeader className="py-6 border-b border-border">
        {/* CARD HEADING */}
        <CardTitle className="lg:text-[1rem] lg:leading-[18px] text-[14px] leading-[16px] font-inter text-heading-color font-medium">
          Session Type
        </CardTitle>
      </CardHeader>

      {/* SESSION TYPE DOUGHNUT CHART */}
      <CardContent className="lg:pb-12 pb-[5rem] h-full flex-center mx-auto">
        <DoughnutChart02
          chartData={[
            { label: "Standard", percentage: 30, color: "#5ebce1" },
            { label: "Secure", percentage: 30, color: "#3a56af" },
            { label: "Wallet", percentage: 40, color: "#AB40E8" },
          ]}
        />
      </CardContent>
    </Card>
  );
};

export default SessionTypeCard;
