"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";

import { AmChartsHeatmapData } from "@/constants/audience-traffic-page-components-data";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FilterButtons04 } from "@/components/partials/filter-buttons";
import Loading from "@/components/partials/loader";
const AmChartsHeatmap = dynamic(
  () =>
    import("../../maps/amcharts-heatmap").then((mod) => mod.AmChartsHeatmap),
  {
    ssr: false,
    loading: () => (
      <Loading
        Icon={LoaderCircle}
        iconClassName="w-[50px] h-[50px] text-secondary-theme animate-spin"
        containerClassName="w-full h-full"
      />
    ),
  }
);
const AmChartsBarChart06 = dynamic(
  () =>
    import("../../charts/amcharts-bar-charts").then(
      (mod) => mod.AmChartsBarChart06
    ),
  {
    ssr: false,
    loading: () => (
      <Loading
        Icon={LoaderCircle}
        iconClassName="w-[50px] h-[50px] text-secondary-theme animate-spin"
        containerClassName="w-full h-full"
      />
    ),
  }
);

import { LoaderCircle } from "lucide-react";

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
        {selectedTab === "heatmap" ? (
          <AmChartsHeatmap
            chartId="RealTimeMonitoringHeatmap"
            data={AmChartsHeatmapData()}
          />
        ) : (
          <AmChartsBarChart06
            chartId="RealTimeMonitoringBarChart"
            data={[
              { hour: "12am", sessions: 1 },
              { hour: "1am", sessions: 0 },
              { hour: "2am", sessions: 0 },
              { hour: "3am", sessions: 5 },
              { hour: "4am", sessions: 1 },
              { hour: "5am", sessions: 1 },
              { hour: "6am", sessions: 1 },
              { hour: "7am", sessions: 6 },
              { hour: "8am", sessions: 1 },
              { hour: "9am", sessions: 1 },
              { hour: "10am", sessions: 8 },
              { hour: "11am", sessions: 1 },
              { hour: "12pm", sessions: 1 },
              { hour: "1pm", sessions: 9 },
              { hour: "2pm", sessions: 1 },
              { hour: "3pm", sessions: 2 },
              { hour: "4pm", sessions: 1 },
              { hour: "5pm", sessions: 2 },
              { hour: "6pm", sessions: 3 },
              { hour: "7pm", sessions: 1 },
              { hour: "8pm", sessions: 1 },
              { hour: "9pm", sessions: 1 },
              { hour: "10pm", sessions: 7 },
              { hour: "11pm", sessions: 1 },
            ]}
          />
        )}
      </CardContent>
    </Card>
  );
};

export default TrafficTimeDaysCard;
