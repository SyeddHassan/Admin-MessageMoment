import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
      <CardContent className="pb-12 h-full flex-center mx-auto"></CardContent>
    </Card>
  );
};

export default FilePeakTimeCard;
