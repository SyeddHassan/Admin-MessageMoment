"use client";

import React, { useState } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TableFilters from "@/components/partials/table-filters";
import RealTimeFileTransferStatusTable from "./real-time-file-transfer-status-table";

const RealTimeFileTransferStatusCard = () => {
  const [selectedTab, setSelectedTab] = useState("View All");
  const [filteredInput, setFilteredInput] = useState("");

  return (
    <Card
      id="RealTimeFileTransferStatusSection"
      className="w-full !rounded-[0.5rem] !card-box-shadow"
    >
      <CardHeader className="py-6 border-b border-border">
        <CardTitle className="lg:text-[1rem] lg:leading-[18px] text-[14px] leading-[16px] font-inter text-heading-color font-medium">
          Real Time File Transfer Status
        </CardTitle>
      </CardHeader>

      <CardContent className="py-5 flex gap-12 flex-col">
        <TableFilters
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          filteredInput={filteredInput}
          setFilteredInput={setFilteredInput}
        />

        {/* REAL TIME FILE TRANSFER STATUS TABLE */}
        <RealTimeFileTransferStatusTable
          filteredInput={filteredInput}
          selectedTab={selectedTab}
        />
      </CardContent>
    </Card>
  );
};

export default RealTimeFileTransferStatusCard;
