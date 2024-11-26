import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart01 } from "@/components/partials/line-charts";

const FilePeakTimeCard = () => {
  return (
    <Card
      id="FilePeakTimeSection"
      className="w-full h-full !rounded-[0.5rem] !card-box-shadow lg:col-span-1 md:col-span-2 col-span-1 lg:order-3 md:order-2 order-3"
    >
      <CardHeader className="py-6 border-b border-border">
        {/* CARD HEADING */}
        <CardTitle className="lg:text-[1rem] lg:leading-[18px] text-[14px] leading-[16px] font-inter text-heading-color font-medium">
          Files Peak Time
        </CardTitle>
      </CardHeader>

      {/* FILE PEAK TIME LINE CHART */}
      <CardContent className="lg:pb-12 pb-[5rem] h-full flex-center mx-auto">
        <LineChart01
          chartData={[
            {
              name: "Standard",
              value: "14:00",
              color: "#73C0DE",
              data: [40, 50, 45, 55, 45, 50, 40, 55, 45],
            },
            {
              name: "Secure",
              value: "09:40",
              color: "#EE6666",
              data: [40, 50, 45, 55, 45, 50, 40, 55, 45],
            },
            {
              name: "Wallet",
              value: "14:30",
              color: "#91CC75",
              data: [40, 50, 45, 55, 45, 50, 40, 55, 45],
            },
          ]}
        />
      </CardContent>
    </Card>
  );
};

export default FilePeakTimeCard;
