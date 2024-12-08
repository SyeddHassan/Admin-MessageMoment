import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartJsDoughnutChart02 } from "@/components/charts/chartjs-doughnut-charts";

const FileStatusCard = () => { 
  return (
    <Card
      id="FileStatusSection"
      className="!standard-card-styling col-span-1 order-2"
    >
      <CardHeader className="py-6 border-b border-border">
        {/* CARD HEADING */}
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px]">
          Files Status
        </CardTitle>
      </CardHeader>

      {/* FILE STATUS DOUGHNUT CHART */}
      <CardContent className="py-4 mx-auto lg:h-[500px] lg:flex-center max-lg:py-12">
        <ChartJsDoughnutChart02
          chartData={[
            { label: "Successful", percentage: 30, color: "#3a56af" },
            { label: "Failed", percentage: 20, color: "#ab40e8" },
          ]}
        />
      </CardContent>
    </Card>
  );
};

export default FileStatusCard;
