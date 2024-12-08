"use client";

import React from "react";
import { useTheme } from "next-themes";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartJsDoughnutChart01 } from "@/components/charts/chartjs-doughnut-charts";

const AvgUsersChatRoomCard = () => {
  const { theme } = useTheme();
  const isDarkTheme = theme === "dark";

  return (
    <Card
      id="UserAverageChatRoomSection"
      className="!standard-card-styling col-span-1"
    >
      <CardHeader className="py-6 border-b border-border">
        {/* CARD HEADING */}
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px]">
          Avg. Users by Chat Room
        </CardTitle>
      </CardHeader>

      {/* USER AVERAGE CHAT ROOM DOUGHNUT CHART */}
      <CardContent className="md:h-[500px] h-full max-md:pb-[5rem] flex-center mx-auto">
        <ChartJsDoughnutChart01
          backgroundColor={[
            "#f04c3d",
            `${isDarkTheme ? "#121212" : "#f2f2f2"}`,
          ]}
          label="Avg. Users: 7/10"
          labelColor="text-[#f04c3d]"
          percentage={70}
        />
      </CardContent>
    </Card>
  );
};

export default AvgUsersChatRoomCard;
