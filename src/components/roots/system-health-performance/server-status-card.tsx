import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartJsDoughnutChart03 } from "@/components/charts/chartjs-doughnut-charts";

const ServerStatusCard = () => {
  return (
    <Card
      id="ServerStatusSection"
      className="!standard-card-styling col-span-1"
    >
      <CardHeader className="py-6 border-b border-border">
        {/* CARD HEADING */}
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px]">
          Server Status
        </CardTitle>
      </CardHeader>

      {/* SERVER STATUS DOUGHNUT CHART */}
      <CardContent className="md:h-[500px] h-full max-md:pb-[5rem] flex-center mx-auto">
        <ChartJsDoughnutChart03 percentage={85} />
      </CardContent>
    </Card>
  );
};

export default ServerStatusCard;
