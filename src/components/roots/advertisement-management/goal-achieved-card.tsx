"use client";

import React from "react";
import { useTheme } from "next-themes";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartJsDoughnutChart01 } from "@/components/charts/chartjs-doughnut-charts";

const GoalAchievedCard = () => {
  const { theme } = useTheme();
  const isDarkTheme = theme === "dark";

  return (
    <Card
      id="GoalAchievedSection"
      className="!standard-card-styling col-span-1"
    >
      <CardHeader className="lg:py-[30px] py-6 border-b border-border">
        {/* CARD HEADING */}
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px]">
          Global Objetive (Achieved)
        </CardTitle>
      </CardHeader>

      {/* GOAL ACHIEVED DOUGHNUT CHART */}
      <CardContent className="h-full max-lg:pb-[5rem] w-full flex-center mx-auto">
        <ChartJsDoughnutChart01
          backgroundColor={[
            "#f04c3d",
            `${isDarkTheme ? "#121212" : "#f2f2f2"}`,
          ]}
          label="Global Achieved"
          labelColor="text-[#f04c3d]"
          percentage={50}
        />
      </CardContent>
    </Card>
  );
};

export default GoalAchievedCard;
