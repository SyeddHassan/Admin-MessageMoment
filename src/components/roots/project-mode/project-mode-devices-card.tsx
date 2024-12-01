import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DoughnutChart02 } from "@/components/partials/doughnut-charts";

const ProjectModeDevicesCard = () => {
  return (
    <Card
      id="ProjectModeDevicesSection"
      className="w-full h-full !rounded-[0.5rem] !card-box-shadow lg:col-span-1 md:col-span-2 col-span-1"
    >
      <CardHeader className="py-6 border-b border-border">
        {/* CARD HEADING */}
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px]">
          Project Mode by Device
        </CardTitle>
      </CardHeader>

      {/* PROJECT MODE BY DEVICES CHART */}
      <CardContent className="lg:pb-12 pb-[5rem] h-full flex-center mx-auto">
        <DoughnutChart02
          chartData={[
            { label: "Mobile", percentage: 30, color: "#EA7CCC" },
            { label: "Desktop", percentage: 20, color: "#9A60B4" },
            { label: "Others", percentage: 50, color: "#7DCEA0" },
          ]}
        />
      </CardContent>
    </Card>
  );
};

export default ProjectModeDevicesCard;
