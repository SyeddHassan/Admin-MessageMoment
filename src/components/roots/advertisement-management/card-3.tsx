"use client";

import React from "react";
import { useTheme } from "next-themes";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartJsDoughnutChart01 } from "@/components/charts/chartjs-doughnut-charts";

const Card3 = () => {
  const { theme } = useTheme();
  const isDarkTheme = theme === "dark";

  return (
    <Card id="Card3Section" className="!standard-card-styling col-span-1">
      <CardHeader className="lg:py-[30px] py-6 border-b border-border">
        {/* CARD HEADING */}
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px]">
          Card 3
        </CardTitle>
      </CardHeader>

      {/* CARD 3 DOUGHNUT CHART */}
      <CardContent className="h-full max-lg:pb-[5rem] w-full flex-center mx-auto">
        <ChartJsDoughnutChart01
          backgroundColor={[
            "#f04c3d",
            `${isDarkTheme ? "#121212" : "#f2f2f2"}`,
          ]}
          label="Card 3"
          labelColor="text-[#f04c3d]"
          percentage={70}
        />
      </CardContent>
    </Card>
  );
};

export default Card3;
