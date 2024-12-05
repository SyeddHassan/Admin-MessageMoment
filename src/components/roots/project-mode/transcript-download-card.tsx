import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartJsDoughnutChart01 } from "@/components/charts/chartjs-doughnut-charts";

const TranscriptDownloadCard = () => {
  return (
    <Card
      id="TranscriptDownloadSection"
      className="!standard-card-styling col-span-1"
    >
      <CardHeader className="py-6 border-b border-border">
        {/* CARD HEADING */}
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px]">
          Transcript Download
        </CardTitle>
      </CardHeader>

      {/* TRANSCRIPT DOWNLOAD DOUGHNUT CHART */}
      <CardContent className="lg:pb-12 pb-[5rem] h-full flex-center mx-auto">
        <ChartJsDoughnutChart01
          label="Downloads"
          percentage={39}
          backgroundColor={["#2196F3", "#f2f2f2"]}
        />
      </CardContent>
    </Card>
  );
};

export default TranscriptDownloadCard;
