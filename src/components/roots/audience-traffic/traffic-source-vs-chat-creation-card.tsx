import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TrafficSourceVsChatCreationCard = () => {
  return (
    <Card
      id="TrafficSourceVsChatCreationSection"
      className="!standard-card-styling col-span-1"
    >
      <CardHeader className="py-6 border-b border-border">
        {/* CARD HEADING */}
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px]">
          Traffic Sources vs Chat Creation
        </CardTitle>
      </CardHeader>

      {/* TRAFFIC SOURCE VS CHAT CREATION BAR CHART */}
      <CardContent className="py-4 mx-auto lg:h-[500px] lg:flex-center max-lg:py-12"></CardContent>
    </Card>
  );
};

export default TrafficSourceVsChatCreationCard;
