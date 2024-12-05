import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartJsPieChart01 } from "@/components/charts/chartjs-pie-charts";

const FileTypesCard = () => {
  return (
    <Card
      id="FileTypesSection"
      className="!standard-card-styling md:col-span-2 col-span-1 lg:order-1 md:order-3 order-1"
    >
      <CardHeader className="py-6 border-b border-border">
        {/* CARD HEADING */}
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px]">
          Files by Type
        </CardTitle>
      </CardHeader>

      {/* FILE TYPES PIE CHART */}
      <CardContent className="mx-auto md:w-[80%] w-full py-8">
        <ChartJsPieChart01
          chartData={[
            { label: "Image", percentage: 50, color: "#2285f2" },
            { label: "Audio", percentage: 30, color: "#d83b82" },
            { label: "Zip", percentage: 20, color: "#ab40e8" },
            { label: "Video", percentage: 16, color: "#5e37ed" },
            { label: "Documents", percentage: 13, color: "#4dd992" },
            { label: "Other", percentage: 19, color: "#f02f1d" },
          ]}
        />
      </CardContent>
    </Card>
  );
};

export default FileTypesCard;
