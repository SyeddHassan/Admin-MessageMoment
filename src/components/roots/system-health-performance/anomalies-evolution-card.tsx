"use client";

import React from "react";
import dynamic from "next/dynamic";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Loading from "@/components/partials/loader";
const AmChartsLineChart02 = dynamic(
  () =>
    import("../../charts/amcharts-line-charts").then(
      (mod) => mod.AmChartsLineChart02
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

const AnomaliesEvolutionCard = () => {
  return (
    <Card
      id="AnomaliesEvolutionSection"
      className="!standard-card-styling"
    >
      <CardHeader className="py-6 border-b border-border">
        {/* CARD HEADING */}
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px]">
          Anomalies Evolution
        </CardTitle>
      </CardHeader>

      {/* ANNOMALIES EVOLUTION LINE CHART */}
      <CardContent className="py-8 pb-12 h-[550px] max-md:px-2">
        <AmChartsLineChart02
          chartId="AnomaliesEvolutionChart"
          data={[
            { date: "2024-01-01", value: 150 },
            { date: "2024-02-01", value: 60 },
            { date: "2024-03-01", value: 30 },
            { date: "2024-04-01", value: 25 },
            { date: "2024-05-01", value: 35 },
            { date: "2024-06-01", value: 20 },
          ]}
        />
      </CardContent>
    </Card>
  );
};

export default AnomaliesEvolutionCard;
