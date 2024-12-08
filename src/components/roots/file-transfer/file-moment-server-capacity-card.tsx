"use client";

import React from "react";
import { useTheme } from "next-themes";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartJsDoughnutChart01 } from "@/components/charts/chartjs-doughnut-charts";

const FileMomentServerCapacityCard = () => {
  const { theme } = useTheme();
  const isDarkTheme = theme === "dark";

  return (
    <Card
      id="FileMomentServerCapacitySection"
      className="!standard-card-styling col-span-1"
    >
      <CardHeader className="py-6 border-b border-border">
        {/* CARD HEADING */}
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px]">
          Server Capacity (FileMoment)
        </CardTitle>
      </CardHeader>

      {/* FILEMOMENT SERVER CAPACITY DOUGHNUT CHART */}
      <CardContent className="h-[500px] flex-center mx-auto">
        <ChartJsDoughnutChart01
          backgroundColor={[
            "#f04c3d",
            `${isDarkTheme ? "#121212" : "#f2f2f2"}`,
          ]}
          label="Server Space (Capacity)"
          labelColor="text-[#f04c3d]"
          percentage={54}
        />
      </CardContent>
    </Card>
  );
};

export default FileMomentServerCapacityCard;
