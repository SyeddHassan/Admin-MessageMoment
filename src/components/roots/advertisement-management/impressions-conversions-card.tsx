"use client";

import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ImpressionsConversionsCard = () => {
  return (
    <Card
      id="ImpressionsConversionsSection"
      className="!standard-card-styling lg:col-span-2 col-span-1"
    >
      <CardHeader className="py-6 border-b border-border">
        {/* CARD HEADING */}
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px]">
          Impressions/Conversions
        </CardTitle>
      </CardHeader>

      {/* IMPRESSION CONVERSION BAR CHART */}
      <CardContent className="pt-[5rem] h-[650px] max-md:px-2"></CardContent>
    </Card>
  );
};

export default ImpressionsConversionsCard;
