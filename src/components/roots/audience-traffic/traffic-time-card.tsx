"use client";

import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TrafficTimeHeatMapTable from "./traffic-time-heat-map-table";
import { BarGraph01 } from "@/components/partials/bar-graph";

const TrafficTimeCard = () => {
  const [selectedTab, setSelectedTab] = useState("heatMap");

  return (
    <Card
      id="TrafficTimeSection"
      className="w-full h-full !rounded-[0.5rem] !card-box-shadow lg:col-span-3 col-span-1"
    >
      <CardHeader className="md:py-3 py-4 border-b border-border flex md:flex-row flex-col max-md:gap-2 items-center justify-between">
        {/* CARD HEADING */}
        <CardTitle className="lg:text-[1rem] lg:leading-[18px] text-[14px] leading-[16px] font-inter text-heading-color font-medium">
          Traffic by Time of Day
        </CardTitle>

        {/* FILTER BUTTON */}
        <div className="flex max-sm:w-full font-inter font-medium">
          <Button
            onClick={() => setSelectedTab("heatMap")}
            className={`h-[40px] sm:w-[135px] w-full rounded-[6px_0_0_6px] border lg:text-[16px] md:text-[14px] text-[12px] card-filter-button-box-shadow ${
              selectedTab === "heatMap"
                ? "bg-selected-color text-white"
                : "bg-white hover:bg-hovered-color text-heading-color"
            }`}
          >
            Heat Map
          </Button>
          <Button
            onClick={() => setSelectedTab("barChart")}
            className={`h-[40px] sm:w-[135px] w-full rounded-[0_6px_6px_0] border lg:text-[16px] md:text-[14px] text-[12px] card-filter-button-box-shadow ${
              selectedTab === "barChart"
                ? "bg-selected-color text-white"
                : "bg-white hover:bg-hovered-color text-heading-color"
            }`}
          >
            Bar Chart
          </Button>
        </div>
      </CardHeader>

      {/* TRAFFIC TIME DOUGHNUT CHART */}
      <CardContent className="h-full flex-center flex-col">
        {selectedTab === "heatMap" && <TrafficTimeHeatMapTable />}
        {selectedTab === "barChart" && (
          <BarGraph01
            chartData={[
              { hour: "12:00 am", value: 0 },
              { hour: "01:00 am", value: 1 },
              { hour: "02:00 am", value: 2 },
              { hour: "03:00 am", value: 0 },
              { hour: "04:00 am", value: 1 },
              { hour: "05:00 am", value: 2 },
              { hour: "06:00 am", value: 1 },
              { hour: "07:00 am", value: 0 },
              { hour: "08:00 am", value: 2 },
              { hour: "09:00 am", value: 1 },
              { hour: "10:00 am", value: 0 },
              { hour: "11:00 am", value: 2 },
              { hour: "12:00 pm", value: 1 },
              { hour: "01:00 pm", value: 0 },
              { hour: "02:00 pm", value: 2 },
              { hour: "03:00 pm", value: 1 },
              { hour: "04:00 pm", value: 0 },
              { hour: "05:00 pm", value: 2 },
              { hour: "06:00 pm", value: 1 },
              { hour: "07:00 pm", value: 0 },
              { hour: "08:00 pm", value: 2 },
              { hour: "09:00 pm", value: 1 },
              { hour: "10:00 pm", value: 0 },
              { hour: "11:00 pm", value: 2 },
            ]}
          />
        )}
      </CardContent>
    </Card>
  );
};

export default TrafficTimeCard;
