"use client";

import React, { useState } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FilterButtons03 } from "@/components/partials/filter-buttons";
import RealTimeFileTransferTable from "@/components/tables/real-time-file-transfer-table";

const RealTimeFileTransferCard = () => {
  const [selectedTab, setSelectedTab] = useState("View All");
  const [filteredInput, setFilteredInput] = useState("");

  return (
    <Card id="RealTimeFileTransferSection" className="!standard-card-styling">
      <CardHeader className="py-6 border-b border-border">
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px]">
          Real Time File Transfer Status
        </CardTitle>
      </CardHeader>

      <CardContent className="py-5 flex gap-12 flex-col">
        <FilterButtons03
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          filteredInput={filteredInput}
          setFilteredInput={setFilteredInput}
        />

        {/* REAL TIME FILE TRANSFER STATUS TABLE */}
        <RealTimeFileTransferTable
          filteredInput={filteredInput}
          selectedTab={selectedTab}
        />
      </CardContent>
    </Card>
  );
};

export default RealTimeFileTransferCard;
