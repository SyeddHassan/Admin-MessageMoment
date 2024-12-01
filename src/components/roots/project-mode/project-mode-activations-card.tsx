import React from "react";

import { ProjectModeActivationsData } from "@/constants/project-mode-page";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart01 } from "@/components/partials/bar-charts";

const ProjectModeActivationsCard = () => {
  return (
    <Card
      id="ProjectModeActivationsSection"
      className="w-full !rounded-[0.5rem] !card-box-shadow"
    >
      <CardHeader className="py-6 border-b border-border">
        {/* CARD HEADING */}
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px]">
          Project Mode Activations
        </CardTitle>
      </CardHeader>

      {/* PROJECT MODE ACTIVATION BAR CHART */}
      <CardContent className="py-8 h-[650px] max-md:px-2">
        <BarChart01
          chartId="ProjectModeActivations"
          data={ProjectModeActivationsData}
        />
      </CardContent>
    </Card>
  );
};

export default ProjectModeActivationsCard;
