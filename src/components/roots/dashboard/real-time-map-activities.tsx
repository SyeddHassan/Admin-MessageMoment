"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

import { RealTimeMapActivitiesProps } from "@/interfaces/dashboard-page-components-interfaces";

import { RealTimeMapActivityData } from "@/constants/dashboard-page-data";

import { Skeleton } from "@/components/ui/skeleton";
import { Progress } from "@/components/ui/progress";
const RealTimeMap = dynamic(() => import("../../map/real-time-map"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex-center text-secondary-theme">
      <MapPinned size={220} />
    </div>
  ),
});

import { MapPinned } from "lucide-react";

const RealTimeMapActivities = ({ selectedTab }: RealTimeMapActivitiesProps) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timeout);
  }, []);

  const totalSessions = RealTimeMapActivityData.reduce(
    (sum, data) => sum + data.session,
    0
  );

  return (
    <>
      {/* REAL TIME MAP */}
      <div className="lg:w-[66.66666667%] md:w-[55%] w-full h-full">
        <RealTimeMap
          selectedTab={selectedTab}
          MapData={RealTimeMapActivityData}
        />
      </div>

      {/* REAL TIME MAP STATS */}
      <div className="lg:w-[calc(100%-66.66666667%)] md:w-[calc(100%-55%)] w-full md:h-full h-[400px] flex flex-col gap-4 py-4 overflow-y-auto">
        {selectedTab === "sessions" ? (
          <>
            {loading
              ? RealTimeMapActivityData.map((_, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 px-8 animate-pulse"
                  >
                    <Skeleton className="!w-[25px] !h-[25px] rounded-full" />
                    <Skeleton className="w-[calc(100%-40px)] h-[20px]" />
                  </div>
                ))
              : RealTimeMapActivityData.map((data, index) => {
                  const percentage = (
                    (data.session / totalSessions) *
                    100
                  ).toFixed(2);

                  return (
                    <div key={index} className="flex items-center gap-4 px-8">
                      <span
                        className={`fi fi-${data.countryCode.toLowerCase()} !w-[25px] !h-[25px] rounded-full flag-shadow !bg-cover bg-[50%_50%]`}
                      />
                      <div className="w-[calc(100%-40px)]">
                        <p className="font-inter text-heading-color text-[0.875rem] font-medium">
                          {data.countryName}
                        </p>
                        <div className="flex items-center gap-3">
                          <Progress
                            value={parseFloat(percentage)}
                            className="h-[7px] bg-[#e9ecef]"
                            indicatorClassName={`bg-[#4caf50] rounded-[50rem]`}
                          />
                          <p className="text-[0.75rem]">{percentage}%</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
          </>
        ) : null}
      </div>
    </>
  );
};

export default RealTimeMapActivities;
