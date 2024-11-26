import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PageVisitsCard = () => {
  return (
    <Card
      id="UserAverageChatRoomSection"
      className="w-full h-full !rounded-[0.5rem] !card-box-shadow col-span-1"
    >
      <CardHeader className="py-6 border-b border-border">
        {/* CARD HEADING */}
        <CardTitle className="lg:text-[1rem] lg:leading-[18px] text-[14px] leading-[16px] font-inter text-heading-color font-medium">
          Page Visits
        </CardTitle>
      </CardHeader>

      {/* PAGE VISITS BAR GRAPH */}
      <CardContent className="pb-12 h-full flex-center mx-auto"></CardContent>
    </Card>
  );
};

export default PageVisitsCard;
