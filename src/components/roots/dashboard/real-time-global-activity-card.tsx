"use client";

import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import RealTimeMapActivity from "./real-time-map-activity";

const RealTimeGlobalActivityCard = () => {
  const [selectedTab, setSelectedTab] = useState("sessions");

  return (
    <Card
      id="RealTimeGlobalActivitySection"
      className="w-full !rounded-[0.5rem] !card-box-shadow"
    >
      <CardHeader className="md:py-3 py-4 border-b border-border flex md:flex-row flex-col max-md:gap-2 items-center justify-between">
        {/* CARD HEADING */}
        <CardTitle className="lg:text-[1rem] lg:leading-[18px] text-[14px] leading-[16px] font-inter text-heading-color font-medium">
          Real Time Global Activity
        </CardTitle>

        {/* FILTER BUTTON */}
        <div className="flex max-sm:w-full font-inter font-medium">
          <Button
            onClick={() => setSelectedTab("sessions")}
            className={`h-[40px] sm:w-[135px] w-full rounded-[6px_0_0_6px] border lg:text-[16px] md:text-[14px] text-[12px] card-filter-button-box-shadow ${
              selectedTab === "sessions"
                ? "bg-selected-color text-white"
                : "bg-white hover:bg-hovered-color text-heading-color"
            }`}
          >
            Sessions
          </Button>
          <Button
            onClick={() => setSelectedTab("users")}
            className={`h-[40px] sm:w-[135px] w-full rounded-[0_6px_6px_0] border lg:text-[16px] md:text-[14px] text-[12px] card-filter-button-box-shadow ${
              selectedTab === "users"
                ? "bg-selected-color text-white"
                : "bg-white hover:bg-hovered-color text-heading-color"
            }`}
          >
            Users
          </Button>
        </div>
      </CardHeader>

      {/* REAL TIME GLOBAL MAP & STATS */}
      <CardContent className="py-5 lg:px-[1.5rem] px-1 lg:h-[500px] flex gap-6 md:flex-row flex-col">
        <RealTimeMapActivity selectedTab={selectedTab} />
      </CardContent>
    </Card>
  );
};

export default RealTimeGlobalActivityCard;
