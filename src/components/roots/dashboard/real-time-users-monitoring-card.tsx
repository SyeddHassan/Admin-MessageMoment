"use client";

import React, { useState } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TableFilters from "@/components/partials/table-filters";

const RealTimeUsersMonitoringCard = () => {
  const [selectedTab, setSelectedTab] = useState("View All");
  const [filteredInput, setFilteredInput] = useState("");

  return (
    <Card
      id="RealTimeUsersMonitoringSection"
      className="w-full !rounded-[0.5rem] !card-box-shadow"
    >
      <CardHeader className="py-4 border-b border-border flex items-center flex-row gap-4">
        <CardTitle className="lg:text-[1rem] lg:leading-[18px] text-[14px] leading-[16px] font-inter text-heading-color font-medium">
          Real Time Users Monitoring
        </CardTitle>
        <p className="w-[40px] h-[25px] rounded-full bg-secondary-theme text-white flex-center text-[12px] -translate-y-[2px]">
          1240
        </p>
      </CardHeader>

      <CardContent className="py-5 flex gap-12 flex-col">
        <TableFilters
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          filteredInput={filteredInput}
          setFilteredInput={setFilteredInput}
        />

        {/* REAL TIME USERS MONITORING TABLE */}
      </CardContent>
    </Card>
  );
};

export default RealTimeUsersMonitoringCard;
