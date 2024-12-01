import React from "react";

import { UsageFrequencyData } from "@/constants/project-mode-page";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart01 } from "@/components/partials/line-charts";

const UsageFrequencyCard = () => {
  return (
    <Card
      id="UsageFrequencySection"
      className="w-full h-full !rounded-[0.5rem] !card-box-shadow lg:col-span-2 col-span-1"
    >
      <CardHeader className="py-6 border-b border-border">
        {/* CARD HEADING */}
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px]">
          Usage Frequency
        </CardTitle>
      </CardHeader>

      {/* USAGE FREQUENCY LINE CHART */}
      <CardContent className="py-8 h-[550px] max-md:px-2">
        <LineChart01 chartId="UsageFrequencyChart" data={UsageFrequencyData} />
      </CardContent>
    </Card>
  );
};

export default UsageFrequencyCard;
