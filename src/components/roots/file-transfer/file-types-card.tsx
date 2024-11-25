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
            { label: "Audio", value: 16, color: "#f02f1d" },
            { label: "Image", value: 18, color: "#2285f2" },
            { label: "Video", value: 16, color: "#d83b82" },
            { label: "Document", value: 15, color: "#ab40e8" },
            { label: "Zip", value: 15, color: "#5e37ed" },
            { label: "Other", value: 20, color: "#4dd992" },
          ]}
        />
      </CardContent>
    </Card>
  );
};

export default FileTypesCard;
