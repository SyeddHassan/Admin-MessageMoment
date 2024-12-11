import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const RegionAdCampaignsCard = () => {
  return (
    <Card
      id="RegionAdCampaignsSection"
      className="!standard-card-styling lg:col-span-1 md:col-span-4 col-span-1"
    >
      <CardHeader className="py-6 border-b border-border">
        {/* CARD HEADING */}
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px]">
          Ads Campaign by Region
        </CardTitle>
      </CardHeader>

      {/* REGION AD CAMPAIGNS BAR CHART */}
      <CardContent className="py-4 mx-auto lg:h-[500px] lg:flex-center max-lg:py-12">

      </CardContent>
    </Card>
  );
};

export default RegionAdCampaignsCard;
