"use client";

import React, { useState } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FilterButtons01 } from "@/components/partials/filter-buttons";
import RealTimeMapSessionsStats from "./real-time-map-sessions-stats";
import RealTimeMapUsersStats from "./real-time-map-users-stats";
import { Country } from "@/interfaces/pages/dashboard-page-components-interface";

const RealTimeMonitoringMapVersionCard = () => {
  const [selectedTab, setSelectedTab] = useState("sessions");
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
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
      <CardContent className="py-5 lg:px-[1.5rem] px-1 lg:h-[550px] flex gap-6 md:flex-row flex-col">
        {/* REAL TIME MAP */}
        <div className="lg:w-[66.66666667%] md:w-[55%] w-full h-full bg-black">
          {selectedTab === "sessions" ? <></> : <></>}
        </div>

        {/* REAL TIME MAP STATS */}
        <div className="lg:w-[calc(100%-66.66666667%)] md:w-[calc(100%-55%)] w-full lg:h-full h-[400px]">
          {selectedTab === "sessions" ? (
            <RealTimeMapSessionsStats />
          ) : (
            <RealTimeMapUsersStats
              selectedCountry={selectedCountry}
              setSelectedCountry={setSelectedCountry}
            />
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default RealTimeMonitoringMapVersionCard;
