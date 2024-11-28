"use client";

import { useState } from "react";
import { Line } from "react-chartjs-2";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";
import {
  getDataForTimeRange,
  timeRanges,
} from "@/constants/system-health-page-data";
import { memoryGraphOptions } from "@/interfaces/system-performance-interface";

const MemoryMonitoringGraph = () => {
  const [timeRange, setTimeRange] = useState<keyof typeof timeRanges>("1h");
  const data = getDataForTimeRange(timeRange);
  return (
    <Card className="w-full !rounded-[0.5rem] !card-box-shadow col-span-1 md:col-span-2 lg:col-span-6">
      <CardHeader className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 pb-8 py-5 border-b border-border w-full">
        <CardTitle className="text-[1rem] font-inter text-heading-color font-medium">
          Memory Usage
        </CardTitle>
        <div className="flex max-sm:w-full font-inter font-medium">
          {/* Leftmost Button */}
          <Button
            onClick={() => setTimeRange("15m")}
            className={`h-[40px] sm:w-[135px] w-full rounded-[6px_0_0_6px] border lg:text-[16px] md:text-[14px] text-[12px] card-filter-button-box-shadow ${
              timeRange === "15m"
                ? "bg-selected-color text-white"
                : "bg-white hover:bg-hovered-color text-heading-color"
            }`}
          >
            <Clock className="w-4 h-4 mr-1" />
            15m
          </Button>

          {/* Middle Button */}
          <Button
            onClick={() => setTimeRange("30m")}
            className={`h-[40px] sm:w-[135px] w-full rounded-none border lg:text-[16px] md:text-[14px] text-[12px] card-filter-button-box-shadow ${
              timeRange === "30m"
                ? "bg-selected-color text-white"
                : "bg-white hover:bg-hovered-color text-heading-color"
            }`}
          >
            <Clock className="w-4 h-4 mr-1" />
            30m
          </Button>

          {/* Rightmost Button */}
          <Button
            onClick={() => setTimeRange("1h")}
            className={`h-[40px] sm:w-[135px] w-full rounded-[0_6px_6px_0] border lg:text-[16px] md:text-[14px] text-[12px] card-filter-button-box-shadow ${
              timeRange === "1h"
                ? "bg-selected-color text-white"
                : "bg-white hover:bg-hovered-color text-heading-color"
            }`}
          >
            <Clock className="w-4 h-4 mr-1" />
            1h
          </Button>
        </div>
      </CardHeader>

      <CardContent>
        <div className="relative h-[500px] transition-all duration-300 ease-in-out mt-10">
          <Line options={memoryGraphOptions} data={data} />
        </div>
      </CardContent>
    </Card>
  );
};

export default MemoryMonitoringGraph;
