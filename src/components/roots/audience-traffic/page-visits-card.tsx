import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PageVisitsCard = () => {
  return (
    <Card id="PageVisitsSection" className="!standard-card-styling col-span-1">
      <CardHeader className="py-6 border-b border-border">
        {/* CARD HEADING */}
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px]">
          Page Visits
        </CardTitle>
      </CardHeader>

      {/* PAGE VISITS BAR CHART */}
      <CardContent className="pt-[5rem] h-[500px] max-md:px-2"></CardContent>
    </Card>
  );
};

export default PageVisitsCard;
