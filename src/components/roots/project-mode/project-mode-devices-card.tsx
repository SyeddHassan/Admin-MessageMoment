import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartJsDoughnutChart02 } from "@/components/charts/chartjs-doughnut-charts";

const ProjectModeDevicesCard = () => {
  return (
    <Card
      id="ProjectModeDevicesSection"
      className="!standard-card-styling lg:col-span-1 md:col-span-2 col-span-1"
    >
      <CardHeader className="py-6 border-b border-border">
        {/* CARD HEADING */}
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px]">
          Project Mode by Device
        </CardTitle>
      </CardHeader>

      {/* PROJECT MODE BY DEVICES CHART */}
      <CardContent className="py-4 mx-auto lg:h-[500px] lg:flex-center max-lg:py-12">
        <ChartJsDoughnutChart02
          chartData={[
            { label: "Mobile", percentage: 30, color: "#5ebce1" },
            { label: "Desktop", percentage: 20, color: "#3a56af" },
            { label: "Others", percentage: 50, color: "#ab40e8" },
          ]}
        />
      </CardContent>
    </Card>
  );
};

export default ProjectModeDevicesCard;
