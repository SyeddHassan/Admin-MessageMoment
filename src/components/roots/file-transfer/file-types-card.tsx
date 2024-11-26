import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart } from "@/components/partials/pie-chart";

const FileTypesCard = () => {
  return (
    <Card
      id="FileTypesSection"
      className="w-full h-full !rounded-[0.5rem] !card-box-shadow lg:col-span-2 md:col-span-4 col-span-1 lg:order-1 md:order-3 order-1"
    >
      <CardHeader className="py-6 border-b border-border">
        {/* CARD HEADING */}
        <CardTitle className="lg:text-[1rem] lg:leading-[18px] text-[14px] leading-[16px] font-inter text-heading-color font-medium">
          Files By Type
        </CardTitle>
      </CardHeader>

      {/* FILE TYPES PIE CHART */}
      <CardContent className="lg:pb-12 pb-[5rem] md:w-[70%] h-full flex-center mx-auto">
        <PieChart
          data={[
            { label: "Audio", value: 16, color: "#4CAF50" },
            { label: "Image", value: 18, color: "#FFC107" },
            { label: "Video", value: 16, color: "#F44336" },
            { label: "Document", value: 15, color: "#2196F3" },
            { label: "Zip", value: 15, color: "#9C27B0" },
            { label: "Other", value: 20, color: "#FF9800" },
          ]}
        />
      </CardContent>
    </Card>
  );
};

export default FileTypesCard;
