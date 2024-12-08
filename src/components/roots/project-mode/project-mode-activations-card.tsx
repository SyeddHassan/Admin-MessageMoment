"use client";

import React from "react";
import dynamic from "next/dynamic";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Loading from "@/components/partials/loader";
const AmChartsBarChart03 = dynamic(
  () =>
    import("../../charts/amcharts-bar-charts").then(
      (mod) => mod.AmChartsBarChart03
    ),
  {
    ssr: false,
    loading: () => (
      <Loading
        Icon={LoaderCircle}
        iconClassName="w-[50px] h-[50px] text-secondary-theme animate-spin"
        containerClassName="w-full h-full"
      />
    ),
  }
);

import { LoaderCircle } from "lucide-react";

const ProjectModeActivationsCard = () => {
  return (
    <Card id="ProjectModeActivationsSection" className="!standard-card-styling">
      <CardHeader className="py-6 border-b border-border">
        {/* CARD HEADING */}
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px]">
          Project Mode Activations
        </CardTitle>
      </CardHeader>

      {/* PROJECT MODE ACTIVATION BAR CHART */}
      <CardContent className="py-8 h-[650px] max-md:px-2">
        <AmChartsBarChart03
          chartId="ProjectModeActivations"
          data={[
            { month: "Feb", sessions: 90, activations: 40 },
            { month: "Mar", sessions: 80, activations: 30 },
            { month: "Apr", sessions: 100, activations: 50 },
            { month: "May", sessions: 90, activations: 40 },
            { month: "Jun", sessions: 85, activations: 45 },
            { month: "Jul", sessions: 95, activations: 50 },
            { month: "Aug", sessions: 100, activations: 55 },
            { month: "Sep", sessions: 110, activations: 60 },
            { month: "Oct", sessions: 95, activations: 50 },
          ]}
        />
      </CardContent>
    </Card>
  );
};

export default ProjectModeActivationsCard;
