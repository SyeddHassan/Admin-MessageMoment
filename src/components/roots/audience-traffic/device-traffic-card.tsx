import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DeviceTrafficCard = () => {
  return (
    <Card
      id="DeviceTrafficSection"
      className="!standard-card-styling lg:col-span-2 col-span-1"
    >
      <CardHeader className="py-6 border-b border-border">
        {/* CARD HEADING */}
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px]">
          Traffice by Device
        </CardTitle>
      </CardHeader>

      {/* TRAFFIC BY DEVICE BAR CHART */}
      <CardContent className="py-4 mx-auto lg:h-[700px] lg:flex-center max-lg:py-12"></CardContent>
    </Card>
  );
};

export default DeviceTrafficCard;
