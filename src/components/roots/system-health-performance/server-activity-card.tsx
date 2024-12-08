"use client";

import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ServerActivityCard = () => {
  return (
    <Card
      id="ServerActivitySection"
      className="!standard-card-styling"
    >
      <CardHeader className="py-6 border-b border-border">
        {/* CARD HEADING */}
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px]">
          Server Activity
        </CardTitle>
      </CardHeader>

      {/* SERVER ACTIVITY LINE CHART */}
      <CardContent className="h-[700px] py-8 pb-12"></CardContent>
    </Card>
  );
};

export default ServerActivityCard;
