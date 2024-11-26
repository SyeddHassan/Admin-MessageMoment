import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DeviceTrafficCard = () => {
  return (
    <Card
      id="DeviceTrafficSection"
      className="w-full h-full !rounded-[0.5rem] !card-box-shadow lg:col-span-3 col-span-1"
    >
      <CardHeader className="py-6 border-b border-border">
        {/* CARD HEADING */}
        <CardTitle className="lg:text-[1rem] lg:leading-[18px] text-[14px] leading-[16px] font-inter text-heading-color font-medium">
          Operating System Traffic
        </CardTitle>
      </CardHeader>

      {/* DEVICE TRAFFIC DOUGHNUT CHART */}
      <CardContent className="lg:pb-16 pb-[5rem] h-full lg:w-full md:w-[60%] w-full flex-center mx-auto">
        
      </CardContent>
    </Card>
  );
};

export default DeviceTrafficCard;
