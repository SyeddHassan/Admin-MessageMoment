"use client";

import React, { useState } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FilterButtons03 } from "@/components/partials/filter-buttons";
import { Badge } from "@/components/ui/badge";
import RealTimeSessionMonitoringTable from "@/components/tables/real-time-session-monitoring-table";

const RealTimeMonitoringTableVersionCard = () => {
  const [selectedTab, setSelectedTab] = useState("View All");
  const [filteredInput, setFilteredInput] = useState("");

  return (
    <Card id="RealTimeMonitoringTableSection" className="!standard-card-styling">
      <CardHeader className="py-4 border-b border-border flex items-center flex-row max-md:justify-center gap-4">
        {/* CARD HEADING */}
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px]">
          Real-Time Session Monitoring
        </CardTitle>
        <Badge className="w-[40px] h-[25px] rounded-full bg-secondary-theme text-theme-heading-color flex-center text-[12px] -translate-y-[2px]">
          240
        </Badge>
      </CardHeader>

      {/* REAL TIME TABLE */}
      <CardContent className="py-5 flex gap-12 flex-col">
        {/* FILTER BUTTONS */}
        <FilterButtons03
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          filteredInput={filteredInput}
          setFilteredInput={setFilteredInput}
        />

        {/* REAL TIME SESSION MONITORING TABLE */}
        <RealTimeSessionMonitoringTable
          filteredInput={filteredInput}
          selectedTab={selectedTab}
        />
      </CardContent>
    </Card>
  );
};

export default RealTimeMonitoringTableVersionCard;
