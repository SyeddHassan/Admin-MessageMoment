import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DoughnutChart01 } from "@/components/partials/doughnut-charts";

const ReturnedVisitorsCard = () => {
  return (
    <Card
      id="ReturnedVisitorsSection"
      className="w-full h-full !rounded-[0.5rem] !card-box-shadow col-span-1"
    >
      <CardHeader className="py-6 border-b border-border">
        {/* CARD HEADING */}
        <CardTitle className="lg:text-[1rem] lg:leading-[18px] text-[14px] leading-[16px] font-inter text-heading-color font-medium">
          Returned Visitors
        </CardTitle>
      </CardHeader>

      {/* RETURNED VISITORS DOUGHNUT CHART */}
      <CardContent className="pb-12 h-full flex-center mx-auto">
        <DoughnutChart01 label="Returning Visitors" percentage={20} />
      </CardContent>
    </Card>
  );
};

export default ReturnedVisitorsCard;
