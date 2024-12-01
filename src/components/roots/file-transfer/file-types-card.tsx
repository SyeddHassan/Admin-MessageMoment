import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PieChart from "@/components/partials/pie-chart";

const FileTypesCard = () => {
  return (
    <Card
      id="FileTypesSection"
      className="w-full !rounded-[0.5rem] !card-box-shadow md:col-span-2 col-span-1"
    >
      <CardHeader className="py-6 border-b border-border">
        {/* CARD HEADING */}
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px]">
          Files by Type
        </CardTitle>
      </CardHeader>

      {/* FILE TYPES PIE CHART */}
      <CardContent className="w-full lg:h-[600px] h-[400px] py-8">
        <PieChart
          chartId="FileTypesPieChart"
          data={[
            { category: "Image", value: 501.9, color: "#34a853" },
            { category: "Audio", value: 301.9, color: "#fbbc05" },
            {
              category: "Zip",
              value: 201.1,
              color: "#ea4335",
            },
            {
              category: "Video",
              value: 165.8,
              color: "#4285f4",
            },
            { category: "Documents", value: 139.9, color: "#ff6f00" },
            { category: "Other", value: 139.9, color: "#f02f1d" },
          ]}
        />
      </CardContent>
    </Card>
  );
};

export default FileTypesCard;
