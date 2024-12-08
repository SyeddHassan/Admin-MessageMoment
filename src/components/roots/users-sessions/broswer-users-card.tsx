import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartJsPieChart01 } from "@/components/charts/chartjs-pie-charts";

const BroswerUsersCard = () => {
  return (
    <Card
      id="BroswerUsersSection"
      className="!standard-card-styling lg:col-span-1 md:col-span-4 col-span-1 lg:order-2 md:order-3 order-2"
    >
      <CardHeader className="py-6 border-b border-border">
        {/* CARD HEADING */}
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px]">
          Users by Browser
        </CardTitle>
      </CardHeader>

      {/* BROWSER USERS PIE CHART */}
      <CardContent className="py-4 mx-auto lg:h-[500px] lg:flex-center max-lg:py-12">
        <ChartJsPieChart01
          chartData={[
            { label: "Chrome", percentage: 20, color: "#2285f2" },
            { label: "Safari", percentage: 25, color: "#d83b82" },
            { label: "Firefox", percentage: 15, color: "#ab40e8" },
            { label: "Explorer", percentage: 15, color: "#5e37ed" },
            { label: "Other", percentage: 20, color: "#4dd992" },
          ]}
        />
      </CardContent>
    </Card>
  );
};

export default BroswerUsersCard;
