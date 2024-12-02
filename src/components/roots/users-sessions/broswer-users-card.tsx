import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart01 } from "@/components/partials/pie-charts";

const BroswerUsersCard = () => {
  return (
    <Card
      id="BroswerUsersSection"
      className="w-full !rounded-[0.5rem] !card-box-shadow lg:col-span-1 md:col-span-4 col-span-1 lg:order-2 md:order-3 order-2"
    >
      <CardHeader className="py-6 border-b border-border">
        {/* CARD HEADING */}
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px]">
          Users by Browser
        </CardTitle>
      </CardHeader>

      {/* BROWSER USERS PIE CHART */}
      <CardContent className="py-4 mx-auto lg:w-full md:w-[70%]">
        <PieChart01
          chartData={[
            { label: "Chrome", percentage: 20, color: "#A5D6A7" },
            { label: "Safari", percentage: 25, color: "#90CAF9" },
            { label: "Firefox", percentage: 15, color: "#E6EE9C" },
            { label: "Explorer", percentage: 15, color: "#FFCC80" },
            { label: "Other", percentage: 20, color: "#B39DDB" },
          ]}
        />
      </CardContent>
    </Card>
  );
};

export default BroswerUsersCard;
