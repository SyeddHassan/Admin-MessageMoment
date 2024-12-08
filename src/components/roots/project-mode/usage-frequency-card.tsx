import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const UsageFrequencyCard = () => {
  return (
    <Card
      id="UsageFrequencySection"
      className="!standard-card-styling lg:col-span-2 col-span-1"
    >
      <CardHeader className="py-6 border-b border-border">
        {/* CARD HEADING */}
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px]">
          Usage Frequency
        </CardTitle>
      </CardHeader>

      {/* USAGE FREQUENCY LINE CHART */}
      <CardContent className="py-8 h-[650px] max-md:px-2"></CardContent>
    </Card>
  );
};

export default UsageFrequencyCard;
