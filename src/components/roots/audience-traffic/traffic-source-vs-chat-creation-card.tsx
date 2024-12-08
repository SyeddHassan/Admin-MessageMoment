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
      <CardContent className="pt-[5rem] h-[500px] max-md:px-2"></CardContent>
    </Card>
  );
};

export default TrafficSourceVsChatCreationCard;
