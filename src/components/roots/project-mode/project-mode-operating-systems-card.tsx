import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DoughnutChart02 } from "@/components/partials/doughnut-charts";

const ProjectModeOperatingSystemsCard = () => {
  return (
    <Card
      id="ProjectModeOperatingSystems"
      className="w-full h-full !rounded-[0.5rem] !card-box-shadow lg:col-span-1 md:col-span-2 col-span-1"
    >
      <CardHeader className="py-6 border-b border-border">
        {/* CARD HEADING */}
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px]">
          Project Mode by Operation System
        </CardTitle>
      </CardHeader>

      {/* PROJECT MODE BY OPERATING SYSTEMS CHART */}
      <CardContent className="pb-12 h-full flex-center mx-auto">
        <DoughnutChart02
          chartData={[
            { label: "Mac", percentage: 70, color: "#E74C3C" },
            { label: "Windows", percentage: 15, color: "#2196F3" },
            { label: "Other OS", percentage: 15, color: "#FF9800" },
          ]}
        />
      </CardContent>
    </Card>
  );
};

export default ProjectModeOperatingSystemsCard;
