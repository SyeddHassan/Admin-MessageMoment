import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DoughnutChart02 } from "../../charts/chartjs-doughnut-charts";

const SessionTypeCard = () => {
  return (
    <Card id="FileStatusSection" className="!standard-card-styling col-span-1">
      <CardHeader className="lg:py-[30px] py-6 border-b border-border">
        {/* CARD HEADING */}
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px]">
          Files Status
        </CardTitle>
      </CardHeader>

      {/* FILE STATUS DOUGHNUT CHART */}
      <CardContent className="pb-[5rem] h-full md:w-[80%] flex-center mx-auto">
        <DoughnutChart02
          chartData={[
            { label: "Standard", percentage: 30, color: "#00C49A" },
            { label: "Secure", percentage: 20, color: "#FF6B6B" },
            { label: "Wallet", percentage: 50, color: "#4C9AFF" },
          ]}
        />
      </CardContent>
    </Card>
  );
};

export default SessionTypeCard;
