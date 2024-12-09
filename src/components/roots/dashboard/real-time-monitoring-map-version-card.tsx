"use client";

import React, { useState } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FilterButtons01 } from "@/components/partials/filter-buttons";

const RealTimeMonitoringMapVersionCard = () => {
  const [selectedTab, setSelectedTab] = useState("sessions");

  return (
    <Card id="RealTimeMonitoringMapSection" className="!standard-card-styling">
      <CardHeader className="md:py-4 py-6 border-b border-border flex md:flex-row flex-col max-md:gap-4 items-center md:justify-between">
        {/* CARD HEADING */}
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px]">
          Real-Time Global Activity
        </CardTitle>

        {/* FILTER BUTTONS */}
        <FilterButtons01
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
      </CardHeader>

      {/* REAL TIME MAP ACTIVITIES & STATS */}
      <CardContent className="max-lg:py-5 max-lg:px-1 md:h-[550px] h-[700px] flex md:gap-0 gap-6 md:flex-row flex-col"></CardContent>
    </Card>
  );
};

export default RealTimeMonitoringMapVersionCard;
