"use client";

import React from "react";
import dynamic from "next/dynamic";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Loading from "@/components/partials/loader";
const AmChartsBarChart04 = dynamic(
  () =>
    import("../../charts/amcharts-bar-charts").then(
      (mod) => mod.AmChartsBarChart04
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
import { AmChartsBarChart07 } from "../../charts/amcharts-bar-charts";
import { ChartJsBarChart04 } from "@/components/charts/chartjs-bar-charts";

const PageVisitsCard = () => {
  return (
    <Card id="PageVisitsSection" className="!standard-card-styling col-span-1">
      <CardHeader className="py-6 border-b border-border">
        {/* CARD HEADING */}
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px]">
          Page Visits
        </CardTitle>
      </CardHeader>

      {/* PAGE VISITS BAR CHART */}
      <CardContent className="py-4 h-[500px] max-md:px-2">
        <ChartJsBarChart04
          data={{
            labels: [
              "Homepage",
              "Chat Session",
              "FAQS",
              "Privacy",
              "Terms of Use",
              "Contact Page",
            ],
            values: [68, 55, 27, 26, 24, 17],
          }}
        />
      </CardContent>
    </Card>
  );
};

export default PageVisitsCard;
