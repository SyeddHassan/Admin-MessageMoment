import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartJsDoughnutChart02 } from "@/components/charts/chartjs-doughnut-charts";

const NewVsReturningVisitorsCard = () => {
  return (
    <Card
      id="NewVsReturningVisitorsSection"
      className="!standard-card-styling col-span-1"
    >
      <CardHeader className="py-6 border-b border-border">
        {/* CARD HEADING */}
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px]">
          New vs Returning Visitors
        </CardTitle>
      </CardHeader>

      {/* NEW VS RETURNING VISITORS DOUGHNUT CHART */}
      <CardContent className="py-4 mx-auto lg:h-[650px] lg:flex-center max-lg:py-12">
        <ChartJsDoughnutChart02
          chartData={[
            { label: "New Visitors", percentage: 30, color: "#3a56af" },
            { label: "Returning", percentage: 70, color: "#5ebce1" },
          ]}
        />
      </CardContent>
    </Card>
  );
};

export default NewVsReturningVisitorsCard;
