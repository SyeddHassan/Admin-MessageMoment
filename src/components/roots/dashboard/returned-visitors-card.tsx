import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartJsDoughnutChart01 } from "@/components/charts/chartjs-doughnut-charts";

const ReturnedVisitorsCard = () => {
  return (
    <Card
      id="ReturnedVisitorsSection"
      className="!standard-card-styling col-span-1"
    >
      <CardHeader className="py-6 border-b border-border">
        {/* CARD HEADING */}
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px]">
          Returned Visitors
        </CardTitle>
      </CardHeader>

      {/* RETURNED VISITORS DOUGHNUT CHART */}
      <CardContent className="h-[500px] flex-center mx-auto">
        <ChartJsDoughnutChart01
          backgroundColor={["#f04c3d", "#f2f2f2"]}
          label="Returning Visitors"
          labelColor="text-[#f04c3d]"
          percentage={82}
        />
      </CardContent>
    </Card>
  );
};

export default ReturnedVisitorsCard;
