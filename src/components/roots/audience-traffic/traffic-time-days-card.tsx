"use client";

import React, { useState } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FilterButtons04 } from "@/components/partials/filter-buttons";

const TrafficTimeDaysCard = () => {
  const [selectedTab, setSelectedTab] = useState("heatmap");

  return (
    <Card id="RealTimeMonitoringMapSection" className="!standard-card-styling">
      <CardHeader className="md:py-4 py-6 border-b border-border flex md:flex-row flex-col max-md:gap-4 items-center md:justify-between">
        {/* CARD HEADING */}
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px]">
          Traffic by Time of Day
        </CardTitle>

        {/* FILTER BUTTONS */}
        <FilterButtons04
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
      </CardHeader>

      {/* TRAFFIC BY TIME OF DAYS HEATMAP & BAR CHART */}
      <CardContent className="h-[700px] w-full py-4">
        {selectedTab === "heatmap" ? <></> : <></>}
      </CardContent>
    </Card>
  );
};

export default TrafficTimeDaysCard;
